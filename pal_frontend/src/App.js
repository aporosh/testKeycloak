import './App.css';
import AppRouter from "./components/AppRouter/AppRouter"
import { BrowserRouter} from "react-router-dom";
import { ReactKeycloakProvider } from '@react-keycloak/web'
import keycloak from './keycloak.js'

function App() {
  return (
    <div className="App">
      <ReactKeycloakProvider authClient={keycloak}>
        <BrowserRouter >
            <AppRouter />
        </BrowserRouter>
      </ReactKeycloakProvider>
    </div>
  );
}

export default App;