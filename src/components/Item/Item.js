import React from 'react';
import './Item.css';
import {extractHostname} from '../../utils/utils';
import grayarrow from '../../images/grayarrow.gif';
import ItemSubLine from './ItemSubline/ItemSubline';
import Comment from '../Comment/Comment';

const item = (props) => {
    if (props.itemType === 'comments') {
        return <Comment {...props} />;
    }

    const commentsCount = (props.kids && props.kids.length) || 0;
    let numberWithArrow = null;

    if (props.itemType !== 'jobstories') {
        numberWithArrow = 
                        <span>
                            <span className="number">{props.index + 1}.</span>
                            <img src={grayarrow} className="grayarrow" alt="up" />
                        </span>;
    }

    let title = props.title;

    return (
        <div className="Item row">
            <div className="col">
                <div className="title">
                    {numberWithArrow}
                    <a href={props.url}>{title}</a>
                    {props.url ? <span className="subtext"> ({extractHostname(props.url)})</span> : ''}
                </div>
                <ItemSubLine {...props} commentsCount={commentsCount} />
            </div>
        </div>
    );
}

export default item;
