
import { BrowserRouter, Navigate, Route, Routes as Switch} from "react-router-dom"


export const Routes = () => {
    return (
        <BrowserRouter>
         <Switch>
            

            <Route path="*" element={<Navigate to="/pagina inicial" />} />
         </Switch>
        </BrowserRouter>
    
        );
}
