import Personagem1 from '../../images/personagem1.jpg';
import Personagem2 from '../../images/personagem2.jpg';
import Personagem3 from '../../images/personagem3.jpg';
import Personagem7 from '../../images/personagem7.jpg';
import Personagem5 from '../../images/personagem5.webp';
import Personagem6 from '../../images/personagem6.jpg';
import './Descricao.css'

const Descricao5 = () => {
    return (
        <>
            <div className='perfil'>
                <div className='titulo'>
                <h1>Benito Mussolini</h1>
                </div>
                <div className='card-perfil'>
                    <div className='img'>
                <img src={Personagem5}  className='hitler'/>
                </div>
                <div className='descricao'>
                <p className='texto-descricao'>"Benito Amilcare Andrea Mussolini (Predappio, 29 de julho de 1883 – Mezzegra, 28 de abril de 1945) foi um político italiano que liderou o Partido Nacional Fascista e é creditado como sendo uma das figuras-chave na criação do fascismo. Tornou-se o primeiro-ministro da Itália em 1922 e começou a usar o título Il Duce desde 1925, onde abandonou qualquer estética democrática do seu governo e estabeleceu sua ditadura totalitária. Após 1936, seu título oficial era "Sua Excelência Benito Mussolini, Chefe de Governo, Duce do Fascismo e Fundador do Império".[3] Mussolini também criou e sustentou a patente militar suprema de Primeiro Marechal do Império, junto com o rei Vítor Emanuel III da Itália, quem deu-lhe o título, tendo controle supremo sobre as forças armadas da Itália. Mussolini permaneceu no poder até ser substituído em 1943; por um curto período, até a sua morte, ele foi o líder da República Social Italiana."</p>
                </div>
                </div>
                
            </div>
        </>
    )
}

export default Descricao5;