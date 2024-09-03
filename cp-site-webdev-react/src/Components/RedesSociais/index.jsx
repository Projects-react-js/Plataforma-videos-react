export default function RedesSociais({ informationsSociais }){

    return(
        <>
        {
            informationsSociais.map(dadosMidias => (
                <img src={dadosMidias.searchImg} alt={dadosMidias.altImg} />
            ))
        }
        </>
    )
}