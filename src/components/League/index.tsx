import React, { Component } from 'react';
import Division from './Division';
import { connect } from 'react-redux';
import { ApplicationState } from '../../store';
import { Dispatch, bindActionCreators } from 'redux';
import * as LeagueActions from '../../store/ducks/league/actions';
import { LeagueState } from '../../store/ducks/league/types';

interface Props {
    loadLeague(): void;
    league: LeagueState;
}

class League extends Component<Props> {

    componentDidMount = () => { 
        this.props.loadLeague();
    }

    render(){
        return(
            <>
                <Division />
            </>
        );
    }
}

const mapStateToProps = (state: ApplicationState) => ({
    league: state.league,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(LeagueActions , dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(League);