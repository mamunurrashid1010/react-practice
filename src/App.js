import logo from './logo.svg';
import './App.css';
import FunctionalComponent from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';
import PropsInFunction from './props/PropsInFunction';
import PropsInClass from './props/PropsInClass';

function App() {
  return (
    <div className="App">
      <h1>ReactJs Core Concept Practice</h1>

        <h4>component Practice</h4>
        <FunctionalComponent />
        <ClassComponent />

        <h4>Props Practice</h4>
        <PropsInFunction name="Mamunur Rashid" designation="Software Engineer" />
        <PropsInClass name="Mamunur Rashid" designation="Software Engineer" />

    </div>
  );
}

export default App;
