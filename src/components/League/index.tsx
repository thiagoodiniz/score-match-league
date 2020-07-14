import React, { Component } from 'react';
import LeagueDivision from './Division';
import { connect } from 'react-redux';
import { ApplicationState } from '../../store';
import { Dispatch, bindActionCreators } from 'redux';
import * as LeagueActions from '../../store/ducks/league/actions';
import * as PlayerActions from '../../store/ducks/players/actions';
import { LeagueState, Division } from '../../store/ducks/league/types';
import { Player } from '../../store/ducks/players/types';

interface Props {
    loadLeague(): void;
    loadPlayers(): void;
    addDivisionPlayers(leagueId: number, leagueDivisionId: number, playerIds: number[]): void;
    league: LeagueState;
    players: Player[];
}

class League extends Component<Props> {

    componentDidMount = () => { 
        this.props.loadLeague();
        this.props.loadPlayers();
    }

    addDivisionPlayers = (leagueId: number, playerIds: number[], division: Division) => {
        this.props.addDivisionPlayers(leagueId, division.leagueDivisionId, playerIds );
    }

    render(){
        const { league } = this.props.league;
        const { players } = this.props;
        return(
            <div>
                <h1>{ league?.name }</h1>
                { league?.divisions.map((division, idx) => 
                    <LeagueDivision key={idx} players={ players } division={ division } addDivisionPlayers={ (playerIds: number[]) => this.addDivisionPlayers(league.id, playerIds, division) } />
                ) }
            </div>
        );
    }
}

const mapStateToProps = (state: ApplicationState) => ({
    league: state.league,
    players: state.players.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({...LeagueActions, ...PlayerActions} , dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(League);