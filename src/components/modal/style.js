import styled from 'styled-components';


const Container = styled.form`
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 369px;
    height: 342px;
    overflow: hidden;
    background: #212529;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;

    header{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        gap: 135px;
        width: 369px;
        height: 50px;
        background-color: var(--input--background--color);

        h3{
            display: flex;
            align-items: center;
            justify-content: center;
            box-sizing: border-box;
        }

        button{
            width:30px;
            background: none;
            
        }

    }

    div{
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        width: 320px;
        height: 402px;
        gap: 15px;
        margin-top: 21px

    }

    input{
        width: 320px;
        border: 1px solid white;
        }


    select{
        background-color: var(--input--background--color);
        width: 320px;
        height: 38px;
        padding: 0px 1rem;
        border-radius: 3px;
        color: var(--white);
        margin-top: 10px;
        border: 1px solid white;
    }

    button{
        margin-top: 10px;
        color:white;
        width: 320px;
        background: var(--pink);
        height: 38px;
    }
    
    
 
`

export default Container