import Banner from "../Components/Banner";
import ImageBanner from "../Components/ImageBanner";
import Plan from "../Components/Plan";

export default function Sobre({ textsBanner, toImage, plan, option }){
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

    const dadosPlans = [
      {
          backgroundColor: '#6975E8',
          title: 'Individual',
          color: '#131925',
          options: [
              {
              description: '1 Usuário',
              text: '10 Vídeos R$15',
              }
          ],
          textButton: 'Cadastrar',
          displayImg: 'none',
          backgroundColorButton: '#6975E8',
          colorButton: '#fff',
      },
      {
          backgroundColor: '#fff',
          title: 'Profissional - Times',
          color: '#131925',
          options: [
              {
              description: '1-10 Usuários',
              text: 'Vídeos Ilimitados R$40',
              },
              {
              description: '+10 Usuários',
              text: 'Vídeos Ilimitados R$20',
              }
          ],
          textButton: 'Cadastrar',
          displayImg: 'none',
      },
      {
          backgroundColor: '#FFFFFF',
          title: 'Corporativo',
          color: '#131925',
          description: '',
          options: [],
          textButton: 'Entre Em Contato',
          displayImg: 'block',
          searchImg: '/people-phone.png',
          altImg: 'Imagem Corporativo'
      }
  ];

  const titlePage = 'Planos'

    return(
        <>
        <section id="container_banner">
          <Banner textsBannerAll={texts}/>
          <div className="image-banner" style={{display: 'flex', gap: '30px', alignItems: 'center',  }}>
            <ImageBanner informationsImage={dadosImage}/>
          </div>  
        </section>

        <section id="container_plans">
          <div className="title-plans">
            <h2 className="title-section">{titlePage}</h2>
          </div>
          <div className="plans">
            <Plan informationsPlan={dadosPlans}/>
          </div>
        </section>

        </>
    )
}