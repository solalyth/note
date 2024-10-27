\\(
    \newcommand{\disp}{\displaystyle}
    \newcommand{\v}[1]{\boldsymbol #1}
    \let\frac=\dfrac
\\)

# 円運動・単振動

## 円運動

円運動の中心を \\(0\\), 初期位置を \\(r\\) となるよう、適切に極座標平面をとる。偏角を \\(\theta(t)\\) とすると

\\[
    \v x = re^{i\theta}, \quad \v v = \underbrace{r\dot\theta \cdot ie^{i\theta}}\_{\text{接線方向}}, \quad \v a = \underbrace{r\ddot\theta \cdot ie^{i\theta}}\_{\text{接線方向}} + \underbrace{r{\dot\theta}^2 \cdot (-e^{i\theta})}_{\text{向心方向}}
\\]

となるから、運動方程式は

\\[
    F\_{\text{向心方向}} = m \cdot r{\dot\theta}^2 = m \cdot \frac{v^2}{r}, \quad F\_{\text{接線方向}} = m \cdot r\ddot\theta
\\]

となる。特に、向心方向の力を向心力と言う[^1]。速度ベクトルが常に接線方向であることを考えると、向心力は仕事をせず、接線方向の力によって周回速度が変化することが分かる。

一般には \\(\theta\\) が簡潔な式で表せないことが多いため、\\(\theta\\) が現れない向心力の式しか使わない。また、<uj>運動全体で力学的エネルギー保存則が成り立つことがよくある</uj>。

[^1]: 間違えるのは自分だけなのかもしれないが、「向心力という大きさ \\(\frac{mv^2}{r}\\) の力がはたらく」のではなく「物体にはたらく様々な力の合力の向心成分 (向心力) が \\(\frac{mv^2}{r}\\) になっている」のである。

> **円運動の向心力の大きさ**
>
> \\[ F\_{\text{向心方向}} = m \cdot \frac{v^2}{r} \\]


### 等速円運動

円運動の式で \\(θ(t) = \omega t\\) とした場合である。この定数 \\(\omega ~ [\mathrm{rad/s}]\\) を角速度という。代入すれば

\\[
    \v x = re^{i\omega t}, \quad \v v = \underbrace{r\omega \cdot ie^{i\omega t}}\_{\text{接線方向}}, \quad \v a = \underbrace{r\omega^2 \cdot (-e^{i\omega t})}_{\text{向心方向}} = -\omega^2 x \\\\
    \longrightarrow \quad v = r\omega, \quad a = r\omega^2
\\]

を得る。特に、接線方向の力の大きさは 0 で、向心力の大きさは

\\[
    F\_{\text{向心方向}} = mr\omega^2
\\]

とも表せることが分かる。また、円運動の周期

\\[ T = \frac{2\pi}{\omega} = \frac{2\pi r}{v}\\]

が分かる。

> **等速円運動での速度・加速度・力**
> 
> \\[ v = r\omega, \quad a = r\omega^2 \\\\
      \quad F\_{\text{向心方向}} = m \cdot \frac{v^2}{r} = mr\omega^2, \quad F\_{\text{接線方向}} = 0
  \\]


## 単振動

等速円運動の正射影とも取れる。sin で書きたいので、ここでは虚軸の正射影を考える。このとき





