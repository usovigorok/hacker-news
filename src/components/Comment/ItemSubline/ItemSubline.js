import React from 'react';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import grayarrow from '../../../images/grayarrow.gif';

TimeAgo.locale(en);
const timeAgo = new TimeAgo('en-US');

const ItemSubline = (props) => {
    const timeLine = timeAgo.format(props.time * 1000);
    const parentTitle = (props.parentData && props.parentData.title) || '';
    const className = 'subtext-comment';
    let line = ` ${props.by} ${timeLine} | parent`;
    if (parentTitle) {
        line += ` | on: ${parentTitle}`;
    }

    return (
        <div className={className}>
            <span>
                <img src={grayarrow} className="grayarrow" alt="up" />
            </span>
            {line}
        </div>
    )
}

export default ItemSubline;