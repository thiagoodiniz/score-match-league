import React, { useState } from 'react';
import { DivisionPlayer, DivisionMatch } from '../../../../store/ducks/league/types';
import { MatchInputGoals, MatchContainer, MatchPlayer1, MatchPlayer2, MatchScoreboard } from '../styles';

interface Props {
    player1: DivisionPlayer;
    player2: DivisionPlayer;
    match: DivisionMatch;
}

const Match: React.FC<Props> = ({ player1, player2, match }) => {
    const [scoredGoalsPlayer1, setScoredGoalsPlayer1] = useState(match.scored_goals_player1 || '');
    const [scoredGoalsPlayer2, setScoredGoalsPlayer2] = useState(match.scored_goals_player2 || '');

    return(
        <MatchContainer>
            <MatchPlayer1>
                <span>
                    { `${player1.name}(${player1.uf})` }
                </span>
            </MatchPlayer1>
            <MatchScoreboard>
                <MatchInputGoals value={ scoredGoalsPlayer1 } type="number" onChange={ (e) => setScoredGoalsPlayer1(e.target.value) } />
                <MatchInputGoals value={ scoredGoalsPlayer2 } type="number" onChange={ (e) => setScoredGoalsPlayer2(e.target.value) } />
            </MatchScoreboard>
            <MatchPlayer2 className="p2">
                <span>
                    { `${player2.name}(${player2.uf})` }
                </span>
            </MatchPlayer2>
            <div>
            </div>
        </MatchContainer>
    );
}

export default Match;