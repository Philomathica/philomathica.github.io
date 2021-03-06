function M() {}
function q(t, n) {
  for (const e in n) t[e] = n[e];
  return t;
}
function N(t) {
  return t();
}
function C() {
  return Object.create(null);
}
function g(t) {
  t.forEach(N);
}
function D(t) {
  return typeof t == 'function';
}
function Q(t, n) {
  return t != t ? n == n : t !== n || (t && typeof t == 'object') || typeof t == 'function';
}
function F(t) {
  return Object.keys(t).length === 0;
}
function R(t, n, e, o) {
  if (t) {
    const r = O(t, n, e, o);
    return t[0](r);
  }
}
function O(t, n, e, o) {
  return t[1] && o ? q(e.ctx.slice(), t[1](o(n))) : e.ctx;
}
function V(t, n, e, o) {
  if (t[2] && o) {
    const r = t[2](o(e));
    if (n.dirty === void 0) return r;
    if (typeof r == 'object') {
      const f = [],
        u = Math.max(n.dirty.length, r.length);
      for (let i = 0; i < u; i += 1) f[i] = n.dirty[i] | r[i];
      return f;
    }
    return n.dirty | r;
  }
  return n.dirty;
}
function W(t, n, e, o, r, f) {
  if (r) {
    const u = O(n, e, o, f);
    t.p(u, r);
  }
}
function X(t) {
  if (t.ctx.length > 32) {
    const n = [],
      e = t.ctx.length / 32;
    for (let o = 0; o < e; o++) n[o] = -1;
    return n;
  }
  return -1;
}
function Y(t, n) {
  t.appendChild(n);
}
function Z(t, n, e) {
  t.insertBefore(n, e || null);
}
function U(t) {
  t.parentNode.removeChild(t);
}
function tt(t) {
  return document.createElement(t);
}
function P(t) {
  return document.createTextNode(t);
}
function nt() {
  return P(' ');
}
function et() {
  return P('');
}
function ot(t, n, e) {
  e == null ? t.removeAttribute(n) : t.getAttribute(n) !== e && t.setAttribute(n, e);
}
function G(t) {
  return Array.from(t.childNodes);
}
function rt(t, n) {
  (n = '' + n), t.wholeText !== n && (t.data = n);
}
function ct(t, n, e, o) {
  e === null ? t.style.removeProperty(n) : t.style.setProperty(n, e, o ? 'important' : '');
}
let h;
function _(t) {
  h = t;
}
function w() {
  if (!h) throw new Error('Function called outside component initialization');
  return h;
}
function st(t) {
  w().$$.on_mount.push(t);
}
function ut(t) {
  w().$$.after_update.push(t);
}
function it(t, n) {
  return w().$$.context.set(t, n), n;
}
const d = [],
  v = [],
  p = [],
  S = [],
  z = Promise.resolve();
let $ = !1;
function B() {
  $ || (($ = !0), z.then(T));
}
function ft() {
  return B(), z;
}
function b(t) {
  p.push(t);
}
const x = new Set();
let m = 0;
function T() {
  const t = h;
  do {
    for (; m < d.length; ) {
      const n = d[m];
      m++, _(n), H(n.$$);
    }
    for (_(null), d.length = 0, m = 0; v.length; ) v.pop()();
    for (let n = 0; n < p.length; n += 1) {
      const e = p[n];
      x.has(e) || (x.add(e), e());
    }
    p.length = 0;
  } while (d.length);
  for (; S.length; ) S.pop()();
  ($ = !1), x.clear(), _(t);
}
function H(t) {
  if (t.fragment !== null) {
    t.update(), g(t.before_update);
    const n = t.dirty;
    (t.dirty = [-1]), t.fragment && t.fragment.p(t.ctx, n), t.after_update.forEach(b);
  }
}
const y = new Set();
let l;
function at() {
  l = { r: 0, c: [], p: l };
}
function lt() {
  l.r || g(l.c), (l = l.p);
}
function I(t, n) {
  t && t.i && (y.delete(t), t.i(n));
}
function dt(t, n, e, o) {
  if (t && t.o) {
    if (y.has(t)) return;
    y.add(t),
      l.c.push(() => {
        y.delete(t), o && (e && t.d(1), o());
      }),
      t.o(n);
  }
}
function _t(t, n) {
  const e = {},
    o = {},
    r = { $$scope: 1 };
  let f = t.length;
  for (; f--; ) {
    const u = t[f],
      i = n[f];
    if (i) {
      for (const c in u) c in i || (o[c] = 1);
      for (const c in i) r[c] || ((e[c] = i[c]), (r[c] = 1));
      t[f] = i;
    } else for (const c in u) r[c] = 1;
  }
  for (const u in o) u in e || (e[u] = void 0);
  return e;
}
function ht(t) {
  return typeof t == 'object' && t !== null ? t : {};
}
function gt(t) {
  t && t.c();
}
function J(t, n, e, o) {
  const { fragment: r, on_mount: f, on_destroy: u, after_update: i } = t.$$;
  r && r.m(n, e),
    o ||
      b(() => {
        const c = f.map(N).filter(D);
        u ? u.push(...c) : g(c), (t.$$.on_mount = []);
      }),
    i.forEach(b);
}
function K(t, n) {
  const e = t.$$;
  e.fragment !== null && (g(e.on_destroy), e.fragment && e.fragment.d(n), (e.on_destroy = e.fragment = null), (e.ctx = []));
}
function L(t, n) {
  t.$$.dirty[0] === -1 && (d.push(t), B(), t.$$.dirty.fill(0)), (t.$$.dirty[(n / 31) | 0] |= 1 << n % 31);
}
function mt(t, n, e, o, r, f, u, i = [-1]) {
  const c = h;
  _(t);
  const s = (t.$$ = {
    fragment: null,
    ctx: null,
    props: f,
    update: M,
    not_equal: r,
    bound: C(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(n.context || (c ? c.$$.context : [])),
    callbacks: C(),
    dirty: i,
    skip_bound: !1,
    root: n.target || c.$$.root,
  });
  u && u(s.root);
  let k = !1;
  if (
    ((s.ctx = e
      ? e(t, n.props || {}, (a, j, ...E) => {
          const A = E.length ? E[0] : j;
          return s.ctx && r(s.ctx[a], (s.ctx[a] = A)) && (!s.skip_bound && s.bound[a] && s.bound[a](A), k && L(t, a)), j;
        })
      : []),
    s.update(),
    (k = !0),
    g(s.before_update),
    (s.fragment = o ? o(s.ctx) : !1),
    n.target)
  ) {
    if (n.hydrate) {
      const a = G(n.target);
      s.fragment && s.fragment.l(a), a.forEach(U);
    } else s.fragment && s.fragment.c();
    n.intro && I(t.$$.fragment), J(t, n.target, n.anchor, n.customElement), T();
  }
  _(c);
}
class pt {
  $destroy() {
    K(this, 1), (this.$destroy = M);
  }
  $on(n, e) {
    const o = this.$$.callbacks[n] || (this.$$.callbacks[n] = []);
    return (
      o.push(e),
      () => {
        const r = o.indexOf(e);
        r !== -1 && o.splice(r, 1);
      }
    );
  }
  $set(n) {
    this.$$set && !F(n) && ((this.$$.skip_bound = !0), this.$$set(n), (this.$$.skip_bound = !1));
  }
}
export {
  R as A,
  W as B,
  X as C,
  V as D,
  Y as E,
  pt as S,
  ot as a,
  ct as b,
  Z as c,
  rt as d,
  tt as e,
  U as f,
  nt as g,
  et as h,
  mt as i,
  at as j,
  dt as k,
  lt as l,
  I as m,
  M as n,
  it as o,
  ut as p,
  st as q,
  gt as r,
  Q as s,
  P as t,
  J as u,
  _t as v,
  ht as w,
  K as x,
  q as y,
  ft as z,
};
