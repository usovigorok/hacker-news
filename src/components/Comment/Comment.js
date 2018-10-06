import React from 'react';
import ItemSubLine from './ItemSubline/ItemSubline';

const comment = (props) => {
    return (
        <div className="Comment row">
            <div className="col">
                <ItemSubLine {...props} />
                <div className="title">
                    {props.text}
                </div>
            </div>
        </div>
    );
}

export default comment;
