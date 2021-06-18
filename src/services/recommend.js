import request from './request'


export function getTopBanner() {
    return request({
        url: '/banner'
    })
}

export function getHotRecommedns() {
    return request({
        url: '/personalized',
        params: {
            limit: 8
        }
    })
}

export function getNewAlbums(limit) {
    return request({
        url: '/top/album',
        params: {
            limit
        }
    })
}
