import Cookies from 'js-cookie'

import {
  addColorThemeChangeEventListener,
  getColorThemeChangeEventDefaultTarget,
  loadColorThemeOnClientCookie,
} from '../lib'

// テーマの設定
// 不適切な値であれば初期値にリセット
const theme = loadColorThemeOnClientCookie(Cookies.get())
document.documentElement.dataset.theme = theme.mode
document.documentElement.dataset.palette = theme.palette

// テーマ更新のためのイベントリスナー
addColorThemeChangeEventListener(getColorThemeChangeEventDefaultTarget())
