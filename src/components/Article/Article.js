import React from 'react';
import './Article.css';
import {extractHostname} from '../../utils/utils';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import grayarrow from '../../images/grayarrow.gif';

TimeAgo.locale(en);
const timeAgo = new TimeAgo('en-US');

const article = (props) => {
    const commentsCount = (props.kids && props.kids.length) || 0;
    return (
        <div className="Article row">
            <div className="col">
                <div className="title">
                    <span className="number">{props.index + 1}.</span>
                    <img src={grayarrow} className="grayarrow" />
                    <a href={props.url}>{props.title}</a>
                    {props.url ? <span className="subtext"> ({extractHostname(props.url)})</span> : ''}
                </div>
                <div className="subtext">
                    {props.score} points by {props.by} {timeAgo.format(props.time * 1000)} | hide | {commentsCount} comments
                </div>
            </div>
        </div>
    );
}

export default article;
