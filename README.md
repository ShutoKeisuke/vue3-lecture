# Vue3レクチャーpart7
## Vueの基本構造
### 概要
- Vuexを使用しよう
- apiをmockしよう

### レクチャー手順
1. Vuexのインストール
    1. npm install vuex@next --save
    2. vuexの説明
        1. データを集中管理できる
        2. 画面規模が大きくなるとvueファイルだけでは可読性が悪くなる
            1. イベントハンドラなどの記載が増える
            2. 定数の記載なども増える
            3. この中に変数のフォーマットやAPI通信や、データのget/setの記述を細かく書いていたら読めたものではない
        3. state
            1. データの状態管理(モデル)
        4. mutations
            1. stateの値を更新する
        5. actions
            1. 画面から呼び出す処理を記載する(厳密にはmutationも画面から呼び出して値の更新は可能だが、actionsに集約することで可読性があがる)
            2. mutationsを呼ぶことができる(直接stateの値を更新することができない)
        6. getters
            1. 値を返す
                1. stateの値をそのまま返す
                2. stateの値をフォーマットして返す
                3. stateの値から何かしらのフラグを算出して返す
2. Vuexの利用記載
    1. store/modules/reserveUserInfo/index.jsを作成・実装
    2. store/index.jsを作成・実装
    3. main.jsに追記
3. vue-dev-toolsインストール
4. vuex疎通確認
5. MSWのインストール
    1. ~~npm install msw --save-dev~~pakage.jsonのdevDependenciesに"msw": "0.33.2",を追加し、npm installを実行
    2. npx msw init public/ --save
    3. ~~npm install @bundled-es-modules/msw~~
6. mockファイルの作成
    1. src配下にapiフォルダ作成
    2. api配下にmockフォルダ作成
    3. mock配下にtodoInfoフォルダを作成
    4. todoInfoフォルダにindex.jsファイルを作成し、実装
    5. mock配下にhandlers.jsファイルを作成し、実装
7. 環境変数の作成
    1. ルートディレクトリにenv.developファイルを作成し、環境変数を定義
    2. ルートディレクトリにenv.productionファイルを作成し、環境変数を定義
    3. package.jsonのscriptsのdevを編集
8. mswの実行処理作成
    1. main.jsに追記(環境変数を参照し、developの場合のみ)
9. axiosのインストール
    1. npm install axios

### 参考サイト
- [vue-dev-tools](https://qiita.com/hashimoto-1202/items/c81f5d4c271eef16d957)
- [mswのワーニングを消す](https://stackoverflow.com/questions/68024935/msw-logging-warnings-for-unhandled-supertest-requests)
- [axios](https://zenn.dev/katsu_world/articles/cfefe4b8287fe8)
- [環境変数](https://blog.recruit.co.jp/rmp/front-end/post-21271/)