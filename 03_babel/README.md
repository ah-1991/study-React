# Babelの導入 cli
1. cli のインストール
    - `npm install --save-dev babel-cli`
1. コマンドラインの登録
    > "scripts": {  
    > "build": "babel src -d lib"  
    > },  
1. .babelrcの作成
    > {  
    > "presets": ["env"]  
    > },  
1. babel-preset-envのインストール
    - `npm install --save-dev babel-core babel-preset-env`
