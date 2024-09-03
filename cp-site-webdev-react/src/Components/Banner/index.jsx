import TitleBanner from "../TitleBanners";
import './banner.css'

export default function Banner({ textsBannerAll }){
    
    return(
        <>
        {
            textsBannerAll.map(textsBanner => (

        <div className="texts">
            <TitleBanner title={textsBanner.text}/>
            <p className="description">{textsBanner.textDescription}</p>

            <button id='btn_default' type="button">{textsBanner.textButton}</button>
        </div>
        ))
        }
        </>    
    )
}