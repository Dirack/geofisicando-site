import * as C from './styles'
import FotoDirack from '../../assets/img/dirack2.jpg'

export const Banner = ()=>{
    return (
        <C.Container>
            <C.ContainerProfilePicture>
                <C.ProfilePicture>
                    <img src={FotoDirack} alt="Minha foto" />
                </C.ProfilePicture>
            </C.ContainerProfilePicture>
            <C.ContainerProfileText>
                <C.ProfileText>
 
                    <h2>Bem vindo ao Geofisicando</h2>
                    <p><small>This is the official website from Geofisicando youtube channel. 
                    Our purpose is scientific divulgation and to share content about programming applied
                    to geophysics
                    </small></p>
                </C.ProfileText>
            </C.ContainerProfileText>
        </C.Container>
    )
}