\\[
    \newcommand{\disp}{\displaystyle}
    \let\frac=\dfrac
\\]

# 平均値の定理

> **ラグランジュの平均値の定理**
>
> \\(f(x)\\) は \\([a,b]\\) で連続かつ \\((a,b)\\) で微分可能であるとする。このとき、
>
> \\[ f'(k) = \frac{f(b) - f(a)}{b-a} \quad \Longleftrightarrow \quad f(b) - f(a) = (b-a) \times f'(k) \\]
>
> を満たす実数 \\(k \in (a,b)\\) が存在する。特に \\(\min f' \leq f(k) \leq \max f'\\) として
>
> \\[ (b-a) \times \min f' \leq f(b)-f(a) \leq (b-a) \times \max f' \\]
>
> という不等式が成り立つ。

値の存在性以外でいうと、\\(b-a, ~ f(b)-f(a)\\) のもう一方が評価しやすいときに

\\[
    |f(b) - f(a)| \leq (b-a) \times \max \\{ |\min f'|, |\max f'| \\} \\\\
    b-a \leq |f(b) - f(a)| \times \max\left\\{ \frac{1}{|\min f'|}, \frac{1}{|\max f'|}\right\\}
\\]

と評価できる。特に \\(f'(x)\\) は単調であることが多い。


## 積分についての平均値の定理

> **積分についての平均値の定理**
>
> \\(\disp \int_c^x f(t) ~ dt\\) について平均値の定理を考えると
>
> \\[ f(k) = \frac{1}{b-a} \int_a^b f(t) ~ dt \Longleftrightarrow \int_a^b f(t) ~ dt = (b-a) \times f(k) \\]
>
> を満たす実数 \\(k \in (a,b)\\) が存在する。

特に \\(b \to a\\) とすれば微積分学の基本定理となっている。


## 反復更新数列の極限

> \\(f(x)\\) は区間 \\(I\\) で微分可能であり、\\(f(\alpha) = \alpha\\) となる不動点 \\(\alpha \in I\\) を持つ。また、傾きの絶対値は 1 より小さい実数 \\(r\\) で抑えられる、すなわち
>
> \\[ ^\exists r \in (0,1), ~ {}^\forall x \in I \setminus \\{\alpha\\}, ~ |f'(x)| \leq r \\]
>
> を満たすとする。特に、\\(f(I) \subsetneq I\\) である。
> 
> 初項 \\(a_0 \in I\\), 漸化式 \\(a_{n+1} = f(a_n)\\) で定義される数列の極限値を考える。ここで、中間値の定理より
>
> \\[ |a_{n+1} - \alpha| = |f(a_n) - \alpha| \leq r \times |a_n - \alpha| \\]
>
> が成立するから、\\(|a_n - \alpha| \leq r^n |a_0 - \alpha| \to 0\\) より \\(a_n \to \alpha\\) を得る。
