# La prière 非公式ファンサイト（仮）フロントエンド

アイドルユニット[La prière](https://lapriere.jp/)と各メンバーについての情報をまとめたプロジェクトのフロントエンド実装です。

## 技術スタック

- Astro
  - SSG、SSRの両方を用いてページを構築しています
- Qwik
  - クライアントサイドの動的なUIを実現するためのUIライブラリです
- Tailwind CSS
  - Astro、Qwik間の差分を小さくするためのCSSフレームワークです
- daisyui
  - JSなしでサイトに動きを追加するために導入しています
  - テーマの自動管理という側面もあります
- Prettier
  - 将来的にBiomeに統合する予定
- ESLint
  - 将来的にBiomeに統合する予定
  - AstroのLinterはFlat Config周りの問題で現状はなしにしています
- stylelint
  - TailwindがありますがCSSが必要になった場合に備えて導入しています
- Bun
  - Cloudflare Workersとの相性を踏まえて採用しています
- Cloudflare Pages
  - 無料でホスティング可能なため採用しています

## 関連プロジェクト

- [開発者用の統合リポジトリ](https://github.com/totto2727-org/lapriere-services)
- [本プロジェクトで使用しているCMS](https://github.com/totto2727-org/lapriere-cms)
