import styled from 'styled-components';

const Container = styled.button`

    background-color: ${(props) => (props.pinkSchema ? '#FF577F' : '#868E96' )};
    
    &:hover{
        background-color: ${(props) => (props.pinkSchema ? '#ba3655' : '#484e54' )};
    }
    width: ${(props) => (props.smallSchema ? '75px' : '259px')};
`

export default Container