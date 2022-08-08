import styled from 'styled-components';


const Container = styled.form`
     margin-top: 50px;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 2rem 1rem 2rem 1rem;
    width: 296px;
    height: 772px;
    gap: 17px;

    select{
        background-color: var(--input--background--color);
        width: 263px;
        height: 38px;
        padding: 0px 1rem;
        border-radius: 3px;
        color: var(--white);
        margin-top: 10px;
        border: none;
        outline:none;
    }

    img{
        height: 14px;
        width: 105px;
    }

    header{
        display: flex;
        align-items: center;
        width: 296px;
        justify-content: space-around;
        gap: 0;

        button{
            margin: 0;
            
        }
    }



`

export default Container