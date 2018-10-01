import React, { Component } from 'react';
import Article from '../components/Article';
import axios from 'axios';

class ArticleList extends Component {
    state = {
        articles: [],
        loading: true,
    };

    componentDidMount() {
        const that = this;
        axios.get('https://hacker-news.firebaseio.com/v0/topstories.json')
        .then(function (response) {
            debugger;
            that.setState({
                loading: false
            });
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
    }

    render() {
        if (this.state.loading) {
            return <div>Loading...</div>;
        }

        return this.state.articles.map(article => {
            return (
                <Article article={article} />
            );
        });
    }
}

export default ArticleList;
