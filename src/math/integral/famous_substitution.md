## 有名な置換

### sin 置換

\\( x = \sin \theta \\) と置換する方法。

\\( \cos \theta = \sqrt{1-x^2} \\) と表すならば \\( 0 \leq \cos \theta \\) を満たす範囲で置換する必要がある。
よく \\( [-\pi/2, \pi/2] \\) が使われる。

\\[
    \int f(x, \sqrt{1-x^2}) dx \longrightarrow \int f(\sin \theta, \cos \theta) \cdot \cos \theta ~ d\theta
\\]



### tan 置換

\\( x = \tan \theta \\) と置換する方法。

\\[
    \int f(\tan \theta) ~ d\theta \longrightarrow \int f(x) \cdot \frac{1}{x^2 + 1} ~ dx
\\]


\\( \cos^2 \theta, ~ \sin^2 \theta \\) が \\( \tan \theta \\) で書けるから、これらで構成された有理関数は積分できる。



### 双曲線関数による置換

\\( x = \sin \theta \\) によって \\( 1 - x^2 \\) が解消できるように、\\( x = \sinh \theta \\) と置換することで \\( 1 + x^2 \\) を解消できる。

双曲線関数に関する性質を学ぶ必要があるが、双曲線関数を背景とした問題はそこそこある気がするので、覚える価値はあると思う。



### Euler 置換

[Wikipedia(en)](https://en.wikipedia.org/wiki/Euler_substitution) を見よう。これは Euler first substitution と紹介されているものである。 

\\( \displaystyle \int f(x, \sqrt{ax^2 + bx + c}) ~ dx \\) という形に対し \\( \sqrt{ax^2 + bx + c} = t - \sqrt{a} x \\) と置換する方法。
\\( x, dx \\) が \\( t \\) の有理式で書けるため、一般的に解ける。

置換式を \\(2\\) 乗すると \\(x^2\\) の項が消えるのが嬉しいポイントなのだと思う。



#### 例題1

> \\( \displaystyle \int \frac{1}{\sqrt{x^2 + 1}} ~ dx\\) を求めよ。

\\( \sqrt{x^2+1} = t-x \\) と Euler 置換する。

\\(2\\) 乗して変形すると \\( x = \dfrac{t^2 - 1}{2t} \\) となる。微分して \\( dx = \dfrac{t^2 + 1}{2t^2} dt \\) を得る。

以上より、

\\[\begin{eqnarray}
    \int \frac{1}{\sqrt{x^2+1}} ~ dx
        = \int \frac{1}{t-\frac{t^2-1}{2t}} \cdot \dfrac{t^2 + 1}{2t^2} ~ dt
        = \int \frac{1}{t} ~ dt
        = \log t
        = \log(x + \sqrt{x^2+1})
\end{eqnarray}\\]

である。

これは他の置換でも解くことができるが、被積分関数の分母が \\( x^2 + c \\) でなくても統一的に置換できる。

最終手段的置換とも言えるかもしれない。


### Weierstrass 置換

いわゆる \\( t = \tan \dfrac{\theta}2 \\) 置換。
三角関数が \\( t \\) の有理式で表わすことができ、一般的に解ける。

\\( \displaystyle \int f(\cos \theta, \sin \theta) ~ d\theta = \int f \Big( \frac{1-t^2}{1+t^2}, \frac{2t}{1+t^2} \Big) ~ \frac{2}{1+t^2} ~ dt \\) と変形できる。

置換後の値は

\\( \cos \theta = \dfrac{\cos^2 \dfrac{\theta}2 - \sin^2 \dfrac{\theta}2}{\cos^2 \dfrac{\theta}2 + \sin^2 \dfrac{\theta}2} = \dfrac{1-t^2}{1+t^2}, ~ \sin \theta = \dfrac{2 \sin \dfrac{\theta}2 \cdot \cos \dfrac{\theta}2}{\cos^2 \dfrac{\theta}2 + \sin^2 \dfrac{\theta}2} = \dfrac{2t}{1+t^2}, \\)

\\( \dfrac{dt}{d\theta} = \dfrac{1 + t^2}{2} \quad \because (\tan x)' = 1 + \tan^2 x \quad \\) (あるいは \\(\theta = 2\arctan t\\) の微分)

と計算する方法が、若干天下り感があるがすっきりしていると思う。

複素数平面での座標の一致 \\( \cos \dfrac\theta2 + i\sin \dfrac\theta2 = \dfrac{1}{\sqrt{1+t^2}} (1 + ti) \\) より、

ド・モアブルの定理を使いつつ両辺 \\( 2 \\) 乗して実部・虚部を比較する方法を、どこかで見た。

こちらも最終手段的置換と言われがち。



### King property

\\( \displaystyle \int_a^b f(x) ~ dx = \int_a^b f(a+b-x) ~ dx \\) という変形を King property と呼んだりする。

直感的には、\\( a \to b \\) で積分した面積と、\\(y\\) 軸で反転した後 \\( b \to a \\) に対応した部分の面積は一致することから従う。

やけに対称性があるぞと思ったとき、特に、被積分関数が三角関数で構成されているとき、うまくいくことが (ときどき) ある。

#### 例題1

> \\( \displaystyle I = \int_0^{\pi/2} \frac{\sin \theta}{\sin \theta + \cos \theta} ~ d\theta \\) を求めよ。

\\( \pi/2 - \theta = \theta'\\) と置換すると
\\( \displaystyle \int_0^{\pi/2} \frac{\sin \theta}{\sin \theta + \cos \theta} = \int_0^{\pi/2} \frac{\cos \theta'}{\sin \theta' + \cos \theta'} \\) が分かる。

置換した結果とを足して \\( 2 \\) で割ることで \\( I = \displaystyle \frac 12 \int_0^{\pi/2} 1 ~ d\theta = \pi/4 \\) を得る。
