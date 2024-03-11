import Personagem1 from '../../images/personagem1.jpg';
import Personagem2 from '../../images/personagem2.jpg';
import Personagem3 from '../../images/personagem3.jpg';
import Personagem7 from '../../images/personagem7.jpg';
import Personagem5 from '../../images/personagem5.webp';
import Personagem6 from '../../images/personagem6.jpg';
import './Descricao.css'

const Descricao2 = () => {
    return (
        <>
            <div className='perfil'>
                <div className='titulo'>
                <h1>Heinrich Himmler</h1>
                </div>
                <div className='card-perfil'>
                    <div className='img'>
                <img src={Personagem2}  className='hitler'/>
                </div>
                <div className='descricao'>
                <p className='texto-descricao'>"Heinrich Luitpold Himmler (Munique, 7 de outubro de 1900 – Lüneburg, 23 de maio de 1945) foi um Reichsführer das Schutzstaffel (comandante militar da SS), e um dos principais líderes do Partido Nazi (NSDAP) da Alemanha Nazi. Posteriormente, Adolf Hitler nomeou-o Comandante do Exército de Reserva e General Plenipotenciário para toda a administração do Reich (Generalbevollmächtigter für die Verwaltung). Himmler foi um dos homens mais poderosos da Alemanha Nazi e um dos principais responsáveis directos pelo Holocausto."</p>
                </div>
                </div>
                
            </div>
        </>
    )
}

export default Descricao2;