export default {
    path: '/movie',
    component: () => import('@/views/Movie'),
    children: [
        {
            path: 'city',
            component: () => import('@/components/City')
        },
        {
            path: 'ComingSoon',
            component: () => import('@/components/ComingSoon')
        },
        {
            path: 'NowPlaying',
            component: () => import('@/components/NowPlaying')
        },
        {
            path: 'Search',
            component: () => import('@/components/Search')
        }
    ]
}