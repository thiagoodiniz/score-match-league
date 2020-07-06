import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from '../../store';
import * as PlayerActions from '../../store/ducks/players/actions';
import { bindActionCreators, Dispatch } from 'redux';
import { Player } from '../../store/ducks/players/types';

interface StateProps {
    players: Player[];
}

interface DispatchProps {
    loadPlayers(): void;  
}

type Props = StateProps & DispatchProps;

class PlayerList extends Component<Props> {

    componentDidMount = () => {
        this.props.loadPlayers();
    }

    render(){
        const { players } = this.props;
        console.log({players})
        return(
            <ul>
            { players.map((player, idx) =>
                <li key={idx}>{ `${player.name}(${player.uf})` }</li>
            ) }
            </ul>
        );
    }
}

const mapStateToProps = (state: ApplicationState) => ({
    players: state.players.data,
  });
  
const mapDispatchToProps = ( dispatch: Dispatch ) => bindActionCreators(PlayerActions, dispatch);
  

export default connect(mapStateToProps, mapDispatchToProps)(PlayerList);