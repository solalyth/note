\\[
    \newcommand{\disp}{\displaystyle}
    \let\frac=\dfrac
\\]

# 面積・体積・曲線長

しばしば \\(x\\) 軸とのアレコレを考えるので、ここでは \\(x\\) 軸でアレコレするものとします。

面積については常に \\(f(x) \geq 0\\) であるとします。\\(f(x) \leq 0\\) なら負符号を付けたり、絶対値記号を付けたりを忘れずに。

## 陽関数グラフの面積

曲線 \\(y = f(x)\\) と \\(x\\) 軸で囲まれた図形の、区間 \\([x_s, x_e]\\) での面積は

\\[
    \int_{x_s}^{x_e} f(x) dx
\\]

で与えられる。これは、\\(dx\\) を微小量として、区間 \\([x, x+dx]\\) で囲まれる面積が

\\[
    dS \simeq f(x) ~ dx + o(dx)
\\]

と近似できるからである。

[^1]: ここでは、\\(y \geq 0\\) を正の面積、\\(y \leq 0\\)を負の面積として加算したものとする。

```admonish memo title="少しちゃんとした証明" collapsible=true

区間 \\([x_s, x]\\) での面積を \\(S(x)\\) などと書くことにする。このとき

\\[
    S'(x) = \lim\_{\Delta x \to 0} \frac{S(x+\Delta x) - S(x)}{\Delta x}
\\]

となる。これをはさみうちの原理で評価したい。以下では \\(\Delta x \to +0\\) での場合を考えるが、\\(\Delta x \to -0\\) も同様にして示せる。

ここで、区間 \\([x, x+\Delta x]\\) での \\(f\\) の最小値・最大値を \\(\min f, \max f\\) と書くと

\\[
    \Delta x \times \min f \leq S(x+\Delta x) - S(x) \leq \Delta x \times \max f
\\]

と上下から評価できる。\\(f\\) の連続性より \\(\disp \lim_{\Delta x \to +0} \min f, \max f = f(x)\\) であるから、はさみうちの原理より

\\[
    S'(x) = \lim_{\Delta x \to 0} \frac{S(x+\Delta x) - S(x)}{\Delta x} = f(x)
\\]

である。\\(S(x_s) = 0\\) を考えると、\\(x_s\\) から \\(x_e\\) まで積分したものとの定数差は 0 である。すなわち

\\[
    S_{x_s}(x_e) = \int_{x_s}^{x_e} S'_{x_s}(x) ~ dx = \int _{x_s}^{x_e} f(x) ~ dx
\\]
```

## 媒介変数グラフの面積

\\(x = X(t), ~ y = Y(t)\\) と表される曲線と \\(x\\) 軸で挟まれた図形の面積は、\\(X(t)\\) **が増加する区間** \\([t_s, t_e]\\) について

\\[
    \int_{X(t_s)}^{X(t_e)} y(x) ~ dx \overset{\bigstar}{=} \int_{t_s}^{t_e} y(X(t)) ~ \left\\{ X'(t) ~ dt \right\\} \overset{\bigstar'}{=} \int_{t_s}^{t_e} Y(t) ~ X'(t) ~ dt
\\]

で与えられる。\\(\bigstar\\) 部では \\(x = X(t)\\) と置換し、\\(\bigstar'\\) 部では意味的に \\(y(X(t)) = Y(t)\\) なので置き換えた。回答では一番右をいきなり書いてよい。

```admonish note title="あるいは、負の変位"
\\(X(t)\\) が増加する範囲では通常の符号付き面積、減少する範囲では通常の符号付き面積に \\(-1\\) を掛けたもの、とすれば統一した符号付き面積を求めている。

とはいえ、回転体では \\(X(t)\\) が増加する方向で分割するのが大切なので、あんまり変に考えないほうがよいかも？
```


## 断面による堆積

ある立体について、\\(x\\) 軸に垂直な断面の面積を \\(S(x)\\) とすると、体積は

\\[
    \int_{x_s}^{x_t} S(x) ~ dx
\\]

で与えられる。


// TODO: 疲れた！回転体、斜回転体、陽関数グラフの曲線長、媒介変数グラフの曲線長、極座標の面積、曲線長とか書きたいねえ
