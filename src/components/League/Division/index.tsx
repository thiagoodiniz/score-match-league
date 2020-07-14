import React, { Component } from 'react';
import DivisionTable from './DivisionTable';
import DivisionMatches from './DivisionMatches/DivisionMatches';
import { Division, DivisionPlayer } from '../../../store/ducks/league/types';
import { LeagueDivisionCard } from './styles';
import AddDivisionPlayers from './addPlayers';
import { Player } from '../../../store/ducks/players/types';
import { connect } from 'react-redux';

interface Props {
    division: Division;
    players: Player[];
    addDivisionPlayers(playerIds: number[] ): void;
}

class LeagueDivision extends Component<Props> {
    
    getPlayer = (idPlayer: number): DivisionPlayer => {
        const idx = this.props.division.players.findIndex(player => player.id === idPlayer); 
        return this.props.division.players[idx];
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
    
                                { division.divisionMatches.length > 0 &&
                                    <DivisionMatches divisionMatches={ division.divisionMatches } 
                                                     getPlayer={ (idPlayer: number) => this.getPlayer(idPlayer) } />
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