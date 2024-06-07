// import Cle.js
import {LE_InitWebApp, RenderApp} from 'cle.js/lib'

import "./utils/csz.js"

import "./app/global-di-components/**/*.js" // auto import all global di components with glob and wildcard

import { Homepage } from './app/pages/home.page.deps'

// render app
LE_InitWebApp(async ()=>{ RenderApp(document.body, await Homepage() ) })


// or render app with lite cle routing!

// import {InitRouter, Router, RedirectTo} from "cle.js/routing/lite_routing"
// 
// export const HomePageRoute = async (state, params)=>{
// 
//   console.log(state, params)
// 
//   return await Homepage()
// 
// }
// 
// LE_InitWebApp(async ()=>{
// 
//   await InitRouter({
// 
//     pages: {
//       "/": HomePageRoute,
// 
//       "/redirect": RedirectTo("/"),
//       // "/details/:detail_id": DetailPageRoute, // parametric
// 
//     },
//   
//     defaultRoute: "/"
//   })
// 
// })
