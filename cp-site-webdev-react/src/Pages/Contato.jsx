import ButtonSend from "../Components/ButtonSend";
import Forms from "../Components/Forms";
import RedesSociais from "../Components/RedesSociais";
import TitleBanner from "../Components/TitleBanners";

export default function Contato({ dadosMidias, dadosForm, textButton }){
    const titleText = 'Dúvidas e suporte, entre em contato:'

    const dadosSociais = [
        {
        searchImg: '/icon-twiter.svg',
        altImg: 'Icone da logo do twiter'
        },
        {
        searchImg: '/icon-instagram.svg',
        altImg: 'Icon da logo do instagram'
        },
        {
        searchImg: '/icon-discord.svg',
        altImg: 'Icon da logo do discord'
        }
    ]

    const dadosFormSend = [
        {
        display: 'flex',
        gap: '10px',
        title: 'Nome:',
        typeText: 'text',
        textId: 'name',
        width: '100%',
        padding: '10px 30px',
        },
        {
        display: 'flex',
        gap: '10px',
        title: 'Email:',
        typeText: 'email',
        textId: 'email',
        width: '100%',
        padding: '10px 30px',
        },
        {
        marginBottom: '10px',
        title: 'Mensagem:',
        typeText: 'text',
        textId: 'mensagem',
        width: '100%',
        height: '25vh',
        padding: '10px 30px',
        }
    ]

    const textButtonSend = [
        'Enviar'
    ]

    return(
        <>
        <section id="container_contato">
            <div className="texts-redesSociais">
                <TitleBanner title={titleText}/>
                <div className="content-redesSociais">
                    <RedesSociais informationsSociais={dadosSociais}/>    
                </div>
            </div>

            <div className="thread"></div>

            <div className="container-form">
                <Forms informationsForm={dadosFormSend} textButton={textButtonSend}/>
                <ButtonSend textButton={textButtonSend} />
            </div>
        </section>
        </>
    )
}