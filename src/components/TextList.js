import React from 'react';
import TextItem from './TextItem';
import BScroll from "better-scroll";
import './TextList.css';



class TextList extends React.Component {
    state = {
        scrollObject:null,
        scrollToIdx:0
    };
    componentDidMount() {
        const textwrapper = document.querySelector('.textwrapper');
        const scroll = new BScroll(textwrapper,{
            scrollY: true,
            scrollX: false,
            click: true,
           }
        );
        this.setState({scrollObject:scroll});
        this.setState({scrollToIdx:this.props.clickStateId})



    }
    componentDidUpdate() {
        // this.state.scrollObject.scrollToElement('TextItem:nth-child(4)', 1000);
        let a = document.querySelector(".textwrapper .content .item .index" + this.props.clickStateId );
        console.log(a);
        this.state.scrollObject.scrollToElement(a, 400, 0)
    }

    render(){
        const allTest = Object.values(this.props.infos);
        const renderedList = allTest.map((info,index) => {
            return <TextItem
                    key={index}
                    info={info}
                    index={index}
                    clickStateId={this.props.clickStateId}/>
        });

        return(
            <div className = "textwrapper">
                <div className = "content">
                    <div className = "ui tiny relaxed divided list">
                        {renderedList}
                    </div>
                </div>
            </div>
        )
    }
}

export default TextList;