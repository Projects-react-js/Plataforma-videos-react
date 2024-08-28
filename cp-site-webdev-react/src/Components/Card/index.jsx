import PropTypes from 'prop-types';
import './card.css'

function Card({profileImage, numberCard, titleCard, descriptionCard, backgroundColor, textAltCard}) {
    return (
        <div id="container_card" style={{backgroundColor: backgroundColor}}>
          <div className="number-img">
            <div className="number">
              {numberCard}
            </div>

            <div className="profileImage">
              <img src={profileImage} alt={textAltCard} />
            </div>
          </div>

          <div className="texts">
            <h2 className="title-card">
              {titleCard}
            </h2>

            <p className="description-card">
              {descriptionCard}
            </p>
          </div>
        </div>

      );
}

Card.propTypes = {
  numberCard: PropTypes.number.isRequired,
  profileImage: PropTypes.string.isRequired,
  titleCard: PropTypes.string.isRequired,
  descriptionCard: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  textAltCard: PropTypes.string.isRequired
}

export default Card;