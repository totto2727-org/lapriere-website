# Cloudflare Pages

これはCloudflare Pagesの設定をまとめたドキュメントです。

## 環境変数

|     name     |                 preview                  |                 dev                  |
| :----------: | :--------------------------------------: | :----------------------------------: |
| CMS_BASE_URL | <https://dev-lapriere-cms.totto2727.dev> | <https://lapriere-cms.totto2727.dev> |

## 初期設定

1. GitHubのPages連携の対象リポジトリに追加
2. Pagesプロジェクトの新規作成
3. 選択
4. フレームワークをAstroに設定
5. スクリプトをbun run buildに変更

## Custom Domain

lapriere.totto2727.dev

## General

### Web Analytics

true

## Build & Deployments

### Build cache

true

## Functions

### Placement

Smart
