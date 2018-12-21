# webpack
## チュートリアル

### インストール
- `npm install webpack webpack-cli --save-dev`
### バンドルの作成
1. `/dist`に`index.html`を移動
1. ライブラリはローカルにインストールする必要あり
1. lodashのimport文記述
1. lodashのCDN削除
1. srcを`main.js`に書き換える
1. `npx webpack`
    - `src/index.js`がエントリーポイント
    - `dist/main.js`が出力される
### 設定ファイルを使用する
- バージョン4は設定ファイルがなくても動く
- `webpack.config.js`を配置する
- 設定ファイルを読み込んで実行
  - `npx webpack --config webpack.config.js`
  - `webpack.config.js`が存在すればデフォルトで読み込む、--configは任意のファイル名を指定するときに使う



- 参考
  - https://webpack.js.org/guides/getting-started/
