# メモ

## フォント

`book` からファイルを持ってくると、build 時に自動で該当部分を置き換えられる。

`theme` フォルダを作って、以下のようにする。

+ `css` フォルダ
    - `general.css`: `font-family` を変更する
    - `variables.css`: `--mono-font` を変更する
+ `fonts` フォルダ
    - フォントファイルを入れる
    - `fonts.css`: `@font-face` を書く

罠: `@font-face` の `format` を OpenType に指定したいときは `format('otf')` じゃなくて `format('opentype')` だった。

## Admonish

[Book](https://tommilligan.github.io/mdbook-admonish) にだいたい書いてある。

```admonish question title="問題"
ここに問題を書く。
```

```admonish success title="解答"
ここに解答を書く。
```

```admonish warning title="注意することなど"
ここになにか書く。
```

```admonish note title="開閉可能なノート" collapsible=true
開閉できる。
```

## テスト

# h1 Sample

## h2 Sample

### h3 Sample

#### h4 Sample

Lorem ipsum dolor sit amet, consectetur adipiscing elit.

```Rust
fn main() {
    let mut three = 3;
    let four = { three += 1; three };
    
    // Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    // 隣の客はよく柿喰う客だ
}
```
