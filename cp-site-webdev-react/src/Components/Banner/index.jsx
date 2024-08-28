import PropTypes from 'prop-types';
import './banner.css'

function Banner({textTitle, textDescription, textButton}) {
    return (
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
      );
}

Banner.propTypes = {
    textTitle: PropTypes.string.isRequired,
    textDescription: PropTypes.string.isRequired,
    textButton: PropTypes.string.isRequired,
}

export default Banner;