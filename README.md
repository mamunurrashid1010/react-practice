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

##### 5. Event Handling
* Button onClick event handling (class & functional component)

##### 6. Bootstrap installation and use in a program

##### 7. Arrow Function

##### 8. State
* Use state & setState in class component

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

##### 4. Bootstrap install
```
npm install --save bootstrap
```
Example
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