import PropTypes from 'prop-types';

function ImageBanner({ urlImage, textAlt }) {
    return (
        <div className="img-banner"> 
            <img src={urlImage} alt={textAlt} />
        </div>
    );
}

ImageBanner.propTypes = {
    urlImage: PropTypes.string.isRequired,
    textAlt: PropTypes.string.isRequired
}

export default ImageBanner;