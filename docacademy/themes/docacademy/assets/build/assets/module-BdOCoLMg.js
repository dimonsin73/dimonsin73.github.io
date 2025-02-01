import {g as N, a as _, e as V, c as k, S as X, P as z} from "./pagination-BF8KcmhQ.js";
function U(f) {
    let {swiper: e, extendParams: t, on: r, emit: d, params: p} = f;
    e.autoplay = {
        running: !1,
        paused: !1,
        timeLeft: 0
    },
    t({
        autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !1,
            stopOnLastSlide: !1,
            reverseDirection: !1,
            pauseOnMouseEnter: !1
        }
    });
    let u, l, o = p && p.autoplay ? p.autoplay.delay : 3e3, s = p && p.autoplay ? p.autoplay.delay : 3e3, n, c = new Date().getTime(), v, T, m, P, i, h, y;
    function D(a) {
        !e || e.destroyed || !e.wrapperEl || a.target === e.wrapperEl && (e.wrapperEl.removeEventListener("transitionend", D),
        !(y || a.detail && a.detail.bySwiperTouchMove) && b())
    }
    const C = () => {
        if (e.destroyed || !e.autoplay.running)
            return;
        e.autoplay.paused ? v = !0 : v && (s = n,
        v = !1);
        const a = e.autoplay.paused ? n : c + s - new Date().getTime();
        e.autoplay.timeLeft = a,
        d("autoplayTimeLeft", a, a / o),
        l = requestAnimationFrame( () => {
            C()
        }
        )
    }
      , x = () => {
        let a;
        return e.virtual && e.params.virtual.enabled ? a = e.slides.filter(g => g.classList.contains("swiper-slide-active"))[0] : a = e.slides[e.activeIndex],
        a ? parseInt(a.getAttribute("data-swiper-autoplay"), 10) : void 0
    }
      , M = a => {
        if (e.destroyed || !e.autoplay.running)
            return;
        cancelAnimationFrame(l),
        C();
        let S = typeof a > "u" ? e.params.autoplay.delay : a;
        o = e.params.autoplay.delay,
        s = e.params.autoplay.delay;
        const g = x();
        !Number.isNaN(g) && g > 0 && typeof a > "u" && (S = g,
        o = g,
        s = g),
        n = S;
        const O = e.params.speed
          , R = () => {
            !e || e.destroyed || (e.params.autoplay.reverseDirection ? !e.isBeginning || e.params.loop || e.params.rewind ? (e.slidePrev(O, !0, !0),
            d("autoplay")) : e.params.autoplay.stopOnLastSlide || (e.slideTo(e.slides.length - 1, O, !0, !0),
            d("autoplay")) : !e.isEnd || e.params.loop || e.params.rewind ? (e.slideNext(O, !0, !0),
            d("autoplay")) : e.params.autoplay.stopOnLastSlide || (e.slideTo(0, O, !0, !0),
            d("autoplay")),
            e.params.cssMode && (c = new Date().getTime(),
            requestAnimationFrame( () => {
                M()
            }
            )))
        }
        ;
        return S > 0 ? (clearTimeout(u),
        u = setTimeout( () => {
            R()
        }
        , S)) : requestAnimationFrame( () => {
            R()
        }
        ),
        S
    }
      , L = () => {
        c = new Date().getTime(),
        e.autoplay.running = !0,
        M(),
        d("autoplayStart")
    }
      , E = () => {
        e.autoplay.running = !1,
        clearTimeout(u),
        cancelAnimationFrame(l),
        d("autoplayStop")
    }
      , $ = (a, S) => {
        if (e.destroyed || !e.autoplay.running)
            return;
        clearTimeout(u),
        a || (h = !0);
        const g = () => {
            d("autoplayPause"),
            e.params.autoplay.waitForTransition ? e.wrapperEl.addEventListener("transitionend", D) : b()
        }
        ;
        if (e.autoplay.paused = !0,
        S) {
            i && (n = e.params.autoplay.delay),
            i = !1,
            g();
            return
        }
        n = (n || e.params.autoplay.delay) - (new Date().getTime() - c),
        !(e.isEnd && n < 0 && !e.params.loop) && (n < 0 && (n = 0),
        g())
    }
      , b = () => {
        e.isEnd && n < 0 && !e.params.loop || e.destroyed || !e.autoplay.running || (c = new Date().getTime(),
        h ? (h = !1,
        M(n)) : M(),
        e.autoplay.paused = !1,
        d("autoplayResume"))
    }
      , I = () => {
        if (e.destroyed || !e.autoplay.running)
            return;
        const a = N();
        a.visibilityState === "hidden" && (h = !0,
        $(!0)),
        a.visibilityState === "visible" && b()
    }
      , A = a => {
        a.pointerType === "mouse" && (h = !0,
        y = !0,
        !(e.animating || e.autoplay.paused) && $(!0))
    }
      , q = a => {
        a.pointerType === "mouse" && (y = !1,
        e.autoplay.paused && b())
    }
      , w = () => {
        e.params.autoplay.pauseOnMouseEnter && (e.el.addEventListener("pointerenter", A),
        e.el.addEventListener("pointerleave", q))
    }
      , F = () => {
        e.el && typeof e.el != "string" && (e.el.removeEventListener("pointerenter", A),
        e.el.removeEventListener("pointerleave", q))
    }
      , B = () => {
        N().addEventListener("visibilitychange", I)
    }
      , j = () => {
        N().removeEventListener("visibilitychange", I)
    }
    ;
    r("init", () => {
        e.params.autoplay.enabled && (w(),
        B(),
        L())
    }
    ),
    r("destroy", () => {
        F(),
        j(),
        e.autoplay.running && E()
    }
    ),
    r("_freeModeStaticRelease", () => {
        (m || h) && b()
    }
    ),
    r("_freeModeNoMomentumRelease", () => {
        e.params.autoplay.disableOnInteraction ? E() : $(!0, !0)
    }
    ),
    r("beforeTransitionStart", (a, S, g) => {
        e.destroyed || !e.autoplay.running || (g || !e.params.autoplay.disableOnInteraction ? $(!0, !0) : E())
    }
    ),
    r("sliderFirstMove", () => {
        if (!(e.destroyed || !e.autoplay.running)) {
            if (e.params.autoplay.disableOnInteraction) {
                E();
                return
            }
            T = !0,
            m = !1,
            h = !1,
            P = setTimeout( () => {
                h = !0,
                m = !0,
                $(!0)
            }
            , 200)
        }
    }
    ),
    r("touchEnd", () => {
        if (!(e.destroyed || !e.autoplay.running || !T)) {
            if (clearTimeout(P),
            clearTimeout(u),
            e.params.autoplay.disableOnInteraction) {
                m = !1,
                T = !1;
                return
            }
            m && e.params.cssMode && b(),
            m = !1,
            T = !1
        }
    }
    ),
    r("slideChange", () => {
        e.destroyed || !e.autoplay.running || (i = !0)
    }
    ),
    Object.assign(e.autoplay, {
        start: L,
        stop: E,
        pause: $,
        resume: b
    })
}
function Y(f) {
    const {effect: e, swiper: t, on: r, setTranslate: d, setTransition: p, overwriteParams: u, perspective: l, recreateShadows: o, getEffectParams: s} = f;
    r("beforeInit", () => {
        if (t.params.effect !== e)
            return;
        t.classNames.push(`${t.params.containerModifierClass}${e}`),
        l && l() && t.classNames.push(`${t.params.containerModifierClass}3d`);
        const c = u ? u() : {};
        Object.assign(t.params, c),
        Object.assign(t.originalParams, c)
    }
    ),
    r("setTranslate", () => {
        t.params.effect === e && d()
    }
    ),
    r("setTransition", (c, v) => {
        t.params.effect === e && p(v)
    }
    ),
    r("transitionEnd", () => {
        if (t.params.effect === e && o) {
            if (!s || !s().slideShadows)
                return;
            t.slides.forEach(c => {
                c.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(v => v.remove())
            }
            ),
            o()
        }
    }
    );
    let n;
    r("virtualUpdate", () => {
        t.params.effect === e && (t.slides.length || (n = !0),
        requestAnimationFrame( () => {
            n && t.slides && t.slides.length && (d(),
            n = !1)
        }
        ))
    }
    )
}
function Z(f, e) {
    const t = _(e);
    return t !== e && (t.style.backfaceVisibility = "hidden",
    t.style["-webkit-backface-visibility"] = "hidden"),
    t
}
function H(f) {
    let {swiper: e, duration: t, transformElements: r, allSlides: d} = f;
    const {activeIndex: p} = e
      , u = l => l.parentElement ? l.parentElement : e.slides.filter(s => s.shadowRoot && s.shadowRoot === l.parentNode)[0];
    if (e.params.virtualTranslate && t !== 0) {
        let l = !1, o;
        d ? o = r : o = r.filter(s => {
            const n = s.classList.contains("swiper-slide-transform") ? u(s) : s;
            return e.getSlideIndex(n) === p
        }
        ),
        o.forEach(s => {
            V(s, () => {
                if (l || !e || e.destroyed)
                    return;
                l = !0,
                e.animating = !1;
                const n = new window.CustomEvent("transitionend",{
                    bubbles: !0,
                    cancelable: !0
                });
                e.wrapperEl.dispatchEvent(n)
            }
            )
        }
        )
    }
}
function G(f, e, t) {
    const r = `swiper-slide-shadow${` swiper-slide-shadow-${f}`}`
      , d = _(e);
    let p = d.querySelector(`.${r.split(" ").join(".")}`);
    return p || (p = k("div", r.split(" ")),
    d.append(p)),
    p
}
function J(f) {
    let {swiper: e, extendParams: t, on: r} = f;
    t({
        cardsEffect: {
            slideShadows: !0,
            rotate: !0,
            perSlideRotate: 2,
            perSlideOffset: 8
        }
    }),
    Y({
        effect: "cards",
        swiper: e,
        on: r,
        setTranslate: () => {
            const {slides: u, activeIndex: l, rtlTranslate: o} = e
              , s = e.params.cardsEffect
              , {startTranslate: n, isTouched: c} = e.touchEventsData
              , v = o ? -e.translate : e.translate;
            for (let T = 0; T < u.length; T += 1) {
                const m = u[T]
                  , P = m.progress
                  , i = Math.min(Math.max(P, -4), 4);
                let h = m.swiperSlideOffset;
                e.params.centeredSlides && !e.params.cssMode && (e.wrapperEl.style.transform = `translateX(${e.minTranslate()}px)`),
                e.params.centeredSlides && e.params.cssMode && (h -= u[0].swiperSlideOffset);
                let y = e.params.cssMode ? -h - e.translate : -h
                  , D = 0;
                const C = -100 * Math.abs(i);
                let x = 1
                  , M = -s.perSlideRotate * i
                  , L = s.perSlideOffset - Math.abs(i) * .75;
                const E = e.virtual && e.params.virtual.enabled ? e.virtual.from + T : T
                  , $ = (E === l || E === l - 1) && i > 0 && i < 1 && (c || e.params.cssMode) && v < n
                  , b = (E === l || E === l + 1) && i < 0 && i > -1 && (c || e.params.cssMode) && v > n;
                if ($ || b) {
                    const w = (1 - Math.abs((Math.abs(i) - .5) / .5)) ** .5;
                    M += -28 * i * w,
                    x += -.5 * w,
                    L += 96 * w,
                    D = `${-25 * w * Math.abs(i)}%`
                }
                if (i < 0 ? y = `calc(${y}px ${o ? "-" : "+"} (${L * Math.abs(i)}%))` : i > 0 ? y = `calc(${y}px ${o ? "-" : "+"} (-${L * Math.abs(i)}%))` : y = `${y}px`,
                !e.isHorizontal()) {
                    const w = D;
                    D = y,
                    y = w
                }
                const I = i < 0 ? `${1 + (1 - x) * i}` : `${1 - (1 - x) * i}`
                  , A = `
        translate3d(${y}, ${D}, ${C}px)
        rotateZ(${s.rotate ? o ? -M : M : 0}deg)
        scale(${I})
      `;
                if (s.slideShadows) {
                    let w = m.querySelector(".swiper-slide-shadow");
                    w || (w = G("cards", m)),
                    w && (w.style.opacity = Math.min(Math.max((Math.abs(i) - .5) / .5, 0), 1))
                }
                m.style.zIndex = -Math.abs(Math.round(P)) + u.length;
                const q = Z(s, m);
                q.style.transform = A
            }
        }
        ,
        setTransition: u => {
            const l = e.slides.map(o => _(o));
            l.forEach(o => {
                o.style.transitionDuration = `${u}ms`,
                o.querySelectorAll(".swiper-slide-shadow").forEach(s => {
                    s.style.transitionDuration = `${u}ms`
                }
                )
            }
            ),
            H({
                swiper: e,
                duration: u,
                transformElements: l
            })
        }
        ,
        perspective: () => !0,
        overwriteParams: () => ({
            watchSlidesProgress: !0,
            virtualTranslate: !e.params.cssMode
        })
    })
}
const Q = f => {
    f.dataset.inited = "true",
    new X(f,{
        effect: "cards",
        autoplay: {
            delay: 5e3
        },
        grabCursor: !0,
        slideClass: "carousel-cards__slide",
        wrapperClass: "carousel-cards__wrapper",
        modules: [z, J, U],
        pagination: {
            el: '[data-selector="pagination"]',
            dynamicBullets: !1,
            bulletActiveClass: "carouser-pagination-bullet_active",
            bulletClass: "carouser-pagination-bullet",
            renderBullet: function(e, t) {
                return '<span class="' + t + '"></span>'
            }
        }
    })
}
;
export {Q as default};
