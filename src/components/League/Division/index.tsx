import React from 'react';
import DivisionTable from './DivisionTable';
import DivisionMatches from './DivisionMatches/DivisionMatches';
import { Division, DivisionPlayer } from '../../../store/ducks/league/types';
import { LeagueDivisionCard } from './styles';
import AddDivisionPlayers from './addPlayers';
import { ApplicationState } from '../../../store';
import { Player } from '../../../store/ducks/players/types';

interface Props {
    division: Division;
    players: Player[];
}

const LeagueDivision: React.FC<Props> = ({ division, players }) => {

    const getPlayer = (idPlayer: number): DivisionPlayer => {
        const idx = division.players.findIndex(player => player.id === idPlayer); 
        return division.players[idx];
    }

    return(
        <div>
            <h2>Divisão: { division.division }</h2>
            <LeagueDivisionCard>

                { division.players.length > 0 
                    ?
                        <>
                            <DivisionTable divisionPlayers={ division.players } />

                            { division.divisionMatches.length > 0 &&
                                <DivisionMatches divisionMatches={ division.divisionMatches } getPlayer={ getPlayer } />
                            }
                        </>
                    : 
                        <>
                            <AddDivisionPlayers players={ players } />
                        </>
                }
                
            </LeagueDivisionCard>
        </div>
    );
}

export default LeagueDivision;