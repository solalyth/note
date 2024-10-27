\\(
    \newcommand{\disp}{\displaystyle}
    \newcommand{\v}[1]{\boldsymbol #1}
    \let\frac=\dfrac
\\)

# 円運動・単振動

## 円運動

円運動の中心を \\(0\\), 初期位置を \\(r\\) となるよう、適切に極座標平面をとる。偏角を \\(\theta(t)\\) とすると

\\[
    \v x = re^{i\theta}, \quad \v v = \underbrace{r\dot\theta \cdot ie^{i\theta}}\_{\text{接線方向}}, \quad \v a = \underbrace{r\ddot\theta \cdot ie^{i\theta}}\_{\text{接線方向}} + \underbrace{r{\dot\theta}^2 \cdot (-e^{i\theta})}\_{\text{向心方向}} \\\\
    \longrightarrow \quad a\_{\text{向心方向}} = \frac{v^2}{r}
\\]

となるから、運動方程式は

\\[
    F\_{\text{向心方向}} = m \cdot r{\dot\theta}^2 = m \cdot \frac{v^2}{r}, \quad F\_{\text{接線方向}} = m \cdot r\ddot\theta
\\]

となる。この向心成分の力を向心力と言う[^1]。速度ベクトルが常に接線方向であることを考えると、向心力は仕事をせず、接線方向の力による仕事によって速度が変化する。
特に、円運動の回転方向が逆になり始める瞬間は、<uj>力の接線方向成分が 0 になる必要がある</uj>。

一般には \\(\theta\\) が簡潔な式で表せないことが多いため、\\(\theta\\) が現れない向心力の式しか使わない。また、<uj>運動全体で力学的エネルギー保存則が成り立つことがよくある</uj>。

[^1]: 間違えるのは自分だけなのかもしれないが、「向心力という大きさ \\(\frac{mv^2}{r}\\) の力がはたらく」のではなく「物体にはたらく様々な力の合力の向心成分 (向心力) が \\(\frac{mv^2}{r}\\) になっている」のである。

> 円運動 気にすること
>
> - 向心向き加速度・向心力
> 
> \\[ \disp a\_{\text{向心方向}} = \frac{v^2}{r}, \quad F\_{\text{向心方向}} = m \cdot \frac{v^2}{r} \\]
>
> - 力学的エネルギー保存
>
> - 円運動の回転方向が変わる \\(\Longrightarrow\\) \\(F\_{\text{接線方向}} = 0\\)




### 等速円運動

\\(θ(t) = \omega t\\) とした場合。この定数 \\(\omega ~ [\mathrm{rad/s}]\\) を角速度という。代入すれば、角速度による表示

\\[
    \v x = re^{i\omega t}, \quad \v v = \underbrace{r\omega \cdot ie^{i\omega t}}\_{\text{接線方向}}, \quad \v a = \underbrace{r\omega^2 \cdot (-e^{i\omega t})}_{\text{向心方向}} = -\omega^2 \v x \\\\
    \longrightarrow \quad v = r\omega, \quad a = r\omega^2, \quad F\_{\text{向心方向}} = mr\omega^2
\\]

を得る。特に、接線方向の力の大きさは 0 である。また、等速円運動では周期

\\[ T = \frac{2\pi}{\omega} = \frac{2\pi r}{v}\\]

を求めることができる。

> 等速円運動 気にすること
> 
> - もろもろ
>   + 上式から下式(円運動由来)が導ける。下式は \\(r\\) を知りたいときに使う。
> 
> \\[
> \left\\{ \begin{array}{}
>     v = r\omega, \quad a = r\omega^2, \quad F\_{\text{向心方向}} = mr\omega^2 \\\\[12px]
>     a\_{\text{向心方向}} = \frac{v^2}{r}, \quad F\_{\text{向心方向}} = m \cdot \frac{v^2}{r}
> \end{array} \right.
> \\]
>
> - 接線方向の力 \\(F\_{\text{接線方向}} = 0\\)


## 単振動

等速円運動の正射影とも取れる。sin で書きたいので、ここでは虚軸の正射影を考える。振動中心を \\(x_c\\) として計算すれば

\\[
    \v x = x_c + r\sin \omega t, \quad \v v = r\omega \cos \omega t, \quad \v a = -r\omega^2 \sin \omega t \\\\
    \longrightarrow \v a = -\omega^2 (x-x_c)
\\]

を得られ、運動方程式は

\\[
    F = -m\omega^2 (x-x_c)
\\]

となる。単振動は \\(\theta\\) を用いて考える問題もあるが、基本的には使わずに考えることが多い。
