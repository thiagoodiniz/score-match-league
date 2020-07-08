import React from 'react';
import DivisionTable from './DivisionTable';
import DivisionMatches from './DivisionMatches/DivisionMatches';
import { Division, DivisionPlayer } from '../../../store/ducks/league/types';
import { LeagueDivisionCard } from './styles';

interface Props {
    division: Division
}

const LeagueDivision: React.FC<Props> = ({ division }) => {

    const getPlayer = (idPlayer: number): DivisionPlayer => {
        const idx = division.players.findIndex(player => player.id === idPlayer); 
        return division.players[idx];
    }

    return(
        <div>
            <h2>Divisão: { division.division }</h2>
            <LeagueDivisionCard>

                <DivisionTable divisionPlayers={ division.players } />

                { division.divisionMatches.length > 0 &&
                    <DivisionMatches divisionMatches={ division.divisionMatches } getPlayer={ getPlayer } />
                }
                
            </LeagueDivisionCard>
        </div>
    );
}

export default LeagueDivision;