import {f1} from './fr.js'
import { f2 } from './xt.js'
f1()
f2()
import './styles/index.css'
import './styles/index.less'

import gifSrc from './assets/1.gif'
import pngSrc from './assets/logo_small.png'

const gif = document.createElement('img')
const png = document.createElement('img')

gif.src = gifSrc
png.src = pngSrc

document.body.appendChild(gif)
document.body.appendChild(png)

import './assets/fonts/iconfont.css'
import App from './app.vue'

const test = () => console.log('1111')
console.log(test) 