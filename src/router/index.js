import { Redirect } from 'react-router-dom'

import IYDiscover from '@/pages/discover'
import IYMine from '@/pages/mine'
import IYFriend from '@/pages/friend'

import IYSongs from '@/pages/discover/c-pages/songs'
import IYRecommend from '@/pages/discover/c-pages/recommend'
import IYRanking from '@/pages/discover/c-pages/ranking'
import IYDjradio from '@/pages/discover/c-pages/djradio'
import IYArtist from '@/pages/discover/c-pages/artist'
import IYAlbum from '@/pages/discover/c-pages/album'



const routes = [
    {
        path: '/',
        exact: true,
        render: () => <Redirect to="/discover"/>,
    },
    {
        path: '/discover',
        component: IYDiscover,
        routes: [
            {
                path: '/discover',
                exact: true,
                render: () => <Redirect to="/discover/recommend"/>,
            },
            {
                path: '/discover/recommend',
                component: IYRecommend
            },
            {
                path: '/discover/songs',
                component: IYSongs
            },
            {
                path: '/discover/ranking',
                component: IYRanking
            },
            {
                path: '/discover/djradio',
                component: IYDjradio
            },
            {
                path: '/discover/artist',
                component: IYArtist
            },
            {
                path: '/discover/album',
                component: IYAlbum
            },
        ]
    },
    {
        path: '/my',
        component: IYMine
    },
    {
        path: '/friend',
        component: IYFriend
    }
]

export default routes