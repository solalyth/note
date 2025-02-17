\\(
    \newcommand{\bar}[1]{\overline{#1}}
    \DeclareMathOperator{\cis}{cis}
\\)

# 複素数

## 覚えるもの

複素数は極座標表示・複素共役系・成分表示の三通りの表し方がある。どちらのほうが解きやすくなるか常に考えよう。

極座標表示は、原点などのある一点中心で問題が展開されている場合や、絶対値・偏角が登場した場合にはまず考えたい。角度・原点からの距離・複素共役・累乗とは相性がよいが、一般の足し引きとは相性が悪いことも。「実は有名三角形になっていた」なこともあるため、なんとなくでも図を描こう。有向角度の向きや \\(2\pi\\) の差にも注意。

複素共役系は \\(z, \bar{z}\\) を中心に式変形でなんとかする方法。\\(z, \bar{z}, z\bar{z}\\) だけの式や幾何的な条件には強いが、一般の累乗とは相性が悪い。\\(\pm 1\\) の \\(n\\) 乗根は定番。図示系の答えはだいたい直線 or 円 がちなので、気合いで帰着させることも多い。

成分表示は、万能ではあるが、他の表し方の良さをほぼ全て潰してしまう欠点がある。次数が大きくなってしんどいがち。本当に困ったときに使うイメージかも。

## 円の複素数表示

円の方程式は、中心 \\(\alpha\\), 半径 \\(r\\) とすると、複素共役を用いて

\\[
    |z-\alpha| = r \\\\[8px]
    \Longleftrightarrow \quad (z-\alpha)(\bar{z} - \bar{\alpha}) = r^2 \\\\[8px]
    \Longleftrightarrow \quad z\bar{z} - \bar{\alpha}z - \alpha\bar{z} + |\alpha|^2 - r^2 = 0
\\]

で表せる。

「解はどのような図形になるか？」の答えはたいてい円。\\(z\bar{z}\\) が登場して \\(z, \bar{z}\\) の係数が似ている式が現れたら、円と気付き逆向きに変形しよう。


## 円の複素数表示2

円の方程式は、直径の両端を \\(\alpha, \beta\\) とすると、

\\[
    (z-\alpha)(z-\beta) \in i\mathbb{R} \Longleftrightarrow \mathrm{Re} ~ (z-\alpha)(z-\beta) = 0
\\]

と表せる。

二定点となす角が直角ならば、それを直径とする円上に存在することから成り立つ。


## 円の複素数表示3

原点を通る円の方程式は、中心 \\(r_0 \cis \theta_0\\) とすると、極座標を用いて

\\[
    r = 2r_0 \cos(\theta_0 - \theta)
\\]

と表せる。ただし、極座標の定義上、原点は除かれている。

直径と動径の直角三角形が見えたら cos の式を立てるだけ。
