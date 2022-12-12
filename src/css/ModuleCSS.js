import React, { Component } from 'react';
import MyModuleCss from './Mycss.module.css'; //module css import

class ModuleCSS extends Component {
    render() {
        return (
            <div>
                {/* module css */}
                <p className={MyModuleCss.textStyle}>Module CSS Example</p>
            </div>
        );
    }
}

export default ModuleCSS;