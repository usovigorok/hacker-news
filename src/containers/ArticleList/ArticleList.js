import React, { Component } from 'react';
import Article from '../../components/Article/Article';
import axios from 'axios';

class ArticleList extends Component {
    state = {
        articles: [],
        loading: true,
    };

    componentDidUpdate(prevProps) {
        if (this.props.apiPath !== prevProps.apiPath) {
            this.fetchData();
        }
    }

    componentDidMount() {
        this.fetchData();      
    }

    fetchData() {
        const that = this;
        const { apiPath } = this.props;

        axios.get(`https://hacker-news.firebaseio.com/v0/${apiPath}.json`)
        .then((response) => {
            const articlesIds = response.data.slice(0, 30);
            const promises = articlesIds.map((articleId) => {
                return axios.get(`https://hacker-news.firebaseio.com/v0/item/${articleId}.json`)
                    .then((response) => {
                        return Promise.resolve(response.data);
                    });
            });

            Promise.all(promises).then((articles) => {
                that.setState({
                    loading: false,
                    articles
                });
            }).catch(function (error) {
                console.log(error);
            });
        });        
    }

    render() {
        if (this.state.loading) {
            return <div>Loading...</div>;
        }
        
        const articles = this.state.articles.map((article, index) => {
            return (
                <Article key={article.id} index={index} {...article} />
            );
        });

        return (
            <div>
                {articles}
            </div>
        );
    }
}

export default ArticleList;
