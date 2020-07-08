import styled from 'styled-components';

export const LeagueDivisionCard = styled.div`
    && {
        width: 1240px;
        display: flex;
        margin-bottom: 25px;
    }
`;

export const DivisionMatchesContainer = styled.div`
    width: 40%;
    margin-left: 5%;
`;

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
    padding-top: 10px;
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
