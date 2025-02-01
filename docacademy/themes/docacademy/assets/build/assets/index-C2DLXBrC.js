import {P as O, S} from "./pagination-BF8KcmhQ.js";
var y = {}
  , h = {};
(function(n) {
    Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    Object.defineProperty(n, "default", {
        enumerable: !0,
        get: function() {
            return e
        }
    });
    function t(o, r) {
        return {
            handler: o,
            config: r
        }
    }
    t.withOptions = function(o, r= () => ({})) {
        const s = function(u) {
            return {
                __options: u,
                handler: o(u),
                config: r(u)
            }
        };
        return s.__isOptionsFunction = !0,
        s.__pluginFunction = o,
        s.__configFunction = r,
        s
    }
    ;
    const e = t
}
)(h);
(function(n) {
    Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    Object.defineProperty(n, "default", {
        enumerable: !0,
        get: function() {
            return o
        }
    });
    const t = e(h);
    function e(r) {
        return r && r.__esModule ? r : {
            default: r
        }
    }
    const o = t.default
}
)(y);
let g = y;
(g.__esModule ? g : {
    default: g
}).default;
const d = (n, t) => getComputedStyle(n).getPropertyValue(t);
function I(n, t) {
    let e = n % t;
    return e > 0 ? n + (t - e) : n
}
function w(n, t) {
    const e = parseInt(d(n, "--carousel-slides-gap-def"))
      , o = n.querySelector(t.selectors.slide)
      , r = parseInt(d(n, "padding-left"))
      , s = parseInt(d(n, "margin-left"));
    let u = I(parseInt(d(o, "width")), 60);
    return {
        slidesGap: e,
        width: u,
        paddingLeft: r,
        marginLeft: s
    }
}
function R(n, t) {
    const e = {
        carousel: null,
        pagination: null
    };
    if (e.carousel = n.querySelector(t.carousel),
    !e.carousel)
        throw new Error(`Элемент карусели "${t.carousel}" не найден`);
    if (!e.carousel.querySelector(t.wrapper))
        throw new Error(`Элемент обертки карусели "${t.wrapper}" не найден`);
    if (e.carousel.querySelectorAll(t.slide).length === 0)
        throw new Error(`Слайды карусели "${t.slide}" не найдены`);
    return e.pagination = n.querySelector(t.pagination),
    e
}
function b(n, t) {
    let e = null;
    return function(...o) {
        const r = this;
        clearTimeout(e),
        e = setTimeout( () => n.apply(r, o), t)
    }
}
function k(n, t) {
    const e = Object.keys(n)
      , o = Object.keys(t);
    if (e.length !== o.length)
        return !1;
    for (let r of e)
        if (n[r] !== t[r])
            return !1;
    return !0
}
const L = ({current: n, total: t}) => {
    let e = "";
    for (let o = 1; o < t + 1; o++) {
        const r = o == n ? "current" : "";
        e += `<li class=" ${r}"></li>`
    }
    return e
}
  , D = {
    root: ".carousel-section",
    carousel: ".carousel-section__carousel",
    wrapper: ".carousel-section__wrapper",
    slide: ".carousel-section__slide",
    pagination: ".carousel-section__pagination"
}
  , m = {
    selectors: D,
    customPaginationRender: L,
    additionalSwiperOptions: {}
}
  , v = "carousel-section__slide"
  , E = "carousel-section__wrapper";
function p(n, t) {
    return {
        ...n,
        ...t
    }
}
function q(n, t, e) {
    const o = {
        slidesPerView: "auto",
        spaceBetween: t.slidesGap,
        grabCursor: !0,
        slideClass: v,
        wrapperClass: E,
        pagination: {},
        modules: [O],
        ...e.additionalSwiperOptions
    };
    return n.pagination !== null && e.customPaginationRender !== void 0 && (o.pagination = {
        el: n.pagination,
        type: "custom",
        clickable: !0,
        renderCustom: (r, s, u) => u === 1 ? "" : e.customPaginationRender({
            current: s,
            total: u
        })
    }),
    new S(n.carousel,o)
}
const M = (n, t={}) => {
    n.dataset.carouselInited = "true";
    let e = {
        config: {
            ...m,
            ...t
        },
        carouselInstance: null,
        cachedDom: {
            carousel: null,
            pagination: null
        },
        cssOptions: {
            slidesGap: 0,
            width: 0,
            paddingLeft: 0,
            marginLeft: 0
        }
    };
    function o() {
        const i = R(n, e.config.selectors)
          , a = w(i.carousel, e.config);
        e = p(e, {
            cachedDom: i,
            cssOptions: a
        })
    }
    function r() {
        var i, a, c, l;
        (a = (i = e.config.hooks) == null ? void 0 : i.beforeDestroy) == null || a.call(i),
        e.carouselInstance !== null && e.carouselInstance.destroy(),
        (l = (c = e.config.hooks) == null ? void 0 : c.afterDestroy) == null || l.call(c)
    }
    function s() {
        var i, a, c, l;
        try {
            (a = (i = e.config.hooks) == null ? void 0 : i.beforeInit) == null || a.call(i),
            r(),
            e.carouselInstance = q(e.cachedDom, e.cssOptions, e.config),
            (l = (c = e.config.hooks) == null ? void 0 : c.afterInit) == null || l.call(c)
        } catch (f) {
            console.error("Ошибка при инициализации карусели:", f),
            f instanceof Error && console.error("Детали ошибки:", f.message)
        }
    }
    function u() {
        const i = w(e.cachedDom.carousel, e.config);
        k(i, e.cssOptions) || (e = p(e, {
            cssOptions: i
        }),
        s())
    }
    function P(i) {
        e = p(e, {
            config: {
                ...e.config,
                customPaginationRender: i || m.customPaginationRender
            }
        }),
        s()
    }
    function C() {
        var i, a, c;
        (c = (a = (i = e.carouselInstance) == null ? void 0 : i.pagination) == null ? void 0 : a.destroy) == null || c.call(a),
        e.cachedDom.pagination && (e.cachedDom.pagination.innerHTML = ""),
        e = p(e, {
            config: {
                ...e.config,
                customPaginationRender: void 0
            }
        }),
        s()
    }
    o(),
    s();
    const _ = b(u, 250);
    return window.addEventListener("resize", _),
    {
        destroy: () => {
            window.removeEventListener("resize", _),
            r()
        }
        ,
        updatePaginationRender: P,
        destroyPagination: C,
        getCarouselInstance: () => e.carouselInstance
    }
}
;
export {M as initCarousel, D as selectors};
