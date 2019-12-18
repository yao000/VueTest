import Vue from 'vue'
import Router from 'vue-router'
import CinemaRouter from './cinema'
import MineRouter from './mine'
import MovieRouter from './movie'


Vue.use(Router)

export default new Router({
    routes: [
        
        CinemaRouter,
        MineRouter,
        MovieRouter,
        {
            path: "/*",
            redirect: "movie"//默认路径
        }
    ]


})
