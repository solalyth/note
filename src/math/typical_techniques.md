# 典型一覧

\\(
    \newcommand{\disp}{\displaystyle}
    \newcommand{\v}[1]{\boldsymbol #1}
    \newcommand{\Arrowlr}{\Longleftrightarrow}
    \let\frac=\dfrac
\\)

## 2直線のなす角

2直線 \\(y = a_1x + b_1, ~ y = a_2 x + b_2\\) に対して、(たいてい有名角である) なす角 \\(\theta\\) について条件が与えられることがある。

\\(\theta = 90^\circ\\) であるときは直行条件 \\(a_1a_2 = -1\\) を使うとよい。

そうでないとき、

1. 傾きを \\(\tan\\) と置いて加法定理
2. ベクトルの内積から \\(\cos\theta\\)

を用いて式にする。

(1.) では \\(a_1 = \tan \alpha,~ a_2 = \tan \beta\\) と表したときに、なす角は適切に符号を付けて \\(\theta = \alpha - \beta\\) のように表せることを用いる。このとき \\(\tan\theta = \tan(\alpha - \beta) = \frac{\tan\alpha - \tan\beta}{1 + \tan\alpha\tan\beta} = \frac{a_1-a_2}{1+a_1a_2}\\) と表せるから、

// TODO: 複素数と回転でいける？


## 不等式系

```admonish note title="凸不等式 (Jensen's inequality)"
区間 \\(I\\) 上で狭義凸な関数 \\(f\\) と重み \\(\disp (w_n) ~ \text{s.t.} ~ \sum w_i = 1\\) について、

\\[ ^\forall (a_n) \in I^n ~ \bigg[ ~ f \left( \sum w_i a_i \right) \leq \sum w_i f(a_i) ~ \bigg] \\]

が成立する。等号成立は \\(a_i = \text{const.}\\) を満たすときに限る。

特に、\\(w_n = 1/n\\) としたとき \\(\disp \frac{\sum f(a_i)}{n} \leq f \left( \frac{\sum a_i}{n} \right)\\) となる。
```

```admonish note title="重み付き相加相乗平均"
非負実数 \\((a_n)\\) と重み \\(\disp (w_n) ~ \text{s.t.} ~ \sum w_i = 1\\) について、

\\[ ^\forall (a_n) \in {R^+}^n ~ \bigg[ \prod {a_i}^{w_i} \leq \sum w_i a_i \bigg] \\]

が成立する。

(証明) 狭義凹関数 \\(\disp f(x) = \log x\\) について凸不等式を適用して整理すると得られる。
```

```admonish note title="コーシーシュワルツの不等式"
\\[\\]
```
