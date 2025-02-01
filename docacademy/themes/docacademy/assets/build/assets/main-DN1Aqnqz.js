const __vite__mapDeps = (i, m=__vite__mapDeps, d=(m.f || (m.f = ["assets/module-BdOCoLMg.js", "assets/pagination-BF8KcmhQ.js", "assets/module-B5fqN0cj.js", "assets/floating-ui.dom-BEMCW68L.js", "assets/module-DeTN1XbM.js", "assets/index-C2DLXBrC.js", "assets/module-C-w7k9B5.js"]))) => i.map(i => d[i]);
const E = (o, e=300, t) => {
    let n;
    return function() {
        const r = this
          , i = arguments
          , c = () => {
            n = null,
            o.apply(r, i)
        }
        ;
        clearTimeout(n),
        n = setTimeout(c, e)
    }
}
  , y = (o, e) => {
    const t = o.cloneNode(!0);
    t.setAttribute("style", "position: absolute !important; top: -12000px !important;"),
    document.body.appendChild(t);
    const n = t.offsetHeight;
    return t.remove(),
    n
}
  , g = () => {
    const o = () => {
        const n = window.innerHeight * .01;
        document.documentElement.style.setProperty("--vh", `${n}px`)
    }
      , e = () => {
        let n = window.innerWidth;
        const s = E(function() {
            const r = window.innerWidth
              , i = r - n;
            window.dispatchEvent(new CustomEvent("optimizedResize",{
                detail: {
                    prevWidth: n,
                    currentWidth: r,
                    difference: i
                }
            })),
            n = r,
            o()
        }, 250);
        window.addEventListener("resize", s)
    }
      , t = () => {
        const n = document.querySelector('[data-selector="header"]');
        if (!n)
            return;
        const s = () => {
            const r = y(n);
            document.documentElement.style.setProperty("--header-height", `${r}px`)
        }
        ;
        window.addEventListener("optimizedResize", s),
        s()
    }
    ;
    o(),
    e(),
    t()
}
  , $ = "modulepreload"
  , v = function(o) {
    return "/themes/docacademy/assets/build/" + o
}
  , f = {}
  , a = function(e, t, n) {
    let s = Promise.resolve();
    if (t && t.length > 0) {
        document.getElementsByTagName("link");
        const r = document.querySelector("meta[property=csp-nonce]")
          , i = (r == null ? void 0 : r.nonce) || (r == null ? void 0 : r.getAttribute("nonce"));
        s = Promise.all(t.map(c => {
            if (c = v(c),
            c in f)
                return;
            f[c] = !0;
            const u = c.endsWith(".css")
              , h = u ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${c}"]${h}`))
                return;
            const l = document.createElement("link");
            if (l.rel = u ? "stylesheet" : $,
            u || (l.as = "script"),
            l.crossOrigin = "",
            l.href = c,
            i && l.setAttribute("nonce", i),
            document.head.appendChild(l),
            u)
                return new Promise( (p, b) => {
                    l.addEventListener("load", p),
                    l.addEventListener("error", () => b(new Error(`Unable to preload CSS for ${c}`)))
                }
                )
        }
        ))
    }
    return s.then( () => e()).catch(r => {
        const i = new Event("vite:preloadError",{
            cancelable: !0
        });
        if (i.payload = r,
        window.dispatchEvent(i),
        !i.defaultPrevented)
            throw r
    }
    )
}
  , w = {
    root: "carousel-cards"
}
  , A = () => {
    document.querySelectorAll(`[data-selector="${w.root}"]:not([data-inited])`).forEach(o => {
        o instanceof HTMLElement && a(async () => {
            const {default: e} = await import("./module-BdOCoLMg.js");
            return {
                default: e
            }
        }
        , __vite__mapDeps([0, 1])).then( ({default: e}) => e(o))
    }
    )
}
  , _ = {
    root: "horizontal-scroller",
    inner: "horizontal-scroller:inner"
}
  , S = () => {
    window.matchMedia("(prefers-reduced-motion: reduce)").matches || document.querySelectorAll(`[data-selector="${_.root}"]:not([data-inited])`).forEach(o => {
        o.setAttribute("data-inited", "true"),
        o.setAttribute("data-animated", "true");
        const e = o.querySelector(`[data-selector="${_.inner}"]`);
        Array.from(e.children).forEach(n => {
            const s = n.cloneNode(!0);
            s.setAttribute("aria-hidden", !0),
            e.appendChild(s)
        }
        )
    }
    )
}
  , q = {
    root: "tabs",
    tab: "tabs:tab",
    navs: "tabs:navs",
    panel: "tabs:panel"
}
  , L = () => {
    ( () => {
        document.querySelectorAll(`[data-selector="${q.root}"]:not([data-inited])`).forEach(e => {
            a(async () => {
                const {default: t} = await import("./module-C44Br39H.js");
                return {
                    default: t
                }
            }
            , []).then( ({default: t}) => t(e))
        }
        )
    }
    )()
}
  , P = {
    root: "header-popup"
}
  , T = () => {
    ( () => {
        document.querySelectorAll(`[data-selector="${P.root}"]:not([data-inited])`).forEach(e => {
            a(async () => {
                const {default: t} = await import("./module-B5fqN0cj.js");
                return {
                    default: t
                }
            }
            , __vite__mapDeps([2, 3])).then( ({default: t}) => t(e))
        }
        )
    }
    )()
}
  , d = {
    root: "search-suggetion",
    form: "search-suggetion:form",
    result: "search-suggetion:result",
    submit: "search-suggetion:submit",
    input: "search-suggetion:input"
}
  , R = () => {
    const o = document.querySelector(`[data-selector="${d.root}"]`)
      , e = o && o.querySelector(`[data-selector="${d.form}"]`)
      , t = o && o.querySelector(`[data-selector="${d.result}"]`)
      , n = o && o.querySelector(`[data-selector="${d.submit}"]`)
      , s = o && o.querySelector(`[data-selector="${d.input}"]`);
    if (!e || !t || !n || !s)
        return;
    function r() {
        s.value.length >= 3 ? n.removeAttribute("disabled") : n.setAttribute("disabled", "disabled")
    }
    e.addEventListener("input", r),
    r()
}
  , I = () => {
    R()
}
  , O = {
    root: "main-menu",
    item: "main-menu:item",
    submenu: "main-menu:submenu"
}
  , D = () => {
    ( () => {
        const e = document.querySelector(`[data-selector="${O.root}"]:not([data-inited])`);
        e && a(async () => {
            const {default: t} = await import("./module-DeTN1XbM.js");
            return {
                default: t
            }
        }
        , __vite__mapDeps([4, 3])).then( ({default: t}) => t(e))
    }
    )()
}
  , V = {
    root: "form-filter"
}
  , C = () => {
    ( () => {
        document.querySelectorAll(`[data-selector="${V.root}"]:not([data-inited])`).forEach(e => {
            a(async () => {
                const {default: t} = await import("./module-BnrpOZSr.js");
                return {
                    default: t
                }
            }
            , []).then( ({default: t}) => t(e))
        }
        )
    }
    )()
}
  , H = {
    root: "expand-list",
    list: "expand-list:list",
    btn: "expand-list:btn"
}
  , x = () => {
    ( () => {
        document.querySelectorAll(`[data-selector="${H.root}"]:not([data-inited])`).forEach(e => {
            a(async () => {
                const {default: t} = await import("./module-C_lYROqW.js");
                return {
                    default: t
                }
            }
            , []).then( ({default: t}) => t(e))
        }
        )
    }
    )()
}
  , z = {
    root: "mobile-menu",
    btn: "mobile-menu:btn",
    overlay: "mobile-menu:overlay"
}
  , k = () => {
    ( () => {
        const e = document.querySelector(`[data-selector="${z.root}"]:not([data-inited])`);
        e && a(async () => {
            const {default: t} = await import("./module-D3xSKloI.js");
            return {
                default: t
            }
        }
        , []).then( ({default: t}) => t(e))
    }
    )()
}
  , F = {
    root: "lesson",
    sidebar: "lesson:sidebar",
    btnSidebarToggle: "lesson:btn-sidebar-toggle"
}
  , W = () => {
    ( () => {
        document.querySelectorAll(`[data-selector="${F.root}"]:not([data-inited])`).forEach(e => {
            a(async () => {
                const {default: t} = await import("./module--N-Vp5Zb.js");
                return {
                    default: t
                }
            }
            , []).then( ({default: t}) => t(e))
        }
        )
    }
    )()
}
  , M = () => {
    document.querySelectorAll('.carousel-section:not([data-inited="true"])').forEach(o => {
        if (!(o instanceof HTMLElement))
            return;
        const e = {
            selectors: {
                root: ".carousel-section",
                carousel: ".carousel-section__carousel",
                wrapper: ".carousel-section__wrapper",
                slide: ".carousel-section__slide",
                pagination: ".carousel-section__pagination"
            }
        };
        a(async () => {
            const {initCarousel: t} = await import("./index-C2DLXBrC.js");
            return {
                initCarousel: t
            }
        }
        , __vite__mapDeps([5, 1])).then( ({initCarousel: t}) => t(o, e))
    }
    )
}
  , U = {
    root: "sidebar"
}
  , B = () => {
    const o = document.querySelector(`[data-selector="${U.root}"]:not([data-inited])`);
    o && a(async () => {
        const {default: e} = await import("./module-rcncvO80.js");
        return {
            default: e
        }
    }
    , []).then( ({default: e}) => e(o))
}
  , N = {
    root: "lesson-form",
    question: "lesson-form:question",
    "question-number": "lesson-form:question-number",
    "btn-prev": "lesson-form:btn-prev",
    "btn-next": "lesson-form:btn-next"
}
  , j = () => {
    ( () => {
        document.querySelectorAll(`[data-selector="${N.root}"]:not([data-inited])`).forEach(e => {
            a(async () => {
                const {default: t} = await import("./module-5Osyno4N.js");
                return {
                    default: t
                }
            }
            , []).then( ({default: t}) => t(e))
        }
        )
    }
    )()
}
  , m = {
    root: "date-range",
    from: "date-range:from",
    to: "date-range:to",
    container: "date-range:container",
    label: "date-range:label",
    toggle: "date-range:toggle"
}
  , G = async () => {
    if (!document.querySelector(`[data-selector="${m.root}"`))
        return;
    const {default: e} = await a(async () => {
        const {default: t} = await import("./module-C-w7k9B5.js");
        return {
            default: t
        }
    }
    , __vite__mapDeps([6, 3]));
    document.addEventListener("click", t => {
        const n = t.target
          , s = n.closest(`[data-selector="${m.root}"]:not([data-inited="true"])`);
        n.dataset.selector !== m.toggle || !s || e.init(s)
    }
    )
}
  , J = {
    root: "header-bar",
    btn: "header-bar:btn"
}
  , K = () => {
    ( () => {
        document.querySelectorAll(`[data-selector="${J.root}"]:not([data-inited])`).forEach(e => {
            a(async () => {
                const {default: t} = await import("./module-dxQ8Ior6.js");
                return {
                    default: t
                }
            }
            , []).then( ({default: t}) => t(e))
        }
        )
    }
    )()
}
  , Q = {
    root: "lesson-content"
}
  , X = () => {
    ( () => {
        document.querySelectorAll(`[data-selector="${Q.root}"]:not([data-inited])`).forEach(e => {
            a(async () => {
                const {default: t} = await import("./module-C9ezaqEK.js");
                return {
                    default: t
                }
            }
            , []).then( ({default: t}) => t(e))
        }
        )
    }
    )()
}
;
setTimeout( () => {
    g(),
    A(),
    S(),
    L(),
    T(),
    I(),
    D(),
    C(),
    x(),
    k(),
    W(),
    M(),
    B(),
    j(),
    G(),
    K(),
    X()
}
, 0);
export {O as a, H as b, z as c, F as d, N as e, J as f, m as g, q as s};
