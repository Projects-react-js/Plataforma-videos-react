export default function ImageBanner( { informationsImage }) {


    return(
        <>
        {
            informationsImage.map(toImage => (
        <img src={toImage.search} alt={toImage.altImg} />
        ))
        }
        </>

    )
}