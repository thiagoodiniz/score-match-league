import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import { ApplicationState } from '../../../../store';
import { connect } from 'react-redux';
import { Checkbox } from '@material-ui/core';
import { Player } from '../../../../store/ducks/players/types';

interface Props {
    players: Player[];
    addDivisionPlayers(playerIds: number[]): void
}

interface State {
    modalOpen: boolean;
}

class CreateDivisionPlayers extends Component<Props, State> {

    state = {
        modalOpen: false,
    }

    handleModal = () => {
        this.setState({ modalOpen: !this.state.modalOpen});
    };

    onConfirm = () => {
        this.props.addDivisionPlayers(this.props.players.map(pl => pl.id));
        this.handleModal();
    }

    render() {
        return(
            <div>
                <Button onClick={ () => this.handleModal()  }>Adicionar jogadores</Button>

                <Dialog
                    disableBackdropClick
                    disableEscapeKeyDown
                    maxWidth="xs"
                    open={ this.state.modalOpen }
                    >
                    <DialogTitle>Adicionar jogadores</DialogTitle>
                    <DialogContent dividers>
                        { this.props.players.map(player =>
                            <>
                                <span>{ player.name }</span>
                                <br></br>
                            </>
                        )}
                        {/* <RadioGroup
                        ref={radioGroupRef}
                        aria-label="ringtone"
                        name="ringtone"
                        value={value}
                        onChange={handleChange}
                        >
                        {options.map((option) => (
                            <FormControlLabel value={option} key={option} control={<Radio />} label={option} />
                        ))}
                        </RadioGroup> */}
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={ () => this.handleModal() } color="primary">
                            Cancelar
                        </Button>
                        <Button onClick={ () => this.onConfirm() } color="primary">
                            Confirmar
                        </Button>
                    </DialogActions>
                </Dialog>

            </div>

        );
    }
}

export default CreateDivisionPlayers;