## べき級数の利用

東工大の 2024 年の大問 4 に触発された。

### 導入

独立な試行と冪級数は相性が良い。

例えば、普通のコインを投げたときの表が出る回数 \\(k\\) に対して、そうなる確率が \\(x^k\\) の係数となるように考えてみる。全事象から、係数の和は必ず \\(1\\) となる。

\\(1\\) 回投げることは \\(\dfrac 12 x^0 + \dfrac 12 x^1 \\) と表せる。 では \\(2\\) 回投げるときはどうだろうか？

計算してみると \\( \dfrac 14 x^0 + \dfrac 12 x^1 + \dfrac 14 x^2 = \left( \dfrac 12 x^0 + \dfrac 12 x^1 \right)^2 \\) となることが分かる。

このようにべき乗で表すことができるのは、べき級数の項どうしの積が、表が出る回数の和を取ることと対応しているからである。

### 導入2

\\(\Big\\{\\) \\(1\\) マス左に動く, 留まる, \\(1\\) マス右に動く \\(\Big\\}\\) を等確率で選ぶロボットの位置 \\(k\\) に対して、そうなる確率が \\(x^k\\) の係数となるように考えてみる。

\\(1\\) 回の試行は \\(\dfrac 13 x^{-1} + \dfrac 13 x^0 + \dfrac 13 x^1 \\) と表せるから、\\(n\\) 回の試行は \\( \left( \dfrac 13 x^{-1} + \dfrac 13 x^0 + \dfrac 13 x^1 \right)^n \\) と対応する。

ここで、次のような問題を考えてみよう。

> \\(n\\) 回試行した後、ロボットの位置が偶数マス目である確率を求めよ。

\\( f(x) = \left( \dfrac 13 x^{-1} + \dfrac 13 x^0 + \dfrac 13 x^1 \right)^n \\) と置く。

ここで、\\( \displaystyle f(x) = \sum p_k x^k \\) と表されているとき、\\(x = -1\\) を代入することを考えてみよう。

\\( (-1)^k = \left\\{ \begin{array}{l} 1 &(\text{if} ~~ 2 \mid k) \\\\ -1 &(\text{if} ~~ 2 \nmid k) \end{array} \right. \\) であるから、\\( \displaystyle f(-1) = \sum_{2 \mid k} p_k + \sum_{2 \nmid k} -p_k \\) と分かる。

同様に \\(x = 1\\) を考えると \\( \displaystyle f(1) = \sum_{2 \mid k} p_k + \sum_{2 \nmid k} p_k \\) が分かる。

求めたい確率は \\( \displaystyle \sum_{2 \mid k} p_k \\) であるから、これは \\( \dfrac{f(-1) + f(1)}{2} \\) と等しい。

ところで、私たちは \\(f(x)\\) が具体的に何なのかを既に知っている。代入することで \\( \displaystyle f(-1) = - 1 / 3^n, ~ f(1) = 1 \\) が得られる。

以上より、求める確率は \\( \displaystyle \frac{f(-1) + f(1)}{2} = \frac{1 - 1/3^n}{2} \\) である。

<br>

これは確率漸化式でも解くことができる。しかし、ロボットの位置が \\(3\\) の倍数のマス目である確率だったらどうだろうか？

確率漸化式を使うには \\(3\\) つの確率列を用いる必要がある。しかし、べき級数なら \\( \dfrac{f(\omega) + f(\omega^{-1})}{2} \\) で一発である。

（とはいえ、操作が独立でないときは確率漸化式が必要になる。あくまで、ある条件を満たすときの、一つの方法である。）

<br>

他にも、こんな問題を考えてみよう。この答えは明らかに \\(0\\) であるが、興味深い方法なので紹介する。

> \\(n\\) 回試行した後の、ロボットの位置の期待値を求めよ。

期待値とは \\(\displaystyle \sum kp_k \\) の値である。

ここで、\\(\displaystyle f(x) = \sum p_kx^k \\) を微分すると \\( \displaystyle f'(x) = \sum kp_kx^{k-1} \\) となるから、求める値は \\( f'(1) \\) と等しい。( \\(k=0\\) のときが不安になるが、係数の \\(k\\) で消えるため問題ない。)

これを具体的表現から計算すると、

\\[
    \begin{eqnarray}
        f'(1) &=& \frac d{dx} ~ \left( \frac 13 x^{-1} + \frac 13 x^0 + \frac 13 x^1 \right)^n \Bigg|\_{x=1} \\\\
        &=& \frac{1}{3^n} n (-x^{-2} + 1) (x^{-1} + 1 + x)^{n-1} \Bigg|\_{x=1} \\\\
        &=& 0
    \end{eqnarray}
\\]

と分かる。

---

べき級数は [3b1b さんの動画](https://www.youtube.com/watch?v=bOXCLR3Wric) でも紹介されている。面白いので見よう。



### 例題1

> \\(n\\) 枚の硬貨を投げる。\\(k\\) 枚目の硬貨を投げて表が出る確率は \\(p_k\\) である。それぞれ表が出た枚数が奇数である確率をを求めよ。
>
> (1) \\( p_k = 1/3 \\)
> 
> (2) \\( p_k = \dfrac{1}{2(k+1)} \\)
>
> (3) \\( n = 3m, ~ p_k = \left\\{ \begin{array}{l} \dfrac{1}{3m} &(\text{if} ~~ 0 < k \leq m) \\\\ \dfrac{2}{3m} &(\text{if} ~~ m < k \leq 2m) \\\\ \dfrac{1}{m} &(\text{if} ~~ 2m < k \leq 3m) \end{array} \right. \\) として \\( m \to \infty \\) での確率
>
> 東京工業大学 2024 年

表が \\(k\\) 枚出る確率を \\(x^k\\) の係数と対応させたべき級数 \\(f(x)\\) を考える。このとき、求める確率は \\(\dfrac{f(1) - f(-1)}{2}\\) と等しい。

(1) 対応したべき級数は \\( f_1(x) = \left(\dfrac 13 x + \dfrac 23\right)^n \\) である。

よって、求める確率は \\( \dfrac{f_1(1) - f_1(-1)}{2} = \dfrac{1 - (-1/3)^n}{2} \\)

(2) 対応したべき級数は \\( \displaystyle f_2(x) = \prod_{k=1}^n \left( \frac{1}{2(k+1)} x + \frac{2k+1}{2(k+1)} \right) \\) である。

よって、求める確率は \\( \displaystyle \frac{f_2(1) - f_2(-1)}{2} = \frac 12 \left( 1 - \frac{1}{n+1} \right) = \frac{n}{2(n+1)} \\)

(3) 対応したべき級数は

\\[
    f_3(x) = \left( \frac{1}{3m} x + \frac{3m-1}{3m} \right)^m \left( \frac{2}{3m} x + \frac{3m-2}{3m} \right)^m \left( \frac{1}{m} x + \frac{m-1}{m} \right)^m
\\]

である。また、明らかに \\( f_3(1) = 1 \\) である。

\\[
    \begin{eqnarray}
        \lim_{m \to \infty} f_3(-1) &=& \lim_{m \to \infty} \left( \frac{3m-2}{3m} \right)^m \left( \frac{3m-4}{3m} \right)^m \left( \frac{m-2}{m} \right)^m \\\\
            &=& \lim_{m \to \infty} \left( 1-\frac{2}{3m} \right)^m \left( 1-\frac{4}{3m} \right)^m \left( 1-\frac{2}{m} \right)^m \\\\
            &=& e^{-2/3} \cdot e^{-4/3} \cdot e^{-2} \\\\
            &=& e^{-4}
    \end{eqnarray}
\\]

より、求める確率は \\( \displaystyle \lim_{m \to \infty} \frac{f(1) - f(-1)}{2} = \frac{1 - e^{-4}}{2} \\)
