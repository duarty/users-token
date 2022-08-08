import styled from 'styled-components';

export const Container = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    
`


export const Header = styled.header`
    border-bottom: 1px solid grey;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 72px;
    width: 780px;

   
    img{
        height: 14px;
        width: 105px;
    }
    button{
        margin: 0 ;
        font-size: 1rem;
        width: 32px;
        height: 32px;
        background-color:#212529;
        font-size: .8em;
    }
`
export const UserName = styled.div`
    border-bottom: 1px solid grey;
    width: 780px;
    height: 118px;
    display: flex;
    justify-content: space-evenly;
    gap: 250px;
    align-items: center;

    h1, span{
        color: white;
    }
   

    
`

export const Render = styled.ul`
    padding: 22px;
    display: flex;
    gap: 15px;
    align-items: center;
    flex-direction: column;
    border-radius: 3px;
    width: 780px;
    height: 416px;
    background-color: #212529;

`
export const Main = styled(Header)`
    color: var(--white);
    border: none;
   
`

export const Card = styled.li`
    padding: 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 470px;
    width: 732px;
    border-radius: 4px;
    height: 49px;
    background-color:  #121214;


    h2{
        color: var(--white);
    }
`
