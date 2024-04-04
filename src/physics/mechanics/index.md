# 力学

\\(
    \newcommand{\disp}{\displaystyle}
    \newcommand{\v}[1]{\boldsymbol #1}
    \newcommand{\Arrowlr}{\Longleftrightarrow}
    \let\frac=\dfrac
\\)

## 概要

### 運動の三法則

運動の三法則とは、

1. 力が作用しないならば、等速運動する。これが成り立つ系を **慣性系** と呼ぶ。
2. 運動方程式 ... \\(\v F = m \v a\\) が成り立つ。
3. 作用・反作用 ... ある物体 A が物体 B に力 \\(\v F\\) を与えているとき、逆に A は力 \\(-\v F\\) を受ける。

のことである。

```admonish warning title="慣性系でない例"
例えば「観測者が等加速度運動・等速円運動している」場合は慣性系ではない。

ところが、慣性力という **見かけの力 = 反作用の対象が存在しない力** を考えることで **あたかも慣性系であるかのように扱う** ことができる。
```

```admonish warning title="質量が無視できる物体の運動方程式"
\\(m = 0\\) として式を立ててよい。つまり加速度 \\(\v a\\) に関わらず \\(\v F = \v 0\\) が成り立つ。
```




### 変位・速度・加速度と力

変位の 1 回微分を速度、2 回微分を加速度と呼ぶ。加速度が一定であるときを考えよう。

定義から、積分することにより \\(
    \left\\{ \begin{array}{}
        \Delta \v v = \v a t \\\\
        \Delta \v x = \v{v}_0 t + \frac 12 \v a t^2
    \end{array} \right.
\\) が分かる。

また、特定の軸の成分に対して \\(\Delta v^2 = 2a \Delta x\\) が成り立つ。両辺微分すれば確かめられる。  
この公式は \\(t\\) を経由せずに変位・速度の関係式が欲しいときに使える。

```admonish note title="導出" collapsible=true
\\(a = \frac{dv}{dt}\\) に注意して、恒等式 \\(\disp \int 2v \cdot \frac{dv}{dt} ~ dt = 2a\int v ~ dt\\) をそれぞれ計算する。

一般的にベクトルで考えたとき、ベクトルの積を各要素の積(アダマール積)で定義すれば成り立つ。
```

「等速運動 \\(\Arrowlr ~ \v a = \v 0\\) 」「停止 \\(\Arrowlr ~ \v a = \v v = \v 0\\) 」である。  
特に \\(\v a = \v 0\\) のとき、運動方程式から「力のつり合い \\(\v F = \v 0\\) 」が成り立つ。

加速度が \\(\v 0\\) であっても停止しているとは限らないことに注意しよう。



### 束縛条件

「伸び縮みしない紐で繋がっている」「物体がめりこまない」など、二つの物体の変位が何らかの関係式で表せることがある。
この関係式を属に「束縛条件」と呼んだりする。

このとき、この関係式を微分することで、速度・加速度の関係式を得ることができる。



### 力の種類

|名称|一般的な表し方|特徴|
|:-|:-|:-|
|重力|\\(mg\\)|地球との万有引力。鉛直下向き。|
|弾性力|\\(kx\\)|ばねから受ける力。自然長に戻る向き。<br>変位 \\(x\\) と逆の向きなので \\(-kx\\) と表すことも。|
|張力|\\(T\\) (不定)<br>\\(T \geq 0\\)|糸から受ける力。糸と同じ向き。<br>両端は大きさが等しい張力を受ける。<br>\\(0\\) より小さくなるとき糸がたるむ。<br>たるんでいないとき、束縛条件が成り立つ。|
|垂直抗力|\\(N\\)(不定)<br>\\(N \geq 0\\)|接する面から受ける力。面に垂直。<br>大きさは垂直方向の力のつり合いから得られる。<br>\\(0\\) より小さくなるとき面から離れる。|
|静止摩擦力|\\(f\\) (不定)<br>\\(\mathrm{max} \\, \|f\| = \mu N\\)|静止した粗い面が受ける力。面に水平。<br>大きさは水平方向の力のつり合いから得られる。<br>\\(\mu N\\) より大きくなるとき動き出す。|
|動摩擦力|\\(\mu' N\\)|動いている粗い面が受ける力。運動と反対向き。<br>\\(\mu N\\) より小さくなっても静止するわけではない。|
|浮力|\\(\rho Vg\\)|水圧・気圧の差から発生する力の合力。鉛直上向き。<br>押しのけた流体にかかる重力と大きさが等しい。<br>(アルキメデスの原理)|

+ ばねを直列に繋げたとき \\(\disp \frac 1k = \sum \frac 1{k_i}\\), 並列に繋げたとき \\(\disp k = \sum k_i\\) となる。

+ 一般的に \\(\mu > \mu'\\) である。つまり、最大静止摩擦力は動摩擦力より強い。

+ 作用・反作用を忘れないようにしよう。

+ 「固定された台との垂直抗力・摩擦力」といった、大きさ不定の力の反作用が *死んでいる* 場合、その力が現れる式を用いて他の力が求められることは無い。存在しない方向を考えてみると良い。



### 運動量と仕事・力学的エネルギー

運動量は \\(m \v v\\) で定義されるベクトル量。単位は \\(\mathrm{[kg \cdot m/s] = [N \cdot s]}\\) である。

\\(\disp \Delta(m \v v) = \int m \v a ~ dt = \int \v F ~ dt\\) から分かるように、受けた力の時間積分 = 力積 によって変化する。

**系において外力が働かないとき**、作用・反作用の法則を考えると \\(\disp \sum \Delta(m \v v) = \disp \v 0\\) が成り立つ。  
このことを **運動量保存則** という。

これは特定の軸方向に注目しても、外力の成分が \\(0\\) である限り成り立つ。

力積は、問題で与えられていない場合、基本的に計算させることはない。  
頑張って運動量保存則が成り立つ系・軸を探そう。

---

運動エネルギーは \\(K = \frac 12 mv^2\\) で定義されたスカラー量。

仕事は \\(\disp W = \int \v F \cdot \v v ~ dt\\) で定義されるスカラー量。単位は \\(\mathrm{[kg \cdot (m/s)^2] = [N \cdot m] = [J]}\\) である。

端的に言えば、仕事は物体を加速させるパワーを表している。実際、仕事を受けると \\(E\\) は \\(W\\) だけ増加する。