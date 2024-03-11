import Personagem1 from '../../images/personagem1.jpg';
import Personagem2 from '../../images/personagem2.jpg';
import Personagem3 from '../../images/personagem3.jpg';
import Personagem7 from '../../images/personagem7.jpg';
import Personagem5 from '../../images/personagem5.webp';
import Personagem6 from '../../images/personagem6.jpg';
import './Descricao.css'

const Descricao = () => {
    return (
        <>
            <div className='perfil'>
                <div className='titulo'>
                <h1>Adolf Hitler</h1>
                </div>
                <div className='card-perfil'>
                    <div className='img'>
                <img src={Personagem1}  className='hitler'/>
                </div>
                <div className='descricao'>
                <p className='texto-descricao'>"Adolf Hitler foi o líder de um dos piores regimes totalitários existentes — o nazismo — e um dos que fundamentaram um dos maiores genocídios da história da humanidade: o Holocausto. Hitler, que era austríaco, lutou pela Alemanha na Primeira Guerra Mundial e foi ascendendo no cenário político alemão, por meio de seu discurso radical, que se voltava para certos grupos da sociedade alemã, como os judeus, os social-democratas e os comunistas. Assumiu o poder em 1933 e conduziu a Alemanha para a Segunda Guerra Mundial."</p>
                </div>
                </div>
                
            </div>
        </>
    )
}

export default Descricao;