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
  - そのyamlがあるディレクトリをVSCodeのRemote Container拡張機能で開く# implementing-ddd
