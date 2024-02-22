import { useUsuarioLogado } from "../../../shared/hooks";

interface IButtonLoginProps {
    onClick: () => void;
    type?: "button" | "submit" | "reset";

    children: React.ReactNode;
}

export const ButtonLogin: React.FC<IButtonLoginProps> = ({ type, onClick, children }) => {

  const { nomeDoUsuario } = useUsuarioLogado();

    return (
        <button type={type} onClick={onClick}> Entrar
          {nomeDoUsuario}  {children}  
        </button>
    );
};
