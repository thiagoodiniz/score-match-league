import React, { Component } from 'react';
import LeagueDivision from './Division';
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
        const { league } = this.props.league;
        return(
            <div>
                <h1>{ league?.name }</h1>
                { league?.divisions.map((division, idx) => 
                    <LeagueDivision key={idx} division={ division } />
                ) }
            </div>
        );
    }
}

const mapStateToProps = (state: ApplicationState) => ({
    league: state.league,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(LeagueActions , dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(League);