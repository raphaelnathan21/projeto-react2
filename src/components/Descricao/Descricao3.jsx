import Personagem1 from '../../images/personagem1.jpg';
import Personagem2 from '../../images/personagem2.jpg';
import Personagem3 from '../../images/personagem3.jpg';
import Personagem7 from '../../images/personagem7.jpg';
import Personagem5 from '../../images/personagem5.webp';
import Personagem6 from '../../images/personagem6.jpg';
import './Descricao.css'

const Descricao3 = () => {
    return (
        <>
            <div className='perfil'>
                <div className='titulo'>
                <h1>Joseph Goebbels</h1>
                </div>
                <div className='card-perfil'>
                    <div className='img'>
                <img src={Personagem3}  className='hitler'/>
                </div>
                <div className='descricao'>
                <p className='texto-descricao'>"Paul Joseph Goebbels (Rheydt, 29 de outubro de 1897 — Berlim, 1 de maio de 1945) foi um político alemão, filologista e Ministro da Propaganda na Alemanha Nazista entre 1933 e 1945. Um associado e devoto apoiante de Adolf Hitler, ficou conhecido pela sua capacidade de oratória em público, seu profundo e fanático antissemitismo, e, sua crença na conspiração internacional judaica que o levou a apoiar o extermínio dos judeus no Holocausto."</p>
                </div>
                </div>
                
            </div>
        </>
    )
}

export default Descricao3;