# 反応速度・平衡定数・電離度系

以下では、物質 \\(\mathrm{X}\\) のモル濃度を \\(\mathrm{[X] ~ mol/L}\\) と書き、\\(p_1\mathrm{[A_1]} + p_2\mathrm{[A_2]} + \cdots \rightleftharpoons q_1\mathrm{[B_1]} + q_2\mathrm{[B_2]} + \cdots\\) という反応について考える。
\\(
    \newcommand{\disp}{\displaystyle}
    \newcommand{\v}[1]{\boldsymbol #1}
    \newcommand{\Arrowlr}{\Longleftrightarrow}
    \let\frac=\dfrac
    \newcommand{\down}{\hspace{-3pt}\downarrow}
    \newcommand{\up}{\hspace{-3pt}\uparrow}
\\)

## 反応速度

反応速度とは **ある特定の物質一つの濃度の変化速度** で、反応速度定数 \\(k\\) を用いて \\(v = k\mathrm{[A_1]}^{\alpha_1}\mathrm{[A_2]}^{\alpha_2} \cdots\\) で表される[^1]。

ある一つの物質の反応速度が分かる場合、反応式から他の物質の反応速度も分かる。

[^1]: \\(\alpha_i\\) は反応ごとに決まる定数。実験でしか求められない。

```admonish note title="アレニウスの式"
同一の反応に対し、反応速度定数 \\(k\\) と活性化エネルギー \\(E\\) について、\\(\disp k \sim \exp\left(-\frac{E}{RT}\right)\\) が成り立つ。

このことから、反応速度定数は**活性化エネルギー・温度のみに依存し**、特に**線形ではない**。

活性化エネルギー \\(E\\) の値にもよるが、一般的に温度が 10K 増えると反応速度定数が 2~3 倍になると言われている。
```

<br>

```admonish question title="例題: 反応速度が一番大きくなる変化"
\\(\mathrm{H_2 + Br_2 \to 2HBr}\\) という反応の反応速度は、\\(\mathrm{[HBr]}\\) が小さいとき \\(v = k\mathrm{[H_2]}\mathrm{[Br_2]}^{1/2}\\) で表されることが分かっている。反応速度が最も大きくなるものを選べ。

1. 同じ温度・体積で、\\(\mathrm{[H_2]}\\) を 2 倍にする。
2. 同じ温度・体積で、\\(\mathrm{[Br_2]}\\) を 2 倍にする。
3. 同じ温度・物質量で、圧力を 2 倍にする。
4. 同じ体積・物質量で、\\(k\\) が 2 倍になる温度にする。

2024 年 共通テスト・追試
```

```admonish success title="解答"
(3.) は \\(\mathrm{[H_2], [Br_2]}\\) ともに 2 倍になり、これが一番大きくなる。
```

## 平衡定数・圧平衡定数・イオン積

反応が平衡状態にあるとき、平衡定数 \\(K\\) を用いて

\\[
    \mathrm{[B_1]}^{q_1}\mathrm{[B_2]}^{q_2}\cdots = K\mathrm{[A_1]}^{p_1}\mathrm{[A_1]}^{p_2}\cdots
\\]

が成り立つ。平衡定数は**温度のみに依存する**。

代わりに圧力で考えることもできて、圧平衡定数 \\(K_P\\) を用いて

\\[
    {P_\mathrm{B_1}}^{q_1} {P_\mathrm{B_2}}^{q_2}\cdots = K_P {P_\mathrm{A_1}}^{p_1} {P_\mathrm{A_1}}^{p_2}\cdots
\\]

が成り立つ。特に、理想気体状態方程式から \\(P_\mathrm{X} = [X] \cdot RT\\) が成り立ち、平衡定数 \\(K\\) と圧平衡定数 \\(K_P\\) の比は \\((RT)^k\\) の形になる。

```admonish note title="弱酸・弱塩基の電離度・pH"
電離度 \\(\alpha\\), モル濃度 \\(c ~ \mathrm{[mol/L]}\\) の酢酸を例にして考えよう。ただし、\\(1 - \alpha \approx 1\\) が成り立つとする[^2]。

|\\(\mathrm{[CH_3COOH]}\\)|\\(\mathrm{[CH_3COO^-]}\\)|\\(\mathrm{[H^+]}\\)|
|:-:|:-:|:-:|
|\\(c(1-\alpha)\\)|\\(c\alpha\\)|\\(c\alpha\\)|

が平衡状態であるから[^3]、\\(K = \frac{c\alpha \cdot c\alpha}{c(1-\alpha)} \approx c\alpha^2\\) が成り立つ。

特に \\(\mathrm{pH} = -\log \mathrm{[H^+]} = -\log(K/\alpha)\\) と求めることができる。


[^2]: しばしば「\\(\alpha\\) は \\(1\\) と比べて十分小さいものとする」と書かれる。
[^3]: 本来は \\(\mathrm{[CH_3COOH] + [H_2O] \rightleftharpoons [CH_3COO^-] + [H_3O^+]}\\) である。\\(\mathrm{[H_2O]} = 1\\) であり、\\(\mathrm{[H_3O^+]}\\) は \\(\mathrm{[H^+]}\\) とみなせることを利用している。ところで、平衡定数の値は変わらないとはいえ、次元はどちらを採用するんだろう……。
```
