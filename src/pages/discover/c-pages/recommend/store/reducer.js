import { CHANGE_TOP_BANNER, CHANGE_HOT_RECOMMEND, CHANGE_NEW_ALBUM } from "./constants"
import { Map } from 'immutable'

const defaultStore = Map({
    topBanners: [],
    hotRecommends: [],
    newAlbums: [],
})

function reducer(state = defaultStore, action) {
    const { type, topBanners, hotRecommends, newAlbums } = action
    switch (type) {
        case CHANGE_TOP_BANNER:
            return state.set('topBanners', topBanners);
        case CHANGE_HOT_RECOMMEND:
            return state.set('hotRecommends', hotRecommends);
        case CHANGE_NEW_ALBUM:
            return state.set('newAlbums', newAlbums);
        default:
            return state
    }
}

export default reducer