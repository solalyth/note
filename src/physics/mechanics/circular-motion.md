\\(
    \newcommand{\disp}{\displaystyle}
    \newcommand{\v}[1]{\boldsymbol #1}
    \let\frac=\dfrac
\\)

# 円運動・単振動

## 一般の円運動

円運動の中心を \\(0\\), 初期位置を \\(r\\) となるよう、適切に極座標平面をとる。偏角を \\(\theta(t)\\) とすると

\\[
    \v x = re^{i\theta}, \quad \v v = \underbrace{r\dot\theta \cdot ie^{i\theta}}\_{\text{接線方向}}, \quad \v a = \underbrace{r\ddot\theta \cdot ie^{i\theta}}\_{\text{接線方向}} + \underbrace{r{\dot\theta}^2 \cdot (-e^{i\theta})}_{\text{向心方向}}
\\]

となるから、運動方程式は

\\[
    F\_{\text{向心方向}} = m \cdot r{\dot\theta}^2 = m \cdot \frac{v^2}{r}, \quad F\_{\text{接線方向}} = m \cdot r\ddot\theta
\\]

となる。特に、向心方向の力を向心力と言う[^1]。速度ベクトルが常に接線方向であることを考えると、向心力は仕事をしない。

実際には \\(\theta\\) が簡潔な式で表せることは無いため、後者は使わない。\\(\theta\\) が現れない前者は必ず覚える。また、全体で見ると力学的エネルギー保存則が成り立つことが多いので、気をつけるとよい。

[^1]: 間違えるのは自分だけなのかもしれないが、「向心力という大きさ \\(\frac{mv^2}{r}\\) の力がはたらく」のではなく「物体にはたらく様々な力の合力の向心成分 (向心力) が \\(\frac{mv^2}{r}\\) になっている」のである。

> **円運動の向心力**
>
> \\[ F\_{\text{向心方向}} = m \cdot \frac{v^2}{r} \\]
