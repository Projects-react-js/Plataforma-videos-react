import './card.css'

export default function Card({ informationsCard }) {
    return (
      <>
      {
        informationsCard.map(information =>(
          <div id="container_card" style={{backgroundColor: information.backgroundColor}}>
            <div className="number-img">
              <div className="number">
                {information.number}
              </div>

              <div className="profileImage">
                <img src={information.profileImage} alt={information.textAltCard} />
              </div>
            </div>

            <div className="texts">
              <h2 className="title-card">
                {information.titleCard}
              </h2>

              <p className="description-card">
                {information.descriptionCard}
              </p>
            </div>
          </div>
        ))
        
      }
      </>
  );
}
