import Botao from '../Botao';
import { BiAddToQueue } from 'react-icons/bi';
import './botao-chama-form.css'

const BotaoChamaForm = () => {

    return (
        <Botao classe={'botao-chama-form'}><BiAddToQueue size={32}  /></Botao>
    )
}

export default BotaoChamaForm;