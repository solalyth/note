## 積分方程式

\\(
    \newcommand{\disp}{\displaystyle}
    \newcommand{\v}[1]{\boldsymbol #1}
    \newcommand{\Arrowlr}{\Longleftrightarrow}
    \let\frac=\dfrac
\\)

定積分を含む関数方程式のこと。

+ 積分区間に変数が含まれている ... ①区間 0 になるよう代入　②微分
+ 積分区間が定数 ... 定積分が定数となるよう変形して文字で置く→積分内の関数に代入して方程式を得る

#### 例題1

> 連続関数 \\(f \colon \mathbb R \to \mathbb R^+\\) が
> 
> \\[\disp ^\forall x,~ f(x) = \int_0^x \frac{t}{(t^2+1)f(t)} ~ dt + 1\\]
> 
> を満たす。\\(f(x)\\) を求めよ。
>
> 横浜国立大学・理系 2024年

微分するだけでは解けず、発想・変形を必要とする問題。

```admonish success title="解答"
\\(x = 0\\) を代入すると \\(f(0) = 1\\) が直ちに分かる。

方程式の右辺が微分可能であるから、関数 \\(f\\) は微分可能である。

両辺微分・整理して \\(f(x)f'(x) = \frac{x}{x^2+1}\\) を得る。

特に \\(\frac{d}{dx} ~ \frac{f(x)^2}{2} = \frac{d}{dx} ~ \frac{\log(x^2+1)}{2}\\) と変形できるから、

ある定数 \\(C\\) が存在して \\(f(x)^2 = \log(x^2+1) + C\\) と分かる。

関数 \\(f\\) が正の値をとることと \\(f(0) = 1\\) から \\(\disp f(x) = \sqrt{\log(x^2+1) + 1}\\) である。
```
