// import youtube from '../apis/youtube';
import React from 'react';
import SearchBar from './SearchBar';
import ProceduresList from "./ProceduresList";
import ProceduresDetail from "./ProceduresDetail";
import TextDetail from "./TextDetail";
import datatotal from "../data/ensemble_data.json";
import TempDistribution from "./TempDistribution";
import SimFile from "./simFile";
import "./App.css";
import Background from '../image/pfizer2.png';
import WPILogo from '../image/WPILogo.png';
import pfizerLogo from '../image/pfizer3.png'

import OriginalText from "./OriginalText";



class App extends React.Component {
    state = {
        simButtonType:"TF-IDF",
        infos:[],
        selectedInfo:null,
        tempData:null,
        tempStat:null,
        fileName:null,
        selectedPoint:{
            clickStateId:null,
            clickText:null

        },
    };


    onTermSubmit = async (fileName) => {
        // acye request!
        console.log(this.state)
        const filesInfo = datatotal.fileInfo;
        this.setState({
            infos:filesInfo,
            selectedInfo:filesInfo[0],
            TemperatureSamples:datatotal.TemperatureSamples,
        });

        for (let i=0; i < filesInfo.length ;i++) {
            if(filesInfo[i].fileid === fileName){
                this.setState({selectedInfo:filesInfo[i]})
            }
        }
    };


    onInfoSelect = (info) => {
        this.setState({selectedInfo:info})
    };

    onPointSelect = (point) => {
        this.setState({selectedPoint:point});
    };

    onFileSelect = (fileName) => {
        const fileList = datatotal.fileInfo;
        this.setState({fileName:fileName});
        for (let i=0; i < fileList.length ;i++) {
            if(fileList[i].fileid === fileName){
                this.setState({selectedInfo:fileList[i]})
            }
        }
    };


    render(){
        let loaderStyle ={
            height:"30vh"
        };

        let sectionStyle = {
            width: "100%",
            height: "100%",
            backgroundImage: `url(${Background})`,
            opacity: 1,
            repeat:"repeat-x",
            position: 'absolute',
            // backgroundSize: "100%",
            backgroundColor:"rgba(255, 255, 255, 0.5)"
    };
        console.log(datatotal);
        if(!this.state.selectedInfo){
            return(
                <div style={sectionStyle}>
                    <div className="upperLogo">
                        <img src={WPILogo} alt="WPI" className="WPILogo"/>

                    </div>

                    <div className="downLogo">
                        <img src={pfizerLogo} alt="pfizer" className="pfizerLogo" />
                    </div>


                    <div className="ui container">
                        <SearchBar className="searchBar" onTermSubmit = {this.onTermSubmit}/>
                        <div className="ui segment">
                            <div className="ui active inverted dimmer" style={loaderStyle}>
                                <div className="ui massive text loader">Preparing Files...</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }else{
            return(
                <div style={sectionStyle}>
                    <div className="upperLogo">
                        <img src={WPILogo} alt="WPI" className="WPILogo"/>

                    </div>

                    <div className="downLogo">
                        <img src={pfizerLogo} alt="pfizer" className="pfizerLogo" />
                    </div>

                    <div className="ui container">
                        <SearchBar onTermSubmit = {this.onTermSubmit}/>
                        <div className="ui centered grid">
                            <div className="three wide column">
                                <ProceduresList
                                    onInfoSelect = {this.onInfoSelect}
                                    infos = {this.state.infos}/>
                            </div>

                            <div className="seven wide column">
                                <div className="four wide column">
                                    <ProceduresDetail
                                        info = {this.state.selectedInfo}
                                        onPointSelect = {this.onPointSelect}
                                    />
                                </div>
                                <div className="Summary1">
                                    <OriginalText title="Temperature Fluctuation "
                                                  text="Line chart: Corresponding to the temperature extracted by
                                                      regular expression."/>
                                </div>
                                <div className="four wide column">
                                    <TempDistribution
                                        tempsamples = {datatotal.TemperatureSamples}
                                    />
                                </div>

                                <div className="Summary2">
                                    <OriginalText title="Distribution Component"
                                                  text="
                                                  Single-side violin chart: Corresponding to this distribution of temperature
                                                  from all chemical procedure."/>
                                </div>

                            </div>


                            <div className="five wide centered column">
                                <div className="column-2nd">
                                    <div className="textdetail">
                                        <TextDetail
                                            info = {this.state.selectedInfo}
                                            point = {this.state.selectedPoint}
                                        />
                                    </div>
                                    <div className="Summary3">
                                        <OriginalText title="The Original Text Component"
                                                      text="
                                                      This component indicate from which sentence we extracted the temperature,
                                                      a sentence corresponds to a point in chart of temperature fluctuation.
                                                       "/>
                                    </div>
                                    <div className="simfile">
                                        <SimFile
                                            onFileSelect = {this.onFileSelect}
                                            info = {this.state.selectedInfo}
                                            simButtonType = {this.state.simButtonType}
                                        />

                                    </div>
                                    <div className="simfile-button">
                                        <div className="Tiny ui buttons" style={{width: "360px"}}>
                                            <button className="ui blue basic button"
                                                    onClick={() => (this.setState({simButtonType:"TF-IDF"}))}
                                            >TF-IDF</button>
                                            <div className="or"></div>
                                            <button className="ui blue basic button"
                                                    onClick={() => (this.setState({simButtonType:"Combined"}))}
                                            >Combined</button>
                                        </div>
                                    </div>
                                    <div className="Summary4">
                                        <OriginalText title="Similar Files component "
                                                      text="
                                                      SimilarFile component indicates the top10 similar files of selected procedure.
                                                      We provide two options: The scores of similarity computed by TF-IDF and by combination of compounds and operations.
                                                      "/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

    }
}

export default App;