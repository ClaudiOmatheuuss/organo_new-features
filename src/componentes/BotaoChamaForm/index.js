import './botao-chama-form.css'

const BotaoChamaForm = ({ exibeFormulario }) => {
    return (
            <button className={'botao-chama-form'} onClick={exibeFormulario}>
                <img src="./imagens/btn-icone.png" alt="Criar novos colaboradores ou times" />
            </button>
    )
}

export default BotaoChamaForm