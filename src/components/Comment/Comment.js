import React from 'react';
import ItemSubLine from './ItemSubline/ItemSubline';
const HtmlToReactParser = require('html-to-react').Parser;

const comment = (props) => {
    const htmlToReactParser = new HtmlToReactParser();
    const reactElement = htmlToReactParser.parse(props.text);

    return (
        <div className="Comment row">
            <div className="col">
                <ItemSubLine {...props} />
                <div className="title">
                    {reactElement}
                </div>
            </div>
        </div>
    );
}

export default comment;
