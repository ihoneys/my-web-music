import * as actionsType from './constants'

import { getTopBanner } from '@/services/recommend'

const changeTopBannersAction = (res) => ({
    type: actionsType.CHANGE_TOP_BANNER,
    topBanners: res.banners
})


export const getTopBannerAction = () => {
    return dispatch => {
        getTopBanner().then(res => {
            dispatch(changeTopBannersAction(res))
        })
    }
}
