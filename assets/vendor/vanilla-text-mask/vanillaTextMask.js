!function (e, r) {
    "object" == typeof exports && "object" == typeof module ? module.exports = r() : "function" == typeof define && define.amd ? define([], r) : "object" == typeof exports ? exports.vanillaTextMask = r() : e.vanillaTextMask = r()
}(this, function () {
    return function (e) {
        function r(n) {
            if (t[n])
                return t[n].exports;
            var o = t[n] = {
                exports: {},
                id: n,
                loaded: !1
            };
            return e[n].call(o.exports, o, o.exports, r),
                o.loaded = !0,
                o.exports
        }
        var t = {};
        return r.m = e,
            r.c = t,
            r.p = "",
            r(0)
    }([function (e, r, t) {
        "use strict";
        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function o(e) {
            var r = e.inputElement
                , t = (0,
                    u.default)(e)
                , n = function (e) {
                    var r = e.target.value;
                    return t.update(r)
                };
            return r.addEventListener("input", n),
                t.update(r.value),
            {
                textMaskInputElement: t,
                destroy: function () {
                    r.removeEventListener("input", n)
                }
            }
        }
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
            r.conformToMask = void 0,
            r.maskInput = o;
        var i = t(2);
        Object.defineProperty(r, "conformToMask", {
            enumerable: !0,
            get: function () {
                return n(i).default
            }
        });
        var a = t(5)
            , u = n(a);
        r.default = o
    }
        , function (e, r) {
            "use strict";
            Object.defineProperty(r, "__esModule", {
                value: !0
            }),
                r.placeholderChar = "_",
                r.strFunction = "function"
        }
        , function (e, r, t) {
            "use strict";
            function n() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l
                    , r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u
                    , t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if (!(0,
                    i.isArray)(r)) {
                    if (("undefined" == typeof r ? "undefined" : o(r)) !== a.strFunction)
                        throw new Error("Text-mask:conformToMask; The mask property must be an array.");
                    r = r(e, t),
                        r = (0,
                            i.processCaretTraps)(r).maskWithoutCaretTraps
                }
                var n = t.guide
                    , s = void 0 === n || n
                    , f = t.previousConformedValue
                    , d = void 0 === f ? l : f
                    , c = t.placeholderChar
                    , p = void 0 === c ? a.placeholderChar : c
                    , v = t.placeholder
                    , h = void 0 === v ? (0,
                        i.convertMaskToPlaceholder)(r, p) : v
                    , m = t.currentCaretPosition
                    , y = t.keepCharPositions
                    , g = s === !1 && void 0 !== d
                    , b = e.length
                    , C = d.length
                    , k = h.length
                    , x = r.length
                    , P = b - C
                    , T = P > 0
                    , O = m + (T ? -P : 0)
                    , M = O + Math.abs(P);
                if (y === !0 && !T) {
                    for (var w = l, S = O; S < M; S++)
                        h[S] === p && (w += p);
                    e = e.slice(0, O) + w + e.slice(O, b)
                }
                for (var _ = e.split(l).map(function (e, r) {
                    return {
                        char: e,
                        isNew: r >= O && r < M
                    }
                }), j = b - 1; j >= 0; j--) {
                    var V = _[j].char;
                    if (V !== p) {
                        var A = j >= O && C === x;
                        V === h[A ? j - P : j] && _.splice(j, 1)
                    }
                }
                var E = l
                    , N = !1;
                e: for (var F = 0; F < k; F++) {
                    var I = h[F];
                    if (I === p) {
                        if (_.length > 0)
                            for (; _.length > 0;) {
                                var L = _.shift()
                                    , R = L.char
                                    , J = L.isNew;
                                if (R === p && g !== !0) {
                                    E += p;
                                    continue e
                                }
                                if (r[F].test(R)) {
                                    if (y === !0 && J !== !1 && d !== l && s !== !1 && T) {
                                        for (var W = _.length, q = null, z = 0; z < W; z++) {
                                            var B = _[z];
                                            if (B.char !== p && B.isNew === !1)
                                                break;
                                            if (B.char === p) {
                                                q = z;
                                                break
                                            }
                                        }
                                        null !== q ? (E += R,
                                            _.splice(q, 1)) : F--
                                    } else
                                        E += R;
                                    continue e
                                }
                                N = !0
                            }
                        g === !1 && (E += h.substr(F, k));
                        break
                    }
                    E += I
                }
                if (g && T === !1) {
                    for (var D = null, G = 0; G < E.length; G++)
                        h[G] === p && (D = G);
                    E = null !== D ? E.substr(0, D + 1) : l
                }
                return {
                    conformedValue: E,
                    meta: {
                        someCharsRejected: N
                    }
                }
            }
            Object.defineProperty(r, "__esModule", {
                value: !0
            });
            var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            }
                : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                ;
            r.default = n;
            var i = t(3)
                , a = t(1)
                , u = []
                , l = ""
        }
        , function (e, r, t) {
            "use strict";
            function n() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s
                    , r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.placeholderChar;
                if (!o(e))
                    throw new Error("Text-mask:convertMaskToPlaceholder; The mask property must be an array.");
                if (e.indexOf(r) !== -1)
                    throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\n" + ("The placeholder character that was received is: " + JSON.stringify(r) + "\n\n") + ("The mask that was received is: " + JSON.stringify(e)));
                return e.map(function (e) {
                    return e instanceof RegExp ? r : e
                }).join("")
            }
            function o(e) {
                return Array.isArray && Array.isArray(e) || e instanceof Array
            }
            function i(e) {
                return "string" == typeof e || e instanceof String
            }
            function a(e) {
                return "number" == typeof e && void 0 === e.length && !isNaN(e)
            }
            function u(e) {
                for (var r = [], t = void 0; t = e.indexOf(f),
                    t !== -1;)
                    r.push(t),
                        e.splice(t, 1);
                return {
                    maskWithoutCaretTraps: e,
                    indexes: r
                }
            }
            Object.defineProperty(r, "__esModule", {
                value: !0
            }),
                r.convertMaskToPlaceholder = n,
                r.isArray = o,
                r.isString = i,
                r.isNumber = a,
                r.processCaretTraps = u;
            var l = t(1)
                , s = []
                , f = "[]"
        }
        , function (e, r) {
            "use strict";
            function t(e) {
                var r = e.previousConformedValue
                    , t = void 0 === r ? o : r
                    , i = e.previousPlaceholder
                    , a = void 0 === i ? o : i
                    , u = e.currentCaretPosition
                    , l = void 0 === u ? 0 : u
                    , s = e.conformedValue
                    , f = e.rawValue
                    , d = e.placeholderChar
                    , c = e.placeholder
                    , p = e.indexesOfPipedChars
                    , v = void 0 === p ? n : p
                    , h = e.caretTrapIndexes
                    , m = void 0 === h ? n : h;
                if (0 === l || !f.length)
                    return 0;
                var y = f.length
                    , g = t.length
                    , b = c.length
                    , C = s.length
                    , k = y - g
                    , x = k > 0
                    , P = 0 === g
                    , T = k > 1 && !x && !P;
                if (T)
                    return l;
                var O = x && (t === s || s === c)
                    , M = 0
                    , w = void 0
                    , S = void 0;
                if (O)
                    M = l - k;
                else {
                    var _ = s.toLowerCase()
                        , j = f.toLowerCase()
                        , V = j.substr(0, l).split(o)
                        , A = V.filter(function (e) {
                            return _.indexOf(e) !== -1
                        });
                    S = A[A.length - 1];
                    var E = a.substr(0, A.length).split(o).filter(function (e) {
                        return e !== d
                    }).length
                        , N = c.substr(0, A.length).split(o).filter(function (e) {
                            return e !== d
                        }).length
                        , F = N !== E
                        , I = void 0 !== a[A.length - 1] && void 0 !== c[A.length - 2] && a[A.length - 1] !== d && a[A.length - 1] !== c[A.length - 1] && a[A.length - 1] === c[A.length - 2];
                    !x && (F || I) && E > 0 && c.indexOf(S) > -1 && void 0 !== f[l] && (w = !0,
                        S = f[l]);
                    for (var L = v.map(function (e) {
                        return _[e]
                    }), R = L.filter(function (e) {
                        return e === S
                    }).length, J = A.filter(function (e) {
                        return e === S
                    }).length, W = c.substr(0, c.indexOf(d)).split(o).filter(function (e, r) {
                        return e === S && f[r] !== e
                    }).length, q = W + J + R + (w ? 1 : 0), z = 0, B = 0; B < C; B++) {
                        var D = _[B];
                        if (M = B + 1,
                            D === S && z++,
                            z >= q)
                            break
                    }
                }
                if (x) {
                    for (var G = M, H = M; H <= b; H++)
                        if (c[H] === d && (G = H),
                            c[H] === d || m.indexOf(H) !== -1 || H === b)
                            return G
                } else if (w) {
                    for (var K = M - 1; K >= 0; K--)
                        if (s[K] === S || m.indexOf(K) !== -1 || 0 === K)
                            return K
                } else
                    for (var Q = M; Q >= 0; Q--)
                        if (c[Q - 1] === d || m.indexOf(Q) !== -1 || 0 === Q)
                            return Q
            }
            Object.defineProperty(r, "__esModule", {
                value: !0
            }),
                r.default = t;
            var n = []
                , o = ""
        }
        , function (e, r, t) {
            "use strict";
            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            function o(e) {
                var r = {
                    previousConformedValue: void 0,
                    previousPlaceholder: void 0
                };
                return {
                    state: r,
                    update: function (t) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e
                            , o = n.inputElement
                            , s = n.mask
                            , d = n.guide
                            , m = n.pipe
                            , g = n.placeholderChar
                            , b = void 0 === g ? v.placeholderChar : g
                            , C = n.keepCharPositions
                            , k = void 0 !== C && C
                            , x = n.showMask
                            , P = void 0 !== x && x;
                        if ("undefined" == typeof t && (t = o.value),
                            t !== r.previousConformedValue) {
                            ("undefined" == typeof s ? "undefined" : l(s)) === y && void 0 !== s.pipe && void 0 !== s.mask && (m = s.pipe,
                                s = s.mask);
                            var T = void 0
                                , O = void 0;
                            if (s instanceof Array && (T = (0,
                                p.convertMaskToPlaceholder)(s, b)),
                                s !== !1) {
                                var M = a(t)
                                    , w = o.selectionEnd
                                    , S = r.previousConformedValue
                                    , _ = r.previousPlaceholder
                                    , j = void 0;
                                if (("undefined" == typeof s ? "undefined" : l(s)) === v.strFunction) {
                                    if (O = s(M, {
                                        currentCaretPosition: w,
                                        previousConformedValue: S,
                                        placeholderChar: b
                                    }),
                                        O === !1)
                                        return;
                                    var V = (0,
                                        p.processCaretTraps)(O)
                                        , A = V.maskWithoutCaretTraps
                                        , E = V.indexes;
                                    O = A,
                                        j = E,
                                        T = (0,
                                            p.convertMaskToPlaceholder)(O, b)
                                } else
                                    O = s;
                                var N = {
                                    previousConformedValue: S,
                                    guide: d,
                                    placeholderChar: b,
                                    pipe: m,
                                    placeholder: T,
                                    currentCaretPosition: w,
                                    keepCharPositions: k
                                }
                                    , F = (0,
                                        c.default)(M, O, N)
                                    , I = F.conformedValue
                                    , L = ("undefined" == typeof m ? "undefined" : l(m)) === v.strFunction
                                    , R = {};
                                L && (R = m(I, u({
                                    rawValue: M
                                }, N)),
                                    R === !1 ? R = {
                                        value: S,
                                        rejected: !0
                                    } : (0,
                                        p.isString)(R) && (R = {
                                            value: R
                                        }));
                                var J = L ? R.value : I
                                    , W = (0,
                                        f.default)({
                                            previousConformedValue: S,
                                            previousPlaceholder: _,
                                            conformedValue: J,
                                            placeholder: T,
                                            rawValue: M,
                                            currentCaretPosition: w,
                                            placeholderChar: b,
                                            indexesOfPipedChars: R.indexesOfPipedChars,
                                            caretTrapIndexes: j
                                        })
                                    , q = J === T && 0 === W
                                    , z = P ? T : h
                                    , B = q ? z : J;
                                r.previousConformedValue = B,
                                    r.previousPlaceholder = T,
                                    o.value !== B && (o.value = B,
                                        i(o, W))
                            }
                        }
                    }
                }
            }
            function i(e, r) {
                document.activeElement === e && (g ? b(function () {
                    return e.setSelectionRange(r, r, m)
                }, 0) : e.setSelectionRange(r, r, m))
            }
            function a(e) {
                if ((0,
                    p.isString)(e))
                    return e;
                if ((0,
                    p.isNumber)(e))
                    return String(e);
                if (void 0 === e || null === e)
                    return h;
                throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n " + JSON.stringify(e))
            }
            Object.defineProperty(r, "__esModule", {
                value: !0
            });
            var u = Object.assign || function (e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = arguments[r];
                    for (var n in t)
                        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                }
                return e
            }
                , l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                }
                    : function (e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }
                ;
            r.default = o;
            var s = t(4)
                , f = n(s)
                , d = t(2)
                , c = n(d)
                , p = t(3)
                , v = t(1)
                , h = ""
                , m = "none"
                , y = "object"
                , g = "undefined" != typeof navigator && /Android/i.test(navigator.userAgent)
                , b = "undefined" != typeof requestAnimationFrame ? requestAnimationFrame : setTimeout
        }
    ])
});
