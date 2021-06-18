import * as actionsType from './constants'

import { getTopBanner, getHotRecommedns, getNewAlbums } from '@/services/recommend'

const changeTopBannersAction = (res) => ({
    type: actionsType.CHANGE_TOP_BANNER,
    topBanners: res.banners
})

const changeHotRecommends = (res) => ({
    type: actionsType.CHANGE_HOT_RECOMMEND,
    hotRecommends: res.result
})


const changeNewAlbums = (res) => ({
    type: actionsType.CHANGE_NEW_ALBUM,
    newAlbums: res.albums
})


export const getTopBannerAction = () => {
    return dispatch => {
        getTopBanner().then(res => {
            dispatch(changeTopBannersAction(res))
        })
    }
}


export const getHotRecommendsAction = () => {
    return dispatch => {
        getHotRecommedns().then(res => {
            dispatch(changeHotRecommends(res))
        })
    }
}


export const getNewAlbumsAction = (limit) => {
    return dispatch => {
        getNewAlbums(limit).then(res => {
            dispatch(changeNewAlbums(res))
        })
    }
}
