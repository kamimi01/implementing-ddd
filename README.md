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

## 実装

### 値オブジェクトの実装

- 値オブジェクトを不変にするには
  - インスタンス変数はコンストラクタでオブジェクトの生成時に設定する
  - インスタンス変数を変更するメソッド（setterメソッド）を作らない
  - 別の値が必要であれば、別のインスタンスを作る

## リポジトリ層の実装

- prismaのデータベースにテーブルを作成
  `dotenv -e .env.test -- npx prisma migrate dev --name init`

- prismaデータベースに入る
  `docker-compose exec prisma-db /bin/bash`
  `psql -U root prisma`

- prismaデータベースにデータを投入する
  `npx prisma db seed`

- postgresqlのテーブル内データを参照する
  `select * from "Participant";`

- prismaをdockerで構築する
[Integration testing](https://www.prisma.io/docs/guides/testing/integration-testing)

- PosgreSQLで、任意の値からautoincrementを行う
  - 現状は、schema.prismaから設定は不可能なため、`--create-only`のオプションを使ってSQLの作成のみを行い、その後にSQLファイルを直接編集し、migrateを実行する
[Auto-incrementing from custom value in prisma + postgresql](https://stackoverflow.com/questions/69023136/auto-incrementing-from-custom-value-in-prisma-postgresql)

## ユースケース層の実装

- CQRS
  - [CQRS実践入門 [ドメイン駆動設計]](https://little-hands.hatenablog.com/entry/2019/12/02/cqrs)

#### 参考

- [TypeScriptで値オブジェクトを表現する](https://blog.mamansoft.net/2020/02/19/express-value-object-by-typescript/#%E5%80%A4%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E3%81%A8%E3%81%AF)
- [shallow-equal for Object/React props](https://efcl.info/2017/11/30/shallow-equal/)
- [How to write tests for Prisma with Docker and Jest](https://dev.to/eddeee888/how-to-write-tests-for-prisma-with-docker-and-jest-593i)