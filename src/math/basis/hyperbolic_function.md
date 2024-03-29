## 双曲線関数

|定義|定義域・値域|
|:-:|:-:|
|\\( \cosh\theta = \dfrac{e^\theta + e^{-\theta}}2 \\)|\\( \mathbb R \to [1, \infty) \\)|
|\\( \sinh\theta = \dfrac{e^\theta - e^{-\theta}}2 \\)|\\( \mathbb R \to \mathbb R \\)|
|\\( \tanh\theta = \dfrac{\sinh\theta}{\cosh\theta} = \dfrac{e^\theta - e^{-\theta}}{e^\theta + e^{-\theta}} \\)|\\( \mathbb R \to (-1, 1) \\)|

\\( \cos \theta = \dfrac{e^{i\theta} + e^{-i\theta}}2, ~ \sin \theta = \dfrac{e^{i\theta} - e^{-i\theta}}{2i} \\) から \\(i\\) を取った形になっている。

### 性質

三角関数と比べて \\(i\\) が無い分、三角関数よりも "素直" な式が成り立つ。

三角関数と似た性質としては、

+ \\( \cosh \\) は偶関数、\\( \sinh, \tanh \\) は奇関数。

+ \\( \cosh^2\theta - \sinh^2\theta = 1 \\) が成り立つ。
    - 点 \\((\cosh\theta, \sinh\theta)\\) は、双曲線 \\( x^2 - y^2 = 1 \\) の \\( 1 \leq x \\) 部分を動く。

+ 加法定理: \\( \left\\{ \begin{array}{} \cosh(\alpha \pm \beta) = \cosh\alpha\cos\beta \pm \sinh\alpha\sinh\beta \\\\ \sinh(\alpha \pm \beta) = \sinh\alpha\cosh\beta \pm \cosh\alpha\sinh\beta \\\\ \tanh(\alpha \pm \beta) = \dfrac{\tanh\alpha \pm \tanh\beta}{1 \pm \tanh\alpha\tanh\beta} \end{array} \right. \\)

+ 微分: \\( (\cosh\theta)' = \sinh\theta, ~ (\sinh\theta)' = \cosh\theta, ~ (\tanh\theta)' = \dfrac1{\cosh^2\theta} \\)

+ \\(j^2 = 1\\) を満たす非実数 \\(j\\) を用いて、\\(e^{j\theta} = \cosh \theta + j\sinh \theta \\) が成り立つ。
    - この \\(j\\) は分解型複素数と呼ばれる。

<br>

三角関数にない特徴としては、

+ \\( \cosh\theta + \sinh\theta = e^\theta, ~ \cosh\theta - \sinh\theta = e^{-\theta} \\) が成り立つ。

+ 逆関数の表現: \\(
    \left\\{ \begin{array}{l}
        \mathrm{arccosh} \\, x = \log(x+\sqrt{x^2-1}) &\mathrm{for} ~ 1 \leq x \\\\
        \mathrm{arcsinh} \\, x = \log(x+\sqrt{x^2+1}) \\\\
        \mathrm{arctanh} \\, x = \dfrac12\log\dfrac{1+x}{1-x} &\mathrm{for} ~ -1 < x < 1
    \end{array} \right. 
\\)
    - これは \\( e^\theta \\) の \\(2\\) 次方程式となるよう変形することで導出できる。

などがある。



### 積分での利用

\\( x = \sinh \theta \\) と置換することで \\( \sqrt{1+x^2} \\) を解消することができる。

\\[
    \int f(x, \sqrt{1+x^2}) dx = \int f(\sinh\theta, \cosh\theta) \cdot \cosh\theta ~ d\theta
\\]
