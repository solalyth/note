\\[
    \newcommand{\v}[1]{\boldsymbol #1}
    \newcommand{\par}[1]{\left( #1 \right)}
    \let\frac=\dfrac
\\]

# ラグランジュの未定乗数法

勾配 \\(\nabla f(x,y)\\) は

\\[ \nabla f(x,y) = \left[ \frac{\partial f}{\partial x}, ~ \frac{\partial f}{\partial y} \right]\\]

で定義されるベクトルである。関数値がより大きくなる方向を向き、関数値が同じ点からなる "等高線" と垂直であることが知られている。

> **ラグランジュの未定乗数法**
>
> \\(f(x,y), g(x,y)\\) は \\(C^1\\) 級関数であるとする。
> 
> \\(g(x,y) = 0\\) を満たしながら連続的に動くとき、\\(f(x,y)\\) の値が極値をとる必要条件は
>
> \\[\nabla g = \v 0 \quad \lor \quad {}^\exists \lambda, ~ \nabla f = \lambda \nabla g \\]
>
> を満たすことである。

後者の条件は「その点から微小量だけずらしても関数値は変わらない」すなわち「等高線の向きが一致する」ということを表している。
もし等高線の向きが一致しないならば、微小量だけ動かしてより大きく・小さくすることができ、極値ではないことが分かる。


## 例題1

> \\(9x^2 + 4y^2 + z^2 = 1\\) であるときの \\(x+y+z\\) の最大値と最小値を求めよ。

```admonish success title="解答"
\\[
    f(x,y,z) = x+y+z, ~ \nabla f = \left[ 1, 1, 1 \right] \\\\[15px]
    g(x,y,z) = 9x^2 + 4y^2 + z^2 - 1, ~ \nabla g = \left[ 18x, 8y, 2z \right]
\\]

であり、\\(\nabla g = \v 0\\) となるものは存在しない。よって、ラグランジュの未定乗数法から、

\\[
    ^\exists \lambda, ~ x = \frac{1}{18\lambda}, ~ y = \frac{1}{8\lambda}, ~ z = \frac{1}{2\lambda}
\\]

である必要がある。これを条件式に代入すれば \\(\lambda = \pm \dfrac{7}{12}\\) を得る。それぞれ関数値を求めれば

\\[
    \max_{g = 0} f = f \left( \frac{7}{216}, \frac{7}{96}, \frac{7}{24} \right) = \frac 76 \\\\
    \min_{g = 0} f = f \left( -\frac{7}{216}, -\frac{7}{96}, -\frac{7}{24} \right) = - \frac 76
\\]

を得る。

---

これはコーシー・シュワルツの不等式

\\[ (x+y+z)^2 \leq \left\\{(3x)^2 + (2y)^2 + z^2\right\\} \left\\{(1/3)^2 + (1/2)^2 + 1^2 \right\\} \\]

とその等号成立条件から同様な結論 \\( -\frac 76 \leq x+y+z \leq \frac 76\\) を得ることができる。
```
