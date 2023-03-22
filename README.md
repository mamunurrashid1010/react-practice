# ReactJs Practice
React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. In this project create for practice reactjs core concept.
 
#### Topics Practice:  <hr>

##### 1. React App
* Create a new react app

##### 2. JSX (JavaScript XML)

##### 3. Components
* Functional component create
* Class component create

##### 4. Props
* Props in functional component
* Props in class component
* Props Destructuring in function

##### 5. Event Handling
* Button onClick event handling (class & functional component)

##### 6. Bootstrap installation and use in a program

##### 7. Arrow Function

##### 8. State
* Use state & setState in class component
* State use in functional component

##### 9. Conditional Rendering

##### 10. Form
* Registration form

##### 11. List
* Order / Unorder List
* Dropdown List

##### 12. React CSS
* Inline CSS use in program
* CSS Object use in program
* External CSS use in program
* Module CSS use in program

##### 13. SASS/SCSS installation and use in a program

##### 14. React bootstrap installation and use in a program

##### 15. Axios installation

##### 16. Http Request
* Http get request
* Http post request

##### 17. <a href="https://github.com/mamunurrashid1010/react-router-dom-implementation"> React router dom implement </a>

##### 18. Table
* React bootstrap table use in project

##### 19. Ref 
* Ref use example in class component

##### 20. Hooks
* useEffect basic example
* useEffect data fetching example
* useState basic example
* useRef example
* useContext example

##### 21. Toggle

##### 22. Map
* Map use in functional component
* Nested Map use in functional component
* Map use in class component

##### 23. Event Bubbling
* Event Bubbling example in functional component

##### 24. Bind
* Method binding

##### 25. Child to Parent Data Passing

##### 26. Fragment

##### 27. Memo

##### 28. PropTypes
* Proptypes declaration, default types use in functional component

##### 29. Life Cycle 


## Basic Concept
##### 1. How to create a new react app
```
npx create-react-app my-app
cd my-app
npm start
```

##### 2. JSX
* JSX stands for JavaScript XML.
* JSX looks like HTML.
* JSX convert into JavaScript, which read by browser.
* JSX support style.
* JSX support regular JavaScript expression. <br>
Example:
```
// JSX
const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);
```

##### 3. Components
##### 3.1. How to create a functional component
Create a js file ``` FunctionalComponent.js ``` and write code like-<br>
```
import React from "react";

function FunctionalComponent(){
    return(
        <div>
            <h5>I'm from functional component.</h5>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centurie
            </p>
        </div>
    );
}

export default FunctionalComponent;
```

##### 3.2. How to create a class component
Create a js file ``` ClassComponent.js ``` and write code like-<br>
```
import React, { Component } from "react";
class ClassComponent extends Component{
    render(){
        return(
            <div>
                <h5>I'm from Class component.</h5>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centurie
                </p>
            </div>
        );
    }
}
export default ClassComponent;
```

##### 4. Bootstrap install and use in a program
Bootstrap install command
```
npm install --save bootstrap
```
Create component ```ButtonBootstrap.js``` and open. <br> 
Import bootstrap.min.css file from node_modules like- ```import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';``` <br>
then write code
```
import React, { Component } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
class ButtonBootstrap extends Component{
    render(){
        return(
            <div>
                {/* bootstrap button class use */}
                <button className="btn btn-primary btn-sm">bootstrap button example</button>
            </div>
        );
    }
}
export default ButtonBootstrap;
```

##### 5. SASS installation and write a program
SASS install command
```
npm install node-sass
```
Create a .scss file ```mySASS.scss``` and open, then write-
```
$textColor: red;
$textBackground: yellow;
$textFontSize: 20px;

.textStyle{
    color: $textColor;
    background-color: $textBackground;
    font-size: $textFontSize;
}
```
Create component ```SassPracticeExample.js``` and open. <br> 
Import .scss file ```import './mySASS.scss';``` then write code
```
import React, { Component } from 'react';
import './mySASS.scss'; //import sass file
class SassPracticeExample extends Component {
    render() {
        return (
            <div>
                <p className="textStyle">SASS/SCSS Text</p>
            </div>
        );
    }
}
export default SassPracticeExample;
```

##### 6. React bootstrap install and use in a program
6.1 React bootstrap install command
```
npm install react-bootstrap bootstrap
```
6.2 CSS for react bootstrap, download,save- <br>
open link: ```https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css``` and save file name 'bootstrap.min.css' in the project directory assets/css <br>

6.3 Create component ```NavExample.js``` and open. <br> 
Import bootstrap.min.css file from asstes/css like- ```import './css/bootstrap.min.css';``` <br>
then write code
```
import React, { Component } from "react";
import './css/bootstrap.min.css'; // import react bootstrap.min.css
import { Navbar,Container,Nav,NavDropdown,Form,Button} from "react-bootstrap"; // react bootstrap 

class NavExample extends Component{
    render(){
        return(
            <div>
                <Navbar bg="light" expand="lg">
                    <Container fluid>
                        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Link</Nav.Link>
                            <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#" disabled>
                            Link
                            </Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                        </Navbar.Collapse>
                    </Container>
            </Navbar>
                <br/>
            </div> 
        );
    }
}
export default NavExample;

```

##### 7. Axios Installation
Axios install command
```
npm install axios
```

##### 8. React Router Dom Installation
React router dom installation command
```
npm install react-router-dom --save
```

##### 9. Arrow Function
Create a js file ``` ArrowFunctionExample.js ``` and open then write code like-<br>
```
import React from "react";

const ArrowFunctionExample = () =>{
    return(
        <div>
            <h5>I'm from arrow functional component.</h5>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centurie
            </p>
        </div>
    );
}

export default ArrowFunctionExample;
```

##### 10. State
##### 10.1. State use in class component
Create a js file ``` StateInClass.js ``` and open then write code like-<br>
```
import React, { Component } from "react";

class StateInClass extends Component{
    constructor(){
        super();
        this.state={
            name:'Mamunur Rashid',
            designation:'Software Engineer',
            height:['10','20','30'],
            weight:{
                cat1:50,
                cat2:60,
            }
        }
    }
    // set state example
    changeValue=()=>{
        this.setState({name:'Kamal',designation:'Accountant'});
    }
    render(){
        return(
            <div>
                <p>Name: {this.state.name}</p>
                <p>Designation: {this.state.designation}</p>
                <p>Height: {this.state.height[2]}</p>
                <p>Weight: {this.state.weight.cat2}</p>
                <button onClick={this.changeValue}>Click for change</button>
            </div>
        );
    }
}
export default StateInClass;
```

##### 10.2. State use in functional component
Create a js file ``` StateInFunction.js ``` and open then write code like-<br>
```
import React, {useState} from 'react';

const StateInFunction = () => {
    const [name,setName] = useState("Mamun");
    const [designation,setDesignation] = useState("Software Engineer");

    function changeValue(){
        setName("Hasan");
        setDesignation("IT Engineer");
    }

    return (
        <div>
            <p>State in function component example:</p>
            <p>Name : {name}</p>
            <p>Designation: {designation}</p>
            <button onClick={changeValue}>Click for change</button>
        </div>
    );
};

export default StateInFunction;
```

##### 11. Conditional Rendering
##### 11.1. Conditional rendering use in class component
Create a js file ``` Example1.js ``` and open then write code like-<br>
```
import React, { Component } from "react";

class Example1 extends Component{
    constructor(){
        super();
        this.state={
            login:true,
        }
    }

    render(){
        // conditional return
        if(this.state.login==true){
            return(<p>You are login</p>);
        }
        else{
            return(<p>You are log-out</p>);
        }

    }
}
export default Example1;
```

Example-2 : Create a js file ``` Example2.js ``` and open then write code like-<br>
```
import React, { Component } from "react";

class Example2 extends Component{
    constructor(){
        super();
        this.state={
            login:true,
        }
    }

    render(){
        // conditional return
        return(
            this.state.login==true?
            (<p>You are login</p>)
            :
            (<p>You are log-out</p>)
        )
    }
}
export default Example2;
```

##### 11.2. Conditional rendering use in functional component
Create a js file ``` ExampleInFunctionalComponent.js ``` and open then write code like-<br>
```
import React, {useState} from 'react';

const ExampleInFunctionalComponent = () => {
    const [auth,SetAuth] = useState(true);

    if(auth == true)
        return (
            <div>
                <p>Auth true</p>
            </div>
        );
    else
        return (
            <div>
                <p>Auth false</p>
            </div>
        );
};

export default ExampleInFunctionalComponent;
```

##### 12. Life Cycle
Mounting = constructor -> render -> componentDidMount <br>
Updating = state/props -> render -> componentDidUpdate <br>
Unmounting <br>
Example :
Create a js file ``` LifeCycleExample.js ``` and open then write code like- <br>
```
import React, {Component} from 'react';

class LifeCycleExample extends Component {
    constructor(props){
        super(props);
        this.state={
            count:0,
        }
        console.log('Constructor')
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate");
        return true;
    }

    render() {
        {console.log('Render')}
        return (
            <div>
                <h4>Count : {this.state.count}</h4>
                <button onClick={()=>{this.setState({count:this.state.count+1})}}> + </button>
            </div>
        );
    }
}

export default LifeCycleExample;
```


