import React from 'react';
import Plot from 'react-plotly.js';




class TempDistribution extends React.Component {
    state = {data : [{
            x: [],
            y:  [],
            hovertemplate:  [],
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
        }]};

    render(){
        const tempsamples = this.props.tempsamples;
        if (!tempsamples){
            return <div>Loading...</div>}


        const data = [{
            x: tempsamples,
            type: 'violin',
            side: 'positive',
            hoveron:"violins+points+kde"
        }];


        return (
            <div>
                <Plot
                    data={data}
                    layout={ {width: 550, height: 400, title: 'Temperature Distribution',xaxis:{title:'Celsius'},
                        paper_bgcolor:'rgba(0,0,0,0)',
                        plot_bgcolor:'rgba(0,0,0,0)'} }
                    onClick={this.onClick}
                    onSelected={this.onHover}
                />
            </div>
        )
    }
}

export default TempDistribution;