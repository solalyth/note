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

\\(x, y\\) を変数とする一次不定方程式 \\(ax + by = 1\\) を考える。ただし \\(a > b > 0\\) かつ \\(\gcd(a,b) = 1\\) とする。

ここで、「 \\((a,b)\\) による互除法列」を、大きい方を小さい方の余りで更新するやつでの 0 でない商の列と定義する。例えば、\\((144, 43)\\) のとき

\\[
\begin{align}
    144 &= 43 \times \boldsymbol 3 + 15 \\\\
    43 &= 15 \times \boldsymbol 2 + 13 \\\\
    15 &= 13 \times \boldsymbol 1 + 2 \\\\
    13 &= 2 \times \boldsymbol 6 + 1
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
> 係数がより小さい不定一次方程式について成り立つとする。\\(a = k_1b + a'\\) とすると、方程式を変形して係数がより小さい不定一次方程式に帰着できる。
>
> \\[ (k_1b + a')x + by = 1 \Longleftrightarrow b(k_1x + y) + a'x = 1 \\]
>
> 「 \\((b', a)\\) の互除法列」は \\(k_2, k_3, \cdots\\) であることから、
>
> \\[\begin{bmatrix} x \\\\ y \end{bmatrix} = \begin{bmatrix} 0 & 1 \\\\ 1 & -k_1 \end{bmatrix} \begin{bmatrix} k_1x+y \\\\ 'x \end{bmatrix} = \begin{bmatrix} 0 & 1 \\\\ 1 & -k_1 \end{bmatrix} \begin{bmatrix} 0 & 1 \\\\ 1 & -k_2 \end{bmatrix} \cdots \begin{bmatrix} 0 & 1 \\\\ 1 & -k_n \end{bmatrix} \begin{bmatrix} 0 \\\\ 1 \end{bmatrix} \\]
>
> となり示せた。

というか、教科書による一次不定方程式の解き方が煩雑すぎる。もう少し簡潔な方法はないのだろうか…。


## 方程式がなす図形の変換

条件 \\(P(\v r)\\) を満たす点がなす図形 \\(D = \\{\v r \~|\~ P(\v r)\\}\\) について、全単射な写像 \\(f\\) で変換した図形 \\(D'\\) は

\\[
    D' = \\{\v r' = f(\v r) \~|\~ P(\v r)\\} = \\{\v r' \~|\~ P(f^{-1}(\v r'))\\}
\\]

と表せる。すなわち \\(f^{-1}(\v r')\\) を条件に代入した図形は変換後の図形を表す。

例えば、原点まわりに \\(\theta\\) 回転させる変換は、回転行列 \\(A\\) を用いて

\\[
    A = \begin{bmatrix} \cos\theta & -\sin\theta \\\\ \sin\theta & \cos\theta \end{bmatrix} ~ \mathrm{then} ~ A^{-1} = \begin{bmatrix} \cos\theta & \sin\theta \\\\ -\sin\theta & \cos\theta \end{bmatrix}
\\]

と表せるから、

\\[
    \left\\{
        \begin{bmatrix} X \\\\ Y \end{bmatrix} = A \begin{bmatrix} x \\\\ y \end{bmatrix} \bigg| ~ P\left( \begin{bmatrix} x \\\\ y \end{bmatrix} \right)
    \right\\}
    = \left\\{
        \begin{bmatrix} X \\\\ Y \end{bmatrix} \bigg| ~ P\left(A^{-1}\begin{bmatrix} x \\\\ y \end{bmatrix}\right)
    \right\\}
\\]

となる。\\(\\{(X,Y) \~|\~ P(X\cos\theta + Y\sin\theta, -X\sin\theta + Y\cos\theta)\\}\\) は回転後の図形を表す。

よく頭を壊しがちなので、式にできて嬉しい！
