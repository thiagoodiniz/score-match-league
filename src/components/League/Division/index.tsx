import React, { Component } from 'react';
import DivisionTable from './DivisionTable';
import DivisionMatches from './DivisionMatches/DivisionMatches';
import { Division, DivisionPlayer, DivisionMatch } from '../../../store/ducks/league/types';
import { LeagueDivisionCard } from './styles';
import AddDivisionPlayers from './addPlayers';
import { Player } from '../../../store/ducks/players/types';
import { Button } from '@material-ui/core';

// interface DivisionMatches {
//     leagueId: number | null;
//     leagueDivisionId: number;
//     rounds: Round[];
// }

// type Round = Match[]

interface SimulatedMatch {
    round: number;
    idLeagueDivisionPlayer1: number;
    idLeagueDivisionPlayer2: number;
}
interface Props {
    division: Division;
    players: Player[]; // @TODO: Mudar para allPlayers
    addDivisionPlayers(playerIds: number[] ): void;
}

interface State {
    sortingMatches: boolean;
    simulatedMatches: SimulatedMatch[];
}

class LeagueDivision extends Component<Props, State> {

    state = {
        sortingMatches: false,
        simulatedMatches: [],
    }
    
    getPlayer = (idLeagueDivisionPlayer: number): DivisionPlayer => {
        const idx = this.props.division.players.findIndex(player => player.idLeagueDivisionPlayer === idLeagueDivisionPlayer); 
        return this.props.division.players[idx];
    }
    
    // Ordena aleatoriamente os players
    shufflePlayers(players: DivisionPlayer[]) {
        for (let i = players.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [players[i], players[j]] = [players[j], players[i]];
        }
        return players;
        
    }

    createDivisionMatches = () => {
        
        const { division } = this.props;
        this.setState({ sortingMatches: true })

        const numberOfRounds = division.numberOfPlayers - 1;
        const matchesPerRounds = division.numberOfPlayers / 2;

        const divisionPlayers = this.shufflePlayers(
            JSON.parse(JSON.stringify(division.players)) // copy players without reference
        )

        const matches: SimulatedMatch[] = [];

        function addMatch(round: number, idLeagueDivisionPlayer1: number, idLeagueDivisionPlayer2: number) {
            const match: SimulatedMatch = {
                round,
                idLeagueDivisionPlayer1,
                idLeagueDivisionPlayer2,
            }

            matches.push(match);
        }

        for(let i=0; i<numberOfRounds; i++){
            
            const currentRound = i+1;
            let leagueDivisionPlayerIds = divisionPlayers.map(pl => pl.idLeagueDivisionPlayer);
            
            if(matches.length === 0){
                for(let i=0; i<matchesPerRounds; i++){
                    const player1 = leagueDivisionPlayerIds[0];
                    const player2 = leagueDivisionPlayerIds[ leagueDivisionPlayerIds.length - 1 ];

                    addMatch(currentRound, player1, player2);

                    leagueDivisionPlayerIds = leagueDivisionPlayerIds.filter(id =>  id !== player1 && id !== player2);
                }

            } else {
                
                const lastRoundMatches = matches.filter(match => match.round === currentRound - 1);
                
                let lastRoundPlayerIds: number[]= [];
                lastRoundMatches.map(match => {
                    lastRoundPlayerIds.push(match.idLeagueDivisionPlayer1);
                    lastRoundPlayerIds.push(match.idLeagueDivisionPlayer2);
                });

                if(currentRound % 2 == 0){ // rodada PAR
                    for(let i=0; i<matchesPerRounds; i++){
                        let player1 = 0, player2 = 0;

                        if(i == 0){
                            player2 = lastRoundPlayerIds[ lastRoundPlayerIds.length -1 ];
                            leagueDivisionPlayerIds = leagueDivisionPlayerIds.filter(id => id !== player2);
    
                            player1 = leagueDivisionPlayerIds[ leagueDivisionPlayerIds.length -1 ];
                        } else {
                            player1 = lastRoundPlayerIds[ lastRoundPlayerIds.length -2 ];
                            player2 = lastRoundPlayerIds[ lastRoundPlayerIds.length -1 ];
                        }
                        
                        addMatch(currentRound, player1, player2);
                    
                        leagueDivisionPlayerIds = leagueDivisionPlayerIds.filter(id => id !== player1 && id !== player2);
                        lastRoundPlayerIds = lastRoundPlayerIds.filter(id => id !== player1 && id !== player2);

                    }

                } else { // rodada ÍMPAR
                    for(let i=0; i<matchesPerRounds; i++){
                        let player1 = 0, player2 = 0;

                        if(i === 0){
                            player1 = lastRoundPlayerIds[ lastRoundPlayerIds.length -1 ];
                            leagueDivisionPlayerIds = leagueDivisionPlayerIds.filter(id => id !== player1);
    
                            player2 = leagueDivisionPlayerIds[ leagueDivisionPlayerIds.length -1 ];
                        } else {
                            player1 = lastRoundPlayerIds[ lastRoundPlayerIds.length -2 ];
                            player2 = lastRoundPlayerIds[ lastRoundPlayerIds.length -1 ];
                        }

                        addMatch(currentRound, player1, player2);
                    
                        leagueDivisionPlayerIds = leagueDivisionPlayerIds.filter(id => id !== player1 && id !== player2);
                        lastRoundPlayerIds = lastRoundPlayerIds.filter(id => id !== player1 && id !== player2);
                    }
                }
            }
        }
        
        this.setState({ simulatedMatches: matches });
    }

    
    getSortedDivisionMatches(): DivisionMatch[] {
        const simulatedDivisionMatches: DivisionMatch[] = [];

        this.state.simulatedMatches.map((match: SimulatedMatch) => {

            simulatedDivisionMatches.push({
                idPlayer1: match.idLeagueDivisionPlayer1,
                idPlayer2: match.idLeagueDivisionPlayer2,
                leagueDivisionId: this.props.division.leagueDivisionId,
                round: match.round,
            });
        });

        return simulatedDivisionMatches;

    }
    
    render() {
        const { division, players } = this.props;
        return(
            <div>
                <h2>Divisão: { division.divisionDesc }</h2>
                <LeagueDivisionCard>
    
                    { division.players.length > 0 
                        ?
                            <>
                                <DivisionTable divisionPlayers={ division.players } />
    
                                { division.divisionMatches.length > 0
                                    ?
                                        <DivisionMatches divisionMatches={ division.divisionMatches } 
                                                         getPlayer={ (idPlayer: number) => this.getPlayer(idPlayer) }
                                                         numberOfRounds={ division.numberOfPlayers - 1 } />
                                    : this.state.sortingMatches 
                                        ? <DivisionMatches divisionMatches={ this.getSortedDivisionMatches() } 
                                            getPlayer={ (idPlayer: number) => this.getPlayer(idPlayer) } 
                                            numberOfRounds={ division.numberOfPlayers - 1 }
                                            isSimulation={ true } />
                                        : <Button onClick={ () => this.createDivisionMatches() }>Sortear partidas</Button>
                                }
                            </>
                        : 
                            <>
                                <AddDivisionPlayers players={ players }  
                                                    addDivisionPlayers={ (playerIds: number[]) => this.props.addDivisionPlayers( playerIds ) } />

                            </>
                    }
                    
                </LeagueDivisionCard>
            </div>
        );
    }

}

export default LeagueDivision;
