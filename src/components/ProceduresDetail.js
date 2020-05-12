import React from 'react';
import Plot from 'react-plotly.js';



class ProceduresDetail extends React.Component {


    state = {data : [{
                    x: [],
                    y:  [],
                    hovertemplate:  [],
                    type: 'scatter',
                    mode: 'lines+markers',
                    marker: {color: 'red'},
            }],
            clickText:null,
            clickStateId:null,
            material:null,
        };

    dataPreprocess(tempdata){
        let idList = [];
        let operations = [];
        let temperatures = [];
        let durations = [];
        for (const id in tempdata.temperature) {
            idList.push(id);
            operations.push('At:' + tempdata.temperature[id] + '°C, '+ tempdata.action[id]+' '+tempdata.duration[id]);
            temperatures.push(tempdata.temperature[id]);
            durations.push(tempdata.duration[id]);
        }
        return [idList,operations,temperatures,durations];
    }

    // onClick={() => onInfoSelect(info)}

    onClick = (event) => {
        // event.preventDefault();

        const stateId = event.points[0].x;

        let selectedPoint =  {
            clickText:this.props.info.tempdata.text[stateId],
            clickStateId:stateId
        };
        this.props.onPointSelect(selectedPoint)
    };



    render(){
        const info = this.props.info;
        if (!info){
            return <div>Loading...</div>}
        const re = this.dataPreprocess(this.props.info.tempdata);
        const data = [{
            x: re[0],
            y: re[2],
            hovertemplate:  re[1],
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'blue'},
        }];





        return (
            <div>
                <Plot
                    className="plotly-plot"
                    data={data}
                    layout={ {
                        paper_bgcolor:'rgba(0,0,0,0)',
                        plot_bgcolor:'rgba(0,0,0,0)',
                        width: 550,
                        height: 400,
                        title: 'Temperature Fluctuations',
                        yaxis:{title:'Celsius'},
                        xaxis:{title:'OperationId'}
                    } }
                    onClick={this.onClick}
                />
            </div>
        )
    }
}

export default ProceduresDetail;