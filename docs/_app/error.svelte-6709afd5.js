import { S as j, i as w, s as z, e as k, t as c, c as o, E as b, d, f as m, g as N, h as A, n as S } from './chunks/index-350455f2.js';
function q(i) {
  let f,
    l = i[1].frame + '',
    r;
  return {
    c() {
      (f = k('pre')), (r = c(l));
    },
    m(s, t) {
      o(s, f, t), b(f, r);
    },
    p(s, t) {
      t & 2 && l !== (l = s[1].frame + '') && d(r, l);
    },
    d(s) {
      s && m(f);
    },
  };
}
function C(i) {
  let f,
    l = i[1].stack + '',
    r;
  return {
    c() {
      (f = k('pre')), (r = c(l));
    },
    m(s, t) {
      o(s, f, t), b(f, r);
    },
    p(s, t) {
      t & 2 && l !== (l = s[1].stack + '') && d(r, l);
    },
    d(s) {
      s && m(f);
    },
  };
}
function B(i) {
  let f,
    l,
    r,
    s,
    t = i[1].message + '',
    v,
    E,
    p,
    _,
    a = i[1].frame && q(i),
    u = i[1].stack && C(i);
  return {
    c() {
      (f = k('h1')), (l = c(i[0])), (r = N()), (s = k('pre')), (v = c(t)), (E = N()), a && a.c(), (p = N()), u && u.c(), (_ = A());
    },
    m(e, n) {
      o(e, f, n), b(f, l), o(e, r, n), o(e, s, n), b(s, v), o(e, E, n), a && a.m(e, n), o(e, p, n), u && u.m(e, n), o(e, _, n);
    },
    p(e, [n]) {
      n & 1 && d(l, e[0]),
        n & 2 && t !== (t = e[1].message + '') && d(v, t),
        e[1].frame ? (a ? a.p(e, n) : ((a = q(e)), a.c(), a.m(p.parentNode, p))) : a && (a.d(1), (a = null)),
        e[1].stack ? (u ? u.p(e, n) : ((u = C(e)), u.c(), u.m(_.parentNode, _))) : u && (u.d(1), (u = null));
    },
    i: S,
    o: S,
    d(e) {
      e && m(f), e && m(r), e && m(s), e && m(E), a && a.d(e), e && m(p), u && u.d(e), e && m(_);
    },
  };
}
function G({ error: i, status: f }) {
  return { props: { error: i, status: f } };
}
function D(i, f, l) {
  let { status: r } = f,
    { error: s } = f;
  return (
    (i.$$set = t => {
      'status' in t && l(0, (r = t.status)), 'error' in t && l(1, (s = t.error));
    }),
    [r, s]
  );
}
class H extends j {
  constructor(f) {
    super(), w(this, f, D, B, z, { status: 0, error: 1 });
  }
}
export { H as default, G as load };
