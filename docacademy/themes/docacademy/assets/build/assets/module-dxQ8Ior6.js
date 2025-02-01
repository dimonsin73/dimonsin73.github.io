import {f as o} from "./main-DN1Aqnqz.js";
class d {
    async getItem(t) {
        return localStorage.getItem(t)
    }
    async setItem(t, s) {
        localStorage.setItem(t, s)
    }
}
class i {
    constructor(t) {
        this.STORAGE_KEY = "header-bar-id",
        this.strategy = t
    }
    async getStoredBarId() {
        return this.strategy.getItem(this.STORAGE_KEY)
    }
    async setStoredBarId(t) {
        await this.strategy.setItem(this.STORAGE_KEY, t)
    }
    async isBarHidden(t) {
        return await this.getStoredBarId() === t
    }
}
const l = new d
  , g = new i(l)
  , r = g
  , I = async e => {
    e.dataset.inited = "true";
    const t = e.dataset.id || "1"
      , s = async ({target: a}) => {
        !(a instanceof HTMLElement) || a.dataset.selector !== o.btn || await c()
    }
      , n = () => {
        e.setAttribute("data-show", "true"),
        e.addEventListener("click", s)
    }
      , c = async () => {
        e.remove(),
        await r.setStoredBarId(t),
        e.removeEventListener("click", s)
    }
    ;
    r.isBarHidden(t).then(a => {
        a || n()
    }
    )
}
;
export {I as default};
