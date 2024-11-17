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

となるから、向心力 (物体にはたらく力の合力の向心成分) の運動方程式は

\\[
    F\_{\text{向心方向}} = m \cdot r{\dot\theta}^2 = m \cdot \frac{v^2}{r}
\\]

となる。速度ベクトルが常に接線方向であることを考えると、向心力は仕事をせず、接線方向の力による仕事によって速度が変化することが分かる。
また、円運動の回転方向が逆になり始める瞬間は \\(\theta\\) が極値をとって \\(\dot \theta = v = 0\\) となるから、<uj>向心力が 0 になる</uj>。

一般には \\(\theta(t)\\) が表せないことが多く \\(\theta\\) が現れない向心力の式しか使わない。また <uj>運動全体で力学的エネルギー保存則が成り立つことがよくある</uj> ので注意する。

> 円運動 気にすること
>
> - 向心向き加速度・向心力
> 
> \\[ \disp a\_{\text{向心方向}} = \frac{v^2}{r}, \quad F\_{\text{向心方向}} = m \cdot \frac{v^2}{r} \\]
>
> - 力学的エネルギー保存の確認
>
> - 円運動の回転方向が変わる \\(\Longrightarrow\\) \\(v = F\_{\text{向心方向}} = 0\\)




### 等速円運動

\\(θ(t) = \omega t\\) とした場合。この定数 \\(\omega ~ [\mathrm{rad/s}]\\) を角速度という。代入すれば、角速度による表示

\\[
    \v x = re^{i\omega t}, \quad \v v = \underbrace{r\omega \cdot ie^{i\omega t}}\_{\text{接線方向}}, \quad \v a = \underbrace{r\omega^2 \cdot (-e^{i\omega t})}_{\text{向心方向}} = -\omega^2 \v x \\\\
    \longrightarrow \quad v = r\omega, \quad a = r\omega^2, \quad F\_{\text{向心方向}} = mr\omega^2
\\]

を得る。特に、接線方向の力の大きさは 0 である。また、等速円運動では周期

\\[ T = \frac{2\pi}{\omega} = \frac{2\pi r}{v}\\]

を求めることができる。意味を考えれば明らか。

> 等速円運動 気にすること
>
> - 角速度による表示
>   + 角速度を出せるなら出す。
> 
> \\[ v = r\omega, \quad a = r\omega^2, \quad F\_{\text{向心方向}} = mr\omega^2, \quad T = \frac{2\pi}{\omega} \\]
>
> - 円運動由来の表示
>   + 角速度が分かるなら不要。
>
> \\[ a\_{\text{向心方向}} = \frac{v^2}{r}, \quad F\_{\text{向心方向}} = m \cdot \frac{v^2}{r}, \quad T = \frac{2\pi r}{v}\\]
>
> - 接線方向の力 \\(F\_{\text{接線方向}} = 0\\)


## 単振動

等速円運動の正射影とも取れる。sin で書きたいので、ここでは虚軸の正射影を考える。振動中心を \\(\v x_c\\) とすると

\\[
    \v x = \v x_c + r\sin \omega t, \quad \v v = r\omega \cos \omega t, \quad \v a = -r\omega^2 \sin \omega t \\\\
    \longrightarrow \v a = -\omega^2 (x-x_c)
\\]

となり、運動方程式は

\\[
    \v F = -mr\omega^2 \sin \omega t = - \underbrace{m\omega^2}_{k} (\v x- \v x_c)
\\]

となる。この力を復元力と呼ぶ。また、復元力がする仕事との力学的エネルギー収支を考えれば

\\[
    \frac 12 mv^2 + \frac 12 \underbrace{m\omega^2}_{k} (\v x - \v x_c)^2 = \mathrm{const.}
\\]

が成立する。特に、はたらく力に非保存力が含まれていても成立する。

単振動では \\(\theta\\) を用いて考える問題もあるが、誘導が無ければ使わずに解けることが多い。
