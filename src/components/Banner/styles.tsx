import styled from 'styled-components'

export const Container = styled.div`
    color: #232d37;
    max-width: 90%;
    margin: auto;
    height: 90vh;
    display: flex;
    justify-content: center;
`

export const ContainerProfilePicture = styled.div`
    height: 100%;
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ProfilePicture = styled.div`

    img{
        width: 500px;
        height: 500px;
        border-radius: 50%;
    }

`

export const ContainerProfileText = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ProfileText = styled.div`
    font-size: xx-large;
    text-align: center;

    p{
        font-weight: 300;
    }
`