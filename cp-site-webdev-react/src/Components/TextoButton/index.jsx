import TitleBanners from './TitleBanners/index.jsx'
import DescriptionBanners from './DescriptionBanners/index.jsx'
import TextButton from './TextButton/index.jsx';

function TextoButton() {
    return (
        <div className="informations">
            <TitleBanners title={'Crie seus vídeos online'}/>
            <DescriptionBanners description={'Transforme suas ideias em filmes memoráveis: onde a criatividade encontra a simplicidade.'}/>
            <TextButton textButton={"Começar agora!"}/>
        </div>
      );
}

export default TextoButton;