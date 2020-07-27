import styled from 'styled-components';

export const RoundController = styled.div`
display: flex;
align-items: center;
justify-content: center;

button {
    display: flex;
    align-items: center;
    background: none;
    outline: none;
    border: none;
    cursor: pointer;
}

button.hide {
    opacity: 0;
    cursor: unset;
}
`;

export const DivisionMatchesContainer = styled.div`
width: 40%;
margin-left: 5%;
`;
