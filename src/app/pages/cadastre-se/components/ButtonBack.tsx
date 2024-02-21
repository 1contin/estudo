import React from 'react';
import { useHistory } from 'react-router-dom';

interface IButtonBackProps {
    targetPage: string;
}

const ButtonBack: React.FC<IButtonBackProps> = ({ targetPage }) => {
    const history = useHistory();

    const handleGoBack = () => {
        history.push(targetPage);
    };

    return (
        <button onClick={handleGoBack}>
            Voltar para Pagina Inicial {targetPage}
        </button>
    );
};

export default ButtonBack;