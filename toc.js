// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="index.html">readme</a></li><li class="chapter-item expanded affix "><li class="part-title">数学</li><li class="chapter-item expanded "><a href="math/index.html"><strong aria-hidden="true">1.</strong> 初めに</a></li><li class="chapter-item expanded "><a href="math/techniques/index.html"><strong aria-hidden="true">2.</strong> テクニック集</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="math/techniques/jensens-inequality.html"><strong aria-hidden="true">2.1.</strong> 凸不等式系</a></li><li class="chapter-item expanded "><a href="math/techniques/lagrange-multiplier.html"><strong aria-hidden="true">2.2.</strong> ラグランジュの未定乗数法</a></li><li class="chapter-item expanded "><a href="math/techniques/mean-value-theorem.html"><strong aria-hidden="true">2.3.</strong> 平均値の定理</a></li></ol></li><li class="chapter-item expanded "><a href="math/calculus/index.html"><strong aria-hidden="true">3.</strong> 微積分</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="math/calculus/famous_substitution.html"><strong aria-hidden="true">3.1.</strong> 有名置換</a></li><li class="chapter-item expanded "><a href="math/calculus/famous_integral.html"><strong aria-hidden="true">3.2.</strong> 有名な積分</a></li><li class="chapter-item expanded "><a href="math/calculus/integral_equation.html"><strong aria-hidden="true">3.3.</strong> 積分方程式</a></li><li class="chapter-item expanded "><a href="math/calculus/geometrical-usage.html"><strong aria-hidden="true">3.4.</strong> 面積・体積・曲線長</a></li></ol></li><li class="chapter-item expanded "><a href="math/probability/index.html"><strong aria-hidden="true">4.</strong> 組み合わせ・確率</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="math/probability/use_of_power_series.html"><strong aria-hidden="true">4.1.</strong> 冪級数の利用</a></li></ol></li><li class="chapter-item expanded "><a href="math/complex/index.html"><strong aria-hidden="true">5.</strong> 複素数</a></li><li class="chapter-item expanded "><a href="math/statistics/index.html"><strong aria-hidden="true">6.</strong> 統計</a></li><li class="chapter-item expanded "><a href="math/hyperbolic_function.html"><strong aria-hidden="true">7.</strong> 双曲線関数</a></li><li class="chapter-item expanded "><a href="math/singles.html"><strong aria-hidden="true">8.</strong> 単発記事集</a></li><li class="chapter-item expanded "><a href="math/mistakes.html"><strong aria-hidden="true">9.</strong> 凡ミス供養所</a></li><li class="chapter-item expanded affix "><li class="part-title">物理</li><li class="chapter-item expanded "><a href="physics/index.html"><strong aria-hidden="true">10.</strong> 初めに</a></li><li class="chapter-item expanded "><a href="physics/mechanics/index.html"><strong aria-hidden="true">11.</strong> 力学</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="physics/mechanics/circular-motion.html"><strong aria-hidden="true">11.1.</strong> 円運動・単振動</a></li></ol></li><li class="chapter-item expanded "><a href="physics/electromagnetism/index.html"><strong aria-hidden="true">12.</strong> 電磁気</a></li><li class="chapter-item expanded "><a href="physics/thermodynamics/index.html"><strong aria-hidden="true">13.</strong> 熱力学</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="physics/thermodynamics/poissons_law.html"><strong aria-hidden="true">13.1.</strong> ポアソンの法則の導出</a></li></ol></li><li class="chapter-item expanded "><li class="part-title">化学</li><li class="chapter-item expanded "><a href="chemistry/theoretical/index.html"><strong aria-hidden="true">14.</strong> 理論</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="chemistry/theoretical/reaction_rate_etc.html"><strong aria-hidden="true">14.1.</strong> 反応速度・電離度・平衡定数</a></li><li class="chapter-item expanded "><a href="chemistry/theoretical/redox-reaction.html"><strong aria-hidden="true">14.2.</strong> 酸化還元反応</a></li><li class="chapter-item expanded "><a href="chemistry/theoretical/electrolysis-and-battery.html"><strong aria-hidden="true">14.3.</strong> 電気分解・電池</a></li></ol></li><li class="chapter-item expanded "><a href="chemistry/inorganic/index.html"><strong aria-hidden="true">15.</strong> 無機</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="chemistry/inorganic/metal_ions.html"><strong aria-hidden="true">15.1.</strong> 金属イオン</a></li><li class="chapter-item expanded "><a href="chemistry/inorganic/non_metal.html"><strong aria-hidden="true">15.2.</strong> 非金属</a></li><li class="chapter-item expanded "><a href="chemistry/inorganic/oxide.html"><strong aria-hidden="true">15.3.</strong> 酸化物・オキソ酸</a></li><li class="chapter-item expanded "><a href="chemistry/inorganic/note.html"><strong aria-hidden="true">15.4.</strong> 書き溜まり</a></li></ol></li><li class="chapter-item expanded "><a href="chemistry/organic/index.html"><strong aria-hidden="true">16.</strong> 有機</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="chemistry/organic/sugar.html"><strong aria-hidden="true">16.1.</strong> 糖類</a></li></ol></li><li class="chapter-item expanded "><li class="part-title">英語</li><li class="chapter-item expanded "><a href="english/notes/index.html"><strong aria-hidden="true">17.</strong> 授業ノート</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="english/notes/lecture_1.html"><strong aria-hidden="true">17.1.</strong> 特講 - 短文和訳</a></li></ol></li><li class="chapter-item expanded "><li class="part-title">自分用</li><li class="chapter-item expanded "><a href="memo.html"><strong aria-hidden="true">18.</strong> メモ</a></li><li class="chapter-item expanded "><a href="unpagenized.html"><strong aria-hidden="true">19.</strong> 記事ネタ</a></li><li class="chapter-item expanded affix "><li class="part-title">東京科学大対策</li><li class="chapter-item expanded "><a href="isct/chemistry/index.html"><strong aria-hidden="true">20.</strong> 化学</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="isct/chemistry/2016.html"><strong aria-hidden="true">20.1.</strong> 2016</a></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString();
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
