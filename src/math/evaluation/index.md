\\(
    \let\eps=\varepsilon
\\)

# 評価

## eの指数関数

主に \\(x = 0, \infty\\) まわりの評価しか使わない。

まずマクローリン展開。覚えておきたい。

\\[
    e^x = 1 + x + \frac{1}{2}x^2 + \frac{1}{6}x^3 + \cdots + \frac{1}{n!}x^n + \cdots
\\]

（この無限級数は任意の実数 \\(x\\) について収束することが知られている。cf. 収束半径）

次に \\(0 \leq x\\) の範囲を考える。\\(\displaystyle 1 + \int_0^{x'} \circ ~ dx \quad (0 \leq x')\\) をとる操作を繰り返すことで

\\[
    \begin{align}
        0 \leq x ~ \Longrightarrow ~ &1 \leq e^x \\\\[6px]
        \Longrightarrow ~ &1 + x \leq e^x \quad \\\\[6px]
        \Longrightarrow ~ &1 + x + \frac{1}{2}x^2 \leq e^x \\\\[6px]
        \Longrightarrow ~ &1 + x + \frac{1}{2}x^2 + \cdots + \frac{1}{n!}x^n \leq e^x
    \end{align}
\\]

が分かる。これより \\(\displaystyle \lim_{x \to \infty} \frac{e^x}{x^n} = 0\\) が示せる。また、正の実数 \\(\eps\\) を適当に決めると、同様に

\\[
    \begin{align}
    0 \leq x \leq \log(1+\eps) ~ \Longrightarrow ~ &e^x \leq 1+\eps \\\\
    \Longrightarrow ~ &e^x \leq 1 + x + \frac{1}{2}x^2 + \cdots + \frac{1+\eps}{n!}x^n
    \end{align}
\\]

となるから、\\(x = +0\\) まわりで挟むことができる。これより

\\[
    \lim_{x \to +0} \frac{e^x - 1 - x - \cdots - \frac{1}{(n-1)!}x^{n-1}}{x^n} = \frac{1}{n!}
\\]

であることが示せる。

最後に \\(x \leq 0\\) の範囲を考える。\\(\displaystyle \int_{x'}^0 \circ ~ dx \quad (x' \leq 0)\\) をとって整理する操作を繰り返すことで

\\[
    \begin{align}
    x \leq 0 ~ \Longrightarrow ~ &e^x \leq 1 \\\\
    \Longrightarrow ~ &1 + x \leq e^x \\\\
    \Longrightarrow ~ &e^x \leq 1 + x + \frac{1}{2}x^2 \\\\
    \Longrightarrow ~ &
        \left\\{ \begin{array}{l}
            1 + x + \cdots + \dfrac{1}{n!} x^n \leq e^x \quad (n: \mathrm{odd}) \\\\
            e^x \leq 1 + x + \cdots + \dfrac{1}{n!} x^n \quad (n: \mathrm{even})
        \end{array} \right.
    \end{align}
\\]

が分かる。\\(x = -0\\) まわりで挟めるので

\\[
    \lim_{x \to -0} \frac{e^x - 1 - x - \cdots - \frac{1}{(n-1)!}x^{n-1}}{x^n} = \frac{1}{n!}
\\]

であることが示せる。


## 階乗

\\(\displaystyle \int_{k-1}^k \log t ~ dt < \log k < \int_k^{k+1} \log t ~ dt \quad (\mathrm{for} ~ 2 \leq k)\\) より

\\[
    \int_1^n \log t ~ dt \leq \log{n!} < \int_1^{n+1} \log t ~ dt \\\\[10px]
    \therefore ~ n\log n - n + 1 \leq \log{n!} < (n+1)\log(n+1) - n \\\\
    \therefore ~ e \left(\frac{n}{e}\right)^n \leq \log{n!} < e \left(\frac{n+1}{e}\right)^{n+1}
\\]

が分かる。
