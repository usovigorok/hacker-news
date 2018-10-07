import axios from 'axios';

export function extractHostname(url) {
    if (!url) {
        return '';
    }
    let hostname;
    if (url.indexOf("//") > -1) {
        hostname = url.split('/')[2];
    }
    else {
        hostname = url.split('/')[0];
    }

    hostname = hostname.split(':')[0];
    hostname = hostname.split('?')[0];

    return hostname;
}

export function loadRelatedData(itemsIds, itemType) {
    const promises = itemsIds.map((itemId) => {
        return axios.get(`https://hacker-news.firebaseio.com/v0/item/${itemId}.json`)
            .then((response) => {
                if (itemType && response.data.type !== itemType) {
                    return Promise.resolve(null);
                }

                return Promise.resolve(response.data);
            });
    });

    return Promise.all(promises);
}

export function loadParentData(items) {
    const promises = items.map((item) => {
        if (!item.parent) {
            return null;
        }
        return axios.get(`https://hacker-news.firebaseio.com/v0/item/${item.parent}.json`)
            .then((response) => {
                if (response.data.parent) {
                    return loadParentData([response.data]);
                }  
                const result = {};
                result[item.id] = response.data;
                return Promise.resolve(result);
            });
    });

    return Promise.all(promises);
}
