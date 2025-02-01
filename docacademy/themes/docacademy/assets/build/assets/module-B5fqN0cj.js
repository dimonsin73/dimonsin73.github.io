import {c, s as u} from "./floating-ui.dom-BEMCW68L.js";
const m = n => {
    n.dataset.inited = !0;
    const t = document.getElementById(n.dataset.menu);
    if (!t)
        return;
    function d(e) {
        e.key === "Escape" && i()
    }
    function s({target: e}) {
        t.contains(e) || e === n || i()
    }
    function o() {
        window.addEventListener("click", s),
        window.addEventListener("keydown", d),
        r(),
        t.classList.remove("hidden"),
        n.setAttribute("aria-expanded", "true")
    }
    function i() {
        window.removeEventListener("click", s),
        window.removeEventListener("keydown", d),
        t.classList.add("hidden"),
        n.setAttribute("aria-expanded", "false")
    }
    function a(e) {
        return e.preventDefault(),
        t.classList.contains("hidden") ? o() : i(),
        !1
    }
    function r() {
        c(n, t, {
            placement: "bottom-start",
            middleware: [u({
                padding: 5
            })]
        }).then( ({x: e, y: l}) => {
            Object.assign(t.style, {
                left: `${e}px`
            })
        }
        )
    }
    document.body.insertAdjacentElement("beforeend", t),
    window.addEventListener("optimizedResize", ({detail: e}) => {
        Math.abs(e.difference) < 10 || i()
    }
    ),
    n.addEventListener("click", a)
}
;
export {m as default};
