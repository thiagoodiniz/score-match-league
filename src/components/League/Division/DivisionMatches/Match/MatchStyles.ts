import styled from 'styled-components';
import { Button } from '@material-ui/core';

export const MatchContainer = styled.div`
    display: flex;
    border-bottom: 1px solid #f5f5f5;
    margin-bottom: 5px;
`;

export const MatchPlayer1 = styled.div`
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const MatchPlayer2 = styled.div`
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const MatchScoreboard = styled.div`
    width: 20%;
    padding: 18px 0;
    position: relative;
    display: flex;
    justify-content: space-evenly;
`;

export const MatchInputGoals = styled.input`
    border: 1px solid #CCCCCC;
    text-align: center;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 0;
    padding-right: 0;
    font-weight: bold;
    font-size: 12pt;
    width: 32px;
    margin-bottom: 10px;
`;

export const SaveMatchBtn = styled(Button)`
    && {
        position: absolute;
        bottom: 3px;
        height: 22px;
        background-color: ${ props => props.theme.colors.primary};
        text-transform: none;
        color: #FFF;
        &:hover {
            background-color: ${ props => props.theme.colors.primary};
        }
    }
`;
