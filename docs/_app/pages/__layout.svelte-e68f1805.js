import { S as l, i, s as r, A as u, B as f, C as _, D as c, m as p, k as m } from '../chunks/index-350455f2.js';
function d(n) {
  let s;
  const o = n[1].default,
    e = u(o, n, n[0], null);
  return {
    c() {
      e && e.c();
    },
    m(t, a) {
      e && e.m(t, a), (s = !0);
    },
    p(t, [a]) {
      e && e.p && (!s || a & 1) && f(e, o, t, t[0], s ? c(o, t[0], a, null) : _(t[0]), null);
    },
    i(t) {
      s || (p(e, t), (s = !0));
    },
    o(t) {
      m(e, t), (s = !1);
    },
    d(t) {
      e && e.d(t);
    },
  };
}
function $(n, s, o) {
  let { $$slots: e = {}, $$scope: t } = s;
  return (
    (n.$$set = a => {
      '$$scope' in a && o(0, (t = a.$$scope));
    }),
    [t, e]
  );
}
class h extends l {
  constructor(s) {
    super(), i(this, s, $, d, r, {});
  }
}
export { h as default };
