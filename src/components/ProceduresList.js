import React from 'react';
import ProceduresItem from './ProceduresItem';
import BScroll from 'better-scroll';

import './ProceduresList.css'


class ProceduresList extends React.Component{

    componentDidMount() {
        const wrapper = document.querySelector('.wrapper');
        const scroll = new BScroll(wrapper,{
            scrollY: true,
            scrollX: false,
            click: true,
            scrollbar: {
                fade: true,
                interactive: true // 1.8.0 新增
            }});

        console.log(scroll);
    }

    render(){
        let videoListStyle ={
            backgroundColor: "aliceblue",
        };
        const renderedList = this.props.infos.map(info => {
            return <ProceduresItem key={info.fileid}
                                   info={info}
                                   onInfoSelect = {this.props.onInfoSelect}
                              />
        });

        return(
            <div style={videoListStyle}>
                <div className = "wrapper" ref="wrapper">
                    <div className= "content">
                        <div className = "ui tiny relaxed divided list">
                            {renderedList}
                        </div>
                    </div>
                </div>

            </div>


        )
    }
}

export default ProceduresList;