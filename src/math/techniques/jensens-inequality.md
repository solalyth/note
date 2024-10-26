\\(
    \newcommand{\disp}{\displaystyle}
    \newcommand{\v}[1]{\boldsymbol #1}
    \newcommand{\Arrowlr}{\Longleftrightarrow}
    \let\frac=\dfrac
\\)

# 凸不等式系

凸不等式は非常に強い道具である。まさに凸不等式を問う問題から、これを知らないと難しい問題もある。ここから様々な不等式が導ける。

参考記事: [数学の景色](https://mathlandscape.com/convex-func)

## 凸性

高校数学でいう「下に凸・上に凸」を、ここでは単に「凸・凹」と呼ぶことにする。  
\\(f\\) が凹関数ならば \\(-f\\) は凸関数である。以下では凸関数に関する不等式を紹介するが、凹関数では逆向きの不等式が成立する。(たぶんそう)

<br>

関数 \\(f(x)\\) を実数上の区間 \\(I\\) から実数への関数であるとする。この関数が**広義凸関数**であるとは、曲線上の二点を結ぶ線分が必ず曲線より上側を通ることをいう。すなわち、区間 \\(I\\) 上の任意の 2 値 \\(a < b\\) について

\\[
    \forall \lambda \in (0, 1) ~ \bigg[ f\left(\lambda a + (1-x)b\right) \leq \lambda f(a) + (1-\lambda) f(b) \bigg]
\\]

が成立することをいう。\\(\lambda : 1-\lambda\\) の内分点について、左辺は曲線上の高さ、右辺は二点を結ぶ線分上の高さを表している。  
また、**狭義凸関数**であるとは、曲線の一部として直線を持たず、等号を除いた式

\\[
    \forall \lambda \in (0, 1) ~ \bigg[ f\left(\lambda a + (1-x)b\right) < \lambda f(a) + (1-\lambda) f(b) \bigg]
\\]

が成立することをいう。

```admonish title="untitled"
後述する凸不等式の弱い系ではあるが、単に \\(\lambda = 1/2\\) とした式

\\[
    f\left(\frac{x_1+x_2}{2}\right) \leq \frac{f(x_1)+f(x_2)}{2}
\\]

を用いて解き進めることがある。
```

<br>

実用性と証明の簡略化のため、以下では<uj>狭義凸関数について考える</uj>。

「 \\(f'\\) が狭義単調増加 \\(\Longleftrightarrow\\) \\(f\\) が狭義凸」が知られている。特に \\(f''(x) > 0\\) ならば十分である。

```admonish title="十分性の証明" collapsible=true
問題を解くときは十分性しか使わないので、十分性だけ書く。

\\[
    g(x) = f(x) - \left\\{ \frac{f(b)-f(a)}{b-a} (x-a) + f(a) \right\\}
\\]

と定義し、\\((a, b)\\) の範囲で \\(g(x) < 0\\) が成り立つことを示せばよい。

\\(g(a)=g(b)=0\\) かつ \\(g'\\) が狭義単調増加である。ロルの定理から \\(g'(k) = 0\\) となる \\(k \in (a, b)\\) が存在し、増減表は

\\[
    \begin{array}{c|ccccc}
    x & a & \cdots & k & \cdots & b \\\\ \hline
    g(x) & 0 & \searrow & - & \nearrow & 0 \\\\ \hline
    g'(x) & & - & 0 & + 
    \end{array}
\\]

となるから、示せた。
```


## 凸不等式

本題の凸不等式とも呼ばれる、根幹を為す不等式である。イェンセン・イェンゼンの表記揺れがそこそこある。

> **Jensen の不等式**
> 
> 狭義凸関数 \\(f \colon I \to \mathbb{R}\\), 区間 \\(I\\) 上の実数列 \\((x_i)\\), 和が \\(1\\) である正実数列 \\((w_i)\\) について
> 
> \\[ f \left( \sum w_i x_i \right) \leq \sum w_i f(x_i) \\]
>
> が成立する。等号成立条件は \\(^\forall x_i = \mathrm{const.}\\) である。
>
> ---
>
> (証明)
>
> \\(\disp m = \sum w_i a_i\\) と置く。曲線 \\(y = f(x)\\) の \\(x = m\\) での接線は、曲線より下側を通るから[^1]
> 
> \\[
>     f'(m) (x-m) + f(m) \leq f(x)
> \\]
> 
> が成立する。等号成立条件は \\(x = m\\) である。
> 
> \\(x = x_i\\) での式を \\(w_i\\) 倍して足し上げると、\\(\disp \sum w_i(x_i-m) = 0\\) より不等式を得る。  
> 等号成立条件は \\(^\forall x_i = m\\) であり、\\(^\forall x_i = \mathrm{const.}\\) と同値である。
>
> 接線が \\(y\\) 軸と平行であるときは上の議論はできないが、そのような点 \\(x = k\\) は区間の端のみであり、\\(m = k\\) となるのは \\(^\forall x_i = k\\) であるときに限るから、この場合も不等式は成り立つ。
>
> [^1]: 曲線 \\(g(x) = f(x) - f(m) - f'(m)(x-m)\\) は \\(g(m) = g'(m) = 0\\) かつ \\(g'\\) が狭義単調増加であるから、増減表を書けば明らかに \\(g(x) \geq 0\\) であり、示せた。

<br>

問題では重みが \\(^\forall w_i = 1/n\\) であることが多い。そちらを「平均凸不等式」と呼ぼう。

> **平均凸不等式**
>
> 狭義凸関数 \\(f \colon I \to \mathbb{R}\\), 区間 \\(I\\) 上の実数列 \\((x_i)\\) について
>
> \\[
>     f\left(\frac{x_1 + x_2 + \cdots + x_n}{n}\right) \leq \frac{f(x_1) + f(x_2) + \cdots + f(x_n)}{n}
> \\]
>
> が成立する。

また、log を使うと積についての不等式が得られる。

> **log の平均凸不等式**
>
> \\(\log f(x) \colon I \to \mathbb{R}\\) が狭義凸関数であるとき、区間 \\(I\\) 上の実数列 \\((x_i)\\) について
>
> \\[
>     \log f\left(\frac{x_1 + x_2 + \cdots + x_n}{n}\right) \leq \frac{\log \left\\{f(x_1)f(x_2) \cdots f(x_n)\right\\}}{n} \\\\
>     \Longleftrightarrow \quad f\left(\frac{x_1 + x_2 + \cdots + x_n}{n}\right) \leq \sqrt[n]{f(x_1)f(x_2) \cdots f(x_n)}
> \\]
>
> が成立する。

これらは \\(x_1 + x_2 + \cdots + x_n\\) の値が決まっているときの、\\(\disp \sum f(x_i), ~ \prod f(x_i)\\) の最大値・最小値を求める問題に効くことが多い。

## 系となる不等式

> **任意個の項の相加相乗平均**
>
> \\(f(x) = \log x\\) は凹関数である。正の実数列 \\((x_i)\\) について、log の平均凸不等式から
>
> \\[
>     \frac{x_1 + x_2 + \cdots + x_n}{n} \geq \sqrt[n]{x_1x_2 \cdots x_n}
> \\]
> 
> を得る。凹関数であるから符号が逆になることに注意。

> **コーシー・シュワルツの不等式**
>
> 正の実数列 \\((x_i), (y_i)\\) について、
>
> \\[
>     \left(\sum x_iy_i\right)^2 \leq \left(\sum {x_i}^2 \right) \left(\sum {y_i}^2 \right)
> \\]
>
> が成立することを主張する不等式である。
```admonish note title="コーシー・シュワルツの不等式"
下に凸な関数 \\(f(x) = x^2\\) について、\\(a_i = \frac{x_i}{y_i}\\)


```
