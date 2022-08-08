import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    :root {
        --white: #F8F9FA;
        --pink: #FF577F;
        --grey--btn: #868E96;
        --grey--div--background: #212529;
        --input--background--color: #343B41;

        --container-width-lg: 75%;
        --container-width-md: 86%;
        --container-width-sm: 90%;
    }

    body{
        background-color: #121214; 
        font-family: 'Inter', sans-serif;
        
        margin: 0 auto;
    }

    form{
        margin-top: 50px;
        width: var(--container-width-lg);
        margin: 0 auto;
        display: flex;
        color: var(--white);
        align-items: center;
        border-radius: 3px;
        background-color: var(--grey--div--background);
    }

    h3{
        color: var(--white);
        font-size: 0.9rem;
    }
    input{
        background-color: var(--input--background--color);
        width: 263px;
        height: 38px;
        padding: 0px 1rem;
        border-radius: 3px;
        color: var(--white);
        margin-top: 10px;
    }

    button{
        color: var(--white);
        font-weight: 600;
        font-size: .8em;
        line-height: 21px;
        border-radius: 3px;
        cursor: pointer;
        border: none;
        outline: none;
        //width: 259px;
        height: 38px;
        margin-top: 10px;
    }

    label{
        font-size: .7em;
    }
    p{
        color: #868E96;
        font-size: .7em;
        text-align: center;
        font-weight: 600;
    }

    li{
        list-style-type: none;
        width: 732px;
        height: 49px;
    }
`
export default GlobalStyles