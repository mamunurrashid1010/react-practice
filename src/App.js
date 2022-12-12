import logo from './logo.svg';
import './App.css';
import FunctionalComponent from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';
import PropsInFunction from './props/PropsInFunction';
import PropsInClass from './props/PropsInClass';
import ButtonInFunction from './handlingEvents/ButtonInFunction';
import ButtonInClass from './handlingEvents/ButtonInClass';
import ButtonBootstrap from './handlingEvents/ButtonBootstrap';
import ArrowFunction from './components/ArrowFunction';
import StateInClass from './state/StateInClass';

function App() {
  return (
    <div className="App">
      <scrool>
      <h1>ReactJs Core Concept Practice</h1>

      <h4>component Practice</h4>
      <FunctionalComponent />
      <ClassComponent />

      <h4>Props Practice</h4>
      <PropsInFunction name="Mamunur Rashid" designation="Software Engineer" />
      <PropsInClass name="Mamunur Rashid" designation="Software Engineer" />

      <h4>Event Handling</h4>
      <ButtonInFunction />
      <ButtonInClass />

      <h4>Bootstrap Button</h4>
      <ButtonBootstrap />

      <h4>Arrow Function</h4>
      <ArrowFunction />

      <h4>State Example</h4>
      <StateInClass />

      </scrool>

    </div>
  );
}

export default App;
