import './CampoTexto.css'
const CampoTexto = (props) => {

    let valor = 'Lucas Soares'

    const aoDigitado = (evento) => {
        valor = evento.target.value
        console.log(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto