import {c as v, s as k} from "./floating-ui.dom-BEMCW68L.js";
import {a as m} from "./main-DN1Aqnqz.js";
function y(a, o) {
    v(a, o, {
        placement: "bottom-start",
        middleware: [k({
            padding: 5
        })]
    }).then( ({x: i, y: n}) => {
        Object.assign(o.style, {
            left: `${i}px`
        })
    }
    )
}
function E(a, o) {
    a.classList.toggle("hidden", !o),
    a.classList.toggle("flex", o),
    a.setAttribute("aria-hidden", !o)
}
function A(a) {
    return `${a}-${Math.random().toString(36).substr(2, 9)}`
}
const x = a => {
    const o = a.querySelectorAll(`[data-selector="${m.item}"]`)
      , i = document.querySelectorAll(`[data-selector="${m.submenu}"]`);
    i.forEach(n => {
        document.body.insertAdjacentElement("beforeend", n)
    }
    ),
    o.forEach( (n, d) => {
        const s = n.querySelector("a")
          , t = i[d];
        if (!t)
            return;
        const b = A("menu-link");
        s.id = b,
        t.setAttribute("aria-labelledby", b),
        s.setAttribute("aria-expanded", "false"),
        s.setAttribute("aria-haspopup", "true"),
        t.setAttribute("role", "menu");
        function r() {
            E(t, !0),
            y(n, t),
            s.setAttribute("aria-expanded", "true")
        }
        function l() {
            E(t, !1),
            s.setAttribute("aria-expanded", "false")
        }
        function p() {
            const e = t.querySelector('a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])');
            e && e.focus()
        }
        n.addEventListener("mouseenter", r),
        n.addEventListener("mouseleave", l),
        t.addEventListener("mouseenter", r),
        t.addEventListener("mouseleave", l),
        s.addEventListener("focus", r),
        s.addEventListener("blur", e => {
            setTimeout( () => {
                t.contains(document.activeElement) || l()
            }
            , 0)
        }
        ),
        s.addEventListener("keydown", e => {
            e.key === "Escape" ? (l(),
            s.focus()) : (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") && (e.preventDefault(),
            r(),
            p())
        }
        ),
        t.addEventListener("keydown", e => {
            const f = t.querySelectorAll('a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])')
              , u = f[0]
              , c = f[f.length - 1];
            e.key === "Escape" ? (l(),
            s.focus()) : e.key === "Tab" ? e.shiftKey && document.activeElement === u ? (e.preventDefault(),
            c.focus()) : !e.shiftKey && document.activeElement === c && (e.preventDefault(),
            u.focus()) : e.key === "ArrowUp" && document.activeElement === u ? (e.preventDefault(),
            c.focus()) : e.key === "ArrowDown" && document.activeElement === c && (e.preventDefault(),
            u.focus())
        }
        )
    }
    ),
    window.addEventListener("resize", () => {
        i.forEach(n => {
            if (!n.classList.contains("hidden")) {
                const d = n.getAttribute("aria-labelledby")
                  , t = document.getElementById(d).closest(`[data-selector="${m.item}"]`);
                y(t, n)
            }
        }
        )
    }
    )
}
;
export {x as default};
