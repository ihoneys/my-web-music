import { CHANGE_TOP_BANNER } from "./constants"
import { Map } from 'immutable'

const defaultStore = Map({
    topBanners: []
})

function reducer(state = defaultStore, action) {
    const { type, topBanners } = action
    switch (type) {
        case CHANGE_TOP_BANNER:
            return state.set('topBanners', topBanners);
        default:
            return state
    }
}

export default reducer