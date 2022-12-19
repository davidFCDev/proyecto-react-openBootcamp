import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import GreetingStyled from './components/pure/greetingStyled';
import Father from './components/container/father';
import OptionalRender from './components/pure/optionalRender';
import LoginFormik from './components/pure/forms/loginFormik';
import RegisterFormik from './components/pure/forms/registerFormik';
import TasklistFormik from './components/container/task_listFormik';
import AsyncExample from './components/pure/AsyncExample';
import ObservableExample from './components/pure/ObservableExample';
import FetchExample from './components/pure/FetchExample';
import AxiosExample from './components/pure/AxiosExample';
import CardContainer from './components/pure/card';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      { /* Componente propio Greeting.jsx */ }
      {/*<Greeting name={"Paco"}></Greeting>*/}
      { /* Componente de ejemplo funcional */ }
      {/*<GreetingF name={"Paco"}></GreetingF>*/}
      { /* Componente de listado de tareas */ }
      {/* <TaskListComponent></TaskListComponent> */}
      {/*<Ejemplo1></Ejemplo1>*/}
      {/*<Ejemplo2></Ejemplo2>*/}
      {/*<MiComponenteConContexto></MiComponenteConContexto>*/}
      {/* Todo lo que hay dentro es tratado como props.children */}
      {/* <Ejemplo4 nombre="David">
        <h3>
          Contenido del props.children
        </h3>
      </Ejemplo4> */}
      {/* <GreetingStyled name="David"></GreetingStyled> */}
      {/* </header> */}
      {/* Gestión de eventos */}
      {/* <Father></Father> */}

      {/* Ejemplos de renderizado condicional */}
      {/* <OptionalRender></OptionalRender> */}

      {/* Ejemplos de uso de FORMIK */}
      {/* <Loginformik></Loginformik> */}
      {/* <RegisterFormik></RegisterFormik> */}
      {/* <TasklistFormik></TasklistFormik> */}

      {/* Ejemplos de procesos asíncronos */}
      {/* <AsyncExample/> */}
      {/* <ObservableExample/> */}
      {/* <FetchExample></FetchExample> */}
      {/* <AxiosExample/> */}
      {/* <CardContainer/> */}
        
      {/* PROYECTO FINAL */}
      {/* <TaskListComponent></TaskListComponent> */}
    </div>
  );
}

export default App;
