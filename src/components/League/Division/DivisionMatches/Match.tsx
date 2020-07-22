import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { DivisionPlayer, DivisionMatch } from '../../../../store/ducks/league/types';
import { MatchInputGoals, MatchContainer, MatchPlayer1, MatchPlayer2, MatchScoreboard, SaveMatchBtn } from '../styles';
import { saveMatch } from '../../../../store/ducks/league/actions';

interface Props {
    player1: DivisionPlayer;
    player2: DivisionPlayer;
    match: DivisionMatch;
    isSimulation: boolean;
}

const Match: React.FC<Props> = ({ player1, player2, match, isSimulation }) => {
    const dispatch = useDispatch();
    const [scoredGoalsPlayer1, setScoredGoalsPlayer1] = useState(match.scored_goals_player1 || '');
    const [scoredGoalsPlayer2, setScoredGoalsPlayer2] = useState(match.scored_goals_player2 || '');

    const canShowUpdateBtn = (): boolean => {
        if(isSimulation){
            return false;
        }

        let p1Goals = scoredGoalsPlayer1 === '' ? null : Number(scoredGoalsPlayer1);
        let p2Goals = scoredGoalsPlayer2 === '' ? null : Number(scoredGoalsPlayer2);

        return p1Goals !== match.scored_goals_player1
            || p2Goals !== match.scored_goals_player2
    }

    const onClickSaveMatch = () => {
        match.scored_goals_player1 = scoredGoalsPlayer1 === '' ? null : Number(scoredGoalsPlayer1);
        match.scored_goals_player2 = scoredGoalsPlayer2 === '' ? null : Number(scoredGoalsPlayer2);
        
        dispatch(saveMatch(match));
    }

    return(
        <MatchContainer>
            <MatchPlayer1>
                <span>
                    { `${player1.name}(${player1.uf})` }
                </span>
            </MatchPlayer1>
            <MatchScoreboard>
                <MatchInputGoals disabled={ isSimulation } value={ scoredGoalsPlayer1 } type="number" onChange={ (e) => setScoredGoalsPlayer1(e.target.value) } />
                <MatchInputGoals disabled={ isSimulation } value={ scoredGoalsPlayer2 } type="number" onChange={ (e) => setScoredGoalsPlayer2(e.target.value) } />
                { canShowUpdateBtn() && 
                    <SaveMatchBtn onClick={ onClickSaveMatch }>
                        Salvar
                    </SaveMatchBtn> }
            </MatchScoreboard>
            <MatchPlayer2>
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