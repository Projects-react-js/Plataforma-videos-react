import Banner from "../Banner";
import Card from "../Card";
import ImageBanner from "../ImageBanner";

export default function ConteudoPrincipal({ information, textsBanner, toImage }){

  const redesSociais = [
    {
    number: "01",
    profileImage: '/logo-youtube.png',
    titleCard: 'Youtube',
    descriptionCard: 'Produza conteúdo cativante e conquiste seu público com vídeos de alta qualidade no maior palco digital do mundo.',
    textAltCard: 'Logotipo do Youtube',
    backgroundColor: '#F1C2B0'
    },
    {
    number: "02",
    profileImage: '/logo-tiktok.png',
    titleCard: 'Tiktok',
    descriptionCard: 'Faça sua criatividade brilhar em vídeos curtos e envolventes que vão cativar a comunidade global do TikTok.',
    textAltCard: 'Logotipo do tiktok',
    backgroundColor: '#F9EB98'
    },
    {
    number: "03",
    profileImage: '/logo-facebook.png',
    titleCard: 'Facebook',
    descriptionCard: 'Conecte-se com sua audiência de forma autêntica e impactante através de vídeos que se destacam no feed do Facebook.',
    textAltCard: 'Logotipo do Facebook',
    backgroundColor: '#C0D9DD'
    },
    {
    number: "04",
    profileImage: '/logo-instagram.png',
    titleCard: 'Instagram',
    descriptionCard: 'Compartilhe suas histórias de maneira única e conquiste milhões de likes no Instagram utilizando Stories e Reels.',
    textAltCard: 'Logotipo do Instagram',
    backgroundColor: '#6975E8'
    }
  ]

  const texts = [
    {
    text: 'Crie seus vídeos online',
    textDescription: 'Transforme suas ideias em filmes memoráveis: onde a criatividade encontra a simplicidade.',
    textButton: 'Começar agora!',
    searchImg: '/hero-image.png',
    altImgBanner: 'Imagem de uma simulação de video'
    }
  ]

  const dadosImage = [
    {
    search: '/hero-image.png',
    altImg: 'Imagem de uma simulação de video'
    }
  ]

  return(
    <>
    <section id="container_banner">
      <Banner textsBannerAll={texts}/>
      <div className="image-banner">
        <ImageBanner informationsImage={dadosImage}/>
      </div>
    </section>

    <section id="container_cards">  
      <Card informationsCard={redesSociais}/>
    </section>
    </> 
  )
}
