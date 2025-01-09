\\(
    \newcommand{\disp}{\displaystyle}
    \let\frac=\dfrac
    \newcommand{\abs}[1]{|#1 \\,|}
\\)

# 積分方程式

## 微分積分学の基本定理

[Wikipedia](https://ja.wikipedia.org/wiki/微分積分学の基本定理#連続関数の不定積分が微分可能であること) では微分積分学の第一基本定理と呼ばれているものを置く。
このページでは、積分変数でない変数を global 変数と呼ぶことにする。

> **微分積分学の第一基本定理**
>
> \\(f(t)\\) は連続であり、\\(a\\) は \\(x\\) に対して定数であるとする[^1]。このとき
>
> \\[ \frac{d}{dx} \int_{a}^{x} f(t) ~ dt = f(x) \\]
>
> が成立する。特に
>
> \\[
>     \frac{d}{dx} \int_{x}^{a} f(t) ~ dt = -f(x) \\\\[30px]
>     \frac{d}{dx} \int_{a}^{g(x)} f(t) ~ dt = f(g(x)) \cdot g'(x)
> \\]
>
> である。第 2 式は合成関数の微分であることに注意。
>
> [^1]: すなわち \\(\frac{da}{dx} = 0\\) ということ。

これにより、不定積分が計算できない定積分は <uj>被積分関数に global 変数を含まない限り</uj> 微分した値を求めることができる。

```admonish title="被積分関数に global 変数を含む場合" collapsible=true
「微分積分学の基本定理 変数を含む」などと検索すればいくつか出てくる。

> **global 変数を含む場合の微分積分学の第一基本定理**
>
> \\(f(x,t), g(x)\\) は微分可能で、\\(a\\) は \\(x\\) に対して定数であるとする。このとき
>
> \\[
    \begin{align}
        \frac{d}{dx} &\int_a^{g(x)} f(x, t) ~ dt \\\\
        &= \lim_{h \to 0} \frac 1h \left\\{ \int_a^{g(x+h)} f(x+h, t) ~ dt - \int_a^{g(x)} f(x, t) ~ dt \right\\} \\\\
        &= \lim_{h \to 0} \frac 1h \left\\{ \int_a^{g(x+h)} f(x+h, t) - \int_a^{g(x+h)}f(x, t) ~ dt \right\\} \\\\
        & \quad \quad + \lim_{h \to 0} \frac 1h \left\\{ \int_a^{g(x+h)} f(x, t) ~ dt - \int_a^{g(x)} f(x, t) ~ dt \right\\} \\\\
        &= \lim_{h \to 0} \int_a^{g(x+h)} \frac{f(x+h, t) - f(x, t)}{h} ~ dt \\\\
        & \quad \quad + \lim_{h \to 0} \frac 1h \int_{g(x)}^{g(x+h)} f(x, t) ~ dt \\\\
        &= \int_a^{g(x)} \frac{\partial}{\partial x} f(x, t) ~ dt + f(x, g(x)) \cdot g'(x)
    \end{align}
\\]
> 
> が成り立つ。6 行目は[積分についての平均値の定理](../../math/techniques/mean-value-theorem.md#積分についての平均値の定理)を用いた。

2 箇所にある微小量をそれぞれに分けるテクニックは積の微分の証明でも見る。
```


## 定石

定積分を含む関数方程式のこと。方針は

+ 微分型 ... 積分区間に変数が入っている場合
    - 積分区間幅が 0 になるよう代入
    - 被積分関数から global 変数を消す → 両辺を微分し、微分積分学の基本定理から積分を消去
    - 元の式に代入
+ 再帰代入型 ... 全て定積分である場合
    - 被積分関数から global 変数を消す → 定積分を文字で置き、関数を求める → 文字そのものの積分を計算する

の 2 つ。困ったら被積分関数から global 変数を消すことを意識する。

## 例題1

```admonish question title="横浜国立大学・理系 2024年"
連続関数 \\(f \colon \mathbb R \to \mathbb R^+\\) が

\\[\disp ^\forall x,~ f(x) = \int_0^x \frac{t}{(t^2+1)f(t)} ~ dt + 1\\]

を満たす。\\(f(x)\\) を求めよ。
```

明らかに微分型。微分するだけでは解けず、発想・変形を必要とする問題。

```admonish success title="解答" collapsible=true
\\(x = 0\\) を代入すると \\(f(0) = 1\\) が直ちに分かる。

方程式の右辺が微分可能である。両辺微分・整理して \\(f(x)f'(x) = \frac{x}{x^2+1}\\) を得る。

これは \\(\frac{d}{dx} ~ \frac{f(x)^2}{2} = \frac{d}{dx} ~ \frac{\log(x^2+1)}{2}\\) と変形できるから、

ある定数 \\(C\\) が存在して \\(f(x)^2 = \log(x^2+1) + C\\) と分かる。

関数 \\(f\\) が正の値をとることと \\(f(0) = 1\\) から \\(\disp f(x) = \sqrt{\log(x^2+1) + 1}\\) である。
```


## 例題2

```admonish question title="東京工業大学 2019年"
\\(1 \leq x \leq 2\\) で定義された連続関数 \\(f\\) と定数 \\(A, B\\) が

\\[
    ^\forall 1 \leq x \leq 2, ~ \int_{1/x}^{2/x} \abs{\log y} ~ f(xy) ~ dy = 3x(\log x - 1) + A + \frac{B}{x}
\\]

を満たす。\\(A, B\\) を求めよ。
```

関数 \\(f\\) に関する性質が何も示されていないので \\(f(xy)\\) の部分を解決したい。どう置換したら上手くいくだろうか。

```admonish title="解答" collapsible=true
\\(xy = t\\) と置換する。両辺に \\(x\\) を掛け、絶対値を外すために積分区間を \\(t = x\\) で分けて整理すると

\\[
    \left(\int_1^x + \int_2^x\right) (\log x - \log t) f(t) ~ dt = 3x^2(\log x - 1) + Ax + B \tag{1}
\\]

を得る (入り切らなかったので被積分関数が同じ積分は略記)。両辺微分し \\(x\\) を掛けて

\\[
    \left(\int_1^x + \int_2^x\right) f(t) ~ dt = 6x^2\log x - 3x^2 + Ax \tag{2}
\\]

を得る。もう一度両辺微分して 2 で割ると

\\[
    f(x) = 6x\log x + \frac{A}{2}
\\]

より \\(f(x)\\) の具体的表示が得られる。\\(x = 1\\) として (1), (2) 式に代入して計算すれば

\\[
    -\int_1^2 \left(6t\log t + \frac{A}{2}\right) ~ dt = -3 + A
    \quad \therefore A = 5 - 8\log 2 \\\\[30px]
    \int_1^2 \log t \left(6t\log t + \frac{A}{2}\right) ~ dt = -3 + A + B
    \quad \therefore B = 4\left(\log 2\right)^2 + 5\log 2
\\]

を得る。
```
