import React from 'react';

const ProceduresItem = ({info, onInfoSelect}) => {

    return (
        <div onClick={() => onInfoSelect(info)} className="item">

                <div className="header">
                    {info.filename}
                </div>

        </div>
    )
};
export default ProceduresItem;