import React from 'react';

class OriginalText extends  React.Component {
    state = {text :''};



    render(){
        const textstyle = {
            backgroundColor:"rgba(0,0,0,0.2",
            opacity: 0.8
        };
        const info = 1;
        if (!info){
            return <div>Loading...</div>}
        return (
            <div style={textstyle}>
                <div className="ui segment">
                    <h4 className="ui header"> {this.props.title}</h4>
                    <p> {this.props.text}</p>
                </div>
            </div>
        )
    }

}


export default OriginalText;