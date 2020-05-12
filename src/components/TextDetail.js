import React from 'react';
import TextList from "./TextList";






class VideoDetail extends React.Component {


    state = {
            material:null,
        };


    onClick = (event) => {
        // event.preventDefault();
        console.log(event);
        const stateId = event.points[0].x;
        this.setState({
            clickText:this.props.info.tempdata.text[stateId],
            clickStateId:stateId
        })
    };



    render(){
        const info = this.props.info;

        if (!info){
            return <div>Loading...</div>}

        let TextComponentStyle = {
            left: "0px",
            top: "2px",
            backgroundColor: "aliceblue",
            padding:"20px",
            width: "360px"
    };



        // this.setState({data:data})
        return (
            <div>
                <div className="content" style={TextComponentStyle}>
                    <b>{this.props.info.filename}</b>
                    <br />
                    <br />
                    <div>
                        <TextList
                            infos = {this.props.info.tempdata.text}
                            clickStateId = {this.props.point.clickStateId}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default VideoDetail;