# 特大課題：プラハチャレンジをDDDで実装してみる

## 環境構築

### Node.js、NPMの導入

- Long Time Supportバージョンのnpmをディレクトリに導入

```zsh
echo "lts/*" > .nvmrc
nvm install
nvm use
```

### Nest.jsプロジェクト

- Nest.jsのCLI導入

```zsh
yarn global add @nestjs/cli
```

- プロジェクトの作成

```zsh
nest new backend
```

- `docker-compose.yml`を作成
  - そのyamlがあるディレクトリをVSCodeのRemote Container拡張機能で開く

- prismaのデータベースにテーブルを作成
  `dotenv -e .env.test -- npx prisma migrate dev --name init`

- prismaデータベースの中身を見る
  `docker-compose exec prisma-db /bin/bash`
  `psql -U root prisma`

## 実装

### 値オブジェクトの実装

- 値オブジェクトを不変にするには
  - インスタンス変数はコンストラクタでオブジェクトの生成時に設定する
  - インスタンス変数を変更するメソッド（setterメソッド）を作らない
  - 別の値が必要であれば、別のインスタンスを作る

#### 参考

- [TypeScriptで値オブジェクトを表現する](https://blog.mamansoft.net/2020/02/19/express-value-object-by-typescript/#%E5%80%A4%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%81%A8%E3%81%AF)
- [shallow-equal for Object/React props](https://efcl.info/2017/11/30/shallow-equal/)