import Banner from "../Banner";
import Card from "../Card";
import heroImage from '../../assets/image/hero-image.png'
import logoFacebook from '../../assets/image/logo-facebook.png'
import logoYoutube from '../../assets/image/logo-youtube.png'
import logoTiktok from '../../assets/image/logo-tiktok.png'
import logoInstagram from '../../assets/image/logo-instagram.png'
import ImageBanner from "../ImageBanner";


function ConteudoPrincipal() {
    return (
      <main>
        <section id="container_banner">
          <Banner textTitle={'Crie seus vídeos online'} textDescription={'Transforme suas ideias em filmes memoráveis: onde a criatividade encontra a simplicidade.'} textButton={'Começar agora!'} />

          <div className="img-banner-home">
            <ImageBanner urlImage={heroImage} textAlt={'Imagem simulando um video no banner'}/>
          </div>
        </section>
        
        <section id="cards">
          <Card numberCard={'01'} profileImage={logoYoutube} textAltCard={'Logotipo do Youtube'} titleCard={'Youtube'} descriptionCard={'Produz a conteúdo cativante e conquiste seu público com vídeos de alta qualidade no maior palco digital do mundo.'} backgroundColor={'#F1C2B0'} />

          <Card numberCard={'02'} profileImage={logoTiktok} textAltCard={'Logotipo do TikTok'} titleCard={'Tiktok'} descriptionCard={'Faça sua criatividade brilhar em vídeos curtos e envolventes que vão cativar a comunidade global do TikTok.'} backgroundColor={'#F9EB98'} />

          <Card numberCard={'03'} profileImage={logoFacebook} textAltCard={'Logotipo do Facebook'} titleCard={'Facebook'} descriptionCard={'Conecte-se com sua audiência de forma autêntica e impactante através de vídeos que se destacam no feed do Facebook.'} backgroundColor={'#C0D9DD'} />

          <Card numberCard={'04'} profileImage={logoInstagram} textAltCard={'Logotipo do Instagram'} titleCard={'Instagram'} descriptionCard={'Compartilhe suas histórias de maneira única e conquiste milhões de likes no Instagram utilizando Stories e Reels.'} backgroundColor={'#6975E8'} />

        </section>
      </main>
      );
}

export default ConteudoPrincipal;