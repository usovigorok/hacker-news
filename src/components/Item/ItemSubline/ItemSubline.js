import React from 'react';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

TimeAgo.locale(en);
const timeAgo = new TimeAgo('en-US');

const ItemSubline = (props) => {
    let line = null;
    const timeLine = timeAgo.format(props.time * 1000);
    let className = 'subtext';

    switch (props.itemType) {
        case 'topstories':
            line = `${props.score} points by ${props.by} ${timeLine} | hide | ${props.commentsCount} comments`;
        break;
        case 'newstories':
            line = `${props.score} points by ${props.by} ${timeLine} | hide | past | web | discuss`;
        break;
        case 'showstories':
        case 'askstories':
            line = `${props.score} points by ${props.by} ${timeLine} | ${props.commentsCount} comments`;
        break;
        case 'jobstories':
            line = `${timeLine}`;
            className = 'subtext jobs';
        break;
        default:
        break;
    }

    return (
        <div className={className}>
            {line}
        </div>
    )
}

export default ItemSubline;