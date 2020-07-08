import React from 'react';
import { DivisionMatch, DivisionPlayer } from '../../../../store/ducks/league/types';
import { DivisionMatchesContainer } from '../styles';
import Match from './Match';


interface Props {
    divisionMatches: DivisionMatch[]
    getPlayer(idPlayer: number): DivisionPlayer;
}

const DivisionMatches: React.FC<Props> = ({divisionMatches, getPlayer}) => {

    // @TODO - dividir por rodada
    return(
        <DivisionMatchesContainer>
            { divisionMatches.filter(match => match.round === 1).map((match, idx) => 
                <Match key={idx} player1={ getPlayer(match.idPlayer1) } player2={ getPlayer(match.idPlayer2) } match={match} />
            ) }
        </DivisionMatchesContainer>
    );
}

export default DivisionMatches;