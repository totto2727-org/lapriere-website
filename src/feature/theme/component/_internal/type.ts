/**
 * カラーテーマを設定するためのラジオボタンのProps
 *
 * @property value ラジオボタンの値 通常はModeもしくはPaletteのユニオン型
 * @property label ラジオボタンに表示する文字列
 * @property checked ラジオボタンが選択されているか否か
 */
export interface ColorThemeRatioProps<T extends string> {
  value: T
  label: string
  selected: boolean
}
