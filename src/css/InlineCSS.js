import React, { Component } from 'react';

class InlineCSS extends Component {
    render() {
        return (
            <div>
                {/* inline css */}
                <p style={{color:"white",backgroundColor:"green",fontSize:"20px"}}>Inline CSS practice</p>
            </div>
        );
    }
}

export default InlineCSS;