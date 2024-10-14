\\(
    \newcommand{\disp}{\displaystyle}
    \newcommand{\v}[1]{\boldsymbol #1}
    \newcommand{\Arrowlr}{\Longleftrightarrow}
    \let\frac=\dfrac
\\)

# 凸不等式系

凸不等式は非常に強い道具。ここから様々な不等式が導ける。

```admonish note title="凸不等式 (Jensen's inequality)"
下に狭義凸な関数 \\(f \colon I \to \mathbb{R}\\) と、和が \\(1\\) である正の重み \\((w_n)\\) について、

\\[ ^\forall (a_i \in I)_{i = 1, 2, \cdots, n} ~ \bigg[ ~ f \left( \sum w_i a_i \right) \leq \sum w_i f(a_i) ~ \bigg] \\]

が成立する。等号成立は \\(a_i = \text{const.}\\) であるときに限る。

---

(証明)

\\(\disp k = \sum w_i a_i\\) と置く。凸性より

\\[
    
\\]

```



```admonish note title="均一重みの凸不等式"

\\(w_n = 1/n\\) としたとき

\\[\frac{\sum f(a_i)}{n} \leq f \left( \frac{\sum a_i}{n} \right)\\]

となる。以下では、これを「均一重みの凸不等式」と呼ぶ。

---

均一重みかつ \\(^\forall i \neq j, ~ a_i \neq a_j\\) とした例は直感的。

\\(y = f(x)\\) のグラフから \\(n\\) 個の点 \\((w_i, f(w_i))\\) をとり、凸包を考える。

この凸包の重心は \\(\disp \left(\frac{\sum a_i}{n}, \frac{\sum f(a_i)}{n}\right)\\) で表され、図を描けば明らかに領域 \\(y > f(x)\\) 上に存在するから、示せた。

\\(n=2\\) のときは中点となり、頻出。
```

```admonish note title="一般化された相加相乗平均"
上に凸な関数 \\(f(x) = \log x ~ (0 < x)\\) について、均一重みの凸不等式から

\\[
    \frac{\sum \log a_i}{n} \leq \log \frac{\sum a_i}{n}
    \Arrowlr \sqrt[n]{\prod a_i} \leq \frac{\sum a_i}{n}
\\]

である。等号は \\(a_i = \mathrm{const.}\\) のとき成立する。

---

\\[ 2x + \frac{1}{x^2} = x + x + \frac{1}{x^2} \leq 3\sqrt[3]{x \cdot x \cdot \frac{1}{x^2}} = 3\\]

のように、分割することで評価させるテクニックがある。  
最小値などでは、等号成立する値が存在するように上手く分割する必要がある。
```

```admonish note title="コーシー・シュワルツの不等式"
下に凸な関数 \\(f(x) = x^2\\) について、\\(a_i = \frac{x_i}{y_i}\\)


```
