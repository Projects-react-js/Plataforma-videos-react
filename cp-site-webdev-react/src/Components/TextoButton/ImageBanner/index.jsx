import HeroImage from '../../../image/hero-image.png'

function ImageBanner() {
    return (
      <div className="img-banner">
        <img className="hero-image" src={HeroImage} alt="Imagem simulando um vídeo" />
      </div>  
      );
}

export default ImageBanner;