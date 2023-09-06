import './botao.css'

const Botao = ({ classe, children }) => {
    return (
        <button className={classe}>
            {children}
        </button>
    );
}

export default Botao;