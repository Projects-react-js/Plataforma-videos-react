import './plan.css'

export default function Plan({ informationsPlan }) {

    return (
        <>
            {
                informationsPlan.map(plan => (
                    <div className="content-plan">
                        <div className="cabecalho-plan" style={{ backgroundColor: plan.backgroundColor }}>
                            <h3 className="title" style={{ color: plan.color }}>
                                {plan.title}
                            </h3>
                        </div>

                        <div className="main-plan">
                            {
                                plan.options && plan.options.map(option => (
                                    <div className="content-option" style={{ display: option.displayOption }}>
                                        <p className="descriptions">
                                            {option.description}
                                        </p>

                                        <div className="option">
                                            <p className="text">{option.text}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                        <div className="image-plan" style={{ display: plan.displayImg }}>
                            <img src={plan.searchImg} alt={plan.altImg} />
                        </div>

                        <div className="button-register">
                            <button type="button" style={{ backgroundColor: plan.backgroundColorButton, color: plan.colorButton}}>
                                {plan.textButton}
                            </button>
                        </div>
                    </div>
                ))
            }
        </>
    )
}