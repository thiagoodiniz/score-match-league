import React, { Component } from 'react';
import { DivisionMatch, DivisionPlayer } from '../../../../store/ducks/league/types';
import { DivisionMatchesContainer, RoundController } from './DivisionMatchesStyles';
import Match from './Match/Match';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

interface Props {
    divisionMatches: DivisionMatch[];
    numberOfRounds: number;
    getPlayer(idPlayer: number): DivisionPlayer;
    isSimulation?: boolean;
}

interface State {
    currentRound: number
}

class DivisionMatches extends Component<Props, State> {

    state = {
        currentRound: 1,
    }

    increaseRound = () => {
        this.setState({
            currentRound: this.state.currentRound + 1,
        })
    }
    
    decreaseRound = () => {
        this.setState({
            currentRound: this.state.currentRound - 1,
        })
    }

    canIncreaseRound = () => {
        return this.state.currentRound < this.props.numberOfRounds;
    }


    canDecreaseRound = () => {
        return this.state.currentRound > 1;
    }
    
    render(){
        const { divisionMatches, getPlayer, isSimulation = false } = this.props;
        const { currentRound } = this.state;
        return(
            <DivisionMatchesContainer>

                <RoundController>
                    <button className={ !this.canDecreaseRound() ? 'hide' : '' } onClick={ this.canDecreaseRound() ? () => this.decreaseRound() : undefined } >
                        <ChevronLeftIcon fontSize="large"/>
                    </button>

                    <span >Rodada { currentRound }</span>

                    <button className={ !this.canIncreaseRound() ? 'hide' : '' }  onClick={ this.canIncreaseRound() ? () => this.increaseRound() : undefined } >
                        <ChevronRightIcon fontSize="large" />
                    </button>
                </RoundController>

                { divisionMatches.filter(match => match.round === currentRound).map((match, idx) => 
                    <Match key={idx} player1={ getPlayer(match.idPlayer1) } player2={ getPlayer(match.idPlayer2) } match={match} isSimulation={ isSimulation } />
                ) }
            </DivisionMatchesContainer>
        );

    }
}

export default DivisionMatches;