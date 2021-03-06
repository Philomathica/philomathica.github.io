var nt = Object.defineProperty,
  st = Object.defineProperties;
var rt = Object.getOwnPropertyDescriptors;
var fe = Object.getOwnPropertySymbols;
var qe = Object.prototype.hasOwnProperty,
  ze = Object.prototype.propertyIsEnumerable;
var Ie = (n, e, t) => (e in n ? nt(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : (n[e] = t)),
  P = (n, e) => {
    for (var t in e || (e = {})) qe.call(e, t) && Ie(n, t, e[t]);
    if (fe) for (var t of fe(e)) ze.call(e, t) && Ie(n, t, e[t]);
    return n;
  },
  se = (n, e) => st(n, rt(e));
var Ve = (n, e) => {
  var t = {};
  for (var r in n) qe.call(n, r) && e.indexOf(r) < 0 && (t[r] = n[r]);
  if (n != null && fe) for (var r of fe(n)) e.indexOf(r) < 0 && ze.call(n, r) && (t[r] = n[r]);
  return t;
};
import {
  n as we,
  s as Qe,
  S as it,
  i as ot,
  e as at,
  a as be,
  b as K,
  c as q,
  t as ct,
  d as lt,
  f as z,
  g as ft,
  h as Y,
  j as M,
  k as j,
  l as F,
  m as C,
  o as ut,
  p as dt,
  q as $e,
  r as V,
  u as D,
  v as ie,
  w as oe,
  x as J,
  y as ae,
  z as De,
} from './chunks/index-350455f2.js';
const Z = [];
function ue(n, e = we) {
  let t;
  const r = new Set();
  function l(s) {
    if (Qe(n, s) && ((n = s), t)) {
      const i = !Z.length;
      for (const o of r) o[1](), Z.push(o, n);
      if (i) {
        for (let o = 0; o < Z.length; o += 2) Z[o][0](Z[o + 1]);
        Z.length = 0;
      }
    }
  }
  function a(s) {
    l(s(n));
  }
  function f(s, i = we) {
    const o = [s, i];
    return (
      r.add(o),
      r.size === 1 && (t = e(l) || we),
      s(n),
      () => {
        r.delete(o), r.size === 0 && (t(), (t = null));
      }
    );
  }
  return { set: l, update: a, subscribe: f };
}
let Je = '',
  et = '';
function pt(n) {
  (Je = n.base), (et = n.assets || Je);
}
function ht(n) {
  let e, t, r;
  const l = [n[1] || {}];
  var a = n[0][0];
  function f(s) {
    let i = {};
    for (let o = 0; o < l.length; o += 1) i = ae(i, l[o]);
    return { props: i };
  }
  return (
    a && (e = new a(f())),
    {
      c() {
        e && V(e.$$.fragment), (t = Y());
      },
      m(s, i) {
        e && D(e, s, i), q(s, t, i), (r = !0);
      },
      p(s, i) {
        const o = i & 2 ? ie(l, [oe(s[1] || {})]) : {};
        if (a !== (a = s[0][0])) {
          if (e) {
            M();
            const d = e;
            j(d.$$.fragment, 1, 0, () => {
              J(d, 1);
            }),
              F();
          }
          a ? ((e = new a(f())), V(e.$$.fragment), C(e.$$.fragment, 1), D(e, t.parentNode, t)) : (e = null);
        } else a && e.$set(o);
      },
      i(s) {
        r || (e && C(e.$$.fragment, s), (r = !0));
      },
      o(s) {
        e && j(e.$$.fragment, s), (r = !1);
      },
      d(s) {
        s && z(t), e && J(e, s);
      },
    }
  );
}
function _t(n) {
  let e, t, r;
  const l = [n[1] || {}];
  var a = n[0][0];
  function f(s) {
    let i = { $$slots: { default: [bt] }, $$scope: { ctx: s } };
    for (let o = 0; o < l.length; o += 1) i = ae(i, l[o]);
    return { props: i };
  }
  return (
    a && (e = new a(f(n))),
    {
      c() {
        e && V(e.$$.fragment), (t = Y());
      },
      m(s, i) {
        e && D(e, s, i), q(s, t, i), (r = !0);
      },
      p(s, i) {
        const o = i & 2 ? ie(l, [oe(s[1] || {})]) : {};
        if ((i & 525 && (o.$$scope = { dirty: i, ctx: s }), a !== (a = s[0][0]))) {
          if (e) {
            M();
            const d = e;
            j(d.$$.fragment, 1, 0, () => {
              J(d, 1);
            }),
              F();
          }
          a ? ((e = new a(f(s))), V(e.$$.fragment), C(e.$$.fragment, 1), D(e, t.parentNode, t)) : (e = null);
        } else a && e.$set(o);
      },
      i(s) {
        r || (e && C(e.$$.fragment, s), (r = !0));
      },
      o(s) {
        e && j(e.$$.fragment, s), (r = !1);
      },
      d(s) {
        s && z(t), e && J(e, s);
      },
    }
  );
}
function mt(n) {
  let e, t, r;
  const l = [n[2] || {}];
  var a = n[0][1];
  function f(s) {
    let i = {};
    for (let o = 0; o < l.length; o += 1) i = ae(i, l[o]);
    return { props: i };
  }
  return (
    a && (e = new a(f())),
    {
      c() {
        e && V(e.$$.fragment), (t = Y());
      },
      m(s, i) {
        e && D(e, s, i), q(s, t, i), (r = !0);
      },
      p(s, i) {
        const o = i & 4 ? ie(l, [oe(s[2] || {})]) : {};
        if (a !== (a = s[0][1])) {
          if (e) {
            M();
            const d = e;
            j(d.$$.fragment, 1, 0, () => {
              J(d, 1);
            }),
              F();
          }
          a ? ((e = new a(f())), V(e.$$.fragment), C(e.$$.fragment, 1), D(e, t.parentNode, t)) : (e = null);
        } else a && e.$set(o);
      },
      i(s) {
        r || (e && C(e.$$.fragment, s), (r = !0));
      },
      o(s) {
        e && j(e.$$.fragment, s), (r = !1);
      },
      d(s) {
        s && z(t), e && J(e, s);
      },
    }
  );
}
function gt(n) {
  let e, t, r;
  const l = [n[2] || {}];
  var a = n[0][1];
  function f(s) {
    let i = { $$slots: { default: [wt] }, $$scope: { ctx: s } };
    for (let o = 0; o < l.length; o += 1) i = ae(i, l[o]);
    return { props: i };
  }
  return (
    a && (e = new a(f(n))),
    {
      c() {
        e && V(e.$$.fragment), (t = Y());
      },
      m(s, i) {
        e && D(e, s, i), q(s, t, i), (r = !0);
      },
      p(s, i) {
        const o = i & 4 ? ie(l, [oe(s[2] || {})]) : {};
        if ((i & 521 && (o.$$scope = { dirty: i, ctx: s }), a !== (a = s[0][1]))) {
          if (e) {
            M();
            const d = e;
            j(d.$$.fragment, 1, 0, () => {
              J(d, 1);
            }),
              F();
          }
          a ? ((e = new a(f(s))), V(e.$$.fragment), C(e.$$.fragment, 1), D(e, t.parentNode, t)) : (e = null);
        } else a && e.$set(o);
      },
      i(s) {
        r || (e && C(e.$$.fragment, s), (r = !0));
      },
      o(s) {
        e && j(e.$$.fragment, s), (r = !1);
      },
      d(s) {
        s && z(t), e && J(e, s);
      },
    }
  );
}
function wt(n) {
  let e, t, r;
  const l = [n[3] || {}];
  var a = n[0][2];
  function f(s) {
    let i = {};
    for (let o = 0; o < l.length; o += 1) i = ae(i, l[o]);
    return { props: i };
  }
  return (
    a && (e = new a(f())),
    {
      c() {
        e && V(e.$$.fragment), (t = Y());
      },
      m(s, i) {
        e && D(e, s, i), q(s, t, i), (r = !0);
      },
      p(s, i) {
        const o = i & 8 ? ie(l, [oe(s[3] || {})]) : {};
        if (a !== (a = s[0][2])) {
          if (e) {
            M();
            const d = e;
            j(d.$$.fragment, 1, 0, () => {
              J(d, 1);
            }),
              F();
          }
          a ? ((e = new a(f())), V(e.$$.fragment), C(e.$$.fragment, 1), D(e, t.parentNode, t)) : (e = null);
        } else a && e.$set(o);
      },
      i(s) {
        r || (e && C(e.$$.fragment, s), (r = !0));
      },
      o(s) {
        e && j(e.$$.fragment, s), (r = !1);
      },
      d(s) {
        s && z(t), e && J(e, s);
      },
    }
  );
}
function bt(n) {
  let e, t, r, l;
  const a = [gt, mt],
    f = [];
  function s(i, o) {
    return i[0][2] ? 0 : 1;
  }
  return (
    (e = s(n)),
    (t = f[e] = a[e](n)),
    {
      c() {
        t.c(), (r = Y());
      },
      m(i, o) {
        f[e].m(i, o), q(i, r, o), (l = !0);
      },
      p(i, o) {
        let d = e;
        (e = s(i)),
          e === d
            ? f[e].p(i, o)
            : (M(),
              j(f[d], 1, 1, () => {
                f[d] = null;
              }),
              F(),
              (t = f[e]),
              t ? t.p(i, o) : ((t = f[e] = a[e](i)), t.c()),
              C(t, 1),
              t.m(r.parentNode, r));
      },
      i(i) {
        l || (C(t), (l = !0));
      },
      o(i) {
        j(t), (l = !1);
      },
      d(i) {
        f[e].d(i), i && z(r);
      },
    }
  );
}
function Ke(n) {
  let e,
    t = n[5] && We(n);
  return {
    c() {
      (e = at('div')),
        t && t.c(),
        be(e, 'id', 'svelte-announcer'),
        be(e, 'aria-live', 'assertive'),
        be(e, 'aria-atomic', 'true'),
        K(e, 'position', 'absolute'),
        K(e, 'left', '0'),
        K(e, 'top', '0'),
        K(e, 'clip', 'rect(0 0 0 0)'),
        K(e, 'clip-path', 'inset(50%)'),
        K(e, 'overflow', 'hidden'),
        K(e, 'white-space', 'nowrap'),
        K(e, 'width', '1px'),
        K(e, 'height', '1px');
    },
    m(r, l) {
      q(r, e, l), t && t.m(e, null);
    },
    p(r, l) {
      r[5] ? (t ? t.p(r, l) : ((t = We(r)), t.c(), t.m(e, null))) : t && (t.d(1), (t = null));
    },
    d(r) {
      r && z(e), t && t.d();
    },
  };
}
function We(n) {
  let e;
  return {
    c() {
      e = ct(n[6]);
    },
    m(t, r) {
      q(t, e, r);
    },
    p(t, r) {
      r & 64 && lt(e, t[6]);
    },
    d(t) {
      t && z(e);
    },
  };
}
function yt(n) {
  let e, t, r, l, a;
  const f = [_t, ht],
    s = [];
  function i(d, R) {
    return d[0][1] ? 0 : 1;
  }
  (e = i(n)), (t = s[e] = f[e](n));
  let o = n[4] && Ke(n);
  return {
    c() {
      t.c(), (r = ft()), o && o.c(), (l = Y());
    },
    m(d, R) {
      s[e].m(d, R), q(d, r, R), o && o.m(d, R), q(d, l, R), (a = !0);
    },
    p(d, [R]) {
      let y = e;
      (e = i(d)),
        e === y
          ? s[e].p(d, R)
          : (M(),
            j(s[y], 1, 1, () => {
              s[y] = null;
            }),
            F(),
            (t = s[e]),
            t ? t.p(d, R) : ((t = s[e] = f[e](d)), t.c()),
            C(t, 1),
            t.m(r.parentNode, r)),
        d[4] ? (o ? o.p(d, R) : ((o = Ke(d)), o.c(), o.m(l.parentNode, l))) : o && (o.d(1), (o = null));
    },
    i(d) {
      a || (C(t), (a = !0));
    },
    o(d) {
      j(t), (a = !1);
    },
    d(d) {
      s[e].d(d), d && z(r), o && o.d(d), d && z(l);
    },
  };
}
function vt(n, e, t) {
  let { stores: r } = e,
    { page: l } = e,
    { components: a } = e,
    { props_0: f = null } = e,
    { props_1: s = null } = e,
    { props_2: i = null } = e;
  ut('__svelte__', r), dt(r.page.notify);
  let o = !1,
    d = !1,
    R = null;
  return (
    $e(() => {
      const y = r.page.subscribe(() => {
        o && (t(5, (d = !0)), t(6, (R = document.title || 'untitled page')));
      });
      return t(4, (o = !0)), y;
    }),
    (n.$$set = y => {
      'stores' in y && t(7, (r = y.stores)),
        'page' in y && t(8, (l = y.page)),
        'components' in y && t(0, (a = y.components)),
        'props_0' in y && t(1, (f = y.props_0)),
        'props_1' in y && t(2, (s = y.props_1)),
        'props_2' in y && t(3, (i = y.props_2));
    }),
    (n.$$.update = () => {
      n.$$.dirty & 384 && r.page.set(l);
    }),
    [a, f, s, i, o, d, R, r, l]
  );
}
class kt extends it {
  constructor(e) {
    super(), ot(this, e, vt, yt, Qe, { stores: 7, page: 8, components: 0, props_0: 1, props_1: 2, props_2: 3 });
  }
}
const $t = 'modulepreload',
  Be = {},
  Et = '/_app/',
  ye = function (e, t) {
    return !t || t.length === 0
      ? e()
      : Promise.all(
          t.map(r => {
            if (((r = `${Et}${r}`), r in Be)) return;
            Be[r] = !0;
            const l = r.endsWith('.css'),
              a = l ? '[rel="stylesheet"]' : '';
            if (document.querySelector(`link[href="${r}"]${a}`)) return;
            const f = document.createElement('link');
            if (((f.rel = l ? 'stylesheet' : $t), l || ((f.as = 'script'), (f.crossOrigin = '')), (f.href = r), document.head.appendChild(f), l))
              return new Promise((s, i) => {
                f.addEventListener('load', s), f.addEventListener('error', () => i(new Error(`Unable to preload CSS for ${r}`)));
              });
          }),
        ).then(() => e());
  },
  Rt = {},
  Re = [
    () =>
      ye(
        () => import('./pages/__layout.svelte-e68f1805.js'),
        ['pages/__layout.svelte-e68f1805.js', 'assets/pages/__layout.svelte-1db57da1.css', 'chunks/index-350455f2.js'],
      ),
    () => ye(() => import('./error.svelte-6709afd5.js'), ['error.svelte-6709afd5.js', 'chunks/index-350455f2.js']),
    () => ye(() => import('./pages/index.svelte-da91f9d0.js'), ['pages/index.svelte-da91f9d0.js', 'chunks/index-350455f2.js']),
  ],
  St = { '': [[0, 2], [1]] };
function Ye(n) {
  return n instanceof Error || (n && n.name && n.message) ? n : new Error(JSON.stringify(n));
}
function Me(n) {
  if (n.fallthrough)
    throw new Error('fallthrough is no longer supported. Use matchers instead: https://kit.svelte.dev/docs/routing#advanced-routing-matching');
  if ('maxage' in n) throw new Error('maxage should be replaced with cache: { maxage }');
  const e = n.status && n.status >= 400 && n.status <= 599 && !n.redirect;
  if (n.error || e) {
    const t = n.status;
    if (!n.error && e) return { status: t || 500, error: new Error() };
    const r = typeof n.error == 'string' ? new Error(n.error) : n.error;
    return r instanceof Error
      ? !t || t < 400 || t > 599
        ? (console.warn('"error" returned from load() without a valid status code \u2014 defaulting to 500'), { status: 500, error: r })
        : { status: t, error: r }
      : { status: 500, error: new Error(`"error" property returned from load() must be a string or instance of Error, received type "${typeof r}"`) };
  }
  if (n.redirect) {
    if (!n.status || Math.floor(n.status / 100) !== 3)
      return { status: 500, error: new Error('"redirect" property returned from load() must be accompanied by a 3xx status code') };
    if (typeof n.redirect != 'string') return { status: 500, error: new Error('"redirect" property returned from load() must be a string') };
  }
  if (n.dependencies && (!Array.isArray(n.dependencies) || n.dependencies.some(t => typeof t != 'string')))
    return { status: 500, error: new Error('"dependencies" property returned from load() must be of type string[]') };
  if (n.context)
    throw new Error('You are returning "context" from a load function. "context" was renamed to "stuff", please adjust your code accordingly.');
  return n;
}
function Lt(n, e) {
  return n === '/' || e === 'ignore' ? n : e === 'never' ? (n.endsWith('/') ? n.slice(0, -1) : n) : e === 'always' && !n.endsWith('/') ? n + '/' : n;
}
function Ut(n) {
  let e = 5381,
    t = n.length;
  if (typeof n == 'string') for (; t; ) e = (e * 33) ^ n.charCodeAt(--t);
  else for (; t; ) e = (e * 33) ^ n[--t];
  return (e >>> 0).toString(36);
}
function Fe(n) {
  let e = n.baseURI;
  if (!e) {
    const t = n.getElementsByTagName('base');
    e = t.length ? t[0].href : n.URL;
  }
  return e;
}
function Ee() {
  return { x: pageXOffset, y: pageYOffset };
}
function Ge(n) {
  return n.composedPath().find(t => t instanceof Node && t.nodeName.toUpperCase() === 'A');
}
function Xe(n) {
  return n instanceof SVGAElement ? new URL(n.href.baseVal, document.baseURI) : new URL(n.href);
}
function Ze(n) {
  const e = ue(n);
  let t = !0;
  function r() {
    (t = !0), e.update(f => f);
  }
  function l(f) {
    (t = !1), e.set(f);
  }
  function a(f) {
    let s;
    return e.subscribe(i => {
      (s === void 0 || (t && i !== s)) && f((s = i));
    });
  }
  return { notify: r, set: l, subscribe: a };
}
function At() {
  const { set: n, subscribe: e } = ue(!1),
    t = '1652102010248';
  let r;
  async function l() {
    clearTimeout(r);
    const f = await fetch(`${et}/_app/version.json`, { headers: { pragma: 'no-cache', 'cache-control': 'no-cache' } });
    if (f.ok) {
      const { version: s } = await f.json(),
        i = s !== t;
      return i && (n(!0), clearTimeout(r)), i;
    } else throw new Error(`Version check failed: ${f.status}`);
  }
  return { subscribe: e, check: l };
}
function Nt(n, e) {
  let r = `script[sveltekit\\:data-type="data"][sveltekit\\:data-url=${JSON.stringify(typeof n == 'string' ? n : n.url)}]`;
  e && typeof e.body == 'string' && (r += `[sveltekit\\:data-body="${Ut(e.body)}"]`);
  const l = document.querySelector(r);
  if (l && l.textContent) {
    const a = JSON.parse(l.textContent),
      { body: f } = a,
      s = Ve(a, ['body']);
    return Promise.resolve(new Response(f, s));
  }
  return fetch(n, e);
}
const Ot = /^(\.\.\.)?(\w+)(?:=(\w+))?$/;
function xt(n) {
  const e = [],
    t = [];
  let r = !0;
  return {
    pattern:
      n === ''
        ? /^\/$/
        : new RegExp(
            `^${decodeURIComponent(n)
              .split(/(?:@[a-zA-Z0-9_-]+)?(?:\/|$)/)
              .map((a, f, s) => {
                const i = /^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(a);
                if (i) return e.push(i[1]), t.push(i[2]), '(?:/(.*))?';
                const o = f === s.length - 1;
                return (
                  a &&
                  '/' +
                    a
                      .split(/\[(.+?)\]/)
                      .map((d, R) => {
                        if (R % 2) {
                          const [, y, H, G] = Ot.exec(d);
                          return e.push(H), t.push(G), y ? '(.*?)' : '([^/]+?)';
                        }
                        return (
                          o && d.includes('.') && (r = !1),
                          d
                            .normalize()
                            .replace(/%5[Bb]/g, '[')
                            .replace(/%5[Dd]/g, ']')
                            .replace(/#/g, '%23')
                            .replace(/\?/g, '%3F')
                            .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
                        );
                      })
                      .join('')
                );
              })
              .join('')}${r ? '/?' : ''}$`,
          ),
    names: e,
    types: t,
  };
}
function Pt(n, e, t, r) {
  const l = {};
  for (let a = 0; a < e.length; a += 1) {
    const f = e[a],
      s = t[a],
      i = n[a + 1] || '';
    if (s) {
      const o = r[s];
      if (!o) throw new Error(`Missing "${s}" param matcher`);
      if (!o(i)) return;
    }
    l[f] = i;
  }
  return l;
}
function jt(n, e, t) {
  return Object.entries(e).map(([l, [a, f, s]]) => {
    const { pattern: i, names: o, types: d } = xt(l);
    return {
      id: l,
      exec: R => {
        const y = i.exec(R);
        if (y) return Pt(y, o, d, t);
      },
      a: a.map(R => n[R]),
      b: f.map(R => n[R]),
      has_shadow: !!s,
    };
  });
}
const tt = 'sveltekit:scroll',
  W = 'sveltekit:index',
  ve = jt(Re, St, Rt),
  Ct = Re[0](),
  Tt = Re[1](),
  He = {};
let re = {};
try {
  re = JSON.parse(sessionStorage[tt]);
} catch {}
function ke(n) {
  re[n] = Ee();
}
function It({ target: n, session: e, base: t, trailing_slash: r }) {
  var Ce;
  const l = new Map(),
    a = [],
    f = { url: Ze({}), page: Ze({}), navigating: ue(null), session: ue(e), updated: At() },
    s = { id: null, promise: null },
    i = { before_navigate: [], after_navigate: [] };
  let o = { branch: [], error: null, session_id: 0, stuff: He, url: null },
    d = !1,
    R = !0,
    y = !1,
    H = 1,
    G = null,
    Se,
    Le,
    Ue = !1;
  f.session.subscribe(async c => {
    (Le = c), Ue && ((H += 1), _e(new URL(location.href), [], !0));
  }),
    (Ue = !0);
  let X = !0,
    T = (Ce = history.state) == null ? void 0 : Ce[W];
  T || ((T = Date.now()), history.replaceState(se(P({}, history.state), { [W]: T }), '', location.href));
  const de = re[T];
  de && ((history.scrollRestoration = 'manual'), scrollTo(de.x, de.y));
  let pe = !1,
    he,
    Ae;
  async function Ne(c, { noscroll: p = !1, replaceState: w = !1, keepfocus: u = !1, state: h = {} }, b) {
    const _ = new URL(c, Fe(document));
    if (X)
      return ge({
        url: _,
        scroll: p ? Ee() : null,
        keepfocus: u,
        redirect_chain: b,
        details: { state: h, replaceState: w },
        accepted: () => {},
        blocked: () => {},
      });
    await te(_);
  }
  async function Oe(c) {
    const p = je(c);
    if (!p) throw new Error('Attempted to prefetch a URL that does not belong to this app');
    return (s.promise = Pe(p, !1)), (s.id = p.id), s.promise;
  }
  async function _e(c, p, w, u) {
    var g, k, S;
    const h = je(c),
      b = (Ae = {});
    let _ = h && (await Pe(h, w));
    if (
      (!_ &&
        c.origin === location.origin &&
        c.pathname === location.pathname &&
        (_ = await ee({ status: 404, error: new Error(`Not found: ${c.pathname}`), url: c, routeId: null })),
      !_)
    )
      return await te(c), !1;
    if (Ae !== b) return !1;
    if (((a.length = 0), _.redirect))
      if (p.length > 10 || p.includes(c.pathname)) _ = await ee({ status: 500, error: new Error('Redirect loop'), url: c, routeId: null });
      else return X ? Ne(new URL(_.redirect, c).href, {}, [...p, c.pathname]) : await te(new URL(_.redirect, location.href)), !1;
    else ((k = (g = _.props) == null ? void 0 : g.page) == null ? void 0 : k.status) >= 400 && (await f.updated.check()) && (await te(c));
    if (((y = !0), u && u.details)) {
      const { details: $ } = u,
        E = $.replaceState ? 0 : 1;
      ($.state[W] = T += E), history[$.replaceState ? 'replaceState' : 'pushState']($.state, '', c);
    }
    if ((d ? ((o = _.state), Se.$set(_.props)) : xe(_), u)) {
      const { scroll: $, keepfocus: E } = u;
      if (!E) {
        const m = document.body,
          A = m.getAttribute('tabindex');
        (S = getSelection()) == null || S.removeAllRanges(),
          (m.tabIndex = -1),
          m.focus(),
          A !== null ? m.setAttribute('tabindex', A) : m.removeAttribute('tabindex');
      }
      if ((await De(), R)) {
        const m = c.hash && document.getElementById(c.hash.slice(1));
        $ ? scrollTo($.x, $.y) : m ? m.scrollIntoView() : scrollTo(0, 0);
      }
    } else await De();
    (s.promise = null), (s.id = null), (R = !0), (y = !1), _.props.page && (he = _.props.page);
    const v = _.state.branch[_.state.branch.length - 1];
    return (X = (v == null ? void 0 : v.module.router) !== !1), !0;
  }
  function xe(c) {
    o = c.state;
    const p = document.querySelector('style[data-sveltekit]');
    if ((p && p.remove(), (he = c.props.page), (Se = new kt({ target: n, props: se(P({}, c.props), { stores: f }), hydrate: !0 })), (d = !0), X)) {
      const w = { from: null, to: new URL(location.href) };
      i.after_navigate.forEach(u => u(w));
    }
  }
  async function me({ url: c, params: p, stuff: w, branch: u, status: h, error: b, routeId: _ }) {
    var m, A;
    const v = u.filter(Boolean),
      g = v.find(U => {
        var O;
        return (O = U.loaded) == null ? void 0 : O.redirect;
      }),
      k = {
        redirect: (m = g == null ? void 0 : g.loaded) == null ? void 0 : m.redirect,
        state: { url: c, params: p, branch: u, error: b, stuff: w, session_id: H },
        props: { components: v.map(U => U.module.default) },
      };
    for (let U = 0; U < v.length; U += 1) {
      const O = v[U].loaded;
      k.props[`props_${U}`] = O ? await O.props : null;
    }
    if (!o.url || c.href !== o.url.href || o.error !== b || o.stuff !== w) {
      k.props.page = { error: b, params: p, routeId: _, status: h, stuff: w, url: c };
      const U = (O, L) => {
        Object.defineProperty(k.props.page, O, {
          get: () => {
            throw new Error(`$page.${O} has been replaced by $page.url.${L}`);
          },
        });
      };
      U('origin', 'origin'), U('path', 'pathname'), U('query', 'searchParams');
    }
    const $ = v[v.length - 1],
      E = (A = $ == null ? void 0 : $.loaded) == null ? void 0 : A.cache;
    if (E) {
      const U = c.pathname + c.search;
      let O = !1;
      const L = () => {
          l.get(U) === k && l.delete(U), x(), clearTimeout(N);
        },
        N = setTimeout(L, E.maxage * 1e3),
        x = f.session.subscribe(() => {
          O && L();
        });
      (O = !0), l.set(U, k);
    }
    return k;
  }
  async function Q({ status: c, error: p, module: w, url: u, params: h, stuff: b, props: _, routeId: v }) {
    const g = { module: w, uses: { params: new Set(), url: !1, session: !1, stuff: !1, dependencies: new Set() }, loaded: null, stuff: b };
    function k(E) {
      const { href: m } = new URL(E, u);
      g.uses.dependencies.add(m);
    }
    _ && g.uses.dependencies.add(u.href);
    const S = {};
    for (const E in h)
      Object.defineProperty(S, E, {
        get() {
          return g.uses.params.add(E), h[E];
        },
        enumerable: !0,
      });
    const $ = Le;
    if (w.load) {
      const E = {
          routeId: v,
          params: S,
          props: _ || {},
          get url() {
            return (g.uses.url = !0), u;
          },
          get session() {
            return (g.uses.session = !0), $;
          },
          get stuff() {
            return (g.uses.stuff = !0), P({}, b);
          },
          fetch(A, U) {
            const O = typeof A == 'string' ? A : A.url;
            return k(O), d ? fetch(A, U) : Nt(A, U);
          },
          status: c != null ? c : null,
          error: p != null ? p : null,
        },
        m = await w.load.call(null, E);
      if (!m) throw new Error('load function must return a value');
      (g.loaded = Me(m)), g.loaded.stuff && (g.stuff = g.loaded.stuff), g.loaded.dependencies && g.loaded.dependencies.forEach(k);
    } else _ && (g.loaded = Me({ props: _ }));
    return g;
  }
  async function Pe({ id: c, url: p, params: w, route: u }, h) {
    var A, U, O;
    if (s.id === c && s.promise) return s.promise;
    if (!h) {
      const L = l.get(c);
      if (L) return L;
    }
    const { a: b, b: _, has_shadow: v } = u,
      g = o.url && {
        url: c !== o.url.pathname + o.url.search,
        params: Object.keys(w).filter(L => o.params[L] !== w[L]),
        session: H !== o.session_id,
      };
    let k = [],
      S = He,
      $ = !1,
      E = 200,
      m = null;
    b.forEach(L => L());
    e: for (let L = 0; L < b.length; L += 1) {
      let N;
      try {
        if (!b[L]) continue;
        const x = await b[L](),
          I = o.branch[L];
        if (
          !I ||
          x !== I.module ||
          (g.url && I.uses.url) ||
          g.params.some(B => I.uses.params.has(B)) ||
          (g.session && I.uses.session) ||
          Array.from(I.uses.dependencies).some(B => a.some(le => le(B))) ||
          ($ && I.uses.stuff)
        ) {
          let B = {};
          const le = v && L === b.length - 1;
          if (le) {
            const ne = await fetch(`${p.pathname}${p.pathname.endsWith('/') ? '' : '/'}__data.json${p.search}`, {
              headers: { 'x-sveltekit-load': 'true' },
            });
            if (ne.ok) {
              const Te = ne.headers.get('x-sveltekit-location');
              if (Te) return { redirect: Te, props: {}, state: o };
              B = ne.status === 204 ? {} : await ne.json();
            } else (E = ne.status), (m = new Error('Failed to load data'));
          }
          if ((m || (N = await Q({ module: x, url: p, params: w, props: B, stuff: S, routeId: u.id })), N && (le && (N.uses.url = !0), N.loaded))) {
            if ((N.loaded.error && ((E = N.loaded.status), (m = N.loaded.error)), N.loaded.redirect))
              return { redirect: N.loaded.redirect, props: {}, state: o };
            N.loaded.stuff && ($ = !0);
          }
        } else N = I;
      } catch (x) {
        (E = 500), (m = Ye(x));
      }
      if (m) {
        for (; L--; )
          if (_[L]) {
            let x,
              I,
              ce = L;
            for (; !(I = k[ce]); ) ce -= 1;
            try {
              if (
                ((x = await Q({ status: E, error: m, module: await _[L](), url: p, params: w, stuff: I.stuff, routeId: u.id })),
                (A = x == null ? void 0 : x.loaded) != null && A.error)
              )
                continue;
              (U = x == null ? void 0 : x.loaded) != null && U.stuff && (S = P(P({}, S), x.loaded.stuff)), (k = k.slice(0, ce + 1).concat(x));
              break e;
            } catch {
              continue;
            }
          }
        return await ee({ status: E, error: m, url: p, routeId: u.id });
      } else (O = N == null ? void 0 : N.loaded) != null && O.stuff && (S = P(P({}, S), N.loaded.stuff)), k.push(N);
    }
    return await me({ url: p, params: w, stuff: S, branch: k, status: E, error: m, routeId: u.id });
  }
  async function ee({ status: c, error: p, url: w, routeId: u }) {
    var v, g;
    const h = {},
      b = await Q({ module: await Ct, url: w, params: h, stuff: {}, routeId: u }),
      _ = await Q({ status: c, error: p, module: await Tt, url: w, params: h, stuff: (b && b.loaded && b.loaded.stuff) || {}, routeId: u });
    return await me({
      url: w,
      params: h,
      stuff: P(P({}, (v = b == null ? void 0 : b.loaded) == null ? void 0 : v.stuff), (g = _ == null ? void 0 : _.loaded) == null ? void 0 : g.stuff),
      branch: [b, _],
      status: c,
      error: p,
      routeId: u,
    });
  }
  function je(c) {
    if (c.origin !== location.origin || !c.pathname.startsWith(t)) return;
    const p = decodeURI(c.pathname.slice(t.length) || '/');
    for (const w of ve) {
      const u = w.exec(p);
      if (u) return { id: c.pathname + c.search, route: w, params: u, url: c };
    }
  }
  async function ge({ url: c, scroll: p, keepfocus: w, redirect_chain: u, details: h, accepted: b, blocked: _ }) {
    const v = o.url;
    let g = !1;
    const k = { from: v, to: c, cancel: () => (g = !0) };
    if ((i.before_navigate.forEach(m => m(k)), g)) {
      _();
      return;
    }
    const S = Lt(c.pathname, r),
      $ = new URL(c.origin + S + c.search + c.hash);
    if ((ke(T), b(), d && f.navigating.set({ from: o.url, to: $ }), await _e($, u, !1, { scroll: p, keepfocus: w, details: h }))) {
      const m = { from: v, to: $ };
      i.after_navigate.forEach(A => A(m)), f.navigating.set(null);
    }
  }
  function te(c) {
    return (location.href = c.href), new Promise(() => {});
  }
  return {
    after_navigate: c => {
      $e(
        () => (
          i.after_navigate.push(c),
          () => {
            const p = i.after_navigate.indexOf(c);
            i.after_navigate.splice(p, 1);
          }
        ),
      );
    },
    before_navigate: c => {
      $e(
        () => (
          i.before_navigate.push(c),
          () => {
            const p = i.before_navigate.indexOf(c);
            i.before_navigate.splice(p, 1);
          }
        ),
      );
    },
    disable_scroll_handling: () => {
      (y || !d) && (R = !1);
    },
    goto: (c, p = {}) => Ne(c, p, []),
    invalidate: c => {
      if (typeof c == 'function') a.push(c);
      else {
        const { href: p } = new URL(c, location.href);
        a.push(w => w === p);
      }
      return (
        G ||
          (G = Promise.resolve().then(async () => {
            await _e(new URL(location.href), [], !0), (G = null);
          })),
        G
      );
    },
    prefetch: async c => {
      const p = new URL(c, Fe(document));
      await Oe(p);
    },
    prefetch_routes: async c => {
      const w = (c ? ve.filter(u => c.some(h => u.exec(h))) : ve).map(u => Promise.all(u.a.map(h => h())));
      await Promise.all(w);
    },
    _start_router: () => {
      (history.scrollRestoration = 'manual'),
        addEventListener('beforeunload', u => {
          let h = !1;
          const b = { from: o.url, to: null, cancel: () => (h = !0) };
          i.before_navigate.forEach(_ => _(b)), h ? (u.preventDefault(), (u.returnValue = '')) : (history.scrollRestoration = 'auto');
        }),
        addEventListener('visibilitychange', () => {
          if (document.visibilityState === 'hidden') {
            ke(T);
            try {
              sessionStorage[tt] = JSON.stringify(re);
            } catch {}
          }
        });
      const c = u => {
        const h = Ge(u);
        h && h.href && h.hasAttribute('sveltekit:prefetch') && Oe(Xe(h));
      };
      let p;
      const w = u => {
        clearTimeout(p),
          (p = setTimeout(() => {
            var h;
            (h = u.target) == null || h.dispatchEvent(new CustomEvent('sveltekit:trigger_prefetch', { bubbles: !0 }));
          }, 20));
      };
      addEventListener('touchstart', c),
        addEventListener('mousemove', w),
        addEventListener('sveltekit:trigger_prefetch', c),
        addEventListener('click', u => {
          if (!X || u.button || u.which !== 1 || u.metaKey || u.ctrlKey || u.shiftKey || u.altKey || u.defaultPrevented) return;
          const h = Ge(u);
          if (!h || !h.href) return;
          const b = h instanceof SVGAElement,
            _ = Xe(h);
          if (!b && _.origin === 'null') return;
          const v = (h.getAttribute('rel') || '').split(/\s+/);
          if (h.hasAttribute('download') || v.includes('external') || h.hasAttribute('sveltekit:reload') || (b ? h.target.baseVal : h.target)) return;
          const [g, k] = _.href.split('#');
          if (k !== void 0 && g === location.href.split('#')[0]) {
            (pe = !0), ke(T), f.page.set(se(P({}, he), { url: _ })), f.page.notify();
            return;
          }
          ge({
            url: _,
            scroll: h.hasAttribute('sveltekit:noscroll') ? Ee() : null,
            keepfocus: !1,
            redirect_chain: [],
            details: { state: {}, replaceState: _.href === location.href },
            accepted: () => u.preventDefault(),
            blocked: () => u.preventDefault(),
          });
        }),
        addEventListener('popstate', u => {
          if (u.state && X) {
            if (u.state[W] === T) return;
            ge({
              url: new URL(location.href),
              scroll: re[u.state[W]],
              keepfocus: !1,
              redirect_chain: [],
              details: null,
              accepted: () => {
                T = u.state[W];
              },
              blocked: () => {
                const h = T - u.state[W];
                history.go(h);
              },
            });
          }
        }),
        addEventListener('hashchange', () => {
          pe && ((pe = !1), history.replaceState(se(P({}, history.state), { [W]: ++T }), '', location.href));
        });
    },
    _hydrate: async ({ status: c, error: p, nodes: w, params: u, routeId: h }) => {
      const b = new URL(location.href),
        _ = [];
      let v = {},
        g,
        k;
      try {
        for (let S = 0; S < w.length; S += 1) {
          const $ = S === w.length - 1;
          let E;
          if ($) {
            const A = document.querySelector('script[sveltekit\\:data-type="props"]');
            A && (E = JSON.parse(A.textContent));
          }
          const m = await Q({ module: await w[S], url: b, params: u, stuff: v, status: $ ? c : void 0, error: $ ? p : void 0, props: E, routeId: h });
          if ((E && (m.uses.dependencies.add(b.href), (m.uses.url = !0)), _.push(m), m && m.loaded))
            if (m.loaded.error) {
              if (p) throw m.loaded.error;
              k = { status: m.loaded.status, error: m.loaded.error, url: b, routeId: h };
            } else m.loaded.stuff && (v = P(P({}, v), m.loaded.stuff));
        }
        g = k ? await ee(k) : await me({ url: b, params: u, stuff: v, branch: _, status: c, error: p, routeId: h });
      } catch (S) {
        if (p) throw S;
        g = await ee({ status: 500, error: Ye(S), url: b, routeId: h });
      }
      g.redirect && (await te(new URL(g.redirect, location.href))), xe(g);
    },
  };
}
async function Vt({ paths: n, target: e, session: t, route: r, spa: l, trailing_slash: a, hydrate: f }) {
  const s = It({ target: e, session: t, base: n.base, trailing_slash: a });
  pt(n),
    f && (await s._hydrate(f)),
    r && (l && s.goto(location.href, { replaceState: !0 }), s._start_router()),
    dispatchEvent(new CustomEvent('sveltekit:start'));
}
export { Vt as start };
