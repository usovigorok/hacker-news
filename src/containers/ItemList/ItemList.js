import React, { Component } from 'react';
import Article from '../../components/Article/Article';
import axios from 'axios';

class ItemsList extends Component {
    state = {
        items: [],
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

        axios.get(`https://api.hnpwa.com/v0/${apiPath}/1.json`)
        .then((response) => {
            that.setState({
                loading: false,
                items: response.data
            });
        }).catch(function (error) {
            console.log(error);
        });    
    }

    render() {
        if (this.state.loading) {
            return <div>Loading...</div>;
        }
        
        const items = this.state.items.map((article, index) => {
            return (
                <Article key={article.id} index={index} {...article} />
            );
        });

        return (
            <div>
                {items}
            </div>
        );
    }
}

export default ItemsList;
