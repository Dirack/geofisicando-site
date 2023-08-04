import * as C from './styles'


export const Menu = ()=>{
    return (
        <C.Container>
            <C.LogoContainer>
                Rodolfo Dirack
            </C.LogoContainer>
            <C.MenuContainer>
                <nav>
                    <a href="#">Home</a>
                    <a href="#">Cursos</a>
                    <a href="#">Software</a>
                    <a href="#">Sobre</a>
                    <a href="#">Portifólio</a>
                    <a href="#">Apoiase</a>
                </nav>
            </C.MenuContainer>
        </C.Container>
    )
}