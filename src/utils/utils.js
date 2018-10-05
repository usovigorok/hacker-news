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

export function loadRelatedData(itemsIds) {
    const promises = itemsIds.map((itemId) => {
        return axios.get(`https://hacker-news.firebaseio.com/v0/item/${itemId}.json`)
            .then((response) => {
                return Promise.resolve(response.data);
            });
    });

    return Promise.all(promises);
}
