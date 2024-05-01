## 有名な積分

### sin^2, cos^2, tan の有理式の積分

cf. [有名置換#tan置換](./famous_substitution.md#tan-置換)

\\( \sin^2 \theta, \\, \cos^2 \theta \\) は \\( \tan \theta \\) の有理式で書ける。

\\( t = \tan \theta \\) と置換すると、\\( \sin^2 \theta, \\, \cos^2 \theta, \\, \tan \theta, \\, d\theta \\) が全て \\(t\\) の有理式で表せる。

#### 例題1

> \\( \displaystyle \int \frac 1{\cos^4 \theta} ~ d\theta \\) を求めよ。

\\( t = \tan \theta \\) と置換すると、

\\[
    \int \frac 1{\cos^4 \theta} ~ d\theta
        = \int (\tan^2 \theta + 1)^2 ~ d\theta
        = \int (t^2 + 1) ~ dt
        = \frac 1 3 \tan^3 \theta + \tan \theta
\\]

を得る。



### cos の負の奇数乗の積分

\\( \displaystyle I_n = \int \frac{1}{\cos^{2n+1} \theta} ~ d\theta \\) と置く。
気合いの \\( \tan \\) による部分積分・同型出現によって漸化式を得る。

\\[
    \begin{eqnarray}
        I_n
            &=& \int \frac{1}{\cos^2\theta} \cdot \frac{1}{\cos^{2n-1}\theta} ~ d\theta \\\\
            &=& \tan\theta \cdot \frac{1}{\cos^{2n-1}\theta} - \int \tan\theta \cdot \frac{(2n-1)\sin\theta}{\cos^{2n}\theta} ~ d\theta \quad \\\\
            &=& \frac{\sin\theta}{\cos^{2n}\theta} - (2n-1)\int \frac{1-\cos^2\theta}{\cos^{2n+1}\theta} ~ d\theta \\\\
            &=& \frac{\sin\theta}{\cos^{2n}\theta} - (2n-1)(I_n - I_{n-1})
    \end{eqnarray}
\\]

より、\\( 2nI_n = \dfrac{\sin\theta}{\cos^{2n}\theta} + (2n-1)I_{n-1} \\) を得る。

\\( \displaystyle I_0 = \int \frac{1}{\cos\theta} ~ d\theta = \frac12 \\, \log \\, \left|\frac{1+\sin\theta}{1-\sin\theta}\right| \\) であるから、再帰的に得られる。

この漸化式を覚えるというよりは、こう変形するとよい、ということを覚えたい。

この他にも、積分漸化式として [wikipedia](https://en.wikipedia.org/wiki/Integration_by_reduction_formulae) に多くの例が書いてある。

#### 例題1

> \\( \displaystyle \int \dfrac{1}{\cos^3\theta} ~ d\theta \\) を求めよ。

すごい出てくる気がする。

上と同様に部分積分する。同型出現させる意識を持つ！

\\[
    \begin{eqnarray}
        \int \frac{1}{\cos^3\theta} ~ d\theta
            &=& \tan\theta \cdot \frac{1}{\cos\theta} - \int \tan\theta \cdot \frac{\sin\theta}{\cos^2\theta} ~ d\theta \\\\
            &=& \frac{\sin\theta}{\cos^2\theta} - \int \frac{1 - \cos^2\theta}{\cos^3\theta} ~ d\theta \\\\
            &=& \frac{\sin\theta}{\cos^2\theta} - \int \frac{1}{\cos^3\theta} ~ d\theta + \int \frac{1}{\cos\theta} ~ d\theta
    \end{eqnarray}
\\]

したがって、\\(\displaystyle \int \frac{1}{2\cos^3\theta} ~ d\theta = \frac{\sin\theta}{\cos^2\theta} + \frac 14 \\, \log \\, \left|\frac{1 + \sin\theta}{1 - \sin\theta}\right| \\)


### 逆三角関数・逆双曲線関数が関わる積分

逆三角関数・逆双曲線関数の微分は綺麗な形になる。

特に \\( \mathrm{arctanh} \\) は綺麗な式になるため、関数が直接入った形はよく出る気がする。

\\[
    \begin{eqnarray}
        \int \frac{1}{\sqrt{1 - x^2}} ~ dx &=& \arcsin x \\\\
        \int \frac{1}{\sqrt{1 + x^2}} ~ dx &=& \mathrm{arcsinh} ~ x = \log(x + \sqrt{x^2 + 1})\\\\
        \int \frac{1}{1 + x^2} ~ dx &=& \arctan x \\\\
        \int \frac{1}{1 - x^2} ~ dx &=& \mathrm{arctanh} ~ x = \frac 12 \\, \log \frac{1+x}{1-x} \\\\
        \longrightarrow \int \frac{f'}{1 - f^2} ~ dx &=& \frac 12 \\, \log \frac{1+f}{1-f}
    \end{eqnarray}
\\]

逆に、逆三角関数・逆双曲線関数そのものが被積分関数に入っている場合、部分積分で微分する側にする。

#### 例題1

> \\( \displaystyle \int \frac{1}{\cos \theta} ~ d\theta \\) を求めよ。

\\( \displaystyle \int \frac{1}{\cos \theta} ~ d\theta = \int \frac{\cos \theta}{1 - \sin^2 \theta} ~ d\theta = \frac 12 \\, \log \\, \left|\frac{1+\sin\theta}{1-\sin\theta}\right| \quad \because \mathrm{arctanh} f \\) の式

#### 例題2

> \\( \displaystyle \int \arctan x ~ dx \\) を求めよ。

\\( \displaystyle \int \arctan x ~ dx = x \arctan x - \int \frac{x}{1 + x^2} dx = x \arctan x - \frac 12 \\, \log (1+x^2) \\)
