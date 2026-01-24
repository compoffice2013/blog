# WordPress API 記事検索ツール マニュアル

ブログ記事の作成時に、関連する過去の記事を素早く検索し、内部リンク用のURLを取得するためのツールです。
Obsidianのターミナルから直接実行できます。

## 📍 スクリプトの場所
`d:\Obsidian\creative-comp\scripts\wp_search.js`

## ⚙️ 前提条件
- Node.js がインストールされていること（確認済み: v24.12.0）

## 🚀 使い方

Obsidianのターミナル（またはコマンドプロンプト/PowerShell）を開き、以下のコマンドを入力します。

```bash
node d:\Obsidian\creative-comp\scripts\wp_search.js [キーワード]
```

### 実行例
「新年会」に関する記事を探す場合：

```bash
node d:\Obsidian\creative-comp\scripts\wp_search.js 新年会
```

## 📝 出力例
コマンドを実行すると、以下のように記事タイトル、URL、公開日が表示されます。

```text
Searching for: 新年会...
URL: https://comp-office.com/wp-json/wp/v2/posts?search=...

Title: グランテラス富山「北信ホールディングス㈱GROUP新年会」でのマジックショー
Link: https://comp-office.com/blog/20260111-grand-terrace-toyama-magic-show/
Date: 2026-01-12
---
Title: ...
```

この中から、記事の内容に関連する適切なリンクを選んで、Obsidianの記事ファイルにコピー＆ペーストしてください。

## 💡 今後の活用アイデア
- QuickAddプラグインやShell Commandsプラグインを使って、Obsidianのコマンドパレットから呼び出せるように設定するとさらに便利です。
