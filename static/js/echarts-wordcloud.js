!function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e(require("echarts")) : "function" == typeof define && define.amd ? define(["echarts"], e) : "object" == typeof exports ? exports["echarts-wordcloud"] = e(require("echarts")) : t["echarts-wordcloud"] = e(t.echarts)
}(this, function (t) {
    return function (t) {
        function e(n) {
            if (r[n]) return r[n].exports;
            var i = r[n] = {i: n, l: !1, exports: {}};
            return t[n].call(i.exports, i, i.exports, e), i.l = !0, i.exports
        }

        var r = {};
        return e.m = t, e.c = r, e.d = function (t, r, n) {
            e.o(t, r) || Object.defineProperty(t, r, {configurable: !1, enumerable: !0, get: n})
        }, e.n = function (t) {
            var r = t && t.__esModule ? function () {
                return t.default
            } : function () {
                return t
            };
            return e.d(r, "a", r), r
        }, e.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, e.p = "", e(e.s = 25)
    }([function (t, e) {
        function r(t, e) {
            G[t] = e
        }

        function n(t) {
            if (null == t || "object" != typeof t) return t;
            var e = t, r = W.call(t);
            if ("[object Array]" === r) {
                e = [];
                for (var i = 0, a = t.length; i < a; i++) e[i] = n(t[i])
            } else if (E[r]) {
                var o = t.constructor;
                if (t.constructor.from) e = o.from(t); else {
                    e = new o(t.length);
                    for (var i = 0, a = t.length; i < a; i++) e[i] = n(t[i])
                }
            } else if (!N[r] && !F(t) && !T(t)) {
                e = {};
                for (var s in t) t.hasOwnProperty(s) && (e[s] = n(t[s]))
            }
            return e
        }

        function i(t, e, r) {
            if (!S(e) || !S(t)) return r ? n(e) : t;
            for (var a in e) if (e.hasOwnProperty(a)) {
                var o = t[a], s = e[a];
                !S(s) || !S(o) || w(s) || w(o) || T(s) || T(o) || M(s) || M(o) || F(s) || F(o) ? !r && a in t || (t[a] = n(e[a], !0)) : i(o, s, r)
            }
            return t
        }

        function a(t, e) {
            for (var r = t[0], n = 1, a = t.length; n < a; n++) r = i(r, t[n], e);
            return r
        }

        function o(t, e) {
            for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
            return t
        }

        function s(t, e, r) {
            for (var n in e) e.hasOwnProperty(n) && (r ? null != e[n] : null == t[n]) && (t[n] = e[n]);
            return t
        }

        function l() {
            return $ || ($ = U().getContext("2d")), $
        }

        function h(t, e) {
            if (t) {
                if (t.indexOf) return t.indexOf(e);
                for (var r = 0, n = t.length; r < n; r++) if (t[r] === e) return r
            }
            return -1
        }

        function u(t, e) {
            function r() {
            }

            var n = t.prototype;
            r.prototype = e.prototype, t.prototype = new r;
            for (var i in n) t.prototype[i] = n[i];
            t.prototype.constructor = t, t.superClass = e
        }

        function c(t, e, r) {
            t = "prototype" in t ? t.prototype : t, e = "prototype" in e ? e.prototype : e, s(t, e, r)
        }

        function f(t) {
            if (t) return "string" != typeof t && "number" == typeof t.length
        }

        function d(t, e, r) {
            if (t && e) if (t.forEach && t.forEach === H) t.forEach(e, r); else if (t.length === +t.length) for (var n = 0, i = t.length; n < i; n++) e.call(r, t[n], n, t); else for (var a in t) t.hasOwnProperty(a) && e.call(r, t[a], a, t)
        }

        function v(t, e, r) {
            if (t && e) {
                if (t.map && t.map === Y) return t.map(e, r);
                for (var n = [], i = 0, a = t.length; i < a; i++) n.push(e.call(r, t[i], i, t));
                return n
            }
        }

        function g(t, e, r, n) {
            if (t && e) {
                if (t.reduce && t.reduce === V) return t.reduce(e, r, n);
                for (var i = 0, a = t.length; i < a; i++) r = e.call(n, r, t[i], i, t);
                return r
            }
        }

        function p(t, e, r) {
            if (t && e) {
                if (t.filter && t.filter === j) return t.filter(e, r);
                for (var n = [], i = 0, a = t.length; i < a; i++) e.call(r, t[i], i, t) && n.push(t[i]);
                return n
            }
        }

        function m(t, e, r) {
            if (t && e) for (var n = 0, i = t.length; n < i; n++) if (e.call(r, t[n], n, t)) return t[n]
        }

        function x(t, e) {
            var r = X.call(arguments, 2);
            return function () {
                return t.apply(e, r.concat(X.call(arguments)))
            }
        }

        function y(t) {
            var e = X.call(arguments, 1);
            return function () {
                return t.apply(this, e.concat(X.call(arguments)))
            }
        }

        function w(t) {
            return "[object Array]" === W.call(t)
        }

        function _(t) {
            return "function" == typeof t
        }

        function b(t) {
            return "[object String]" === W.call(t)
        }

        function S(t) {
            var e = typeof t;
            return "function" === e || !!t && "object" == e
        }

        function M(t) {
            return !!N[W.call(t)]
        }

        function T(t) {
            return "object" == typeof t && "number" == typeof t.nodeType && "object" == typeof t.ownerDocument
        }

        function k(t) {
            return t !== t
        }

        function C(t) {
            for (var e = 0, r = arguments.length; e < r; e++) if (null != arguments[e]) return arguments[e]
        }

        function P(t, e) {
            return null != t ? t : e
        }

        function I(t, e, r) {
            return null != t ? t : null != e ? e : r
        }

        function A() {
            return Function.call.apply(X, arguments)
        }

        function O(t) {
            if ("number" == typeof t) return [t, t, t, t];
            var e = t.length;
            return 2 === e ? [t[0], t[1], t[0], t[1]] : 3 === e ? [t[0], t[1], t[2], t[1]] : t
        }

        function D(t, e) {
            if (!t) throw new Error(e)
        }

        function L(t) {
            t[Z] = !0
        }

        function F(t) {
            return t[Z]
        }

        function R(t) {
            t && d(t, function (t, e) {
                this.set(e, t)
            }, this)
        }

        function B(t) {
            return new R(t)
        }

        function z() {
        }

        var N = {
                "[object Function]": 1,
                "[object RegExp]": 1,
                "[object Date]": 1,
                "[object Error]": 1,
                "[object CanvasGradient]": 1,
                "[object CanvasPattern]": 1,
                "[object Image]": 1,
                "[object Canvas]": 1
            }, E = {
                "[object Int8Array]": 1,
                "[object Uint8Array]": 1,
                "[object Uint8ClampedArray]": 1,
                "[object Int16Array]": 1,
                "[object Uint16Array]": 1,
                "[object Int32Array]": 1,
                "[object Uint32Array]": 1,
                "[object Float32Array]": 1,
                "[object Float64Array]": 1
            }, W = Object.prototype.toString, q = Array.prototype, H = q.forEach, j = q.filter, X = q.slice, Y = q.map,
            V = q.reduce, G = {}, U = function () {
                return G.createCanvas()
            };
        G.createCanvas = function () {
            return document.createElement("canvas")
        };
        var $, Z = "__ec_primitive__";
        R.prototype = {
            constructor: R, get: function (t) {
                return this["_ec_" + t]
            }, set: function (t, e) {
                return this["_ec_" + t] = e, e
            }, each: function (t, e) {
                void 0 !== e && (t = x(t, e));
                for (var r in this) this.hasOwnProperty(r) && t(this[r], r.slice(4))
            }, removeKey: function (t) {
                delete this["_ec_" + t]
            }
        }, e.$override = r, e.clone = n, e.merge = i, e.mergeAll = a, e.extend = o, e.defaults = s, e.createCanvas = U, e.getContext = l, e.indexOf = h, e.inherits = u, e.mixin = c, e.isArrayLike = f, e.each = d, e.map = v, e.reduce = g, e.filter = p, e.find = m, e.bind = x, e.curry = y, e.isArray = w, e.isFunction = _, e.isString = b, e.isObject = S, e.isBuiltInObject = M, e.isDom = T, e.eqNaN = k, e.retrieve = C, e.retrieve2 = P, e.retrieve3 = I, e.slice = A, e.normalizeCssArray = O, e.assert = D, e.setAsPrimitive = L, e.isPrimitive = F, e.createHashMap = B, e.noop = z
    }, function (t, e, r) {
        function n(t) {
            i.call(this, t), this.path = null
        }

        var i = r(12), a = r(0), o = r(6), s = r(50), l = r(56), h = l.prototype.getCanvasPattern, u = Math.abs,
            c = new o(!0);
        n.prototype = {
            constructor: n, type: "path", __dirtyPath: !0, strokeContainThreshold: 5, brush: function (t, e) {
                var r = this.style, n = this.path || c, i = r.hasStroke(), a = r.hasFill(), o = r.fill, s = r.stroke,
                    l = a && !!o.colorStops, u = i && !!s.colorStops, f = a && !!o.image, d = i && !!s.image;
                if (r.bind(t, this, e), this.setTransform(t), this.__dirty) {
                    var v;
                    l && (v = v || this.getBoundingRect(), this._fillGradient = r.getGradient(t, o, v)), u && (v = v || this.getBoundingRect(), this._strokeGradient = r.getGradient(t, s, v))
                }
                l ? t.fillStyle = this._fillGradient : f && (t.fillStyle = h.call(o, t)), u ? t.strokeStyle = this._strokeGradient : d && (t.strokeStyle = h.call(s, t));
                var g = r.lineDash, p = r.lineDashOffset, m = !!t.setLineDash, x = this.getGlobalScale();
                n.setScale(x[0], x[1]), this.__dirtyPath || g && !m && i ? (n.beginPath(t), g && !m && (n.setLineDash(g), n.setLineDashOffset(p)), this.buildPath(n, this.shape, !1), this.path && (this.__dirtyPath = !1)) : (t.beginPath(), this.path.rebuildPath(t)), a && n.fill(t), g && m && (t.setLineDash(g), t.lineDashOffset = p), i && n.stroke(t), g && m && t.setLineDash([]), this.restoreTransform(t), null != r.text && this.drawRectText(t, this.getBoundingRect())
            }, buildPath: function (t, e, r) {
            }, createPathProxy: function () {
                this.path = new o
            }, getBoundingRect: function () {
                var t = this._rect, e = this.style, r = !t;
                if (r) {
                    var n = this.path;
                    n || (n = this.path = new o), this.__dirtyPath && (n.beginPath(), this.buildPath(n, this.shape, !1)), t = n.getBoundingRect()
                }
                if (this._rect = t, e.hasStroke()) {
                    var i = this._rectWithStroke || (this._rectWithStroke = t.clone());
                    if (this.__dirty || r) {
                        i.copy(t);
                        var a = e.lineWidth, s = e.strokeNoScale ? this.getLineScale() : 1;
                        e.hasFill() || (a = Math.max(a, this.strokeContainThreshold || 4)), s > 1e-10 && (i.width += a / s, i.height += a / s, i.x -= a / s / 2, i.y -= a / s / 2)
                    }
                    return i
                }
                return t
            }, contain: function (t, e) {
                var r = this.transformCoordToLocal(t, e), n = this.getBoundingRect(), i = this.style;
                if (t = r[0], e = r[1], n.contain(t, e)) {
                    var a = this.path.data;
                    if (i.hasStroke()) {
                        var o = i.lineWidth, l = i.strokeNoScale ? this.getLineScale() : 1;
                        if (l > 1e-10 && (i.hasFill() || (o = Math.max(o, this.strokeContainThreshold)), s.containStroke(a, o / l, t, e))) return !0
                    }
                    if (i.hasFill()) return s.contain(a, t, e)
                }
                return !1
            }, dirty: function (t) {
                null == t && (t = !0), t && (this.__dirtyPath = t, this._rect = null), this.__dirty = !0, this.__zr && this.__zr.refresh(), this.__clipTarget && this.__clipTarget.dirty()
            }, animateShape: function (t) {
                return this.animate("shape", t)
            }, attrKV: function (t, e) {
                "shape" === t ? (this.setShape(e), this.__dirtyPath = !0, this._rect = null) : i.prototype.attrKV.call(this, t, e)
            }, setShape: function (t, e) {
                var r = this.shape;
                if (r) {
                    if (a.isObject(t)) for (var n in t) t.hasOwnProperty(n) && (r[n] = t[n]); else r[t] = e;
                    this.dirty(!0)
                }
                return this
            }, getLineScale: function () {
                var t = this.transform;
                return t && u(t[0] - 1) > 1e-10 && u(t[3] - 1) > 1e-10 ? Math.sqrt(u(t[0] * t[3] - t[2] * t[1])) : 1
            }
        }, n.extend = function (t) {
            var e = function (e) {
                n.call(this, e), t.style && this.style.extendFrom(t.style, !1);
                var r = t.shape;
                if (r) {
                    this.shape = this.shape || {};
                    var i = this.shape;
                    for (var a in r) !i.hasOwnProperty(a) && r.hasOwnProperty(a) && (i[a] = r[a])
                }
                t.init && t.init.call(this, e)
            };
            a.inherits(e, n);
            for (var r in t) "style" !== r && "shape" !== r && (e.prototype[r] = t[r]);
            return e
        }, a.inherits(n, i);
        var f = n;
        t.exports = f
    }, function (t, e) {
        function r(t, e) {
            var r = new S(2);
            return null == t && (t = 0), null == e && (e = 0), r[0] = t, r[1] = e, r
        }

        function n(t, e) {
            return t[0] = e[0], t[1] = e[1], t
        }

        function i(t) {
            var e = new S(2);
            return e[0] = t[0], e[1] = t[1], e
        }

        function a(t, e, r) {
            return t[0] = e, t[1] = r, t
        }

        function o(t, e, r) {
            return t[0] = e[0] + r[0], t[1] = e[1] + r[1], t
        }

        function s(t, e, r, n) {
            return t[0] = e[0] + r[0] * n, t[1] = e[1] + r[1] * n, t
        }

        function l(t, e, r) {
            return t[0] = e[0] - r[0], t[1] = e[1] - r[1], t
        }

        function h(t) {
            return Math.sqrt(u(t))
        }

        function u(t) {
            return t[0] * t[0] + t[1] * t[1]
        }

        function c(t, e, r) {
            return t[0] = e[0] * r[0], t[1] = e[1] * r[1], t
        }

        function f(t, e, r) {
            return t[0] = e[0] / r[0], t[1] = e[1] / r[1], t
        }

        function d(t, e) {
            return t[0] * e[0] + t[1] * e[1]
        }

        function v(t, e, r) {
            return t[0] = e[0] * r, t[1] = e[1] * r, t
        }

        function g(t, e) {
            var r = h(e);
            return 0 === r ? (t[0] = 0, t[1] = 0) : (t[0] = e[0] / r, t[1] = e[1] / r), t
        }

        function p(t, e) {
            return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]))
        }

        function m(t, e) {
            return (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1])
        }

        function x(t, e) {
            return t[0] = -e[0], t[1] = -e[1], t
        }

        function y(t, e, r, n) {
            return t[0] = e[0] + n * (r[0] - e[0]), t[1] = e[1] + n * (r[1] - e[1]), t
        }

        function w(t, e, r) {
            var n = e[0], i = e[1];
            return t[0] = r[0] * n + r[2] * i + r[4], t[1] = r[1] * n + r[3] * i + r[5], t
        }

        function _(t, e, r) {
            return t[0] = Math.min(e[0], r[0]), t[1] = Math.min(e[1], r[1]), t
        }

        function b(t, e, r) {
            return t[0] = Math.max(e[0], r[0]), t[1] = Math.max(e[1], r[1]), t
        }

        var S = "undefined" == typeof Float32Array ? Array : Float32Array, M = h, T = u, k = p, C = m;
        e.create = r, e.copy = n, e.clone = i, e.set = a, e.add = o, e.scaleAndAdd = s, e.sub = l, e.len = h, e.length = M, e.lenSquare = u, e.lengthSquare = T, e.mul = c, e.div = f, e.dot = d, e.scale = v, e.normalize = g, e.distance = p, e.dist = k, e.distanceSquare = m, e.distSquare = C, e.negate = x, e.lerp = y, e.applyTransform = w, e.min = _, e.max = b
    }, function (t, e, r) {
        function n(t, e, r, n) {
            r < 0 && (t += r, r = -r), n < 0 && (e += n, n = -n), this.x = t, this.y = e, this.width = r, this.height = n
        }

        var i = r(2), a = r(8), o = i.applyTransform, s = Math.min, l = Math.max;
        n.prototype = {
            constructor: n, union: function (t) {
                var e = s(t.x, this.x), r = s(t.y, this.y);
                this.width = l(t.x + t.width, this.x + this.width) - e, this.height = l(t.y + t.height, this.y + this.height) - r, this.x = e, this.y = r
            }, applyTransform: function () {
                var t = [], e = [], r = [], n = [];
                return function (i) {
                    if (i) {
                        t[0] = r[0] = this.x, t[1] = n[1] = this.y, e[0] = n[0] = this.x + this.width, e[1] = r[1] = this.y + this.height, o(t, t, i), o(e, e, i), o(r, r, i), o(n, n, i), this.x = s(t[0], e[0], r[0], n[0]), this.y = s(t[1], e[1], r[1], n[1]);
                        var a = l(t[0], e[0], r[0], n[0]), h = l(t[1], e[1], r[1], n[1]);
                        this.width = a - this.x, this.height = h - this.y
                    }
                }
            }(), calculateTransform: function (t) {
                var e = this, r = t.width / e.width, n = t.height / e.height, i = a.create();
                return a.translate(i, i, [-e.x, -e.y]), a.scale(i, i, [r, n]), a.translate(i, i, [t.x, t.y]), i
            }, intersect: function (t) {
                if (!t) return !1;
                t instanceof n || (t = n.create(t));
                var e = this, r = e.x, i = e.x + e.width, a = e.y, o = e.y + e.height, s = t.x, l = t.x + t.width,
                    h = t.y, u = t.y + t.height;
                return !(i < s || l < r || o < h || u < a)
            }, contain: function (t, e) {
                var r = this;
                return t >= r.x && t <= r.x + r.width && e >= r.y && e <= r.y + r.height
            }, clone: function () {
                return new n(this.x, this.y, this.width, this.height)
            }, copy: function (t) {
                this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height
            }, plain: function () {
                return {x: this.x, y: this.y, width: this.width, height: this.height}
            }
        }, n.create = function (t) {
            return new n(t.x, t.y, t.width, t.height)
        };
        var h = n;
        t.exports = h
    }, function (t, e, r) {
        function n(t) {
            return t > -b && t < b
        }

        function i(t) {
            return t > b || t < -b
        }

        function a(t, e, r, n, i) {
            var a = 1 - i;
            return a * a * (a * t + 3 * i * e) + i * i * (i * n + 3 * a * r)
        }

        function o(t, e, r, n, i) {
            var a = 1 - i;
            return 3 * (((e - t) * a + 2 * (r - e) * i) * a + (n - r) * i * i)
        }

        function s(t, e, r, i, a, o) {
            var s = i + 3 * (e - r) - t, l = 3 * (r - 2 * e + t), h = 3 * (e - t), u = t - a, c = l * l - 3 * s * h,
                f = l * h - 9 * s * u, d = h * h - 3 * l * u, v = 0;
            if (n(c) && n(f)) if (n(l)) o[0] = 0; else {
                var g = -h / l;
                g >= 0 && g <= 1 && (o[v++] = g)
            } else {
                var p = f * f - 4 * c * d;
                if (n(p)) {
                    var m = f / c, g = -l / s + m, x = -m / 2;
                    g >= 0 && g <= 1 && (o[v++] = g), x >= 0 && x <= 1 && (o[v++] = x)
                } else if (p > 0) {
                    var y = _(p), b = c * l + 1.5 * s * (-f + y), S = c * l + 1.5 * s * (-f - y);
                    b = b < 0 ? -w(-b, T) : w(b, T), S = S < 0 ? -w(-S, T) : w(S, T);
                    var g = (-l - (b + S)) / (3 * s);
                    g >= 0 && g <= 1 && (o[v++] = g)
                } else {
                    var k = (2 * c * l - 3 * s * f) / (2 * _(c * c * c)), C = Math.acos(k) / 3, P = _(c),
                        I = Math.cos(C), g = (-l - 2 * P * I) / (3 * s), x = (-l + P * (I + M * Math.sin(C))) / (3 * s),
                        A = (-l + P * (I - M * Math.sin(C))) / (3 * s);
                    g >= 0 && g <= 1 && (o[v++] = g), x >= 0 && x <= 1 && (o[v++] = x), A >= 0 && A <= 1 && (o[v++] = A)
                }
            }
            return v
        }

        function l(t, e, r, a, o) {
            var s = 6 * r - 12 * e + 6 * t, l = 9 * e + 3 * a - 3 * t - 9 * r, h = 3 * e - 3 * t, u = 0;
            if (n(l)) {
                if (i(s)) {
                    var c = -h / s;
                    c >= 0 && c <= 1 && (o[u++] = c)
                }
            } else {
                var f = s * s - 4 * l * h;
                if (n(f)) o[0] = -s / (2 * l); else if (f > 0) {
                    var d = _(f), c = (-s + d) / (2 * l), v = (-s - d) / (2 * l);
                    c >= 0 && c <= 1 && (o[u++] = c), v >= 0 && v <= 1 && (o[u++] = v)
                }
            }
            return u
        }

        function h(t, e, r, n, i, a) {
            var o = (e - t) * i + t, s = (r - e) * i + e, l = (n - r) * i + r, h = (s - o) * i + o, u = (l - s) * i + s,
                c = (u - h) * i + h;
            a[0] = t, a[1] = o, a[2] = h, a[3] = c, a[4] = c, a[5] = u, a[6] = l, a[7] = n
        }

        function u(t, e, r, n, i, o, s, l, h, u, c) {
            var f, d, v, g, p, m = .005, x = 1 / 0;
            k[0] = h, k[1] = u;
            for (var w = 0; w < 1; w += .05) C[0] = a(t, r, i, s, w), C[1] = a(e, n, o, l, w), (g = y(k, C)) < x && (f = w, x = g);
            x = 1 / 0;
            for (var b = 0; b < 32 && !(m < S); b++) d = f - m, v = f + m, C[0] = a(t, r, i, s, d), C[1] = a(e, n, o, l, d), g = y(C, k), d >= 0 && g < x ? (f = d, x = g) : (P[0] = a(t, r, i, s, v), P[1] = a(e, n, o, l, v), p = y(P, k), v <= 1 && p < x ? (f = v, x = p) : m *= .5);
            return c && (c[0] = a(t, r, i, s, f), c[1] = a(e, n, o, l, f)), _(x)
        }

        function c(t, e, r, n) {
            var i = 1 - n;
            return i * (i * t + 2 * n * e) + n * n * r
        }

        function f(t, e, r, n) {
            return 2 * ((1 - n) * (e - t) + n * (r - e))
        }

        function d(t, e, r, a, o) {
            var s = t - 2 * e + r, l = 2 * (e - t), h = t - a, u = 0;
            if (n(s)) {
                if (i(l)) {
                    var c = -h / l;
                    c >= 0 && c <= 1 && (o[u++] = c)
                }
            } else {
                var f = l * l - 4 * s * h;
                if (n(f)) {
                    var c = -l / (2 * s);
                    c >= 0 && c <= 1 && (o[u++] = c)
                } else if (f > 0) {
                    var d = _(f), c = (-l + d) / (2 * s), v = (-l - d) / (2 * s);
                    c >= 0 && c <= 1 && (o[u++] = c), v >= 0 && v <= 1 && (o[u++] = v)
                }
            }
            return u
        }

        function v(t, e, r) {
            var n = t + r - 2 * e;
            return 0 === n ? .5 : (t - e) / n
        }

        function g(t, e, r, n, i) {
            var a = (e - t) * n + t, o = (r - e) * n + e, s = (o - a) * n + a;
            i[0] = t, i[1] = a, i[2] = s, i[3] = s, i[4] = o, i[5] = r
        }

        function p(t, e, r, n, i, a, o, s, l) {
            var h, u = .005, f = 1 / 0;
            k[0] = o, k[1] = s;
            for (var d = 0; d < 1; d += .05) {
                C[0] = c(t, r, i, d), C[1] = c(e, n, a, d);
                var v = y(k, C);
                v < f && (h = d, f = v)
            }
            f = 1 / 0;
            for (var g = 0; g < 32 && !(u < S); g++) {
                var p = h - u, m = h + u;
                C[0] = c(t, r, i, p), C[1] = c(e, n, a, p);
                var v = y(C, k);
                if (p >= 0 && v < f) h = p, f = v; else {
                    P[0] = c(t, r, i, m), P[1] = c(e, n, a, m);
                    var x = y(P, k);
                    m <= 1 && x < f ? (h = m, f = x) : u *= .5
                }
            }
            return l && (l[0] = c(t, r, i, h), l[1] = c(e, n, a, h)), _(f)
        }

        var m = r(2), x = m.create, y = m.distSquare, w = Math.pow, _ = Math.sqrt, b = 1e-8, S = 1e-4, M = _(3),
            T = 1 / 3, k = x(), C = x(), P = x();
        e.cubicAt = a, e.cubicDerivativeAt = o, e.cubicRootAt = s, e.cubicExtrema = l, e.cubicSubdivide = h, e.cubicProjectPoint = u, e.quadraticAt = c, e.quadraticDerivativeAt = f, e.quadraticRootAt = d, e.quadraticExtremum = v, e.quadraticSubdivide = g, e.quadraticProjectPoint = p
    }, function (t, e, r) {
        function n(t, e) {
            L[t] = e
        }

        function i(t, e) {
            e = e || D;
            var r = t + ":" + e;
            if (P[r]) return P[r];
            for (var n = (t + "").split("\n"), i = 0, a = 0, o = n.length; a < o; a++) i = Math.max(p(n[a], e).width, i);
            return I > A && (I = 0, P = {}), I++, P[r] = i, i
        }

        function a(t, e, r, n, i, a, l) {
            return a ? s(t, e, r, n, i, a, l) : o(t, e, r, n, i, l)
        }

        function o(t, e, r, n, a, o) {
            var s = m(t, e, a, o), u = i(t, e);
            a && (u += a[1] + a[3]);
            var c = s.outerHeight, f = l(0, u, r), d = h(0, c, n), v = new _(f, d, u, c);
            return v.lineHeight = s.lineHeight, v
        }

        function s(t, e, r, n, i, a, o) {
            var s = x(t, {rich: a, truncate: o, font: e, textAlign: r, textPadding: i}), u = s.outerWidth,
                c = s.outerHeight, f = l(0, u, r), d = h(0, c, n);
            return new _(f, d, u, c)
        }

        function l(t, e, r) {
            return "right" === r ? t -= e : "center" === r && (t -= e / 2), t
        }

        function h(t, e, r) {
            return "middle" === r ? t -= e / 2 : "bottom" === r && (t -= e), t
        }

        function u(t, e, r) {
            var n = e.x, i = e.y, a = e.height, o = e.width, s = a / 2, l = "left", h = "top";
            switch (t) {
                case"left":
                    n -= r, i += s, l = "right", h = "middle";
                    break;
                case"right":
                    n += r + o, i += s, h = "middle";
                    break;
                case"top":
                    n += o / 2, i -= r, l = "center", h = "bottom";
                    break;
                case"bottom":
                    n += o / 2, i += a + r, l = "center";
                    break;
                case"inside":
                    n += o / 2, i += s, l = "center", h = "middle";
                    break;
                case"insideLeft":
                    n += r, i += s, h = "middle";
                    break;
                case"insideRight":
                    n += o - r, i += s, l = "right", h = "middle";
                    break;
                case"insideTop":
                    n += o / 2, i += r, l = "center";
                    break;
                case"insideBottom":
                    n += o / 2, i += a - r, l = "center", h = "bottom";
                    break;
                case"insideTopLeft":
                    n += r, i += r;
                    break;
                case"insideTopRight":
                    n += o - r, i += r, l = "right";
                    break;
                case"insideBottomLeft":
                    n += r, i += a - r, h = "bottom";
                    break;
                case"insideBottomRight":
                    n += o - r, i += a - r, l = "right", h = "bottom"
            }
            return {x: n, y: i, textAlign: l, textVerticalAlign: h}
        }

        function c(t, e, r, n, i) {
            if (!e) return "";
            var a = (t + "").split("\n");
            i = f(e, r, n, i);
            for (var o = 0, s = a.length; o < s; o++) a[o] = d(a[o], i);
            return a.join("\n")
        }

        function f(t, e, r, n) {
            n = T({}, n), n.font = e;
            var r = k(r, "...");
            n.maxIterations = k(n.maxIterations, 2);
            var a = n.minChar = k(n.minChar, 0);
            n.cnCharWidth = i("国", e);
            var o = n.ascCharWidth = i("a", e);
            n.placeholder = k(n.placeholder, "");
            for (var s = t = Math.max(0, t - 1), l = 0; l < a && s >= o; l++) s -= o;
            var h = i(r);
            return h > s && (r = "", h = 0), s = t - h, n.ellipsis = r, n.ellipsisWidth = h, n.contentWidth = s, n.containerWidth = t, n
        }

        function d(t, e) {
            var r = e.containerWidth, n = e.font, a = e.contentWidth;
            if (!r) return "";
            var o = i(t, n);
            if (o <= r) return t;
            for (var s = 0; ; s++) {
                if (o <= a || s >= e.maxIterations) {
                    t += e.ellipsis;
                    break
                }
                var l = 0 === s ? v(t, a, e.ascCharWidth, e.cnCharWidth) : o > 0 ? Math.floor(t.length * a / o) : 0;
                t = t.substr(0, l), o = i(t, n)
            }
            return "" === t && (t = e.placeholder), t
        }

        function v(t, e, r, n) {
            for (var i = 0, a = 0, o = t.length; a < o && i < e; a++) {
                var s = t.charCodeAt(a);
                i += 0 <= s && s <= 127 ? r : n
            }
            return a
        }

        function g(t) {
            return i("国", t)
        }

        function p(t, e) {
            return L.measureText(t, e)
        }

        function m(t, e, r, n) {
            null != t && (t += "");
            var i = g(e), a = t ? t.split("\n") : [], o = a.length * i, s = o;
            if (r && (s += r[0] + r[2]), t && n) {
                var l = n.outerHeight, h = n.outerWidth;
                if (null != l && s > l) t = "", a = []; else if (null != h) for (var u = f(h - (r ? r[1] + r[3] : 0), e, n.ellipsis, {
                    minChar: n.minChar,
                    placeholder: n.placeholder
                }), c = 0, v = a.length; c < v; c++) a[c] = d(a[c], u)
            }
            return {lines: a, height: o, outerHeight: s, lineHeight: i}
        }

        function x(t, e) {
            var r = {lines: [], width: 0, height: 0};
            if (null != t && (t += ""), !t) return r;
            for (var n, a = O.lastIndex = 0; null != (n = O.exec(t));) {
                var o = n.index;
                o > a && y(r, t.substring(a, o)), y(r, n[2], n[1]), a = O.lastIndex
            }
            a < t.length && y(r, t.substring(a, t.length));
            var s = r.lines, l = 0, h = 0, u = [], f = e.textPadding, d = e.truncate, v = d && d.outerWidth,
                p = d && d.outerHeight;
            f && (null != v && (v -= f[1] + f[3]), null != p && (p -= f[0] + f[2]));
            for (var m = 0; m < s.length; m++) {
                for (var x = s[m], w = 0, _ = 0, S = 0; S < x.tokens.length; S++) {
                    var M = x.tokens[S], T = M.styleName && e.rich[M.styleName] || {},
                        P = M.textPadding = T.textPadding, I = M.font = T.font || e.font,
                        A = M.textHeight = k(T.textHeight, g(I));
                    if (P && (A += P[0] + P[2]), M.height = A, M.lineHeight = C(T.textLineHeight, e.textLineHeight, A), M.textAlign = T && T.textAlign || e.textAlign, M.textVerticalAlign = T && T.textVerticalAlign || "middle", null != p && l + M.lineHeight > p) return {
                        lines: [],
                        width: 0,
                        height: 0
                    };
                    M.textWidth = i(M.text, I);
                    var D = T.textWidth, L = null == D || "auto" === D;
                    if ("string" == typeof D && "%" === D.charAt(D.length - 1)) M.percentWidth = D, u.push(M), D = 0; else {
                        if (L) {
                            D = M.textWidth;
                            var F = T.textBackgroundColor, R = F && F.image;
                            R && (R = b.findExistImage(R), b.isImageReady(R) && (D = Math.max(D, R.width * A / R.height)))
                        }
                        var B = P ? P[1] + P[3] : 0;
                        D += B;
                        var z = null != v ? v - _ : null;
                        null != z && z < D && (!L || z < B ? (M.text = "", M.textWidth = D = 0) : (M.text = c(M.text, z - B, I, d.ellipsis, {minChar: d.minChar}), M.textWidth = i(M.text, I), D = M.textWidth + B))
                    }
                    _ += M.width = D, T && (w = Math.max(w, M.lineHeight))
                }
                x.width = _, x.lineHeight = w, l += w, h = Math.max(h, _)
            }
            r.outerWidth = r.width = k(e.textWidth, h), r.outerHeight = r.height = k(e.textHeight, l), f && (r.outerWidth += f[1] + f[3], r.outerHeight += f[0] + f[2]);
            for (var m = 0; m < u.length; m++) {
                var M = u[m], N = M.percentWidth;
                M.width = parseInt(N, 10) / 100 * h
            }
            return r
        }

        function y(t, e, r) {
            for (var n = "" === e, i = e.split("\n"), a = t.lines, o = 0; o < i.length; o++) {
                var s = i[o], l = {styleName: r, text: s, isLineHolder: !s && !n};
                if (o) a.push({tokens: [l]}); else {
                    var h = (a[a.length - 1] || (a[0] = {tokens: []})).tokens, u = h.length;
                    1 === u && h[0].isLineHolder ? h[0] = l : (s || !u || n) && h.push(l)
                }
            }
        }

        function w(t) {
            return (t.fontSize || t.fontFamily) && [t.fontStyle, t.fontWeight, (t.fontSize || 12) + "px", t.fontFamily || "sans-serif"].join(" ") || t.textFont || t.font
        }

        var _ = r(3), b = r(10), S = r(0), M = S.getContext, T = S.extend, k = S.retrieve2, C = S.retrieve3, P = {},
            I = 0, A = 5e3, O = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g, D = "12px sans-serif", L = {};
        L.measureText = function (t, e) {
            var r = M();
            return r.font = e || D, r.measureText(t)
        }, e.DEFAULT_FONT = D, e.$override = n, e.getWidth = i, e.getBoundingRect = a, e.adjustTextX = l, e.adjustTextY = h, e.adjustTextPositionOnRect = u, e.truncateText = c, e.getLineHeight = g, e.measureText = p, e.parsePlainText = m, e.parseRichText = x, e.makeFont = w
    }, function (t, e, r) {
        var n = r(4), i = r(2), a = r(49), o = r(3), s = r(19), l = s.devicePixelRatio,
            h = {M: 1, L: 2, C: 3, Q: 4, A: 5, Z: 6, R: 7}, u = [], c = [], f = [], d = [], v = Math.min, g = Math.max,
            p = Math.cos, m = Math.sin, x = Math.sqrt, y = Math.abs, w = "undefined" != typeof Float32Array,
            _ = function (t) {
                this._saveData = !t, this._saveData && (this.data = []), this._ctx = null
            };
        _.prototype = {
            constructor: _,
            _xi: 0,
            _yi: 0,
            _x0: 0,
            _y0: 0,
            _ux: 0,
            _uy: 0,
            _len: 0,
            _lineDash: null,
            _dashOffset: 0,
            _dashIdx: 0,
            _dashSum: 0,
            setScale: function (t, e) {
                this._ux = y(1 / l / t) || 0, this._uy = y(1 / l / e) || 0
            },
            getContext: function () {
                return this._ctx
            },
            beginPath: function (t) {
                return this._ctx = t, t && t.beginPath(), t && (this.dpr = t.dpr), this._saveData && (this._len = 0), this._lineDash && (this._lineDash = null, this._dashOffset = 0), this
            },
            moveTo: function (t, e) {
                return this.addData(h.M, t, e), this._ctx && this._ctx.moveTo(t, e), this._x0 = t, this._y0 = e, this._xi = t, this._yi = e, this
            },
            lineTo: function (t, e) {
                var r = y(t - this._xi) > this._ux || y(e - this._yi) > this._uy || this._len < 5;
                return this.addData(h.L, t, e), this._ctx && r && (this._needsDash() ? this._dashedLineTo(t, e) : this._ctx.lineTo(t, e)), r && (this._xi = t, this._yi = e), this
            },
            bezierCurveTo: function (t, e, r, n, i, a) {
                return this.addData(h.C, t, e, r, n, i, a), this._ctx && (this._needsDash() ? this._dashedBezierTo(t, e, r, n, i, a) : this._ctx.bezierCurveTo(t, e, r, n, i, a)), this._xi = i, this._yi = a, this
            },
            quadraticCurveTo: function (t, e, r, n) {
                return this.addData(h.Q, t, e, r, n), this._ctx && (this._needsDash() ? this._dashedQuadraticTo(t, e, r, n) : this._ctx.quadraticCurveTo(t, e, r, n)), this._xi = r, this._yi = n, this
            },
            arc: function (t, e, r, n, i, a) {
                return this.addData(h.A, t, e, r, r, n, i - n, 0, a ? 0 : 1), this._ctx && this._ctx.arc(t, e, r, n, i, a), this._xi = p(i) * r + t, this._yi = m(i) * r + t, this
            },
            arcTo: function (t, e, r, n, i) {
                return this._ctx && this._ctx.arcTo(t, e, r, n, i), this
            },
            rect: function (t, e, r, n) {
                return this._ctx && this._ctx.rect(t, e, r, n), this.addData(h.R, t, e, r, n), this
            },
            closePath: function () {
                this.addData(h.Z);
                var t = this._ctx, e = this._x0, r = this._y0;
                return t && (this._needsDash() && this._dashedLineTo(e, r), t.closePath()), this._xi = e, this._yi = r, this
            },
            fill: function (t) {
                t && t.fill(), this.toStatic()
            },
            stroke: function (t) {
                t && t.stroke(), this.toStatic()
            },
            setLineDash: function (t) {
                if (t instanceof Array) {
                    this._lineDash = t, this._dashIdx = 0;
                    for (var e = 0, r = 0; r < t.length; r++) e += t[r];
                    this._dashSum = e
                }
                return this
            },
            setLineDashOffset: function (t) {
                return this._dashOffset = t, this
            },
            len: function () {
                return this._len
            },
            setData: function (t) {
                var e = t.length;
                this.data && this.data.length == e || !w || (this.data = new Float32Array(e));
                for (var r = 0; r < e; r++) this.data[r] = t[r];
                this._len = e
            },
            appendPath: function (t) {
                t instanceof Array || (t = [t]);
                for (var e = t.length, r = 0, n = this._len, i = 0; i < e; i++) r += t[i].len();
                w && this.data instanceof Float32Array && (this.data = new Float32Array(n + r));
                for (var i = 0; i < e; i++) for (var a = t[i].data, o = 0; o < a.length; o++) this.data[n++] = a[o];
                this._len = n
            },
            addData: function (t) {
                if (this._saveData) {
                    var e = this.data;
                    this._len + arguments.length > e.length && (this._expandData(), e = this.data);
                    for (var r = 0; r < arguments.length; r++) e[this._len++] = arguments[r];
                    this._prevCmd = t
                }
            },
            _expandData: function () {
                if (!(this.data instanceof Array)) {
                    for (var t = [], e = 0; e < this._len; e++) t[e] = this.data[e];
                    this.data = t
                }
            },
            _needsDash: function () {
                return this._lineDash
            },
            _dashedLineTo: function (t, e) {
                var r, n, i = this._dashSum, a = this._dashOffset, o = this._lineDash, s = this._ctx, l = this._xi,
                    h = this._yi, u = t - l, c = e - h, f = x(u * u + c * c), d = l, p = h, m = o.length;
                for (u /= f, c /= f, a < 0 && (a = i + a), a %= i, d -= a * u, p -= a * c; u > 0 && d <= t || u < 0 && d >= t || 0 == u && (c > 0 && p <= e || c < 0 && p >= e);) n = this._dashIdx, r = o[n], d += u * r, p += c * r, this._dashIdx = (n + 1) % m, u > 0 && d < l || u < 0 && d > l || c > 0 && p < h || c < 0 && p > h || s[n % 2 ? "moveTo" : "lineTo"](u >= 0 ? v(d, t) : g(d, t), c >= 0 ? v(p, e) : g(p, e));
                u = d - t, c = p - e, this._dashOffset = -x(u * u + c * c)
            },
            _dashedBezierTo: function (t, e, r, i, a, o) {
                var s, l, h, u, c, f = this._dashSum, d = this._dashOffset, v = this._lineDash, g = this._ctx,
                    p = this._xi, m = this._yi, y = n.cubicAt, w = 0, _ = this._dashIdx, b = v.length, S = 0;
                for (d < 0 && (d = f + d), d %= f, s = 0; s < 1; s += .1) l = y(p, t, r, a, s + .1) - y(p, t, r, a, s), h = y(m, e, i, o, s + .1) - y(m, e, i, o, s), w += x(l * l + h * h);
                for (; _ < b && !((S += v[_]) > d); _++) ;
                for (s = (S - d) / w; s <= 1;) u = y(p, t, r, a, s), c = y(m, e, i, o, s), _ % 2 ? g.moveTo(u, c) : g.lineTo(u, c), s += v[_] / w, _ = (_ + 1) % b;
                _ % 2 != 0 && g.lineTo(a, o), l = a - u, h = o - c, this._dashOffset = -x(l * l + h * h)
            },
            _dashedQuadraticTo: function (t, e, r, n) {
                var i = r, a = n;
                r = (r + 2 * t) / 3, n = (n + 2 * e) / 3, t = (this._xi + 2 * t) / 3, e = (this._yi + 2 * e) / 3, this._dashedBezierTo(t, e, r, n, i, a)
            },
            toStatic: function () {
                var t = this.data;
                t instanceof Array && (t.length = this._len, w && (this.data = new Float32Array(t)))
            },
            getBoundingRect: function () {
                u[0] = u[1] = f[0] = f[1] = Number.MAX_VALUE, c[0] = c[1] = d[0] = d[1] = -Number.MAX_VALUE;
                for (var t = this.data, e = 0, r = 0, n = 0, s = 0, l = 0; l < t.length;) {
                    var v = t[l++];
                    switch (1 == l && (e = t[l], r = t[l + 1], n = e, s = r), v) {
                        case h.M:
                            n = t[l++], s = t[l++], e = n, r = s, f[0] = n, f[1] = s, d[0] = n, d[1] = s;
                            break;
                        case h.L:
                            a.fromLine(e, r, t[l], t[l + 1], f, d), e = t[l++], r = t[l++];
                            break;
                        case h.C:
                            a.fromCubic(e, r, t[l++], t[l++], t[l++], t[l++], t[l], t[l + 1], f, d), e = t[l++], r = t[l++];
                            break;
                        case h.Q:
                            a.fromQuadratic(e, r, t[l++], t[l++], t[l], t[l + 1], f, d), e = t[l++], r = t[l++];
                            break;
                        case h.A:
                            var g = t[l++], x = t[l++], y = t[l++], w = t[l++], _ = t[l++], b = t[l++] + _,
                                S = (t[l++], 1 - t[l++]);
                            1 == l && (n = p(_) * y + g, s = m(_) * w + x), a.fromArc(g, x, y, w, _, b, S, f, d), e = p(b) * y + g, r = m(b) * w + x;
                            break;
                        case h.R:
                            n = e = t[l++], s = r = t[l++];
                            var M = t[l++], T = t[l++];
                            a.fromLine(n, s, n + M, s + T, f, d);
                            break;
                        case h.Z:
                            e = n, r = s
                    }
                    i.min(u, u, f), i.max(c, c, d)
                }
                return 0 === l && (u[0] = u[1] = c[0] = c[1] = 0), new o(u[0], u[1], c[0] - u[0], c[1] - u[1])
            },
            rebuildPath: function (t) {
                for (var e, r, n, i, a, o, s = this.data, l = this._ux, u = this._uy, c = this._len, f = 0; f < c;) {
                    var d = s[f++];
                    switch (1 == f && (n = s[f], i = s[f + 1], e = n, r = i), d) {
                        case h.M:
                            e = n = s[f++], r = i = s[f++], t.moveTo(n, i);
                            break;
                        case h.L:
                            a = s[f++], o = s[f++], (y(a - n) > l || y(o - i) > u || f === c - 1) && (t.lineTo(a, o), n = a, i = o);
                            break;
                        case h.C:
                            t.bezierCurveTo(s[f++], s[f++], s[f++], s[f++], s[f++], s[f++]), n = s[f - 2], i = s[f - 1];
                            break;
                        case h.Q:
                            t.quadraticCurveTo(s[f++], s[f++], s[f++], s[f++]), n = s[f - 2], i = s[f - 1];
                            break;
                        case h.A:
                            var v = s[f++], g = s[f++], x = s[f++], w = s[f++], _ = s[f++], b = s[f++], S = s[f++],
                                M = s[f++], T = x > w ? x : w, k = x > w ? 1 : x / w, C = x > w ? w / x : 1,
                                P = Math.abs(x - w) > .001, I = _ + b;
                            P ? (t.translate(v, g), t.rotate(S), t.scale(k, C), t.arc(0, 0, T, _, I, 1 - M), t.scale(1 / k, 1 / C), t.rotate(-S), t.translate(-v, -g)) : t.arc(v, g, T, _, I, 1 - M), 1 == f && (e = p(_) * x + v, r = m(_) * w + g), n = p(I) * x + v, i = m(I) * w + g;
                            break;
                        case h.R:
                            e = n = s[f], r = i = s[f + 1], t.rect(s[f++], s[f++], s[f++], s[f++]);
                            break;
                        case h.Z:
                            t.closePath(), n = e, i = r
                    }
                }
            }
        }, _.CMD = h;
        var b = _;
        t.exports = b
    }, function (e, r) {
        e.exports = t
    }, function (t, e) {
        function r() {
            var t = new u(6);
            return n(t), t
        }

        function n(t) {
            return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t
        }

        function i(t, e) {
            return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t
        }

        function a(t, e, r) {
            var n = e[0] * r[0] + e[2] * r[1], i = e[1] * r[0] + e[3] * r[1], a = e[0] * r[2] + e[2] * r[3],
                o = e[1] * r[2] + e[3] * r[3], s = e[0] * r[4] + e[2] * r[5] + e[4],
                l = e[1] * r[4] + e[3] * r[5] + e[5];
            return t[0] = n, t[1] = i, t[2] = a, t[3] = o, t[4] = s, t[5] = l, t
        }

        function o(t, e, r) {
            return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4] + r[0], t[5] = e[5] + r[1], t
        }

        function s(t, e, r) {
            var n = e[0], i = e[2], a = e[4], o = e[1], s = e[3], l = e[5], h = Math.sin(r), u = Math.cos(r);
            return t[0] = n * u + o * h, t[1] = -n * h + o * u, t[2] = i * u + s * h, t[3] = -i * h + u * s, t[4] = u * a + h * l, t[5] = u * l - h * a, t
        }

        function l(t, e, r) {
            var n = r[0], i = r[1];
            return t[0] = e[0] * n, t[1] = e[1] * i, t[2] = e[2] * n, t[3] = e[3] * i, t[4] = e[4] * n, t[5] = e[5] * i, t
        }

        function h(t, e) {
            var r = e[0], n = e[2], i = e[4], a = e[1], o = e[3], s = e[5], l = r * o - a * n;
            return l ? (l = 1 / l, t[0] = o * l, t[1] = -a * l, t[2] = -n * l, t[3] = r * l, t[4] = (n * s - o * i) * l, t[5] = (a * i - r * s) * l, t) : null
        }

        var u = "undefined" == typeof Float32Array ? Array : Float32Array;
        e.create = r, e.identity = n, e.copy = i, e.mul = a, e.translate = o, e.rotate = s, e.scale = l, e.invert = h
    }, function (t, e, r) {
        function n(t) {
            return t.replace(/^\s+/, "").replace(/\s+$/, "")
        }

        function i(t, e, r, n) {
            var i = e[1] - e[0], a = r[1] - r[0];
            if (0 === i) return 0 === a ? r[0] : (r[0] + r[1]) / 2;
            if (n) if (i > 0) {
                if (t <= e[0]) return r[0];
                if (t >= e[1]) return r[1]
            } else {
                if (t >= e[0]) return r[0];
                if (t <= e[1]) return r[1]
            } else {
                if (t === e[0]) return r[0];
                if (t === e[1]) return r[1]
            }
            return (t - e[0]) / i * a + r[0]
        }

        function a(t, e) {
            switch (t) {
                case"center":
                case"middle":
                    t = "50%";
                    break;
                case"left":
                case"top":
                    t = "0%";
                    break;
                case"right":
                case"bottom":
                    t = "100%"
            }
            return "string" == typeof t ? n(t).match(/%$/) ? parseFloat(t) / 100 * e : parseFloat(t) : null == t ? NaN : +t
        }

        function o(t, e, r) {
            return null == e && (e = 10), e = Math.min(Math.max(0, e), 20), t = (+t).toFixed(e), r ? t : +t
        }

        function s(t) {
            return t.sort(function (t, e) {
                return t - e
            }), t
        }

        function l(t) {
            if (t = +t, isNaN(t)) return 0;
            for (var e = 1, r = 0; Math.round(t * e) / e !== t;) e *= 10, r++;
            return r
        }

        function h(t) {
            var e = t.toString(), r = e.indexOf("e");
            if (r > 0) {
                var n = +e.slice(r + 1);
                return n < 0 ? -n : 0
            }
            var i = e.indexOf(".");
            return i < 0 ? 0 : e.length - 1 - i
        }

        function u(t, e) {
            var r = Math.log, n = Math.LN10, i = Math.floor(r(t[1] - t[0]) / n),
                a = Math.round(r(Math.abs(e[1] - e[0])) / n), o = Math.min(Math.max(-i + a, 0), 20);
            return isFinite(o) ? o : 20
        }

        function c(t, e, r) {
            if (!t[e]) return 0;
            var n = w.reduce(t, function (t, e) {
                return t + (isNaN(e) ? 0 : e)
            }, 0);
            if (0 === n) return 0;
            for (var i = Math.pow(10, r), a = w.map(t, function (t) {
                return (isNaN(t) ? 0 : t) / n * i * 100
            }), o = 100 * i, s = w.map(a, function (t) {
                return Math.floor(t)
            }), l = w.reduce(s, function (t, e) {
                return t + e
            }, 0), h = w.map(a, function (t, e) {
                return t - s[e]
            }); l < o;) {
                for (var u = Number.NEGATIVE_INFINITY, c = null, f = 0, d = h.length; f < d; ++f) h[f] > u && (u = h[f], c = f);
                ++s[c], h[c] = 0, ++l
            }
            return s[e] / i
        }

        function f(t) {
            var e = 2 * Math.PI;
            return (t % e + e) % e
        }

        function d(t) {
            return t > -_ && t < _
        }

        function v(t) {
            if (t instanceof Date) return t;
            if ("string" == typeof t) {
                var e = b.exec(t);
                if (!e) return new Date(NaN);
                if (e[8]) {
                    var r = +e[4] || 0;
                    return "Z" !== e[8].toUpperCase() && (r -= e[8].slice(0, 3)), new Date(Date.UTC(+e[1], +(e[2] || 1) - 1, +e[3] || 1, r, +(e[5] || 0), +e[6] || 0, +e[7] || 0))
                }
                return new Date(+e[1], +(e[2] || 1) - 1, +e[3] || 1, +e[4] || 0, +(e[5] || 0), +e[6] || 0, +e[7] || 0)
            }
            return null == t ? new Date(NaN) : new Date(Math.round(t))
        }

        function g(t) {
            return Math.pow(10, p(t))
        }

        function p(t) {
            return Math.floor(Math.log(t) / Math.LN10)
        }

        function m(t, e) {
            var r, n = p(t), i = Math.pow(10, n), a = t / i;
            return r = e ? a < 1.5 ? 1 : a < 2.5 ? 2 : a < 4 ? 3 : a < 7 ? 5 : 10 : a < 1 ? 1 : a < 2 ? 2 : a < 3 ? 3 : a < 5 ? 5 : 10, t = r * i, n >= -20 ? +t.toFixed(n < 0 ? -n : 0) : t
        }

        function x(t) {
            function e(t, r, n) {
                return t.interval[n] < r.interval[n] || t.interval[n] === r.interval[n] && (t.close[n] - r.close[n] == (n ? -1 : 1) || !n && e(t, r, 1))
            }

            t.sort(function (t, r) {
                return e(t, r, 0) ? -1 : 1
            });
            for (var r = -1 / 0, n = 1, i = 0; i < t.length;) {
                for (var a = t[i].interval, o = t[i].close, s = 0; s < 2; s++) a[s] <= r && (a[s] = r, o[s] = s ? 1 : 1 - n), r = a[s], n = o[s];
                a[0] === a[1] && o[0] * o[1] != 1 ? t.splice(i, 1) : i++
            }
            return t
        }

        function y(t) {
            return t - parseFloat(t) >= 0
        }

        var w = r(0), _ = 1e-4,
            b = /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d\d)(?::(\d\d)(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/;
        e.linearMap = i, e.parsePercent = a, e.round = o, e.asc = s, e.getPrecision = l, e.getPrecisionSafe = h, e.getPixelPrecision = u, e.getPercentWithPrecision = c, e.MAX_SAFE_INTEGER = 9007199254740991, e.remRadian = f, e.isRadianAroundZero = d, e.parseDate = v, e.quantity = g, e.nice = m, e.reformIntervals = x, e.isNumeric = y
    }, function (t, e, r) {
        function n(t) {
            if ("string" == typeof t) {
                var e = l.get(t);
                return e && e.image
            }
            return t
        }

        function i(t, e, r, n, i) {
            if (t) {
                if ("string" == typeof t) {
                    if (e && e.__zrImageSrc === t || !r) return e;
                    var s = l.get(t), h = {hostEl: r, cb: n, cbPayload: i};
                    return s ? (e = s.image, !o(e) && s.pending.push(h)) : (!e && (e = new Image), e.onload = a, l.put(t, e.__cachedImgObj = {
                        image: e,
                        pending: [h]
                    }), e.src = e.__zrImageSrc = t), e
                }
                return t
            }
            return e
        }

        function a() {
            var t = this.__cachedImgObj;
            this.onload = this.__cachedImgObj = null;
            for (var e = 0; e < t.pending.length; e++) {
                var r = t.pending[e], n = r.cb;
                n && n(this, r.cbPayload), r.hostEl.dirty()
            }
            t.pending.length = 0
        }

        function o(t) {
            return t && t.width && t.height
        }

        var s = r(14), l = new s(50);
        e.findExistImage = n, e.createOrUpdateImage = i, e.isImageReady = o
    }, function (t, e, r) {
        function n(t) {
            for (var e = 0; e < t.length; e++) t[e][1] || (t[e][1] = t[e][0]);
            return function (e, r, n) {
                for (var a = {}, o = 0; o < t.length; o++) {
                    var s = t[o][1];
                    if (!(r && i.indexOf(r, s) >= 0 || n && i.indexOf(n, s) < 0)) {
                        var l = e.getShallow(s);
                        null != l && (a[t[o][0]] = l)
                    }
                }
                return a
            }
        }

        var i = r(0);
        t.exports = n
    }, function (t, e, r) {
        function n(t) {
            t = t || {}, o.call(this, t);
            for (var e in t) t.hasOwnProperty(e) && "style" !== e && (this[e] = t[e]);
            this.style = new a(t.style, this), this._rect = null, this.__clipPaths = []
        }

        var i = r(0), a = r(40), o = r(16), s = r(48);
        n.prototype = {
            constructor: n,
            type: "displayable",
            __dirty: !0,
            invisible: !1,
            z: 0,
            z2: 0,
            zlevel: 0,
            draggable: !1,
            dragging: !1,
            silent: !1,
            culling: !1,
            cursor: "pointer",
            rectHover: !1,
            progressive: -1,
            beforeBrush: function (t) {
            },
            afterBrush: function (t) {
            },
            brush: function (t, e) {
            },
            getBoundingRect: function () {
            },
            contain: function (t, e) {
                return this.rectContain(t, e)
            },
            traverse: function (t, e) {
                t.call(e, this)
            },
            rectContain: function (t, e) {
                var r = this.transformCoordToLocal(t, e);
                return this.getBoundingRect().contain(r[0], r[1])
            },
            dirty: function () {
                this.__dirty = !0, this._rect = null, this.__zr && this.__zr.refresh()
            },
            animateStyle: function (t) {
                return this.animate("style", t)
            },
            attrKV: function (t, e) {
                "style" !== t ? o.prototype.attrKV.call(this, t, e) : this.style.set(e)
            },
            setStyle: function (t, e) {
                return this.style.set(t, e), this.dirty(!1), this
            },
            useStyle: function (t) {
                return this.style = new a(t, this), this.dirty(!1), this
            }
        }, i.inherits(n, o), i.mixin(n, s);
        var l = n;
        t.exports = l
    }, function (t, e, r) {
        function n(t) {
            return isNaN(t) ? "-" : (t = (t + "").split("."), t[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (t.length > 1 ? "." + t[1] : ""))
        }

        function i(t, e) {
            return t = (t || "").toLowerCase().replace(/-(.)/g, function (t, e) {
                return e.toUpperCase()
            }), e && t && (t = t.charAt(0).toUpperCase() + t.slice(1)), t
        }

        function a(t) {
            return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
        }

        function o(t, e, r) {
            c.isArray(e) || (e = [e]);
            var n = e.length;
            if (!n) return "";
            for (var i = e[0].$vars || [], o = 0; o < i.length; o++) {
                var s = g[o], l = p(s, 0);
                t = t.replace(p(s), r ? a(l) : l)
            }
            for (var h = 0; h < n; h++) for (var u = 0; u < i.length; u++) {
                var l = e[h][i[u]];
                t = t.replace(p(g[u], h), r ? a(l) : l)
            }
            return t
        }

        function s(t, e, r) {
            return c.each(e, function (e, n) {
                t = t.replace("{" + n + "}", r ? a(e) : e)
            }), t
        }

        function l(t, e) {
            return t ? '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + a(t) + ";" + (e || "") + '"></span>' : ""
        }

        function h(t, e, r) {
            "week" !== t && "month" !== t && "quarter" !== t && "half-year" !== t && "year" !== t || (t = "MM-dd\nyyyy");
            var n = d.parseDate(e), i = r ? "UTC" : "", a = n["get" + i + "FullYear"](),
                o = n["get" + i + "Month"]() + 1, s = n["get" + i + "Date"](), l = n["get" + i + "Hours"](),
                h = n["get" + i + "Minutes"](), u = n["get" + i + "Seconds"]();
            return t = t.replace("MM", m(o)).replace("M", o).replace("yyyy", a).replace("yy", a % 100).replace("dd", m(s)).replace("d", s).replace("hh", m(l)).replace("h", l).replace("mm", m(h)).replace("m", h).replace("ss", m(u)).replace("s", u)
        }

        function u(t) {
            return t ? t.charAt(0).toUpperCase() + t.substr(1) : t
        }

        var c = r(0), f = r(5), d = r(9), v = c.normalizeCssArray, g = ["a", "b", "c", "d", "e", "f", "g"],
            p = function (t, e) {
                return "{" + t + (null == e ? "" : e) + "}"
            }, m = function (t) {
                return t < 10 ? "0" + t : t
            }, x = f.truncateText, y = f.getBoundingRect;
        e.addCommas = n, e.toCamelCase = i, e.normalizeCssArray = v, e.encodeHTML = a, e.formatTpl = o, e.formatTplSimple = s, e.getTooltipMarker = l, e.formatTime = h, e.capitalFirst = u, e.truncateText = x, e.getTextRect = y
    }, function (t, e) {
        var r = function () {
            this.head = null, this.tail = null, this._len = 0
        }, n = r.prototype;
        n.insert = function (t) {
            var e = new i(t);
            return this.insertEntry(e), e
        }, n.insertEntry = function (t) {
            this.head ? (this.tail.next = t, t.prev = this.tail, t.next = null, this.tail = t) : this.head = this.tail = t, this._len++
        }, n.remove = function (t) {
            var e = t.prev, r = t.next;
            e ? e.next = r : this.head = r, r ? r.prev = e : this.tail = e, t.next = t.prev = null, this._len--
        }, n.len = function () {
            return this._len
        }, n.clear = function () {
            this.head = this.tail = null, this._len = 0
        };
        var i = function (t) {
            this.value = t, this.next, this.prev
        }, a = function (t) {
            this._list = new r, this._map = {}, this._maxSize = t || 10, this._lastRemovedEntry = null
        }, o = a.prototype;
        o.put = function (t, e) {
            var r = this._list, n = this._map, a = null;
            if (null == n[t]) {
                var o = r.len(), s = this._lastRemovedEntry;
                if (o >= this._maxSize && o > 0) {
                    var l = r.head;
                    r.remove(l), delete n[l.key], a = l.value, this._lastRemovedEntry = l
                }
                s ? s.value = e : s = new i(e), s.key = t, r.insertEntry(s), n[t] = s
            }
            return a
        }, o.get = function (t) {
            var e = this._map[t], r = this._list;
            if (null != e) return e !== r.tail && (r.remove(e), r.insertEntry(e)), e.value
        }, o.clear = function () {
            this._list.clear(), this._map = {}
        };
        var s = a;
        t.exports = s
    }, function (t, e) {
        var r = {};
        r = "undefined" == typeof navigator ? {
            browser: {},
            os: {},
            node: !0,
            canvasSupported: !0,
            svgSupported: !0
        } : function (t) {
            var e = {}, r = {}, n = t.match(/Firefox\/([\d.]+)/),
                i = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/.+?rv:(([\d.]+))/), a = t.match(/Edge\/([\d.]+)/),
                o = /micromessenger/i.test(t);
            return n && (r.firefox = !0, r.version = n[1]), i && (r.ie = !0, r.version = i[1]), a && (r.edge = !0, r.version = a[1]), o && (r.weChat = !0), {
                browser: r,
                os: e,
                node: !1,
                canvasSupported: !!document.createElement("canvas").getContext,
                svgSupported: "undefined" != typeof SVGRect,
                touchEventsSupported: "ontouchstart" in window && !r.ie && !r.edge,
                pointerEventsSupported: "onpointerdown" in window && (r.edge || r.ie && r.version >= 11)
            }
        }(navigator.userAgent);
        var n = r;
        t.exports = n
    }, function (t, e, r) {
        var n = r(41), i = r(42), a = r(17), o = r(43), s = r(0), l = function (t) {
            a.call(this, t), i.call(this, t), o.call(this, t), this.id = t.id || n()
        };
        l.prototype = {
            type: "element", name: "", __zr: null, ignore: !1, clipPath: null, drift: function (t, e) {
                switch (this.draggable) {
                    case"horizontal":
                        e = 0;
                        break;
                    case"vertical":
                        t = 0
                }
                var r = this.transform;
                r || (r = this.transform = [1, 0, 0, 1, 0, 0]), r[4] += t, r[5] += e, this.decomposeTransform(), this.dirty(!1)
            }, beforeUpdate: function () {
            }, afterUpdate: function () {
            }, update: function () {
                this.updateTransform()
            }, traverse: function (t, e) {
            }, attrKV: function (t, e) {
                if ("position" === t || "scale" === t || "origin" === t) {
                    if (e) {
                        var r = this[t];
                        r || (r = this[t] = []), r[0] = e[0], r[1] = e[1]
                    }
                } else this[t] = e
            }, hide: function () {
                this.ignore = !0, this.__zr && this.__zr.refresh()
            }, show: function () {
                this.ignore = !1, this.__zr && this.__zr.refresh()
            }, attr: function (t, e) {
                if ("string" == typeof t) this.attrKV(t, e); else if (s.isObject(t)) for (var r in t) t.hasOwnProperty(r) && this.attrKV(r, t[r]);
                return this.dirty(!1), this
            }, setClipPath: function (t) {
                var e = this.__zr;
                e && t.addSelfToZr(e), this.clipPath && this.clipPath !== t && this.removeClipPath(), this.clipPath = t, t.__zr = e, t.__clipTarget = this, this.dirty(!1)
            }, removeClipPath: function () {
                var t = this.clipPath;
                t && (t.__zr && t.removeSelfFromZr(t.__zr), t.__zr = null, t.__clipTarget = null, this.clipPath = null, this.dirty(!1))
            }, addSelfToZr: function (t) {
                this.__zr = t;
                var e = this.animators;
                if (e) for (var r = 0; r < e.length; r++) t.animation.addAnimator(e[r]);
                this.clipPath && this.clipPath.addSelfToZr(t)
            }, removeSelfFromZr: function (t) {
                this.__zr = null;
                var e = this.animators;
                if (e) for (var r = 0; r < e.length; r++) t.animation.removeAnimator(e[r]);
                this.clipPath && this.clipPath.removeSelfFromZr(t)
            }
        }, s.mixin(l, o), s.mixin(l, a), s.mixin(l, i);
        var h = l;
        t.exports = h
    }, function (t, e, r) {
        function n(t) {
            return t > s || t < -s
        }

        var i = r(8), a = r(2), o = i.identity, s = 5e-5, l = function (t) {
            t = t || {}, t.position || (this.position = [0, 0]), null == t.rotation && (this.rotation = 0), t.scale || (this.scale = [1, 1]), this.origin = this.origin || null
        }, h = l.prototype;
        h.transform = null, h.needLocalTransform = function () {
            return n(this.rotation) || n(this.position[0]) || n(this.position[1]) || n(this.scale[0] - 1) || n(this.scale[1] - 1)
        }, h.updateTransform = function () {
            var t = this.parent, e = t && t.transform, r = this.needLocalTransform(), n = this.transform;
            if (!r && !e) return void (n && o(n));
            n = n || i.create(), r ? this.getLocalTransform(n) : o(n), e && (r ? i.mul(n, t.transform, n) : i.copy(n, t.transform)), this.transform = n, this.invTransform = this.invTransform || i.create(), i.invert(this.invTransform, n)
        }, h.getLocalTransform = function (t) {
            return l.getLocalTransform(this, t)
        }, h.setTransform = function (t) {
            var e = this.transform, r = t.dpr || 1;
            e ? t.setTransform(r * e[0], r * e[1], r * e[2], r * e[3], r * e[4], r * e[5]) : t.setTransform(r, 0, 0, r, 0, 0)
        }, h.restoreTransform = function (t) {
            var e = t.dpr || 1;
            t.setTransform(e, 0, 0, e, 0, 0)
        };
        var u = [];
        h.decomposeTransform = function () {
            if (this.transform) {
                var t = this.parent, e = this.transform;
                t && t.transform && (i.mul(u, t.invTransform, e), e = u);
                var r = e[0] * e[0] + e[1] * e[1], a = e[2] * e[2] + e[3] * e[3], o = this.position, s = this.scale;
                n(r - 1) && (r = Math.sqrt(r)), n(a - 1) && (a = Math.sqrt(a)), e[0] < 0 && (r = -r), e[3] < 0 && (a = -a), o[0] = e[4], o[1] = e[5], s[0] = r, s[1] = a, this.rotation = Math.atan2(-e[1] / a, e[0] / r)
            }
        }, h.getGlobalScale = function () {
            var t = this.transform;
            if (!t) return [1, 1];
            var e = Math.sqrt(t[0] * t[0] + t[1] * t[1]), r = Math.sqrt(t[2] * t[2] + t[3] * t[3]);
            return t[0] < 0 && (e = -e), t[3] < 0 && (r = -r), [e, r]
        }, h.transformCoordToLocal = function (t, e) {
            var r = [t, e], n = this.invTransform;
            return n && a.applyTransform(r, r, n), r
        }, h.transformCoordToGlobal = function (t, e) {
            var r = [t, e], n = this.transform;
            return n && a.applyTransform(r, r, n), r
        }, l.getLocalTransform = function (t, e) {
            e = e || [], o(e);
            var r = t.origin, n = t.scale || [1, 1], a = t.rotation || 0, s = t.position || [0, 0];
            return r && (e[4] -= r[0], e[5] -= r[1]), i.scale(e, e, n), a && i.rotate(e, e, a), r && (e[4] += r[0], e[5] += r[1]), e[4] += s[0], e[5] += s[1], e
        };
        var c = l;
        t.exports = c
    }, function (t, e, r) {
        function n(t) {
            return t = Math.round(t), t < 0 ? 0 : t > 255 ? 255 : t
        }

        function i(t) {
            return t = Math.round(t), t < 0 ? 0 : t > 360 ? 360 : t
        }

        function a(t) {
            return t < 0 ? 0 : t > 1 ? 1 : t
        }

        function o(t) {
            return n(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 * 255 : parseInt(t, 10))
        }

        function s(t) {
            return a(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 : parseFloat(t))
        }

        function l(t, e, r) {
            return r < 0 ? r += 1 : r > 1 && (r -= 1), 6 * r < 1 ? t + (e - t) * r * 6 : 2 * r < 1 ? e : 3 * r < 2 ? t + (e - t) * (2 / 3 - r) * 6 : t
        }

        function h(t, e, r) {
            return t + (e - t) * r
        }

        function u(t, e, r, n, i) {
            return t[0] = e, t[1] = r, t[2] = n, t[3] = i, t
        }

        function c(t, e) {
            return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t
        }

        function f(t, e) {
            k && c(k, e), k = T.put(t, k || e.slice())
        }

        function d(t, e) {
            if (t) {
                e = e || [];
                var r = T.get(t);
                if (r) return c(e, r);
                t += "";
                var n = t.replace(/ /g, "").toLowerCase();
                if (n in M) return c(e, M[n]), f(t, e), e;
                if ("#" !== n.charAt(0)) {
                    var i = n.indexOf("("), a = n.indexOf(")");
                    if (-1 !== i && a + 1 === n.length) {
                        var l = n.substr(0, i), h = n.substr(i + 1, a - (i + 1)).split(","), d = 1;
                        switch (l) {
                            case"rgba":
                                if (4 !== h.length) return void u(e, 0, 0, 0, 1);
                                d = s(h.pop());
                            case"rgb":
                                return 3 !== h.length ? void u(e, 0, 0, 0, 1) : (u(e, o(h[0]), o(h[1]), o(h[2]), d), f(t, e), e);
                            case"hsla":
                                return 4 !== h.length ? void u(e, 0, 0, 0, 1) : (h[3] = s(h[3]), v(h, e), f(t, e), e);
                            case"hsl":
                                return 3 !== h.length ? void u(e, 0, 0, 0, 1) : (v(h, e), f(t, e), e);
                            default:
                                return
                        }
                    }
                    u(e, 0, 0, 0, 1)
                } else {
                    if (4 === n.length) {
                        var g = parseInt(n.substr(1), 16);
                        return g >= 0 && g <= 4095 ? (u(e, (3840 & g) >> 4 | (3840 & g) >> 8, 240 & g | (240 & g) >> 4, 15 & g | (15 & g) << 4, 1), f(t, e), e) : void u(e, 0, 0, 0, 1)
                    }
                    if (7 === n.length) {
                        var g = parseInt(n.substr(1), 16);
                        return g >= 0 && g <= 16777215 ? (u(e, (16711680 & g) >> 16, (65280 & g) >> 8, 255 & g, 1), f(t, e), e) : void u(e, 0, 0, 0, 1)
                    }
                }
            }
        }

        function v(t, e) {
            var r = (parseFloat(t[0]) % 360 + 360) % 360 / 360, i = s(t[1]), a = s(t[2]),
                o = a <= .5 ? a * (i + 1) : a + i - a * i, h = 2 * a - o;
            return e = e || [], u(e, n(255 * l(h, o, r + 1 / 3)), n(255 * l(h, o, r)), n(255 * l(h, o, r - 1 / 3)), 1), 4 === t.length && (e[3] = t[3]), e
        }

        function g(t) {
            if (t) {
                var e, r, n = t[0] / 255, i = t[1] / 255, a = t[2] / 255, o = Math.min(n, i, a), s = Math.max(n, i, a),
                    l = s - o, h = (s + o) / 2;
                if (0 === l) e = 0, r = 0; else {
                    r = h < .5 ? l / (s + o) : l / (2 - s - o);
                    var u = ((s - n) / 6 + l / 2) / l, c = ((s - i) / 6 + l / 2) / l, f = ((s - a) / 6 + l / 2) / l;
                    n === s ? e = f - c : i === s ? e = 1 / 3 + u - f : a === s && (e = 2 / 3 + c - u), e < 0 && (e += 1), e > 1 && (e -= 1)
                }
                var d = [360 * e, r, h];
                return null != t[3] && d.push(t[3]), d
            }
        }

        function p(t, e) {
            var r = d(t);
            if (r) {
                for (var n = 0; n < 3; n++) r[n] = e < 0 ? r[n] * (1 - e) | 0 : (255 - r[n]) * e + r[n] | 0;
                return b(r, 4 === r.length ? "rgba" : "rgb")
            }
        }

        function m(t) {
            var e = d(t);
            if (e) return ((1 << 24) + (e[0] << 16) + (e[1] << 8) + +e[2]).toString(16).slice(1)
        }

        function x(t, e, r) {
            if (e && e.length && t >= 0 && t <= 1) {
                r = r || [];
                var i = t * (e.length - 1), o = Math.floor(i), s = Math.ceil(i), l = e[o], u = e[s], c = i - o;
                return r[0] = n(h(l[0], u[0], c)), r[1] = n(h(l[1], u[1], c)), r[2] = n(h(l[2], u[2], c)), r[3] = a(h(l[3], u[3], c)), r
            }
        }

        function y(t, e, r) {
            if (e && e.length && t >= 0 && t <= 1) {
                var i = t * (e.length - 1), o = Math.floor(i), s = Math.ceil(i), l = d(e[o]), u = d(e[s]), c = i - o,
                    f = b([n(h(l[0], u[0], c)), n(h(l[1], u[1], c)), n(h(l[2], u[2], c)), a(h(l[3], u[3], c))], "rgba");
                return r ? {color: f, leftIndex: o, rightIndex: s, value: i} : f
            }
        }

        function w(t, e, r, n) {
            if (t = d(t)) return t = g(t), null != e && (t[0] = i(e)), null != r && (t[1] = s(r)), null != n && (t[2] = s(n)), b(v(t), "rgba")
        }

        function _(t, e) {
            if ((t = d(t)) && null != e) return t[3] = a(e), b(t, "rgba")
        }

        function b(t, e) {
            if (t && t.length) {
                var r = t[0] + "," + t[1] + "," + t[2];
                return "rgba" !== e && "hsva" !== e && "hsla" !== e || (r += "," + t[3]), e + "(" + r + ")"
            }
        }

        var S = r(14), M = {
            transparent: [0, 0, 0, 0],
            aliceblue: [240, 248, 255, 1],
            antiquewhite: [250, 235, 215, 1],
            aqua: [0, 255, 255, 1],
            aquamarine: [127, 255, 212, 1],
            azure: [240, 255, 255, 1],
            beige: [245, 245, 220, 1],
            bisque: [255, 228, 196, 1],
            black: [0, 0, 0, 1],
            blanchedalmond: [255, 235, 205, 1],
            blue: [0, 0, 255, 1],
            blueviolet: [138, 43, 226, 1],
            brown: [165, 42, 42, 1],
            burlywood: [222, 184, 135, 1],
            cadetblue: [95, 158, 160, 1],
            chartreuse: [127, 255, 0, 1],
            chocolate: [210, 105, 30, 1],
            coral: [255, 127, 80, 1],
            cornflowerblue: [100, 149, 237, 1],
            cornsilk: [255, 248, 220, 1],
            crimson: [220, 20, 60, 1],
            cyan: [0, 255, 255, 1],
            darkblue: [0, 0, 139, 1],
            darkcyan: [0, 139, 139, 1],
            darkgoldenrod: [184, 134, 11, 1],
            darkgray: [169, 169, 169, 1],
            darkgreen: [0, 100, 0, 1],
            darkgrey: [169, 169, 169, 1],
            darkkhaki: [189, 183, 107, 1],
            darkmagenta: [139, 0, 139, 1],
            darkolivegreen: [85, 107, 47, 1],
            darkorange: [255, 140, 0, 1],
            darkorchid: [153, 50, 204, 1],
            darkred: [139, 0, 0, 1],
            darksalmon: [233, 150, 122, 1],
            darkseagreen: [143, 188, 143, 1],
            darkslateblue: [72, 61, 139, 1],
            darkslategray: [47, 79, 79, 1],
            darkslategrey: [47, 79, 79, 1],
            darkturquoise: [0, 206, 209, 1],
            darkviolet: [148, 0, 211, 1],
            deeppink: [255, 20, 147, 1],
            deepskyblue: [0, 191, 255, 1],
            dimgray: [105, 105, 105, 1],
            dimgrey: [105, 105, 105, 1],
            dodgerblue: [30, 144, 255, 1],
            firebrick: [178, 34, 34, 1],
            floralwhite: [255, 250, 240, 1],
            forestgreen: [34, 139, 34, 1],
            fuchsia: [255, 0, 255, 1],
            gainsboro: [220, 220, 220, 1],
            ghostwhite: [248, 248, 255, 1],
            gold: [255, 215, 0, 1],
            goldenrod: [218, 165, 32, 1],
            gray: [128, 128, 128, 1],
            green: [0, 128, 0, 1],
            greenyellow: [173, 255, 47, 1],
            grey: [128, 128, 128, 1],
            honeydew: [240, 255, 240, 1],
            hotpink: [255, 105, 180, 1],
            indianred: [205, 92, 92, 1],
            indigo: [75, 0, 130, 1],
            ivory: [255, 255, 240, 1],
            khaki: [240, 230, 140, 1],
            lavender: [230, 230, 250, 1],
            lavenderblush: [255, 240, 245, 1],
            lawngreen: [124, 252, 0, 1],
            lemonchiffon: [255, 250, 205, 1],
            lightblue: [173, 216, 230, 1],
            lightcoral: [240, 128, 128, 1],
            lightcyan: [224, 255, 255, 1],
            lightgoldenrodyellow: [250, 250, 210, 1],
            lightgray: [211, 211, 211, 1],
            lightgreen: [144, 238, 144, 1],
            lightgrey: [211, 211, 211, 1],
            lightpink: [255, 182, 193, 1],
            lightsalmon: [255, 160, 122, 1],
            lightseagreen: [32, 178, 170, 1],
            lightskyblue: [135, 206, 250, 1],
            lightslategray: [119, 136, 153, 1],
            lightslategrey: [119, 136, 153, 1],
            lightsteelblue: [176, 196, 222, 1],
            lightyellow: [255, 255, 224, 1],
            lime: [0, 255, 0, 1],
            limegreen: [50, 205, 50, 1],
            linen: [250, 240, 230, 1],
            magenta: [255, 0, 255, 1],
            maroon: [128, 0, 0, 1],
            mediumaquamarine: [102, 205, 170, 1],
            mediumblue: [0, 0, 205, 1],
            mediumorchid: [186, 85, 211, 1],
            mediumpurple: [147, 112, 219, 1],
            mediumseagreen: [60, 179, 113, 1],
            mediumslateblue: [123, 104, 238, 1],
            mediumspringgreen: [0, 250, 154, 1],
            mediumturquoise: [72, 209, 204, 1],
            mediumvioletred: [199, 21, 133, 1],
            midnightblue: [25, 25, 112, 1],
            mintcream: [245, 255, 250, 1],
            mistyrose: [255, 228, 225, 1],
            moccasin: [255, 228, 181, 1],
            navajowhite: [255, 222, 173, 1],
            navy: [0, 0, 128, 1],
            oldlace: [253, 245, 230, 1],
            olive: [128, 128, 0, 1],
            olivedrab: [107, 142, 35, 1],
            orange: [255, 165, 0, 1],
            orangered: [255, 69, 0, 1],
            orchid: [218, 112, 214, 1],
            palegoldenrod: [238, 232, 170, 1],
            palegreen: [152, 251, 152, 1],
            paleturquoise: [175, 238, 238, 1],
            palevioletred: [219, 112, 147, 1],
            papayawhip: [255, 239, 213, 1],
            peachpuff: [255, 218, 185, 1],
            peru: [205, 133, 63, 1],
            pink: [255, 192, 203, 1],
            plum: [221, 160, 221, 1],
            powderblue: [176, 224, 230, 1],
            purple: [128, 0, 128, 1],
            red: [255, 0, 0, 1],
            rosybrown: [188, 143, 143, 1],
            royalblue: [65, 105, 225, 1],
            saddlebrown: [139, 69, 19, 1],
            salmon: [250, 128, 114, 1],
            sandybrown: [244, 164, 96, 1],
            seagreen: [46, 139, 87, 1],
            seashell: [255, 245, 238, 1],
            sienna: [160, 82, 45, 1],
            silver: [192, 192, 192, 1],
            skyblue: [135, 206, 235, 1],
            slateblue: [106, 90, 205, 1],
            slategray: [112, 128, 144, 1],
            slategrey: [112, 128, 144, 1],
            snow: [255, 250, 250, 1],
            springgreen: [0, 255, 127, 1],
            steelblue: [70, 130, 180, 1],
            tan: [210, 180, 140, 1],
            teal: [0, 128, 128, 1],
            thistle: [216, 191, 216, 1],
            tomato: [255, 99, 71, 1],
            turquoise: [64, 224, 208, 1],
            violet: [238, 130, 238, 1],
            wheat: [245, 222, 179, 1],
            white: [255, 255, 255, 1],
            whitesmoke: [245, 245, 245, 1],
            yellow: [255, 255, 0, 1],
            yellowgreen: [154, 205, 50, 1]
        }, T = new S(20), k = null, C = x, P = y;
        e.parse = d, e.lift = p, e.toHex = m, e.fastLerp = x, e.fastMapToColor = C, e.lerp = y, e.mapToColor = P, e.modifyHSL = w, e.modifyAlpha = _, e.stringify = b
    }, function (t, e) {
        var r = 1;
        "undefined" != typeof window && (r = Math.max(window.devicePixelRatio || 1, 1));
        var n = r;
        e.debugMode = 0, e.devicePixelRatio = n
    }, function (t, e, r) {
        function n(t) {
            return i(t), M(t.rich, i), t
        }

        function i(t) {
            if (t) {
                t.font = P.makeFont(t);
                var e = t.textAlign;
                "middle" === e && (e = "center"), t.textAlign = null == e || O[e] ? e : "left";
                var r = t.textVerticalAlign || t.textBaseline;
                "center" === r && (r = "middle"), t.textVerticalAlign = null == r || D[r] ? r : "top";
                t.textPadding && (t.textPadding = T(t.textPadding))
            }
        }

        function a(t, e, r, n, i) {
            n.rich ? s(t, e, r, n, i) : o(t, e, r, n, i)
        }

        function o(t, e, r, n, i) {
            var a = g(e, "font", n.font || P.DEFAULT_FONT), o = n.textPadding, s = t.__textCotentBlock;
            s && !t.__dirty || (s = t.__textCotentBlock = P.parsePlainText(r, a, o, n.truncate));
            var l = s.outerHeight, u = s.lines, d = s.lineHeight, x = v(l, n, i), w = x.baseX, _ = x.baseY,
                b = x.textAlign, S = x.textVerticalAlign;
            h(e, n, i, w, _);
            var M = P.adjustTextY(_, l, S), T = w, k = M, C = c(n);
            if (C || o) {
                var I = P.getWidth(r, a), A = I;
                o && (A += o[1] + o[3]);
                var O = P.adjustTextX(w, A, b);
                C && f(t, e, n, O, M, A, l), o && (T = y(w, b, o), k += o[0])
            }
            g(e, "textAlign", b || "left"), g(e, "textBaseline", "middle"), g(e, "shadowBlur", n.textShadowBlur || 0), g(e, "shadowColor", n.textShadowColor || "transparent"), g(e, "shadowOffsetX", n.textShadowOffsetX || 0), g(e, "shadowOffsetY", n.textShadowOffsetY || 0), k += d / 2;
            var D = n.textStrokeWidth, L = p(n.textStroke, D), F = m(n.textFill);
            L && (g(e, "lineWidth", D), g(e, "strokeStyle", L)), F && g(e, "fillStyle", F);
            for (var R = 0; R < u.length; R++) L && e.strokeText(u[R], T, k), F && e.fillText(u[R], T, k), k += d
        }

        function s(t, e, r, n, i) {
            var a = t.__textCotentBlock;
            a && !t.__dirty || (a = t.__textCotentBlock = P.parseRichText(r, n)), l(t, e, a, n, i)
        }

        function l(t, e, r, n, i) {
            var a = r.width, o = r.outerWidth, s = r.outerHeight, l = n.textPadding, d = v(s, n, i), g = d.baseX,
                p = d.baseY, m = d.textAlign, x = d.textVerticalAlign;
            h(e, n, i, g, p);
            var y = P.adjustTextX(g, o, m), w = P.adjustTextY(p, s, x), _ = y, b = w;
            l && (_ += l[3], b += l[0]);
            var S = _ + a;
            c(n) && f(t, e, n, y, w, o, s);
            for (var M = 0; M < r.lines.length; M++) {
                for (var T, k = r.lines[M], C = k.tokens, I = C.length, A = k.lineHeight, O = k.width, D = 0, L = _, F = S, R = I - 1; D < I && (T = C[D], !T.textAlign || "left" === T.textAlign);) u(t, e, T, n, A, b, L, "left"), O -= T.width, L += T.width, D++;
                for (; R >= 0 && (T = C[R], "right" === T.textAlign);) u(t, e, T, n, A, b, F, "right"), O -= T.width, F -= T.width, R--;
                for (L += (a - (L - _) - (S - F) - O) / 2; D <= R;) T = C[D], u(t, e, T, n, A, b, L + T.width / 2, "center"), L += T.width, D++;
                b += A
            }
        }

        function h(t, e, r, n, i) {
            if (r && e.textRotation) {
                var a = e.textOrigin;
                "center" === a ? (n = r.width / 2 + r.x, i = r.height / 2 + r.y) : a && (n = a[0] + r.x, i = a[1] + r.y), t.translate(n, i), t.rotate(-e.textRotation), t.translate(-n, -i)
            }
        }

        function u(t, e, r, n, i, a, o, s) {
            var l = n.rich[r.styleName] || {}, h = r.textVerticalAlign, u = a + i / 2;
            "top" === h ? u = a + r.height / 2 : "bottom" === h && (u = a + i - r.height / 2), !r.isLineHolder && c(l) && f(t, e, l, "right" === s ? o - r.width : "center" === s ? o - r.width / 2 : o, u - r.height / 2, r.width, r.height);
            var d = r.textPadding;
            d && (o = y(o, s, d), u -= r.height / 2 - d[2] - r.textHeight / 2), g(e, "shadowBlur", S(l.textShadowBlur, n.textShadowBlur, 0)), g(e, "shadowColor", l.textShadowColor || n.textShadowColor || "transparent"), g(e, "shadowOffsetX", S(l.textShadowOffsetX, n.textShadowOffsetX, 0)), g(e, "shadowOffsetY", S(l.textShadowOffsetY, n.textShadowOffsetY, 0)), g(e, "textAlign", s), g(e, "textBaseline", "middle"), g(e, "font", r.font || P.DEFAULT_FONT);
            var v = p(l.textStroke || n.textStroke, w), x = m(l.textFill || n.textFill),
                w = b(l.textStrokeWidth, n.textStrokeWidth);
            v && (g(e, "lineWidth", w), g(e, "strokeStyle", v), e.strokeText(r.text, o, u)), x && (g(e, "fillStyle", x), e.fillText(r.text, o, u))
        }

        function c(t) {
            return t.textBackgroundColor || t.textBorderWidth && t.textBorderColor
        }

        function f(t, e, r, n, i, a, o) {
            var s = r.textBackgroundColor, l = r.textBorderWidth, h = r.textBorderColor, u = k(s);
            if (g(e, "shadowBlur", r.textBoxShadowBlur || 0), g(e, "shadowColor", r.textBoxShadowColor || "transparent"), g(e, "shadowOffsetX", r.textBoxShadowOffsetX || 0), g(e, "shadowOffsetY", r.textBoxShadowOffsetY || 0), u || l && h) {
                e.beginPath();
                var c = r.textBorderRadius;
                c ? I.buildPath(e, {x: n, y: i, width: a, height: o, r: c}) : e.rect(n, i, a, o), e.closePath()
            }
            if (u) g(e, "fillStyle", s), e.fill(); else if (C(s)) {
                var f = s.image;
                f = A.createOrUpdateImage(f, null, t, d, s), f && A.isImageReady(f) && e.drawImage(f, n, i, a, o)
            }
            l && h && (g(e, "lineWidth", l), g(e, "strokeStyle", h), e.stroke())
        }

        function d(t, e) {
            e.image = t
        }

        function v(t, e, r) {
            var n = e.x || 0, i = e.y || 0, a = e.textAlign, o = e.textVerticalAlign;
            if (r) {
                var s = e.textPosition;
                if (s instanceof Array) n = r.x + x(s[0], r.width), i = r.y + x(s[1], r.height); else {
                    var l = P.adjustTextPositionOnRect(s, r, e.textDistance);
                    n = l.x, i = l.y, a = a || l.textAlign, o = o || l.textVerticalAlign
                }
                var h = e.textOffset;
                h && (n += h[0], i += h[1])
            }
            return {baseX: n, baseY: i, textAlign: a, textVerticalAlign: o}
        }

        function g(t, e, r) {
            return t[e] = r, t[e]
        }

        function p(t, e) {
            return null == t || e <= 0 || "transparent" === t || "none" === t ? null : t.image || t.colorStops ? "#000" : t
        }

        function m(t) {
            return null == t || "none" === t ? null : t.image || t.colorStops ? "#000" : t
        }

        function x(t, e) {
            return "string" == typeof t ? t.lastIndexOf("%") >= 0 ? parseFloat(t) / 100 * e : parseFloat(t) : t
        }

        function y(t, e, r) {
            return "right" === e ? t - r[1] : "center" === e ? t + r[3] / 2 - r[1] / 2 : t + r[3]
        }

        function w(t, e) {
            return null != t && (t || e.textBackgroundColor || e.textBorderWidth && e.textBorderColor || e.textPadding)
        }

        var _ = r(0), b = _.retrieve2, S = _.retrieve3, M = _.each, T = _.normalizeCssArray, k = _.isString,
            C = _.isObject, P = r(5), I = r(21), A = r(10), O = {left: 1, right: 1, center: 1},
            D = {top: 1, bottom: 1, middle: 1};
        e.normalizeTextStyle = n, e.renderText = a, e.getStroke = p, e.getFill = m, e.needDrawText = w
    }, function (t, e) {
        function r(t, e) {
            var r, n, i, a, o = e.x, s = e.y, l = e.width, h = e.height, u = e.r;
            l < 0 && (o += l, l = -l), h < 0 && (s += h, h = -h), "number" == typeof u ? r = n = i = a = u : u instanceof Array ? 1 === u.length ? r = n = i = a = u[0] : 2 === u.length ? (r = i = u[0], n = a = u[1]) : 3 === u.length ? (r = u[0], n = a = u[1], i = u[2]) : (r = u[0], n = u[1], i = u[2], a = u[3]) : r = n = i = a = 0;
            var c;
            r + n > l && (c = r + n, r *= l / c, n *= l / c), i + a > l && (c = i + a, i *= l / c, a *= l / c), n + i > h && (c = n + i, n *= h / c, i *= h / c), r + a > h && (c = r + a, r *= h / c, a *= h / c), t.moveTo(o + r, s), t.lineTo(o + l - n, s), 0 !== n && t.quadraticCurveTo(o + l, s, o + l, s + n), t.lineTo(o + l, s + h - i), 0 !== i && t.quadraticCurveTo(o + l, s + h, o + l - i, s + h), t.lineTo(o + a, s + h), 0 !== a && t.quadraticCurveTo(o, s + h, o, s + h - a), t.lineTo(o, s + r), 0 !== r && t.quadraticCurveTo(o, s, o + r, s)
        }

        e.buildPath = r
    }, function (t, e) {
        function r(t) {
            return t %= n, t < 0 && (t += n), t
        }

        var n = 2 * Math.PI;
        e.normalizeRadian = r
    }, function (t, e, r) {
        function n(t, e, r) {
            var n = e.points, o = e.smooth;
            if (n && n.length >= 2) {
                if (o && "spline" !== o) {
                    var s = a(n, o, r, e.smoothConstraint);
                    t.moveTo(n[0][0], n[0][1]);
                    for (var l = n.length, h = 0; h < (r ? l : l - 1); h++) {
                        var u = s[2 * h], c = s[2 * h + 1], f = n[(h + 1) % l];
                        t.bezierCurveTo(u[0], u[1], c[0], c[1], f[0], f[1])
                    }
                } else {
                    "spline" === o && (n = i(n, r)), t.moveTo(n[0][0], n[0][1]);
                    for (var h = 1, d = n.length; h < d; h++) t.lineTo(n[h][0], n[h][1])
                }
                r && t.closePath()
            }
        }

        var i = r(66), a = r(67);
        e.buildPath = n
    }, function (t, e) {
        var r = function (t) {
            this.colorStops = t || []
        };
        r.prototype = {
            constructor: r, addColorStop: function (t, e) {
                this.colorStops.push({offset: t, color: e})
            }
        };
        var n = r;
        t.exports = n
    }, function (t, e, r) {
        t.exports = r(26)
    }, function (t, e, r) {
        function n(t) {
            for (var e = t.getContext("2d"), r = e.getImageData(0, 0, t.width, t.height), n = e.createImageData(r), i = 0, a = 0, o = 0; o < r.data.length; o += 4) {
                var s = r.data[o + 3];
                if (s > 128) {
                    var l = r.data[o] + r.data[o + 1] + r.data[o + 2];
                    i += l, ++a
                }
            }
            for (var h = i / a, o = 0; o < r.data.length; o += 4) {
                var l = r.data[o] + r.data[o + 1] + r.data[o + 2], s = r.data[o + 3];
                s < 128 || l > h ? (n.data[o] = 0, n.data[o + 1] = 0, n.data[o + 2] = 0, n.data[o + 3] = 0) : (n.data[o] = 255, n.data[o + 1] = 255, n.data[o + 2] = 255, n.data[o + 3] = 255)
            }
            e.putImageData(n, 0, 0)
        }

        var i = r(7), a = r(27);
        r(28), r(77);
        var o = r(78);
        if (!o.isSupported) throw new Error("Sorry your browser not support wordCloud");
        i.registerLayout(function (t, e) {
            t.eachSeriesByType("wordCloud", function (r) {
                function s(t) {
                    var e = t.detail.item;
                    t.detail.drawn && r.layoutInstance.ondraw && (t.detail.drawn.gx += l.x / m, t.detail.drawn.gy += l.y / m, r.layoutInstance.ondraw(e[0], e[1], e[2], t.detail.drawn))
                }

                var l = a.getLayoutRect(r.getBoxLayoutParams(), {width: e.getWidth(), height: e.getHeight()}),
                    h = r.getData(), u = document.createElement("canvas");
                u.width = l.width, u.height = l.height;
                var c = u.getContext("2d"), f = r.get("maskImage");
                if (f) try {
                    c.drawImage(f, 0, 0, u.width, u.height), n(u)
                } catch (t) {
                    console.error("Invalid mask image"), console.error(t.toString())
                }
                var d = r.get("sizeRange"), v = r.get("rotationRange"), g = h.getDataExtent("value"), p = Math.PI / 180,
                    m = r.get("gridSize");
                o(u, {
                    list: h.mapArray("value", function (t, e) {
                        var r = h.getItemModel(e);
                        return [h.getName(e), r.get("textStyle.normal.textSize", !0) || i.number.linearMap(t, g, d), e]
                    }).sort(function (t, e) {
                        return e[1] - t[1]
                    }),
                    fontFamily: r.get("textStyle.normal.fontFamily") || r.get("textStyle.emphasis.fontFamily") || t.get("textStyle.fontFamily"),
                    fontWeight: r.get("textStyle.normal.fontWeight") || r.get("textStyle.emphasis.fontWeight") || t.get("textStyle.fontWeight"),
                    gridSize: m,
                    ellipticity: l.height / l.width,
                    minRotation: v[0] * p,
                    maxRotation: v[1] * p,
                    clearCanvas: !f,
                    rotateRatio: 1,
                    rotationStep: r.get("rotationStep") * p,
                    drawOutOfBound: r.get("drawOutOfBound"),
                    shuffle: !1,
                    shape: r.get("shape")
                }), u.addEventListener("wordclouddrawn", s), r.layoutInstance && r.layoutInstance.dispose(), r.layoutInstance = {
                    ondraw: null,
                    dispose: function () {
                        u.removeEventListener("wordclouddrawn", s), u.addEventListener("wordclouddrawn", function (t) {
                            t.preventDefault()
                        })
                    }
                }
            })
        }), i.registerPreprocessor(function (t) {
            function e(t) {
                t && i.util.each(n, function (e) {
                    t.hasOwnProperty(e) && (t["text" + i.format.capitalFirst(e)] = t[e])
                })
            }

            var r = (t || {}).series;
            !i.util.isArray(r) && (r = r ? [r] : []);
            var n = ["shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"];
            i.util.each(r, function (t) {
                if (t && "wordCloud" === t.type) {
                    var r = t.textStyle || {};
                    e(r.normal), e(r.emphasis)
                }
            })
        })
    }, function (t, e, r) {
        function n(t, e, r, n, i) {
            var a = 0, o = 0;
            null == n && (n = 1 / 0), null == i && (i = 1 / 0);
            var s = 0;
            e.eachChild(function (l, h) {
                var u, c, f = l.position, d = l.getBoundingRect(), v = e.childAt(h + 1), g = v && v.getBoundingRect();
                if ("horizontal" === t) {
                    var p = d.width + (g ? -g.x + d.x : 0);
                    u = a + p, u > n || l.newline ? (a = 0, u = p, o += s + r, s = d.height) : s = Math.max(s, d.height)
                } else {
                    var m = d.height + (g ? -g.y + d.y : 0);
                    c = o + m, c > i || l.newline ? (a += s + r, o = 0, c = m, s = d.width) : s = Math.max(s, d.width)
                }
                l.newline || (f[0] = a, f[1] = o, "horizontal" === t ? a = u + r : o = c + r)
            })
        }

        function i(t, e, r) {
            var n = e.width, i = e.height, a = v(t.x, n), o = v(t.y, i), s = v(t.x2, n), l = v(t.y2, i);
            return (isNaN(a) || isNaN(parseFloat(t.x))) && (a = 0), (isNaN(s) || isNaN(parseFloat(t.x2))) && (s = n), (isNaN(o) || isNaN(parseFloat(t.y))) && (o = 0), (isNaN(l) || isNaN(parseFloat(t.y2))) && (l = i), r = g.normalizeCssArray(r || 0), {
                width: Math.max(s - a - r[1] - r[3], 0),
                height: Math.max(l - o - r[0] - r[2], 0)
            }
        }

        function a(t, e, r) {
            r = g.normalizeCssArray(r || 0);
            var n = e.width, i = e.height, a = v(t.left, n), o = v(t.top, i), s = v(t.right, n), l = v(t.bottom, i),
                h = v(t.width, n), u = v(t.height, i), c = r[2] + r[0], d = r[1] + r[3], p = t.aspect;
            switch (isNaN(h) && (h = n - s - d - a), isNaN(u) && (u = i - l - c - o), null != p && (isNaN(h) && isNaN(u) && (p > n / i ? h = .8 * n : u = .8 * i), isNaN(h) && (h = p * u), isNaN(u) && (u = h / p)), isNaN(a) && (a = n - s - h - d), isNaN(o) && (o = i - l - u - c), t.left || t.right) {
                case"center":
                    a = n / 2 - h / 2 - r[3];
                    break;
                case"right":
                    a = n - h - d
            }
            switch (t.top || t.bottom) {
                case"middle":
                case"center":
                    o = i / 2 - u / 2 - r[0];
                    break;
                case"bottom":
                    o = i - u - c
            }
            a = a || 0, o = o || 0, isNaN(h) && (h = n - d - a - (s || 0)), isNaN(u) && (u = i - c - o - (l || 0));
            var m = new f(a + r[3], o + r[0], h, u);
            return m.margin = r, m
        }

        function o(t, e, r, n, i) {
            var o = !i || !i.hv || i.hv[0], s = !i || !i.hv || i.hv[1], l = i && i.boundingMode || "all";
            if (o || s) {
                var h;
                if ("raw" === l) h = "group" === t.type ? new f(0, 0, +e.width || 0, +e.height || 0) : t.getBoundingRect(); else if (h = t.getBoundingRect(), t.needLocalTransform()) {
                    var u = t.getLocalTransform();
                    h = h.clone(), h.applyTransform(u)
                }
                e = a(c.defaults({width: h.width, height: h.height}, e), r, n);
                var d = t.position, v = o ? e.x - h.x : 0, g = s ? e.y - h.y : 0;
                t.attr("position", "raw" === l ? [v, g] : [d[0] + v, d[1] + g])
            }
        }

        function s(t, e) {
            return null != t[x[e][0]] || null != t[x[e][1]] && null != t[x[e][2]]
        }

        function l(t, e, r) {
            function n(r, n) {
                var o = {}, l = 0, h = {}, u = 0;
                if (p(r, function (e) {
                    h[e] = t[e]
                }), p(r, function (t) {
                    i(e, t) && (o[t] = h[t] = e[t]), a(o, t) && l++, a(h, t) && u++
                }), s[n]) return a(e, r[1]) ? h[r[2]] = null : a(e, r[2]) && (h[r[1]] = null), h;
                if (2 !== u && l) {
                    if (l >= 2) return o;
                    for (var c = 0; c < r.length; c++) {
                        var f = r[c];
                        if (!i(o, f) && i(t, f)) {
                            o[f] = t[f];
                            break
                        }
                    }
                    return o
                }
                return h
            }

            function i(t, e) {
                return t.hasOwnProperty(e)
            }

            function a(t, e) {
                return null != t[e] && "auto" !== t[e]
            }

            function o(t, e, r) {
                p(t, function (t) {
                    e[t] = r[t]
                })
            }

            !c.isObject(r) && (r = {});
            var s = r.ignoreSize;
            !c.isArray(s) && (s = [s, s]);
            var l = n(x[0], 0), h = n(x[1], 1);
            o(x[0], t, l), o(x[1], t, h)
        }

        function h(t) {
            return u({}, t)
        }

        function u(t, e) {
            return e && t && p(m, function (r) {
                e.hasOwnProperty(r) && (t[r] = e[r])
            }), t
        }

        var c = r(0), f = r(3), d = r(9), v = d.parsePercent, g = r(13), p = c.each,
            m = ["left", "right", "top", "bottom", "width", "height"],
            x = [["width", "left", "right"], ["height", "top", "bottom"]], y = n, w = c.curry(n, "vertical"),
            _ = c.curry(n, "horizontal");
        e.LOCATION_PARAMS = m, e.HV_NAMES = x, e.box = y, e.vbox = w, e.hbox = _, e.getAvailableSize = i, e.getLayoutRect = a, e.positionElement = o, e.sizeCalculable = s, e.mergeLayoutParam = l, e.getLayoutParams = h, e.copyLayoutParams = u
    }, function (t, e, r) {
        var n = r(29), i = r(7);
        i.extendSeriesModel({
            type: "series.wordCloud",
            visualColorAccessPath: "textStyle.normal.color",
            optionUpdated: function () {
                var t = this.option;
                t.gridSize = Math.max(Math.floor(t.gridSize), 4)
            },
            getInitialData: function (t, e) {
                var r = n(["value"], t.data), a = new i.List(r, this);
                return a.initData(t.data), a
            },
            defaultOption: {
                maskImage: null,
                shape: "circle",
                left: "center",
                top: "center",
                width: "70%",
                height: "80%",
                sizeRange: [12, 60],
                rotationRange: [-90, 90],
                rotationStep: 45,
                gridSize: 8,
                drawOutOfBound: !1,
                textStyle: {normal: {fontWeight: "normal"}}
            }
        })
    }, function (t, e, r) {
        function n(t, e, r) {
            function n(t, e, r) {
                c[e] ? t.otherDims[e] = r : (t.coordDim = e, t.coordDimIndex = r, p.set(e, !0))
            }

            function o(t, e, r) {
                if (r || null != e.get(t)) {
                    for (var n = 0; null != e.get(t + n);) n++;
                    t += n
                }
                return e.set(t, !0), t
            }

            e = e || [], r = r || {}, t = (t || []).slice();
            var d = (r.dimsDef || []).slice(), v = a.createHashMap(r.encodeDef), g = a.createHashMap(),
                p = a.createHashMap(), m = [], x = r.dimCount;
            if (null == x) {
                var y = i(e[0]);
                x = Math.max(a.isArray(y) && y.length || 1, t.length, d.length), l(t, function (t) {
                    var e = t.dimsDef;
                    e && (x = Math.max(x, e.length))
                })
            }
            for (var w = 0; w < x; w++) {
                var _ = h(d[w]) ? {name: d[w]} : d[w] || {}, b = _.name, S = m[w] = {otherDims: {}};
                null != b && null == g.get(b) && (S.name = S.tooltipName = b, g.set(b, w)), null != _.type && (S.type = _.type)
            }
            v.each(function (t, e) {
                t = v.set(e, s(t).slice()), l(t, function (r, i) {
                    h(r) && (r = g.get(r)), null != r && r < x && (t[i] = r, n(m[r], e, i))
                })
            });
            var M = 0;
            l(t, function (t, e) {
                var r, t, i, o;
                h(t) ? (r = t, t = {}) : (r = t.name, t = a.clone(t), i = t.dimsDef, o = t.otherDims, t.name = t.coordDim = t.coordDimIndex = t.dimsDef = t.otherDims = null);
                var c = s(v.get(r));
                if (!c.length) for (var f = 0; f < (i && i.length || 1); f++) {
                    for (; M < m.length && null != m[M].coordDim;) M++;
                    M < m.length && c.push(M++)
                }
                l(c, function (e, a) {
                    var s = m[e];
                    n(u(s, t), r, a), null == s.name && i && (s.name = s.tooltipName = i[a]), o && u(s.otherDims, o)
                })
            });
            for (var T = r.extraPrefix || "value", k = 0; k < x; k++) {
                var S = m[k] = m[k] || {};
                null == S.coordDim && (S.coordDim = o(T, p, r.extraFromZero), S.coordDimIndex = 0, S.isExtraCoord = !0), null == S.name && (S.name = o(S.coordDim, g)), null == S.type && f(e, k) && (S.type = "ordinal")
            }
            return m
        }

        function i(t) {
            return a.isArray(t) ? t : a.isObject(t) ? t.value : t
        }

        var a = r(0), o = r(30), s = o.normalizeToArray, l = a.each, h = a.isString, u = a.defaults,
            c = {tooltip: 1, label: 1, itemName: 1}, f = n.guessOrdinal = function (t, e) {
                for (var r = 0, n = t.length; r < n; r++) {
                    var o = i(t[r]);
                    if (!a.isArray(o)) return !1;
                    var o = o[e];
                    if (null != o && isFinite(o) && "" !== o) return !1;
                    if (h(o) && "-" !== o) return !0
                }
                return !1
            }, d = n;
        t.exports = d
    }, function (t, e, r) {
        function n(t) {
            return t instanceof Array ? t : null == t ? [] : [t]
        }

        function i(t, e) {
            if (t) for (var r = t.emphasis = t.emphasis || {}, n = t.normal = t.normal || {}, i = 0, a = e.length; i < a; i++) {
                var o = e[i];
                !r.hasOwnProperty(o) && n.hasOwnProperty(o) && (r[o] = n[o])
            }
        }

        function a(t) {
            return t && (null == t.value ? t : t.value)
        }

        function o(t) {
            return M(t) && !(t instanceof Array)
        }

        function s(t, e) {
            var r = e && e.type;
            return "ordinal" === r ? t : ("time" === r && "number" != typeof t && null != t && "-" !== t && (t = +_.parseDate(t)), null == t || "" === t ? NaN : +t)
        }

        function l(t, e) {
            var r = new b;
            return y.mixin(r, k), r.seriesIndex = e.seriesIndex, r.name = e.name || "", r.mainType = e.mainType, r.subType = e.subType, r.getData = function () {
                return t
            }, r
        }

        function h(t, e) {
            e = (e || []).slice();
            var r = y.map(t || [], function (t, e) {
                return {exist: t}
            });
            return S(e, function (t, n) {
                if (M(t)) {
                    for (var i = 0; i < r.length; i++) if (!r[i].option && null != t.id && r[i].exist.id === t.id + "") return r[i].option = t, void (e[n] = null);
                    for (var i = 0; i < r.length; i++) {
                        var a = r[i].exist;
                        if (!(r[i].option || null != a.id && null != t.id || null == t.name || c(t) || c(a) || a.name !== t.name + "")) return r[i].option = t, void (e[n] = null)
                    }
                }
            }), S(e, function (t, e) {
                if (M(t)) {
                    for (var n = 0; n < r.length; n++) {
                        var i = r[n].exist;
                        if (!r[n].option && !c(i) && null == t.id) {
                            r[n].option = t;
                            break
                        }
                    }
                    n >= r.length && r.push({option: t})
                }
            }), r
        }

        function u(t) {
            var e = y.createHashMap();
            S(t, function (t, r) {
                var n = t.exist;
                n && e.set(n.id, t)
            }), S(t, function (t, r) {
                var n = t.option;
                y.assert(!n || null == n.id || !e.get(n.id) || e.get(n.id) === t, "id duplicates: " + (n && n.id)), n && null != n.id && e.set(n.id, t), !t.keyInfo && (t.keyInfo = {})
            }), S(t, function (t, r) {
                var n = t.exist, i = t.option, a = t.keyInfo;
                if (M(i)) {
                    if (a.name = null != i.name ? i.name + "" : n ? n.name : "\0-", n) a.id = n.id; else if (null != i.id) a.id = i.id + ""; else {
                        var o = 0;
                        do {
                            a.id = "\0" + a.name + "\0" + o++
                        } while (e.get(a.id))
                    }
                    e.set(a.id, t)
                }
            })
        }

        function c(t) {
            return M(t) && t.id && 0 === (t.id + "").indexOf("\0_ec_\0")
        }

        function f(t, e) {
            function r(t, e, r) {
                for (var i = 0, a = t.length; i < a; i++) for (var o = t[i].seriesId, s = n(t[i].dataIndex), l = r && r[o], h = 0, u = s.length; h < u; h++) {
                    var c = s[h];
                    l && l[c] ? l[c] = null : (e[o] || (e[o] = {}))[c] = 1
                }
            }

            function i(t, e) {
                var r = [];
                for (var n in t) if (t.hasOwnProperty(n) && null != t[n]) if (e) r.push(+n); else {
                    var a = i(t[n], !0);
                    a.length && r.push({seriesId: n, dataIndex: a})
                }
                return r
            }

            var a = {}, o = {};
            return r(t || [], a), r(e || [], o, a), [i(a), i(o)]
        }

        function d(t, e) {
            return null != e.dataIndexInside ? e.dataIndexInside : null != e.dataIndex ? y.isArray(e.dataIndex) ? y.map(e.dataIndex, function (e) {
                return t.indexOfRawIndex(e)
            }) : t.indexOfRawIndex(e.dataIndex) : null != e.name ? y.isArray(e.name) ? y.map(e.name, function (e) {
                return t.indexOfName(e)
            }) : t.indexOfName(e.name) : void 0
        }

        function v(t, e, r) {
            if (y.isString(e)) {
                var n = {};
                n[e + "Index"] = 0, e = n
            }
            var i = r && r.defaultMainType;
            !i || x(e, i + "Index") || x(e, i + "Id") || x(e, i + "Name") || (e[i + "Index"] = 0);
            var a = {};
            return S(e, function (n, i) {
                var n = e[i];
                if ("dataIndex" === i || "dataIndexInside" === i) return void (a[i] = n);
                var o = i.match(/^(\w+)(Index|Id|Name)$/) || [], s = o[1], l = (o[2] || "").toLowerCase();
                if (!(!s || !l || null == n || "index" === l && "none" === n || r && r.includeMainTypes && y.indexOf(r.includeMainTypes, s) < 0)) {
                    var h = {mainType: s};
                    "index" === l && "all" === n || (h[l] = n);
                    var u = t.queryComponents(h);
                    a[s + "Models"] = u, a[s + "Model"] = u[0]
                }
            }), a
        }

        function g(t, e) {
            var r = t.dimensions;
            e = t.getDimension(e);
            for (var n = 0; n < r.length; n++) {
                var i = t.getDimensionInfo(r[n]);
                if (i.name === e) return i.coordDim
            }
        }

        function p(t, e) {
            var r = [];
            return S(t.dimensions, function (n) {
                var i = t.getDimensionInfo(n);
                i.coordDim === e && (r[i.coordDimIndex] = i.name)
            }), r
        }

        function m(t, e) {
            var r = [];
            return S(t.dimensions, function (n) {
                var i = t.getDimensionInfo(n), a = i.otherDims, o = a[e];
                null != o && !1 !== o && (r[o] = i.name)
            }), r
        }

        function x(t, e) {
            return t && t.hasOwnProperty(e)
        }

        var y = r(0), w = r(13), _ = r(9), b = r(31), S = y.each, M = y.isObject,
            T = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "rich", "tag", "color", "textBorderColor", "textBorderWidth", "width", "height", "lineHeight", "align", "verticalAlign", "baseline", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY", "backgroundColor", "borderColor", "borderWidth", "borderRadius", "padding"],
            k = {
                getDataParams: function (t, e) {
                    var r = this.getData(e), n = this.getRawValue(t, e), i = r.getRawIndex(t), a = r.getName(t, !0),
                        o = r.getRawDataItem(t), s = r.getItemVisual(t, "color");
                    return {
                        componentType: this.mainType,
                        componentSubType: this.subType,
                        seriesType: "series" === this.mainType ? this.subType : null,
                        seriesIndex: this.seriesIndex,
                        seriesId: this.id,
                        seriesName: this.name,
                        name: a,
                        dataIndex: i,
                        data: o,
                        dataType: e,
                        value: n,
                        color: s,
                        marker: w.getTooltipMarker(s),
                        $vars: ["seriesName", "name", "value"]
                    }
                }, getFormattedLabel: function (t, e, r, n, i) {
                    e = e || "normal";
                    var a = this.getData(r), o = a.getItemModel(t), s = this.getDataParams(t, r);
                    null != n && s.value instanceof Array && (s.value = s.value[n]);
                    var l = o.get([i || "label", e, "formatter"]);
                    return "function" == typeof l ? (s.status = e, l(s)) : "string" == typeof l ? w.formatTpl(l, s) : void 0
                }, getRawValue: function (t, e) {
                    var r = this.getData(e), n = r.getRawDataItem(t);
                    if (null != n) return !M(n) || n instanceof Array ? n : n.value
                }, formatTooltip: y.noop
            }, C = function () {
                var t = 0;
                return function () {
                    var e = "\0__ec_prop_getter_" + t++;
                    return function (t) {
                        return t[e] || (t[e] = {})
                    }
                }
            }();
        e.normalizeToArray = n, e.defaultEmphasis = i, e.TEXT_STYLE_OPTIONS = T, e.getDataItemValue = a, e.isDataItemOption = o, e.converDataValue = s, e.createDataFormatModel = l, e.dataFormatMixin = k, e.mappingToExists = h, e.makeIdAndName = u, e.isIdInner = c, e.compressBatches = f, e.queryDataIndex = d, e.makeGetter = C, e.parseFinder = v, e.dataDimToCoordDim = g, e.coordDimToDataDim = p, e.otherDimToDataDim = m
    }, function (t, e, r) {
        function n(t, e, r) {
            this.parentModel = e, this.ecModel = r, this.option = t
        }

        function i(t, e, r) {
            for (var n = 0; n < e.length && (!e[n] || null != (t = t && "object" == typeof t ? t[e[n]] : null)); n++) ;
            return null == t && r && (t = r.get(e)), t
        }

        function a(t, e) {
            var r = l.get(t, "getParent");
            return r ? r.call(t, e) : t.parentModel
        }

        var o = r(0), s = r(15), l = r(32), h = r(35), u = r(36), c = r(37), f = r(76), d = o.mixin;
        n.prototype = {
            constructor: n, init: null, mergeOption: function (t) {
                o.merge(this.option, t, !0)
            }, get: function (t, e) {
                return null == t ? this.option : i(this.option, this.parsePath(t), !e && a(this, t))
            }, getShallow: function (t, e) {
                var r = this.option, n = null == r ? r : r[t], i = !e && a(this, t);
                return null == n && i && (n = i.getShallow(t)), n
            }, getModel: function (t, e) {
                var r, o = null == t ? this.option : i(this.option, t = this.parsePath(t));
                return e = e || (r = a(this, t)) && r.getModel(t), new n(o, e, this.ecModel)
            }, isEmpty: function () {
                return null == this.option
            }, restoreData: function () {
            }, clone: function () {
                return new (0, this.constructor)(o.clone(this.option))
            }, setReadOnly: function (t) {
                l.setReadOnly(this, t)
            }, parsePath: function (t) {
                return "string" == typeof t && (t = t.split(".")), t
            }, customizeGetParent: function (t) {
                l.set(this, "getParent", t)
            }, isAnimationEnabled: function () {
                if (!s.node) {
                    if (null != this.option.animation) return !!this.option.animation;
                    if (this.parentModel) return this.parentModel.isAnimationEnabled()
                }
            }
        }, l.enableClassExtend(n), d(n, h), d(n, u), d(n, c), d(n, f);
        var v = n;
        t.exports = v
    }, function (t, e, r) {
        function n(t, e, r) {
            return t[m + e] = r
        }

        function i(t, e) {
            return t[m + e]
        }

        function a(t, e) {
            return t.hasOwnProperty(m + e)
        }

        function o(t) {
            var e = {main: "", sub: ""};
            return t && (t = t.split(g), e.main = t[0] || "", e.sub = t[1] || ""), e
        }

        function s(t) {
            v.assert(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(t), 'componentType "' + t + '" illegal')
        }

        function l(t, e) {
            t.$constructor = t, t.extend = function (t) {
                var e = this, r = function () {
                    t.$constructor ? t.$constructor.apply(this, arguments) : e.apply(this, arguments)
                };
                return v.extend(r.prototype, t), r.extend = this.extend, r.superCall = h, r.superApply = u, v.inherits(r, this), r.superClass = e, r
            }
        }

        function h(t, e) {
            var r = v.slice(arguments, 2);
            return this.superClass.prototype[e].apply(t, r)
        }

        function u(t, e, r) {
            return this.superClass.prototype[e].apply(t, r)
        }

        function c(t, e) {
            function r(t) {
                var e = n[t.main];
                return e && e[p] || (e = n[t.main] = {}, e[p] = !0), e
            }

            e = e || {};
            var n = {};
            if (t.registerClass = function (t, e) {
                if (e) if (s(e), e = o(e), e.sub) {
                    if (e.sub !== p) {
                        var i = r(e);
                        i[e.sub] = t
                    }
                } else n[e.main] = t;
                return t
            }, t.getClass = function (t, e, r) {
                var i = n[t];
                if (i && i[p] && (i = e ? i[e] : null), r && !i) throw new Error(e ? "Component " + t + "." + (e || "") + " not exists. Load it first." : t + ".type should be specified.");
                return i
            }, t.getClassesByMainType = function (t) {
                t = o(t);
                var e = [], r = n[t.main];
                return r && r[p] ? v.each(r, function (t, r) {
                    r !== p && e.push(t)
                }) : e.push(r), e
            }, t.hasClass = function (t) {
                return t = o(t), !!n[t.main]
            }, t.getAllClassMainTypes = function () {
                var t = [];
                return v.each(n, function (e, r) {
                    t.push(r)
                }), t
            }, t.hasSubTypes = function (t) {
                t = o(t);
                var e = n[t.main];
                return e && e[p]
            }, t.parseClassType = o, e.registerWhenExtend) {
                var i = t.extend;
                i && (t.extend = function (e) {
                    var r = i.call(this, e);
                    return t.registerClass(r, e.type)
                })
            }
            return t
        }

        function f(t, e) {
        }

        var d = r(33), v = (d.__DEV__, r(0)), g = ".", p = "___EC__COMPONENT__CONTAINER___", m = "\0ec_\0";
        e.set = n, e.get = i, e.hasOwn = a, e.parseClassType = o, e.enableClassExtend = l, e.enableClassManagement = c, e.setReadOnly = f
    }, function (t, e, r) {
        (function (t) {
            var r;
            "undefined" != typeof window ? r = window.__DEV__ : void 0 !== t && (r = t.__DEV__), void 0 === r && (r = !0);
            var n = r;
            e.__DEV__ = n
        }).call(e, r(34))
    }, function (t, e) {
        var r;
        r = function () {
            return this
        }();
        try {
            r = r || Function("return this")() || (0, eval)("this")
        } catch (t) {
            "object" == typeof window && (r = window)
        }
        t.exports = r
    }, function (t, e, r) {
        var n = r(11),
            i = n([["lineWidth", "width"], ["stroke", "color"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"]]),
            a = {
                getLineStyle: function (t) {
                    var e = i(this, t), r = this.getLineDash(e.lineWidth);
                    return r && (e.lineDash = r), e
                }, getLineDash: function (t) {
                    null == t && (t = 1);
                    var e = this.get("type"), r = Math.max(t, 2), n = 4 * t;
                    return "solid" === e || null == e ? null : "dashed" === e ? [n, n] : [r, r]
                }
            };
        t.exports = a
    }, function (t, e, r) {
        var n = r(11),
            i = n([["fill", "color"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["opacity"], ["shadowColor"]]),
            a = {
                getAreaStyle: function (t, e) {
                    return i(this, t, e)
                }
            };
        t.exports = a
    }, function (t, e, r) {
        var n = r(5), i = r(38), a = ["textStyle", "color"], o = {
            getTextColor: function (t) {
                var e = this.ecModel;
                return this.getShallow("color") || (!t && e ? e.get(a) : null)
            }, getFont: function () {
                return i.getFont({
                    fontStyle: this.getShallow("fontStyle"),
                    fontWeight: this.getShallow("fontWeight"),
                    fontSize: this.getShallow("fontSize"),
                    fontFamily: this.getShallow("fontFamily")
                }, this.ecModel)
            }, getTextRect: function (t) {
                return n.getBoundingRect(t, this.getFont(), this.getShallow("align"), this.getShallow("verticalAlign") || this.getShallow("baseline"), this.getShallow("padding"), this.getShallow("rich"), this.getShallow("truncateText"))
            }
        };
        t.exports = o
    }, function (t, e, r) {
        function n(t) {
            return Z.extend(t)
        }

        function i(t, e) {
            return V.extendFromString(t, e)
        }

        function a(t, e, r, n) {
            var i = V.createFromString(t, e), a = i.getBoundingRect();
            return r && ("center" === n && (r = s(r, a)), l(i, r)), i
        }

        function o(t, e, r) {
            var n = new K({
                style: {image: t, x: e.x, y: e.y, width: e.width, height: e.height}, onload: function (t) {
                    if ("center" === r) {
                        var i = {width: t.width, height: t.height};
                        n.setStyle(s(e, i))
                    }
                }
            });
            return n
        }

        function s(t, e) {
            var r, n = e.width / e.height, i = t.height * n;
            return i <= t.width ? r = t.height : (i = t.width, r = i / n), {
                x: t.x + t.width / 2 - i / 2,
                y: t.y + t.height / 2 - r / 2,
                width: i,
                height: r
            }
        }

        function l(t, e) {
            if (t.applyTransform) {
                var r = t.getBoundingRect(), n = r.calculateTransform(e);
                t.applyTransform(n)
            }
        }

        function h(t) {
            var e = t.shape, r = t.style.lineWidth;
            return vt(2 * e.x1) === vt(2 * e.x2) && (e.x1 = e.x2 = c(e.x1, r, !0)), vt(2 * e.y1) === vt(2 * e.y2) && (e.y1 = e.y2 = c(e.y1, r, !0)), t
        }

        function u(t) {
            var e = t.shape, r = t.style.lineWidth, n = e.x, i = e.y, a = e.width, o = e.height;
            return e.x = c(e.x, r, !0), e.y = c(e.y, r, !0), e.width = Math.max(c(n + a, r, !1) - e.x, 0 === a ? 0 : 1), e.height = Math.max(c(i + o, r, !1) - e.y, 0 === o ? 0 : 1), t
        }

        function c(t, e, r) {
            var n = vt(2 * t);
            return (n + vt(e)) % 2 == 0 ? n / 2 : (n + (r ? 1 : -1)) / 2
        }

        function f(t) {
            return null != t && "none" != t
        }

        function d(t) {
            return "string" == typeof t ? G.lift(t, -.1) : t
        }

        function v(t) {
            if (t.__hoverStlDirty) {
                var e = t.style.stroke, r = t.style.fill, n = t.__hoverStl;
                n.fill = n.fill || (f(r) ? d(r) : null), n.stroke = n.stroke || (f(e) ? d(e) : null);
                var i = {};
                for (var a in n) null != n[a] && (i[a] = t.style[a]);
                t.__normalStl = i, t.__hoverStlDirty = !1
            }
        }

        function g(t) {
            if (!t.__isHover) {
                if (v(t), t.useHoverLayer) t.__zr && t.__zr.addHover(t, t.__hoverStl); else {
                    var e = t.style, r = e.insideRollbackOpt;
                    r && L(e), e.extendFrom(t.__hoverStl), r && (D(e, e.insideOriginalTextPosition, r), null == e.textFill && (e.textFill = r.autoColor)), t.dirty(!1), t.z2 += 1
                }
                t.__isHover = !0
            }
        }

        function p(t) {
            if (t.__isHover) {
                var e = t.__normalStl;
                t.useHoverLayer ? t.__zr && t.__zr.removeHover(t) : (e && t.setStyle(e), t.z2 -= 1), t.__isHover = !1
            }
        }

        function m(t) {
            "group" === t.type ? t.traverse(function (t) {
                "group" !== t.type && g(t)
            }) : g(t)
        }

        function x(t) {
            "group" === t.type ? t.traverse(function (t) {
                "group" !== t.type && p(t)
            }) : p(t)
        }

        function y(t, e) {
            t.__hoverStl = t.hoverStyle || e || {}, t.__hoverStlDirty = !0, t.__isHover && v(t)
        }

        function w(t) {
            this.__hoverSilentOnTouch && t.zrByTouch || !this.__isEmphasis && m(this)
        }

        function _(t) {
            this.__hoverSilentOnTouch && t.zrByTouch || !this.__isEmphasis && x(this)
        }

        function b() {
            this.__isEmphasis = !0, m(this)
        }

        function S() {
            this.__isEmphasis = !1, x(this)
        }

        function M(t, e, r) {
            t.__hoverSilentOnTouch = r && r.hoverSilentOnTouch, "group" === t.type ? t.traverse(function (t) {
                "group" !== t.type && y(t, e)
            }) : y(t, e), t.on("mouseover", w).on("mouseout", _), t.on("emphasis", b).on("normal", S)
        }

        function T(t, e, r, n, i, a, o) {
            i = i || mt;
            var s = i.labelFetcher, l = i.labelDataIndex, h = i.labelDimIndex, u = r.getShallow("show"),
                c = n.getShallow("show"),
                f = u || c ? Y.retrieve2(s ? s.getFormattedLabel(l, "normal", null, h) : null, i.defaultText) : null,
                d = u ? f : null, v = c ? Y.retrieve2(s ? s.getFormattedLabel(l, "emphasis", null, h) : null, f) : null;
            null == d && null == v || (k(t, r, a, i), k(e, n, o, i, !0)), t.text = d, e.text = v
        }

        function k(t, e, r, n, i) {
            return P(t, e, n, i), r && Y.extend(t, r), t.host && t.host.dirty && t.host.dirty(!1), t
        }

        function C(t, e, r) {
            var n, i = {isRectText: !0};
            !1 === r ? n = !0 : i.autoColor = r, P(t, e, i, n), t.host && t.host.dirty && t.host.dirty(!1)
        }

        function P(t, e, r, n) {
            if (r = r || mt, r.isRectText) {
                var i = e.getShallow("position") || (n ? null : "inside");
                "outside" === i && (i = "top"), t.textPosition = i, t.textOffset = e.getShallow("offset");
                var a = e.getShallow("rotate");
                null != a && (a *= Math.PI / 180), t.textRotation = a, t.textDistance = Y.retrieve2(e.getShallow("distance"), n ? null : 5)
            }
            var o, s = e.ecModel, l = s && s.option.textStyle, h = I(e);
            if (h) {
                o = {};
                for (var u in h) if (h.hasOwnProperty(u)) {
                    var c = e.getModel(["rich", u]);
                    A(o[u] = {}, c, l, r, n)
                }
            }
            return t.rich = o, A(t, e, l, r, n, !0), r.forceRich && !r.textStyle && (r.textStyle = {}), t
        }

        function I(t) {
            for (var e; t && t !== t.ecModel;) {
                var r = (t.option || mt).rich;
                if (r) {
                    e = e || {};
                    for (var n in r) r.hasOwnProperty(n) && (e[n] = 1)
                }
                t = t.parentModel
            }
            return e
        }

        function A(t, e, r, n, i, a) {
            if (r = !i && r || mt, t.textFill = O(e.getShallow("color"), n) || r.color, t.textStroke = O(e.getShallow("textBorderColor"), n) || r.textBorderColor, t.textStrokeWidth = Y.retrieve2(e.getShallow("textBorderWidth"), r.textBorderWidth), !i) {
                if (a) {
                    var o = t.textPosition;
                    t.insideRollback = D(t, o, n), t.insideOriginalTextPosition = o, t.insideRollbackOpt = n
                }
                null == t.textFill && (t.textFill = n.autoColor)
            }
            t.fontStyle = e.getShallow("fontStyle") || r.fontStyle, t.fontWeight = e.getShallow("fontWeight") || r.fontWeight, t.fontSize = e.getShallow("fontSize") || r.fontSize, t.fontFamily = e.getShallow("fontFamily") || r.fontFamily, t.textAlign = e.getShallow("align"), t.textVerticalAlign = e.getShallow("verticalAlign") || e.getShallow("baseline"), t.textLineHeight = e.getShallow("lineHeight"), t.textWidth = e.getShallow("width"), t.textHeight = e.getShallow("height"), t.textTag = e.getShallow("tag"), a && n.disableBox || (t.textBackgroundColor = O(e.getShallow("backgroundColor"), n), t.textPadding = e.getShallow("padding"), t.textBorderColor = O(e.getShallow("borderColor"), n), t.textBorderWidth = e.getShallow("borderWidth"), t.textBorderRadius = e.getShallow("borderRadius"), t.textBoxShadowColor = e.getShallow("shadowColor"), t.textBoxShadowBlur = e.getShallow("shadowBlur"), t.textBoxShadowOffsetX = e.getShallow("shadowOffsetX"), t.textBoxShadowOffsetY = e.getShallow("shadowOffsetY")), t.textShadowColor = e.getShallow("textShadowColor") || r.textShadowColor, t.textShadowBlur = e.getShallow("textShadowBlur") || r.textShadowBlur, t.textShadowOffsetX = e.getShallow("textShadowOffsetX") || r.textShadowOffsetX, t.textShadowOffsetY = e.getShallow("textShadowOffsetY") || r.textShadowOffsetY
        }

        function O(t, e) {
            return "auto" !== t ? t : e && e.autoColor ? e.autoColor : null
        }

        function D(t, e, r) {
            var n, i = r.useInsideStyle;
            return null == t.textFill && !1 !== i && (!0 === i || r.isRectText && e && "string" == typeof e && e.indexOf("inside") >= 0) && (n = {
                textFill: null,
                textStroke: t.textStroke,
                textStrokeWidth: t.textStrokeWidth
            }, t.textFill = "#fff", null == t.textStroke && (t.textStroke = r.autoColor, null == t.textStrokeWidth && (t.textStrokeWidth = 2))), n
        }

        function L(t) {
            var e = t.insideRollback;
            e && (t.textFill = e.textFill, t.textStroke = e.textStroke, t.textStrokeWidth = e.textStrokeWidth)
        }

        function F(t, e) {
            var r = e || e.getModel("textStyle");
            return [t.fontStyle || r && r.getShallow("fontStyle") || "", t.fontWeight || r && r.getShallow("fontWeight") || "", (t.fontSize || r && r.getShallow("fontSize") || 12) + "px", t.fontFamily || r && r.getShallow("fontFamily") || "sans-serif"].join(" ")
        }

        function R(t, e, r, n, i, a) {
            if ("function" == typeof i && (a = i, i = null), n && n.isAnimationEnabled()) {
                var o = t ? "Update" : "", s = n.getShallow("animationDuration" + o),
                    l = n.getShallow("animationEasing" + o), h = n.getShallow("animationDelay" + o);
                "function" == typeof h && (h = h(i, n.getAnimationDelayParams ? n.getAnimationDelayParams(e, i) : null)), "function" == typeof s && (s = s(i)), s > 0 ? e.animateTo(r, s, h || 0, l, a, !!a) : (e.stopAnimation(), e.attr(r), a && a())
            } else e.stopAnimation(), e.attr(r), a && a()
        }

        function B(t, e, r, n, i) {
            R(!0, t, e, r, n, i)
        }

        function z(t, e, r, n, i) {
            R(!1, t, e, r, n, i)
        }

        function N(t, e) {
            for (var r = U.identity([]); t && t !== e;) U.mul(r, t.getLocalTransform(), r), t = t.parent;
            return r
        }

        function E(t, e, r) {
            return e && !Y.isArrayLike(e) && (e = Q.getLocalTransform(e)), r && (e = U.invert([], e)), $.applyTransform([], t, e)
        }

        function W(t, e, r) {
            var n = 0 === e[4] || 0 === e[5] || 0 === e[0] ? 1 : Math.abs(2 * e[4] / e[0]),
                i = 0 === e[4] || 0 === e[5] || 0 === e[2] ? 1 : Math.abs(2 * e[4] / e[2]),
                a = ["left" === t ? -n : "right" === t ? n : 0, "top" === t ? -i : "bottom" === t ? i : 0];
            return a = E(a, e, r), Math.abs(a[0]) > Math.abs(a[1]) ? a[0] > 0 ? "right" : "left" : a[1] > 0 ? "bottom" : "top"
        }

        function q(t, e, r, n) {
            function i(t) {
                var e = {position: $.clone(t.position), rotation: t.rotation};
                return t.shape && (e.shape = Y.extend({}, t.shape)), e
            }

            if (t && e) {
                var a = function (t) {
                    var e = {};
                    return t.traverse(function (t) {
                        !t.isGroup && t.anid && (e[t.anid] = t)
                    }), e
                }(t);
                e.traverse(function (t) {
                    if (!t.isGroup && t.anid) {
                        var e = a[t.anid];
                        if (e) {
                            var n = i(t);
                            t.attr(i(e)), B(t, n, r, t.dataIndex)
                        }
                    }
                })
            }
        }

        function H(t, e) {
            return Y.map(t, function (t) {
                var r = t[0];
                r = gt(r, e.x), r = pt(r, e.x + e.width);
                var n = t[1];
                return n = gt(n, e.y), n = pt(n, e.y + e.height), [r, n]
            })
        }

        function j(t, e) {
            var r = gt(t.x, e.x), n = pt(t.x + t.width, e.x + e.width), i = gt(t.y, e.y),
                a = pt(t.y + t.height, e.y + e.height);
            if (n >= r && a >= i) return {x: r, y: i, width: n - r, height: a - i}
        }

        function X(t, e, r) {
            e = Y.extend({rectHover: !0}, e);
            var n = e.style = {strokeNoScale: !0};
            if (r = r || {
                x: -1,
                y: -1,
                width: 2,
                height: 2
            }, t) return 0 === t.indexOf("image://") ? (n.image = t.slice(8), Y.defaults(n, r), new K(e)) : a(t.replace("path://", ""), e, r, "center")
        }

        var Y = r(0), V = r(39), G = r(18), U = r(8), $ = r(2), Z = r(1), Q = r(17), K = r(58);
        e.Image = K;
        var J = r(59);
        e.Group = J;
        var tt = r(60);
        e.Text = tt;
        var et = r(61);
        e.Circle = et;
        var rt = r(62);
        e.Sector = rt;
        var nt = r(64);
        e.Ring = nt;
        var it = r(65);
        e.Polygon = it;
        var at = r(68);
        e.Polyline = at;
        var ot = r(69);
        e.Rect = ot;
        var st = r(70);
        e.Line = st;
        var lt = r(71);
        e.BezierCurve = lt;
        var ht = r(72);
        e.Arc = ht;
        var ut = r(73);
        e.CompoundPath = ut;
        var ct = r(74);
        e.LinearGradient = ct;
        var ft = r(75);
        e.RadialGradient = ft;
        var dt = r(3);
        e.BoundingRect = dt;
        var vt = Math.round, gt = Math.max, pt = Math.min, mt = {}, xt = V.mergePath;
        e.extendShape = n, e.extendPath = i, e.makePath = a, e.makeImage = o, e.mergePath = xt, e.resizePath = l, e.subPixelOptimizeLine = h, e.subPixelOptimizeRect = u, e.subPixelOptimize = c, e.setHoverStyle = M, e.setLabelStyle = T, e.setTextStyle = k, e.setText = C, e.getFont = F, e.updateProps = B, e.initProps = z, e.getTransform = N, e.applyTransform = E, e.transformDirection = W, e.groupTransition = q, e.clipPointsByRect = H, e.clipRectByRect = j, e.createIcon = X
    }, function (t, e, r) {
        function n(t, e, r, n, i, a, o, s, l, h, u) {
            var c = l * (p / 180), f = g(c) * (t - r) / 2 + v(c) * (e - n) / 2,
                m = -1 * v(c) * (t - r) / 2 + g(c) * (e - n) / 2, w = f * f / (o * o) + m * m / (s * s);
            w > 1 && (o *= d(w), s *= d(w));
            var _ = (i === a ? -1 : 1) * d((o * o * (s * s) - o * o * (m * m) - s * s * (f * f)) / (o * o * (m * m) + s * s * (f * f))) || 0,
                b = _ * o * m / s, S = _ * -s * f / o, M = (t + r) / 2 + g(c) * b - v(c) * S,
                T = (e + n) / 2 + v(c) * b + g(c) * S, k = y([1, 0], [(f - b) / o, (m - S) / s]),
                C = [(f - b) / o, (m - S) / s], P = [(-1 * f - b) / o, (-1 * m - S) / s], I = y(C, P);
            x(C, P) <= -1 && (I = p), x(C, P) >= 1 && (I = 0), 0 === a && I > 0 && (I -= 2 * p), 1 === a && I < 0 && (I += 2 * p), u.addData(h, M, T, o, s, k, I, c, a)
        }

        function i(t) {
            if (!t) return [];
            var e, r = t.replace(/-/g, " -").replace(/  /g, " ").replace(/ /g, ",").replace(/,,/g, ",");
            for (e = 0; e < f.length; e++) r = r.replace(new RegExp(f[e], "g"), "|" + f[e]);
            var i, a = r.split("|"), o = 0, s = 0, l = new u, h = u.CMD;
            for (e = 1; e < a.length; e++) {
                var c, d = a[e], v = d.charAt(0), g = 0, p = d.slice(1).replace(/e,-/g, "e-").split(",");
                p.length > 0 && "" === p[0] && p.shift();
                for (var m = 0; m < p.length; m++) p[m] = parseFloat(p[m]);
                for (; g < p.length && !isNaN(p[g]) && !isNaN(p[0]);) {
                    var x, y, w, _, b, S, M, T = o, k = s;
                    switch (v) {
                        case"l":
                            o += p[g++], s += p[g++], c = h.L, l.addData(c, o, s);
                            break;
                        case"L":
                            o = p[g++], s = p[g++], c = h.L, l.addData(c, o, s);
                            break;
                        case"m":
                            o += p[g++], s += p[g++], c = h.M, l.addData(c, o, s), v = "l";
                            break;
                        case"M":
                            o = p[g++], s = p[g++], c = h.M, l.addData(c, o, s), v = "L";
                            break;
                        case"h":
                            o += p[g++], c = h.L, l.addData(c, o, s);
                            break;
                        case"H":
                            o = p[g++], c = h.L, l.addData(c, o, s);
                            break;
                        case"v":
                            s += p[g++], c = h.L, l.addData(c, o, s);
                            break;
                        case"V":
                            s = p[g++], c = h.L, l.addData(c, o, s);
                            break;
                        case"C":
                            c = h.C, l.addData(c, p[g++], p[g++], p[g++], p[g++], p[g++], p[g++]), o = p[g - 2], s = p[g - 1];
                            break;
                        case"c":
                            c = h.C, l.addData(c, p[g++] + o, p[g++] + s, p[g++] + o, p[g++] + s, p[g++] + o, p[g++] + s), o += p[g - 2], s += p[g - 1];
                            break;
                        case"S":
                            x = o, y = s;
                            var C = l.len(), P = l.data;
                            i === h.C && (x += o - P[C - 4], y += s - P[C - 3]), c = h.C, T = p[g++], k = p[g++], o = p[g++], s = p[g++], l.addData(c, x, y, T, k, o, s);
                            break;
                        case"s":
                            x = o, y = s;
                            var C = l.len(), P = l.data;
                            i === h.C && (x += o - P[C - 4], y += s - P[C - 3]), c = h.C, T = o + p[g++], k = s + p[g++], o += p[g++], s += p[g++], l.addData(c, x, y, T, k, o, s);
                            break;
                        case"Q":
                            T = p[g++], k = p[g++], o = p[g++], s = p[g++], c = h.Q, l.addData(c, T, k, o, s);
                            break;
                        case"q":
                            T = p[g++] + o, k = p[g++] + s, o += p[g++], s += p[g++], c = h.Q, l.addData(c, T, k, o, s);
                            break;
                        case"T":
                            x = o, y = s;
                            var C = l.len(), P = l.data;
                            i === h.Q && (x += o - P[C - 4], y += s - P[C - 3]), o = p[g++], s = p[g++], c = h.Q, l.addData(c, x, y, o, s);
                            break;
                        case"t":
                            x = o, y = s;
                            var C = l.len(), P = l.data;
                            i === h.Q && (x += o - P[C - 4], y += s - P[C - 3]), o += p[g++], s += p[g++], c = h.Q, l.addData(c, x, y, o, s);
                            break;
                        case"A":
                            w = p[g++], _ = p[g++], b = p[g++], S = p[g++], M = p[g++], T = o, k = s, o = p[g++], s = p[g++], c = h.A, n(T, k, o, s, S, M, w, _, b, c, l);
                            break;
                        case"a":
                            w = p[g++], _ = p[g++], b = p[g++], S = p[g++], M = p[g++], T = o, k = s, o += p[g++], s += p[g++], c = h.A, n(T, k, o, s, S, M, w, _, b, c, l)
                    }
                }
                "z" !== v && "Z" !== v || (c = h.Z, l.addData(c)), i = c
            }
            return l.toStatic(), l
        }

        function a(t, e) {
            var r = i(t);
            return e = e || {}, e.buildPath = function (t) {
                if (t.setData) {
                    t.setData(r.data);
                    var e = t.getContext();
                    e && t.rebuildPath(e)
                } else {
                    var e = t;
                    r.rebuildPath(e)
                }
            }, e.applyTransform = function (t) {
                c(r, t), this.dirty(!0)
            }, e
        }

        function o(t, e) {
            return new h(a(t, e))
        }

        function s(t, e) {
            return h.extend(a(t, e))
        }

        function l(t, e) {
            for (var r = [], n = t.length, i = 0; i < n; i++) {
                var a = t[i];
                a.path || a.createPathProxy(), a.__dirtyPath && a.buildPath(a.path, a.shape, !0), r.push(a.path)
            }
            var o = new h(e);
            return o.createPathProxy(), o.buildPath = function (t) {
                t.appendPath(r);
                var e = t.getContext();
                e && t.rebuildPath(e)
            }, o
        }

        var h = r(1), u = r(6), c = r(57),
            f = ["m", "M", "l", "L", "v", "V", "h", "H", "z", "Z", "c", "C", "q", "Q", "t", "T", "s", "S", "a", "A"],
            d = Math.sqrt, v = Math.sin, g = Math.cos, p = Math.PI, m = function (t) {
                return Math.sqrt(t[0] * t[0] + t[1] * t[1])
            }, x = function (t, e) {
                return (t[0] * e[0] + t[1] * e[1]) / (m(t) * m(e))
            }, y = function (t, e) {
                return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(x(t, e))
            };
        e.createFromString = o, e.extendFromString = s, e.mergePath = l
    }, function (t, e) {
        function r(t, e, r) {
            var n = null == e.x ? 0 : e.x, i = null == e.x2 ? 1 : e.x2, a = null == e.y ? 0 : e.y,
                o = null == e.y2 ? 0 : e.y2;
            return e.global || (n = n * r.width + r.x, i = i * r.width + r.x, a = a * r.height + r.y, o = o * r.height + r.y), t.createLinearGradient(n, a, i, o)
        }

        function n(t, e, r) {
            var n = r.width, i = r.height, a = Math.min(n, i), o = null == e.x ? .5 : e.x, s = null == e.y ? .5 : e.y,
                l = null == e.r ? .5 : e.r;
            return e.global || (o = o * n + r.x, s = s * i + r.y, l *= a), t.createRadialGradient(o, s, 0, o, s, l)
        }

        var i = [["shadowBlur", 0], ["shadowOffsetX", 0], ["shadowOffsetY", 0], ["shadowColor", "#000"], ["lineCap", "butt"], ["lineJoin", "miter"], ["miterLimit", 10]],
            a = function (t, e) {
                this.extendFrom(t, !1), this.host = e
            };
        a.prototype = {
            constructor: a,
            host: null,
            fill: "#000",
            stroke: null,
            opacity: 1,
            lineDash: null,
            lineDashOffset: 0,
            shadowBlur: 0,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            lineWidth: 1,
            strokeNoScale: !1,
            text: null,
            font: null,
            textFont: null,
            fontStyle: null,
            fontWeight: null,
            fontSize: null,
            fontFamily: null,
            textTag: null,
            textFill: "#000",
            textStroke: null,
            textWidth: null,
            textHeight: null,
            textStrokeWidth: 0,
            textLineHeight: null,
            textPosition: "inside",
            textRect: null,
            textOffset: null,
            textAlign: null,
            textVerticalAlign: null,
            textDistance: 5,
            textShadowColor: "transparent",
            textShadowBlur: 0,
            textShadowOffsetX: 0,
            textShadowOffsetY: 0,
            textBoxShadowColor: "transparent",
            textBoxShadowBlur: 0,
            textBoxShadowOffsetX: 0,
            textBoxShadowOffsetY: 0,
            transformText: !1,
            textRotation: 0,
            textOrigin: null,
            textBackgroundColor: null,
            textBorderColor: null,
            textBorderWidth: 0,
            textBorderRadius: 0,
            textPadding: null,
            rich: null,
            truncate: null,
            blend: null,
            bind: function (t, e, r) {
                for (var n = this, a = r && r.style, o = !a, s = 0; s < i.length; s++) {
                    var l = i[s], h = l[0];
                    (o || n[h] !== a[h]) && (t[h] = n[h] || l[1])
                }
                if ((o || n.fill !== a.fill) && (t.fillStyle = n.fill), (o || n.stroke !== a.stroke) && (t.strokeStyle = n.stroke), (o || n.opacity !== a.opacity) && (t.globalAlpha = null == n.opacity ? 1 : n.opacity), (o || n.blend !== a.blend) && (t.globalCompositeOperation = n.blend || "source-over"), this.hasStroke()) {
                    var u = n.lineWidth;
                    t.lineWidth = u / (this.strokeNoScale && e && e.getLineScale ? e.getLineScale() : 1)
                }
            },
            hasFill: function () {
                var t = this.fill;
                return null != t && "none" !== t
            },
            hasStroke: function () {
                var t = this.stroke;
                return null != t && "none" !== t && this.lineWidth > 0
            },
            extendFrom: function (t, e) {
                if (t) for (var r in t) !t.hasOwnProperty(r) || !0 !== e && (!1 === e ? this.hasOwnProperty(r) : null == t[r]) || (this[r] = t[r])
            },
            set: function (t, e) {
                "string" == typeof t ? this[t] = e : this.extendFrom(t, !0)
            },
            clone: function () {
                var t = new this.constructor;
                return t.extendFrom(this, !0), t
            },
            getGradient: function (t, e, i) {
                for (var a = "radial" === e.type ? n : r, o = a(t, e, i), s = e.colorStops, l = 0; l < s.length; l++) o.addColorStop(s[l].offset, s[l].color);
                return o
            }
        };
        for (var o = a.prototype, s = 0; s < i.length; s++) {
            var l = i[s];
            l[0] in o || (o[l[0]] = l[1])
        }
        a.getGradient = o.getGradient;
        var h = a;
        t.exports = h
    }, function (t, e) {
        function r() {
            return n++
        }

        var n = 2311;
        t.exports = r
    }, function (t, e) {
        var r = Array.prototype.slice, n = function () {
            this._$handlers = {}
        };
        n.prototype = {
            constructor: n, one: function (t, e, r) {
                var n = this._$handlers;
                if (!e || !t) return this;
                n[t] || (n[t] = []);
                for (var i = 0; i < n[t].length; i++) if (n[t][i].h === e) return this;
                return n[t].push({h: e, one: !0, ctx: r || this}), this
            }, on: function (t, e, r) {
                var n = this._$handlers;
                if (!e || !t) return this;
                n[t] || (n[t] = []);
                for (var i = 0; i < n[t].length; i++) if (n[t][i].h === e) return this;
                return n[t].push({h: e, one: !1, ctx: r || this}), this
            }, isSilent: function (t) {
                var e = this._$handlers;
                return e[t] && e[t].length
            }, off: function (t, e) {
                var r = this._$handlers;
                if (!t) return this._$handlers = {}, this;
                if (e) {
                    if (r[t]) {
                        for (var n = [], i = 0, a = r[t].length; i < a; i++) r[t][i].h != e && n.push(r[t][i]);
                        r[t] = n
                    }
                    r[t] && 0 === r[t].length && delete r[t]
                } else delete r[t];
                return this
            }, trigger: function (t) {
                if (this._$handlers[t]) {
                    var e = arguments, n = e.length;
                    n > 3 && (e = r.call(e, 1));
                    for (var i = this._$handlers[t], a = i.length, o = 0; o < a;) {
                        switch (n) {
                            case 1:
                                i[o].h.call(i[o].ctx);
                                break;
                            case 2:
                                i[o].h.call(i[o].ctx, e[1]);
                                break;
                            case 3:
                                i[o].h.call(i[o].ctx, e[1], e[2]);
                                break;
                            default:
                                i[o].h.apply(i[o].ctx, e)
                        }
                        i[o].one ? (i.splice(o, 1), a--) : o++
                    }
                }
                return this
            }, triggerWithContext: function (t) {
                if (this._$handlers[t]) {
                    var e = arguments, n = e.length;
                    n > 4 && (e = r.call(e, 1, e.length - 1));
                    for (var i = e[e.length - 1], a = this._$handlers[t], o = a.length, s = 0; s < o;) {
                        switch (n) {
                            case 1:
                                a[s].h.call(i);
                                break;
                            case 2:
                                a[s].h.call(i, e[1]);
                                break;
                            case 3:
                                a[s].h.call(i, e[1], e[2]);
                                break;
                            default:
                                a[s].h.apply(i, e)
                        }
                        a[s].one ? (a.splice(s, 1), o--) : s++
                    }
                }
                return this
            }
        };
        var i = n;
        t.exports = i
    }, function (t, e, r) {
        var n = r(44), i = r(47), a = r(0), o = a.isString, s = a.isFunction, l = a.isObject, h = a.isArrayLike,
            u = a.indexOf, c = function () {
                this.animators = []
            };
        c.prototype = {
            constructor: c, animate: function (t, e) {
                var r, a = !1, o = this, s = this.__zr;
                if (t) {
                    var l = t.split("."), h = o;
                    a = "shape" === l[0];
                    for (var c = 0, f = l.length; c < f; c++) h && (h = h[l[c]]);
                    h && (r = h)
                } else r = o;
                if (!r) return void i('Property "' + t + '" is not existed in element ' + o.id);
                var d = o.animators, v = new n(r, e);
                return v.during(function (t) {
                    o.dirty(a)
                }).done(function () {
                    d.splice(u(d, v), 1)
                }), d.push(v), s && s.animation.addAnimator(v), v
            }, stopAnimation: function (t) {
                for (var e = this.animators, r = e.length, n = 0; n < r; n++) e[n].stop(t);
                return e.length = 0, this
            }, animateTo: function (t, e, r, n, i, a) {
                function l() {
                    --u || i && i()
                }

                o(r) ? (i = n, n = r, r = 0) : s(n) ? (i = n, n = "linear", r = 0) : s(r) ? (i = r, r = 0) : s(e) ? (i = e, e = 500) : e || (e = 500), this.stopAnimation(), this._animateToShallow("", this, t, e, r);
                var h = this.animators.slice(), u = h.length;
                u || i && i();
                for (var c = 0; c < h.length; c++) h[c].done(l).start(n, a)
            }, _animateToShallow: function (t, e, r, n, i) {
                var a = {}, o = 0;
                for (var s in r) if (r.hasOwnProperty(s)) if (null != e[s]) l(r[s]) && !h(r[s]) ? this._animateToShallow(t ? t + "." + s : s, e[s], r[s], n, i) : (a[s] = r[s], o++); else if (null != r[s]) if (t) {
                    var u = {};
                    u[t] = {}, u[t][s] = r[s], this.attr(u)
                } else this.attr(s, r[s]);
                return o > 0 && this.animate(t, !1).when(null == n ? 500 : n, a).delay(i || 0), this
            }
        };
        var f = c;
        t.exports = f
    }, function (t, e, r) {
        function n(t, e) {
            return t[e]
        }

        function i(t, e, r) {
            t[e] = r
        }

        function a(t, e, r) {
            return (e - t) * r + t
        }

        function o(t, e, r) {
            return r > .5 ? e : t
        }

        function s(t, e, r, n, i) {
            var o = t.length;
            if (1 == i) for (var s = 0; s < o; s++) n[s] = a(t[s], e[s], r); else for (var l = o && t[0].length, s = 0; s < o; s++) for (var h = 0; h < l; h++) n[s][h] = a(t[s][h], e[s][h], r)
        }

        function l(t, e, r) {
            var n = t.length, i = e.length;
            if (n !== i) {
                if (n > i) t.length = i; else for (var a = n; a < i; a++) t.push(1 === r ? e[a] : w.call(e[a]))
            }
            for (var o = t[0] && t[0].length, a = 0; a < t.length; a++) if (1 === r) isNaN(t[a]) && (t[a] = e[a]); else for (var s = 0; s < o; s++) isNaN(t[a][s]) && (t[a][s] = e[a][s])
        }

        function h(t, e, r) {
            if (t === e) return !0;
            var n = t.length;
            if (n !== e.length) return !1;
            if (1 === r) {
                for (var i = 0; i < n; i++) if (t[i] !== e[i]) return !1
            } else for (var a = t[0].length, i = 0; i < n; i++) for (var o = 0; o < a; o++) if (t[i][o] !== e[i][o]) return !1;
            return !0
        }

        function u(t, e, r, n, i, a, o, s, l) {
            var h = t.length;
            if (1 == l) for (var u = 0; u < h; u++) s[u] = c(t[u], e[u], r[u], n[u], i, a, o); else for (var f = t[0].length, u = 0; u < h; u++) for (var d = 0; d < f; d++) s[u][d] = c(t[u][d], e[u][d], r[u][d], n[u][d], i, a, o)
        }

        function c(t, e, r, n, i, a, o) {
            var s = .5 * (r - t), l = .5 * (n - e);
            return (2 * (e - r) + s + l) * o + (-3 * (e - r) - 2 * s - l) * a + s * i + e
        }

        function f(t) {
            if (y(t)) {
                var e = t.length;
                if (y(t[0])) {
                    for (var r = [], n = 0; n < e; n++) r.push(w.call(t[n]));
                    return r
                }
                return w.call(t)
            }
            return t
        }

        function d(t) {
            return t[0] = Math.floor(t[0]), t[1] = Math.floor(t[1]), t[2] = Math.floor(t[2]), "rgba(" + t.join(",") + ")"
        }

        function v(t) {
            var e = t[t.length - 1].value;
            return y(e && e[0]) ? 2 : 1
        }

        function g(t, e, r, n, i, f) {
            var g = t._getter, x = t._setter, w = "spline" === e, _ = n.length;
            if (_) {
                var b, S = n[0].value, M = y(S), T = !1, k = !1, C = M ? v(n) : 0;
                n.sort(function (t, e) {
                    return t.time - e.time
                }), b = n[_ - 1].time;
                for (var P = [], I = [], A = n[0].value, O = !0, D = 0; D < _; D++) {
                    P.push(n[D].time / b);
                    var L = n[D].value;
                    if (M && h(L, A, C) || !M && L === A || (O = !1), A = L, "string" == typeof L) {
                        var F = m.parse(L);
                        F ? (L = F, T = !0) : k = !0
                    }
                    I.push(L)
                }
                if (f || !O) {
                    for (var R = I[_ - 1], D = 0; D < _ - 1; D++) M ? l(I[D], R, C) : !isNaN(I[D]) || isNaN(R) || k || T || (I[D] = R);
                    M && l(g(t._target, i), R, C);
                    var B, z, N, E, W, q, H = 0, j = 0;
                    if (T) var X = [0, 0, 0, 0];
                    var Y = function (t, e) {
                        var r;
                        if (e < 0) r = 0; else if (e < j) {
                            for (B = Math.min(H + 1, _ - 1), r = B; r >= 0 && !(P[r] <= e); r--) ;
                            r = Math.min(r, _ - 2)
                        } else {
                            for (r = H; r < _ && !(P[r] > e); r++) ;
                            r = Math.min(r - 1, _ - 2)
                        }
                        H = r, j = e;
                        var n = P[r + 1] - P[r];
                        if (0 !== n) if (z = (e - P[r]) / n, w) if (E = I[r], N = I[0 === r ? r : r - 1], W = I[r > _ - 2 ? _ - 1 : r + 1], q = I[r > _ - 3 ? _ - 1 : r + 2], M) u(N, E, W, q, z, z * z, z * z * z, g(t, i), C); else {
                            var l;
                            if (T) l = u(N, E, W, q, z, z * z, z * z * z, X, 1), l = d(X); else {
                                if (k) return o(E, W, z);
                                l = c(N, E, W, q, z, z * z, z * z * z)
                            }
                            x(t, i, l)
                        } else if (M) s(I[r], I[r + 1], z, g(t, i), C); else {
                            var l;
                            if (T) s(I[r], I[r + 1], z, X, 1), l = d(X); else {
                                if (k) return o(I[r], I[r + 1], z);
                                l = a(I[r], I[r + 1], z)
                            }
                            x(t, i, l)
                        }
                    }, V = new p({
                        target: t._target,
                        life: b,
                        loop: t._loop,
                        delay: t._delay,
                        onframe: Y,
                        ondestroy: r
                    });
                    return e && "spline" !== e && (V.easing = e), V
                }
            }
        }

        var p = r(45), m = r(18), x = r(0), y = x.isArrayLike, w = Array.prototype.slice, _ = function (t, e, r, a) {
            this._tracks = {}, this._target = t, this._loop = e || !1, this._getter = r || n, this._setter = a || i, this._clipCount = 0, this._delay = 0, this._doneList = [], this._onframeList = [], this._clipList = []
        };
        _.prototype = {
            when: function (t, e) {
                var r = this._tracks;
                for (var n in e) if (e.hasOwnProperty(n)) {
                    if (!r[n]) {
                        r[n] = [];
                        var i = this._getter(this._target, n);
                        if (null == i) continue;
                        0 !== t && r[n].push({time: 0, value: f(i)})
                    }
                    r[n].push({time: t, value: e[n]})
                }
                return this
            }, during: function (t) {
                return this._onframeList.push(t), this
            }, pause: function () {
                for (var t = 0; t < this._clipList.length; t++) this._clipList[t].pause();
                this._paused = !0
            }, resume: function () {
                for (var t = 0; t < this._clipList.length; t++) this._clipList[t].resume();
                this._paused = !1
            }, isPaused: function () {
                return !!this._paused
            }, _doneCallback: function () {
                this._tracks = {}, this._clipList.length = 0;
                for (var t = this._doneList, e = t.length, r = 0; r < e; r++) t[r].call(this)
            }, start: function (t, e) {
                var r, n = this, i = 0, a = function () {
                    --i || n._doneCallback()
                };
                for (var o in this._tracks) if (this._tracks.hasOwnProperty(o)) {
                    var s = g(this, t, a, this._tracks[o], o, e);
                    s && (this._clipList.push(s), i++, this.animation && this.animation.addClip(s), r = s)
                }
                if (r) {
                    var l = r.onframe;
                    r.onframe = function (t, e) {
                        l(t, e);
                        for (var r = 0; r < n._onframeList.length; r++) n._onframeList[r](t, e)
                    }
                }
                return i || this._doneCallback(), this
            }, stop: function (t) {
                for (var e = this._clipList, r = this.animation, n = 0; n < e.length; n++) {
                    var i = e[n];
                    t && i.onframe(this._target, 1), r && r.removeClip(i)
                }
                e.length = 0
            }, delay: function (t) {
                return this._delay = t, this
            }, done: function (t) {
                return t && this._doneList.push(t), this
            }, getClips: function () {
                return this._clipList
            }
        };
        var b = _;
        t.exports = b
    }, function (t, e, r) {
        function n(t) {
            this._target = t.target, this._life = t.life || 1e3, this._delay = t.delay || 0, this._initialized = !1, this.loop = null != t.loop && t.loop, this.gap = t.gap || 0, this.easing = t.easing || "Linear", this.onframe = t.onframe, this.ondestroy = t.ondestroy, this.onrestart = t.onrestart, this._pausedTime = 0, this._paused = !1
        }

        var i = r(46);
        n.prototype = {
            constructor: n, step: function (t, e) {
                if (this._initialized || (this._startTime = t + this._delay, this._initialized = !0), this._paused) return void (this._pausedTime += e);
                var r = (t - this._startTime - this._pausedTime) / this._life;
                if (!(r < 0)) {
                    r = Math.min(r, 1);
                    var n = this.easing, a = "string" == typeof n ? i[n] : n, o = "function" == typeof a ? a(r) : r;
                    return this.fire("frame", o), 1 == r ? this.loop ? (this.restart(t), "restart") : (this._needsRemove = !0, "destroy") : null
                }
            }, restart: function (t) {
                var e = (t - this._startTime - this._pausedTime) % this._life;
                this._startTime = t - e + this.gap, this._pausedTime = 0, this._needsRemove = !1
            }, fire: function (t, e) {
                t = "on" + t, this[t] && this[t](this._target, e)
            }, pause: function () {
                this._paused = !0
            }, resume: function () {
                this._paused = !1
            }
        };
        var a = n;
        t.exports = a
    }, function (t, e) {
        var r = {
            linear: function (t) {
                return t
            }, quadraticIn: function (t) {
                return t * t
            }, quadraticOut: function (t) {
                return t * (2 - t)
            }, quadraticInOut: function (t) {
                return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
            }, cubicIn: function (t) {
                return t * t * t
            }, cubicOut: function (t) {
                return --t * t * t + 1
            }, cubicInOut: function (t) {
                return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
            }, quarticIn: function (t) {
                return t * t * t * t
            }, quarticOut: function (t) {
                return 1 - --t * t * t * t
            }, quarticInOut: function (t) {
                return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
            }, quinticIn: function (t) {
                return t * t * t * t * t
            }, quinticOut: function (t) {
                return --t * t * t * t * t + 1
            }, quinticInOut: function (t) {
                return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
            }, sinusoidalIn: function (t) {
                return 1 - Math.cos(t * Math.PI / 2)
            }, sinusoidalOut: function (t) {
                return Math.sin(t * Math.PI / 2)
            }, sinusoidalInOut: function (t) {
                return .5 * (1 - Math.cos(Math.PI * t))
            }, exponentialIn: function (t) {
                return 0 === t ? 0 : Math.pow(1024, t - 1)
            }, exponentialOut: function (t) {
                return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
            }, exponentialInOut: function (t) {
                return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
            }, circularIn: function (t) {
                return 1 - Math.sqrt(1 - t * t)
            }, circularOut: function (t) {
                return Math.sqrt(1 - --t * t)
            }, circularInOut: function (t) {
                return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
            }, elasticIn: function (t) {
                var e, r = .1;
                return 0 === t ? 0 : 1 === t ? 1 : (!r || r < 1 ? (r = 1, e = .1) : e = .4 * Math.asin(1 / r) / (2 * Math.PI), -r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / .4))
            }, elasticOut: function (t) {
                var e, r = .1;
                return 0 === t ? 0 : 1 === t ? 1 : (!r || r < 1 ? (r = 1, e = .1) : e = .4 * Math.asin(1 / r) / (2 * Math.PI), r * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / .4) + 1)
            }, elasticInOut: function (t) {
                var e, r = .1;
                return 0 === t ? 0 : 1 === t ? 1 : (!r || r < 1 ? (r = 1, e = .1) : e = .4 * Math.asin(1 / r) / (2 * Math.PI), (t *= 2) < 1 ? r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / .4) * -.5 : r * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / .4) * .5 + 1)
            }, backIn: function (t) {
                var e = 1.70158;
                return t * t * ((e + 1) * t - e)
            }, backOut: function (t) {
                var e = 1.70158;
                return --t * t * ((e + 1) * t + e) + 1
            }, backInOut: function (t) {
                var e = 2.5949095;
                return (t *= 2) < 1 ? t * t * ((e + 1) * t - e) * .5 : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2)
            }, bounceIn: function (t) {
                return 1 - r.bounceOut(1 - t)
            }, bounceOut: function (t) {
                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
            }, bounceInOut: function (t) {
                return t < .5 ? .5 * r.bounceIn(2 * t) : .5 * r.bounceOut(2 * t - 1) + .5
            }
        }, n = r;
        t.exports = n
    }, function (t, e, r) {
        var n = r(19), i = n.debugMode, a = function () {
        };
        1 === i ? a = function () {
            for (var t in arguments) throw new Error(arguments[t])
        } : i > 1 && (a = function () {
            for (var t in arguments) console.log(arguments[t])
        });
        var o = a;
        t.exports = o
    }, function (t, e, r) {
        var n = r(20), i = r(3), a = new i, o = function () {
        };
        o.prototype = {
            constructor: o, drawRectText: function (t, e) {
                var r = this.style;
                e = r.textRect || e, this.__dirty && n.normalizeTextStyle(r, !0);
                var i = r.text;
                if (null != i && (i += ""), n.needDrawText(i, r)) {
                    t.save();
                    var o = this.transform;
                    r.transformText ? this.setTransform(t) : o && (a.copy(e), a.applyTransform(o), e = a), n.renderText(this, t, i, r, e), t.restore()
                }
            }
        };
        var s = o;
        t.exports = s
    }, function (t, e, r) {
        function n(t, e, r) {
            if (0 !== t.length) {
                var n, i = t[0], a = i[0], o = i[0], s = i[1], l = i[1];
                for (n = 1; n < t.length; n++) i = t[n], a = u(a, i[0]), o = c(o, i[0]), s = u(s, i[1]), l = c(l, i[1]);
                e[0] = a, e[1] = s, r[0] = o, r[1] = l
            }
        }

        function i(t, e, r, n, i, a) {
            i[0] = u(t, r), i[1] = u(e, n), a[0] = c(t, r), a[1] = c(e, n)
        }

        function a(t, e, r, n, i, a, o, s, l, f) {
            var d, v = h.cubicExtrema, g = h.cubicAt, p = v(t, r, i, o, x);
            for (l[0] = 1 / 0, l[1] = 1 / 0, f[0] = -1 / 0, f[1] = -1 / 0, d = 0; d < p; d++) {
                var m = g(t, r, i, o, x[d]);
                l[0] = u(m, l[0]), f[0] = c(m, f[0])
            }
            for (p = v(e, n, a, s, y), d = 0; d < p; d++) {
                var w = g(e, n, a, s, y[d]);
                l[1] = u(w, l[1]), f[1] = c(w, f[1])
            }
            l[0] = u(t, l[0]), f[0] = c(t, f[0]), l[0] = u(o, l[0]), f[0] = c(o, f[0]), l[1] = u(e, l[1]), f[1] = c(e, f[1]), l[1] = u(s, l[1]), f[1] = c(s, f[1])
        }

        function o(t, e, r, n, i, a, o, s) {
            var l = h.quadraticExtremum, f = h.quadraticAt, d = c(u(l(t, r, i), 1), 0), v = c(u(l(e, n, a), 1), 0),
                g = f(t, r, i, d), p = f(e, n, a, v);
            o[0] = u(t, i, g), o[1] = u(e, a, p), s[0] = c(t, i, g), s[1] = c(e, a, p)
        }

        function s(t, e, r, n, i, a, o, s, h) {
            var u = l.min, c = l.max, x = Math.abs(i - a);
            if (x % v < 1e-4 && x > 1e-4) return s[0] = t - r, s[1] = e - n, h[0] = t + r, void (h[1] = e + n);
            if (g[0] = d(i) * r + t, g[1] = f(i) * n + e, p[0] = d(a) * r + t, p[1] = f(a) * n + e, u(s, g, p), c(h, g, p), i %= v, i < 0 && (i += v), a %= v, a < 0 && (a += v), i > a && !o ? a += v : i < a && o && (i += v), o) {
                var y = a;
                a = i, i = y
            }
            for (var w = 0; w < a; w += Math.PI / 2) w > i && (m[0] = d(w) * r + t, m[1] = f(w) * n + e, u(s, m, s), c(h, m, h))
        }

        var l = r(2), h = r(4), u = Math.min, c = Math.max, f = Math.sin, d = Math.cos, v = 2 * Math.PI, g = l.create(),
            p = l.create(), m = l.create(), x = [], y = [];
        e.fromPoints = n, e.fromLine = i, e.fromCubic = a, e.fromQuadratic = o, e.fromArc = s
    }, function (t, e, r) {
        function n(t, e) {
            return Math.abs(t - e) < b
        }

        function i() {
            var t = M[0];
            M[0] = M[1], M[1] = t
        }

        function a(t, e, r, n, a, o, s, l, h, u) {
            if (u > e && u > n && u > o && u > l || u < e && u < n && u < o && u < l) return 0;
            var c = x.cubicRootAt(e, n, o, l, u, S);
            if (0 === c) return 0;
            for (var f, d, v = 0, g = -1, p = 0; p < c; p++) {
                var m = S[p], y = 0 === m || 1 === m ? .5 : 1;
                x.cubicAt(t, r, a, s, m) < h || (g < 0 && (g = x.cubicExtrema(e, n, o, l, M), M[1] < M[0] && g > 1 && i(), f = x.cubicAt(e, n, o, l, M[0]), g > 1 && (d = x.cubicAt(e, n, o, l, M[1]))), 2 == g ? m < M[0] ? v += f < e ? y : -y : m < M[1] ? v += d < f ? y : -y : v += l < d ? y : -y : m < M[0] ? v += f < e ? y : -y : v += l < f ? y : -y)
            }
            return v
        }

        function o(t, e, r, n, i, a, o, s) {
            if (s > e && s > n && s > a || s < e && s < n && s < a) return 0;
            var l = x.quadraticRootAt(e, n, a, s, S);
            if (0 === l) return 0;
            var h = x.quadraticExtremum(e, n, a);
            if (h >= 0 && h <= 1) {
                for (var u = 0, c = x.quadraticAt(e, n, a, h), f = 0; f < l; f++) {
                    var d = 0 === S[f] || 1 === S[f] ? .5 : 1, v = x.quadraticAt(t, r, i, S[f]);
                    v < o || (S[f] < h ? u += c < e ? d : -d : u += a < c ? d : -d)
                }
                return u
            }
            var d = 0 === S[0] || 1 === S[0] ? .5 : 1, v = x.quadraticAt(t, r, i, S[0]);
            return v < o ? 0 : a < e ? d : -d
        }

        function s(t, e, r, n, i, a, o, s) {
            if ((s -= e) > r || s < -r) return 0;
            var l = Math.sqrt(r * r - s * s);
            S[0] = -l, S[1] = l;
            var h = Math.abs(n - i);
            if (h < 1e-4) return 0;
            if (h % _ < 1e-4) {
                n = 0, i = _;
                var u = a ? 1 : -1;
                return o >= S[0] + t && o <= S[1] + t ? u : 0
            }
            if (a) {
                var l = n;
                n = m(i), i = m(l)
            } else n = m(n), i = m(i);
            n > i && (i += _);
            for (var c = 0, f = 0; f < 2; f++) {
                var d = S[f];
                if (d + t > o) {
                    var v = Math.atan2(s, d), u = a ? 1 : -1;
                    v < 0 && (v = _ + v), (v >= n && v <= i || v + _ >= n && v + _ <= i) && (v > Math.PI / 2 && v < 1.5 * Math.PI && (u = -u), c += u)
                }
            }
            return c
        }

        function l(t, e, r, i, l) {
            for (var h = 0, u = 0, c = 0, p = 0, m = 0, x = 0; x < t.length;) {
                var _ = t[x++];
                switch (_ === w.M && x > 1 && (r || (h += y(u, c, p, m, i, l))), 1 == x && (u = t[x], c = t[x + 1], p = u, m = c), _) {
                    case w.M:
                        p = t[x++], m = t[x++], u = p, c = m;
                        break;
                    case w.L:
                        if (r) {
                            if (f.containStroke(u, c, t[x], t[x + 1], e, i, l)) return !0
                        } else h += y(u, c, t[x], t[x + 1], i, l) || 0;
                        u = t[x++], c = t[x++];
                        break;
                    case w.C:
                        if (r) {
                            if (d.containStroke(u, c, t[x++], t[x++], t[x++], t[x++], t[x], t[x + 1], e, i, l)) return !0
                        } else h += a(u, c, t[x++], t[x++], t[x++], t[x++], t[x], t[x + 1], i, l) || 0;
                        u = t[x++], c = t[x++];
                        break;
                    case w.Q:
                        if (r) {
                            if (v.containStroke(u, c, t[x++], t[x++], t[x], t[x + 1], e, i, l)) return !0
                        } else h += o(u, c, t[x++], t[x++], t[x], t[x + 1], i, l) || 0;
                        u = t[x++], c = t[x++];
                        break;
                    case w.A:
                        var b = t[x++], S = t[x++], M = t[x++], T = t[x++], k = t[x++], C = t[x++],
                            P = (t[x++], 1 - t[x++]), I = Math.cos(k) * M + b, A = Math.sin(k) * T + S;
                        x > 1 ? h += y(u, c, I, A, i, l) : (p = I, m = A);
                        var O = (i - b) * T / M + b;
                        if (r) {
                            if (g.containStroke(b, S, T, k, k + C, P, e, O, l)) return !0
                        } else h += s(b, S, T, k, k + C, P, O, l);
                        u = Math.cos(k + C) * M + b, c = Math.sin(k + C) * T + S;
                        break;
                    case w.R:
                        p = u = t[x++], m = c = t[x++];
                        var D = t[x++], L = t[x++], I = p + D, A = m + L;
                        if (r) {
                            if (f.containStroke(p, m, I, m, e, i, l) || f.containStroke(I, m, I, A, e, i, l) || f.containStroke(I, A, p, A, e, i, l) || f.containStroke(p, A, p, m, e, i, l)) return !0
                        } else h += y(I, m, I, A, i, l), h += y(p, A, p, m, i, l);
                        break;
                    case w.Z:
                        if (r) {
                            if (f.containStroke(u, c, p, m, e, i, l)) return !0
                        } else h += y(u, c, p, m, i, l);
                        u = p, c = m
                }
            }
            return r || n(c, m) || (h += y(u, c, p, m, i, l) || 0), 0 !== h
        }

        function h(t, e, r) {
            return l(t, 0, !1, e, r)
        }

        function u(t, e, r, n) {
            return l(t, e, !0, r, n)
        }

        var c = r(6), f = r(51), d = r(52), v = r(53), g = r(54), p = r(22), m = p.normalizeRadian, x = r(4), y = r(55),
            w = c.CMD, _ = 2 * Math.PI, b = 1e-4, S = [-1, -1, -1], M = [-1, -1];
        e.contain = h, e.containStroke = u
    }, function (t, e) {
        function r(t, e, r, n, i, a, o) {
            if (0 === i) return !1;
            var s = i, l = 0, h = t;
            if (o > e + s && o > n + s || o < e - s && o < n - s || a > t + s && a > r + s || a < t - s && a < r - s) return !1;
            if (t === r) return Math.abs(a - t) <= s / 2;
            l = (e - n) / (t - r), h = (t * n - r * e) / (t - r);
            var u = l * a - o + h;
            return u * u / (l * l + 1) <= s / 2 * s / 2
        }

        e.containStroke = r
    }, function (t, e, r) {
        function n(t, e, r, n, a, o, s, l, h, u, c) {
            if (0 === h) return !1;
            var f = h;
            return !(c > e + f && c > n + f && c > o + f && c > l + f || c < e - f && c < n - f && c < o - f && c < l - f || u > t + f && u > r + f && u > a + f && u > s + f || u < t - f && u < r - f && u < a - f && u < s - f) && i.cubicProjectPoint(t, e, r, n, a, o, s, l, u, c, null) <= f / 2
        }

        var i = r(4);
        e.containStroke = n
    }, function (t, e, r) {
        function n(t, e, r, n, i, o, s, l, h) {
            if (0 === s) return !1;
            var u = s;
            return !(h > e + u && h > n + u && h > o + u || h < e - u && h < n - u && h < o - u || l > t + u && l > r + u && l > i + u || l < t - u && l < r - u && l < i - u) && a(t, e, r, n, i, o, l, h, null) <= u / 2
        }

        var i = r(4), a = i.quadraticProjectPoint;
        e.containStroke = n
    }, function (t, e, r) {
        function n(t, e, r, n, i, s, l, h, u) {
            if (0 === l) return !1;
            var c = l;
            h -= t, u -= e;
            var f = Math.sqrt(h * h + u * u);
            if (f - c > r || f + c < r) return !1;
            if (Math.abs(n - i) % o < 1e-4) return !0;
            if (s) {
                var d = n;
                n = a(i), i = a(d)
            } else n = a(n), i = a(i);
            n > i && (i += o);
            var v = Math.atan2(u, h);
            return v < 0 && (v += o), v >= n && v <= i || v + o >= n && v + o <= i
        }

        var i = r(22), a = i.normalizeRadian, o = 2 * Math.PI;
        e.containStroke = n
    }, function (t, e) {
        function r(t, e, r, n, i, a) {
            if (a > e && a > n || a < e && a < n) return 0;
            if (n === e) return 0;
            var o = n < e ? 1 : -1, s = (a - e) / (n - e);
            return 1 !== s && 0 !== s || (o = n < e ? .5 : -.5), s * (r - t) + t > i ? o : 0
        }

        t.exports = r
    }, function (t, e) {
        var r = function (t, e) {
            this.image = t, this.repeat = e, this.type = "pattern"
        };
        r.prototype.getCanvasPattern = function (t) {
            return t.createPattern(this.image, this.repeat || "repeat")
        };
        var n = r;
        t.exports = n
    }, function (t, e, r) {
        function n(t, e) {
            var r, n, i, a, c, f, d = t.data, v = s.M, g = s.C, p = s.L, m = s.R, x = s.A, y = s.Q;
            for (i = 0, a = 0; i < d.length;) {
                switch (r = d[i++], a = i, n = 0, r) {
                    case v:
                    case p:
                        n = 1;
                        break;
                    case g:
                        n = 3;
                        break;
                    case y:
                        n = 2;
                        break;
                    case x:
                        var w = e[4], _ = e[5], b = h(e[0] * e[0] + e[1] * e[1]), S = h(e[2] * e[2] + e[3] * e[3]),
                            M = u(-e[1] / S, e[0] / b);
                        d[i] *= b, d[i++] += w, d[i] *= S, d[i++] += _, d[i++] *= b, d[i++] *= S, d[i++] += M, d[i++] += M, i += 2, a = i;
                        break;
                    case m:
                        f[0] = d[i++], f[1] = d[i++], o(f, f, e), d[a++] = f[0], d[a++] = f[1], f[0] += d[i++], f[1] += d[i++], o(f, f, e), d[a++] = f[0], d[a++] = f[1]
                }
                for (c = 0; c < n; c++) {
                    var f = l[c];
                    f[0] = d[i++], f[1] = d[i++], o(f, f, e), d[a++] = f[0], d[a++] = f[1]
                }
            }
        }

        var i = r(6), a = r(2), o = a.applyTransform, s = i.CMD, l = [[], [], []], h = Math.sqrt, u = Math.atan2;
        t.exports = n
    }, function (t, e, r) {
        function n(t) {
            i.call(this, t)
        }

        var i = r(12), a = r(3), o = r(0), s = r(10);
        n.prototype = {
            constructor: n, type: "image", brush: function (t, e) {
                var r = this.style, n = r.image;
                r.bind(t, this, e);
                var i = this._image = s.createOrUpdateImage(n, this._image, this, this.onload);
                if (i && s.isImageReady(i)) {
                    var a = r.x || 0, o = r.y || 0, l = r.width, h = r.height, u = i.width / i.height;
                    if (null == l && null != h ? l = h * u : null == h && null != l ? h = l / u : null == l && null == h && (l = i.width, h = i.height), this.setTransform(t), r.sWidth && r.sHeight) {
                        var c = r.sx || 0, f = r.sy || 0;
                        t.drawImage(i, c, f, r.sWidth, r.sHeight, a, o, l, h)
                    } else if (r.sx && r.sy) {
                        var c = r.sx, f = r.sy, d = l - c, v = h - f;
                        t.drawImage(i, c, f, d, v, a, o, l, h)
                    } else t.drawImage(i, a, o, l, h);
                    this.restoreTransform(t), null != r.text && this.drawRectText(t, this.getBoundingRect())
                }
            }, getBoundingRect: function () {
                var t = this.style;
                return this._rect || (this._rect = new a(t.x || 0, t.y || 0, t.width || 0, t.height || 0)), this._rect
            }
        }, o.inherits(n, i);
        var l = n;
        t.exports = l
    }, function (t, e, r) {
        var n = r(0), i = r(16), a = r(3), o = function (t) {
            t = t || {}, i.call(this, t);
            for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
            this._children = [], this.__storage = null, this.__dirty = !0
        };
        o.prototype = {
            constructor: o, isGroup: !0, type: "group", silent: !1, children: function () {
                return this._children.slice()
            }, childAt: function (t) {
                return this._children[t]
            }, childOfName: function (t) {
                for (var e = this._children, r = 0; r < e.length; r++) if (e[r].name === t) return e[r]
            }, childCount: function () {
                return this._children.length
            }, add: function (t) {
                return t && t !== this && t.parent !== this && (this._children.push(t), this._doAdd(t)), this
            }, addBefore: function (t, e) {
                if (t && t !== this && t.parent !== this && e && e.parent === this) {
                    var r = this._children, n = r.indexOf(e);
                    n >= 0 && (r.splice(n, 0, t), this._doAdd(t))
                }
                return this
            }, _doAdd: function (t) {
                t.parent && t.parent.remove(t), t.parent = this;
                var e = this.__storage, r = this.__zr;
                e && e !== t.__storage && (e.addToStorage(t), t instanceof o && t.addChildrenToStorage(e)), r && r.refresh()
            }, remove: function (t) {
                var e = this.__zr, r = this.__storage, i = this._children, a = n.indexOf(i, t);
                return a < 0 ? this : (i.splice(a, 1), t.parent = null, r && (r.delFromStorage(t), t instanceof o && t.delChildrenFromStorage(r)), e && e.refresh(), this)
            }, removeAll: function () {
                var t, e, r = this._children, n = this.__storage;
                for (e = 0; e < r.length; e++) t = r[e], n && (n.delFromStorage(t), t instanceof o && t.delChildrenFromStorage(n)), t.parent = null;
                return r.length = 0, this
            }, eachChild: function (t, e) {
                for (var r = this._children, n = 0; n < r.length; n++) {
                    var i = r[n];
                    t.call(e, i, n)
                }
                return this
            }, traverse: function (t, e) {
                for (var r = 0; r < this._children.length; r++) {
                    var n = this._children[r];
                    t.call(e, n), "group" === n.type && n.traverse(t, e)
                }
                return this
            }, addChildrenToStorage: function (t) {
                for (var e = 0; e < this._children.length; e++) {
                    var r = this._children[e];
                    t.addToStorage(r), r instanceof o && r.addChildrenToStorage(t)
                }
            }, delChildrenFromStorage: function (t) {
                for (var e = 0; e < this._children.length; e++) {
                    var r = this._children[e];
                    t.delFromStorage(r), r instanceof o && r.delChildrenFromStorage(t)
                }
            }, dirty: function () {
                return this.__dirty = !0, this.__zr && this.__zr.refresh(), this
            }, getBoundingRect: function (t) {
                for (var e = null, r = new a(0, 0, 0, 0), n = t || this._children, i = [], o = 0; o < n.length; o++) {
                    var s = n[o];
                    if (!s.ignore && !s.invisible) {
                        var l = s.getBoundingRect(), h = s.getLocalTransform(i);
                        h ? (r.copy(l), r.applyTransform(h), e = e || r.clone(), e.union(r)) : (e = e || l.clone(), e.union(l))
                    }
                }
                return e || r
            }
        }, n.inherits(o, i);
        var s = o;
        t.exports = s
    }, function (t, e, r) {
        var n = r(12), i = r(0), a = r(5), o = r(20), s = function (t) {
            n.call(this, t)
        };
        s.prototype = {
            constructor: s, type: "text", brush: function (t, e) {
                var r = this.style;
                this.__dirty && o.normalizeTextStyle(r, !0), r.fill = r.stroke = r.shadowBlur = r.shadowColor = r.shadowOffsetX = r.shadowOffsetY = null;
                var n = r.text;
                null != n && (n += ""), r.bind(t, this, e), o.needDrawText(n, r) && (this.setTransform(t), o.renderText(this, t, n, r), this.restoreTransform(t))
            }, getBoundingRect: function () {
                var t = this.style;
                if (this.__dirty && o.normalizeTextStyle(t, !0), !this._rect) {
                    var e = t.text;
                    null != e ? e += "" : e = "";
                    var r = a.getBoundingRect(t.text + "", t.font, t.textAlign, t.textVerticalAlign, t.textPadding, t.rich);
                    if (r.x += t.x || 0, r.y += t.y || 0, o.getStroke(t.textStroke, t.textStrokeWidth)) {
                        var n = t.textStrokeWidth;
                        r.x -= n / 2, r.y -= n / 2, r.width += n, r.height += n
                    }
                    this._rect = r
                }
                return this._rect
            }
        }, i.inherits(s, n);
        var l = s;
        t.exports = l
    }, function (t, e, r) {
        var n = r(1), i = n.extend({
            type: "circle", shape: {cx: 0, cy: 0, r: 0}, buildPath: function (t, e, r) {
                r && t.moveTo(e.cx + e.r, e.cy), t.arc(e.cx, e.cy, e.r, 0, 2 * Math.PI, !0)
            }
        });
        t.exports = i
    }, function (t, e, r) {
        var n = r(1), i = r(63), a = n.extend({
            type: "sector",
            shape: {cx: 0, cy: 0, r0: 0, r: 0, startAngle: 0, endAngle: 2 * Math.PI, clockwise: !0},
            brush: i(n.prototype.brush),
            buildPath: function (t, e) {
                var r = e.cx, n = e.cy, i = Math.max(e.r0 || 0, 0), a = Math.max(e.r, 0), o = e.startAngle,
                    s = e.endAngle, l = e.clockwise, h = Math.cos(o), u = Math.sin(o);
                t.moveTo(h * i + r, u * i + n), t.lineTo(h * a + r, u * a + n), t.arc(r, n, a, o, s, !l), t.lineTo(Math.cos(s) * i + r, Math.sin(s) * i + n), 0 !== i && t.arc(r, n, i, s, o, l), t.closePath()
            }
        });
        t.exports = a
    }, function (t, e, r) {
        function n(t) {
            return i.browser.ie && i.browser.version >= 11 ? function () {
                var e, r = this.__clipPaths, n = this.style;
                if (r) for (var i = 0; i < r.length; i++) {
                    var o = r[i], s = o && o.shape, l = o && o.type;
                    if (s && ("sector" === l && s.startAngle === s.endAngle || "rect" === l && (!s.width || !s.height))) {
                        for (var h = 0; h < a.length; h++) a[h][2] = n[a[h][0]], n[a[h][0]] = a[h][1];
                        e = !0;
                        break
                    }
                }
                if (t.apply(this, arguments), e) for (var h = 0; h < a.length; h++) n[a[h][0]] = a[h][2]
            } : t
        }

        var i = r(15), a = [["shadowBlur", 0], ["shadowColor", "#000"], ["shadowOffsetX", 0], ["shadowOffsetY", 0]];
        t.exports = n
    }, function (t, e, r) {
        var n = r(1), i = n.extend({
            type: "ring", shape: {cx: 0, cy: 0, r: 0, r0: 0}, buildPath: function (t, e) {
                var r = e.cx, n = e.cy, i = 2 * Math.PI;
                t.moveTo(r + e.r, n), t.arc(r, n, e.r, 0, i, !1), t.moveTo(r + e.r0, n), t.arc(r, n, e.r0, 0, i, !0)
            }
        });
        t.exports = i
    }, function (t, e, r) {
        var n = r(1), i = r(23), a = n.extend({
            type: "polygon",
            shape: {points: null, smooth: !1, smoothConstraint: null},
            buildPath: function (t, e) {
                i.buildPath(t, e, !0)
            }
        });
        t.exports = a
    }, function (t, e, r) {
        function n(t, e, r, n, i, a, o) {
            var s = .5 * (r - t), l = .5 * (n - e);
            return (2 * (e - r) + s + l) * o + (-3 * (e - r) - 2 * s - l) * a + s * i + e
        }

        function i(t, e) {
            for (var r = t.length, i = [], a = 0, s = 1; s < r; s++) a += o(t[s - 1], t[s]);
            var l = a / 2;
            l = l < r ? r : l;
            for (var s = 0; s < l; s++) {
                var h, u, c, f = s / (l - 1) * (e ? r : r - 1), d = Math.floor(f), v = f - d, g = t[d % r];
                e ? (h = t[(d - 1 + r) % r], u = t[(d + 1) % r], c = t[(d + 2) % r]) : (h = t[0 === d ? d : d - 1], u = t[d > r - 2 ? r - 1 : d + 1], c = t[d > r - 3 ? r - 1 : d + 2]);
                var p = v * v, m = v * p;
                i.push([n(h[0], g[0], u[0], c[0], v, p, m), n(h[1], g[1], u[1], c[1], v, p, m)])
            }
            return i
        }

        var a = r(2), o = a.distance;
        t.exports = i
    }, function (t, e, r) {
        function n(t, e, r, n) {
            var i, f, d, v, g = [], p = [], m = [], x = [];
            if (n) {
                d = [1 / 0, 1 / 0], v = [-1 / 0, -1 / 0];
                for (var y = 0, w = t.length; y < w; y++) a(d, d, t[y]), o(v, v, t[y]);
                a(d, d, n[0]), o(v, v, n[1])
            }
            for (var y = 0, w = t.length; y < w; y++) {
                var _ = t[y];
                if (r) i = t[y ? y - 1 : w - 1], f = t[(y + 1) % w]; else {
                    if (0 === y || y === w - 1) {
                        g.push(u(t[y]));
                        continue
                    }
                    i = t[y - 1], f = t[y + 1]
                }
                c(p, f, i), s(p, p, e);
                var b = l(_, i), S = l(_, f), M = b + S;
                0 !== M && (b /= M, S /= M), s(m, p, -b), s(x, p, S);
                var T = h([], _, m), k = h([], _, x);
                n && (o(T, T, d), a(T, T, v), o(k, k, d), a(k, k, v)), g.push(T), g.push(k)
            }
            return r && g.push(g.shift()), g
        }

        var i = r(2), a = i.min, o = i.max, s = i.scale, l = i.distance, h = i.add, u = i.clone, c = i.sub;
        t.exports = n
    }, function (t, e, r) {
        var n = r(1), i = r(23), a = n.extend({
            type: "polyline",
            shape: {points: null, smooth: !1, smoothConstraint: null},
            style: {stroke: "#000", fill: null},
            buildPath: function (t, e) {
                i.buildPath(t, e, !1)
            }
        });
        t.exports = a
    }, function (t, e, r) {
        var n = r(1), i = r(21), a = n.extend({
            type: "rect", shape: {r: 0, x: 0, y: 0, width: 0, height: 0}, buildPath: function (t, e) {
                var r = e.x, n = e.y, a = e.width, o = e.height;
                e.r ? i.buildPath(t, e) : t.rect(r, n, a, o), t.closePath()
            }
        });
        t.exports = a
    }, function (t, e, r) {
        var n = r(1), i = n.extend({
            type: "line",
            shape: {x1: 0, y1: 0, x2: 0, y2: 0, percent: 1},
            style: {stroke: "#000", fill: null},
            buildPath: function (t, e) {
                var r = e.x1, n = e.y1, i = e.x2, a = e.y2, o = e.percent;
                0 !== o && (t.moveTo(r, n), o < 1 && (i = r * (1 - o) + i * o, a = n * (1 - o) + a * o), t.lineTo(i, a))
            },
            pointAt: function (t) {
                var e = this.shape;
                return [e.x1 * (1 - t) + e.x2 * t, e.y1 * (1 - t) + e.y2 * t]
            }
        });
        t.exports = i
    }, function (t, e, r) {
        function n(t, e, r) {
            var n = t.cpx2, i = t.cpy2;
            return null === n || null === i ? [(r ? f : u)(t.x1, t.cpx1, t.cpx2, t.x2, e), (r ? f : u)(t.y1, t.cpy1, t.cpy2, t.y2, e)] : [(r ? c : h)(t.x1, t.cpx1, t.x2, e), (r ? c : h)(t.y1, t.cpy1, t.y2, e)]
        }

        var i = r(1), a = r(2), o = r(4), s = o.quadraticSubdivide, l = o.cubicSubdivide, h = o.quadraticAt,
            u = o.cubicAt, c = o.quadraticDerivativeAt, f = o.cubicDerivativeAt, d = [], v = i.extend({
                type: "bezier-curve",
                shape: {x1: 0, y1: 0, x2: 0, y2: 0, cpx1: 0, cpy1: 0, percent: 1},
                style: {stroke: "#000", fill: null},
                buildPath: function (t, e) {
                    var r = e.x1, n = e.y1, i = e.x2, a = e.y2, o = e.cpx1, h = e.cpy1, u = e.cpx2, c = e.cpy2,
                        f = e.percent;
                    0 !== f && (t.moveTo(r, n), null == u || null == c ? (f < 1 && (s(r, o, i, f, d), o = d[1], i = d[2], s(n, h, a, f, d), h = d[1], a = d[2]), t.quadraticCurveTo(o, h, i, a)) : (f < 1 && (l(r, o, u, i, f, d), o = d[1], u = d[2], i = d[3], l(n, h, c, a, f, d), h = d[1], c = d[2], a = d[3]), t.bezierCurveTo(o, h, u, c, i, a)))
                },
                pointAt: function (t) {
                    return n(this.shape, t, !1)
                },
                tangentAt: function (t) {
                    var e = n(this.shape, t, !0);
                    return a.normalize(e, e)
                }
            });
        t.exports = v
    }, function (t, e, r) {
        var n = r(1), i = n.extend({
            type: "arc",
            shape: {cx: 0, cy: 0, r: 0, startAngle: 0, endAngle: 2 * Math.PI, clockwise: !0},
            style: {stroke: "#000", fill: null},
            buildPath: function (t, e) {
                var r = e.cx, n = e.cy, i = Math.max(e.r, 0), a = e.startAngle, o = e.endAngle, s = e.clockwise,
                    l = Math.cos(a), h = Math.sin(a);
                t.moveTo(l * i + r, h * i + n), t.arc(r, n, i, a, o, !s)
            }
        });
        t.exports = i
    }, function (t, e, r) {
        var n = r(1), i = n.extend({
            type: "compound", shape: {paths: null}, _updatePathDirty: function () {
                for (var t = this.__dirtyPath, e = this.shape.paths, r = 0; r < e.length; r++) t = t || e[r].__dirtyPath;
                this.__dirtyPath = t, this.__dirty = this.__dirty || t
            }, beforeBrush: function () {
                this._updatePathDirty();
                for (var t = this.shape.paths || [], e = this.getGlobalScale(), r = 0; r < t.length; r++) t[r].path || t[r].createPathProxy(), t[r].path.setScale(e[0], e[1])
            }, buildPath: function (t, e) {
                for (var r = e.paths || [], n = 0; n < r.length; n++) r[n].buildPath(t, r[n].shape, !0)
            }, afterBrush: function () {
                for (var t = this.shape.paths || [], e = 0; e < t.length; e++) t[e].__dirtyPath = !1
            }, getBoundingRect: function () {
                return this._updatePathDirty(), n.prototype.getBoundingRect.call(this)
            }
        });
        t.exports = i
    }, function (t, e, r) {
        var n = r(0), i = r(24), a = function (t, e, r, n, a, o) {
            this.x = null == t ? 0 : t, this.y = null == e ? 0 : e, this.x2 = null == r ? 1 : r, this.y2 = null == n ? 0 : n, this.type = "linear", this.global = o || !1, i.call(this, a)
        };
        a.prototype = {constructor: a}, n.inherits(a, i);
        var o = a;
        t.exports = o
    }, function (t, e, r) {
        var n = r(0), i = r(24), a = function (t, e, r, n, a) {
            this.x = null == t ? .5 : t, this.y = null == e ? .5 : e, this.r = null == r ? .5 : r, this.type = "radial", this.global = a || !1, i.call(this, n)
        };
        a.prototype = {constructor: a}, n.inherits(a, i);
        var o = a;
        t.exports = o
    }, function (t, e, r) {
        var n = r(11),
            i = n([["fill", "color"], ["stroke", "borderColor"], ["lineWidth", "borderWidth"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"], ["textPosition"], ["textAlign"]]),
            a = {
                getItemStyle: function (t, e) {
                    var r = i(this, t, e), n = this.getBorderLineDash();
                    return n && (r.lineDash = n), r
                }, getBorderLineDash: function () {
                    var t = this.get("borderType");
                    return "solid" === t || null == t ? null : "dashed" === t ? [5, 5] : [1, 1]
                }
            };
        t.exports = a
    }, function (t, e, r) {
        var n = r(7);
        n.extendChartView({
            type: "wordCloud", render: function (t, e, r) {
                var i = this.group;
                i.removeAll();
                var a = t.getData(), o = t.get("gridSize");
                t.layoutInstance.ondraw = function (t, e, r, s) {
                    var l = a.getItemModel(r), h = l.getModel("textStyle.normal"), u = l.getModel("textStyle.emphasis"),
                        c = new n.graphic.Text({
                            style: n.graphic.setTextStyle({}, h, {
                                x: s.info.fillTextOffsetX,
                                y: s.info.fillTextOffsetY + .5 * e,
                                text: t,
                                textBaseline: "middle",
                                textFill: a.getItemVisual(r, "color"),
                                fontSize: e
                            }),
                            scale: [1 / s.info.mu, 1 / s.info.mu],
                            position: [(s.gx + s.info.gw / 2) * o, (s.gy + s.info.gh / 2) * o],
                            rotation: s.rot
                        });
                    i.add(c), a.setItemGraphicEl(r, c), n.graphic.setHoverStyle(c, n.graphic.setTextStyle({}, u, null, {forMerge: !0}, !0))
                }, this._model = t
            }, remove: function () {
                this.group.removeAll(), this._model.layoutInstance.dispose()
            }, dispose: function () {
                this._model.layoutInstance.dispose()
            }
        })
    }, function (t, e, r) {
        "use strict";
        var n, i;/*!
 * wordcloud2.js
 * http://timdream.org/wordcloud2.js/
 *
 * Copyright 2011 - 2013 Tim Chien
 * Released under the MIT license
 */
        window.setImmediate || (window.setImmediate = function () {
            return window.msSetImmediate || window.webkitSetImmediate || window.mozSetImmediate || window.oSetImmediate || function () {
                if (!window.postMessage || !window.addEventListener) return null;
                var t = [void 0], e = "zero-timeout-message", r = function (r) {
                    var n = t.length;
                    return t.push(r), window.postMessage(e + n.toString(36), "*"), n
                };
                return window.addEventListener("message", function (r) {
                    if ("string" == typeof r.data && r.data.substr(0, e.length) === e) {
                        r.stopImmediatePropagation();
                        var n = parseInt(r.data.substr(e.length), 36);
                        t[n] && (t[n](), t[n] = void 0)
                    }
                }, !0), window.clearImmediate = function (e) {
                    t[e] && (t[e] = void 0)
                }, r
            }() || function (t) {
                window.setTimeout(t, 0)
            }
        }()), window.clearImmediate || (window.clearImmediate = function () {
            return window.msClearImmediate || window.webkitClearImmediate || window.mozClearImmediate || window.oClearImmediate || function (t) {
                window.clearTimeout(t)
            }
        }()), function (r) {
            var a = function () {
                var t = document.createElement("canvas");
                if (!t || !t.getContext) return !1;
                var e = t.getContext("2d");
                return !!e.getImageData && (!!e.fillText && (!!Array.prototype.some && !!Array.prototype.push))
            }(), o = function () {
                if (a) {
                    for (var t, e, r = document.createElement("canvas").getContext("2d"), n = 20; n;) {
                        if (r.font = n.toString(10) + "px sans-serif", r.measureText("Ｗ").width === t && r.measureText("m").width === e) return n + 1;
                        t = r.measureText("Ｗ").width, e = r.measureText("m").width, n--
                    }
                    return 0
                }
            }(), s = function (t) {
                for (var e, r, n = t.length; n; e = Math.floor(Math.random() * n), r = t[--n], t[n] = t[e], t[e] = r) ;
                return t
            }, l = function (t, e) {
                function r(t, e) {
                    return "hsl(" + (360 * Math.random()).toFixed() + "," + (30 * Math.random() + 70).toFixed() + "%," + (Math.random() * (e - t) + t).toFixed() + "%)"
                }

                if (a) {
                    Array.isArray(t) || (t = [t]), t.forEach(function (e, r) {
                        if ("string" == typeof e) {
                            if (t[r] = document.getElementById(e), !t[r]) throw"The element id specified is not found."
                        } else if (!e.tagName && !e.appendChild) throw"You must pass valid HTML elements, or ID of the element."
                    });
                    var n = {
                        list: [],
                        fontFamily: '"Trebuchet MS", "Heiti TC", "微軟正黑體", "Arial Unicode MS", "Droid Fallback Sans", sans-serif',
                        fontWeight: "normal",
                        color: "random-dark",
                        minSize: 0,
                        weightFactor: 1,
                        clearCanvas: !0,
                        backgroundColor: "#fff",
                        gridSize: 8,
                        drawOutOfBound: !1,
                        origin: null,
                        drawMask: !1,
                        maskColor: "rgba(255,0,0,0.3)",
                        maskGapWidth: .3,
                        wait: 0,
                        abortThreshold: 0,
                        abort: function () {
                        },
                        minRotation: -Math.PI / 2,
                        maxRotation: Math.PI / 2,
                        rotationStep: .1,
                        shuffle: !0,
                        rotateRatio: .1,
                        shape: "circle",
                        ellipticity: .65,
                        classes: null,
                        hover: null,
                        click: null
                    };
                    if (e) for (var i in e) i in n && (n[i] = e[i]);
                    if ("function" != typeof n.weightFactor) {
                        var l = n.weightFactor;
                        n.weightFactor = function (t) {
                            return t * l
                        }
                    }
                    if ("function" != typeof n.shape) switch (n.shape) {
                        case"circle":
                        default:
                            n.shape = "circle";
                            break;
                        case"cardioid":
                            n.shape = function (t) {
                                return 1 - Math.sin(t)
                            };
                            break;
                        case"diamond":
                        case"square":
                            n.shape = function (t) {
                                var e = t % (2 * Math.PI / 4);
                                return 1 / (Math.cos(e) + Math.sin(e))
                            };
                            break;
                        case"triangle-forward":
                            n.shape = function (t) {
                                var e = t % (2 * Math.PI / 3);
                                return 1 / (Math.cos(e) + Math.sqrt(3) * Math.sin(e))
                            };
                            break;
                        case"triangle":
                        case"triangle-upright":
                            n.shape = function (t) {
                                var e = (t + 3 * Math.PI / 2) % (2 * Math.PI / 3);
                                return 1 / (Math.cos(e) + Math.sqrt(3) * Math.sin(e))
                            };
                            break;
                        case"pentagon":
                            n.shape = function (t) {
                                var e = (t + .955) % (2 * Math.PI / 5);
                                return 1 / (Math.cos(e) + .726543 * Math.sin(e))
                            };
                            break;
                        case"star":
                            n.shape = function (t) {
                                var e = (t + .955) % (2 * Math.PI / 10);
                                return (t + .955) % (2 * Math.PI / 5) - 2 * Math.PI / 10 >= 0 ? 1 / (Math.cos(2 * Math.PI / 10 - e) + 3.07768 * Math.sin(2 * Math.PI / 10 - e)) : 1 / (Math.cos(e) + 3.07768 * Math.sin(e))
                            }
                    }
                    n.gridSize = Math.max(Math.floor(n.gridSize), 4);
                    var h, u, c, f, d, v, g, p = n.gridSize, m = p - n.maskGapWidth,
                        x = Math.abs(n.maxRotation - n.minRotation), y = Math.min(n.maxRotation, n.minRotation),
                        w = n.rotationStep;
                    switch (n.color) {
                        case"random-dark":
                            g = function () {
                                return r(10, 50)
                            };
                            break;
                        case"random-light":
                            g = function () {
                                return r(50, 90)
                            };
                            break;
                        default:
                            "function" == typeof n.color && (g = n.color)
                    }
                    var _ = null;
                    "function" == typeof n.classes && (_ = n.classes);
                    var b, S = !1, M = [], T = function (t) {
                        var e, r, n = t.currentTarget, i = n.getBoundingClientRect();
                        t.touches ? (e = t.touches[0].clientX, r = t.touches[0].clientY) : (e = t.clientX, r = t.clientY);
                        var a = e - i.left, o = r - i.top, s = Math.floor(a * (n.width / i.width || 1) / p),
                            l = Math.floor(o * (n.height / i.height || 1) / p);
                        return M[s][l]
                    }, k = function (t) {
                        var e = T(t);
                        if (b !== e) {
                            if (b = e, !e) return void n.hover(void 0, void 0, t);
                            n.hover(e.item, e.dimension, t)
                        }
                    }, C = function (t) {
                        var e = T(t);
                        e && (n.click(e.item, e.dimension, t), t.preventDefault())
                    }, P = [], I = function (t) {
                        if (P[t]) return P[t];
                        var e = 8 * t, r = e, i = [];
                        for (0 === t && i.push([f[0], f[1], 0]); r--;) {
                            var a = 1;
                            "circle" !== n.shape && (a = n.shape(r / e * 2 * Math.PI)), i.push([f[0] + t * a * Math.cos(-r / e * 2 * Math.PI), f[1] + t * a * Math.sin(-r / e * 2 * Math.PI) * n.ellipticity, r / e * 2 * Math.PI])
                        }
                        return P[t] = i, i
                    }, A = function () {
                        return n.abortThreshold > 0 && (new Date).getTime() - v > n.abortThreshold
                    }, O = function () {
                        return 0 === n.rotateRatio ? 0 : Math.random() > n.rotateRatio ? 0 : 0 === x ? y : y + Math.round(Math.random() * x / w) * w
                    }, D = function (t, e, r) {
                        var i = n.weightFactor(e);
                        if (i <= n.minSize) return !1;
                        var a = 1;
                        i < o && (a = function () {
                            for (var t = 2; t * i < o;) t += 2;
                            return t
                        }());
                        var s = document.createElement("canvas"), l = s.getContext("2d", {willReadFrequently: !0});
                        l.font = n.fontWeight + " " + (i * a).toString(10) + "px " + n.fontFamily;
                        var h = l.measureText(t).width / a,
                            u = Math.max(i * a, l.measureText("m").width, l.measureText("Ｗ").width) / a, c = h + 2 * u,
                            f = 3 * u, d = Math.ceil(c / p), v = Math.ceil(f / p);
                        c = d * p, f = v * p;
                        var g = -h / 2, m = .4 * -u,
                            x = Math.ceil((c * Math.abs(Math.sin(r)) + f * Math.abs(Math.cos(r))) / p),
                            y = Math.ceil((c * Math.abs(Math.cos(r)) + f * Math.abs(Math.sin(r))) / p), w = y * p,
                            _ = x * p;
                        s.setAttribute("width", w), s.setAttribute("height", _), l.scale(1 / a, 1 / a), l.translate(w * a / 2, _ * a / 2), l.rotate(-r), l.font = n.fontWeight + " " + (i * a).toString(10) + "px " + n.fontFamily, l.fillStyle = "#000", l.textBaseline = "middle", l.fillText(t, g * a, (m + .5 * i) * a);
                        var b = l.getImageData(0, 0, w, _).data;
                        if (A()) return !1;
                        for (var S, M, T, k = [], C = y, P = [x / 2, y / 2, x / 2, y / 2]; C--;) for (S = x; S--;) {
                            T = p;
                            t:for (; T--;) for (M = p; M--;) if (b[4 * ((S * p + T) * w + (C * p + M)) + 3]) {
                                k.push([C, S]), C < P[3] && (P[3] = C), C > P[1] && (P[1] = C), S < P[0] && (P[0] = S), S > P[2] && (P[2] = S);
                                break t
                            }
                        }
                        return {
                            mu: a,
                            occupied: k,
                            bounds: P,
                            gw: y,
                            gh: x,
                            fillTextOffsetX: g,
                            fillTextOffsetY: m,
                            fillTextWidth: h,
                            fillTextHeight: u,
                            fontSize: i
                        }
                    }, L = function (t, e, r, i, a) {
                        for (var o = a.length; o--;) {
                            var s = t + a[o][0], l = e + a[o][1];
                            if (s >= u || l >= c || s < 0 || l < 0) {
                                if (!n.drawOutOfBound) return !1
                            } else if (!h[s][l]) return !1
                        }
                        return !0
                    }, F = function (e, r, i, a, o, s, l, h, u) {
                        var c, f = i.fontSize;
                        c = g ? g(a, o, f, s, l) : n.color;
                        var d;
                        d = _ ? _(a, o, f, s, l) : n.classes;
                        var v = i.bounds;
                        v[3], v[0], v[1], v[3], v[2], v[0], t.forEach(function (t) {
                            if (t.getContext) {
                                var o = t.getContext("2d"), s = i.mu;
                                o.save(), o.scale(1 / s, 1 / s), o.font = n.fontWeight + " " + (f * s).toString(10) + "px " + n.fontFamily, o.fillStyle = c, o.translate((e + i.gw / 2) * p * s, (r + i.gh / 2) * p * s), 0 !== h && o.rotate(-h), o.textBaseline = "middle", o.fillText(a, i.fillTextOffsetX * s, (i.fillTextOffsetY + .5 * f) * s), o.restore()
                            } else {
                                var l = document.createElement("span"), v = "";
                                v = "rotate(" + -h / Math.PI * 180 + "deg) ", 1 !== i.mu && (v += "translateX(-" + i.fillTextWidth / 4 + "px) scale(" + 1 / i.mu + ")");
                                var g = {
                                    position: "absolute",
                                    display: "block",
                                    font: n.fontWeight + " " + f * i.mu + "px " + n.fontFamily,
                                    left: (e + i.gw / 2) * p + i.fillTextOffsetX + "px",
                                    top: (r + i.gh / 2) * p + i.fillTextOffsetY + "px",
                                    width: i.fillTextWidth + "px",
                                    height: i.fillTextHeight + "px",
                                    lineHeight: f + "px",
                                    whiteSpace: "nowrap",
                                    transform: v,
                                    webkitTransform: v,
                                    msTransform: v,
                                    transformOrigin: "50% 40%",
                                    webkitTransformOrigin: "50% 40%",
                                    msTransformOrigin: "50% 40%"
                                };
                                c && (g.color = c), l.textContent = a;
                                for (var m in g) l.style[m] = g[m];
                                if (u) for (var x in u) l.setAttribute(x, u[x]);
                                d && (l.className += d), t.appendChild(l)
                            }
                        })
                    }, R = function (e, r, n, i, a) {
                        if (!(e >= u || r >= c || e < 0 || r < 0)) {
                            if (h[e][r] = !1, n) {
                                t[0].getContext("2d").fillRect(e * p, r * p, m, m)
                            }
                            S && (M[e][r] = {item: a, dimension: i})
                        }
                    }, B = function (e, r, i, a, o, s) {
                        var l, h = o.occupied, f = n.drawMask;
                        f && (l = t[0].getContext("2d"), l.save(), l.fillStyle = n.maskColor);
                        var d;
                        if (S) {
                            var v = o.bounds;
                            d = {
                                x: (e + v[3]) * p,
                                y: (r + v[0]) * p,
                                w: (v[1] - v[3] + 1) * p,
                                h: (v[2] - v[0] + 1) * p
                            }
                        }
                        for (var g = h.length; g--;) {
                            var m = e + h[g][0], x = r + h[g][1];
                            m >= u || x >= c || m < 0 || x < 0 || R(m, x, f, d, s)
                        }
                        f && l.restore()
                    }, z = function (t) {
                        var e, r, i;
                        Array.isArray(t) ? (e = t[0], r = t[1]) : (e = t.word, r = t.weight, i = t.attributes);
                        var a = O(), o = D(e, r, a);
                        if (!o) return !1;
                        if (A()) return !1;
                        if (!n.drawOutOfBound) {
                            var l = o.bounds;
                            if (l[1] - l[3] + 1 > u || l[2] - l[0] + 1 > c) return !1
                        }
                        for (var h = d + 1; h--;) {
                            var f = I(d - h);
                            n.shuffle && (f = [].concat(f), s(f));
                            for (var v = 0; v < f.length; v++) {
                                var g = function (n) {
                                    var s = Math.floor(n[0] - o.gw / 2), l = Math.floor(n[1] - o.gh / 2);
                                    o.gw, o.gh;
                                    return !!L(s, l, 0, 0, o.occupied) && (F(s, l, o, e, r, d - h, n[2], a, i), B(s, l, 0, 0, o, t), {
                                        gx: s,
                                        gy: l,
                                        rot: a,
                                        info: o
                                    })
                                }(f[v]);
                                if (g) return g
                            }
                        }
                        return null
                    }, N = function (e, r, n) {
                        if (r) return !t.some(function (t) {
                            var i = document.createEvent("CustomEvent");
                            return i.initCustomEvent(e, !0, r, n || {}), !t.dispatchEvent(i)
                        }, this);
                        t.forEach(function (t) {
                            var i = document.createEvent("CustomEvent");
                            i.initCustomEvent(e, !0, r, n || {}), t.dispatchEvent(i)
                        }, this)
                    };
                    !function () {
                        var e = t[0];
                        if (e.getContext) u = Math.ceil(e.width / p), c = Math.ceil(e.height / p); else {
                            var r = e.getBoundingClientRect();
                            u = Math.ceil(r.width / p), c = Math.ceil(r.height / p)
                        }
                        if (N("wordcloudstart", !0)) {
                            f = n.origin ? [n.origin[0] / p, n.origin[1] / p] : [u / 2, c / 2], d = Math.floor(Math.sqrt(u * u + c * c)), h = [];
                            var i, a, o;
                            if (!e.getContext || n.clearCanvas) for (t.forEach(function (t) {
                                if (t.getContext) {
                                    var e = t.getContext("2d");
                                    e.fillStyle = n.backgroundColor, e.clearRect(0, 0, u * (p + 1), c * (p + 1)), e.fillRect(0, 0, u * (p + 1), c * (p + 1))
                                } else t.textContent = "", t.style.backgroundColor = n.backgroundColor, t.style.position = "relative"
                            }), i = u; i--;) for (h[i] = [], a = c; a--;) h[i][a] = !0; else {
                                var s = document.createElement("canvas").getContext("2d");
                                s.fillStyle = n.backgroundColor, s.fillRect(0, 0, 1, 1);
                                var l = s.getImageData(0, 0, 1, 1).data,
                                    g = e.getContext("2d").getImageData(0, 0, u * p, c * p).data;
                                i = u;
                                for (var m, x; i--;) for (h[i] = [], a = c; a--;) {
                                    x = p;
                                    t:for (; x--;) for (m = p; m--;) for (o = 4; o--;) if (g[4 * ((a * p + x) * u * p + (i * p + m)) + o] !== l[o]) {
                                        h[i][a] = !1;
                                        break t
                                    }
                                    !1 !== h[i][a] && (h[i][a] = !0)
                                }
                                g = s = l = void 0
                            }
                            if (n.hover || n.click) {
                                for (S = !0, i = u + 1; i--;) M[i] = [];
                                n.hover && e.addEventListener("mousemove", k), n.click && (e.addEventListener("click", C), e.addEventListener("touchstart", C), e.addEventListener("touchend", function (t) {
                                    t.preventDefault()
                                }), e.style.webkitTapHighlightColor = "rgba(0, 0, 0, 0)"), e.addEventListener("wordcloudstart", function t() {
                                    e.removeEventListener("wordcloudstart", t), e.removeEventListener("mousemove", k), e.removeEventListener("click", C), b = void 0
                                })
                            }
                            o = 0;
                            var y, w;
                            0 !== n.wait ? (y = window.setTimeout, w = window.clearTimeout) : (y = window.setImmediate, w = window.clearImmediate);
                            var _ = function (e, r) {
                                t.forEach(function (t) {
                                    t.removeEventListener(e, r)
                                }, this)
                            }, T = function t() {
                                _("wordcloudstart", t), w(P)
                            };
                            !function (e, r) {
                                t.forEach(function (t) {
                                    t.addEventListener(e, r)
                                }, this)
                            }("wordcloudstart", T);
                            var P = y(function t() {
                                if (o >= n.list.length) return w(P), N("wordcloudstop", !1), void _("wordcloudstart", T);
                                v = (new Date).getTime();
                                var e = z(n.list[o]), r = !N("wordclouddrawn", !0, {item: n.list[o], drawn: e});
                                if (A() || r) return w(P), n.abort(), N("wordcloudabort", !1), N("wordcloudstop", !1), void _("wordcloudstart", T);
                                o++, P = y(t, n.wait)
                            }, n.wait)
                        }
                    }()
                }
            };
            l.isSupported = a, l.minFontSize = o, n = [], void 0 !== (i = function () {
                return l
            }.apply(e, n)) && (t.exports = i)
        }()
    }])
});