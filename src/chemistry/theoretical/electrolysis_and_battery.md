\\(\newcommand{\up}{\hspace{-3pt}\uparrow}\\)

## 電気分解

電気分解で電池の正極と繋ぐ方を **陽極** といい、電池の負極と繋ぐ方を **陰極** という。  
電池の負極から電子が流れることを考えれば、陽極は電子を放出して酸化、陰極は電子を受け取って還元することが分かる。

### 反応する物質の判別

電気分解の陽極・陰極での反応について考えよう。「最も酸化還元されやすいものが反応する」を原理に比較していく。

陽極では電子を放出して酸化が起こる。酸化されやすさから順に

+ \\(\mathrm{H^+}\\) よりイオンになりやすい金属電極がイオンになり溶ける。
+ ハロゲンイオンが酸化し、ハロゲン単体が発生する。
+ 水酸化物イオンが酸化し、酸素と水素イオンが発生する。

である。

陰極では電子を受け取って還元が起こる。還元されやすさから順に

+ \\(\mathrm{H^+}\\) よりイオンになりにくい金属イオンが還元し析出する。
+ 水素イオンが還元し、水素が発生する。

である。

### 流れた電気量との関係

電子 \\(\mathrm{e^-}\\) の \\(1 ~ \mathrm{mol}\\) あたりの電気量の**絶対値**を **ファラデー定数** \\(F ~ \mathrm{[C/mol]}\\) と定義する。  
これを用いると、電流 \\(I ~ \mathrm{[A = C/s]}\\) を \\(t ~ \mathrm[s]\\) 秒間流したときの流れた電子の量は \\(It/F ~ \mathrm{[mol]}\\) と表せる。

例えば、水の電気分解 \\(\mathrm{2H_2O \to 2H_2 \up + O_2 \up}\\) では、反応式が \\(1 ~ \mathrm{mol}\\) だけ進むのに電子が \\(4 ~ \mathrm{mol}\\) 流れる。したがって、反応式は \\(It/4F ~ \mathrm{[mol]}\\) 進むことが分かる。


## 電池

電気分解では、電気を流すことで、自発的に起こらない反応を起こすことができた。一方電池では、イオン化傾向差などを利用した自発的反応に伴い、正極から負極へと電気が流れる構造になっている。

充電できない電池を **一次電池** 、充電できる電池を **二次電池** と呼ぶ。

### ボルタ電池

一次電池であり、(-) \\(\mathrm{Zn \~|\~ H_2SO_4 \\, aq \~|\~ Cu}\\) (+) という構造をしている。  
全体の反応式は \\( \mathrm{Zn + H_2SO_4 \to ZnSO_4 + H_2 \up} \\) である。特に、溶液の液性は弱くなっていく。

正極で発生する水素が極板を覆うことにより、すぐに反応が遅くなって電流が弱くなる。このことを **分極** という。

### ダニエル電池

一次電池であり、(-) \\(\mathrm{Zn \~|\~ ZnSO_4 \\, aq \~|\~ CuSO_4 \\, aq \~|\~ Cu}\\) (+) という構造をしている。  
全体の反応式は \\(\mathrm{Zn + CuSO_4 \to ZnSO_4 + Cu}\\) である。

分極を防ぐためにボルタ電池を改良したもの。起電力はボルタ電池と同じ。水素の代わりに液中の銅イオンが極板に析出することで、分極を防ぐ。

溶液同士は半透膜 (しばしば素焼き板) で仕切られている。溶液が混ざらないようにしつつ、電荷の偏りを解消するためである。(todo: 理解)

### 鉛蓄電池

二次電池であり、(-) \\(\mathrm{Pb \~|\~ H_2SO_4 \\, aq \~|\~ PbO_2}\\) (+) という構造をしている。  
全体の反応式は \\(\mathrm{Pb + PbO_2 + 2H_2SO_4 \rightleftharpoons 2PbSO_4 + 2H_2O}\\) である。

酸化鉛中の \\(Pb^{4+}\\) イオンの不安定さにより電流が流れる。放電すると、それぞれ電極が溶けると同時に硫酸鉛が電極に析出する。
