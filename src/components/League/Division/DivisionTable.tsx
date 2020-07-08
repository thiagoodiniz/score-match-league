import React from 'react';
import { DivisionPlayer } from '../../../store/ducks/league/types';

interface Props {
    divisionPlayers : DivisionPlayer[];
}

const DivisionTable: React.FC<Props> = ({divisionPlayers}) => {

    return(
        <div>
            DivisionTable
            <ul>
                { divisionPlayers.map((player, idx ) => <li key={idx}>{ player.name }</li>) }
            </ul>
        </div>
    );
}

export default DivisionTable;