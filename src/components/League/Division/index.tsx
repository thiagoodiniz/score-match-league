import React from 'react';
import DivisionTable from './DivisionTable';
import DivisionMatches from './DivisionMatches';
import { Division } from '../../../store/ducks/league/types';

interface Props {
    division: Division
}

const LeagueDivision: React.FC<Props> = ({ division }) => {
    return(
        <div>
            <h2>Divisão: { division.division }</h2>

            <DivisionTable divisionPlayers={ division.players } />
            <DivisionMatches />
        </div>
    );
}

export default LeagueDivision;