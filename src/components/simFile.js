import React from 'react';
import Plot from 'react-plotly.js';




class SimFile extends React.Component {



    onClick = (event) => {
        this.props.onFileSelect(event.points[0].y);
    };

    onHover = (event) => {
        console.log(event);
    };

    state = {data : [{
            x: [],
            y:  [],
            hovertemplate:  [],
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
        }]};


    dataPreprocess(listdata){
        let idList = [];
        let filename = [];
        let simDegree = [];
        for (var i=0; i < listdata.length ;i++) {
            idList.push(i);
            filename.push(listdata[i][0]);
            simDegree.push(listdata[i][1]);
        }
        const formateData = {idList:idList,filename:filename,simDegree:simDegree}
        return formateData;
    }


    render(){





        if (!this.props.info){
            return <div>Loading...</div>}
        let simData = this.props.info.tfidfsimilarity;
        if(this.props.simButtonType === "TF-IDF"){
            simData = this.props.info.tfidfsimilarity;
        }
        if(this.props.simButtonType === "Combined"){
            simData = this.props.info.combinedsimilarity;
        }

        const plotdata = this.dataPreprocess(simData);
        console.log(this.props.simButtonType);



        const data = [{
            y: plotdata.filename.slice(0,10).reverse(),
            x: plotdata.simDegree.slice(0,10).reverse(),
            type: 'scatter',
            mode: 'markers',
            hovertext:plotdata.simDegree.slice(0,10).reverse(),

        }];

        var layout = {
            title: 'Similar Files',
            yaxis:{
                title: 'fileId',
            },
            xaxis: {
                title:'Cosine Similarity',
                showgrid: true,
                showline: true,
                linecolor: 'rgb(102, 102, 102)',
                titlefont: {
                    font: {
                        color: 'rgb(204, 204, 204)'
                    }
                },
                tickfont: {
                    font: {
                        color: 'rgb(102, 102, 102)'
                    }
                },
                autotick: true,
                dtick: 10,
                ticks: 'outside',
                tickcolor: 'rgb(102, 102, 102)'
            },
            margin: {
                l: 140,
                r: 40,
                b: 50,
                t: 80
            },
            legend: {
                font: {
                    size: 10,
                },
                yanchor: 'middle',
                xanchor: 'right'
            },
            width: 360,
            height: 320,
            paddingBottom:100,
            paper_bgcolor: 'aliceblue',
            plot_bgcolor: 'aliceblue',
        };



        return (
            <div >
                <Plot
                    data={data}
                    layout={layout}
                    onClick={this.onClick}
                    onSelected={this.onHover}
                />
            </div>
        )
    }
}

export default SimFile;