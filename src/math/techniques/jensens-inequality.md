\\(
    \newcommand{\disp}{\displaystyle}
    \newcommand{\v}[1]{\boldsymbol #1}
    \newcommand{\Arrowlr}{\Longleftrightarrow}
    \let\frac=\dfrac
\\)

# 凸不等式系

凸不等式は非常に強い道具である。まさに凸不等式を問う問題から、これを知らないと難しい問題もある。ここから様々な不等式が導ける。

参考: [数学の景色](https://mathlandscape.com/convex-func)

## 凸性

高校数学でいう「下に凸・上に凸」を、ここでは単に「凸・凹」と呼ぶことにする。  
\\(f\\) が凹関数ならば \\(-f\\) は凸関数である。以下では凸関数に関する不等式を紹介するが、凹関数では逆向きの不等式が成立する。(たぶんそう)

関数 \\(f(x) \colon I \to \mathbb{R}\\) が、任意の区間 \\([a,b] \in I\\) について

\\[
    ^\forall x \in (a,b) ~ \bigg[ f(x) < \frac{f(b)-f(a)}{b-a} (x-a) + f(a) \bigg] \\\\
    \Longleftrightarrow {}^\forall \lambda \in (0, 1) ~ \bigg[ f\left(\lambda a + (1-\lambda)b\right) < \lambda f(a) + (1-\lambda) f(b) \bigg]
\\]

が成り立つとき「**狭義凸関数**である」という。\\(x = \lambda a + (1-\lambda)b\\) について、左辺は曲線上の高さ、右辺は二点を結ぶ線分上の高さを表している。すなわち、曲線上の二点を結ぶ線分が必ず曲線より上側を通ることである。

```admonish title="広義凸関数について" collapsible=true
\\[
    \forall \lambda \in (0, 1) ~ \bigg[ f\left(\lambda a + (1-x)b\right) \leq \lambda f(a) + (1-\lambda) f(b) \bigg]
\\]

が成立するとき「 \\(f(x)\\) は広義凸関数である」という。これは曲線の一部として直線を持つことを許したものであり、出題されることは無いだろう。
```

```admonish title="memo"
後述する凸不等式の弱い系ではあるが、\\(\lambda = 1/2\\) とした式

\\[
    f\left(\frac{x_1+x_2}{2}\right) < \frac{f(x_1)+f(x_2)}{2}
\\]

を用いて解き進めることがある。等号成立条件は \\(x_1 = x_2\\) である。
```

\\(f'\\) が狭義単調増加ならば \\(f\\) が狭義凸であることが知られている。特に \\(f''(x) > 0\\) ならば十分である。

これを問う問題でなければ、周知の事実としてよいだろう。

```admonish title="凸性の証明"
\\[
    g(x) = f(x) - \left\\{ \frac{f(b)-f(a)}{b-a} (x-a) + f(a) \right\\}
\\]

と置く。\\(a < x < b \Longrightarrow g(x) < 0\\) を示せばよい。

\\(g(a)=g(b)=0\\) かつ \\(g'\\) は狭義単調増加であるから、ロルの定理より \\(g'(k) = 0\\) なる \\(k \in (a, b)\\) が存在し、増減表は

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

このページの根幹を為す不等式である。Jensen はイェンセン・イェンゼンの表記揺れがネット上に存在する。

> **凸不等式 (Jensen の不等式)**
> 
> 狭義凸関数 \\(f \colon I \to \mathbb{R}\\), 区間 \\(I\\) 上の列 \\((x_i)\\), 和が \\(1\\) である正実数列 \\((w_i)\\) について
> 
> \\[ f \left( \sum w_i x_i \right) \leq \sum w_i f(x_i) \\]
>
> が成立する。等号成立条件は \\(^\forall x_i = \mathrm{const.}\\) である。
>
> ---
>
> (証明)
>
> \\(\disp m = \sum w_i x_i\\) と置く。曲線 \\(y = f(x)\\) の \\(x = m\\) での接線は曲線より下側を通るから[^1]
> 
> \\[
>     ^\forall x \in I, ~ f'(m) (x-m) + f(m) \leq f(x)
> \\]
> 
> が成立する。等号成立条件は \\(x = m\\) である。\\(x = x_i\\) での式を \\(w_i\\) 倍して足し上げると、
> 
> \\[
>     f'(m) \underbrace{\sum w_i(x_i-m)}\_{=0} + f(m) \underbrace{\sum w_i}\_{=1} \leq \sum w_i f(x_i)
> \\]
> 
> より不等式を得る。等号成立条件は \\(^\forall x_i = m\\) であり、\\(^\forall x_i = \mathrm{const.}\\) と同値である。
>
> 接線が \\(y\\) 軸と平行であるときは上の議論はできないが、そのような点 \\(x = k\\) は区間の端のみである。\\(m = k\\) となるのは \\(^\forall x_i = k\\) であるときに限るから、この場合も不等式は成り立つ。
>
> [^1]: \\(g(x) = f(x) - f(m) - f'(m)(x-m)\\) と置いてロルの定理・増減表から明らか。

<br>

重みを \\(^\forall w_i = 1/n\\) と設定することがしばしばある。

> **均一重み凸不等式**
>
> 狭義凸関数 \\(f \colon I \to \mathbb{R}\\), 区間 \\(I\\) 上の実数列 \\((x_i)\\) について
>
> \\[
>     f\left(\frac{x_1 + x_2 + \cdots + x_n}{n}\right) \leq \frac{f(x_1) + f(x_2) + \cdots + f(x_n)}{n}
> \\]
>
> が成立する。

また、log を使うと積の不等式が得られる。

> **log の均一重み凸不等式**
>
> \\(\log f(x)\\) が狭義凸関数であるとき、
>
> \\[
>     \log f\left(\frac{x_1 + x_2 + \cdots + x_n}{n}\right) \leq \frac{\log \left\\{f(x_1)f(x_2) \cdots f(x_n)\right\\}}{n} \\\\
>     \Longleftrightarrow \quad f\left(\frac{x_1 + x_2 + \cdots + x_n}{n}\right) \leq \sqrt[n]{f(x_1)f(x_2) \cdots f(x_n)}
> \\]
>
> が成立する。

これらは \\(x_1 + x_2 + \cdots + x_n\\) の値が定数であるときの \\(\disp \sum f(x_i), ~ \prod f(x_i)\\) の最大値・最小値を求める問題に効く。

## 系となる不等式

> **任意個の項の相加相乗平均**
>
> \\(f(x) = \log x\\) は凹関数である。正の実数列 \\((x_i)\\) について、log の均一重み凸不等式から
>
> \\[
>     \frac{x_1 + x_2 + \cdots + x_n}{n} \geq \sqrt[n]{x_1x_2 \cdots x_n}
> \\]
> 
> を得る。凹関数であるから符号が逆になることに注意。
