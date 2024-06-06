// ページ読み込み後、バリデーション込みで再度値を代入するため、ここでは実装の軽量さを優先して検証なしで代入
const cookies = document.cookie.split('; ')

document.documentElement.dataset.theme = cookies
// @ts-expect-error インラインスクリプトのため無効化
  ?.find(row => row.startsWith(mode))
  ?.split('=')[1]

document.documentElement.dataset.palette = cookies
// @ts-expect-error/ @ts-expect-error インラインスクリプトのため無効化
  ?.find(row => row.startsWith(palette))
  ?.split('=')[1]
