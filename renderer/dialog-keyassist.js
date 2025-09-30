(global.webpackChunkxmind_vana = global.webpackChunkxmind_vana || []).push([
  [6454],
  {
    41118: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => a });
      var o = n(23645),
        r = n.n(o)()(function (e) {
          return e[1];
        });
      r.push([
        e.id,
        ".customize-icon[data-v-3d1507a7] {\n  height: 24px;\n  width: 24px;\n  position: absolute;\n  right: 14px;\n  top: 18px;\n}\n.empty-block[data-v-3d1507a7] {\n  line-height: 27px;\n}\n.symbol-block[data-v-3d1507a7] {\n  min-width: 19px;\n  justify-content: center;\n}\n.uk-fieldset > div:not(:first-child) > .shortcut-group[data-v-3d1507a7] {\n  padding-top: 16px;\n}\n",
        "",
      ]);
      const a = r;
    },
    23645: (e) => {
      "use strict";
      e.exports = function (e) {
        var t = [];
        return (
          (t.toString = function () {
            return this.map(function (t) {
              var n = e(t);
              return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n;
            }).join("");
          }),
          (t.i = function (e, n, o) {
            "string" == typeof e && (e = [[null, e, ""]]);
            var r = {};
            if (o)
              for (var a = 0; a < this.length; a++) {
                var i = this[a][0];
                null != i && (r[i] = !0);
              }
            for (var c = 0; c < e.length; c++) {
              var s = [].concat(e[c]);
              (o && r[s[0]]) ||
                (n &&
                  (s[2]
                    ? (s[2] = "".concat(n, " and ").concat(s[2]))
                    : (s[2] = n)),
                t.push(s));
            }
          }),
          t
        );
      };
    },
    18552: (e, t, n) => {
      var o = n(10852)(n(55639), "DataView");
      e.exports = o;
    },
    1989: (e, t, n) => {
      var o = n(51789),
        r = n(80401),
        a = n(57667),
        i = n(21327),
        c = n(81866);
      function s(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var o = e[t];
          this.set(o[0], o[1]);
        }
      }
      (s.prototype.clear = o),
        (s.prototype.delete = r),
        (s.prototype.get = a),
        (s.prototype.has = i),
        (s.prototype.set = c),
        (e.exports = s);
    },
    38407: (e, t, n) => {
      var o = n(27040),
        r = n(14125),
        a = n(82117),
        i = n(67518),
        c = n(54705);
      function s(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var o = e[t];
          this.set(o[0], o[1]);
        }
      }
      (s.prototype.clear = o),
        (s.prototype.delete = r),
        (s.prototype.get = a),
        (s.prototype.has = i),
        (s.prototype.set = c),
        (e.exports = s);
    },
    57071: (e, t, n) => {
      var o = n(10852)(n(55639), "Map");
      e.exports = o;
    },
    83369: (e, t, n) => {
      var o = n(24785),
        r = n(11285),
        a = n(96e3),
        i = n(49916),
        c = n(95265);
      function s(e) {
        var t = -1,
          n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n; ) {
          var o = e[t];
          this.set(o[0], o[1]);
        }
      }
      (s.prototype.clear = o),
        (s.prototype.delete = r),
        (s.prototype.get = a),
        (s.prototype.has = i),
        (s.prototype.set = c),
        (e.exports = s);
    },
    53818: (e, t, n) => {
      var o = n(10852)(n(55639), "Promise");
      e.exports = o;
    },
    58525: (e, t, n) => {
      var o = n(10852)(n(55639), "Set");
      e.exports = o;
    },
    46384: (e, t, n) => {
      var o = n(38407),
        r = n(37465),
        a = n(63779),
        i = n(67599),
        c = n(44758),
        s = n(34309);
      function l(e) {
        var t = (this.__data__ = new o(e));
        this.size = t.size;
      }
      (l.prototype.clear = r),
        (l.prototype.delete = a),
        (l.prototype.get = i),
        (l.prototype.has = c),
        (l.prototype.set = s),
        (e.exports = l);
    },
    62705: (e, t, n) => {
      var o = n(55639).Symbol;
      e.exports = o;
    },
    11149: (e, t, n) => {
      var o = n(55639).Uint8Array;
      e.exports = o;
    },
    70577: (e, t, n) => {
      var o = n(10852)(n(55639), "WeakMap");
      e.exports = o;
    },
    96874: (e) => {
      e.exports = function (e, t, n) {
        switch (n.length) {
          case 0:
            return e.call(t);
          case 1:
            return e.call(t, n[0]);
          case 2:
            return e.call(t, n[0], n[1]);
          case 3:
            return e.call(t, n[0], n[1], n[2]);
        }
        return e.apply(t, n);
      };
    },
    43202: (e) => {
      e.exports = function (e, t) {
        for (
          var n = -1, o = null == e ? 0 : e.length;
          ++n < o && !1 !== t(e[n], n, e);

        );
        return e;
      };
    },
    34963: (e) => {
      e.exports = function (e, t) {
        for (
          var n = -1, o = null == e ? 0 : e.length, r = 0, a = [];
          ++n < o;

        ) {
          var i = e[n];
          t(i, n, e) && (a[r++] = i);
        }
        return a;
      };
    },
    14636: (e, t, n) => {
      var o = n(22545),
        r = n(35694),
        a = n(1469),
        i = n(44144),
        c = n(65776),
        s = n(36719),
        l = Object.prototype.hasOwnProperty;
      e.exports = function (e, t) {
        var n = a(e),
          d = !n && r(e),
          u = !n && !d && i(e),
          p = !n && !d && !u && s(e),
          m = n || d || u || p,
          v = m ? o(e.length, String) : [],
          f = v.length;
        for (var g in e)
          (!t && !l.call(e, g)) ||
            (m &&
              ("length" == g ||
                (u && ("offset" == g || "parent" == g)) ||
                (p &&
                  ("buffer" == g || "byteLength" == g || "byteOffset" == g)) ||
                c(g, f))) ||
            v.push(g);
        return v;
      };
    },
    29932: (e) => {
      e.exports = function (e, t) {
        for (var n = -1, o = null == e ? 0 : e.length, r = Array(o); ++n < o; )
          r[n] = t(e[n], n, e);
        return r;
      };
    },
    62488: (e) => {
      e.exports = function (e, t) {
        for (var n = -1, o = t.length, r = e.length; ++n < o; ) e[r + n] = t[n];
        return e;
      };
    },
    34865: (e, t, n) => {
      var o = n(89465),
        r = n(77813),
        a = Object.prototype.hasOwnProperty;
      e.exports = function (e, t, n) {
        var i = e[t];
        (a.call(e, t) && r(i, n) && (void 0 !== n || t in e)) || o(e, t, n);
      };
    },
    18470: (e, t, n) => {
      var o = n(77813);
      e.exports = function (e, t) {
        for (var n = e.length; n--; ) if (o(e[n][0], t)) return n;
        return -1;
      };
    },
    44037: (e, t, n) => {
      var o = n(98363),
        r = n(3674);
      e.exports = function (e, t) {
        return e && o(t, r(t), e);
      };
    },
    63886: (e, t, n) => {
      var o = n(98363),
        r = n(81704);
      e.exports = function (e, t) {
        return e && o(t, r(t), e);
      };
    },
    89465: (e, t, n) => {
      var o = n(38777);
      e.exports = function (e, t, n) {
        "__proto__" == t && o
          ? o(e, t, {
              configurable: !0,
              enumerable: !0,
              value: n,
              writable: !0,
            })
          : (e[t] = n);
      };
    },
    85990: (e, t, n) => {
      var o = n(46384),
        r = n(43202),
        a = n(34865),
        i = n(44037),
        c = n(63886),
        s = n(64626),
        l = n(278),
        d = n(18805),
        u = n(1911),
        p = n(58234),
        m = n(46904),
        v = n(64160),
        f = n(43824),
        g = n(29148),
        y = n(38517),
        h = n(1469),
        b = n(44144),
        w = n(56688),
        S = n(13218),
        Z = n(72928),
        x = n(3674),
        I = n(81704),
        W = "[object Arguments]",
        T = "[object Function]",
        O = "[object Object]",
        k = {};
      (k[W] =
        k["[object Array]"] =
        k["[object ArrayBuffer]"] =
        k["[object DataView]"] =
        k["[object Boolean]"] =
        k["[object Date]"] =
        k["[object Float32Array]"] =
        k["[object Float64Array]"] =
        k["[object Int8Array]"] =
        k["[object Int16Array]"] =
        k["[object Int32Array]"] =
        k["[object Map]"] =
        k["[object Number]"] =
        k[O] =
        k["[object RegExp]"] =
        k["[object Set]"] =
        k["[object String]"] =
        k["[object Symbol]"] =
        k["[object Uint8Array]"] =
        k["[object Uint8ClampedArray]"] =
        k["[object Uint16Array]"] =
        k["[object Uint32Array]"] =
          !0),
        (k["[object Error]"] = k[T] = k["[object WeakMap]"] = !1),
        (e.exports = function e(t, n, A, E, _, N) {
          var j,
            L = 1 & n,
            P = 2 & n,
            C = 4 & n;
          if ((A && (j = _ ? A(t, E, _, N) : A(t)), void 0 !== j)) return j;
          if (!S(t)) return t;
          var M = h(t);
          if (M) {
            if (((j = f(t)), !L)) return l(t, j);
          } else {
            var B = v(t),
              F = B == T || "[object GeneratorFunction]" == B;
            if (b(t)) return s(t, L);
            if (B == O || B == W || (F && !_)) {
              if (((j = P || F ? {} : y(t)), !L))
                return P ? u(t, c(j, t)) : d(t, i(j, t));
            } else {
              if (!k[B]) return _ ? t : {};
              j = g(t, B, L);
            }
          }
          N || (N = new o());
          var R = N.get(t);
          if (R) return R;
          N.set(t, j),
            Z(t)
              ? t.forEach(function (o) {
                  j.add(e(o, n, A, o, t, N));
                })
              : w(t) &&
                t.forEach(function (o, r) {
                  j.set(r, e(o, n, A, r, t, N));
                });
          var D = M ? void 0 : (C ? (P ? m : p) : P ? I : x)(t);
          return (
            r(D || t, function (o, r) {
              D && (o = t[(r = o)]), a(j, r, e(o, n, A, r, t, N));
            }),
            j
          );
        });
    },
    3118: (e, t, n) => {
      var o = n(13218),
        r = Object.create,
        a = (function () {
          function e() {}
          return function (t) {
            if (!o(t)) return {};
            if (r) return r(t);
            e.prototype = t;
            var n = new e();
            return (e.prototype = void 0), n;
          };
        })();
      e.exports = a;
    },
    21078: (e, t, n) => {
      var o = n(62488),
        r = n(37285);
      e.exports = function e(t, n, a, i, c) {
        var s = -1,
          l = t.length;
        for (a || (a = r), c || (c = []); ++s < l; ) {
          var d = t[s];
          n > 0 && a(d)
            ? n > 1
              ? e(d, n - 1, a, i, c)
              : o(c, d)
            : i || (c[c.length] = d);
        }
        return c;
      };
    },
    97786: (e, t, n) => {
      var o = n(71811),
        r = n(40327);
      e.exports = function (e, t) {
        for (var n = 0, a = (t = o(t, e)).length; null != e && n < a; )
          e = e[r(t[n++])];
        return n && n == a ? e : void 0;
      };
    },
    68866: (e, t, n) => {
      var o = n(62488),
        r = n(1469);
      e.exports = function (e, t, n) {
        var a = t(e);
        return r(e) ? a : o(a, n(e));
      };
    },
    44239: (e, t, n) => {
      var o = n(62705),
        r = n(89607),
        a = n(2333),
        i = o ? o.toStringTag : void 0;
      e.exports = function (e) {
        return null == e
          ? void 0 === e
            ? "[object Undefined]"
            : "[object Null]"
          : i && i in Object(e)
          ? r(e)
          : a(e);
      };
    },
    9454: (e, t, n) => {
      var o = n(44239),
        r = n(37005);
      e.exports = function (e) {
        return r(e) && "[object Arguments]" == o(e);
      };
    },
    25588: (e, t, n) => {
      var o = n(64160),
        r = n(37005);
      e.exports = function (e) {
        return r(e) && "[object Map]" == o(e);
      };
    },
    28458: (e, t, n) => {
      var o = n(23560),
        r = n(15346),
        a = n(13218),
        i = n(80346),
        c = /^\[object .+?Constructor\]$/,
        s = Function.prototype,
        l = Object.prototype,
        d = s.toString,
        u = l.hasOwnProperty,
        p = RegExp(
          "^" +
            d
              .call(u)
              .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?"
              ) +
            "$"
        );
      e.exports = function (e) {
        return !(!a(e) || r(e)) && (o(e) ? p : c).test(i(e));
      };
    },
    29221: (e, t, n) => {
      var o = n(64160),
        r = n(37005);
      e.exports = function (e) {
        return r(e) && "[object Set]" == o(e);
      };
    },
    38749: (e, t, n) => {
      var o = n(44239),
        r = n(41780),
        a = n(37005),
        i = {};
      (i["[object Float32Array]"] =
        i["[object Float64Array]"] =
        i["[object Int8Array]"] =
        i["[object Int16Array]"] =
        i["[object Int32Array]"] =
        i["[object Uint8Array]"] =
        i["[object Uint8ClampedArray]"] =
        i["[object Uint16Array]"] =
        i["[object Uint32Array]"] =
          !0),
        (i["[object Arguments]"] =
          i["[object Array]"] =
          i["[object ArrayBuffer]"] =
          i["[object Boolean]"] =
          i["[object DataView]"] =
          i["[object Date]"] =
          i["[object Error]"] =
          i["[object Function]"] =
          i["[object Map]"] =
          i["[object Number]"] =
          i["[object Object]"] =
          i["[object RegExp]"] =
          i["[object Set]"] =
          i["[object String]"] =
          i["[object WeakMap]"] =
            !1),
        (e.exports = function (e) {
          return a(e) && r(e.length) && !!i[o(e)];
        });
    },
    280: (e, t, n) => {
      var o = n(25726),
        r = n(86916),
        a = Object.prototype.hasOwnProperty;
      e.exports = function (e) {
        if (!o(e)) return r(e);
        var t = [];
        for (var n in Object(e))
          a.call(e, n) && "constructor" != n && t.push(n);
        return t;
      };
    },
    10313: (e, t, n) => {
      var o = n(13218),
        r = n(25726),
        a = n(33498),
        i = Object.prototype.hasOwnProperty;
      e.exports = function (e) {
        if (!o(e)) return a(e);
        var t = r(e),
          n = [];
        for (var c in e)
          ("constructor" != c || (!t && i.call(e, c))) && n.push(c);
        return n;
      };
    },
    56560: (e, t, n) => {
      var o = n(75703),
        r = n(38777),
        a = n(6557),
        i = r
          ? function (e, t) {
              return r(e, "toString", {
                configurable: !0,
                enumerable: !1,
                value: o(t),
                writable: !0,
              });
            }
          : a;
      e.exports = i;
    },
    14259: (e) => {
      e.exports = function (e, t, n) {
        var o = -1,
          r = e.length;
        t < 0 && (t = -t > r ? 0 : r + t),
          (n = n > r ? r : n) < 0 && (n += r),
          (r = t > n ? 0 : (n - t) >>> 0),
          (t >>>= 0);
        for (var a = Array(r); ++o < r; ) a[o] = e[o + t];
        return a;
      };
    },
    22545: (e) => {
      e.exports = function (e, t) {
        for (var n = -1, o = Array(e); ++n < e; ) o[n] = t(n);
        return o;
      };
    },
    80531: (e, t, n) => {
      var o = n(62705),
        r = n(29932),
        a = n(1469),
        i = n(33448),
        c = o ? o.prototype : void 0,
        s = c ? c.toString : void 0;
      e.exports = function e(t) {
        if ("string" == typeof t) return t;
        if (a(t)) return r(t, e) + "";
        if (i(t)) return s ? s.call(t) : "";
        var n = t + "";
        return "0" == n && 1 / t == -Infinity ? "-0" : n;
      };
    },
    27561: (e, t, n) => {
      var o = n(67990),
        r = /^\s+/;
      e.exports = function (e) {
        return e ? e.slice(0, o(e) + 1).replace(r, "") : e;
      };
    },
    7518: (e) => {
      e.exports = function (e) {
        return function (t) {
          return e(t);
        };
      };
    },
    57406: (e, t, n) => {
      var o = n(71811),
        r = n(10928),
        a = n(40292),
        i = n(40327);
      e.exports = function (e, t) {
        return (t = o(t, e)), null == (e = a(e, t)) || delete e[i(r(t))];
      };
    },
    71811: (e, t, n) => {
      var o = n(1469),
        r = n(15403),
        a = n(55514),
        i = n(79833);
      e.exports = function (e, t) {
        return o(e) ? e : r(e, t) ? [e] : a(i(e));
      };
    },
    74318: (e, t, n) => {
      var o = n(11149);
      e.exports = function (e) {
        var t = new e.constructor(e.byteLength);
        return new o(t).set(new o(e)), t;
      };
    },
    64626: (e, t, n) => {
      e = n.nmd(e);
      var o = n(55639),
        r = t && !t.nodeType && t,
        a = r && e && !e.nodeType && e,
        i = a && a.exports === r ? o.Buffer : void 0,
        c = i ? i.allocUnsafe : void 0;
      e.exports = function (e, t) {
        if (t) return e.slice();
        var n = e.length,
          o = c ? c(n) : new e.constructor(n);
        return e.copy(o), o;
      };
    },
    57157: (e, t, n) => {
      var o = n(74318);
      e.exports = function (e, t) {
        var n = t ? o(e.buffer) : e.buffer;
        return new e.constructor(n, e.byteOffset, e.byteLength);
      };
    },
    93147: (e) => {
      var t = /\w*$/;
      e.exports = function (e) {
        var n = new e.constructor(e.source, t.exec(e));
        return (n.lastIndex = e.lastIndex), n;
      };
    },
    40419: (e, t, n) => {
      var o = n(62705),
        r = o ? o.prototype : void 0,
        a = r ? r.valueOf : void 0;
      e.exports = function (e) {
        return a ? Object(a.call(e)) : {};
      };
    },
    77133: (e, t, n) => {
      var o = n(74318);
      e.exports = function (e, t) {
        var n = t ? o(e.buffer) : e.buffer;
        return new e.constructor(n, e.byteOffset, e.length);
      };
    },
    278: (e) => {
      e.exports = function (e, t) {
        var n = -1,
          o = e.length;
        for (t || (t = Array(o)); ++n < o; ) t[n] = e[n];
        return t;
      };
    },
    98363: (e, t, n) => {
      var o = n(34865),
        r = n(89465);
      e.exports = function (e, t, n, a) {
        var i = !n;
        n || (n = {});
        for (var c = -1, s = t.length; ++c < s; ) {
          var l = t[c],
            d = a ? a(n[l], e[l], l, n, e) : void 0;
          void 0 === d && (d = e[l]), i ? r(n, l, d) : o(n, l, d);
        }
        return n;
      };
    },
    18805: (e, t, n) => {
      var o = n(98363),
        r = n(99551);
      e.exports = function (e, t) {
        return o(e, r(e), t);
      };
    },
    1911: (e, t, n) => {
      var o = n(98363),
        r = n(51442);
      e.exports = function (e, t) {
        return o(e, r(e), t);
      };
    },
    14429: (e, t, n) => {
      var o = n(55639)["__core-js_shared__"];
      e.exports = o;
    },
    60696: (e, t, n) => {
      var o = n(68630);
      e.exports = function (e) {
        return o(e) ? void 0 : e;
      };
    },
    38777: (e, t, n) => {
      var o = n(10852),
        r = (function () {
          try {
            var e = o(Object, "defineProperty");
            return e({}, "", {}), e;
          } catch (e) {}
        })();
      e.exports = r;
    },
    99021: (e, t, n) => {
      var o = n(85564),
        r = n(45357),
        a = n(30061);
      e.exports = function (e) {
        return a(r(e, void 0, o), e + "");
      };
    },
    31957: (e) => {
      var t =
        "object" == typeof global &&
        global &&
        global.Object === Object &&
        global;
      e.exports = t;
    },
    58234: (e, t, n) => {
      var o = n(68866),
        r = n(99551),
        a = n(3674);
      e.exports = function (e) {
        return o(e, a, r);
      };
    },
    46904: (e, t, n) => {
      var o = n(68866),
        r = n(51442),
        a = n(81704);
      e.exports = function (e) {
        return o(e, a, r);
      };
    },
    45050: (e, t, n) => {
      var o = n(37019);
      e.exports = function (e, t) {
        var n = e.__data__;
        return o(t) ? n["string" == typeof t ? "string" : "hash"] : n.map;
      };
    },
    10852: (e, t, n) => {
      var o = n(28458),
        r = n(47801);
      e.exports = function (e, t) {
        var n = r(e, t);
        return o(n) ? n : void 0;
      };
    },
    85924: (e, t, n) => {
      var o = n(5569)(Object.getPrototypeOf, Object);
      e.exports = o;
    },
    89607: (e, t, n) => {
      var o = n(62705),
        r = Object.prototype,
        a = r.hasOwnProperty,
        i = r.toString,
        c = o ? o.toStringTag : void 0;
      e.exports = function (e) {
        var t = a.call(e, c),
          n = e[c];
        try {
          e[c] = void 0;
          var o = !0;
        } catch (e) {}
        var r = i.call(e);
        return o && (t ? (e[c] = n) : delete e[c]), r;
      };
    },
    99551: (e, t, n) => {
      var o = n(34963),
        r = n(70479),
        a = Object.prototype.propertyIsEnumerable,
        i = Object.getOwnPropertySymbols,
        c = i
          ? function (e) {
              return null == e
                ? []
                : ((e = Object(e)),
                  o(i(e), function (t) {
                    return a.call(e, t);
                  }));
            }
          : r;
      e.exports = c;
    },
    51442: (e, t, n) => {
      var o = n(62488),
        r = n(85924),
        a = n(99551),
        i = n(70479),
        c = Object.getOwnPropertySymbols
          ? function (e) {
              for (var t = []; e; ) o(t, a(e)), (e = r(e));
              return t;
            }
          : i;
      e.exports = c;
    },
    64160: (e, t, n) => {
      var o = n(18552),
        r = n(57071),
        a = n(53818),
        i = n(58525),
        c = n(70577),
        s = n(44239),
        l = n(80346),
        d = "[object Map]",
        u = "[object Promise]",
        p = "[object Set]",
        m = "[object WeakMap]",
        v = "[object DataView]",
        f = l(o),
        g = l(r),
        y = l(a),
        h = l(i),
        b = l(c),
        w = s;
      ((o && w(new o(new ArrayBuffer(1))) != v) ||
        (r && w(new r()) != d) ||
        (a && w(a.resolve()) != u) ||
        (i && w(new i()) != p) ||
        (c && w(new c()) != m)) &&
        (w = function (e) {
          var t = s(e),
            n = "[object Object]" == t ? e.constructor : void 0,
            o = n ? l(n) : "";
          if (o)
            switch (o) {
              case f:
                return v;
              case g:
                return d;
              case y:
                return u;
              case h:
                return p;
              case b:
                return m;
            }
          return t;
        }),
        (e.exports = w);
    },
    47801: (e) => {
      e.exports = function (e, t) {
        return null == e ? void 0 : e[t];
      };
    },
    51789: (e, t, n) => {
      var o = n(94536);
      e.exports = function () {
        (this.__data__ = o ? o(null) : {}), (this.size = 0);
      };
    },
    80401: (e) => {
      e.exports = function (e) {
        var t = this.has(e) && delete this.__data__[e];
        return (this.size -= t ? 1 : 0), t;
      };
    },
    57667: (e, t, n) => {
      var o = n(94536),
        r = Object.prototype.hasOwnProperty;
      e.exports = function (e) {
        var t = this.__data__;
        if (o) {
          var n = t[e];
          return "__lodash_hash_undefined__" === n ? void 0 : n;
        }
        return r.call(t, e) ? t[e] : void 0;
      };
    },
    21327: (e, t, n) => {
      var o = n(94536),
        r = Object.prototype.hasOwnProperty;
      e.exports = function (e) {
        var t = this.__data__;
        return o ? void 0 !== t[e] : r.call(t, e);
      };
    },
    81866: (e, t, n) => {
      var o = n(94536);
      e.exports = function (e, t) {
        var n = this.__data__;
        return (
          (this.size += this.has(e) ? 0 : 1),
          (n[e] = o && void 0 === t ? "__lodash_hash_undefined__" : t),
          this
        );
      };
    },
    43824: (e) => {
      var t = Object.prototype.hasOwnProperty;
      e.exports = function (e) {
        var n = e.length,
          o = new e.constructor(n);
        return (
          n &&
            "string" == typeof e[0] &&
            t.call(e, "index") &&
            ((o.index = e.index), (o.input = e.input)),
          o
        );
      };
    },
    29148: (e, t, n) => {
      var o = n(74318),
        r = n(57157),
        a = n(93147),
        i = n(40419),
        c = n(77133);
      e.exports = function (e, t, n) {
        var s = e.constructor;
        switch (t) {
          case "[object ArrayBuffer]":
            return o(e);
          case "[object Boolean]":
          case "[object Date]":
            return new s(+e);
          case "[object DataView]":
            return r(e, n);
          case "[object Float32Array]":
          case "[object Float64Array]":
          case "[object Int8Array]":
          case "[object Int16Array]":
          case "[object Int32Array]":
          case "[object Uint8Array]":
          case "[object Uint8ClampedArray]":
          case "[object Uint16Array]":
          case "[object Uint32Array]":
            return c(e, n);
          case "[object Map]":
          case "[object Set]":
            return new s();
          case "[object Number]":
          case "[object String]":
            return new s(e);
          case "[object RegExp]":
            return a(e);
          case "[object Symbol]":
            return i(e);
        }
      };
    },
    38517: (e, t, n) => {
      var o = n(3118),
        r = n(85924),
        a = n(25726);
      e.exports = function (e) {
        return "function" != typeof e.constructor || a(e) ? {} : o(r(e));
      };
    },
    37285: (e, t, n) => {
      var o = n(62705),
        r = n(35694),
        a = n(1469),
        i = o ? o.isConcatSpreadable : void 0;
      e.exports = function (e) {
        return a(e) || r(e) || !!(i && e && e[i]);
      };
    },
    65776: (e) => {
      var t = /^(?:0|[1-9]\d*)$/;
      e.exports = function (e, n) {
        var o = typeof e;
        return (
          !!(n = null == n ? 9007199254740991 : n) &&
          ("number" == o || ("symbol" != o && t.test(e))) &&
          e > -1 &&
          e % 1 == 0 &&
          e < n
        );
      };
    },
    15403: (e, t, n) => {
      var o = n(1469),
        r = n(33448),
        a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        i = /^\w*$/;
      e.exports = function (e, t) {
        if (o(e)) return !1;
        var n = typeof e;
        return (
          !(
            "number" != n &&
            "symbol" != n &&
            "boolean" != n &&
            null != e &&
            !r(e)
          ) ||
          i.test(e) ||
          !a.test(e) ||
          (null != t && e in Object(t))
        );
      };
    },
    37019: (e) => {
      e.exports = function (e) {
        var t = typeof e;
        return "string" == t || "number" == t || "symbol" == t || "boolean" == t
          ? "__proto__" !== e
          : null === e;
      };
    },
    15346: (e, t, n) => {
      var o,
        r = n(14429),
        a = (o = /[^.]+$/.exec((r && r.keys && r.keys.IE_PROTO) || ""))
          ? "Symbol(src)_1." + o
          : "";
      e.exports = function (e) {
        return !!a && a in e;
      };
    },
    25726: (e) => {
      var t = Object.prototype;
      e.exports = function (e) {
        var n = e && e.constructor;
        return e === (("function" == typeof n && n.prototype) || t);
      };
    },
    27040: (e) => {
      e.exports = function () {
        (this.__data__ = []), (this.size = 0);
      };
    },
    14125: (e, t, n) => {
      var o = n(18470),
        r = Array.prototype.splice;
      e.exports = function (e) {
        var t = this.__data__,
          n = o(t, e);
        return (
          !(n < 0) &&
          (n == t.length - 1 ? t.pop() : r.call(t, n, 1), --this.size, !0)
        );
      };
    },
    82117: (e, t, n) => {
      var o = n(18470);
      e.exports = function (e) {
        var t = this.__data__,
          n = o(t, e);
        return n < 0 ? void 0 : t[n][1];
      };
    },
    67518: (e, t, n) => {
      var o = n(18470);
      e.exports = function (e) {
        return o(this.__data__, e) > -1;
      };
    },
    54705: (e, t, n) => {
      var o = n(18470);
      e.exports = function (e, t) {
        var n = this.__data__,
          r = o(n, e);
        return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this;
      };
    },
    24785: (e, t, n) => {
      var o = n(1989),
        r = n(38407),
        a = n(57071);
      e.exports = function () {
        (this.size = 0),
          (this.__data__ = {
            hash: new o(),
            map: new (a || r)(),
            string: new o(),
          });
      };
    },
    11285: (e, t, n) => {
      var o = n(45050);
      e.exports = function (e) {
        var t = o(this, e).delete(e);
        return (this.size -= t ? 1 : 0), t;
      };
    },
    96e3: (e, t, n) => {
      var o = n(45050);
      e.exports = function (e) {
        return o(this, e).get(e);
      };
    },
    49916: (e, t, n) => {
      var o = n(45050);
      e.exports = function (e) {
        return o(this, e).has(e);
      };
    },
    95265: (e, t, n) => {
      var o = n(45050);
      e.exports = function (e, t) {
        var n = o(this, e),
          r = n.size;
        return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
      };
    },
    24523: (e, t, n) => {
      var o = n(88306);
      e.exports = function (e) {
        var t = o(e, function (e) {
            return 500 === n.size && n.clear(), e;
          }),
          n = t.cache;
        return t;
      };
    },
    94536: (e, t, n) => {
      var o = n(10852)(Object, "create");
      e.exports = o;
    },
    86916: (e, t, n) => {
      var o = n(5569)(Object.keys, Object);
      e.exports = o;
    },
    33498: (e) => {
      e.exports = function (e) {
        var t = [];
        if (null != e) for (var n in Object(e)) t.push(n);
        return t;
      };
    },
    31167: (e, t, n) => {
      e = n.nmd(e);
      var o = n(31957),
        r = t && !t.nodeType && t,
        a = r && e && !e.nodeType && e,
        i = a && a.exports === r && o.process,
        c = (function () {
          try {
            var e = a && a.require && a.require("util").types;
            return e || (i && i.binding && i.binding("util"));
          } catch (e) {}
        })();
      e.exports = c;
    },
    2333: (e) => {
      var t = Object.prototype.toString;
      e.exports = function (e) {
        return t.call(e);
      };
    },
    5569: (e) => {
      e.exports = function (e, t) {
        return function (n) {
          return e(t(n));
        };
      };
    },
    45357: (e, t, n) => {
      var o = n(96874),
        r = Math.max;
      e.exports = function (e, t, n) {
        return (
          (t = r(void 0 === t ? e.length - 1 : t, 0)),
          function () {
            for (
              var a = arguments, i = -1, c = r(a.length - t, 0), s = Array(c);
              ++i < c;

            )
              s[i] = a[t + i];
            i = -1;
            for (var l = Array(t + 1); ++i < t; ) l[i] = a[i];
            return (l[t] = n(s)), o(e, this, l);
          }
        );
      };
    },
    40292: (e, t, n) => {
      var o = n(97786),
        r = n(14259);
      e.exports = function (e, t) {
        return t.length < 2 ? e : o(e, r(t, 0, -1));
      };
    },
    55639: (e, t, n) => {
      var o = n(31957),
        r = "object" == typeof self && self && self.Object === Object && self,
        a = o || r || Function("return this")();
      e.exports = a;
    },
    30061: (e, t, n) => {
      var o = n(56560),
        r = n(21275)(o);
      e.exports = r;
    },
    21275: (e) => {
      var t = Date.now;
      e.exports = function (e) {
        var n = 0,
          o = 0;
        return function () {
          var r = t(),
            a = 16 - (r - o);
          if (((o = r), a > 0)) {
            if (++n >= 800) return arguments[0];
          } else n = 0;
          return e.apply(void 0, arguments);
        };
      };
    },
    37465: (e, t, n) => {
      var o = n(38407);
      e.exports = function () {
        (this.__data__ = new o()), (this.size = 0);
      };
    },
    63779: (e) => {
      e.exports = function (e) {
        var t = this.__data__,
          n = t.delete(e);
        return (this.size = t.size), n;
      };
    },
    67599: (e) => {
      e.exports = function (e) {
        return this.__data__.get(e);
      };
    },
    44758: (e) => {
      e.exports = function (e) {
        return this.__data__.has(e);
      };
    },
    34309: (e, t, n) => {
      var o = n(38407),
        r = n(57071),
        a = n(83369);
      e.exports = function (e, t) {
        var n = this.__data__;
        if (n instanceof o) {
          var i = n.__data__;
          if (!r || i.length < 199)
            return i.push([e, t]), (this.size = ++n.size), this;
          n = this.__data__ = new a(i);
        }
        return n.set(e, t), (this.size = n.size), this;
      };
    },
    55514: (e, t, n) => {
      var o = n(24523),
        r =
          /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        a = /\\(\\)?/g,
        i = o(function (e) {
          var t = [];
          return (
            46 === e.charCodeAt(0) && t.push(""),
            e.replace(r, function (e, n, o, r) {
              t.push(o ? r.replace(a, "$1") : n || e);
            }),
            t
          );
        });
      e.exports = i;
    },
    40327: (e, t, n) => {
      var o = n(33448);
      e.exports = function (e) {
        if ("string" == typeof e || o(e)) return e;
        var t = e + "";
        return "0" == t && 1 / e == -Infinity ? "-0" : t;
      };
    },
    80346: (e) => {
      var t = Function.prototype.toString;
      e.exports = function (e) {
        if (null != e) {
          try {
            return t.call(e);
          } catch (e) {}
          try {
            return e + "";
          } catch (e) {}
        }
        return "";
      };
    },
    67990: (e) => {
      var t = /\s/;
      e.exports = function (e) {
        for (var n = e.length; n-- && t.test(e.charAt(n)); );
        return n;
      };
    },
    75703: (e) => {
      e.exports = function (e) {
        return function () {
          return e;
        };
      };
    },
    23279: (e, t, n) => {
      var o = n(13218),
        r = n(7771),
        a = n(14841),
        i = Math.max,
        c = Math.min;
      e.exports = function (e, t, n) {
        var s,
          l,
          d,
          u,
          p,
          m,
          v = 0,
          f = !1,
          g = !1,
          y = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");
        function h(t) {
          var n = s,
            o = l;
          return (s = l = void 0), (v = t), (u = e.apply(o, n));
        }
        function b(e) {
          var n = e - m;
          return void 0 === m || n >= t || n < 0 || (g && e - v >= d);
        }
        function w() {
          var e = r();
          if (b(e)) return S(e);
          p = setTimeout(
            w,
            (function (e) {
              var n = t - (e - m);
              return g ? c(n, d - (e - v)) : n;
            })(e)
          );
        }
        function S(e) {
          return (p = void 0), y && s ? h(e) : ((s = l = void 0), u);
        }
        function Z() {
          var e = r(),
            n = b(e);
          if (((s = arguments), (l = this), (m = e), n)) {
            if (void 0 === p)
              return (function (e) {
                return (v = e), (p = setTimeout(w, t)), f ? h(e) : u;
              })(m);
            if (g) return clearTimeout(p), (p = setTimeout(w, t)), h(m);
          }
          return void 0 === p && (p = setTimeout(w, t)), u;
        }
        return (
          (t = a(t) || 0),
          o(n) &&
            ((f = !!n.leading),
            (d = (g = "maxWait" in n) ? i(a(n.maxWait) || 0, t) : d),
            (y = "trailing" in n ? !!n.trailing : y)),
          (Z.cancel = function () {
            void 0 !== p && clearTimeout(p), (v = 0), (s = m = l = p = void 0);
          }),
          (Z.flush = function () {
            return void 0 === p ? u : S(r());
          }),
          Z
        );
      };
    },
    77813: (e) => {
      e.exports = function (e, t) {
        return e === t || (e != e && t != t);
      };
    },
    85564: (e, t, n) => {
      var o = n(21078);
      e.exports = function (e) {
        return (null == e ? 0 : e.length) ? o(e, 1) : [];
      };
    },
    6557: (e) => {
      e.exports = function (e) {
        return e;
      };
    },
    35694: (e, t, n) => {
      var o = n(9454),
        r = n(37005),
        a = Object.prototype,
        i = a.hasOwnProperty,
        c = a.propertyIsEnumerable,
        s = o(
          (function () {
            return arguments;
          })()
        )
          ? o
          : function (e) {
              return r(e) && i.call(e, "callee") && !c.call(e, "callee");
            };
      e.exports = s;
    },
    1469: (e) => {
      var t = Array.isArray;
      e.exports = t;
    },
    98612: (e, t, n) => {
      var o = n(23560),
        r = n(41780);
      e.exports = function (e) {
        return null != e && r(e.length) && !o(e);
      };
    },
    44144: (e, t, n) => {
      e = n.nmd(e);
      var o = n(55639),
        r = n(95062),
        a = t && !t.nodeType && t,
        i = a && e && !e.nodeType && e,
        c = i && i.exports === a ? o.Buffer : void 0,
        s = (c ? c.isBuffer : void 0) || r;
      e.exports = s;
    },
    23560: (e, t, n) => {
      var o = n(44239),
        r = n(13218);
      e.exports = function (e) {
        if (!r(e)) return !1;
        var t = o(e);
        return (
          "[object Function]" == t ||
          "[object GeneratorFunction]" == t ||
          "[object AsyncFunction]" == t ||
          "[object Proxy]" == t
        );
      };
    },
    41780: (e) => {
      e.exports = function (e) {
        return (
          "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
        );
      };
    },
    56688: (e, t, n) => {
      var o = n(25588),
        r = n(7518),
        a = n(31167),
        i = a && a.isMap,
        c = i ? r(i) : o;
      e.exports = c;
    },
    13218: (e) => {
      e.exports = function (e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t);
      };
    },
    37005: (e) => {
      e.exports = function (e) {
        return null != e && "object" == typeof e;
      };
    },
    68630: (e, t, n) => {
      var o = n(44239),
        r = n(85924),
        a = n(37005),
        i = Function.prototype,
        c = Object.prototype,
        s = i.toString,
        l = c.hasOwnProperty,
        d = s.call(Object);
      e.exports = function (e) {
        if (!a(e) || "[object Object]" != o(e)) return !1;
        var t = r(e);
        if (null === t) return !0;
        var n = l.call(t, "constructor") && t.constructor;
        return "function" == typeof n && n instanceof n && s.call(n) == d;
      };
    },
    72928: (e, t, n) => {
      var o = n(29221),
        r = n(7518),
        a = n(31167),
        i = a && a.isSet,
        c = i ? r(i) : o;
      e.exports = c;
    },
    33448: (e, t, n) => {
      var o = n(44239),
        r = n(37005);
      e.exports = function (e) {
        return "symbol" == typeof e || (r(e) && "[object Symbol]" == o(e));
      };
    },
    36719: (e, t, n) => {
      var o = n(38749),
        r = n(7518),
        a = n(31167),
        i = a && a.isTypedArray,
        c = i ? r(i) : o;
      e.exports = c;
    },
    3674: (e, t, n) => {
      var o = n(14636),
        r = n(280),
        a = n(98612);
      e.exports = function (e) {
        return a(e) ? o(e) : r(e);
      };
    },
    81704: (e, t, n) => {
      var o = n(14636),
        r = n(10313),
        a = n(98612);
      e.exports = function (e) {
        return a(e) ? o(e, !0) : r(e);
      };
    },
    10928: (e) => {
      e.exports = function (e) {
        var t = null == e ? 0 : e.length;
        return t ? e[t - 1] : void 0;
      };
    },
    88306: (e, t, n) => {
      var o = n(83369);
      function r(e, t) {
        if ("function" != typeof e || (null != t && "function" != typeof t))
          throw new TypeError("Expected a function");
        var n = function () {
          var o = arguments,
            r = t ? t.apply(this, o) : o[0],
            a = n.cache;
          if (a.has(r)) return a.get(r);
          var i = e.apply(this, o);
          return (n.cache = a.set(r, i) || a), i;
        };
        return (n.cache = new (r.Cache || o)()), n;
      }
      (r.Cache = o), (e.exports = r);
    },
    7771: (e, t, n) => {
      var o = n(55639);
      e.exports = function () {
        return o.Date.now();
      };
    },
    57557: (e, t, n) => {
      var o = n(29932),
        r = n(85990),
        a = n(57406),
        i = n(71811),
        c = n(98363),
        s = n(60696),
        l = n(99021),
        d = n(46904),
        u = l(function (e, t) {
          var n = {};
          if (null == e) return n;
          var l = !1;
          (t = o(t, function (t) {
            return (t = i(t, e)), l || (l = t.length > 1), t;
          })),
            c(e, d(e), n),
            l && (n = r(n, 7, s));
          for (var u = t.length; u--; ) a(n, t[u]);
          return n;
        });
      e.exports = u;
    },
    70479: (e) => {
      e.exports = function () {
        return [];
      };
    },
    95062: (e) => {
      e.exports = function () {
        return !1;
      };
    },
    14841: (e, t, n) => {
      var o = n(27561),
        r = n(13218),
        a = n(33448),
        i = /^[-+]0x[0-9a-f]+$/i,
        c = /^0b[01]+$/i,
        s = /^0o[0-7]+$/i,
        l = parseInt;
      e.exports = function (e) {
        if ("number" == typeof e) return e;
        if (a(e)) return NaN;
        if (r(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = r(t) ? t + "" : t;
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = o(e);
        var n = c.test(e);
        return n || s.test(e) ? l(e.slice(2), n ? 2 : 8) : i.test(e) ? NaN : +e;
      };
    },
    79833: (e, t, n) => {
      var o = n(80531);
      e.exports = function (e) {
        return null == e ? "" : o(e);
      };
    },
    16217: (e, t, n) => {
      "use strict";
      n.r(t);
      var o = n(59042),
        r = n(77412),
        a = n(23279),
        i = n.n(a),
        c = n(57557),
        s = n.n(c),
        l = n(63477),
        d = n.n(l),
        u = n(63111),
        p = n(58659),
        m = n(54856),
        v = n(90435),
        f = n(85786),
        g = n(66040),
        y = n(3004),
        h = n(87141);
      const b = [
          { commandId: "editor.moveSelection", accelerator: "Arrow" },
          { commandId: "switchBetweenXMindWindows", accelerator: "Command+`" },
          { commandId: "closeAllWindows", accelerator: "Command+Q" },
          { commandId: "editor.editTopicText", accelerator: "Space" },
          {
            commandId: "editor.enterLineBreak",
            accelerator: "CmdOrCtrl+Enter",
          },
          {
            commandId: "editor.moveToBeginningOfText",
            accelerator: "CmdOrCtrl+Left",
          },
          {
            commandId: "editor.moveToEndOfText",
            accelerator: "CmdOrCtrl+Right",
          },
          {
            commandId: "editor.selectMultipleTopics",
            accelerator: "Shift+Arrow",
          },
          { commandId: "editor.moveTopicUp", accelerator: "Alt+Up" },
          { commandId: "editor.moveTopicDown", accelerator: "Alt+Down" },
          {
            commandId: "editor.markPriorityByNumber",
            accelerator: "CmdOrCtrl+1~7",
          },
          {
            commandId: "editor.toggleBranchByNumber",
            accelerator: "Alt+CmdOrCtrl+1~9",
          },
        ].filter(Boolean),
        w = d().parse(window.location.search.slice(1)),
        S = {
          components: { CommonNonePanel: y.Z },
          data: () => ({
            isMac: "darwin" === (0, f.Xf)(),
            activeTab: "",
            inputedShortcutName: "",
            selectedGroup: "",
            searchedShortcutGroups: {},
            EDITOR_MODE_SNOWBRUSH: u.hO,
            EDITOR_MODE_OUTLINER: u.Pq,
            PITCH_MODE_KEY: "pitch",
          }),
          computed: {
            ...(0, r.rn)(h.f7, { groups: (e) => e.groups }),
            appearance: () => (0, h.S)().appearance,
            allGroupOption() {
              return this.$T("All");
            },
            keyData() {
              let e = { [this.allGroupOption]: {} };
              return this.activeTab === this.PITCH_MODE_KEY
                ? (g.qr.forEach((t) => {
                    (e[t.category] = e[t.category] || {}),
                      (e[t.category][t.commandId] = {
                        ...t,
                        label: this.$T("$$", t.label),
                        accelerator: t.accelerator.filter((e) => "+" !== e),
                      });
                  }),
                  e)
                : (g.ed
                    .filter(
                      (e) =>
                        !!e &&
                        (this.activeTab === u.Pq
                          ? e.groupName === u.Pq || e.isSupportedInOutliner
                          : !e.groupName)
                    )
                    .map((t) => {
                      e[t.category] || (e[t.category] = {});
                      let n = (0, h.f7)().keybindingByCommandIdAndGroup(
                        t.commandId,
                        t.groupName
                      );
                      const o = b.find(({ commandId: e }) => e === t.commandId);
                      o && (n = (0, p.xr)((0, p.sn)(o.accelerator))),
                        (e[t.category][t.commandId] = {
                          ...t,
                          label: t.getLabel
                            ? t.getLabel(this.$T)
                            : this.$T("$$", t.label),
                          accelerator: n ? n.split("+") : [],
                        });
                    }),
                  e);
            },
            activeTabIndex() {
              return [u.hO, u.Pq].indexOf(this.activeTab);
            },
          },
          mounted() {
            (this.activeTab = w.editorMode || u.hO),
              (this.selectedGroup = this.allGroupOption),
              (this.searchedShortcutGroups = {
                ...s()(this.keyData, this.allGroupOption),
              });
          },
          watch: {
            inputedShortcutName: i()(function () {
              this.searchShortcutsByGroup();
            }, 200),
            activeTab() {
              this.searchShortcutsByGroup();
            },
            groups: {
              handler() {
                this.searchShortcutsByGroup();
              },
              deep: !0,
            },
          },
          methods: {
            close() {
              "function" == typeof window.close && window.close();
            },
            openCustomizeShortcut() {
              this.$safeRun(async () => {
                await v.ZP.fetch(m.Fx, {
                  name: "preferences",
                  query: { tab: "shortcuts" },
                });
              });
            },
            displaySymbol(e) {
              let t = e;
              return (
                this.isMac && (t = u.Vl[e] || e),
                "string" == typeof t && (t = t.replace("=", "+")),
                t
              );
            },
            onActiveTabChange(e) {
              (this.activeTab = e),
                this.onSelectedGroupChange(this.allGroupOption),
                this.$refs.shortcutContainerRef.scrollTo({ top: 0, left: 0 });
            },
            onSelectedGroupChange(e) {
              (this.selectedGroup = e), this.searchShortcutsByGroup();
            },
            searchShortcutsByGroup() {
              const e =
                  this.selectedGroup === this.allGroupOption
                    ? this.keyData
                    : {
                        [this.selectedGroup]: this.keyData[this.selectedGroup],
                      },
                t = this.inputedShortcutName.replace(
                  /[-\\{}*+?|^$.[\]()#]/g,
                  "\\$&"
                ),
                n = new RegExp(t, "i"),
                o = {};
              for (const t in e) {
                const r = e[t],
                  a = {};
                for (const e in r) n.test(r[e].label) && (a[e] = r[e]);
                Object.keys(a).length && (o[t] = a);
              }
              this.searchedShortcutGroups = { ...o };
            },
          },
        };
      n(9065);
      const Z = (0, n(51900).Z)(
        S,
        function () {
          var e = this,
            t = e._self._c;
          return t(
            "div",
            {
              staticClass: "vk-window-dialog vk-window-secondary",
              attrs: { id: "app" },
            },
            [
              t(
                "div",
                {
                  staticClass:
                    "vk-window-title-bar vk-window-title-bar-floating",
                },
                [t("window-control-button-group")],
                1
              ),
              e._v(" "),
              t(
                "div",
                {
                  staticClass:
                    "vk-window-body uk-flex uk-flex-column uk-position-relative",
                  staticStyle: {
                    padding: "var(--spacing-padding-xxl)",
                    "margin-top": "var(--spacing-margin-m)",
                  },
                },
                [
                  t(
                    "div",
                    {
                      staticClass: "typography-headline-small",
                      staticStyle: {
                        "margin-bottom": "var(--spacing-margin-xs)",
                      },
                    },
                    [e._v("\n      " + e._s(e.$T("Key Assist")) + "\n    ")]
                  ),
                  e._v(" "),
                  t(
                    "div",
                    {
                      staticClass: "uk-flex uk-flex-column uk-height-1-1",
                      staticStyle: { gap: "16px" },
                    },
                    [
                      t(
                        "ul",
                        {
                          staticClass:
                            "uk-tab vk-tab-indicator uk-tab-large uk-flex-left uk-margin-remove",
                        },
                        [
                          t(
                            "li",
                            {
                              class: {
                                "uk-active":
                                  e.activeTab === e.EDITOR_MODE_SNOWBRUSH,
                              },
                            },
                            [
                              t(
                                "a",
                                {
                                  attrs: { draggable: "false", href: "#" },
                                  on: {
                                    click: function (t) {
                                      return e.onActiveTabChange(
                                        e.EDITOR_MODE_SNOWBRUSH
                                      );
                                    },
                                  },
                                },
                                [
                                  e._v(
                                    "\n            " +
                                      e._s(e.$T("Mind Map")) +
                                      "\n          "
                                  ),
                                ]
                              ),
                            ]
                          ),
                          e._v(" "),
                          t(
                            "li",
                            {
                              class: {
                                "uk-active":
                                  e.activeTab === e.EDITOR_MODE_OUTLINER,
                              },
                            },
                            [
                              t(
                                "a",
                                {
                                  attrs: { draggable: "false", href: "#" },
                                  on: {
                                    click: function (t) {
                                      return e.onActiveTabChange(
                                        e.EDITOR_MODE_OUTLINER
                                      );
                                    },
                                  },
                                },
                                [
                                  e._v(
                                    "\n            " +
                                      e._s(e.$T("Outliner")) +
                                      "\n          "
                                  ),
                                ]
                              ),
                            ]
                          ),
                          e._v(" "),
                          t(
                            "li",
                            {
                              class: {
                                "uk-active": e.activeTab === e.PITCH_MODE_KEY,
                              },
                            },
                            [
                              t(
                                "a",
                                {
                                  attrs: { draggable: "false", href: "#" },
                                  on: {
                                    click: function (t) {
                                      return e.onActiveTabChange(
                                        e.PITCH_MODE_KEY
                                      );
                                    },
                                  },
                                },
                                [
                                  e._v(
                                    "\n            " +
                                      e._s(e.$T("Pitch")) +
                                      "\n          "
                                  ),
                                ]
                              ),
                            ]
                          ),
                        ]
                      ),
                      e._v(" "),
                      t(
                        "button",
                        {
                          staticClass: "vk-button-tile customize-icon",
                          staticStyle: { display: "flex" },
                          on: { click: e.openCustomizeShortcut },
                        },
                        [t("span", { attrs: { "uk-icon": "setting" } })]
                      ),
                      e._v(" "),
                      t("div", { staticClass: "uk-flex uk-flex-row" }, [
                        t("div", [
                          t(
                            "button",
                            {
                              staticClass: "vk-select-base",
                              staticStyle: { width: "200px" },
                            },
                            [
                              t("span", [
                                e._v(e._s(e.$T("$$", e.selectedGroup))),
                              ]),
                              e._v(" "),
                              t("span", {
                                staticStyle: { "margin-left": "8px" },
                                attrs: {
                                  "uk-icon":
                                    "icon: chevron-downward; ratio: 0.6",
                                },
                              }),
                            ]
                          ),
                          e._v(" "),
                          t(
                            "div",
                            {
                              ref: "popover",
                              staticClass: "uk-popover-contextual",
                              staticStyle: { width: "220px" },
                              attrs: {
                                "uk-contextual-popover": "",
                                "data-sel-close": "[uk-menu] > li > button",
                              },
                            },
                            [
                              t(
                                "ul",
                                {
                                  staticClass: "uk-height-1-1",
                                  attrs: { "uk-menu": "" },
                                },
                                e._l(e.keyData, function (n, o) {
                                  return t(
                                    "li",
                                    {
                                      key: o,
                                      staticStyle: { "white-space": "nowrap" },
                                    },
                                    [
                                      t(
                                        "button",
                                        {
                                          class: {
                                            "uk-active": e.selectedGroup === o,
                                          },
                                          attrs: {
                                            autofocus: e.selectedGroup === o,
                                          },
                                          on: {
                                            click: function (t) {
                                              return e.onSelectedGroupChange(o);
                                            },
                                          },
                                        },
                                        [
                                          t("span", {
                                            staticStyle: {
                                              "margin-right": "8px",
                                            },
                                            style: {
                                              visibility:
                                                e.selectedGroup === o
                                                  ? "visible"
                                                  : "hidden",
                                            },
                                            attrs: { "uk-icon": "icon: check" },
                                          }),
                                          e._v(" "),
                                          t("span", [
                                            e._v(e._s(e.$T("$$", o))),
                                          ]),
                                        ]
                                      ),
                                    ]
                                  );
                                }),
                                0
                              ),
                            ]
                          ),
                        ]),
                        e._v(" "),
                        t(
                          "div",
                          {
                            staticClass:
                              "uk-position-relative uk-flex-1 uk-margin-small-left",
                          },
                          [
                            t("vk-input", {
                              attrs: {
                                prefix: "search",
                                cls: "vk-input-default vk-size-small",
                                autofocus: !0,
                                placeholder: e.$T("Search shortcuts"),
                                value: e.inputedShortcutName,
                              },
                              on: {
                                input: function (t) {
                                  e.inputedShortcutName = t;
                                },
                              },
                            }),
                          ],
                          1
                        ),
                      ]),
                      e._v(" "),
                      t(
                        "ul",
                        {
                          ref: "shortcutContainerRef",
                          staticClass:
                            "uk-switcher uk-height-expand uk-flex uk-flex-column",
                        },
                        [
                          t(
                            "li",
                            {
                              staticClass:
                                "uk-panel uk-height-expand uk-active uk-padding-remove-top uk-padding-remove-bottom",
                              staticStyle: { "margin-bottom": "36px" },
                            },
                            [
                              t("div", { staticClass: "uk-height-1-1" }, [
                                t(
                                  "div",
                                  {
                                    staticClass: "uk-fieldset uk-overflow-auto",
                                    staticStyle: { height: "100%" },
                                  },
                                  [
                                    e._l(
                                      e.searchedShortcutGroups,
                                      function (n, o, r) {
                                        return t("div", { key: o }, [
                                          t(
                                            "div",
                                            { staticClass: "shortcut-group" },
                                            [
                                              t("h1", [
                                                e._v(
                                                  "\n                    " +
                                                    e._s(e.$T("$$", o)) +
                                                    "\n                  "
                                                ),
                                              ]),
                                              e._v(" "),
                                              e._l(n, function (n) {
                                                return t(
                                                  "div",
                                                  {
                                                    key: n.commandId,
                                                    staticClass:
                                                      "uk-flex uk-flex-between uk-flex-middle uk-margin-small",
                                                    class: {
                                                      "empty-block":
                                                        !n.accelerator.length,
                                                    },
                                                  },
                                                  [
                                                    t(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "uk-text-left",
                                                      },
                                                      [
                                                        e._v(
                                                          "\n                      " +
                                                            e._s(n.label) +
                                                            "\n                    "
                                                        ),
                                                      ]
                                                    ),
                                                    e._v(" "),
                                                    n.accelerator.length
                                                      ? t(
                                                          "div",
                                                          {
                                                            staticClass:
                                                              "uk-flex uk-flex-middle",
                                                          },
                                                          e._l(
                                                            n.accelerator,
                                                            function (o, r) {
                                                              return t(
                                                                "div",
                                                                {
                                                                  key: r,
                                                                  staticClass:
                                                                    "uk-flex uk-flex-middle",
                                                                },
                                                                [
                                                                  e.isMac ||
                                                                  !r ||
                                                                  n.accelerator
                                                                    .slice(
                                                                      r - 1,
                                                                      r + 1
                                                                    )
                                                                    .includes(
                                                                      "||"
                                                                    )
                                                                    ? e._e()
                                                                    : t(
                                                                        "div",
                                                                        {
                                                                          staticClass:
                                                                            "uk-flex uk-margin-xsmall-left uk-margin-xsmall-right",
                                                                        },
                                                                        [
                                                                          e._v(
                                                                            "\n                          +\n                        "
                                                                          ),
                                                                        ]
                                                                      ),
                                                                  e._v(" "),
                                                                  [
                                                                    "||" === o
                                                                      ? t(
                                                                          "div",
                                                                          {
                                                                            staticClass:
                                                                              "uk-text-muted",
                                                                            style:
                                                                              {
                                                                                width: 0,
                                                                                marginLeft:
                                                                                  "-5px",
                                                                              },
                                                                          },
                                                                          [
                                                                            e._v(
                                                                              "\n                            ,\n                          "
                                                                            ),
                                                                          ]
                                                                        )
                                                                      : t(
                                                                          "div",
                                                                          {
                                                                            staticClass:
                                                                              "uk-flex uk-border-rounded uk-flex uk-padding-xsmall symbol-block",
                                                                            class:
                                                                              {
                                                                                "uk-margin-small-right":
                                                                                  r <
                                                                                  n
                                                                                    .accelerator
                                                                                    .length -
                                                                                    1,
                                                                              },
                                                                            style:
                                                                              {
                                                                                "background-color":
                                                                                  "dark" ===
                                                                                  e.appearance
                                                                                    ? "rgba(255, 255, 255, 0.1)"
                                                                                    : "rgba(0, 0, 0, 0.05)",
                                                                              },
                                                                          },
                                                                          [
                                                                            e._v(
                                                                              "\n                            " +
                                                                                e._s(
                                                                                  e.displaySymbol(
                                                                                    o
                                                                                  )
                                                                                ) +
                                                                                "\n                          "
                                                                            ),
                                                                          ]
                                                                        ),
                                                                  ],
                                                                ],
                                                                2
                                                              );
                                                            }
                                                          ),
                                                          0
                                                        )
                                                      : e._e(),
                                                  ]
                                                );
                                              }),
                                            ],
                                            2
                                          ),
                                          e._v(" "),
                                          r + 1 <
                                          Object.keys(e.searchedShortcutGroups)
                                            .length
                                            ? t("hr", {
                                                staticClass:
                                                  "uk-margin-remove-top uk-margin-remove-bottom",
                                              })
                                            : e._e(),
                                        ]);
                                      }
                                    ),
                                    e._v(" "),
                                    Object.keys(e.searchedShortcutGroups).length
                                      ? e._e()
                                      : t(
                                          "div",
                                          {
                                            staticClass:
                                              "uk-flex uk-height-1-1",
                                          },
                                          [
                                            t("common-none-panel", {
                                              staticStyle: { height: "unset" },
                                              attrs: { type: "NO_RESULT" },
                                            }),
                                          ],
                                          1
                                        ),
                                  ],
                                  2
                                ),
                              ]),
                            ]
                          ),
                        ]
                      ),
                    ]
                  ),
                ]
              ),
            ]
          );
        },
        [],
        !1,
        null,
        "3d1507a7",
        null
      ).exports;
      (0, o.Z)(Z, { name: "dialog-keyassist" });
    },
    59042: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => ge });
      var o = n(47311),
        r = n(23352),
        a = n(90435);
      const i =
          window.location.pathname.match(/\/([a-zA-Z0-9-]+)\.html$/)[1] ||
          "default",
        c = (0, r.ZP)(`error:${i}`),
        s = new o.q(c, { ipc: a.ZP });
      window.addEventListener("error", function (e) {
        const t = e.error;
        t && s.handle(t);
      }),
        window.addEventListener("unhandledrejection", function (e) {
          const t = e.reason;
          t && s.handle(t);
        });
      const l = s;
      var d = n(2954),
        u = n(63477),
        p = n.n(u),
        m = n(72298),
        v = n(67657),
        f = n(13780),
        g = n.n(f),
        y = n(30266),
        h = n(86396),
        b = n(31945),
        w = n(54856),
        S = n(73884),
        Z = n(28914),
        x = n(56222),
        I = n(79409),
        W = n(65114),
        T = n(77412);
      const O = {
        install(e) {
          const t = "vana-ref";
          e.directive(t, {
            bind: function (e, t, n) {
              t.value(n.componentInstance || e, n.key);
            },
            update: function (e, n, o, r) {
              if (r.data && r.data.directives) {
                var a = r.data.directives.find(function (e) {
                  return e.name === t;
                });
                if (a && a.value !== n.value)
                  return (
                    a && a.value(null, r.key),
                    void n.value(o.componentInstance || e, o.key)
                  );
              }
              (o.componentInstance === r.componentInstance &&
                o.elm === r.elm) ||
                n.value(o.componentInstance || e, o.key);
            },
            unbind: function (e, t, n) {
              t.value(null, n.key);
            },
          });
        },
      };
      var k = n(87141);
      const A = {
        install(e) {
          e.prototype.$T = function (e, ...t) {
            return (0, k.JE)().T(e, ...t);
          };
        },
      };
      var E = n(96829);
      const _ = (0, r.ZP)("safe-runner");
      const N = class {
        constructor(e) {
          this.errorHandler = e;
        }
        _handleError(e) {
          "function" == typeof this.errorHandler
            ? this.errorHandler(e)
            : _.error((0, E.SC)(e));
        }
        install(e) {
          const t = this;
          e.prototype.$safeRun = function (e) {
            try {
              let n = e();
              return n && n.then && n.catch
                ? n.then((e) => e).catch((e) => t._handleError(e))
                : n;
            } catch (e) {
              t._handleError(e);
            }
          };
        }
      };
      var j = n(69931);
      const L = {
        install(e) {
          (e.prototype.$toResourceURL = (...e) =>
            (0, j.ju)(...e)
              .replace("(", "%28")
              .replace(")", "%29")),
            (e.prototype.$loadResource = j.zD);
        },
      };
      var P = n(53775),
        C = n(59474);
      var M = n(30247),
        B = n(2563),
        F = n(65428);
      const R = (0, r.ZP)("font");
      var D = n(22037),
        $ = n.n(D),
        G = n(38629);
      const z = (0, r.ZP)("performance");
      function U(e) {
        e
          ? document.body.style.setProperty("--uk-system-accent-color", e)
          : document.body.style.removeProperty("--uk-system-accent-color");
      }
      var q = n(63111),
        V = n(18621),
        J = n(69297),
        X = n(20993);
      const H = {
          start: () => {
            const e = (0, C.i)();
            e.startJob();
            const t = (0, d.YP)(
              () => e.pendingJobs,
              (n) => {
                n > 0 || (t(), e.markReady());
              }
            );
            setTimeout(() => e.endJob(), 0);
          },
        },
        Y = (() => {
          const e = [],
            t = new Map();
          return {
            start: () => {
              const e = (0, C.i)();
              e.startJob(),
                a.ZP.fetch(w.de).then((t) => {
                  Object.keys(t).forEach((e) => {
                    var n;
                    const o = (0, k.F_)(e);
                    null === (n = null == o ? void 0 : o()) ||
                      void 0 === n ||
                      n.$patch(t[e]);
                  }),
                    S.Z.on(W.Md, (e) => {
                      e.forEach(({ id: e, state: t }) => {
                        var n;
                        const o = (0, k.F_)(e);
                        null === (n = null == o ? void 0 : o()) ||
                          void 0 === n ||
                          n.$patch((0, d.qj)(t));
                      });
                    }),
                    e.endJob();
                });
            },
            plugin: (n) => {
              (0, k.W$)(n.store.$id) &&
                n.store.$subscribe((o, r) => {
                  if (n.store.$id !== o.storeId) return;
                  const i = t.get(o.storeId);
                  t.set(o.storeId, !0),
                    (null === window || void 0 === window
                      ? void 0
                      : window.isEditorFrame) ||
                      (i &&
                        o.type !== T.x1.patchObject &&
                        (0, k.W$)(o.storeId) &&
                        (e.push({
                          id: o.storeId,
                          state: JSON.parse(JSON.stringify(r)),
                        }),
                        Promise.resolve().then(() => {
                          a.ZP.fetch(w.w6, { states: e }), (e.length = 0);
                        })));
                });
            },
          };
        })(),
        K = {
          start: () => {
            (0, F.r)();
            const e = (0, j.ju)("/static/snowbird/resource/"),
              t = (function () {
                const e = {};
                return (
                  M.Fy((t, n) => {
                    e[t] = n.map((e) => ({ ...e, family: t }));
                  }),
                  e
                );
              })(),
              n = Object.values(t)
                .flat()
                .map((t) =>
                  (function (
                    {
                      family: e,
                      src: t,
                      italic: n,
                      weight: o,
                      "unicode-range": r,
                    },
                    a
                  ) {
                    const i = new URL(t, a).href;
                    let c = { family: e, source: `url("${i}")`, url: i };
                    return (
                      void 0 !== n &&
                        (c = { ...c, style: n ? "italic" : "normal" }),
                      void 0 !== o && (c = { ...c, weight: o.toString() }),
                      void 0 !== r && (c = { ...c, unicodeRange: r }),
                      c
                    );
                  })(t, e)
                );
            !(function (e) {
              Promise.all(
                e.map(({ family: e, source: t, ...n }) => {
                  const o = new FontFace(e, t, n);
                  return o
                    .load()
                    .then(() => {
                      document.fonts.add(o);
                    })
                    .catch(() => {
                      R.error("Failed to load css font from", t);
                    });
                })
              );
            })(n),
              (function () {
                const e = document.createElement("style"),
                  t = M.Hn();
                (e.innerHTML = t),
                  document.head.appendChild(e),
                  document.body.style.setProperty("--info-button-font", M.o6);
              })(),
              (0, B.O)().updateBuiltinFontFamilies(
                Array.from(new Set(Object.keys(t)))
              );
          },
        },
        Q = {
          start: () => {
            const e = (0, C.i)(),
              { _apr: t, _acc: n } = p().parse(location.search.slice(1));
            t &&
              (e.startJob(),
              z.debug("About to load CSS using _apr query parameter:", t),
              (0, G.Z)(t, () => {
                z.debug("Loaded CSS using _apr query parameter:", t),
                  setTimeout(() => {
                    e.endJob();
                  }, 10);
              })),
              n && U(n),
              "darwin" === $().platform() &&
                parseFloat($().release()) >= 20 &&
                document.body.classList.add("uk-darwin-bigsur"),
              (0, d.YP)(
                () => (0, k.S)().language,
                (e, t) => {
                  t && document.body.classList.remove(`uk-lang-${t}`),
                    e && document.body.classList.add(`uk-lang-${e}`);
                }
              );
            const o = (0, d.YP)(
              () => (0, C.i)().ready,
              (e) => {
                e &&
                  (o(),
                  (0, d.YP)(
                    () => [
                      (0, k.S)().appearance,
                      (0, B.O)().ignoreAppearanceChanged,
                    ],
                    ([e, t]) => {
                      t || (0, G.Z)(e);
                    }
                  ),
                  (0, d.YP)(
                    () => (0, k.qr)().systemAccentColor,
                    (e) => U(e)
                  ),
                  (0, d.YP)(
                    () => (0, k.S)().systemScrollbarSetting,
                    (e) =>
                      (function (e) {
                        const t = "vk-scrollbar";
                        document.body.classList.forEach((e) => {
                          e.startsWith(t) && document.body.classList.remove(e);
                        }),
                          document.body.classList.add(
                            `${t}-${(e || "always").toLowerCase()}`
                          );
                      })(e),
                    { immediate: !0 }
                  ));
              }
            );
          },
        },
        ee = {
          start: () => {
            q.nd &&
              q.qu.forEach((e) => {
                (0, k.JX)().appendBeforeHandler(e, () =>
                  (async () => (await a.ZP.fetch(w.QN), "interruption"))()
                );
              }),
              Object.keys(q.JN)
                .concat(Object.keys(q.oF))
                .forEach((e) => {
                  (0, k.JX)().appendBeforeHandler(e, () => {
                    const t = (0, k.JX)().commandById(e);
                    return (null == t ? void 0 : t.provider)
                      ? (async (e, t) => {
                          if (
                            !(await a.ZP.fetch(w.Gy, {
                              name: e,
                              channel: (0, w.gk)(t),
                            }))
                          )
                            return "interruption";
                        })(e, t.provider)
                      : "interruption";
                  });
                }),
              q.ZK.forEach((e) => {
                (0, k.JX)().appendAfterHandler(e, () => {
                  const t = e.split(".")[1];
                  (0, V.L9)({
                    eventCategory: "Edit",
                    eventAction: t,
                    eventValue: 1,
                  });
                });
              }),
              q.ff.forEach((e) => {
                (0, k.JX)().appendAfterHandler(e, () => {
                  (0, V.L9)({
                    eventCategory: "Share",
                    eventAction: e,
                    eventValue: 1,
                  });
                });
              }),
              q.y_.forEach((e) => {
                (0, k.JX)().appendBeforeHandler(e, () => {
                  (0, J.Kl)();
                });
              }),
              q.xk.forEach((e) => {
                (0, k.JX)().appendBeforeHandler(e, () => {
                  (0, J.fv)();
                });
              }),
              q.wp.forEach((e) => {
                (0, k.JX)().appendBeforeHandler(e, () => {
                  (0, J.nz)();
                });
              }),
              (0, k.JX)().appendAfterHandler("editor.addTodo", X.l5),
              (0, k.JX)().appendAfterHandler("editor.cancelTask", X.DY),
              (0, k.JX)().appendAfterHandler("editor.checkTodo", () => {
                (0, X.fR)("checkTask");
              }),
              (0, k.JX)().appendAfterHandler("editor.uncheckTodo", () => {
                (0, X.fR)("uncheckTask");
              }),
              q.QL.forEach((e) => {
                (0, k.JX)().appendBeforeHandler(e, () => {
                  if ((0, k.si)().contexts["collaboration.isReadOnly"])
                    return "interruption";
                });
              }),
              q.gY.forEach((e) => {
                (0, k.JX)().appendBeforeHandler(e, () => {
                  if ((0, k.si)().contexts["collaboration.isFromCloud"])
                    return "interruption";
                });
              });
          },
        },
        te = {
          start: () => {
            const e = (0, C.i)();
            e.startJob(),
              (0, k.JX)().injectDoHandleCommand(async (e, t) =>
                a.ZP.fetch(w.hR, { commandId: e, handlerArgs: t })
              ),
              e.endJob();
          },
        },
        ne = [Y.plugin];
      var oe = n(7710);
      const re = p().parse(window.location.search.slice(1)),
        ae = !0,
        ie = !!re.isBrowserView,
        ce = !!re.isEditorFrame;
      let se = v.getCurrentWindow;
      ie &&
        (se = function () {
          const e = Z.Z.sendSync("get-current-window-id");
          return v.BrowserWindow.fromId(parseInt(e));
        });
      const le =
          window.location.pathname.match(/\/([a-zA-Z0-9-]+)\.html$/)[1] ||
          "default",
        de = (0, r.ZP)("performance"),
        ue = (0, r.ZP)("sentry");
      de.debug("Initializing page:", le),
        m.webFrame.setVisualZoomLevelLimits(1, 1),
        document.body.classList.add("uk-win32"),
        Object.defineProperty(window, "id", { get: () => se().id }),
        (window.getWindowIdAsync = async () =>
          await (0, x.A)("get-current-window-id"));
      (window.getCurrentWindowAsync = async () => {
        const e = await window.getWindowIdAsync();
        return v.BrowserWindow.fromId(parseInt(e));
      }),
        (window.isEditorFrame = ce);
      const pe = d.ZP.observable({
        isBeingDestroyed: !1,
        isDestroyed: !1,
        isShown: !1,
      });
      ["isBeingDestroyed", "isDestroyed", "isShown"].forEach((e) => {
        Object.defineProperty(window, e, {
          get: () => pe[e],
          set(t) {
            pe[e] = t;
          },
        });
      }),
        (window.show = () => {
          se().show();
        }),
        (window.hide = () => {
          se().hide();
        }),
        (window.close = () => {
          se().close();
        }),
        (window.minimize = () => {
          se().minimize();
        }),
        (window.maximize = () => {
          se().maximize();
        }),
        (window.restore = () => {
          se().unmaximize();
        }),
        (window.isMinimized = () => se().isMinimized()),
        (window.isMaximized = () => se().isMaximized()),
        (window.isFullScreen = () => se().isFullScreen()),
        (window.resizeTo = (e, t) => {
          se().setContentSize(e, t);
        }),
        (window.resizeBy = (e, t) => {
          let [n, o] = se().getContentSize();
          se().setContentSize(n + e, o + t);
        }),
        (window.moveTo = (e, t) => {
          se().setPosition(e, t);
        }),
        (window.moveBy = (e, t) => {
          let [n, o] = se().getPosition();
          se().setPosition(n + e, o + t);
        }),
        S.Z.on("window-maximize", () => {
          document.body.classList.add("uk-window-maximized"),
            window.dispatchEvent(new Event("maximize"));
        }),
        S.Z.on("window-unmaximize", () => {
          document.body.classList.remove("uk-window-maximized"),
            window.dispatchEvent(new Event("restore"));
        }),
        S.Z.on("window-minimize", () => {
          window.dispatchEvent(new Event("minimize"));
        }),
        S.Z.on("window-unminimize", () => {
          window.dispatchEvent(new Event("unminimize"));
        }),
        S.Z.on("window-focus", () => {
          document.body.classList.remove("uk-window-inactive");
        }),
        S.Z.on("window-blur", () => {
          document.body.classList.add("uk-window-inactive");
        }),
        S.Z.on("window-enter-full-screen", () => {
          document.body.classList.add("uk-window-full-screen"),
            window.dispatchEvent(new Event("enter-full-screen"));
        }),
        S.Z.on("window-leave-full-screen", () => {
          document.body.classList.remove("uk-window-full-screen"),
            window.dispatchEvent(new Event("leave-full-screen"));
        }),
        S.Z.on("window-sheet-begin", () => {
          document.body.classList.add("uk-disabled"),
            window.dispatchEvent(new Event("sheet-begin"));
        }),
        S.Z.on("window-sheet-end", () => {
          document.body.classList.remove("uk-disabled"),
            window.dispatchEvent(new Event("sheet-end"));
        }),
        S.Z.on("window-show", () => {
          window.dispatchEvent(new Event("window-show"));
        }),
        S.Z.on(W.$r, (e) => {
          (0, oe.l)().setQuery(e);
        });
      const me = se && se();
      if (
        (me &&
          me.isMaximized() &&
          document.body.classList.add("uk-window-maximized"),
        me &&
          me.isFullScreen() &&
          document.body.classList.add("uk-window-full-screen"),
        me &&
          !me.isFocused() &&
          document.body.classList.add("uk-window-inactive"),
        document.addEventListener("keydown", (e) => {
          27 === e.keyCode &&
            document.body.querySelector(".uk-window-dialog") &&
            setTimeout(() => {
              if (e.defaultPrevented) return;
              const t = new Event("close");
              window.dispatchEvent(t) && window.close();
            }, 0);
        }),
        me && me.isMaximizable && me.isMaximizable())
      ) {
        const e = ["a", "button", "select", "input"];
        document.addEventListener("dblclick", (t) => {
          const { target: n, defaultPrevented: o } = t;
          if (o) return;
          let r = n;
          for (; r && "function" == typeof r.matches; ) {
            if (e.some((e) => r.matches(e))) return;
            r = r.parentNode;
          }
          let a =
            document.querySelector(".vk-window-title-bar-expanded") ||
            document.querySelector(".vk-window-title-bar");
          a &&
            a.contains(n) &&
            (window.isMaximized() ? window.restore() : window.maximize());
        });
      }
      d.ZP.use(T.og),
        d.ZP.use(new N((e) => l.handle(e))),
        d.ZP.use(g()),
        d.ZP.use(A),
        d.ZP.use(L),
        d.ZP.use(O),
        d.ZP.use(y.ZP.Plugin),
        de.debug("Initialized page:", le);
      const ve = (0, T.WB)();
      (0, T.uX)(ve),
        ne.forEach((e) => ve.use(e)),
        Object.values(k.rx).forEach((e) => e()),
        H.start(),
        Y.start(),
        K.start(),
        Q.start(),
        ee.start(),
        te.start();
      const fe = (0, I.Z)("version").includes("beta");
      if (process.env.SENTRY_DSN_OF_BROWSER && fe) {
        const e = (0, d.YP)(
          () => (0, k.qr)().sentryConfig,
          (t) => {
            e();
            try {
              const e = t[process.env.SENTRY_PROJECT_OF_BROWSER] || {};
              h.S({
                Vue: d.ZP,
                dsn: process.env.SENTRY_DSN_OF_BROWSER,
                environment: "production",
                ...e,
              }),
                ue.info("init", e);
            } catch (e) {
              ue.error("Failed to init sentry", e);
            }
          },
          { immediate: !1 }
        );
      }
      async function ge(
        e,
        {
          mountTarget: t = "#app",
          name: n = null,
          plugins: o = [],
          runAfterPiniaPlugin: r,
          editorId: i = null,
          autoShow: c = !0,
        } = {}
      ) {
        de.debug("Bootstrapping:", le);
        for (let e of o) d.ZP.use(e);
        let s;
        return (
          (0, k._t)((0, b.b3)(window.id)),
          "dialog-err" === n && (0, k.VE)((0, b.zN)("dialog-err", window.id)),
          "dialog-problem" === n &&
            (0, k.ym)((0, b.zN)("dialog-problem", window.id)),
          i && (0, k.OD)((0, b.aJ)(i)),
          await new Promise((n) => {
            let o = (0, d.YP)(
              () => (0, C.i)().ready,
              (i) => {
                i &&
                  (o(),
                  document.body.classList.add(`uk-lang-${(0, k.S)().language}`),
                  r?.(ve),
                  de.debug("About to create Vue instance:", le),
                  (s = new d.ZP({ ...e, pinia: ve })),
                  de.debug("Created Vue instance:", le),
                  window.addEventListener("unload", () => {
                    (window.isBeingDestroyed = !0),
                      s.$destroy(),
                      (window.isDestroyed = !0);
                  }),
                  de.debug("About to mount Vue instance:", le),
                  s.$mount(t || "#app"),
                  de.debug("Mounted Vue instance:", le),
                  (0, P.qJ)().then(async () => {
                    if (!c) return;
                    const e = await window.getWindowIdAsync();
                    !ae && (await a.ZP.fetch((0, w.EV)(e), "show")),
                      ae && (await a.ZP.fetch((0, w.EV)(e), "moveToShow")),
                      (window.isShown = !0);
                  }),
                  n(s));
              }
            );
          }),
          s
        );
      }
    },
    13382: (e, t, n) => {
      "use strict";
      n.d(t, {
        G$: () => x,
        N0: () => g,
        Pg: () => W,
        R2: () => Z,
        W5: () => S,
        ZZ: () => h,
        am: () => w,
        eq: () => b,
        yr: () => I,
      });
      var o = n(71017),
        r = n.n(o),
        a = n(67657),
        i = n(7104),
        c = n(23352),
        s = n(33394),
        l = n(94593),
        d = n(90435),
        u = n(54856),
        p = n(5893),
        m = n(87141),
        v = n(63111);
      const f = (0, c.ZP)("dialog");
      async function g(e) {
        (e = Object.assign({}, e || {})).icon &&
          "string" == typeof e.icon &&
          (e.icon = r().join((0, i.bY)(), e.icon));
        const t = a.BrowserWindow.fromId(window.id);
        return [a.dialog.showMessageBoxSync(t, e)];
      }
      async function y(e) {
        (e = Object.assign({}, e || {})).icon &&
          "string" == typeof e.icon &&
          (e.icon = r().join((0, i.bY)(), e.icon));
        const t = a.BrowserWindow.fromId(window.id),
          { response: n, checkboxChecked: o } = await a.dialog.showMessageBox(
            t,
            e
          );
        return [n, o];
      }
      async function h(e) {
        (e = Object.assign({ securityScopedBookmarks: !0 }, e || {}))
          .suggestPath &&
          !e.defaultPath &&
          ((e.defaultPath = w(e.suggestPath, e.filters)), delete e.suggestPath);
        const {
          canceled: t,
          filePath: n,
          bookmark: o,
        } = await a.dialog.showSaveDialog(a.getCurrentWindow(), e);
        return t
          ? null
          : (n && o && (await s.Z.bindBookmark({ fp: n, bookmark: o })),
            n && (0, m.km)().setLastSaveDirectory(r().dirname(n)),
            n);
      }
      async function b({ folderName: e, dialogOptions: t }) {
        let n = "";
        (t = Object.assign({ securityScopedBookmarks: !0 }, t || {}))
          .defaultPath || (t.defaultPath = w({}));
        const {
          canceled: o,
          filePaths: i,
          bookmark: c,
        } = await a.dialog.showOpenDialog(a.getCurrentWindow(), t);
        if (o) return null;
        if (
          ((n = i[0]),
          i.length > 0 && c && (await s.Z.bindBookmark({ fp: n, bookmark: c })),
          "string" == typeof e)
        ) {
          let t = e.replace(/[\\/]/g, "");
          (t = (0, p.N6)(t).replace(/\.+$/g, "").trim()), (n = r().join(n, t));
        }
        return (
          l.Z.existsSync(n) || l.Z.ensureDir(n),
          n && (0, m.km)().setLastSaveDirectory(n),
          n
        );
      }
      function w(
        { doc: e = null, oldDoc: t = null, suggestedName: n = null },
        o = null
      ) {
        let i, c;
        if (
          (!i && n && (i = (0, p.N6)(n.toString())),
          !i &&
            e &&
            e.title &&
            e.source &&
            !e.source.startsWith("new://") &&
            (i = (0, p.N6)(e.title.toString())),
          !i &&
            t &&
            t.title &&
            t.source &&
            !t.source.startsWith("new://") &&
            (i = (0, p.N6)(t.title.toString())),
          i && Array.isArray(o))
        ) {
          const e = o[0] && o[0].extensions;
          Array.isArray(e) && e.length > 0 && (i = `${i}.${e[0]}`);
        }
        if (!c && t && t.source && t.source.startsWith("file://")) {
          let e = t.source.slice(7);
          (e = e.substring(1)), (c = r().dirname(e));
        }
        if (
          (!c &&
            (0, m.km)().lastSaveDirectory &&
            (c = (0, m.km)().lastSaveDirectory),
          !c)
        )
          try {
            c = a.app.getPath("documents");
          } catch (e) {
            f.info(e);
          }
        return c && i ? r().join(c, i) : c || i;
      }
      async function S(e) {
        e.$withUIKit((t) => {
          const n = `\n        <button\n        class="vk-button-text vk-size-small uk-text-nowrap"\n        style="word-break: keep-all;"\n        focustrigger="cannotGetFocusByMouse">\n          ${e.$T(
            "OK"
          )}\n        </button>\n        </div>`;
          t.toast({
            message: e.$T(
              "The map style has been updated for your current version of Xmind."
            ),
            pos: "bottom-center",
            timeout: 5e3,
            btn: n,
            style: { width: "500px", height: "auto", padding: "10px 20px" },
            btnClick: t.toast.clearAll(),
          });
        });
      }
      async function Z(e) {
        const t = (e = "function" != typeof e ? (e) => e : e)("OK"),
          n = e("Get Latest Version"),
          o = [t, n],
          [r] = await y({
            title: "Xmind",
            message: e(
              "The map style in this file might vary since it was created in a newer version of Xmind."
            ),
            detail: e(
              "You can continue to open the file or update to the latest version for better compatibility."
            ),
            buttons: o,
            defaultId: o.indexOf(n),
            cancelId: o.indexOf(t),
            noLink: !0,
          });
        r === o.indexOf(n) && d.ZP.fetch(u.lf.GO_DOWNLOAD);
      }
      async function x(e) {
        if (((e = "function" != typeof e ? (e) => e : e), v.zr))
          return await y({
            title: "Xmind",
            message: e("Failed to Open File"),
            detail: e(
              "The file was created with a newer version of Xmind. Please contact your corporate administrator for the latest update."
            ),
            buttons: [e("Done")],
            defaultId: 0,
            noLink: !0,
          });
        const t = e("Cancel"),
          n = e("Get Latest Version"),
          o = [n, t],
          [r] = await y({
            title: "Xmind",
            message: e("Failed to Open File"),
            detail: e(
              "The file was created by a newer version of Xmind. Please update Xmind and try to open it again."
            ),
            buttons: o,
            defaultId: o.indexOf(n),
            cancelId: o.indexOf(t),
            noLink: !0,
          });
        r === o.indexOf(n) && d.ZP.fetch(u.lf.GO_DOWNLOAD);
      }
      async function I(e) {
        const t = (e = "function" != typeof e ? (e) => e : e)("Save"),
          n = e("Save as"),
          o = e("Cancel"),
          r = [];
        r.push(n, t, o);
        let [a] = await y({
          type: "none",
          title: "Xmind",
          message: e("Saving file from Xmind"),
          detail: e(
            "Once you save the file, it cannot be opened normally in older versions like $1.",
            "Xmind 22.11"
          ),
          buttons: r,
          defaultId: r.indexOf(n),
          cancelId: r.indexOf(o),
          noLink: !0,
        });
        const i = a === r.indexOf(t),
          c = a === r.indexOf(n);
        return { toSave: i, toSaveAs: c, toCancel: !i && !c };
      }
      async function W(e) {
        const t = (e = "function" != typeof e ? (e) => e : e)("Fix ＆ Open"),
          n = e("Cancel"),
          o = [t, n],
          [r] = await y({
            title: "Xmind",
            message: e("Failed to Open File"),
            detail: e(
              "The file may contain invalid data structure or have become corrupted. Xmind can try to fix the data structure to help you open it."
            ),
            buttons: o,
            defaultId: o.indexOf(t),
            cancelId: o.indexOf(n),
            noLink: !0,
          });
        return { toFix: r === o.indexOf(t), toCancel: r === o.indexOf(n) };
      }
    },
    33394: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => v });
      var o = n(57147),
        r = n.n(o),
        a = n(71017),
        i = n.n(a),
        c = n(73837),
        s = n(23352),
        l = n(96829),
        d = n(56222);
      const u = (0, s.ZP)("renderer:fs");
      async function p(e) {
        return (0, d.A)("OBTAIN_READ_WRITE_ACCESS", e);
      }
      async function m(e) {
        return (0, d.A)("RELEASE_READ_WRITE_ACCESS", e);
      }
      const v = {
        read: async function (e) {
          if (!i().isAbsolute(e)) throw new Error("Must be an absolute path.");
          const t = await (async function (e) {
            return (0, d.A)("OBTAIN_READ_LOCK", e);
          })(e);
          try {
            return await (0, c.promisify)(r().readFile)(e);
          } catch (t) {
            u.error(`path(${e}) read error: ${(0, l.SC)(t)}`);
            try {
              if (!(await p(e))) throw new Error(`No access to '${e}'`);
              return await (0, c.promisify)(r().readFile)(e);
            } catch (e) {
              throw e;
            } finally {
              await m(e);
            }
          } finally {
            await (async function (e) {
              return (0, d.A)("RELEASE_READ_LOCK", e);
            })(t);
          }
        },
        write: async function (e, t) {
          if (!i().isAbsolute(e)) throw new Error("Must be an absolute path.");
          const n = await (async function (e) {
            return (0, d.A)("OBTAIN_WRITE_LOCK", e);
          })(e);
          try {
            return await (0, c.promisify)(r().writeFile)(e, t);
          } catch (n) {
            u.error(`path(${e}) write error: ${(0, l.SC)(n)}`);
            try {
              if (!(await p(e))) throw new Error(`No access to '${e}'`);
              return await (0, c.promisify)(r().writeFile)(e, t);
            } catch (e) {
              throw e;
            } finally {
              await m(e);
            }
          } finally {
            await (async function (e) {
              return (0, d.A)("RELEASE_WRITE_LOCK", e);
            })(n);
          }
        },
        bindBookmark: async function ({ fp: e, bookmark: t } = {}) {
          return (0, d.A)("BIND_BOOKMARK", { fp: e, bookmark: t });
        },
        hasRWAccess: async function (e) {
          return (0, d.A)("HAS_READ_WRITE_ACCESS", e);
        },
        obtainRWAccessFromOS: p,
        releaseRWAccessFromOS: m,
      };
    },
    94593: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => i });
      var o = n(81296),
        r = n.n(o);
      const a = (0, n(23352).ZP)("ipc:proxy:"),
        i = new Proxy(r(), {
          get(e, t) {
            let n = Reflect.get(e, t);
            return "function" == typeof n
              ? (...o) => {
                  if (!window.isDestroyed) return n.apply(e, o);
                  a.error(
                    `window has been destroyed, we should not invoke fsp.${t})`
                  );
                }
              : n;
          },
        });
    },
    56222: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => a });
      var o = n(72298);
      let r = 0;
      function a(e, t) {
        return new Promise((n) => {
          const a = r++;
          o.ipcRenderer.once(
            `internal-ipc-api-reply:${e}:${a}`,
            (e, { data: t = null }) => {
              n(t);
            }
          ),
            o.ipcRenderer.send(`internal-ipc-api:${e}`, { payload: t, seq: a });
        });
      }
    },
    28914: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => a });
      var o = n(72298);
      const r = (0, n(23352).ZP)("ipc:proxy:"),
        a = new Proxy(o.ipcRenderer, {
          get(e, t) {
            let n = Reflect.get(e, t);
            return "function" == typeof n
              ? (...o) => {
                  if (!window.isDestroyed) return n.apply(e, o);
                  r.error(
                    `window has been destroyed, we should not invoke ipcRenderer.${t} with args (${JSON.stringify(
                      o
                    )})`
                  );
                }
              : n;
          },
        });
    },
    90435: (e, t, n) => {
      "use strict";
      n.d(t, { ZP: () => s, he: () => c });
      var o = n(96829),
        r = n(28914);
      const a = new Map();
      let i = 0;
      function c(e, t) {
        const n = a.get(e);
        return n
          ? Promise.resolve().then(() => n(t))
          : new Promise((n, a) => {
              const c = i++;
              r.Z.once(
                `ipc-api-reply:${e}:${c}`,
                (e, { error: t = null, data: r = null }) => {
                  t ? a((0, o.aq)(t)) : n(r);
                }
              ),
                r.Z.send(`ipc-api:${e}`, { payload: t, seq: c });
            });
      }
      const s = {
        fetch: c,
        route: function (e, t) {
          if ("function" != typeof t)
            throw new Error(
              `IPC API "${e}" is routed to invalid handler: ${typeof t}`
            );
          if (a.has(e)) throw new Error(`IPC API "${e}" is routed twice`);
          const n = `ipc-api:${e}`;
          if (r.Z.eventNames().includes(n))
            throw new Error(`IPC API "${e}" is routed twice`);
          const i = (n, { payload: a = null, seq: i = 0 } = {}) => {
            const c = `ipc-api-reply:${e}:${i}`;
            Promise.resolve()
              .then(() => t(a))
              .then((e) => {
                r.Z.send(c, { data: e });
              })
              .catch((e) => {
                r.Z.send(c, { error: (0, o.SC)(e) });
              });
          };
          return (
            a.set(e, t),
            r.Z.on(n, i),
            r.Z.send("ipc-api-register", { apiName: e }),
            () => {
              r.Z.send("ipc-api-unregister", { apiName: e }),
                r.Z.removeListener(n, i),
                a.delete(e);
            }
          );
        },
      };
    },
    23352: (e, t, n) => {
      "use strict";
      n.d(t, { ZP: () => l });
      var o = n(82134),
        r = n(96829),
        a = n(79409),
        i = n(72298);
      const c = new o.Jq(global.console, { colorful: !1 }),
        s = new o.Yd({
          isDebugging:
            (0, a.Z)("version").indexOf("-alpha") >= 0 ||
            (0, a.Z)("version").indexOf("-dev") >= 0 ||
            r.x,
          handle(e) {
            c.handle(e),
              (function (e) {
                i.ipcRenderer.send("logger:handleLogEvent", e);
              })(e);
          },
        }),
        l = (e = null) => s.logger(e);
    },
    79409: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => l });
      var o = n(71017),
        r = n.n(o),
        a = n(57147),
        i = n.n(a),
        c = n(7104);
      let s = null;
      function l(e = null) {
        return (
          s ||
            (s = JSON.parse(
              i().readFileSync(r().join((0, c.bY)(), "package.json"))
            )),
          e ? s[e] : s
        );
      }
    },
    69931: (e, t, n) => {
      "use strict";
      n.d(t, { Al: () => u, ju: () => s, pP: () => l, zD: () => d });
      var o = n(71017),
        r = n.n(o),
        a = n(94593),
        i = n(7104),
        c = n(5893);
      function s(e) {
        return (0, c.u3)(r().join((0, i.bY)(), e));
      }
      function l(e) {
        return (0, c.u3)(r().join((0, i.D8)(), e));
      }
      function d(e) {
        return a.Z.readFile(r().join((0, i.bY)(), e));
      }
      const u = (...e) =>
        s(...e)
          .replace("(", "%28")
          .replace(")", "%29");
    },
    73884: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => d });
      var o = n(82361),
        r = n.n(o),
        a = n(28914);
      const i = new (r())(),
        c = i.emit;
      (i.emit = function (e, ...t) {
        c.call(i, e, ...t), l(e) && a.Z.send("revents:broadcast", [e, ...t]);
      }),
        i.on("newListener", (e) => {
          if (l(e)) {
            0 === i.eventNames().filter(l).length &&
              a.Z.send("revents:register");
          }
        }),
        i.on("removeListener", (e) => {
          if (l(e)) {
            0 === i.eventNames().filter(l).length &&
              a.Z.send("revents:unregister");
          }
        });
      const s = i.removeAllListeners;
      function l(e) {
        return "newListener" !== e && "removeListener" !== e;
      }
      (i.removeAllListeners = function (e) {
        if (!e) throw new Error("revents's removeAllListeners is forbidden!");
        if ("newListener" === e || "removeListener" === e)
          throw new Error(
            'revents\'s "newListener" and "removeListener" handler should not be removed'
          );
        s.call(i, e);
      }),
        a.Z.on("revents:broadcast", (e, t) => {
          let n = JSON.parse(t);
          c.apply(i, n);
        }),
        window.addEventListener("unload", () => {
          a.Z.send("revents:unregister");
        });
      const d = i;
    },
    85786: (e, t, n) => {
      "use strict";
      n.d(t, { DL: () => u, Xf: () => l, Yv: () => d, vQ: () => p });
      var o = n(22037),
        r = n.n(o),
        a = n(57310),
        i = n.n(a),
        c = n(72298),
        s = n(13382);
      function l() {
        return "win32";
      }
      function d() {
        return {
          platform: r().platform(),
          arch: r().arch(),
          release: r().release(),
        };
      }
      function u(e, t) {
        const n = i().parse(e).protocol,
          o = t || ((e) => e);
        c.shell.openExternal(n ? e : `http://${e}`).catch(() => {
          (0, s.N0)({
            title: "Xmind",
            message: o("Unable to open link."),
            detail: o(
              "This link is invalid and cannot be opened through browser."
            ),
            buttons: [o("OK")],
          });
        });
      }
      function p(e) {
        c.clipboard.writeText(e);
      }
    },
    69297: (e, t, n) => {
      "use strict";
      n.d(t, {
        Do: () => a,
        Kl: () => i,
        N1: () => r,
        fv: () => c,
        nz: () => s,
      });
      var o = n(28914);
      function r() {
        return o.Z.sendSync("usage-stats:data");
      }
      function a() {
        o.Z.send("usage-stats:increase", {
          type: "dwellTimeInZenMode",
          value: 1e3,
        });
      }
      function i(e = 1) {
        o.Z.send("usage-stats:increase", { type: "topicsAdded", value: e });
      }
      function c(e = 1) {
        o.Z.send("usage-stats:increase", { type: "sheetsAdded", value: e });
      }
      function s(e = 1) {
        o.Z.send("usage-stats:increase", { type: "eventsTriggered", value: e });
      }
    },
    18621: (e, t, n) => {
      "use strict";
      n.d(t, { Fk: () => a, L9: () => r });
      var o = n(28914);
      function r(e) {
        o.Z.send("usage-tracker:track-event", { event: e });
      }
      function a(e) {
        o.Z.send("usage-tracker:track-view", { view: e });
      }
    },
    7104: (e, t, n) => {
      "use strict";
      n.d(t, {
        D8: () => d,
        Im: () => v,
        L2: () => p,
        N8: () => u,
        O1: () => f,
        Xl: () => h,
        bY: () => l,
        d6: () => y,
        tM: () => g,
        tY: () => m,
      });
      var o = n(71017),
        r = n.n(o),
        a = n(72298),
        i = n(56222);
      let c = null;
      let s = null;
      function l() {
        return s || (s = a.ipcRenderer.sendSync("workspace:appPath")), s;
      }
      function d() {
        return r().join(
          (c || (c = a.ipcRenderer.sendSync("workspace:userData")), c),
          "vana"
        );
      }
      function u() {
        return r().join(d(), "workbooks");
      }
      function p() {
        return r().join(d(), "file-cache");
      }
      function m() {
        return r().join(d(), "theme");
      }
      function v() {
        return r().join(d(), "smart-color");
      }
      function f() {
        return r().join(d(), "illustrations");
      }
      function g() {
        return r().join(d(), "templates");
      }
      function y() {
        return r().join(l(), "static/snowbird/resource/");
      }
      async function h() {
        return (
          c || (c = await (0, i.A)("workspace:userData")),
          r().join(c, "vana", "workbooks")
        );
      }
    },
    38629: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => r });
      var o = n(69931);
      function r(e, t = null) {
        document.documentElement.setAttribute(
          "color-scheme",
          "default" === e ? "light" : "dark"
        );
        if (document.querySelector("#appearance_link"))
          return void ("function" == typeof t && t());
        const n = (0, o.ju)("static/vanakit/themes/vana.css"),
          r = document.createElement("link");
        (r.type = "text/css"),
          (r.id = "appearance_link"),
          (r.rel = "stylesheet"),
          (r.href = n),
          r.setAttribute("data-appearance", e),
          "function" == typeof t && (r.onload = () => t()),
          document.head.appendChild(r);
      }
    },
    66040: (e, t, n) => {
      "use strict";
      n.d(t, { ed: () => r, qr: () => a, ys: () => i });
      var o = n(96829);
      const r = [
          {
            commandId: "home",
            label: (0, o.WZ)("Open Home"),
            category: (0, o.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "new",
            label: (0, o.WZ)("New Blank Map"),
            category: (0, o.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "newFromTemplate",
            label: (0, o.WZ)("New"),
            category: (0, o.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "newFromLibrary",
            label: (0, o.WZ)("New From Library"),
            category: (0, o.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "open",
            label: (0, o.WZ)("Open"),
            category: (0, o.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "save",
            label: (0, o.WZ)("Save"),
            category: (0, o.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "saveAs",
            label: (0, o.WZ)("Save As"),
            category: (0, o.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "print",
            label: (0, o.WZ)("Print"),
            category: (0, o.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "closeSimpleWindow",
            label: (0, o.WZ)("Close Window/Tab"),
            category: (0, o.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          null,
          null,
          {
            commandId: "mergeAllWindows",
            label: (0, o.WZ)("Merge All Windows"),
            category: (0, o.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.addSheet",
            label: (0, o.WZ)("New Sheet"),
            category: (0, o.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.newSheetFromTopic",
            label: (0, o.WZ)("New Sheet From Topic"),
            category: (0, o.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.previousSheet",
            label: (0, o.WZ)("Previous Sheet"),
            category: (0, o.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.nextSheet",
            label: (0, o.WZ)("Next Sheet"),
            category: (0, o.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "frame.addNewTab",
            label: (0, o.WZ)("New Tab"),
            category: (0, o.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "frame.previousTab",
            label: (0, o.WZ)("Previous Tab"),
            category: (0, o.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "frame.nextTab",
            label: (0, o.WZ)("Next Tab"),
            category: (0, o.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "undo",
            label: (0, o.WZ)("Undo"),
            category: (0, o.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "redo",
            label: (0, o.WZ)("Redo"),
            category: (0, o.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "cut",
            label: (0, o.WZ)("Cut"),
            category: (0, o.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "copy",
            label: (0, o.WZ)("Copy"),
            category: (0, o.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "paste",
            label: (0, o.WZ)("Paste"),
            category: (0, o.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "duplicate",
            label: (0, o.WZ)("Duplicate"),
            category: (0, o.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.copyStyle",
            label: (0, o.WZ)("Copy Style"),
            category: (0, o.WZ)("General"),
          },
          {
            commandId: "editor.pasteStyle",
            label: (0, o.WZ)("Paste Style"),
            category: (0, o.WZ)("General"),
          },
          {
            commandId: "editor.resetStyle",
            label: (0, o.WZ)("Reset Style"),
            category: (0, o.WZ)("General"),
          },
          {
            commandId: "delete",
            label: (0, o.WZ)("Delete"),
            category: (0, o.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "deleteSingleTopic",
            label: (0, o.WZ)("Delete Single Topic"),
            category: (0, o.WZ)("General"),
          },
          {
            commandId: "selectAll",
            label: (0, o.WZ)("Select All"),
            category: (0, o.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "workbench.toggleFindAndReplace",
            label: (0, o.WZ)("Find & Replace"),
            category: (0, o.WZ)("General"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.addSubTopic",
            label: (0, o.WZ)("Subtopic"),
            category: (0, o.WZ)("Insert Topics & Elements"),
            fixed: !0,
          },
          {
            commandId: "editor.addTopic",
            label: (0, o.WZ)("Topic After"),
            category: (0, o.WZ)("Insert Topics & Elements"),
          },
          {
            commandId: "editor.addTopicBefore",
            label: (0, o.WZ)("Topic Before"),
            category: (0, o.WZ)("Insert Topics & Elements"),
          },
          {
            commandId: "editor.addParentTopic",
            label: (0, o.WZ)("Parent Topic"),
            category: (0, o.WZ)("Insert Topics & Elements"),
          },
          {
            commandId: "editor.addCallout",
            label: (0, o.WZ)("Callout"),
            category: (0, o.WZ)("Insert Topics & Elements"),
          },
          {
            commandId: "editor.addRelationship",
            label: (0, o.WZ)("Relationship"),
            category: (0, o.WZ)("Insert Topics & Elements"),
          },
          {
            commandId: "editor.addBoundary",
            label: (0, o.WZ)("Boundary"),
            category: (0, o.WZ)("Insert Topics & Elements"),
          },
          {
            commandId: "editor.addSummary",
            label: (0, o.WZ)("Summary"),
            category: (0, o.WZ)("Insert Topics & Elements"),
          },
          {
            commandId: "editor.showNotesEditor",
            label: (0, o.WZ)("Note"),
            category: (0, o.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.showLabelEditor",
            label: (0, o.WZ)("Label"),
            category: (0, o.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.showHyperlinkEditor",
            getLabel: (e) => e("Link(noun)") + " - " + e("Webpage"),
            category: (0, o.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.showTopiclinkEditor",
            getLabel: (e) => e("Link(noun)") + " - " + e("Topic Link"),
            category: (0, o.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.addFileLink",
            getLabel: (e) => e("Link(noun)") + " - " + e("Local File"),
            category: (0, o.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.addFolderLink",
            getLabel: (e) => e("Link(noun)") + " - " + e("Local Folder"),
            category: (0, o.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.addAttachmentOnNewTopic",
            label: (0, o.WZ)("Attachment"),
            category: (0, o.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.addAudioOnNewTopic",
            label: (0, o.WZ)("Audio Note"),
            category: (0, o.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "workbench.toggleMarkerPanel",
            label: (0, o.WZ)("Marker"),
            category: (0, o.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "workbench.toggleStickerPanel",
            label: (0, o.WZ)("Sticker"),
            category: (0, o.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "workbench.toggleIllustrationPanel",
            label: (0, o.WZ)("Illustration"),
            category: (0, o.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.addLocalImage",
            label: (0, o.WZ)("Local Image"),
            category: (0, o.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.showEquationEditor",
            label: (0, o.WZ)("Equation"),
            category: (0, o.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.markPriorityByNumber",
            label: (0, o.WZ)("Mark Priority (1~7)"),
            category: (0, o.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.removeMarker",
            label: (0, o.WZ)("Remove Marker"),
            category: (0, o.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.removeStickerOrImageOrEquation",
            label: (0, o.WZ)("Remove Sticker/Image/Equation"),
            category: (0, o.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.removeLabel",
            label: (0, o.WZ)("Remove Label"),
            category: (0, o.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.removeLink",
            label: (0, o.WZ)("Remove Link"),
            category: (0, o.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.removeNote",
            label: (0, o.WZ)("Remove Note"),
            category: (0, o.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.keepTextOnly",
            label: (0, o.WZ)("Keep Text Only"),
            category: (0, o.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.addTodo",
            label: (0, o.WZ)("Add Task"),
            category: (0, o.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.removeTodo",
            label: (0, o.WZ)("Remove Task"),
            category: (0, o.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.checkTodo",
            label: (0, o.WZ)("Mark as Completed"),
            category: (0, o.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.uncheckTodo",
            label: (0, o.WZ)("Mark as Uncompleted"),
            category: (0, o.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.cancelTask",
            label: (0, o.WZ)("Mark as Canceled"),
            category: (0, o.WZ)("Insert Topics & Elements"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.showEditBox",
            label: (0, o.WZ)("Edit Topic Text"),
            category: (0, o.WZ)("Edit Text & Style"),
          },
          {
            commandId: "editor.enterLineBreak",
            label: (0, o.WZ)("Enter Line Break"),
            category: (0, o.WZ)("Edit Text & Style"),
          },
          {
            commandId: "editor.moveToBeginningOfText",
            label: (0, o.WZ)("Move to Beginning of Text"),
            category: (0, o.WZ)("Edit Text & Style"),
          },
          {
            commandId: "editor.moveToEndOfText",
            label: (0, o.WZ)("Move to End of Text"),
            category: (0, o.WZ)("Edit Text & Style"),
          },
          {
            commandId: "editor.boldText",
            label: (0, o.WZ)("Bold"),
            category: (0, o.WZ)("Edit Text & Style"),
          },
          {
            commandId: "editor.italicText",
            label: (0, o.WZ)("Italic"),
            category: (0, o.WZ)("Edit Text & Style"),
          },
          {
            commandId: "editor.underlineText",
            label: (0, r.WZ)("Underline"),
            category: (0, r.WZ)("Edit Text & Style"),
          },
          {
            commandId: "editor.strikethroughText",
            label: (0, o.WZ)("Strikethrough"),
            category: (0, o.WZ)("Edit Text & Style"),
          },
          {
            commandId: "editor.uppercaseText",
            label: (0, o.WZ)("Uppercase"),
            category: (0, o.WZ)("Edit Text & Style"),
          },
          {
            commandId: "editor.lowercaseText",
            label: (0, o.WZ)("Lowercase"),
            category: (0, o.WZ)("Edit Text & Style"),
          },
          {
            commandId: "editor.capitalizeText",
            label: (0, o.WZ)("Capitalize"),
            category: (0, o.WZ)("Edit Text & Style"),
          },
          {
            commandId: "editor.alignTextLeft",
            label: (0, o.WZ)("Align Text Left"),
            category: (0, o.WZ)("Edit Text & Style"),
          },
          {
            commandId: "editor.centerText",
            label: (0, o.WZ)("Center Text"),
            category: (0, o.WZ)("Edit Text & Style"),
          },
          {
            commandId: "editor.alignTextRight",
            label: (0, o.WZ)("Align Text Right"),
            category: (0, o.WZ)("Edit Text & Style"),
          },
          {
            commandId: "editor.increaseFontSize",
            label: (0, o.WZ)("Increase Font Size"),
            category: (0, o.WZ)("Edit Text & Style"),
          },
          {
            commandId: "editor.decreaseFontSize",
            label: (0, o.WZ)("Decrease Font Size"),
            category: (0, o.WZ)("Edit Text & Style"),
          },
          {
            commandId: "editor.setStyleAsVeryImportant",
            label: (0, o.WZ)('Set Style as "Very Important"'),
            category: (0, o.WZ)("Edit Text & Style"),
          },
          {
            commandId: "editor.setStyleAsImportant",
            label: (0, o.WZ)('Set Style as "Important"'),
            category: (0, o.WZ)("Edit Text & Style"),
          },
          {
            commandId: "editor.setStyleAsCrossOut",
            label: (0, o.WZ)('Set Style as "Cross Out"'),
            category: (0, o.WZ)("Edit Text & Style"),
          },
          {
            commandId: "editor.setStyleAsDefault",
            label: (0, o.WZ)('Set Style as "Default"'),
            category: (0, o.WZ)("Edit Text & Style"),
          },
          {
            commandId: "editor.updateStyleToSameLevelTopics",
            label: (0, o.WZ)("Update Style to Same-Level Topics"),
            category: (0, o.WZ)("Edit Text & Style"),
          },
          {
            commandId: "editor.updateStyleToSameTypeTopics",
            label: (0, o.WZ)("Update Style to Same-Type Topics"),
            category: (0, o.WZ)("Edit Text & Style"),
          },
          {
            commandId: "editor.changeNumberingPatternToNone",
            label: (0, o.WZ)("Set Numbering as None"),
            category: (0, o.WZ)("Numbering"),
          },
          {
            commandId: "editor.changeNumberingPatternToNumeralArabic",
            label: (0, o.WZ)('Set Numbering as "1.2.3."'),
            category: (0, o.WZ)("Numbering"),
          },
          {
            commandId: "editor.changeNumberingPatternToAlphabetUppercase",
            label: (0, o.WZ)('Set Numbering as "A.B.C."'),
            category: (0, o.WZ)("Numbering"),
          },
          {
            commandId: "editor.changeNumberingPatternToAlphabetLowercase",
            label: (0, o.WZ)('Set Numbering as "a.b.c."'),
            category: (0, o.WZ)("Numbering"),
          },
          {
            commandId: "editor.changeNumberingPatternToNumeralRoman",
            label: (0, o.WZ)('Set Numbering as "I.II.III."'),
            category: (0, o.WZ)("Numbering"),
          },
          {
            commandId: "editor.toggleNumberingTieredEnabled",
            label: (0, o.WZ)("Set Numbering Tiered Numbers"),
            category: (0, o.WZ)("Numbering"),
          },
          {
            commandId: "editor.toggleNumberingStartsHereEnabled",
            label: (0, o.WZ)("Set Numbering Start From Begin"),
            category: (0, o.WZ)("Numbering"),
          },
          {
            commandId: "editor.focusAndSelectCenter",
            label: (0, o.WZ)("Go to Central Topic"),
            category: (0, o.WZ)("Select & Move"),
          },
          {
            commandId: "editor.moveSelection",
            label: (0, o.WZ)("Move Selection"),
            category: (0, o.WZ)("Select & Move"),
          },
          {
            commandId: "editor.selectMultipleTopics",
            label: (0, o.WZ)("Select Multiple Topics"),
            category: (0, o.WZ)("Select & Move"),
          },
          {
            commandId: "editor.exchangeSiblingTopicUp",
            label: (0, o.WZ)("Move Topic Up"),
            category: (0, o.WZ)("Select & Move"),
          },
          {
            commandId: "editor.exchangeSiblingTopicDown",
            label: (0, o.WZ)("Move Topic Down"),
            category: (0, o.WZ)("Select & Move"),
          },
          {
            commandId: "editor.moveTopicToTop",
            label: (0, o.WZ)("Move Topic to Top"),
            category: (0, o.WZ)("Select & Move"),
          },
          {
            commandId: "editor.moveTopicToBottom",
            label: (0, o.WZ)("Move Topic to Bottom"),
            category: (0, o.WZ)("Select & Move"),
          },
          {
            commandId: "selectAllDescendantTopics",
            label: (0, o.WZ)("Select All Subtopics"),
            category: (0, o.WZ)("Select & Move"),
          },
          {
            commandId: "selectAllSiblingTopics",
            label: (0, o.WZ)("Select All Siblings"),
            category: (0, o.WZ)("Select & Move"),
          },
          {
            commandId: "selectAllSameLevelTopics",
            label: (0, o.WZ)("Select All Same Level Topics"),
            category: (0, o.WZ)("Select & Move"),
          },
          {
            commandId: "selectAllFloatingTopics",
            label: (0, o.WZ)("Select All Floating Topics"),
            category: (0, o.WZ)("Select & Move"),
          },
          {
            commandId: "selectAllRelationships",
            label: (0, o.WZ)("Select All Relationships"),
            category: (0, o.WZ)("Select & Move"),
          },
          {
            commandId: "selectAllSummaryTopics",
            label: (0, o.WZ)("Select All Summaries"),
            category: (0, o.WZ)("Select & Move"),
          },
          {
            commandId: "selectAllBoundaries",
            label: (0, o.WZ)("Select All Boundaries"),
            category: (0, o.WZ)("Select & Move"),
          },
          {
            commandId: "selectAllImages",
            label: (0, o.WZ)("Select All Images"),
            category: (0, o.WZ)("Select & Move"),
          },
          {
            commandId: "selectAllEquations",
            label: (0, o.WZ)("Select All Equations"),
            category: (0, o.WZ)("Select & Move"),
          },
          {
            commandId: "selectAllCalloutTopics",
            label: (0, o.WZ)("Select All Callouts"),
            category: (0, o.WZ)("Select & Move"),
          },
          {
            commandId: "outliner.addTopic",
            label: (0, o.WZ)("Create Topic"),
            category: (0, o.WZ)("Select/Manipulate Topics (Outliner)"),
            groupName: "outliner",
          },
          {
            commandId: "outliner.deleteTopic",
            label: (0, o.WZ)("Quick-Delete Topic"),
            category: (0, o.WZ)("Select/Manipulate Topics (Outliner)"),
            groupName: "outliner",
          },
          {
            commandId: "outliner.indent",
            label: (0, o.WZ)("Indent"),
            category: (0, o.WZ)("Select/Manipulate Topics (Outliner)"),
            groupName: "outliner",
          },
          {
            commandId: "outliner.outdent",
            label: (0, o.WZ)("Outdent"),
            category: (0, o.WZ)("Select/Manipulate Topics (Outliner)"),
            groupName: "outliner",
          },
          {
            commandId: "outliner.multiSelectionNavigateUp",
            label: (0, o.WZ)("Multi-Select Topics Above"),
            category: (0, o.WZ)("Select/Manipulate Topics (Outliner)"),
            groupName: "outliner",
          },
          {
            commandId: "outliner.multiSelectionNavigateDown",
            label: (0, o.WZ)("Multi-Select Topics Below"),
            category: (0, o.WZ)("Select/Manipulate Topics (Outliner)"),
            groupName: "outliner",
          },
          {
            commandId: "outliner.exchangeSiblingTopicUp",
            label: (0, o.WZ)("Move Topic Up"),
            category: (0, o.WZ)("Select/Manipulate Topics (Outliner)"),
            groupName: "outliner",
          },
          {
            commandId: "outliner.exchangeSiblingTopicDown",
            label: (0, o.WZ)("Move Topic Down"),
            category: (0, o.WZ)("Select/Manipulate Topics (Outliner)"),
            groupName: "outliner",
          },
          {
            commandId: "editor.enterLineBreak",
            label: (0, o.WZ)("Enter Line Break"),
            category: (0, o.WZ)("Edit Text (Outliner)"),
            groupName: "outliner",
          },
          {
            commandId: "outliner.moveCaretCharacterToBeginning",
            label: (0, o.WZ)("Move to Beginning of Current Topic"),
            category: (0, o.WZ)("Edit Text (Outliner)"),
            groupName: "outliner",
          },
          {
            commandId: "outliner.moveCaretCharacterToEnd",
            label: (0, o.WZ)("Move to End of Current Topic"),
            category: (0, o.WZ)("Edit Text (Outliner)"),
            groupName: "outliner",
          },
          {
            commandId: "outliner.moveCaretCharacterToAboveSiblingTopic",
            label: (0, o.WZ)("Move to Previous Topic of Same Level"),
            category: (0, o.WZ)("Edit Text (Outliner)"),
            groupName: "outliner",
          },
          {
            commandId: "outliner.moveCaretCharacterToBelowSiblingTopic",
            label: (0, o.WZ)("Move to Next Topic of Same Level"),
            category: (0, o.WZ)("Edit Text (Outliner)"),
            groupName: "outliner",
          },
          {
            commandId: "workbench.switchToMapOrOutliner",
            label: (0, o.WZ)("Switch to Map/Outliner"),
            category: (0, o.WZ)("Adjust Map & View"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.toggleBranch",
            label: (0, o.WZ)("Fold/Unfold Subtopics"),
            category: (0, o.WZ)("Adjust Map & View"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.toggleBranchByNumber",
            label: (0, o.WZ)("Fold/Unfold Subtopics (Level 1~9)"),
            category: (0, o.WZ)("Adjust Map & View"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.toggleAllBranch",
            label: (0, o.WZ)("Fold/Unfold Sub-Branches"),
            category: (0, o.WZ)("Adjust Map & View"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.toggleBranchOnly",
            label: (0, o.WZ)("Show Branch Only"),
            category: (0, o.WZ)("Adjust Map & View"),
            isSupportedInOutliner: !0,
          },
          null,
          {
            commandId: "editor.zoomIn",
            label: (0, o.WZ)("Zoom In"),
            category: (0, o.WZ)("Adjust Map & View"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.zoomOut",
            label: (0, o.WZ)("Zoom Out"),
            category: (0, o.WZ)("Adjust Map & View"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.resetZoom",
            label: (0, o.WZ)("Actual Size"),
            category: (0, o.WZ)("Adjust Map & View"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.fitMap",
            label: (0, o.WZ)("Fit Map"),
            category: (0, o.WZ)("Adjust Map & View"),
          },
          {
            commandId: "frame.toggleTabbar",
            label: (0, o.WZ)("Show Tab Bar"),
            category: (0, o.WZ)("Adjust Map & View"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "workbench.toggleTopicNavigationPanel",
            label: (0, o.WZ)("Show Navigation Panel - Topic"),
            category: (0, o.WZ)("Adjust Map & View"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "workbench.toggleNoteNavigationPanel",
            label: (0, o.WZ)("Show Navigation Panel - Note"),
            category: (0, o.WZ)("Adjust Map & View"),
          },
          {
            commandId: "workbench.toggleLabelAndMarkerNavigationPanel",
            label: (0, o.WZ)("Show Navigation Panel - Marker & Label"),
            category: (0, o.WZ)("Adjust Map & View"),
          },
          {
            commandId: "workbench.toggleTopicPanel",
            label: (0, o.WZ)("Show Format Panel - Style"),
            category: (0, o.WZ)("Adjust Map & View"),
          },
          {
            commandId: "workbench.toggleSlidePanel",
            label: (0, o.WZ)("Show Format Panel - Pitch"),
            category: (0, o.WZ)("Adjust Map & View"),
          },
          {
            commandId: "workbench.toggleMapPanel",
            label: (0, o.WZ)("Show Format Panel - Map"),
            category: (0, o.WZ)("Adjust Map & View"),
          },
          {
            commandId: "workbench.toggleSkeletonPanel",
            label: (0, o.WZ)("Show Format Panel - Skeleton"),
            category: (0, o.WZ)("Adjust Map & View"),
          },
          {
            commandId: "workbench.toggleColorThemePanel",
            label: (0, o.WZ)("Show Format Panel - Color Theme"),
            category: (0, o.WZ)("Adjust Map & View"),
          },
          {
            commandId: "editor.toggleTopicCountLabel",
            label: (0, o.WZ)("Show Topic Count"),
            category: (0, o.WZ)("Adjust Map & View"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.toggleSheetBar",
            label: (0, o.WZ)("Show Sheet Bar"),
            category: (0, o.WZ)("Adjust Map & View"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "editor.toggleShowGuideline",
            label: (0, o.WZ)("Display/Hide Smart Guideline"),
            category: (0, o.WZ)("Adjust Map & View"),
          },
          {
            commandId: "workbench.exportPng1",
            label: (0, o.WZ)("Export to PNG"),
            category: (0, o.WZ)("Export"),
          },
          {
            commandId: "workbench.exportJpeg",
            label: (0, o.WZ)("Export to JPEG"),
            category: (0, o.WZ)("Export"),
          },
          {
            commandId: "workbench.exportSvg1",
            label: (0, o.WZ)("Export to SVG"),
            category: (0, o.WZ)("Export"),
          },
          {
            commandId: "workbench.exportPdf",
            label: (0, o.WZ)("Export to PDF"),
            category: (0, o.WZ)("Export"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "workbench.exportMd",
            label: (0, o.WZ)("Export to Markdown"),
            category: (0, o.WZ)("Export"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "workbench.exportWord",
            label: (0, o.WZ)("Export to Word"),
            category: (0, o.WZ)("Export"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "workbench.exportExcel",
            label: (0, o.WZ)("Export to Excel"),
            category: (0, o.WZ)("Export"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "workbench.exportOPML",
            label: (0, o.WZ)("Export to OPML"),
            category: (0, o.WZ)("Export"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "workbench.exportTextBundle",
            label: (0, o.WZ)("Export to TextBundle"),
            category: (0, o.WZ)("Export"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "mapShot",
            label: (0, o.WZ)("Map Shot"),
            category: (0, o.WZ)("Tools & Others"),
          },
          {
            commandId: "mergeXMindFiles",
            label: (0, o.WZ)("Merge Xmind Files"),
            category: (0, o.WZ)("Tools & Others"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "customizeTheme",
            label: (0, o.WZ)("Create/Customize Theme"),
            category: (0, o.WZ)("Tools & Others"),
          },
          {
            commandId: "createTheme",
            label: (0, o.WZ)("Create Theme"),
            category: (0, o.WZ)("Tools & Others"),
          },
          {
            commandId: "workbench.toggleZenMode",
            label: (0, o.WZ)("ZEN Mode"),
            category: (0, o.WZ)("Tools & Others"),
          },
          {
            commandId: "editor.enterPitchMode",
            label: (0, o.WZ)("Pitch Mode"),
            category: (0, o.WZ)("Tools & Others"),
          },
          {
            commandId: "editor.enterPitchModeWindowed",
            label: (0, o.WZ)("Pitch Mode - In Window"),
            category: (0, o.WZ)("Tools & Others"),
          },
          {
            commandId: "editor.enterPitchPresenterViewMode",
            label: (0, o.WZ)("Pitch Mode - Presenter View"),
            category: (0, o.WZ)("Tools & Others"),
          },
          {
            commandId: "keyAssist",
            label: (0, o.WZ)("Key Assist"),
            category: (0, o.WZ)("Tools & Others"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "workbench.setpassword",
            label: (0, o.WZ)("Set File Password "),
            category: (0, o.WZ)("Tools & Others"),
            isSupportedInOutliner: !0,
          },
          {
            commandId: "preferences",
            label: (0, o.WZ)("Preferences"),
            category: (0, o.WZ)("Tools & Others"),
            isSupportedInOutliner: !0,
          },
        ].filter(Boolean),
        a = [
          {
            commandId: "pitch.nextStep",
            label: (0, o.WZ)("Next Step"),
            category: (0, o.WZ)("Navigation"),
            accelerator: ["Space", "||", "→", "||", "↓"],
          },
          {
            commandId: "pitch.previousStep",
            label: (0, o.WZ)("Previous Step"),
            category: (0, o.WZ)("Navigation"),
            accelerator: ["←", "||", "↑"],
          },
          {
            commandId: "pitch.skipCurrentBranch",
            label: (0, o.WZ)("Skip Current Branch"),
            category: (0, o.WZ)("Navigation"),
            accelerator: ["Shift", "+", "→"],
          },
          {
            commandId: "pitch.backParentTopic",
            label: (0, o.WZ)("Back to Parent Topic"),
            category: (0, o.WZ)("Navigation"),
            accelerator: ["Shift", "+", "←"],
          },
          {
            commandId: "pitch.exit",
            label: (0, o.WZ)("Exit Pitch Mode"),
            category: (0, o.WZ)("Other"),
            accelerator: ["Esc", "||", "Q"],
          },
          {
            commandId: "pitch.toggleAnimation",
            label: (0, o.WZ)("Enable/disable Animation"),
            category: (0, o.WZ)("Other"),
            accelerator: ["A"],
          },
          {
            commandId: "pitch.showShortcuts",
            label: (0, o.WZ)("Show Keyboard Shortcuts"),
            category: (0, o.WZ)("Other"),
            accelerator: ["?"],
          },
        ],
        i = [
          "open",
          "saveAs",
          "save",
          "print",
          "closeSimpleWindow",
          "closeAllWindows",
          "frame.addNewTab",
          "frame.previousTab",
          "frame.nextTab",
          "undo",
          "redo",
          "cut",
          "copy",
          "paste",
          "duplicate",
          "delete",
          "selectAll",
          "switchBetweenXMindWindows",
          "workbench.toggleFindAndReplace",
          "editor.showEditBox",
          "editor.boldText",
          "editor.italicText",
          "editor.enterLineBreak",
          "editor.moveToBeginningOfText",
          "editor.moveToEndOfText",
          "editor.addSubTopic",
          "editor.addTopic",
          "editor.markPriorityByNumber",
          "editor.moveSelection",
          "editor.selectMultipleTopics",
          "toggleFullScreen",
          "editor.toggleBranchByNumber",
        ];
    },
    20993: (e, t, n) => {
      "use strict";
      n.d(t, {
        AZ: () => F,
        Ao: () => P,
        Bv: () => y,
        C3: () => I,
        CI: () => R,
        CN: () => T,
        DY: () => c,
        I1: () => f,
        JC: () => r,
        NK: () => d,
        Pr: () => p,
        TJ: () => b,
        Vs: () => O,
        Wr: () => C,
        Xz: () => N,
        Yj: () => S,
        Zk: () => u,
        _5: () => _,
        _6: () => W,
        cZ: () => w,
        cx: () => j,
        dx: () => v,
        fR: () => i,
        jB: () => m,
        kI: () => s,
        l5: () => a,
        p3: () => l,
        sF: () => A,
        sG: () => x,
        t0: () => B,
        wH: () => M,
        wp: () => h,
        xG: () => k,
        xg: () => Z,
        xy: () => g,
        yo: () => L,
        zH: () => E,
      });
      var o = n(18621);
      const r = (e) => (0, o.L9)({ eventName: "Gallery", eventAction: e }),
        a = () =>
          (0, o.L9)({ eventAction: "insertTask", eventName: "insertTask" }),
        i = (e) => (0, o.L9)({ eventAction: "editTask", eventName: e }),
        c = () =>
          (0, o.L9)({ eventAction: "cancelTask", eventName: "cancelTask" }),
        s = (e) => (0, o.L9)({ eventAction: "highlightTask", eventName: e }),
        l = (e) =>
          (0, o.L9)({ eventAction: "insertIllustration", eventName: e }),
        d = (e) =>
          (0, o.L9)({ eventAction: "searchIllustration", eventName: e }),
        u = (e) =>
          (0, o.L9)({ eventAction: "insertIllustrationPro", eventName: e }),
        p = (e, t, n) =>
          (0, o.L9)({
            eventAction: "openTemplateType",
            eventName: `${e}_${t}_${n}`,
          }),
        m = (e) => (0, o.L9)({ eventAction: "popPW", eventName: e }),
        v = (e) => (0, o.L9)({ eventAction: "clickPW", eventName: e }),
        f = () => {
          (0, o.L9)({ eventAction: "cancelOverlap" });
        },
        g = () => (0, o.L9)({ eventAction: "paymentPage" }),
        y = () => (0, o.L9)({ eventAction: "paymentPageCN" }),
        h = () => (0, o.L9)({ eventAction: "paymentSuccessful" }),
        b = () => (0, o.L9)({ eventAction: "paymentSuccessfulCN" }),
        w = (e) => (0, o.L9)({ eventName: "PWD-sp35-240515", eventAction: e }),
        S = () => (0, o.L9)({ eventAction: "sharetoCollaboration" }),
        Z = () => (0, o.L9)({ eventAction: "sharetoEvernote" }),
        x = (e) => (0, o.L9)({ eventAction: "pweDisplay", eventName: e }),
        I = (e) => (0, o.L9)({ eventAction: "pweContinue", eventName: e }),
        W = (e) => (0, o.L9)({ eventAction: "closePwe", eventName: e }),
        T = (e) => (0, o.L9)({ eventAction: "pweOrder", eventName: e }),
        O = (e) => (0, o.L9)({ eventAction: "purchaseSource", eventName: e }),
        k = (e) => (0, o.L9)({ eventAction: "purchaseWindow", eventName: e }),
        A = ({ region: e, productId: t }) =>
          (0, o.L9)({
            eventCategory: "Activate",
            eventAction: "clickSubscriptButton" + e.toLowerCase(),
            eventName: t,
          }),
        E = ({ region: e, productId: t }) =>
          (0, o.L9)({
            eventCategory: "Activate",
            eventAction: "clickSubscriptButtonMAS" + e.toLowerCase(),
            eventName: t,
          }),
        _ = () => (0, o.L9)({ eventAction: "autoDisconnect" }),
        N = () =>
          (0, o.L9)({
            eventAction: "disableSmartGuideline",
            eventName: "disableSmartGuideline",
          }),
        j = () =>
          (0, o.L9)({
            eventAction: "enableSmartGuideline",
            eventName: "enableSmartGuideline",
          }),
        L = () =>
          (0, o.L9)({
            eventAction: "clickSearchMaps",
            eventName: "clickSearchMaps",
          }),
        P = () =>
          (0, o.L9)({
            eventAction: "insertTaskInfo",
            eventName: "insertTaskInfo",
          }),
        C = () =>
          (0, o.L9)({
            eventAction: "removeTaskInfo",
            eventName: "removeTaskInfo",
          }),
        M = () =>
          (0, o.L9)({
            eventAction: "enableAutoCalculate",
            eventName: "enableAutoCalculate",
          }),
        B = () =>
          (0, o.L9)({
            eventAction: "disableAutoCalculate",
            eventName: "disableAutoCalculate",
          }),
        F = () =>
          (0, o.L9)({
            eventAction: "disableDisplayinTopic",
            eventName: "disableDisplayinTopic",
          }),
        R = () =>
          (0, o.L9)({
            eventAction: "enableDisplayinTopic",
            eventName: "enableDisplayinTopic",
          });
    },
    59474: (e, t, n) => {
      "use strict";
      n.d(t, { i: () => a });
      var o = n(77412),
        r = n(2954);
      const a = (0, o.Q_)("bootstrap", () => {
        const e = (0, r.iH)(!1),
          t = (0, r.iH)(0);
        return {
          ready: e,
          markReady: () => (e.value = !0),
          pendingJobs: t,
          startJob: () => (t.value += 1),
          endJob: () => (t.value -= 1),
        };
      });
    },
    65428: (e, t, n) => {
      "use strict";
      n.d(t, { r: () => c });
      var o = n(54856),
        r = n(77412),
        a = n(2954),
        i = n(90435);
      const c = (0, r.Q_)("fonts", () => {
        const e = (0, a.iH)(!1),
          t = (0, a.iH)({ systemFonts: {}, vanaFonts: {} });
        return {
          loaded: e,
          markLoaded: () => (e.value = !0),
          getLoadedFonts: async () => {
            if (
              !t.value ||
              (Object.keys(t.value.systemFonts).length <= 0 &&
                Object.keys(t.value.vanaFonts).length <= 0)
            ) {
              const e = await (0, i.he)(o.qz);
              t.value = e;
            }
            return t.value;
          },
        };
      });
    },
    7710: (e, t, n) => {
      "use strict";
      n.d(t, { l: () => a });
      var o = n(77412),
        r = n(2954);
      const a = (0, o.Q_)("query", () => {
        const e = (0, r.iH)({});
        return {
          query: e,
          setQuery: (t) => {
            e.value = t;
          },
        };
      });
    },
    2563: (e, t, n) => {
      "use strict";
      n.d(t, { O: () => a });
      var o = n(77412),
        r = n(2954);
      const a = (0, o.Q_)("renderer-app", () => {
        const e = (0, r.iH)(!1),
          t = (0, r.XI)([]),
          n = (0, r.XI)({}),
          o = (0, r.XI)([]);
        return {
          ignoreAppearanceChanged: e,
          updateIgnoreAppearance: (t) => {
            e.value = t;
          },
          builtinFontFamilies: t,
          updateBuiltinFontFamilies: (e) => (t.value = e),
          allFonts: n,
          updateAllFonts: (e) => (n.value = e),
          fontsForMindMap: o,
          updateFontsForMindMap: (e) => (o.value = e),
        };
      });
    },
    53775: (e, t, n) => {
      "use strict";
      async function o() {
        await new Promise((e) =>
          requestAnimationFrame(() => {
            requestAnimationFrame(e);
          })
        );
      }
      async function r(e) {
        return Promise.race([
          new Promise((e) =>
            requestAnimationFrame(() => {
              requestAnimationFrame(e);
            })
          ),
          new Promise((t) => setTimeout(t, null != e ? e : 200)),
        ]);
      }
      function a(e, t = 300, n = !1) {
        let o;
        function r(...t) {
          (o = void 0), n || e.apply(this, t);
        }
        const a = function (...a) {
          void 0 !== o && clearTimeout(o),
            n && !o && e.apply(this, a),
            (o = setTimeout(r.bind(this, ...a), t));
        };
        return (
          (a.cancel = function () {
            void 0 !== o && (clearTimeout(o), (o = void 0));
          }),
          a
        );
      }
      function i(e, t = 300, n = !1) {
        let o,
          r,
          a,
          i = !1;
        function c() {
          (r = Date.now()),
            e.apply(this, a),
            void 0 !== o && (clearTimeout(o), (o = void 0));
        }
        const s = function (...e) {
          if (i) return;
          if (((a = e), n && !r)) return void c.apply(this);
          const s = Date.now(),
            l = s - (null != r ? r : s);
          l >= t
            ? c.apply(this)
            : void 0 === o && (o = setTimeout(c.bind(this), t - l));
        };
        return (
          (s.cancel = function (e = !0) {
            void 0 !== o && (clearTimeout(o), (o = void 0)),
              (r = void 0),
              (i = e);
          }),
          s
        );
      }
      n.d(t, {
        Ds: () => a,
        P2: () => i,
        SX: () => o,
        gH: () => c,
        qJ: () => r,
      });
      const c = (e, t) => {
        let n = e,
          o = "";
        if ("object" == typeof t) {
          const e = new URLSearchParams();
          for (const n in t) e.append(n, t[n]);
          o = e.toString();
        }
        return (n = n.includes("?") ? n + "&" + o : n + "?" + o), n;
      };
    },
    3004: (e, t, n) => {
      "use strict";
      n.d(t, { Z: () => s });
      var o,
        r = n(2954),
        a = n(87141),
        i = n(69931);
      !(function (e) {
        (e.NO_RESULT = "NO_RESULT"),
          (e.NO_RESULT_AS_NETWORK = "NO_RESULT_AS_NETWORK"),
          (e.NO_NOTE = "NO_NOTE"),
          (e.NO_TAG = "NO_TAG"),
          (e.NO_SELECTION = "NO_SELECTION"),
          (e.NO_FORMAT_AVAILABLE = "NO_FORMAT_AVAILABLE"),
          (e.SLIDE_NO_SELECTION = "SLIDE_NO_SELECTION"),
          (e.BULB = "BULB");
      })(o || (o = {}));
      const c = (0, r.aZ)({
        __name: "common-none-panel",
        props: {
          type: { default: "NO_RESULT" },
          sectionStyle: { default: "" },
        },
        setup(e) {
          const t = e,
            n = (0, a.JE)().T,
            c = (0, r.Fl)(() => ({
              [o.NO_RESULT]: {
                image: (0, i.ju)(
                  "static/images/empty-panel-icon/no-result.svg"
                ),
                text: n("No results found."),
                spacing: "-1px",
              },
              [o.NO_RESULT_AS_NETWORK]: {
                image: (0, i.ju)(
                  "static/images/empty-panel-icon/no-result.svg"
                ),
                text: n(
                  "Please check your network connection and try again later."
                ),
                spacing: "-1px",
              },
              [o.NO_NOTE]: {
                image: (0, i.ju)("static/images/empty-panel-icon/no-note.svg"),
                text: n("No note exists."),
                spacing: "-3px",
              },
              [o.NO_TAG]: {
                image: (0, i.ju)("static/images/empty-panel-icon/no-tag.svg"),
                text: n("No marker, label or task exists."),
                spacing: "0px",
              },
              [o.NO_SELECTION]: {
                image: (0, i.ju)(
                  "static/images/empty-panel-icon/empty-selection.svg"
                ),
                text: n("Select an object to format."),
                spacing: "-2px",
              },
              [o.NO_FORMAT_AVAILABLE]: {
                image: (0, i.ju)(
                  "static/images/empty-panel-icon/no-format-available.svg"
                ),
                text: n("This object can't be formatted."),
                spacing: "5px",
              },
              [o.SLIDE_NO_SELECTION]: {
                image: (0, i.ju)(
                  "static/images/empty-panel-icon/slide-empty-selection.svg"
                ),
                text: n("Select a topic to format."),
                spacing: "-2px",
              },
              [o.BULB]: {
                image: (0, i.ju)(
                  "static/images/empty-panel-icon/zen-mode-bulb.svg"
                ),
                text: n(
                  "Please switch to original appearance to enable format options."
                ),
                spacing: "5px",
              },
            })),
            s = (0, r.Fl)(() => c.value[t.type] || c.value[o.NO_RESULT]);
          return {
            __sfc: !0,
            NonePanelType: o,
            props: t,
            $T: n,
            noneTabs: c,
            noneTab: s,
          };
        },
      });
      const s = (0, n(51900).Z)(
        c,
        function () {
          var e = this,
            t = e._self._c,
            n = e._self._setupProxy;
          return t(
            "div",
            {
              staticClass:
                "uk-panel uk-height-expand uk-flex uk-flex-column uk-flex-center uk-width-1-1 uk-common-none-panel",
            },
            [
              t(
                "div",
                { staticClass: "uk-panel", style: e.sectionStyle },
                [
                  t("div", { staticClass: "uk-common-none-panel-icon" }, [
                    t("img", {
                      staticStyle: { height: "60px", width: "60px" },
                      attrs: {
                        draggable: "false",
                        src: n.noneTab.image,
                        "uk-svg": "",
                      },
                    }),
                  ]),
                  e._v(" "),
                  n.noneTab.text
                    ? t(
                        "div",
                        {
                          staticClass: "uk-common-none-panel-text",
                          style: { marginTop: n.noneTab.spacing },
                        },
                        [e._v("\n      " + e._s(n.noneTab.text) + "\n    ")]
                      )
                    : e._e(),
                  e._v(" "),
                  e._t("none-text"),
                ],
                2
              ),
            ]
          );
        },
        [],
        !1,
        null,
        "52381148",
        null
      ).exports;
    },
    9065: (e, t, n) => {
      var o = n(41118);
      o.__esModule && (o = o.default),
        "string" == typeof o && (o = [[e.id, o, ""]]),
        o.locals && (e.exports = o.locals);
      (0, n(45346).Z)("66e0a197", o, !0, {});
    },
    45346: (e, t, n) => {
      "use strict";
      function o(e, t) {
        for (var n = [], o = {}, r = 0; r < t.length; r++) {
          var a = t[r],
            i = a[0],
            c = { id: e + ":" + r, css: a[1], media: a[2], sourceMap: a[3] };
          o[i] ? o[i].parts.push(c) : n.push((o[i] = { id: i, parts: [c] }));
        }
        return n;
      }
      n.d(t, { Z: () => v });
      var r = "undefined" != typeof document;
      if ("undefined" != typeof DEBUG && DEBUG && !r)
        throw new Error(
          "vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
        );
      var a = {},
        i = r && (document.head || document.getElementsByTagName("head")[0]),
        c = null,
        s = 0,
        l = !1,
        d = function () {},
        u = null,
        p = "data-vue-ssr-id",
        m =
          "undefined" != typeof navigator &&
          /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
      function v(e, t, n, r) {
        (l = n), (u = r || {});
        var i = o(e, t);
        return (
          f(i),
          function (t) {
            for (var n = [], r = 0; r < i.length; r++) {
              var c = i[r];
              (s = a[c.id]).refs--, n.push(s);
            }
            t ? f((i = o(e, t))) : (i = []);
            for (r = 0; r < n.length; r++) {
              var s;
              if (0 === (s = n[r]).refs) {
                for (var l = 0; l < s.parts.length; l++) s.parts[l]();
                delete a[s.id];
              }
            }
          }
        );
      }
      function f(e) {
        for (var t = 0; t < e.length; t++) {
          var n = e[t],
            o = a[n.id];
          if (o) {
            o.refs++;
            for (var r = 0; r < o.parts.length; r++) o.parts[r](n.parts[r]);
            for (; r < n.parts.length; r++) o.parts.push(y(n.parts[r]));
            o.parts.length > n.parts.length &&
              (o.parts.length = n.parts.length);
          } else {
            var i = [];
            for (r = 0; r < n.parts.length; r++) i.push(y(n.parts[r]));
            a[n.id] = { id: n.id, refs: 1, parts: i };
          }
        }
      }
      function g() {
        var e = document.createElement("style");
        return (e.type = "text/css"), i.appendChild(e), e;
      }
      function y(e) {
        var t,
          n,
          o = document.querySelector("style[" + p + '~="' + e.id + '"]');
        if (o) {
          if (l) return d;
          o.parentNode.removeChild(o);
        }
        if (m) {
          var r = s++;
          (o = c || (c = g())),
            (t = w.bind(null, o, r, !1)),
            (n = w.bind(null, o, r, !0));
        } else
          (o = g()),
            (t = S.bind(null, o)),
            (n = function () {
              o.parentNode.removeChild(o);
            });
        return (
          t(e),
          function (o) {
            if (o) {
              if (
                o.css === e.css &&
                o.media === e.media &&
                o.sourceMap === e.sourceMap
              )
                return;
              t((e = o));
            } else n();
          }
        );
      }
      var h,
        b =
          ((h = []),
          function (e, t) {
            return (h[e] = t), h.filter(Boolean).join("\n");
          });
      function w(e, t, n, o) {
        var r = n ? "" : o.css;
        if (e.styleSheet) e.styleSheet.cssText = b(t, r);
        else {
          var a = document.createTextNode(r),
            i = e.childNodes;
          i[t] && e.removeChild(i[t]),
            i.length ? e.insertBefore(a, i[t]) : e.appendChild(a);
        }
      }
      function S(e, t) {
        var n = t.css,
          o = t.media,
          r = t.sourceMap;
        if (
          (o && e.setAttribute("media", o),
          u.ssrId && e.setAttribute(p, t.id),
          r &&
            ((n += "\n/*# sourceURL=" + r.sources[0] + " */"),
            (n +=
              "\n/*# sourceMappingURL=data:application/json;base64," +
              btoa(unescape(encodeURIComponent(JSON.stringify(r)))) +
              " */")),
          e.styleSheet)
        )
          e.styleSheet.cssText = n;
        else {
          for (; e.firstChild; ) e.removeChild(e.firstChild);
          e.appendChild(document.createTextNode(n));
        }
      }
    },
    6113: (e) => {
      "use strict";
      e.exports = require("crypto");
    },
    72298: (e) => {
      "use strict";
      e.exports = require("electron");
    },
    82361: (e) => {
      "use strict";
      e.exports = require("events");
    },
    57147: (e) => {
      "use strict";
      e.exports = require("fs");
    },
    22037: (e) => {
      "use strict";
      e.exports = require("os");
    },
    71017: (e) => {
      "use strict";
      e.exports = require("path");
    },
    63477: (e) => {
      "use strict";
      e.exports = require("querystring");
    },
    57310: (e) => {
      "use strict";
      e.exports = require("url");
    },
    73837: (e) => {
      "use strict";
      e.exports = require("util");
    },
  },
  (e) => {
    e.O(0, [8592, 8970], () => {
      return (t = 16217), e((e.s = t));
      var t;
    });
    var t = e.O();
    module.exports = t;
  },
]);
