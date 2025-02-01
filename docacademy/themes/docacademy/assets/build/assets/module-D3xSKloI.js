import {c as o} from "./main-DN1Aqnqz.js";
const f = t => {
    const a = document.querySelectorAll(`[data-selector="${o.btn}"]`)
      , r = document.querySelector(`[data-selector="${o.overlay}"]`);
    function n() {
        t.setAttribute("data-show", !0),
        a.forEach(e => {
            e.setAttribute("aria-expanded", "true"),
            e.setAttribute("aria-label", e.dataset.closeLabel)
        }
        ),
        window.addEventListener("optimizedResize", i)
    }
    function s() {
        t.setAttribute("data-show", "false"),
        a.forEach(e => {
            e.setAttribute("aria-expanded", "false"),
            e.setAttribute("aria-label", e.dataset.openLabel)
        }
        ),
        window.removeEventListener("optimizedResize", i)
    }
    function i() {
        s()
    }
    const d = () => {
        t.getAttribute("data-show") === "true" ? s() : n()
    }
    ;
    a.forEach(e => {
        e.addEventListener("click", d)
    }
    ),
    r && r.addEventListener("click", s),
    t.querySelectorAll("[data-open]").forEach(e => {
        e.addEventListener("click", c => {
            c.preventDefault();
            const u = e.getAttribute("data-open") === "true";
            e.setAttribute("data-open", !u)
        }
        )
    }
    )
}
;
export {f as default};
