import Banner from "../Components/Banner";
import ImageBanner from "../Components/ImageBanner";

export default function Sobre({ textsBanner, toImage }){
    const texts = [
        {
        text: 'Bem-vindo à revolução dos vídeos!',
        textDescription: 'Somos uma startup com o objetivo de facilitar a produção de conteúdo em larga escala com qualidade profissional, capaz de atingir uma audiência de milhões de seguidores.',
        textButton: 'Começar agora!',
        searchImg: '/video-screen.png',
        altImgBanner: 'Imagem de um editor de video'
        }
      ]

      const dadosImage = [
        {
        search: '/video-screen.png',
        altImg: 'imagem de uma screen de celular'
        },
        {
        search: '/play-save.png',
        altImg: 'Imagem da screen save'
        }
      ]

    return(
        <>
        <section id="container_banner">
          <Banner textsBannerAll={texts}/>
          <div className="image-banner" style={{display: 'flex', gap: '30px', alignItems: 'center',  }}>
            <ImageBanner informationsImage={dadosImage}/>
          </div>  
        </section>
        </>
    )
}