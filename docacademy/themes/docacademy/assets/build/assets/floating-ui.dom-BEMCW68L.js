const $ = Math.min
  , S = Math.max
  , V = Math.round
  , O = t => ({
    x: t,
    y: t
});
function q(t, e, o) {
    return S(t, $(e, o))
}
function U(t, e) {
    return typeof t == "function" ? t(e) : t
}
function X(t) {
    return t.split("-")[0]
}
function lt(t) {
    return t.split("-")[1]
}
function Z(t) {
    return t === "x" ? "y" : "x"
}
function ft(t) {
    return t === "y" ? "height" : "width"
}
function Y(t) {
    return ["top", "bottom"].includes(X(t)) ? "y" : "x"
}
function ut(t) {
    return Z(Y(t))
}
function at(t) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...t
    }
}
function dt(t) {
    return typeof t != "number" ? at(t) : {
        top: t,
        right: t,
        bottom: t,
        left: t
    }
}
function F(t) {
    const {x: e, y: o, width: n, height: i} = t;
    return {
        width: n,
        height: i,
        top: o,
        left: e,
        right: e + n,
        bottom: o + i,
        x: e,
        y: o
    }
}
function z(t, e, o) {
    let {reference: n, floating: i} = t;
    const s = Y(e)
      , r = ut(e)
      , c = ft(r)
      , f = X(e)
      , l = s === "y"
      , a = n.x + n.width / 2 - i.width / 2
      , u = n.y + n.height / 2 - i.height / 2
      , h = n[c] / 2 - i[c] / 2;
    let d;
    switch (f) {
    case "top":
        d = {
            x: a,
            y: n.y - i.height
        };
        break;
    case "bottom":
        d = {
            x: a,
            y: n.y + n.height
        };
        break;
    case "right":
        d = {
            x: n.x + n.width,
            y: u
        };
        break;
    case "left":
        d = {
            x: n.x - i.width,
            y: u
        };
        break;
    default:
        d = {
            x: n.x,
            y: n.y
        }
    }
    switch (lt(e)) {
    case "start":
        d[r] -= h * (o && l ? -1 : 1);
        break;
    case "end":
        d[r] += h * (o && l ? -1 : 1);
        break
    }
    return d
}
const ht = async (t, e, o) => {
    const {placement: n="bottom", strategy: i="absolute", middleware: s=[], platform: r} = o
      , c = s.filter(Boolean)
      , f = await (r.isRTL == null ? void 0 : r.isRTL(e));
    let l = await r.getElementRects({
        reference: t,
        floating: e,
        strategy: i
    })
      , {x: a, y: u} = z(l, n, f)
      , h = n
      , d = {}
      , p = 0;
    for (let m = 0; m < c.length; m++) {
        const {name: g, fn: w} = c[m]
          , {x: y, y: b, data: T, reset: v} = await w({
            x: a,
            y: u,
            initialPlacement: n,
            placement: h,
            strategy: i,
            middlewareData: d,
            rects: l,
            platform: r,
            elements: {
                reference: t,
                floating: e
            }
        });
        a = y ?? a,
        u = b ?? u,
        d = {
            ...d,
            [g]: {
                ...d[g],
                ...T
            }
        },
        v && p <= 50 && (p++,
        typeof v == "object" && (v.placement && (h = v.placement),
        v.rects && (l = v.rects === !0 ? await r.getElementRects({
            reference: t,
            floating: e,
            strategy: i
        }) : v.rects),
        {x: a, y: u} = z(l, h, f)),
        m = -1)
    }
    return {
        x: a,
        y: u,
        placement: h,
        strategy: i,
        middlewareData: d
    }
}
;
async function gt(t, e) {
    var o;
    e === void 0 && (e = {});
    const {x: n, y: i, platform: s, rects: r, elements: c, strategy: f} = t
      , {boundary: l="clippingAncestors", rootBoundary: a="viewport", elementContext: u="floating", altBoundary: h=!1, padding: d=0} = U(e, t)
      , p = dt(d)
      , g = c[h ? u === "floating" ? "reference" : "floating" : u]
      , w = F(await s.getClippingRect({
        element: (o = await (s.isElement == null ? void 0 : s.isElement(g))) == null || o ? g : g.contextElement || await (s.getDocumentElement == null ? void 0 : s.getDocumentElement(c.floating)),
        boundary: l,
        rootBoundary: a,
        strategy: f
    }))
      , y = u === "floating" ? {
        x: n,
        y: i,
        width: r.floating.width,
        height: r.floating.height
    } : r.reference
      , b = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c.floating))
      , T = await (s.isElement == null ? void 0 : s.isElement(b)) ? await (s.getScale == null ? void 0 : s.getScale(b)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }
      , v = F(s.convertOffsetParentRelativeRectToViewportRelativeRect ? await s.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: c,
        rect: y,
        offsetParent: b,
        strategy: f
    }) : y);
    return {
        top: (w.top - v.top + p.top) / T.y,
        bottom: (v.bottom - w.bottom + p.bottom) / T.y,
        left: (w.left - v.left + p.left) / T.x,
        right: (v.right - w.right + p.right) / T.x
    }
}
const pt = function(t) {
    return t === void 0 && (t = {}),
    {
        name: "shift",
        options: t,
        async fn(e) {
            const {x: o, y: n, placement: i} = e
              , {mainAxis: s=!0, crossAxis: r=!1, limiter: c={
                fn: g => {
                    let {x: w, y} = g;
                    return {
                        x: w,
                        y
                    }
                }
            }, ...f} = U(t, e)
              , l = {
                x: o,
                y: n
            }
              , a = await gt(e, f)
              , u = Y(X(i))
              , h = Z(u);
            let d = l[h]
              , p = l[u];
            if (s) {
                const g = h === "y" ? "top" : "left"
                  , w = h === "y" ? "bottom" : "right"
                  , y = d + a[g]
                  , b = d - a[w];
                d = q(y, d, b)
            }
            if (r) {
                const g = u === "y" ? "top" : "left"
                  , w = u === "y" ? "bottom" : "right"
                  , y = p + a[g]
                  , b = p - a[w];
                p = q(y, p, b)
            }
            const m = c.fn({
                ...e,
                [h]: d,
                [u]: p
            });
            return {
                ...m,
                data: {
                    x: m.x - o,
                    y: m.y - n
                }
            }
        }
    }
};
function k(t) {
    return tt(t) ? (t.nodeName || "").toLowerCase() : "#document"
}
function x(t) {
    var e;
    return (t == null || (e = t.ownerDocument) == null ? void 0 : e.defaultView) || window
}
function A(t) {
    var e;
    return (e = (tt(t) ? t.ownerDocument : t.document) || window.document) == null ? void 0 : e.documentElement
}
function tt(t) {
    return t instanceof Node || t instanceof x(t).Node
}
function C(t) {
    return t instanceof Element || t instanceof x(t).Element
}
function E(t) {
    return t instanceof HTMLElement || t instanceof x(t).HTMLElement
}
function G(t) {
    return typeof ShadowRoot > "u" ? !1 : t instanceof ShadowRoot || t instanceof x(t).ShadowRoot
}
function B(t) {
    const {overflow: e, overflowX: o, overflowY: n, display: i} = R(t);
    return /auto|scroll|overlay|hidden|clip/.test(e + n + o) && !["inline", "contents"].includes(i)
}
function mt(t) {
    return ["table", "td", "th"].includes(k(t))
}
function H(t) {
    return [":popover-open", ":modal"].some(e => {
        try {
            return t.matches(e)
        } catch {
            return !1
        }
    }
    )
}
function I(t) {
    const e = K()
      , o = C(t) ? R(t) : t;
    return o.transform !== "none" || o.perspective !== "none" || (o.containerType ? o.containerType !== "normal" : !1) || !e && (o.backdropFilter ? o.backdropFilter !== "none" : !1) || !e && (o.filter ? o.filter !== "none" : !1) || ["transform", "perspective", "filter"].some(n => (o.willChange || "").includes(n)) || ["paint", "layout", "strict", "content"].some(n => (o.contain || "").includes(n))
}
function wt(t) {
    let e = L(t);
    for (; E(e) && !N(e); ) {
        if (I(e))
            return e;
        if (H(e))
            return null;
        e = L(e)
    }
    return null
}
function K() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
function N(t) {
    return ["html", "body", "#document"].includes(k(t))
}
function R(t) {
    return x(t).getComputedStyle(t)
}
function P(t) {
    return C(t) ? {
        scrollLeft: t.scrollLeft,
        scrollTop: t.scrollTop
    } : {
        scrollLeft: t.scrollX,
        scrollTop: t.scrollY
    }
}
function L(t) {
    if (k(t) === "html")
        return t;
    const e = t.assignedSlot || t.parentNode || G(t) && t.host || A(t);
    return G(e) ? e.host : e
}
function et(t) {
    const e = L(t);
    return N(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : E(e) && B(e) ? e : et(e)
}
function _(t, e, o) {
    var n;
    e === void 0 && (e = []),
    o === void 0 && (o = !0);
    const i = et(t)
      , s = i === ((n = t.ownerDocument) == null ? void 0 : n.body)
      , r = x(i);
    if (s) {
        const c = j(r);
        return e.concat(r, r.visualViewport || [], B(i) ? i : [], c && o ? _(c) : [])
    }
    return e.concat(i, _(i, [], o))
}
function j(t) {
    return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null
}
function nt(t) {
    const e = R(t);
    let o = parseFloat(e.width) || 0
      , n = parseFloat(e.height) || 0;
    const i = E(t)
      , s = i ? t.offsetWidth : o
      , r = i ? t.offsetHeight : n
      , c = V(o) !== s || V(n) !== r;
    return c && (o = s,
    n = r),
    {
        width: o,
        height: n,
        $: c
    }
}
function ot(t) {
    return C(t) ? t : t.contextElement
}
function D(t) {
    const e = ot(t);
    if (!E(e))
        return O(1);
    const o = e.getBoundingClientRect()
      , {width: n, height: i, $: s} = nt(e);
    let r = (s ? V(o.width) : o.width) / n
      , c = (s ? V(o.height) : o.height) / i;
    return (!r || !Number.isFinite(r)) && (r = 1),
    (!c || !Number.isFinite(c)) && (c = 1),
    {
        x: r,
        y: c
    }
}
const yt = O(0);
function it(t) {
    const e = x(t);
    return !K() || !e.visualViewport ? yt : {
        x: e.visualViewport.offsetLeft,
        y: e.visualViewport.offsetTop
    }
}
function xt(t, e, o) {
    return e === void 0 && (e = !1),
    !o || e && o !== x(t) ? !1 : e
}
function W(t, e, o, n) {
    e === void 0 && (e = !1),
    o === void 0 && (o = !1);
    const i = t.getBoundingClientRect()
      , s = ot(t);
    let r = O(1);
    e && (n ? C(n) && (r = D(n)) : r = D(t));
    const c = xt(s, o, n) ? it(s) : O(0);
    let f = (i.left + c.x) / r.x
      , l = (i.top + c.y) / r.y
      , a = i.width / r.x
      , u = i.height / r.y;
    if (s) {
        const h = x(s)
          , d = n && C(n) ? x(n) : n;
        let p = h
          , m = j(p);
        for (; m && n && d !== p; ) {
            const g = D(m)
              , w = m.getBoundingClientRect()
              , y = R(m)
              , b = w.left + (m.clientLeft + parseFloat(y.paddingLeft)) * g.x
              , T = w.top + (m.clientTop + parseFloat(y.paddingTop)) * g.y;
            f *= g.x,
            l *= g.y,
            a *= g.x,
            u *= g.y,
            f += b,
            l += T,
            p = x(m),
            m = j(p)
        }
    }
    return F({
        width: a,
        height: u,
        x: f,
        y: l
    })
}
function bt(t) {
    let {elements: e, rect: o, offsetParent: n, strategy: i} = t;
    const s = i === "fixed"
      , r = A(n)
      , c = e ? H(e.floating) : !1;
    if (n === r || c && s)
        return o;
    let f = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , l = O(1);
    const a = O(0)
      , u = E(n);
    if ((u || !u && !s) && ((k(n) !== "body" || B(r)) && (f = P(n)),
    E(n))) {
        const h = W(n);
        l = D(n),
        a.x = h.x + n.clientLeft,
        a.y = h.y + n.clientTop
    }
    return {
        width: o.width * l.x,
        height: o.height * l.y,
        x: o.x * l.x - f.scrollLeft * l.x + a.x,
        y: o.y * l.y - f.scrollTop * l.y + a.y
    }
}
function vt(t) {
    return Array.from(t.getClientRects())
}
function rt(t) {
    return W(A(t)).left + P(t).scrollLeft
}
function Ct(t) {
    const e = A(t)
      , o = P(t)
      , n = t.ownerDocument.body
      , i = S(e.scrollWidth, e.clientWidth, n.scrollWidth, n.clientWidth)
      , s = S(e.scrollHeight, e.clientHeight, n.scrollHeight, n.clientHeight);
    let r = -o.scrollLeft + rt(t);
    const c = -o.scrollTop;
    return R(n).direction === "rtl" && (r += S(e.clientWidth, n.clientWidth) - i),
    {
        width: i,
        height: s,
        x: r,
        y: c
    }
}
function Rt(t, e) {
    const o = x(t)
      , n = A(t)
      , i = o.visualViewport;
    let s = n.clientWidth
      , r = n.clientHeight
      , c = 0
      , f = 0;
    if (i) {
        s = i.width,
        r = i.height;
        const l = K();
        (!l || l && e === "fixed") && (c = i.offsetLeft,
        f = i.offsetTop)
    }
    return {
        width: s,
        height: r,
        x: c,
        y: f
    }
}
function Et(t, e) {
    const o = W(t, !0, e === "fixed")
      , n = o.top + t.clientTop
      , i = o.left + t.clientLeft
      , s = E(t) ? D(t) : O(1)
      , r = t.clientWidth * s.x
      , c = t.clientHeight * s.y
      , f = i * s.x
      , l = n * s.y;
    return {
        width: r,
        height: c,
        x: f,
        y: l
    }
}
function J(t, e, o) {
    let n;
    if (e === "viewport")
        n = Rt(t, o);
    else if (e === "document")
        n = Ct(A(t));
    else if (C(e))
        n = Et(e, o);
    else {
        const i = it(t);
        n = {
            ...e,
            x: e.x - i.x,
            y: e.y - i.y
        }
    }
    return F(n)
}
function st(t, e) {
    const o = L(t);
    return o === e || !C(o) || N(o) ? !1 : R(o).position === "fixed" || st(o, e)
}
function Tt(t, e) {
    const o = e.get(t);
    if (o)
        return o;
    let n = _(t, [], !1).filter(c => C(c) && k(c) !== "body")
      , i = null;
    const s = R(t).position === "fixed";
    let r = s ? L(t) : t;
    for (; C(r) && !N(r); ) {
        const c = R(r)
          , f = I(r);
        !f && c.position === "fixed" && (i = null),
        (s ? !f && !i : !f && c.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || B(r) && !f && st(t, r)) ? n = n.filter(a => a !== r) : i = c,
        r = L(r)
    }
    return e.set(t, n),
    n
}
function Ot(t) {
    let {element: e, boundary: o, rootBoundary: n, strategy: i} = t;
    const r = [...o === "clippingAncestors" ? H(e) ? [] : Tt(e, this._c) : [].concat(o), n]
      , c = r[0]
      , f = r.reduce( (l, a) => {
        const u = J(e, a, i);
        return l.top = S(u.top, l.top),
        l.right = $(u.right, l.right),
        l.bottom = $(u.bottom, l.bottom),
        l.left = S(u.left, l.left),
        l
    }
    , J(e, c, i));
    return {
        width: f.right - f.left,
        height: f.bottom - f.top,
        x: f.left,
        y: f.top
    }
}
function Lt(t) {
    const {width: e, height: o} = nt(t);
    return {
        width: e,
        height: o
    }
}
function At(t, e, o) {
    const n = E(e)
      , i = A(e)
      , s = o === "fixed"
      , r = W(t, !0, s, e);
    let c = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const f = O(0);
    if (n || !n && !s)
        if ((k(e) !== "body" || B(i)) && (c = P(e)),
        n) {
            const u = W(e, !0, s, e);
            f.x = u.x + e.clientLeft,
            f.y = u.y + e.clientTop
        } else
            i && (f.x = rt(i));
    const l = r.left + c.scrollLeft - f.x
      , a = r.top + c.scrollTop - f.y;
    return {
        x: l,
        y: a,
        width: r.width,
        height: r.height
    }
}
function M(t) {
    return R(t).position === "static"
}
function Q(t, e) {
    return !E(t) || R(t).position === "fixed" ? null : e ? e(t) : t.offsetParent
}
function ct(t, e) {
    const o = x(t);
    if (H(t))
        return o;
    if (!E(t)) {
        let i = L(t);
        for (; i && !N(i); ) {
            if (C(i) && !M(i))
                return i;
            i = L(i)
        }
        return o
    }
    let n = Q(t, e);
    for (; n && mt(n) && M(n); )
        n = Q(n, e);
    return n && N(n) && M(n) && !I(n) ? o : n || wt(t) || o
}
const St = async function(t) {
    const e = this.getOffsetParent || ct
      , o = this.getDimensions
      , n = await o(t.floating);
    return {
        reference: At(t.reference, await e(t.floating), t.strategy),
        floating: {
            x: 0,
            y: 0,
            width: n.width,
            height: n.height
        }
    }
};
function Dt(t) {
    return R(t).direction === "rtl"
}
const Nt = {
    convertOffsetParentRelativeRectToViewportRelativeRect: bt,
    getDocumentElement: A,
    getClippingRect: Ot,
    getOffsetParent: ct,
    getElementRects: St,
    getClientRects: vt,
    getDimensions: Lt,
    getScale: D,
    isElement: C,
    isRTL: Dt
}
  , kt = pt
  , Wt = (t, e, o) => {
    const n = new Map
      , i = {
        platform: Nt,
        ...o
    }
      , s = {
        ...i.platform,
        _c: n
    };
    return ht(t, e, {
        ...i,
        platform: s
    })
}
;
export {Wt as c, kt as s};
