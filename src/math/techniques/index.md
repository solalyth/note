\\[
    \newcommand{\disp}{\displaystyle}
    \newcommand{\v}[1]{\boldsymbol #1}
    \newcommand{\Arrowlr}{\Longleftrightarrow}
    \let\frac=\dfrac
\\]

# テクニック集

## 2直線のなす角

傾きが \\(a, b\\) である 2 直線に対し、成す角について条件が与えられることがある。\\(\theta = 90^\circ\\) であるときは直行条件 \\(ab = -1\\) を使えばよい。そうでないとき、<uj>傾きを tan で置いて加法定理</uj> を用いて式を作る。

適切な区間をとって \\(a = \tan \alpha, ~ b = \tan \beta\\) と表したときに、なす角は適切に符号を付けて \\(\alpha - \beta\\) などのように表せる。この例では、加法定理から

\\[ \tan (\alpha - \beta) = \frac{\tan\alpha - \tan\beta}{1 + \tan\alpha\tan\beta} = \frac{a-b}{1+ab} \\]

と表せる。なす角 \\(\alpha - \beta\\) に具体値を入れれば、条件式を得ることができた。

直線の方向ベクトルの内積から式を作ることもできる。


## 一次不定方程式の解を一つ求める方法

\\(x, y\\) を変数とする一次不定方程式 \\(ax + by = 1\\) を考える。ただし \\(\gcd(a,b) = 1\\) とする。

ここで、「 \\((a,b)\\) による互除法列」を「\\((b, a \mod b)\\) で \\((*, 1)\\) になるまで更新するときの商の列」と定義する。例えば、\\((144, 43)\\) のとき

\\[
\begin{align}
    144 &= 43 \times \boldsymbol 3 + 15 \\\\
    43 &= 15 \times \boldsymbol 2 + 13 \\\\
    15 &= 13 \times \boldsymbol 1 + 2 \\\\
    13 &= 2 \times \boldsymbol 6 + 1 \\\\
\end{align}
\\]

となるから、互除法列は \\(3, 2, 1, 6\\) となる。

> 「 \\((a, b)\\) による互除法列」が \\(k_1, k_2, \cdots, k_n\\) であるとき、
>
> \\[ \begin{bmatrix} x \\\\ y \end{bmatrix} = \begin{bmatrix} 0 & 1 \\\\ 1 & -k_1 \end{bmatrix} \begin{bmatrix} 0 & 1 \\\\ 1 & -k_2 \end{bmatrix} \cdots \begin{bmatrix} 0 & 1 \\\\ 1 & -k_n \end{bmatrix} \begin{bmatrix} 0 \\\\ 1 \end{bmatrix} \\]
>
> は不定一次方程式の解である。
>
> ---
>
> (証明)
>
> \\(b = 1\\) のとき \\(\displaystyle \begin{bmatrix} x \\\\ y \end{bmatrix} = \begin{bmatrix} 0 \\\\ 1 \end{bmatrix}\\) とすればよい。
>
> さて、方程式を変形して異なる係数の不定一次方程式に帰着できる。
>
> \\[ (k_1b + a')x + by = 1 \Longleftrightarrow b(k_1x + y) + a'x = 1 \\]
>
> 互除法列の生成過程で \\(b = 1\\) に帰着する。「 \\((b', a)\\) の互除法列」は \\(k_2, k_3, \cdots\\) となることから、
>
> \\[\begin{bmatrix} x \\\\ y \end{bmatrix} = \begin{bmatrix} 0 & 1 \\\\ 1 & -k_1 \end{bmatrix} \begin{bmatrix} k_1x+y \\\\ 'x \end{bmatrix} = \begin{bmatrix} 0 & 1 \\\\ 1 & -k_1 \end{bmatrix} \begin{bmatrix} 0 & 1 \\\\ 1 & -k_2 \end{bmatrix} \cdots \begin{bmatrix} 0 & 1 \\\\ 1 & -k_n \end{bmatrix} \begin{bmatrix} 0 \\\\ 1 \end{bmatrix} \\]
>
> となり示せた。

私の一次不定方程式の解き方を定式化してみたらこうなった。というか、教科書による一次不定方程式の解き方が煩雑すぎる。もう少し簡潔な方法はないのだろうか…。


## 方程式がなす図形の変換

条件 \\(P(\v r)\\) を満たす点がなす図形 \\(D = \\{\v r \~|\~ P(\v r)\\}\\) について、全単射な写像 \\(f\\) で変換した図形 \\(D'\\) は

\\[
    D' = \\{f(\v r) \~|\~ P(\v r)\\} = \\{\v r' \~|\~ P(f^{-1}(\v r'))\\}
\\]

と表せる。ただし \\(\v r' = f(\v r)\\) と置換した。すなわち \\(f^{-1}(\v r')\\) が条件 \\(P\\) を満たすような \\(\v r'\\) は変換後の図形を表す。

このことを考えると、変換の合成

\\[\v r' = g \circ f(\v r) \Longleftrightarrow \v r = f^{-1} \circ g^{-1} (r')\\]

から、逆順に逆変換を適用させる必要があることが分かる。共テで出そう。

<br>

例えば、原点まわりに \\(\theta\\) 回転させる変換は、回転行列 \\(A\\)

\\[
    A = \begin{bmatrix} \cos\theta & -\sin\theta \\\\ \sin\theta & \cos\theta \end{bmatrix} ~ \mathrm{then} ~ A^{-1} = \begin{bmatrix} \cos\theta & \sin\theta \\\\ -\sin\theta & \cos\theta \end{bmatrix}
\\]

を用いれば、

\\[
    \\{ A \v r ~ | ~ P(\v r)\\}
    = \\{ \v r' ~ | ~ P(A^{-1} \v r') \\}
    = \left\\{
        \begin{bmatrix} x \\\\ y \end{bmatrix} \bigg| ~ P\left(\begin{bmatrix} x\cos\theta + y\sin\theta \\\\ -x\sin\theta + y\cos\theta \end{bmatrix}\right)
    \right\\}
\\]

となる。よく頭を壊しがちなので、式にできて嬉しい！



## フェルマーの小定理とオイラーの定理

ここでは、互いに素であることを \\(a \perp b\\) と書くことにする。

\\(1, 2, \cdots, m-1\\) のうち \\(m\\) と互いに素な整数の集合を \\(A_m\\) と書くことにする。  
この \\(A_m\\) の個数を返す関数を **オイラーの totient 関数** といい、\\(\phi(m)\\) と表す。

\\[ \phi(m) = |A_m| = \\# \bigg\\{ k \in \\{1, 2, \cdots, m-1\\} ~ \bigg| ~ k \perp m \bigg\\} \\]

> **totient 関数の乗法性**
>
> 互いに素な自然数 \\(m, n\\) について \\(\phi(mn) = \phi(m)\phi(n)\\) が成立する。(乗法性)
>
> ---
>
> (証明)
> 
> \\(\disp \left\\{ \begin{array}{} k \bmod m = r_m \\\\ k \bmod n = r_n \\\\ 0 \leq k < mn \end{array} \right.\\) を満たす整数 \\(k\\) を返す関数 \\(f(r_m, r_n)\\) は全単射である。(中国剰余定理)
>
> \\[
>   A_{mn} = \bigg\\{ f(r_m, r_n) ~ \bigg| ~ r_m \in A_m, ~ r_n \in A_n \bigg\\}
> \\]
>
> であるから、\\(|A_{mn}| = |A_m| \times |A_n|\\)

> **totient 関数の素因数表示**
>
> 素数のべき乗について、定義から \\(\phi(p^e) = p^e \left(1 - \frac 1p\right)\\) である。
>
> 乗法性を用いると、\\(\disp m = \prod {p_i}^{e_i}\\) と素因数分解して
>
> \\[ \phi(m) = \prod \phi({p_i}^{e_i}) = m \times \prod \left( 1 - \frac{1}{p_i} \right)\\]
>
> となる。


さて、素数 \\(p\\) と整数 \\(a\\) に対して

\\[ a^p \equiv a \quad \therefore ~ a \perp p \Longrightarrow a^{p-1} \equiv 1 \pmod p\\]

が成立するというのは有名で、これは **フェルマーの小定理** と呼ばれる。

```admonish title="フェルマーの小定理の証明" collapsible=true
様々な証明があるが、シンプルで好きなやつ。

二項係数 \\(\disp \binom{p}{k} = \frac{p!}{k! ~ (p-k)!}\\) は \\(k = 1, 2, \cdots, p-1\\) で \\(p\\) の倍数である。

二項定理から \\(^\forall k, ~ k^p - (k-1)^p \equiv 1\\) で、この式を \\(k = 1, 2, \cdots, a\\) まで足し上げると題意を得る。
```

この拡張として **オイラーの定理** がある。

> **オイラーの定理**
>
> \\[ a \perp m \Longrightarrow a^{\phi(m)} \equiv 1 \pmod m\\]
>
> ---
>
> (証明)
>
> \\(\\{x_1 , x_2, \cdots, x_{\phi(m)}\\} = A_m\\) とおく。各要素に \\(a\\) を掛けたものを考える。
>
> \\((ax_i \bmod m) \in A_m\\) かつ \\(ax_i \not\equiv ax_j\\) (単射性) より、
>
> \\(ax_1, ax_2, \cdots, ax_{\phi(m)}\\) を \\(m\\) で割った余りは \\(x_1, x_2, \cdots, x_{\phi(m)}\\) がちょうど一個ずつ現れる。
>
> よって、この総積は \\(\mathrm{mod} ~ m\\) で一致する。両辺を \\(x_1x_2 \cdots x_{\phi(m)}\\) で割って題意を得る。

もちろん、この議論でフェルマーの小定理を証明することもできる。
