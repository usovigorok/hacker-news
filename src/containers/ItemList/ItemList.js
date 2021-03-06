import React, { Component } from 'react';
import Item from '../../components/Item/Item';
import axios from 'axios';
import { loadRelatedData, loadParentData } from '../../utils/utils';

class ItemsList extends Component {
    state = {
        items: [],
        loading: true,
    };

    componentDidUpdate(prevProps) {
        if (this.props.apiPath !== prevProps.apiPath) {
            this.setState({
                loading: true,
            });
            this.fetchData();
        }
    }

    componentDidMount() {
        this.fetchData();      
    }

    fetchData() {
        const that = this;
        const { apiPath, itemType } = this.props;

        axios.get(`https://hacker-news.firebaseio.com/v0/${apiPath}.json`)
        .then((response) => {
            if (itemType === 'comments') {
                that.fetchComments(response);   
            } else {
                that.fetchItems(response);        
            }
        }).catch(function (error) {
            console.log(error);
        });    
    }

    fetchComments(response) {
        const ids = response.data.items;
        loadRelatedData(ids, 'comment').then((items) => {
            let preparedItems = items.filter(item => (item !== null));
            preparedItems.sort((item1, item2) => {
                return item2.time - item1.time;
            });

            loadParentData(preparedItems).then((parentData) => {
                preparedItems = preparedItems.map(item => {
                    let preparedParentData = parentData.flat(10);
                    preparedParentData = preparedParentData.filter(value => value[item.id]);
                    
                    if (preparedParentData.length > 0) {
                        item.parentData = preparedParentData[0][item.id];
                    }
                    return item; 
                })

                this.setState({
                    loading: false,
                    items: preparedItems  
                });
            });            
        });
    }

    fetchItems(response) {
        const ids = response.data.slice(0, 30);
        loadRelatedData(ids).then((items) => {
            this.setState({
                loading: false,
                items
            });
        });
    }

    render() {
        if (this.state.loading) {
            return <div className="loading">Loading...</div>;
        }
        
        const items = this.state.items.map((item, index) => {
            return (
                <Item key={item.id} index={index} {...item} itemType={this.props.itemType} />
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
