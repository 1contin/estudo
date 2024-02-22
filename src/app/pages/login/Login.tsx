import { useCallback, useMemo, useRef, useState } from "react";

import { InputLogin } from "./components/InputLogin";
import { ButtonLogin } from "./components/ButtonLogin";
import ButtonBack from "./components/ButtonBack";
import { Link } from "react-router-dom";
import { useUsuarioLogado } from "../../shared/hooks";

export const Login = () => {
  const inputPasswordRef = useRef<HTMLInputElement>(null);

  const { nomeDoUsuario } = useUsuarioLogado();

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const emailLength = useMemo(() => {
    console.log('Executou');
    return email.length * 1;
  }, [email.length]);

  const handleEntrar = useCallback(() => {
    console.log(email);
    console.log(password);
  }, [email,password]);

  

  return (
    <div>
      <form>
        <p>Quantidade de caracteres no email: {emailLength}</p>
        <p>{nomeDoUsuario}</p>

        <InputLogin
          label="Email"
          value={email}
          onChange={newValue => setEmail(newValue)}
          onPressEnter={() => inputPasswordRef.current?.focus()}
        />

        <InputLogin
          label="Senha"
          type="password"
          value={password}
          ref={inputPasswordRef}
          onChange={newValue => setPassword(newValue)}
        />

        <ButtonLogin type="button" onClick={handleEntrar} children={undefined} /> 
        <Link to="cadastre-se">Cadastre-se</Link><br />
        <ButtonBack targetPage ="" />
      </form>
    </div>
  );
};
