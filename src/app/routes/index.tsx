import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"
import { Dashboard, Login, SignUp } from "../pages"

export const  Routes = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/entrar" component={Login} />
            <Route exact path="/pagina-inicial" component={Dashboard} />
            <Route exact path="/cadastre-se" component={SignUp} />
            
            <Route path= "*" component={() => <Redirect to="/pagina-inicial"/>} />
        </Switch>
        </BrowserRouter>
    )
}