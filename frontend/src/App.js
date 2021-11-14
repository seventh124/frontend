import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';


// Componentes:
import Tabla from './components/Tabla';
//import Formulario from './components/Formulario';
import Navbar from './components/Navbar';

;

function App() {
  return (
    <Container>
    <div className="App">
      <Navbar></Navbar>
      <Tabla></Tabla>
      <Container>
      
      </Container>
    </div>
    
    </Container>
    
  );
}

export default App;
