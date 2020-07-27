import React from 'react';
import { DivisionPlayer } from '../../../../store/ducks/league/types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

interface Props {
    divisionPlayers : DivisionPlayer[];
}

const DivisionTable: React.FC<Props> = ({divisionPlayers}) => {

    return(
        <div style={{width: '50%' }}>
            <Table aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell align="right">P</TableCell>
                    <TableCell align="right">J</TableCell>
                    <TableCell align="right">V</TableCell>
                    <TableCell align="right">E</TableCell>
                    <TableCell align="right">D</TableCell>
                    <TableCell>GP</TableCell>
                    <TableCell>GC</TableCell>
                    <TableCell>SG</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                { divisionPlayers.map((player, idx) => (
                    <TableRow key={idx}>
                        <TableCell>{ idx + 1 }</TableCell>
                        <TableCell align="left" component="th" scope="row">
                            { player.name }
                        </TableCell>
                        <TableCell align="right">{player.stats?.points}</TableCell>
                        <TableCell align="right">{player.stats?.completedMatches}</TableCell>
                        <TableCell align="right">{player.stats?.wins}</TableCell>
                        <TableCell align="right">{player.stats?.draws}</TableCell>
                        <TableCell align="right">{player.stats?.loses}</TableCell>
                        <TableCell align="center">{player.stats?.scoredGoals}</TableCell>
                        <TableCell align="center">{player.stats?.concededGoals}</TableCell>
                        <TableCell align="center">{player.stats?.goalDifference}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </div>
    );
}

export default DivisionTable;