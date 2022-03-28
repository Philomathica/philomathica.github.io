function m() {}
function H(t, n) {
	for (const e in n) t[e] = n[e];
	return t;
}
function T(t) {
	return t();
}
function q() {
	return Object.create(null);
}
function g(t) {
	t.forEach(T);
}
function I(t) {
	return typeof t == 'function';
}
function G(t, n) {
	return t != t ? n == n : t !== n || (t && typeof t == 'object') || typeof t == 'function';
}
function J(t) {
	return Object.keys(t).length === 0;
}
function ot(t, n, e, i) {
	if (t) {
		const c = v(t, n, e, i);
		return t[0](c);
	}
}
function v(t, n, e, i) {
	return t[1] && i ? H(e.ctx.slice(), t[1](i(n))) : e.ctx;
}
function lt(t, n, e, i) {
	if (t[2] && i) {
		const c = t[2](i(e));
		if (n.dirty === void 0) return c;
		if (typeof c == 'object') {
			const s = [],
				o = Math.max(n.dirty.length, c.length);
			for (let l = 0; l < o; l += 1) s[l] = n.dirty[l] | c[l];
			return s;
		}
		return n.dirty | c;
	}
	return n.dirty;
}
function ut(t, n, e, i, c, s) {
	if (c) {
		const o = v(n, e, i, s);
		t.p(o, c);
	}
}
function st(t) {
	if (t.ctx.length > 32) {
		const n = [],
			e = t.ctx.length / 32;
		for (let i = 0; i < e; i++) n[i] = -1;
		return n;
	}
	return -1;
}
let k = !1;
function K() {
	k = !0;
}
function L() {
	k = !1;
}
function W(t, n, e, i) {
	for (; t < n; ) {
		const c = t + ((n - t) >> 1);
		e(c) <= i ? (t = c + 1) : (n = c);
	}
	return t;
}
function Q(t) {
	if (t.hydrate_init) return;
	t.hydrate_init = !0;
	let n = t.childNodes;
	if (t.nodeName === 'HEAD') {
		const r = [];
		for (let u = 0; u < n.length; u++) {
			const a = n[u];
			a.claim_order !== void 0 && r.push(a);
		}
		n = r;
	}
	const e = new Int32Array(n.length + 1),
		i = new Int32Array(n.length);
	e[0] = -1;
	let c = 0;
	for (let r = 0; r < n.length; r++) {
		const u = n[r].claim_order,
			a = (c > 0 && n[e[c]].claim_order <= u ? c + 1 : W(1, c, (x) => n[e[x]].claim_order, u)) - 1;
		i[r] = e[a] + 1;
		const f = a + 1;
		(e[f] = r), (c = Math.max(f, c));
	}
	const s = [],
		o = [];
	let l = n.length - 1;
	for (let r = e[c] + 1; r != 0; r = i[r - 1]) {
		for (s.push(n[r - 1]); l >= r; l--) o.push(n[l]);
		l--;
	}
	for (; l >= 0; l--) o.push(n[l]);
	s.reverse(), o.sort((r, u) => r.claim_order - u.claim_order);
	for (let r = 0, u = 0; r < o.length; r++) {
		for (; u < s.length && o[r].claim_order >= s[u].claim_order; ) u++;
		const a = u < s.length ? s[u] : null;
		t.insertBefore(o[r], a);
	}
}
function R(t, n) {
	if (k) {
		for (
			Q(t),
				(t.actual_end_child === void 0 ||
					(t.actual_end_child !== null && t.actual_end_child.parentElement !== t)) &&
					(t.actual_end_child = t.firstChild);
			t.actual_end_child !== null && t.actual_end_child.claim_order === void 0;

		)
			t.actual_end_child = t.actual_end_child.nextSibling;
		n !== t.actual_end_child
			? (n.claim_order !== void 0 || n.parentNode !== t) && t.insertBefore(n, t.actual_end_child)
			: (t.actual_end_child = n.nextSibling);
	} else (n.parentNode !== t || n.nextSibling !== null) && t.appendChild(n);
}
function ft(t, n, e) {
	k && !e ? R(t, n) : (n.parentNode !== t || n.nextSibling != e) && t.insertBefore(n, e || null);
}
function U(t) {
	t.parentNode.removeChild(t);
}
function V(t) {
	return document.createElement(t);
}
function A(t) {
	return document.createTextNode(t);
}
function at() {
	return A(' ');
}
function dt() {
	return A('');
}
function _t(t, n, e) {
	e == null ? t.removeAttribute(n) : t.getAttribute(n) !== e && t.setAttribute(n, e);
}
function X(t) {
	return Array.from(t.childNodes);
}
function Y(t) {
	t.claim_info === void 0 && (t.claim_info = { last_index: 0, total_claimed: 0 });
}
function O(t, n, e, i, c = !1) {
	Y(t);
	const s = (() => {
		for (let o = t.claim_info.last_index; o < t.length; o++) {
			const l = t[o];
			if (n(l)) {
				const r = e(l);
				return r === void 0 ? t.splice(o, 1) : (t[o] = r), c || (t.claim_info.last_index = o), l;
			}
		}
		for (let o = t.claim_info.last_index - 1; o >= 0; o--) {
			const l = t[o];
			if (n(l)) {
				const r = e(l);
				return (
					r === void 0 ? t.splice(o, 1) : (t[o] = r),
					c ? r === void 0 && t.claim_info.last_index-- : (t.claim_info.last_index = o),
					l
				);
			}
		}
		return i();
	})();
	return (s.claim_order = t.claim_info.total_claimed), (t.claim_info.total_claimed += 1), s;
}
function Z(t, n, e, i) {
	return O(
		t,
		(c) => c.nodeName === n,
		(c) => {
			const s = [];
			for (let o = 0; o < c.attributes.length; o++) {
				const l = c.attributes[o];
				e[l.name] || s.push(l.name);
			}
			s.forEach((o) => c.removeAttribute(o));
		},
		() => i(n)
	);
}
function ht(t, n, e) {
	return Z(t, n, e, V);
}
function tt(t, n) {
	return O(
		t,
		(e) => e.nodeType === 3,
		(e) => {
			const i = '' + n;
			if (e.data.startsWith(i)) {
				if (e.data.length !== i.length) return e.splitText(i.length);
			} else e.data = i;
		},
		() => A(n),
		!0
	);
}
function mt(t) {
	return tt(t, ' ');
}
function pt(t, n) {
	(n = '' + n), t.wholeText !== n && (t.data = n);
}
function yt(t, n, e, i) {
	e === null ? t.style.removeProperty(n) : t.style.setProperty(n, e, i ? 'important' : '');
}
let y;
function p(t) {
	y = t;
}
function N() {
	if (!y) throw new Error('Function called outside component initialization');
	return y;
}
function gt(t) {
	N().$$.on_mount.push(t);
}
function xt(t) {
	N().$$.after_update.push(t);
}
function bt(t, n) {
	N().$$.context.set(t, n);
}
const h = [],
	z = [],
	$ = [],
	B = [],
	P = Promise.resolve();
let j = !1;
function D() {
	j || ((j = !0), P.then(F));
}
function $t() {
	return D(), P;
}
function S(t) {
	$.push(t);
}
const E = new Set();
let b = 0;
function F() {
	const t = y;
	do {
		for (; b < h.length; ) {
			const n = h[b];
			b++, p(n), nt(n.$$);
		}
		for (p(null), h.length = 0, b = 0; z.length; ) z.pop()();
		for (let n = 0; n < $.length; n += 1) {
			const e = $[n];
			E.has(e) || (E.add(e), e());
		}
		$.length = 0;
	} while (h.length);
	for (; B.length; ) B.pop()();
	(j = !1), E.clear(), p(t);
}
function nt(t) {
	if (t.fragment !== null) {
		t.update(), g(t.before_update);
		const n = t.dirty;
		(t.dirty = [-1]), t.fragment && t.fragment.p(t.ctx, n), t.after_update.forEach(S);
	}
}
const w = new Set();
let d;
function wt() {
	d = { r: 0, c: [], p: d };
}
function kt() {
	d.r || g(d.c), (d = d.p);
}
function et(t, n) {
	t && t.i && (w.delete(t), t.i(n));
}
function Et(t, n, e, i) {
	if (t && t.o) {
		if (w.has(t)) return;
		w.add(t),
			d.c.push(() => {
				w.delete(t), i && (e && t.d(1), i());
			}),
			t.o(n);
	}
}
function jt(t, n) {
	const e = {},
		i = {},
		c = { $$scope: 1 };
	let s = t.length;
	for (; s--; ) {
		const o = t[s],
			l = n[s];
		if (l) {
			for (const r in o) r in l || (i[r] = 1);
			for (const r in l) c[r] || ((e[r] = l[r]), (c[r] = 1));
			t[s] = l;
		} else for (const r in o) c[r] = 1;
	}
	for (const o in i) o in e || (e[o] = void 0);
	return e;
}
function St(t) {
	return typeof t == 'object' && t !== null ? t : {};
}
function At(t) {
	t && t.c();
}
function Nt(t, n) {
	t && t.l(n);
}
function it(t, n, e, i) {
	const { fragment: c, on_mount: s, on_destroy: o, after_update: l } = t.$$;
	c && c.m(n, e),
		i ||
			S(() => {
				const r = s.map(T).filter(I);
				o ? o.push(...r) : g(r), (t.$$.on_mount = []);
			}),
		l.forEach(S);
}
function rt(t, n) {
	const e = t.$$;
	e.fragment !== null &&
		(g(e.on_destroy),
		e.fragment && e.fragment.d(n),
		(e.on_destroy = e.fragment = null),
		(e.ctx = []));
}
function ct(t, n) {
	t.$$.dirty[0] === -1 && (h.push(t), D(), t.$$.dirty.fill(0)),
		(t.$$.dirty[(n / 31) | 0] |= 1 << n % 31);
}
function Ct(t, n, e, i, c, s, o, l = [-1]) {
	const r = y;
	p(t);
	const u = (t.$$ = {
		fragment: null,
		ctx: null,
		props: s,
		update: m,
		not_equal: c,
		bound: q(),
		on_mount: [],
		on_destroy: [],
		on_disconnect: [],
		before_update: [],
		after_update: [],
		context: new Map(n.context || (r ? r.$$.context : [])),
		callbacks: q(),
		dirty: l,
		skip_bound: !1,
		root: n.target || r.$$.root
	});
	o && o(u.root);
	let a = !1;
	if (
		((u.ctx = e
			? e(t, n.props || {}, (f, x, ...C) => {
					const M = C.length ? C[0] : x;
					return (
						u.ctx &&
							c(u.ctx[f], (u.ctx[f] = M)) &&
							(!u.skip_bound && u.bound[f] && u.bound[f](M), a && ct(t, f)),
						x
					);
			  })
			: []),
		u.update(),
		(a = !0),
		g(u.before_update),
		(u.fragment = i ? i(u.ctx) : !1),
		n.target)
	) {
		if (n.hydrate) {
			K();
			const f = X(n.target);
			u.fragment && u.fragment.l(f), f.forEach(U);
		} else u.fragment && u.fragment.c();
		n.intro && et(t.$$.fragment), it(t, n.target, n.anchor, n.customElement), L(), F();
	}
	p(r);
}
class Mt {
	$destroy() {
		rt(this, 1), (this.$destroy = m);
	}
	$on(n, e) {
		const i = this.$$.callbacks[n] || (this.$$.callbacks[n] = []);
		return (
			i.push(e),
			() => {
				const c = i.indexOf(e);
				c !== -1 && i.splice(c, 1);
			}
		);
	}
	$set(n) {
		this.$$set && !J(n) && ((this.$$.skip_bound = !0), this.$$set(n), (this.$$.skip_bound = !1));
	}
}
const _ = [];
function qt(t, n = m) {
	let e;
	const i = new Set();
	function c(l) {
		if (G(t, l) && ((t = l), e)) {
			const r = !_.length;
			for (const u of i) u[1](), _.push(u, t);
			if (r) {
				for (let u = 0; u < _.length; u += 2) _[u][0](_[u + 1]);
				_.length = 0;
			}
		}
	}
	function s(l) {
		c(l(t));
	}
	function o(l, r = m) {
		const u = [l, r];
		return (
			i.add(u),
			i.size === 1 && (e = n(c) || m),
			l(t),
			() => {
				i.delete(u), i.size === 0 && (e(), (e = null));
			}
		);
	}
	return { set: c, update: s, subscribe: o };
}
export {
	St as A,
	rt as B,
	H as C,
	qt as D,
	$t as E,
	ot as F,
	ut as G,
	st as H,
	lt as I,
	R as J,
	m as K,
	Mt as S,
	X as a,
	_t as b,
	ht as c,
	U as d,
	V as e,
	yt as f,
	ft as g,
	tt as h,
	Ct as i,
	pt as j,
	at as k,
	dt as l,
	mt as m,
	wt as n,
	Et as o,
	kt as p,
	et as q,
	bt as r,
	G as s,
	A as t,
	xt as u,
	gt as v,
	At as w,
	Nt as x,
	it as y,
	jt as z
};
