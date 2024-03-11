import './Main.css'
import Personagem1 from '../../images/personagem1.jpg';
import Personagem2 from '../../images/personagem2.jpg';
import Personagem3 from '../../images/personagem3.jpg';
import Personagem7 from '../../images/personagem7.jpg';
import Personagem5 from '../../images/personagem5.webp';
import Personagem6 from '../../images/personagem6.jpg';
import Perfil from '../Perfil/Perfil';
import Equipe from '../Equipe/Equipe';

const Main = () => {
    return (
        <main>
        <Equipe titulo={'Líderes políticos alemães'} img1={Personagem1} nome1={"Adolf Hitler"} to={'/desc-hitler'} img2={Personagem2} nome2={"Heinrich Himmler"} to2={'/desc-himmler'} img3={Personagem3} nome3={"Joseph Goebbels"} to3={'/desc-goebbels'}/>
        <Equipe titulo={'Representantes do eixo'} img1={Personagem7} nome1={"Adolf Hitler"} to={'/desc-hitler2'} img2={Personagem5} nome2={"Benito Mussolini"} to2={'/desc-mussolini'} img3={Personagem6} nome3={"Showa Hirohito"} to3={'/desc-hirohito'}/>
        </main>
    )
}

export default Main;