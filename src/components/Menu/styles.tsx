import styled from 'styled-components'

export const Container = styled.div`
    background-color: #181818;
    color: #e9e9e9;
    max-width: 100%;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;

`

export const LogoContainer = styled.div`
    color: #4990b7;
    font-weight: 800;
    margin-right: 40px;
    text-transform: uppercase;
`

export const MenuContainer = styled.div`
    max-width: 760px;
    height: 100%;

    nav{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
    }

    a{
        color: #e9e9e9;
        text-decoration: none;
        margin: 10px;
        text-transform: uppercase;
    }

    a:hover{
        color:#878787;
    }
`