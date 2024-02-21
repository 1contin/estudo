import { createContext } from "react";


interface IUsuarioLogadoContextData {
    nomeDoUsuario: string;
    children: React.ReactNode;
} 
const  UsuarioLogadoContext =  createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);
export const UsuarioLogadoProvider: React.FC = ({ children }) => {
    
    return (
        <UsuarioLogadoContext.Provider value={{ nomeDoUsuario: 'Matheus' }}>
            {children}
        </UsuarioLogadoContext.Provider>
    );
}