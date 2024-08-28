import Banner from '../Components/Banner/index.jsx';
import ImageBanner from '../Components/ImageBanner/index.jsx';
import playSave from '../assets/image/play-save.png'
import videoScreen from '../assets/image/video-screen.png'

function Sobre() {
    return (  
        <section id="container-banner-sobre">
            <Banner textTitle={'Bem-vindo à revolução dos vídeos!'} textDescription={'Somos uma startup com o objetivo de facilitar a produção de conteúdo em larga escala com qualidade profissional, capaz de atingir uma audiência de milhões de seguidores.'} textButton={'Baixe o app'} urlImage={'heroImage'}/>

            <div className="images-sobre">
                <ImageBanner urlImage={videoScreen}/>
                <ImageBanner urlImage={playSave}/>
            </div>        
        </section>
    );
}

export default Sobre