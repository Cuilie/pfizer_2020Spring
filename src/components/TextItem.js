import React from 'react';

const TextItem = (props) => {
    const itemIdx = "index"+ props.index;
    let  boldTextStyle = {
        color:"blue"
    };

    if(props.index === props.clickStateId){
        return (
            <div className="item">
                <div className={itemIdx}>
                    <div className="content" style={boldTextStyle}>
                        <strong>{props.info}</strong>
                    </div>
                </div>
            </div>
        );
    }else{
        return(
            <div className="item">
                <div className={itemIdx}>
                    <div className="content">
                        {props.info}
                    </div>
                </div>
            </div>
        )
    }

};

export default TextItem;