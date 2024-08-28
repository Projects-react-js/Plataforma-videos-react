import PropTypes from 'prop-types';
import './banner.css'

function Banner({textTitle, textDescription, textButton, urlImage, textAlt }) {
    return (
        <section id="container_banner">
            <div className="texts">
                <h1 className="title">
                    {textTitle}
                </h1>

                <p className="description">
                    {textDescription}
                </p>

                <button id="btn_default" type="button" >
                    {textButton}
                </button>
            </div>

            <div className="img-banner">
                <img src={urlImage} alt={textAlt} />
            </div>
        </section>
      );
}

Banner.propTypes = {
    textTitle: PropTypes.string.isRequired,
    textDescription: PropTypes.string.isRequired,
    textButton: PropTypes.string.isRequired,
    urlImage: PropTypes.string.isRequired,
    textAlt: PropTypes.string.isRequired
}

export default Banner;