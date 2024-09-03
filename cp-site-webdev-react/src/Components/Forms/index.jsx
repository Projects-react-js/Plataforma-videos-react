export default function Forms({ informationsForm}){

    return(
        <>
        {
            informationsForm.map(dadosForm => (
                <div className="content-form" style={{ display: dadosForm.display, gap: dadosForm.gap}}>
                    <p className="text-input" style={{ marginBottom: dadosForm.marginBottom }}>{dadosForm.title}</p>
                    <input type={dadosForm.typeText} id={dadosForm.textId} style={{ width: dadosForm.width, height: dadosForm.height, padding: dadosForm.padding }}/>
                </div>
        ))
        }
        </>
    )

}