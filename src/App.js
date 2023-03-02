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
import Example1 from './ConditionalRendering/Example1';
import Example2 from './ConditionalRendering/Example2';
import Registration from './form/Registration';
import List from './list/List';
import DropdownList from './list/DropdownList';
import InlineCSS from './css/InlineCSS';
import ObjectCSS from './css/ObjectCSS';
import ExternalCSS from './css/ExternalCSS';
import ModuleCSS from './css/ModuleCSS';
import SassPracticeExample from './SCSS/SassPracticeExample';
import NavExample from './reactBootstrap/NavExample';
import ReactTableExample from './table/ReactTableExample';
import GetRequestExample from './httpRequest/GetRequestExample';
import PostRequestExample from './httpRequest/PostRequestExample';
import ReactBootstrapTableExample from './table/ReactBootstrapTableExample';
import StateInFunction from "./state/StateInFunction";
import UseEffectExample from './hooks/UseEffectExample';
import UseEffectDataFetchExample from './hooks/UseEffectDataFetchExample';
import UseStateExample from './hooks/UseStateExample';
import RefExampleInClass from './ref/RefExampleInClass';
import UseRefExample from './hooks/UseRefExample';
import Component1 from './hooks/context/Component1';
import Toggle from "./toggle/toggle";
import MappingInFunctionalComponent from "./Mapping/MappingInFunctionalComponent";
import NestedMappingInFunctionalComponent from "./Mapping/NestedMappingInFunctionalComponent";

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
      <StateInFunction/>

      <h4>Conditional Rendering Example</h4>
      <Example1/>
      <Example2/>

      <h4>Form Example</h4>
      <Registration/>

      <h4>List Example</h4>
      <List/>
      <DropdownList/>

      <h4>CSS Example</h4>
      <InlineCSS/>
      <ObjectCSS/>
      <ExternalCSS/>
      <ModuleCSS/>

      <h4>SASS Example</h4>
      <SassPracticeExample/>

      <h4>React Bootstrap Example</h4>
      <NavExample/>

      <h4>React Table Example</h4>
      {/* <ReactTableExample/> */}

      <h4>Http Get Request Example</h4>
      <GetRequestExample/>
      <PostRequestExample/>

      <h4>React Bootstrap Table Example</h4>
      <ReactBootstrapTableExample/>

      <h4 className='pt-5'>Hooks</h4>
      <UseEffectExample/>
      <UseEffectDataFetchExample/>
      <UseStateExample/>

      <h4 className='pt-5'>Ref Example</h4>
      <RefExampleInClass/>
      <UseRefExample/>

      <h4 className='pt-5'>Context Example</h4>
      <Component1/>

      <h4 className='pt-5'>Toggle Example</h4>
      <Toggle/>

      <h4 className='pt-5'>Map Example</h4>
      <MappingInFunctionalComponent/>
      <NestedMappingInFunctionalComponent/>

      </scrool>

    </div>
  );
}

export default App;
