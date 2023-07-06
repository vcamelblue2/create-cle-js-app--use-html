import { defineHtmlComponent } from "cle.js/lib/caged-le"

import { Timer } from "cle.js/components"

import { Clock } from "../components/clock.component.deps"
import { CircleImage } from "../components/circle-image.component"
import { Card } from "../components/card.component"


import html from "bundle-text:./home.page.ui.html"

// version: inject deps only (for parceljs compiler/bundler static analysis)
export const Homepage = defineHtmlComponent(html, { isRemote: false, defArgMapper: async (params, state, DepsInj)=>({ params, state, 
    DepsInj: {
      
      Timer: Timer,
      CircleImage: await CircleImage(),
      Clock: await Clock(), 
      Card: await Card(),
      
      ...DepsInj

      // Clock: await Clock(pass, pass, {CustomHeader: {b: {}}} ), ...DepsInj
    }
  })
})
    


// version: define "def" here instead of "script" in html (for parceljs compiler/bundler static analysis)
// export const Homepage = defineHtmlComponent(html, { isRemote: false, def: async (Cle, params, state, style, DepsInj)=>[
// { 
//  
//     id: "home",
//
//     let: {
//         myVar: "hi to all",
//         name: "user1"
//     }
//
// },
// { 
//     deps: { Clock: await Clock() }
// }
// ]})
