import React from 'react';
import DivisionTable from './DivisionTable';
import DivisionMatches from './DivisionMatches';
import { Division } from '../../../store/ducks/league/types';
import { LeagueDivisionCard } from './styles';

interface Props {
    division: Division
}

const LeagueDivision: React.FC<Props> = ({ division }) => {
    return(
        <div>
            <h2>Divisão: { division.division }</h2>
            <LeagueDivisionCard>
                <DivisionTable divisionPlayers={ division.players } />
                <DivisionMatches />
            </LeagueDivisionCard>
        </div>
    );
}

export default LeagueDivision;