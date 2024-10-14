# 単発記事集

面白そうだと思ったものを書き連ねます。
\\(
    \newcommand{\disp}{\displaystyle}
    \newcommand{\Arrowlr}{\Longleftrightarrow}
    \let\frac=\dfrac
\\)


## 三乗根の線形独立性

\\(\mathbb{Q}\\) 上で基底 \\(\big\\{ 1, \sqrt[3]{2}, \sqrt[3]{4} \big\\}\\) が線形独立であることを示す。

\\(\sqrt[3]{2}, \sqrt[3]{4} \notin \mathbb{Q}\\) は背理法で示せる。

<br>

背理法で示す。

線形結合でないと仮定すると、\\(\sqrt[3]{2}, \sqrt[3]{4} \notin \mathbb{Q}\\) に注意すれば

\\[
    \quad a\sqrt[3]{4} + b\sqrt[3]{2} + c = 0
\\]

を満たす、いずれも \\(0\\) でない有理数 \\(a, b, c\\) を取れる。

ここで、\\(x^3 - 2\\) は \\(x = \sqrt[3]{2}\\) を根に持つから、\\(\sqrt[3]{2} \notin \mathbb{Q}\\) に注意すれば

\\[
    x^3 - 2 = (ax^2 + bx + c)(Ax + B)
\\]

と有理数係数範囲で因数分解できる。有理根 \\(x = -\frac{B}{A}\\) が構成できたが、\\(x^3 - 2\\) は有理根を持たないため、矛盾。
