import {
	S as r,
	i as c,
	s as i,
	e as h,
	t as d,
	c as u,
	a as f,
	h as m,
	d as o,
	b as p,
	g as _,
	J as x,
	K as l
} from '../chunks/vendor-f0095a1c.js';
function y(n) {
	let t, s;
	return {
		c() {
			(t = h('h1')), (s = d('Hello world!')), this.h();
		},
		l(e) {
			t = u(e, 'H1', { class: !0 });
			var a = f(t);
			(s = m(a, 'Hello world!')), a.forEach(o), this.h();
		},
		h() {
			p(t, 'class', 'text-3xl font-bold underline');
		},
		m(e, a) {
			_(e, t, a), x(t, s);
		},
		p: l,
		i: l,
		o: l,
		d(e) {
			e && o(t);
		}
	};
}
const b = !1,
	g = !1;
class v extends r {
	constructor(t) {
		super();
		c(this, t, null, y, i, {});
	}
}
export { v as default, b as hydrate, g as router };
