!function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.textMaskAddons = t() : e.textMaskAddons = t()
}(this, function () {
    return function (e) {
        function t(r) {
            if (n[r])
                return n[r].exports;
            var i = n[r] = {
                exports: {},
                id: r,
                loaded: !1
            };
            return e[r].call(i.exports, i, i.exports, t),
                i.loaded = !0,
                i.exports
        }
        var n = {};
        return t.m = e,
            t.c = n,
            t.p = "",
            t(0)
    }([function (e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(1);
        Object.defineProperty(t, "createAutoCorrectedDatePipe", {
            enumerable: !0,
            get: function () {
                return r(i).default
            }
        });
        var o = n(2);
        Object.defineProperty(t, "createNumberMask", {
            enumerable: !0,
            get: function () {
                return r(o).default
            }
        });
        var u = n(3);
        Object.defineProperty(t, "emailMask", {
            enumerable: !0,
            get: function () {
                return r(u).default
            }
        })
    }
        , function (e, t) {
            "use strict";
            function n() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "mm dd yyyy"
                    , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                    , n = t.minYear
                    , o = void 0 === n ? 1 : n
                    , u = t.maxYear
                    , a = void 0 === u ? 9999 : u
                    , c = e.split(/[^dmyHMS]+/).sort(function (e, t) {
                        return i.indexOf(e) - i.indexOf(t)
                    });
                return function (t) {
                    var n = []
                        , i = {
                            dd: 31,
                            mm: 12,
                            yy: 99,
                            yyyy: a,
                            HH: 23,
                            MM: 59,
                            SS: 59
                        }
                        , u = {
                            dd: 1,
                            mm: 1,
                            yy: 0,
                            yyyy: o,
                            HH: 0,
                            MM: 0,
                            SS: 0
                        }
                        , l = t.split("");
                    c.forEach(function (t) {
                        var r = e.indexOf(t)
                            , o = parseInt(i[t].toString().substr(0, 1), 10);
                        parseInt(l[r], 10) > o && (l[r + 1] = l[r],
                            l[r] = 0,
                            n.push(r))
                    });
                    var s = 0
                        , d = c.some(function (n) {
                            var c = e.indexOf(n)
                                , l = n.length
                                , d = t.substr(c, l).replace(/\D/g, "")
                                , f = parseInt(d, 10);
                            "mm" === n && (s = f || 0);
                            var p = "dd" === n ? r[s] : i[n];
                            if ("yyyy" === n && (1 !== o || 9999 !== a)) {
                                var v = parseInt(i[n].toString().substring(0, d.length), 10)
                                    , y = parseInt(u[n].toString().substring(0, d.length), 10);
                                return f < y || f > v
                            }
                            return f > p || d.length === l && f < u[n]
                        });
                    return !d && {
                        value: l.join(""),
                        indexesOfPipedChars: n
                    }
                }
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.default = n;
            var r = [31, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
                , i = ["yyyy", "yy", "mm", "dd", "HH", "MM", "SS"]
        }
        , function (e, t) {
            "use strict";
            function n() {
                function e() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a
                        , t = e.length;
                    if (e === a || e[0] === g[0] && 1 === t)
                        return g.split(a).concat([v]).concat(h.split(a));
                    if (e === P && _)
                        return g.split(a).concat(["0", P, v]).concat(h.split(a));
                    var n = e[0] === s && D;
                    n && (e = e.toString().substr(1));
                    var u = e.lastIndexOf(P)
                        , c = u !== -1
                        , l = void 0
                        , m = void 0
                        , b = void 0;
                    if (e.slice($ * -1) === h && (e = e.slice(0, $ * -1)),
                        c && (_ || I) ? (l = e.slice(e.slice(0, N) === g ? N : 0, u),
                            m = e.slice(u + 1, t),
                            m = r(m.replace(f, a))) : l = e.slice(0, N) === g ? e.slice(N) : e,
                        L && ("undefined" == typeof L ? "undefined" : o(L)) === p) {
                        var O = "." === S ? "[.]" : "" + S
                            , M = (l.match(new RegExp(O, "g")) || []).length;
                        l = l.slice(0, L + M * V)
                    }
                    return l = l.replace(f, a),
                        R || (l = l.replace(/^0+(0$|[^0])/, "$1")),
                        l = x ? i(l, S) : l,
                        b = r(l),
                        (c && _ || I === !0) && (e[u - 1] !== P && b.push(y),
                            b.push(P, y),
                            m && (("undefined" == typeof C ? "undefined" : o(C)) === p && (m = m.slice(0, C)),
                                b = b.concat(m)),
                            I === !0 && e[u - 1] === P && b.push(v)),
                        N > 0 && (b = g.split(a).concat(b)),
                        n && (b.length === N && b.push(v),
                            b = [d].concat(b)),
                        h.length > 0 && (b = b.concat(h.split(a))),
                        b
                }
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                    , n = t.prefix
                    , g = void 0 === n ? u : n
                    , m = t.suffix
                    , h = void 0 === m ? a : m
                    , b = t.includeThousandsSeparator
                    , x = void 0 === b || b
                    , O = t.thousandsSeparatorSymbol
                    , S = void 0 === O ? c : O
                    , M = t.allowDecimal
                    , _ = void 0 !== M && M
                    , j = t.decimalSymbol
                    , P = void 0 === j ? l : j
                    , w = t.decimalLimit
                    , C = void 0 === w ? 2 : w
                    , H = t.requireDecimal
                    , I = void 0 !== H && H
                    , k = t.allowNegative
                    , D = void 0 !== k && k
                    , E = t.allowLeadingZeroes
                    , R = void 0 !== E && E
                    , A = t.integerLimit
                    , L = void 0 === A ? null : A
                    , N = g && g.length || 0
                    , $ = h && h.length || 0
                    , V = S && S.length || 0;
                return e.instanceOf = "createNumberMask",
                    e
            }
            function r(e) {
                return e.split(a).map(function (e) {
                    return v.test(e) ? v : e
                })
            }
            function i(e, t) {
                return e.replace(/\B(?=(\d{3})+(?!\d))/g, t)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            }
                : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ;
            t.default = n;
            var u = "$"
                , a = ""
                , c = ","
                , l = "."
                , s = "-"
                , d = /-/
                , f = /\D+/g
                , p = "number"
                , v = /\d/
                , y = "[]"
        }
        , function (e, t, n) {
            "use strict";
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            function i(e, t) {
                e = e.replace(O, v);
                var n = t.placeholderChar
                    , r = t.currentCaretPosition
                    , i = e.indexOf(y)
                    , s = e.lastIndexOf(p)
                    , d = s < i ? -1 : s
                    , f = o(e, i + 1, y)
                    , g = o(e, d - 1, p)
                    , m = u(e, i, n)
                    , h = a(e, i, d, n)
                    , b = c(e, d, n, r);
                m = l(m),
                    h = l(h),
                    b = l(b, !0);
                var x = m.concat(f).concat(h).concat(g).concat(b);
                return x
            }
            function o(e, t, n) {
                var r = [];
                return e[t] === n ? r.push(n) : r.push(g, n),
                    r.push(g),
                    r
            }
            function u(e, t) {
                return t === -1 ? e : e.slice(0, t)
            }
            function a(e, t, n, r) {
                var i = v;
                return t !== -1 && (i = n === -1 ? e.slice(t + 1, e.length) : e.slice(t + 1, n)),
                    i = i.replace(new RegExp("[\\s" + r + "]", h), v),
                    i === y ? f : i.length < 1 ? m : i[i.length - 1] === p ? i.slice(0, i.length - 1) : i
            }
            function c(e, t, n, r) {
                var i = v;
                return t !== -1 && (i = e.slice(t + 1, e.length)),
                    i = i.replace(new RegExp("[\\s" + n + ".]", h), v),
                    0 === i.length ? e[t - 1] === p && r !== e.length ? f : v : i
            }
            function l(e, t) {
                return e.split(v).map(function (e) {
                    return e === m ? e : t ? x : b
                })
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var s = n(4)
                , d = r(s)
                , f = "*"
                , p = "."
                , v = ""
                , y = "@"
                , g = "[]"
                , m = " "
                , h = "g"
                , b = /[^\s]/
                , x = /[^.\s]/
                , O = /\s/g;
            t.default = {
                mask: i,
                pipe: d.default
            }
        }
        , function (e, t) {
            "use strict";
            function n(e, t) {
                var n = t.currentCaretPosition
                    , o = t.rawValue
                    , f = t.previousConformedValue
                    , p = t.placeholderChar
                    , v = e;
                v = r(v);
                var y = v.indexOf(a)
                    , g = null === o.match(new RegExp("[^@\\s." + p + "]"));
                if (g)
                    return u;
                if (v.indexOf(l) !== -1 || y !== -1 && n !== y + 1 || o.indexOf(i) === -1 && f !== u && o.indexOf(c) !== -1)
                    return !1;
                var m = v.indexOf(i)
                    , h = v.slice(m + 1, v.length);
                return (h.match(d) || s).length > 1 && v.substr(-1) === c && n !== o.length && (v = v.slice(0, v.length - 1)),
                    v
            }
            function r(e) {
                var t = 0;
                return e.replace(o, function () {
                    return t++,
                        1 === t ? i : u
                })
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                t.default = n;
            var i = "@"
                , o = /@/g
                , u = ""
                , a = "@."
                , c = "."
                , l = ".."
                , s = []
                , d = /\./g
        }
    ])
});
