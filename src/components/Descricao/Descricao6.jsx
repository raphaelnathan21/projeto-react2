import Personagem1 from '../../images/personagem1.jpg';
import Personagem2 from '../../images/personagem2.jpg';
import Personagem3 from '../../images/personagem3.jpg';
import Personagem7 from '../../images/personagem7.jpg';
import Personagem5 from '../../images/personagem5.webp';
import Personagem6 from '../../images/personagem6.jpg';
import './Descricao.css'

const Descricao6 = () => {
    return (
        <>
            <div className='perfil'>
                <div className='titulo'>
                <h1>Showa Hirohito</h1>
                </div>
                <div className='card-perfil'>
                    <div className='img'>
                <img src={Personagem6}  className='hitler'/>
                </div>
                <div className='descricao'>
                <p className='texto-descricao'>"Shōwa (昭和? Tóquio, 29 de abril de 1901 – Quioto, 7 de janeiro de 1989) foi o 124º imperador do Japão, de acordo com a ordem tradicional de sucessão, reinando de 25 de dezembro de 1926 até sua morte, em 1989. Apesar de ser muito conhecido fora do Japão por seu nome pessoal, Hirohito (裕仁?), no Japão ele é atualmente referido pelo seu nome póstumo, Imperador Shōwa."</p>
                </div>
                </div>
                
            </div>
        </>
    )
}

export default Descricao6;