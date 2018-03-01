import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import  Wordcloud from '@/components/cloud'
import  Difficult from '@/components/difficult'
import  Interest from '@/components/interest'
import  Bedroom from '@/components/bedroom'
import  Graduate from '@/components/graduate'
import  Getup from '@/components/getup'
import  Gotobed from '@/components/gotobed'
import  Eat from '@/components/eat'
import  Amuse from '@/components/amuse'
import  Single from '@/components/single'

import  Onlyme from '@/components/onlyme'

const router=new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/',
            redirect:'/cloud'
        },
        {
            path:'/cloud',
            component:Wordcloud
        },
       {
            path:'/difficult',
            component:Difficult
        },
        {
            path:'/interest',
            component:Interest
        },
        {
            path:'/bedroom',
            component:Bedroom
        },
        {
            path:'/graduate',
            component:Graduate
        },
        {
            path:'/getup',
            component:Getup
        },
        {
            path:'/gotobed',
            component:Gotobed
        },
        {
            path:'/eat',
            component:Eat
        },
        {
            path:'/amuse',
            component:Amuse
        },
        {
            path:'/single',
            component:Single
        },
        {
            path:'/onlyme',
            component:Onlyme
        },

    ]
})

export default router

