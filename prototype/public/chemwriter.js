/*
 * ChemWriter (R)
 *
 * Copyright (c) 2007-2017 Metamolecular, LLC. All Rights Reserved.
 *
 * Any unauthorized reproduction, use, or modification of this work
 * is prohibited.
 *
 * Contact:
 *
 * Metamolecular, LLC
 * 8070 La Jolla Shores Drive #464
 * La Jolla, CA 92037
 * 858.754.9396
 * support@metamolecular.com
 * http://metamolecular.com
 *
 * This work contains font path data extracted from the Nobile font, Copyright(c) 2010,
 * Vernon Adams (http://www.newtypography.co.uk/nobile/), with Reserved Font Name Nobile.
 * Nobile is licensed under the SIL Open Font License, Version 1.1. This license is available
 * at: http://metamolecular.com/third-party-licenses/ofl.txt
 *
 * This work contains code compiled from the Google Closure Library, Copyright 2006 The
 * Closure Library Authors and licensed under the Apache License Version 2.0. This license is
 * available at: http://metamolecular.com/third-party-licenses/apache.txt
 *
 * This work contains code adapted from the Apache Harmony Project, Copyright 2006, 2010
 * The Apache Software Foundation and licensed under the Apache License Version 2.0. This
 * license is available at:
 * http://metamolecular.com/third-party-licenses/apache.txt
 *
 * This work contains code adapted from Bits.js, Copyright 2011 IvÃ¡n -DrSlump-
 * Montes and licensed under the MIT License. This license is available at:
 * http://metamolecular.com/third-party-licenses/mit.txt
 *
 * This work contains code adapted from bloomfilter.js, Copyright 2011 by
 * Jason Davies and licenced under the BSD License. This license is available at:
 * http://metamolecular.com/third-party-licenses/bsd.txt
 */
(function() {
     var f, ca = this;

     function da(a) {
          return void 0 !== a
     }

     function ea(a, b) {
          var c = a.split("."),
               d = ca;
          c[0] in d || !d.execScript || d.execScript("var " + c[0]);
          for (var e; c.length && (e = c.shift());) !c.length && da(b) ? d[e] = b : d[e] ? d = d[e] : d = d[e] = {}
     }

     function fa(a) {
          var b = typeof a;
          if ("object" == b)
               if (a) {
                    if (a instanceof Array) return "array";
                    if (a instanceof Object) return b;
                    var c = Object.prototype.toString.call(a);
                    if ("[object Window]" == c) return "object";
                    if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
                    if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
               } else return "null";
          else if ("function" == b && "undefined" == typeof a.call) return "object";
          return b
     }

     function ga(a) {
          return "array" == fa(a)
     }

     function ha(a) {
          var b = fa(a);
          return "array" == b || "object" == b && "number" == typeof a.length
     }

     function l(a) {
          return "string" == typeof a
     }

     function p(a) {
          return "number" == typeof a
     }

     function ia(a) {
          var b = typeof a;
          return "object" == b && null != a || "function" == b
     }

     function q(a) {
          return a[ja] || (a[ja] = ++ka)
     }
     var ja = "closure_uid_" + (1E9 * Math.random() >>> 0),
          ka = 0;

     function la(a, b, c) {
          return a.call.apply(a.bind, arguments)
     }

     function ma(a, b, c) {
          if (!a) throw Error();
          if (2 < arguments.length) {
               var d = Array.prototype.slice.call(arguments, 2);
               return function() {
                    var c = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(c, d);
                    return a.apply(b, c)
               }
          }
          return function() {
               return a.apply(b, arguments)
          }
     }

     function na(a, b, c) {
          na = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? la : ma;
          return na.apply(null, arguments)
     }
     var oa = Date.now || function() {
          return +new Date
     };

     function t(a, b) {
          function c() {}
          c.prototype = b.prototype;
          a.ia = b.prototype;
          a.prototype = new c;
          a.prototype.constructor = a;
          a.tf = function(a, c, g) {
               for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) d[e - 2] = arguments[e];
               return b.prototype[c].apply(a, d)
          }
     };

     function pa(a) {
          if (Error.captureStackTrace) Error.captureStackTrace(this, pa);
          else {
               var b = Error().stack;
               b && (this.stack = b)
          }
          a && (this.message = String(a))
     }
     t(pa, Error);
     pa.prototype.name = "CustomError";
     var qa;

     function ra(a, b) {
          for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;) d += c.shift() + e.shift();
          return d + c.join("%s")
     }
     var sa = String.prototype.trim ? function(a) {
          return a.trim()
     } : function(a) {
          return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
     };

     function ta(a) {
          if (!ua.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(va, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(wa, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(xa, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(ya, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(za, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Aa, "&#0;"));
          return a
     }
     var va = /&/g,
          wa = /</g,
          xa = />/g,
          ya = /"/g,
          za = /'/g,
          Aa = /\x00/g,
          ua = /[\x00&<>"']/;

     function Ba(a, b) {
          return a < b ? -1 : a > b ? 1 : 0
     };

     function Ca(a, b) {
          b.unshift(a);
          pa.call(this, ra.apply(null, b));
          b.shift()
     }
     t(Ca, pa);
     Ca.prototype.name = "AssertionError";

     function Fa(a, b) {
          throw new Ca("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
     };

     function Ga(a) {
          return a[a.length - 1]
     }
     var Ha = Array.prototype.indexOf ? function(a, b, c) {
               return Array.prototype.indexOf.call(a, b, c)
          } : function(a, b, c) {
               c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
               if (l(a)) return l(b) && 1 == b.length ? a.indexOf(b, c) : -1;
               for (; c < a.length; c++)
                    if (c in a && a[c] === b) return c;
               return -1
          },
          Ia = Array.prototype.forEach ? function(a, b, c) {
               Array.prototype.forEach.call(a, b, c)
          } : function(a, b, c) {
               for (var d = a.length, e = l(a) ? a.split("") : a, g = 0; g < d; g++) g in e && b.call(c, e[g], g, a)
          },
          Ja = Array.prototype.filter ? function(a, b, c) {
               return Array.prototype.filter.call(a,
                    b, c)
          } : function(a, b, c) {
               for (var d = a.length, e = [], g = 0, h = l(a) ? a.split("") : a, k = 0; k < d; k++)
                    if (k in h) {
                         var m = h[k];
                         b.call(c, m, k, a) && (e[g++] = m)
                    }
               return e
          },
          Ka = Array.prototype.map ? function(a, b, c) {
               return Array.prototype.map.call(a, b, c)
          } : function(a, b, c) {
               for (var d = a.length, e = Array(d), g = l(a) ? a.split("") : a, h = 0; h < d; h++) h in g && (e[h] = b.call(c, g[h], h, a));
               return e
          };

     function La(a, b) {
          var c = Ha(a, b),
               d;
          (d = 0 <= c) && Array.prototype.splice.call(a, c, 1);
          return d
     }

     function Ma(a) {
          var b = a.length;
          if (0 < b) {
               for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
               return c
          }
          return []
     }

     function Na(a, b, c, d) {
          Array.prototype.splice.apply(a, Oa(arguments, 1))
     }

     function Oa(a, b, c) {
          return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
     }

     function Pa(a, b) {
          return a > b ? 1 : a < b ? -1 : 0
     };
     var Qa;
     a: {
          var Ra = ca.navigator;
          if (Ra) {
               var Sa = Ra.userAgent;
               if (Sa) {
                    Qa = Sa;
                    break a
               }
          }
          Qa = ""
     }

     function u(a) {
          return -1 != Qa.indexOf(a)
     };

     function Ta(a, b) {
          for (var c in a) b.call(void 0, a[c], c, a)
     }
     var Va = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

     function Wa(a, b) {
          for (var c, d, e = 1; e < arguments.length; e++) {
               d = arguments[e];
               for (c in d) a[c] = d[c];
               for (var g = 0; g < Va.length; g++) c = Va[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
          }
     }

     function Xa(a) {
          var b = arguments.length;
          if (1 == b && ga(arguments[0])) return Xa.apply(null, arguments[0]);
          for (var c = {}, d = 0; d < b; d++) c[arguments[d]] = !0;
          return c
     };

     function Ya() {
          return (u("Chrome") || u("CriOS")) && !u("Edge")
     };

     function Za(a) {
          Za[" "](a);
          return a
     }
     Za[" "] = function() {};

     function $a(a, b) {
          var c = ab;
          return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
     };
     var bb = u("Opera"),
          cb = u("Trident") || u("MSIE"),
          db = u("Edge"),
          eb = u("Gecko") && !(-1 != Qa.toLowerCase().indexOf("webkit") && !u("Edge")) && !(u("Trident") || u("MSIE")) && !u("Edge"),
          fb = -1 != Qa.toLowerCase().indexOf("webkit") && !u("Edge"),
          v = u("Macintosh"),
          gb = u("Windows"),
          hb = u("Linux") || u("CrOS");

     function ib() {
          var a = ca.document;
          return a ? a.documentMode : void 0
     }
     var jb;
     a: {
          var kb = "",
               lb = function() {
                    var a = Qa;
                    if (eb) return /rv\:([^\);]+)(\)|;)/.exec(a);
                    if (db) return /Edge\/([\d\.]+)/.exec(a);
                    if (cb) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                    if (fb) return /WebKit\/(\S+)/.exec(a);
                    if (bb) return /(?:Version)[ \/]?(\S+)/.exec(a)
               }();lb && (kb = lb ? lb[1] : "");
          if (cb) {
               var mb = ib();
               if (null != mb && mb > parseFloat(kb)) {
                    jb = String(mb);
                    break a
               }
          }
          jb = kb
     }
     var ab = {};

     function ob(a) {
          return $a(a, function() {
               for (var b = 0, c = sa(String(jb)).split("."), d = sa(String(a)).split("."), e = Math.max(c.length, d.length), g = 0; !b && g < e; g++) {
                    var h = c[g] || "",
                         k = d[g] || "";
                    do {
                         h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
                         k = /(\d*)(\D*)(.*)/.exec(k) || ["", "", "", ""];
                         if (0 == h[0].length && 0 == k[0].length) break;
                         b = Ba(0 == h[1].length ? 0 : parseInt(h[1], 10), 0 == k[1].length ? 0 : parseInt(k[1], 10)) || Ba(0 == h[2].length, 0 == k[2].length) || Ba(h[2], k[2]);
                         h = h[3];
                         k = k[3]
                    } while (!b)
               }
               return 0 <= b
          })
     }
     var pb;
     var qb = ca.document;
     pb = qb && cb ? ib() || ("CSS1Compat" == qb.compatMode ? parseInt(jb, 10) : 5) : void 0;
     var rb = !cb || 9 <= Number(pb);

     function sb(a, b, c) {
          return a + c * (b - a)
     };

     function w(a, b) {
          this.x = da(a) ? a : 0;
          this.y = da(b) ? b : 0
     }
     f = w.prototype;
     f.clone = function() {
          return new w(this.x, this.y)
     };
     f.toString = function() {
          return "(" + this.x + ", " + this.y + ")"
     };
     f.ceil = function() {
          this.x = Math.ceil(this.x);
          this.y = Math.ceil(this.y);
          return this
     };
     f.floor = function() {
          this.x = Math.floor(this.x);
          this.y = Math.floor(this.y);
          return this
     };
     f.round = function() {
          this.x = Math.round(this.x);
          this.y = Math.round(this.y);
          return this
     };
     f.translate = function(a, b) {
          a instanceof w ? (this.x += a.x, this.y += a.y) : (this.x += Number(a), p(b) && (this.y += b));
          return this
     };
     f.scale = function(a, b) {
          var c = p(b) ? b : a;
          this.x *= a;
          this.y *= c;
          return this
     };

     function tb(a, b) {
          Ta(b, function(b, d) {
               "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : ub.hasOwnProperty(d) ? a.setAttribute(ub[d], b) : d.lastIndexOf("aria-", 0) && d.lastIndexOf("data-", 0) ? a[d] = b : a.setAttribute(d, b)
          })
     }
     var ub = {
          cellpadding: "cellPadding",
          cellspacing: "cellSpacing",
          colspan: "colSpan",
          frameborder: "frameBorder",
          height: "height",
          maxlength: "maxLength",
          nonce: "nonce",
          role: "role",
          rowspan: "rowSpan",
          type: "type",
          usemap: "useMap",
          valign: "vAlign",
          width: "width"
     };

     function x(a, b, c) {
          return vb(document, arguments)
     }

     function vb(a, b) {
          var c = String(b[0]),
               d = b[1];
          if (!rb && d && (d.name || d.type)) {
               c = ["<", c];
               d.name && c.push(' name="', ta(d.name), '"');
               if (d.type) {
                    c.push(' type="', ta(d.type), '"');
                    var e = {};
                    Wa(e, d);
                    delete e.type;
                    d = e
               }
               c.push(">");
               c = c.join("")
          }
          c = a.createElement(c);
          d && (l(d) ? c.className = d : ga(d) ? c.className = d.join(" ") : tb(c, d));
          2 < b.length && wb(a, c, b, 2);
          return c
     }

     function wb(a, b, c, d) {
          function e(c) {
               c && b.appendChild(l(c) ? a.createTextNode(c) : c)
          }
          for (; d < c.length; d++) {
               var g = c[d];
               !ha(g) || ia(g) && 0 < g.nodeType ? e(g) : Ia(xb(g) ? Ma(g) : g, e)
          }
     }

     function yb(a) {
          a && a.parentNode && a.parentNode.removeChild(a)
     }

     function xb(a) {
          if (a && "number" == typeof a.length) {
               if (ia(a)) return "function" == typeof a.item || "string" == typeof a.item;
               if ("function" == fa(a)) return "function" == typeof a.item
          }
          return !1
     }

     function zb(a) {
          this.$ = a || ca.document || document
     }
     zb.prototype.fa = function(a) {
          return l(a) ? this.$.getElementById(a) : a
     };
     zb.prototype.aa = function(a, b, c) {
          return vb(this.$, arguments)
     };
     zb.prototype.append = function(a, b) {
          wb(9 == a.nodeType ? a : a.ownerDocument || a.document, a, arguments, 1)
     };
     var Ab = !cb || 9 <= Number(pb),
          Bb = cb && !ob("9");

     function Cb() {
          0 != Db && (Eb[q(this)] = this);
          this.pc = this.pc;
          this.Kc = this.Kc
     }
     var Db = 0,
          Eb = {};
     Cb.prototype.pc = !1;

     function Fb(a) {
          a.pc || (a.pc = !0, a.lb(), 0 != Db && (a = q(a), delete Eb[a]))
     }
     Cb.prototype.lb = function() {
          if (this.Kc)
               for (; this.Kc.length;) this.Kc.shift()()
     };

     function y(a, b) {
          this.type = a;
          this.aa = this.target = b;
          this.ca = !1;
          this.Sd = !0
     }
     y.prototype.stopPropagation = function() {
          this.ca = !0
     };
     y.prototype.preventDefault = function() {
          this.Sd = !1
     };

     function z(a, b) {
          y.call(this, a ? a.type : "");
          this.relatedTarget = this.aa = this.target = null;
          this.keyCode = this.button = this.clientY = this.clientX = 0;
          this.metaKey = this.shiftKey = this.$ = this.ctrlKey = !1;
          this.Hb = null;
          a && this.Yc(a, b)
     }
     t(z, y);
     z.prototype.Yc = function(a, b) {
          var c = this.type = a.type,
               d = a.changedTouches ? a.changedTouches[0] : null;
          this.target = a.target || a.srcElement;
          this.aa = b;
          var e = a.relatedTarget;
          if (e) {
               if (eb) {
                    var g;
                    a: {
                         try {
                              Za(e.nodeName);
                              g = !0;
                              break a
                         } catch (h) {}
                         g = !1
                    }
                    g || (e = null)
               }
          } else "mouseover" == c ? e = a.fromElement : "mouseout" == c && (e = a.toElement);
          this.relatedTarget = e;
          null === d ? (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY) : (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY =
               void 0 !== d.clientY ? d.clientY : d.pageY);
          this.button = a.button;
          this.keyCode = a.keyCode || 0;
          this.ctrlKey = a.ctrlKey;
          this.$ = a.altKey;
          this.shiftKey = a.shiftKey;
          this.metaKey = a.metaKey;
          this.Hb = a;
          a.defaultPrevented && this.preventDefault()
     };
     z.prototype.stopPropagation = function() {
          z.ia.stopPropagation.call(this);
          this.Hb.stopPropagation ? this.Hb.stopPropagation() : this.Hb.cancelBubble = !0
     };
     z.prototype.preventDefault = function() {
          z.ia.preventDefault.call(this);
          var a = this.Hb;
          if (a.preventDefault) a.preventDefault();
          else if (a.returnValue = !1, Bb) try {
               if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
          } catch (b) {}
     };
     var Gb = "closure_listenable_" + (1E6 * Math.random() | 0),
          Jb = 0;

     function Kb(a, b, c, d, e) {
          this.listener = a;
          this.$ = null;
          this.src = b;
          this.type = c;
          this.capture = !!d;
          this.Fc = e;
          this.key = ++Jb;
          this.dc = this.xc = !1
     }

     function Lb(a) {
          a.dc = !0;
          a.listener = null;
          a.$ = null;
          a.src = null;
          a.Fc = null
     };

     function Mb(a) {
          this.src = a;
          this.$ = {};
          this.aa = 0
     }
     Mb.prototype.add = function(a, b, c, d, e) {
          var g = a.toString();
          a = this.$[g];
          a || (a = this.$[g] = [], this.aa++);
          var h = Nb(a, b, d, e); - 1 < h ? (b = a[h], c || (b.xc = !1)) : (b = new Kb(b, this.src, g, !!d, e), b.xc = c, a.push(b));
          return b
     };
     Mb.prototype.remove = function(a, b, c, d) {
          a = a.toString();
          if (!(a in this.$)) return !1;
          var e = this.$[a];
          b = Nb(e, b, c, d);
          return -1 < b ? (Lb(e[b]), Array.prototype.splice.call(e, b, 1), e.length || (delete this.$[a], this.aa--), !0) : !1
     };

     function Ob(a, b) {
          var c = b.type;
          c in a.$ && La(a.$[c], b) && (Lb(b), a.$[c].length || (delete a.$[c], a.aa--))
     }

     function Nb(a, b, c, d) {
          for (var e = 0; e < a.length; ++e) {
               var g = a[e];
               if (!g.dc && g.listener == b && g.capture == !!c && g.Fc == d) return e
          }
          return -1
     };
     var Pb = "closure_lm_" + (1E6 * Math.random() | 0),
          Qb = {},
          Rb = 0;

     function A(a, b, c, d, e) {
          if (ga(b)) {
               for (var g = 0; g < b.length; g++) A(a, b[g], c, d, e);
               return null
          }
          c = Sb(c);
          return a && a[Gb] ? a.Ja.add(String(b), c, !1, d, e) : Tb(a, b, c, !1, d, e)
     }

     function Tb(a, b, c, d, e, g) {
          if (!b) throw Error("Invalid event type");
          var h = !!e,
               k = Ub(a);
          k || (a[Pb] = k = new Mb(a));
          c = k.add(b, c, d, e, g);
          if (c.$) return c;
          d = Vb();
          c.$ = d;
          d.src = a;
          d.listener = c;
          if (a.addEventListener) a.addEventListener(b.toString(), d, h);
          else if (a.attachEvent) a.attachEvent(Wb(b.toString()), d);
          else throw Error("addEventListener and attachEvent are unavailable.");
          Rb++;
          return c
     }

     function Vb() {
          var a = Xb,
               b = Ab ? function(c) {
                    return a.call(b.src, b.listener, c)
               } : function(c) {
                    c = a.call(b.src, b.listener, c);
                    if (!c) return c
               };
          return b
     }

     function Yb(a, b, c, d, e) {
          if (ga(b))
               for (var g = 0; g < b.length; g++) Yb(a, b[g], c, d, e);
          else c = Sb(c), a && a[Gb] ? a.Ja.add(String(b), c, !0, d, e) : Tb(a, b, c, !0, d, e)
     }

     function C(a, b, c, d, e) {
          if (ga(b))
               for (var g = 0; g < b.length; g++) C(a, b[g], c, d, e);
          else(c = Sb(c), a && a[Gb]) ? a.Ja.remove(String(b), c, d, e) : a && (a = Ub(a)) && (b = a.$[b.toString()], a = -1, b && (a = Nb(b, c, !!d, e)), (c = -1 < a ? b[a] : null) && Zb(c))
     }

     function Zb(a) {
          if (!p(a) && a && !a.dc) {
               var b = a.src;
               if (b && b[Gb]) Ob(b.Ja, a);
               else {
                    var c = a.type,
                         d = a.$;
                    b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent && b.detachEvent(Wb(c), d);
                    Rb--;
                    (c = Ub(b)) ? (Ob(c, a), c.aa || (c.src = null, b[Pb] = null)) : Lb(a)
               }
          }
     }

     function Wb(a) {
          return a in Qb ? Qb[a] : Qb[a] = "on" + a
     }

     function $b(a, b, c, d) {
          var e = !0;
          if (a = Ub(a))
               if (b = a.$[b.toString()])
                    for (b = b.concat(), a = 0; a < b.length; a++) {
                         var g = b[a];
                         g && g.capture == c && !g.dc && (g = ac(g, d), e = e && !1 !== g)
                    }
          return e
     }

     function ac(a, b) {
          var c = a.listener,
               d = a.Fc || a.src;
          a.xc && Zb(a);
          return c.call(d, b)
     }

     function Xb(a, b) {
          if (a.dc) return !0;
          if (!Ab) {
               var c;
               if (!(c = b)) a: {
                    c = ["window", "event"];
                    for (var d = ca, e; e = c.shift();)
                         if (null != d[e]) d = d[e];
                         else {
                              c = null;
                              break a
                         }
                    c = d
               }
               e = c;
               c = new z(e, this);
               d = !0;
               if (!(0 > e.keyCode || void 0 != e.returnValue)) {
                    a: {
                         var g = !1;
                         if (!e.keyCode) try {
                              e.keyCode = -1;
                              break a
                         } catch (m) {
                              g = !0
                         }
                         if (g || void 0 == e.returnValue) e.returnValue = !0
                    }
                    e = [];
                    for (g = c.aa; g; g = g.parentNode) e.push(g);
                    for (var g = a.type, h = e.length - 1; !c.ca && 0 <= h; h--) {
                         c.aa = e[h];
                         var k = $b(e[h], g, !0, c),
                              d = d && k
                    }
                    for (h = 0; !c.ca && h < e.length; h++) c.aa = e[h],
                    k = $b(e[h], g, !1, c),
                    d = d && k
               }
               return d
          }
          return ac(a, new z(b, this))
     }

     function Ub(a) {
          a = a[Pb];
          return a instanceof Mb ? a : null
     }
     var bc = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

     function Sb(a) {
          if ("function" == fa(a)) return a;
          a[bc] || (a[bc] = function(b) {
               return a.handleEvent(b)
          });
          return a[bc]
     };
     var cc = Array(4).join(String.fromCharCode(119));

     function D(a, b, c, d) {
          a = a.substring(b, c).trim();
          if (a === dc) return 0;
          a -= 0;
          if (isNaN(a)) throw ec;
          return a ? a : d || 0
     }

     function E(a, b, c, d) {
          fc(a, b, c, -1, d)
     }

     function fc(a, b, c, d, e) {
          a.toFixed && (a = a.toFixed(e || 0));
          c -= a.length;
          if (0 > c) throw gc;
          e = "";
          for (var g = 0; g < c; g++) e += " ";
          1 === d ? (b.append(a), b.append(e)) : -1 === d && (b.append(e), b.append(a))
     }
     var hc = /\\n/g,
          dc = "",
          ec = "string-number-format",
          gc = "string-too-long";

     function ic(a) {
          var b = a.getAttribute("id"),
               b = b ? x("div", {
                    "class": "chemwriter",
                    id: b
               }) : x("div", {
                    "class": "chemwriter"
               }),
               c = a.getAttribute("data-chemwriter-width");
          a = (a = a.getAttribute("data-chemwriter-height")) ? a + "px" : "100%";
          if (void 0 == a) throw Error("missing height argument");
          b.style.width = lc(c ? c + "px" : "100%");
          b.style.height = lc(a);
          return b
     }

     function mc(a, b) {
          var c = document.createElementNS("http://www.w3.org/2000/svg", a);
          if (b)
               for (var d in b) c.setAttribute(d, b[d]);
          return c
     }

     function nc(a, b) {
          b ? (a.setAttribute("fill", b.aa), 1 !== b.$ && a.setAttribute("fill-opacity", b.$)) : a.setAttribute("fill", "none")
     }

     function oc(a, b) {
          a.setAttribute("stroke", b.da);
          a.setAttribute("stroke-width", b.Ib());
          1 !== b.ca && a.setAttribute("stroke-opacity", b.ca);
          0 < b.$.length && a.setAttribute("stroke-dasharray", b.$.join(",").toString())
     };

     function F() {
          Cb.call(this);
          this.Ja = new Mb(this);
          this.Ud = this;
          this.Lc = null
     }
     t(F, Cb);
     F.prototype[Gb] = !0;
     F.prototype.Da = function(a) {
          this.Lc = a
     };
     F.prototype.Vd = function(a, b, c, d) {
          A(this, a, b, c, d)
     };
     F.prototype.removeEventListener = function(a, b, c, d) {
          C(this, a, b, c, d)
     };

     function G(a, b) {
          var c, d = a.Lc;
          if (d)
               for (c = []; d; d = d.Lc) c.push(d);
          var d = a.Ud,
               e = b,
               g = e.type || e;
          if (l(e)) e = new y(e, d);
          else if (e instanceof y) e.target = e.target || d;
          else {
               var h = e,
                    e = new y(g, d);
               Wa(e, h)
          }
          var h = !0,
               k;
          if (c)
               for (var m = c.length - 1; !e.ca && 0 <= m; m--) k = e.aa = c[m], h = pc(k, g, !0, e) && h;
          e.ca || (k = e.aa = d, h = pc(k, g, !0, e) && h, e.ca || (h = pc(k, g, !1, e) && h));
          if (c)
               for (m = 0; !e.ca && m < c.length; m++) k = e.aa = c[m], h = pc(k, g, !1, e) && h;
          return h
     }
     F.prototype.lb = function() {
          F.ia.lb.call(this);
          if (this.Ja) {
               var a = this.Ja,
                    b = 0,
                    c;
               for (c in a.$) {
                    for (var d = a.$[c], e = 0; e < d.length; e++) ++b, Lb(d[e]);
                    delete a.$[c];
                    a.aa--
               }
          }
          this.Lc = null
     };

     function pc(a, b, c, d) {
          b = a.Ja.$[String(b)];
          if (!b) return !0;
          b = b.concat();
          for (var e = !0, g = 0; g < b.length; ++g) {
               var h = b[g];
               if (h && !h.dc && h.capture == c) {
                    var k = h.listener,
                         m = h.Fc || h.src;
                    h.xc && Ob(a.Ja, h);
                    e = !1 !== k.call(m, d) && e
               }
          }
          return e && 0 != d.Sd
     };

     function qc(a, b, c, d) {
          this.top = a;
          this.right = b;
          this.bottom = c;
          this.left = d
     }
     f = qc.prototype;
     f.Ib = function() {
          return this.right - this.left
     };
     f.clone = function() {
          return new qc(this.top, this.right, this.bottom, this.left)
     };
     f.toString = function() {
          return "(" + this.top + "t, " + this.right + "r, " + this.bottom + "b, " + this.left + "l)"
     };
     f.ceil = function() {
          this.top = Math.ceil(this.top);
          this.right = Math.ceil(this.right);
          this.bottom = Math.ceil(this.bottom);
          this.left = Math.ceil(this.left);
          return this
     };
     f.floor = function() {
          this.top = Math.floor(this.top);
          this.right = Math.floor(this.right);
          this.bottom = Math.floor(this.bottom);
          this.left = Math.floor(this.left);
          return this
     };
     f.round = function() {
          this.top = Math.round(this.top);
          this.right = Math.round(this.right);
          this.bottom = Math.round(this.bottom);
          this.left = Math.round(this.left);
          return this
     };
     f.translate = function(a, b) {
          a instanceof w ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (this.left += a, this.right += a, p(b) && (this.top += b, this.bottom += b));
          return this
     };
     f.scale = function(a, b) {
          var c = p(b) ? b : a;
          this.left *= a;
          this.right *= a;
          this.top *= c;
          this.bottom *= c;
          return this
     };

     function lc(a) {
          "number" == typeof a && (a = Math.round(a) + "px");
          return a
     };

     function rc() {}
     rc.$ = void 0;
     rc.aa = function() {
          return rc.$ ? rc.$ : rc.$ = new rc
     };
     rc.prototype.$ = 0;

     function H(a) {
          F.call(this);
          a || (a = qa || (qa = new zb));
          this.bd = a;
          this.Ic = null;
          this.mb = !1;
          this.da = null;
          this.qc = void 0;
          this.ya = this.ka = this.na = null
     }
     t(H, F);
     f = H.prototype;
     f.re = rc.aa();

     function sc(a) {
          return a.Ic || (a.Ic = ":" + (a.re.$++).toString(36))
     }
     f.fa = function() {
          return this.da
     };

     function tc(a, b) {
          if (a == b) throw Error("Unable to set parent component");
          if (b && a.na && a.Ic && uc(a.na, a.Ic) && a.na != b) throw Error("Unable to set parent component");
          a.na = b;
          H.ia.Da.call(a, b)
     }
     f.getParent = function() {
          return this.na
     };
     f.Da = function(a) {
          if (this.na && this.na != a) throw Error("Method not supported");
          H.ia.Da.call(this, a)
     };
     f.za = function() {
          this.da = this.bd.$.createElement("DIV")
     };

     function vc(a, b, c) {
          if (a.mb) throw Error("Component already rendered");
          a.da || a.za();
          b ? b.insertBefore(a.da, c || null) : a.bd.$.body.appendChild(a.da);
          a.na && !a.na.mb || a.ta()
     }
     f.ta = function() {
          this.mb = !0;
          wc(this, function(a) {
               !a.mb && a.fa() && a.ta()
          })
     };

     function xc(a) {
          wc(a, function(a) {
               a.mb && xc(a)
          });
          a.qc && a.qc.$();
          a.mb = !1
     }
     f.lb = function() {
          this.mb && xc(this);
          this.qc && (Fb(this.qc), delete this.qc);
          wc(this, function(a) {
               Fb(a)
          });
          this.da && yb(this.da);
          this.na = this.da = this.ya = this.ka = null;
          H.ia.lb.call(this)
     };

     function I(a, b) {
          yc(a, b, a.ka ? a.ka.length : 0)
     }

     function yc(a, b, c) {
          if (b.mb) throw Error("Component already rendered");
          if (0 > c || c > (a.ka ? a.ka.length : 0)) throw Error("Child component index out of bounds");
          a.ya && a.ka || (a.ya = {}, a.ka = []);
          if (b.getParent() == a) {
               var d = sc(b);
               a.ya[d] = b;
               La(a.ka, b)
          } else {
               var d = a.ya,
                    e = sc(b);
               if (null !== d && e in d) throw Error('The object already contains the key "' + e + '"');
               d[e] = b
          }
          tc(b, a);
          Na(a.ka, c, 0, b);
          b.mb && a.mb && b.getParent() == a ? (a = a.Wc(), c = a.childNodes[c] || null, c != b.fa() && a.insertBefore(b.fa(), c)) : (a.da || a.za(), c = a.ka ? a.ka[c + 1] || null :
               null, vc(b, a.Wc(), c ? c.da : null))
     }
     f.Wc = function() {
          return this.da
     };

     function zc(a) {
          var b = [];
          wc(a, function(a) {
               b.push(sc(a))
          });
          return b
     }

     function uc(a, b) {
          var c;
          a.ya && b ? (c = a.ya, c = (null !== c && b in c ? c[b] : void 0) || null) : c = null;
          return c
     }

     function wc(a, b) {
          a.ka && Ia(a.ka, b, void 0)
     }
     f.removeChild = function(a, b) {
          if (a) {
               var c = l(a) ? a : sc(a);
               a = uc(this, c);
               if (c && a) {
                    var d = this.ya;
                    c in d && delete d[c];
                    La(this.ka, a);
                    b && (xc(a), a.da && yb(a.da));
                    tc(a, null)
               }
          }
          if (!a) throw Error("Child is not in parent component");
          return a
     };

     function J(a, b, c, d) {
          this.ua = a;
          this.va = b;
          this.Ga = c;
          this.Ha = d
     }
     J.prototype.clone = function() {
          return new J(this.ua, this.va, this.Ga, this.Ha)
     };

     function Ac(a, b) {
          this.x = a;
          this.y = b
     }
     t(Ac, w);
     Ac.prototype.clone = function() {
          return new Ac(this.x, this.y)
     };
     Ac.prototype.scale = w.prototype.scale;
     Ac.prototype.add = function(a) {
          this.x += a.x;
          this.y += a.y;
          return this
     };

     function Bc(a, b) {
          a.x -= b.x;
          a.y -= b.y;
          return a
     }

     function Cc(a, b) {
          var c = Math.cos(b),
               d = Math.sin(b),
               e = a.y * c + a.x * d;
          a.x = a.x * c - a.y * d;
          a.y = e;
          return a
     };

     function K(a, b, c, d, e, g) {
          if (6 == arguments.length) Dc(this, a, b, c, d, e, g);
          else {
               if (arguments.length) throw Error("Insufficient matrix parameters");
               this.La = this.Ra = 1;
               this.Qa = this.Pa = this.Va = this.Wa = 0
          }
     }

     function Ec(a) {
          return 1 == a.La && !a.Qa && !a.Pa && 1 == a.Ra && !a.Va && !a.Wa
     }
     K.prototype.clone = function() {
          return new K(this.La, this.Qa, this.Pa, this.Ra, this.Va, this.Wa)
     };

     function Dc(a, b, c, d, e, g, h) {
          if (!(p(b) && p(c) && p(d) && p(e) && p(g) && p(h))) throw Error("Invalid transform parameters");
          a.La = b;
          a.Qa = c;
          a.Pa = d;
          a.Ra = e;
          a.Va = g;
          a.Wa = h;
          return a
     }
     K.prototype.scale = function(a, b) {
          this.La *= a;
          this.Qa *= a;
          this.Pa *= b;
          this.Ra *= b;
          return this
     };
     K.prototype.translate = function(a, b) {
          this.Va += a * this.La + b * this.Pa;
          this.Wa += a * this.Qa + b * this.Ra;
          return this
     };

     function Fc(a, b) {
          var c;
          c = new K;
          var d = Math.cos(b),
               e = Math.sin(b);
          c = Dc(c, d, e, -e, d, 0 - 0 * d + 0 * e, 0 - 0 * e - 0 * d);
          d = a.La;
          e = a.Pa;
          a.La = c.La * d + c.Qa * e;
          a.Pa = c.Pa * d + c.Ra * e;
          a.Va += c.Va * d + c.Wa * e;
          d = a.Qa;
          e = a.Ra;
          a.Qa = c.La * d + c.Qa * e;
          a.Ra = c.Pa * d + c.Ra * e;
          a.Wa += c.Va * d + c.Wa * e
     }
     K.prototype.toString = function() {
          return "matrix(" + [this.La, this.Qa, this.Pa, this.Ra, this.Va, this.Wa].join() + ")"
     };

     function Gc(a, b, c, d) {
          var e = 0,
               g = 0;
          for (d = 0 + 2 * d; e < d;) {
               var h = b[e++],
                    k = b[e++];
               c[g++] = h * a.La + k * a.Pa + a.Va;
               c[g++] = h * a.Qa + k * a.Ra + a.Wa
          }
     };

     function Hc(a) {
          var b = a.vb();
          if (!b.length) return 1;
          a = [];
          for (var c = 0; c < b.length; c++) {
               var d = b[c];
               a.push(Ic(d.oa.la(), d.qa.la()))
          }
          a.sort(Pa);
          return a.length % 2 ? a[(a.length - 1) / 2] : (b = a.length / 2, (a[b - 1] + a[b]) / 2)
     }

     function Jc(a, b, c, d) {
          return Math.sqrt((c - a) * (c - a) + (d - b) * (d - b))
     }

     function Ic(a, b) {
          var c = a.x - b.x,
               d = a.y - b.y;
          return Math.sqrt(c * c + d * d)
     }

     function Kc(a, b) {
          var c = b.y + b.height,
               d = b.y,
               e = b.x,
               g = b.x + b.width,
               h;
          (h = Lc(a, new J(e, d, e, c))) || (h = Lc(a, new J(e, d, g, d))) || (h = Lc(a, new J(e, c, g, c))) || (h = Lc(a, new J(g, d, g, c)));
          return h
     }

     function Lc(a, b) {
          var c = a.ua,
               d = a.va,
               e = a.Ga,
               g = a.Ha,
               h = b.ua,
               k = b.va,
               m = b.Ga,
               n = b.Ha,
               B = (n - k) * (e - c) - (m - h) * (g - d);
          if (B && (m = ((m - h) * (d - k) - (n - k) * (c - h)) / B, h = ((e - c) * (d - k) - (g - d) * (c - h)) / B, 0 <= m && 1 >= m && 0 <= h && 1 >= h)) return new w(c + m * (e - c), d + m * (g - d))
     }

     function Mc(a, b) {
          var c = Math.sin(b),
               d = Math.cos(b),
               e = a.Ga - a.ua,
               g = a.Ha - a.va;
          a.Ga = a.ua + (e * d - g * c);
          a.Ha = a.va + (e * c + g * d)
     }

     function Nc(a, b) {
          var c = Oc(a),
               d = Oc(b),
               e = d - c;
          return e > Math.PI ? d - 2 * Math.PI - c : e < -Math.PI ? d - c + 2 * Math.PI : e
     }

     function Oc(a) {
          a = Math.atan2(a.Ha - a.va, a.Ga - a.ua);
          return 0 > a ? 2 * Math.PI + a : a
     }

     function Pc(a, b) {
          var c = a.ua - a.Ga,
               d = a.va - a.Ha,
               e = b / Math.sqrt(c * c + d * d);
          a.ua += e * d;
          a.va -= e * c;
          a.Ga += e * d;
          a.Ha -= e * c
     }

     function Qc(a, b) {
          return Rc(Math.atan2(b.y - a.y, b.x - a.x))
     }

     function Rc(a) {
          0 > a && (a += 2 * Math.PI);
          a >= 2 * Math.PI && (a -= 2 * Math.PI);
          return a
     }

     function Sc(a, b, c) {
          return (a = (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x)) ? 0 < a ? 1 : -1 : 0
     }

     function Tc(a) {
          return Uc(a.oa, a.qa)
     }

     function Uc(a, b) {
          return Qc(a.la(), b.la())
     }

     function Vc(a, b) {
          return Sc(a.oa.la(), a.qa.la(), b.la())
     }

     function Wc(a, b) {
          return Sc(a.oa.la(), a.qa.la(), b)
     }

     function Xc(a) {
          switch (a.pa.length) {
               case 1:
                    return Rc(Uc(a, a.pa[0]) + Math.PI);
               case 2:
                    return Yc(a);
               case 3:
                    return Zc(a)
          }
          return Math.PI / 6
     }

     function $c(a) {
          switch (a.pa.length) {
               case 0:
                    return Math.PI / 6;
               case 1:
                    return ad(a);
               case 2:
                    return Yc(a);
               case 3:
                    return Zc(a)
          }
          return 0
     }

     function ad(a) {
          var b = a.pa[0];
          if (2 == b.pa.length) {
               var b = a.pa[0],
                    c = b.pa,
                    c = c[0] == a ? c[1] : c[0];
               if (c === a) throw Error("cousin is node");
               var d = Uc(b, a);
               a = Rc(d + Math.PI / 3);
               d = Rc(d - Math.PI / 3);
               b = Uc(c, b);
               return Math.abs(b - a) > Math.abs(b - d) ? d : a
          }
          b = Uc(b, a);
          if (0 <= b && b <= Math.PI / 2) return b - Math.PI / 3;
          if (b > Math.PI / 2 && b <= Math.PI) return b + Math.PI / 3;
          if (b > Math.PI && b <= 3 * Math.PI / 2) return b - Math.PI / 3;
          if (b > 3 * Math.PI / 2 && b <= 2 * Math.PI) return b + Math.PI / 3;
          throw Error("Unable to assign angle");
     }

     function Yc(a) {
          var b = a.pa,
               c = Uc(a, b[0]);
          a = Uc(a, b[1]);
          c > a && (b = c, c = a, a = b);
          b = a - c;
          b > Math.PI && (b = -(2 * Math.PI + c - a));
          return Rc(c + .5 * b + Math.PI)
     }

     function Zc(a) {
          for (var b = a.pa, c = 0; c < b.length; c++) {
               var d = b[c];
               if (1 < d.pa.length) return Uc(d, a)
          }
          return Uc(a, b[0])
     }

     function bd(a, b) {
          var c = b.width / b.height > a.width / a.height ? b.height / a.height : b.width / a.width,
               d = b.x + .5 * b.width - .5 * a.width * c,
               e = b.y + .5 * b.height - .5 * a.height * c,
               g = new K;
          g.translate(d, e);
          g.scale(c, c);
          return g
     };

     function cd(a, b, c, d) {
          this.x = a;
          this.y = b;
          this.width = c;
          this.height = d
     }
     cd.prototype.Bb = function() {
          return new w(this.x + .5 * this.width, this.y + .5 * this.height)
     };
     cd.prototype.clone = function() {
          return new this.constructor(this.x, this.y, this.width, this.height)
     };

     function dd(a) {
          return [a.x, a.y, a.width, a.height].join(" ")
     }

     function ed(a) {
          return new cd(a.left, a.bottom, a.right - a.left, a.top - a.bottom)
     };

     function L() {
          this.Ea = [];
          this.Ia = [];
          this.Ta = []
     }
     L.prototype.fb = null;
     L.prototype.Ka = null;
     L.prototype.Ob = !0;
     var fd = [, 2, 2, 6, 6, 0];

     function gd(a, b) {
          b.Ka && (Array.prototype.push.apply(a.Ea, b.Ea), Array.prototype.push.apply(a.Ia, b.Ia), Array.prototype.push.apply(a.Ta, b.Ta), a.Ka = b.Ka.concat(), a.fb = b.fb.concat(), a.Ob = a.Ob && b.Ob)
     }

     function hd(a) {
          a.Ea.length = 0;
          a.Ia.length = 0;
          a.Ta.length = 0;
          delete a.fb;
          delete a.Ka;
          delete a.Ob
     }
     f = L.prototype;
     f.Ya = function(a, b) {
          1 == Ga(this.Ea) ? this.Ta.length -= 2 : (this.Ea.push(1), this.Ia.push(1));
          this.Ta.push(a, b);
          this.Ka = this.fb = [a, b];
          return this
     };
     f.wa = function(a) {
          var b = Ga(this.Ea);
          if (null == b) throw Error("Path cannot start with lineTo");
          2 != b && (this.Ea.push(2), this.Ia.push(0));
          for (b = 0; b < arguments.length; b += 2) {
               var c = arguments[b],
                    d = arguments[b + 1];
               this.Ta.push(c, d)
          }
          this.Ia[this.Ia.length - 1] += b / 2;
          this.Ka = [c, d];
          return this
     };
     f.Na = function(a) {
          var b = Ga(this.Ea);
          if (null == b) throw Error("Path cannot start with curve");
          3 != b && (this.Ea.push(3), this.Ia.push(0));
          for (b = 0; b < arguments.length; b += 6) {
               var c = arguments[b + 4],
                    d = arguments[b + 5];
               this.Ta.push(arguments[b], arguments[b + 1], arguments[b + 2], arguments[b + 3], c, d)
          }
          this.Ia[this.Ia.length - 1] += b / 6;
          this.Ka = [c, d];
          return this
     };
     f.close = function() {
          var a = Ga(this.Ea);
          if (null == a) throw Error("Path cannot start with close");
          5 != a && (this.Ea.push(5), this.Ia.push(1), this.Ka = this.fb);
          return this
     };
     f.Rc = function(a, b, c, d) {
          var e = this.Ka[0] - a * Math.cos(c * Math.PI / 180),
               g = this.Ka[1] - b * Math.sin(c * Math.PI / 180),
               h = d * Math.PI / 180;
          d = Math.ceil(Math.abs(h) / Math.PI * 2);
          h /= d;
          c = c * Math.PI / 180;
          for (var k = 0; k < d; k++) {
               var m = Math.cos(c),
                    n = Math.sin(c),
                    B = 4 / 3 * Math.sin(h / 2) / (1 + Math.cos(h / 2)),
                    S = e + (m - B * n) * a,
                    Z = g + (n + B * m) * b;
               c += h;
               m = Math.cos(c);
               n = Math.sin(c);
               this.Na(S, Z, e + (m + B * n) * a, g + (n - B * m) * b, e + m * a, g + n * b)
          }
          return this
     };

     function kd(a, b) {
          for (var c = a.Ta, d = 0, e = 0, g = a.Ea.length; e < g; e++) {
               var h = a.Ea[e],
                    k = fd[h] * a.Ia[e];
               b(h, c.slice(d, d + k));
               d += k
          }
     }
     f.clone = function() {
          var a = new this.constructor;
          a.Ea = this.Ea.concat();
          a.Ia = this.Ia.concat();
          a.Ta = this.Ta.concat();
          a.fb = this.fb && this.fb.concat();
          a.Ka = this.Ka && this.Ka.concat();
          a.Ob = this.Ob;
          return a
     };
     var ld = {};
     ld[1] = L.prototype.Ya;
     ld[2] = L.prototype.wa;
     ld[5] = L.prototype.close;
     ld[3] = L.prototype.Na;
     ld[4] = L.prototype.Rc;

     function md(a) {
          if (a.Ob) return a.clone();
          var b = new L;
          kd(a, function(a, d) {
               ld[a].apply(b, d)
          });
          return b
     }

     function nd(a, b) {
          var c = md(a);
          od(c, b);
          return c
     }

     function od(a, b) {
          if (!a.Ob) throw Error("Non-simple path");
          Gc(b, a.Ta, a.Ta, a.Ta.length / 2);
          a.fb && Gc(b, a.fb, a.fb, 1);
          a.Ka && a.fb != a.Ka && Gc(b, a.Ka, a.Ka, 1)
     }
     L.prototype.ab = function() {
          if (this.Ea.length) {
               var a, b = a = Number.POSITIVE_INFINITY,
                    c, d = c = Number.NEGATIVE_INFINITY;
               kd(this, function(e, g) {
                    for (var h = 0, k = g.length; h < k; h += 2) b = Math.min(b, g[h]), d = Math.max(d, g[h]), a = Math.min(a, g[h + 1]), c = Math.max(c, g[h + 1])
               });
               return new cd(b, a, d - b, c - a)
          }
     };

     function pd(a) {
          var b = [];
          kd(a, function(a, d) {
               switch (a) {
                    case 1:
                         b.push(qd);
                         Array.prototype.push.apply(b, d);
                         break;
                    case 2:
                         b.push(rd);
                         Array.prototype.push.apply(b, d);
                         break;
                    case 3:
                         b.push(sd);
                         Array.prototype.push.apply(b, d);
                         break;
                    case 4:
                         var c = d[3];
                         b.push(td, d[0], d[1], 0, 180 < Math.abs(c) ? 1 : 0, 0 < c ? 1 : 0, d[4], d[5]);
                         break;
                    case 5:
                         b.push(ud)
               }
          });
          return b.join(" ")
     }
     var qd = "M",
          rd = "L",
          sd = "C",
          td = "A",
          ud = "Z";

     function vd(a, b, c, d) {
          this.aa = a;
          this.da = b;
          this.ca = void 0 === c ? 1 : c;
          this.$ = d || []
     }
     vd.prototype.Ib = function() {
          return this.aa
     };

     function wd(a, b) {
          this.aa = a;
          this.$ = 0 === b ? 0 : b || 1
     }
     var xd = new wd("#000000", 0);

     function yd() {
          H.call(this);
          this.$ = new K
     }
     t(yd, H);
     yd.prototype.za = function() {
          var a = mc("g", {
               "class": "chemwriter-group"
          });
          Ec(this.$) || a.setAttribute("transform", this.$.toString());
          this.da = a
     };

     function zd(a, b, c) {
          b = mc("line", {
               x1: b.ua,
               y1: b.va,
               x2: b.Ga,
               y2: b.Ha
          });
          oc(b, c);
          a.fa().appendChild(b);
          return b
     }

     function Ad(a, b, c, d) {
          if (!c && !d) throw Error("a stroke or fill is required");
          b = mc("path", {
               d: pd(b)
          });
          c && oc(b, c);
          nc(b, d);
          a.fa().appendChild(b);
          return b
     }

     function Bd(a, b, c) {
          if (!c) throw Error("a stroke or fill is required");
          b = mc("circle", {
               cx: b.x,
               cy: b.y,
               r: b.$
          });
          c && nc(b, c);
          a.fa().appendChild(b);
          return b
     }

     function Cd(a, b) {
          a.$ = b.clone();
          a.fa() && (Ec(b) ? a.fa().removeAttribute("transform") : a.fa().setAttribute("transform", b.toString()))
     }

     function Dd(a) {
          Cd(a, new K);
          if (a.fa())
               for (; a.fa().lastChild;) a.fa().removeChild(a.fa().lastChild)
     };

     function Ed(a) {
          H.call(this);
          this.ib = a;
          this.ca = this.$ = this.aa = void 0
     }
     t(Ed, H);
     Ed.prototype.za = function() {
          var a = mc("svg", {
               "class": "chemwriter-graphics"
          });
          this.aa && a.setAttribute("viewBox", dd(this.aa));
          this.da = a
     };
     Ed.prototype.ta = function() {
          Ed.ia.ta.call(this);
          this.ib.ca ? this.ea() : Yb(this.ib, Fd, this.ea, !1, this)
     };

     function Gd(a, b) {
          a.aa = b;
          a.fa() && a.fa().setAttribute("viewBox", dd(b));
          a.$ && Hd(a)
     }
     Ed.prototype.ea = function() {
          if (!this.ib.oc()) {
               this.$ = new yd;
               yc(this, this.$, 0);
               var a = new L;
               a.Ya(205.296, 64.33);
               a.wa(226.064, 99.258);
               a.wa(185.543, 98.541);
               a.Na(183.108, 84.311, 191.051, 69.885, 205.296, 64.33);
               a.close();
               a.Ya(110.267, 247.395);
               a.Na(106.23, 247.395, 102.256, 246.33, 98.783, 244.324);
               a.wa(11.597, 193.991);
               a.Na(4.501, 189.887, .09, 182.264, .104, 174.095);
               a.wa(.104, 73.4);
               a.Na(.104, 65.217, 4.501, 57.596, 11.585, 53.509);
               a.wa(98.793, 3.176);
               a.Na(114.288, .102, 118.248, 1.165, 121.75, 3.176);
               a.wa(191.854, 43.664);
               a.Na(166.365,
                    41.689, 147.172, 74.737, 160.117, 98.22);
               a.wa(110.253, 69.34);
               a.wa(63.137, 96.529);
               a.wa(63.137, 150.97);
               a.wa(110.276, 178.174);
               a.Na(142.892, 159.473, 163.069, 147.904, 171.362, 143.189);
               a.Na(177.199, 139.85, 183.217, 138.159, 189.227, 138.159);
               a.Na(203.739, 138.159, 216.54, 148.286, 220.352, 162.774);
               a.Na(223.887, 176.187, 218.394, 188.869, 206.022, 195.863);
               a.Na(188.434, 205.827, 121.751, 244.323, 121.751, 244.323);
               a.Na(118.248, 246.334, 114.288, 247.395, 110.267, 247.395);
               a.close();
               var b = new wd("#000000", .2);
               this.ca = a.ab();
               Ad(this.$,
                    a, void 0, b);
               Hd(this)
          }
     };

     function Hd(a) {
          var b = a.aa || new cd(0, 0, 100, 100);
          a.ca && Cd(a.$, bd(a.ca, b))
     };
     var Id = {
          A: {
               bounds: [.3399, 0, 8.4727, 9.2461],
               commands: "MLLZMLLLLLLLZ",
               bearing: [.3399, .375],
               points: [4.6114, 6.6622, 3.4278, 3.0469, 5.7247, 3.0469, 3.3868, 9.2461, 5.7657, 9.2461, 8.8125, 0, 6.6504, 0, 6, 2.0508, 3.1524, 2.0508, 2.502, 0, .3399, 0]
          },
          B: {
               bounds: [1.1016, 0, 7.1543, 9.2461],
               commands: "MLLQQQZMQQQQQQQQLLZMQQQQQQQQQQQLLZ",
               bearing: [1.1016, .8731],
               points: [3.2637, 7.752, 3.2637, 5.4375, 4.0782, 5.4375, 6.0118, 5.4375, 6.0118, 6.6504, 6.0118, 7.1836, 5.7481, 7.4122, 5.3614, 7.752, 4.0899, 7.752, 3.961, 1.4883, 4.9336, 1.4883, 5.1504, 1.5469,
                    5.3672, 1.6055, 5.5313, 1.6641, 5.6954, 1.7227, 5.7891, 1.8165, 5.8829, 1.9102, 5.9649, 2.0391, 6.1231, 2.2735, 6.1231, 2.7247, 6.1231, 3.1758, 5.9883, 3.4542, 5.8536, 3.7325, 5.5665, 3.879, 5.0801, 4.1192, 4.0665, 4.1192, 3.2637, 4.1192, 3.2637, 1.4883, 3.5508, 9.2461, 5.1446, 9.2461, 5.9239, 9.0323, 6.7032, 8.8184, 7.0782, 8.5547, 7.9219, 7.9688, 7.9219, 6.7969, 7.9219, 6.0118, 7.3536, 5.4874, 6.7852, 4.9629, 5.918, 4.875, 7.6231, 4.6172, 8.0743, 3.6622, 8.2559, 3.2754, 8.2559, 2.7042, 8.2559, 2.1329, 8.0684, 1.6583, 7.8809, 1.1836, 7.5469, .8731, 7.2129, .5625, 6.7032,
                    .3633, 5.7833, 0, 4.254, 0, 1.1016, 0, 1.1016, 9.2461
               ]
          },
          C: {
               bounds: [.4454, -.17, 6.8379, 9.5567],
               commands: "MQQLQQQQQQQQLLLLQQQZ",
               bearing: [.4454, .1641],
               points: [2.5958, 4.5821, 2.5958, 1.4004, 4.7051, 1.4004, 5.7657, 1.4004, 6.6973, 2.0391, 7.2833, .5157, 6.7793, .0938, 5.5196, -.0938, 5.0333, -.17, 4.5059, -.17, 2.6075, -.17, 1.5264, 1.0811, .4454, 2.3321, .4454, 4.6377, .4454, 6.9434, 1.5059, 8.1651, 2.5665, 9.3868, 4.5059, 9.3868, 5.795, 9.3868, 6.8438, 8.9532, 7.0723, 8.8536, 7.1778, 8.7833, 7.2833, 8.7129, 6.6973, 7.1895, 6.5918, 7.2657, 6.4571, 7.3536, 5.7188,
                    7.8282, 4.6612, 7.8282, 3.6036, 7.8282, 3.0997, 7.0547, 2.5958, 6.2813, 2.5958, 4.5821
               ]
          },
          D: {
               bounds: [1.1075, 0, 7.6114, 9.2461],
               commands: "MQQQQQQLLLQQZMQQLLLQZ",
               bearing: [1.1075, .7149],
               points: [6.5274, 3.8086, 6.5508, 4.1485, 6.5508, 4.5997, 6.5508, 5.0508, 6.5274, 5.3877, 6.504, 5.7247, 6.4307, 6.0733, 6.3575, 6.4219, 6.2344, 6.668, 5.9297, 7.2422, 5.3467, 7.5059, 4.7637, 7.7696, 3.7559, 7.7696, 3.2696, 7.7696, 3.2696, 1.4883, 3.7559, 1.4883, 5.2735, 1.4883, 5.8536, 2.0772, 6.4336, 2.6661, 6.5274, 3.8086, 8.7188, 4.5821, 8.7188, 2.3614, 7.5616, 1.1807, 6.4043,
                    0, 3.9844, 0, 1.1075, 0, 1.1075, 9.2461, 3.9844, 9.2461, 8.7188, 9.2461, 8.7188, 4.5821
               ]
          },
          E: {
               bounds: [1.1075, 0, 6.3282, 9.2461],
               commands: "MLLLLLLLLLLLZ",
               bearing: [1.1075, .5801],
               points: [7.4356, 0, 1.1075, 0, 1.1075, 9.2461, 7.377, 9.2461, 7.377, 7.67, 3.2637, 7.67, 3.2637, 5.4434, 6.8497, 5.4434, 6.8497, 4.1192, 3.2637, 4.1192, 3.2637, 1.5586, 7.4356, 1.5586]
          },
          F: {
               bounds: [1.1075, 0, 6.3282, 9.2461],
               commands: "MLLLLLLLLLZ",
               bearing: [1.1075, .0704],
               points: [3.2637, 4.1133, 3.2637, 0, 1.1075, 0, 1.1075, 9.2461, 7.4356, 9.2461, 7.4356, 7.67, 3.2637, 7.67, 3.2637,
                    5.4375, 6.9317, 5.4375, 6.9317, 4.1133
               ]
          },
          G: {
               bounds: [.6973, -.2168, 7.7696, 9.586],
               commands: "MLLLLLLLQQQQQQQQQQLLQQQQQQQQQZ",
               bearing: [.6973, .9786],
               points: [6.5743, 1.7813, 6.5743, 3.8379, 4.4766, 3.8379, 4.4766, 5.1504, 8.4668, 5.1504, 8.4668, 0, 7.0782, 0, 6.7969, .7383, 6.5625, .293, 5.9766, .0381, 5.3907, -.2168, 4.6407, -.2168, 2.8067, -.2168, 1.752, .9903, .6973, 2.1973, .6973, 4.5118, .6973, 6.7852, 1.8692, 8.0772, 3.0411, 9.3692, 5.209, 9.3692, 5.7657, 9.3692, 6.2549, 9.2959, 6.7442, 9.2227, 7.0489, 9.1172, 7.3536, 9.0118, 7.5733, 8.9063, 7.793, 8.8008,
                    7.8868, 8.7305, 7.9864, 8.6661, 7.3594, 7.2247, 7.2305, 7.2891, 7.0108, 7.3887, 6.7911, 7.4883, 6.2315, 7.6553, 5.6719, 7.8223, 5.2559, 7.8223, 4.1133, 7.8223, 3.4864, 6.9786, 2.8594, 6.1348, 2.8594, 4.5, 2.8594, 3.5977, 3.0645, 2.9151, 3.2696, 2.2325, 3.7178, 1.8194, 4.1661, 1.4063, 4.8165, 1.4063, 5.8711, 1.4063, 6.5743, 1.7813
               ]
          },
          H: {
               bounds: [.8965, 0, 7.5938, 9.2461],
               commands: "MLLLLLLLLLLLZ",
               bearing: [.8965, .8965],
               points: [6.3282, 0, 6.3282, 4.125, 3.0586, 4.125, 3.0586, 0, .8965, 0, .8965, 9.2461, 3.0586, 9.2461, 3.0586, 5.4493, 6.3282, 5.4493, 6.3282, 9.2461,
                    8.4903, 9.2461, 8.4903, 0
               ]
          },
          I: {
               bounds: [.4512, 0, 4.1602, 9.2461],
               commands: "MLLLLLLLLLLLZ",
               bearing: [.4512, .4512],
               points: [.4512, .9961, 1.4473, .9961, 1.4473, 8.2442, .4512, 8.2442, .4512, 9.2461, 4.6114, 9.2461, 4.6114, 8.2442, 3.6094, 8.2442, 3.6094, .9961, 4.6114, .9961, 4.6114, 0, .4512, 0]
          },
          J: {
               bounds: [.1817, -.504, 4.0665, 9.75],
               commands: "MQQQLLLQQZ",
               bearing: [.1817, .9961],
               points: [.1817, .9024, .8965, .9844, 1.2862, 1.1866, 1.6758, 1.3887, 1.8575, 1.8077, 2.0391, 2.2266, 2.0391, 2.9649, 2.0391, 9.2461, 4.2012, 9.2461, 4.2012, 3.1583, 4.2481, 1.254,
                    3.4131, .3956, 2.5782, -.4629, .7325, -.504
               ]
          },
          K: {
               bounds: [1.1192, 0, 7.793, 9.2461],
               commands: "MLLLLLLLLLLLLZ",
               bearing: [1.1192, -.0586],
               points: [3.2813, 3.961, 3.2813, 0, 1.1192, 0, 1.1192, 9.2461, 3.2813, 9.2461, 3.2813, 5.2793, 3.7618, 5.2793, 6.3868, 9.2461, 8.5899, 9.2461, 5.4668, 4.67, 8.9122, 0, 6.6563, 0, 3.7149, 3.961]
          },
          L: {
               bounds: [.8145, 0, 6.1583, 9.2461],
               commands: "MLLLLLZ",
               bearing: [.8145, 0],
               points: [6.9727, 0, .8145, 0, .8145, 9.2461, 2.9708, 9.2461, 2.9708, 1.4825, 6.9727, 1.4825]
          },
          M: {
               bounds: [1.002, 0, 9.7793, 9.2461],
               commands: "MLLLLLLLLLLLLZ",
               bearing: [1.002, .961],
               points: [4.8926, 0, 2.795, 6.3575, 2.795, 0, 1.002, 0, 1.002, 9.2461, 3.5508, 9.2461, 5.8477, 2.3907, 8.2266, 9.2461, 10.7813, 9.2461, 10.7813, 0, 8.9883, 0, 8.9883, 6.3575, 6.9083, 0]
          },
          N: {
               bounds: [.8731, 0, 7.8047, 9.2461],
               commands: "MLLLLLLLLLZ",
               bearing: [.8731, .9493],
               points: [8.6778, 0, 6.4454, 0, 2.8008, 6.293, 2.8008, 0, .8731, 0, .8731, 9.2461, 3.1817, 9.2461, 6.7618, 3.0411, 6.7618, 9.2461, 8.6778, 9.2461]
          },
          O: {
               bounds: [.6036, -.1641, 8.3204, 9.5684],
               commands: "MQQQQQQQQQQQQZMQQQQQQQQQQQQQQQQQQQQZ",
               bearing: [.6036, .6094],
               points: [4.7637,
                    9.4043, 6.8555, 9.4043, 7.8897, 8.1475, 8.9239, 6.8907, 8.9239, 4.6231, 8.9239, 3.5098, 8.6749, 2.6338, 8.4258, 1.7579, 7.9219, 1.1309, 7.418, .504, 6.6211, .17, 5.8243, -.1641, 4.7637, -.1641, 3.7032, -.1641, 2.9063, .17, 2.1094, .504, 1.6055, 1.1309, 1.1016, 1.7579, .8526, 2.6338, .6036, 3.5098, .6036, 4.6231, .6036, 6.8907, 1.6377, 8.1475, 2.6719, 9.4043, 4.7637, 9.4043, 4.7637, 7.8458, 4.3008, 7.8458, 3.9493, 7.6788, 3.5977, 7.5118, 3.375, 7.2305, 3.1524, 6.9493, 3.0147, 6.5303, 2.877, 6.1114, 2.8213, 5.6514, 2.7657, 5.1915, 2.7657, 4.6231, 2.7657, 4.0547, 2.8213,
                    3.5948, 2.877, 3.1348, 3.0147, 2.7159, 3.1524, 2.2969, 3.375, 2.0127, 3.5977, 1.7286, 3.9493, 1.5616, 4.3008, 1.3946, 4.7637, 1.3946, 5.2266, 1.3946, 5.5782, 1.5616, 5.9297, 1.7286, 6.1524, 2.0127, 6.375, 2.2969, 6.5127, 2.7159, 6.6504, 3.1348, 6.7061, 3.5948, 6.7618, 4.0547, 6.7618, 4.6231, 6.7618, 5.1915, 6.7061, 5.6514, 6.6504, 6.1114, 6.5127, 6.5303, 6.375, 6.9493, 6.1524, 7.2305, 5.9297, 7.5118, 5.5782, 7.6788, 5.2266, 7.8458, 4.7637, 7.8458
               ]
          },
          P: {
               bounds: [.8145, 0, 7.0372, 9.2461],
               commands: "MQQQQQQQQQLLZMQQQQQLLLLLQQQQQZ",
               bearing: [.8145, .6797],
               points: [3.3282,
                    4.5235, 3.7559, 4.5235, 4.0987, 4.5704, 4.4415, 4.6172, 4.7461, 4.7315, 5.0508, 4.8458, 5.2559, 5.0245, 5.461, 5.2032, 5.5782, 5.4844, 5.6954, 5.7657, 5.6954, 6.1407, 5.6954, 6.6504, 5.5489, 7.0049, 5.4024, 7.3594, 5.1094, 7.5616, 4.8165, 7.7637, 4.4297, 7.8487, 4.043, 7.9336, 3.504, 7.9336, 2.9766, 7.9336, 2.9766, 4.5235, 7.8516, 6.1641, 7.8516, 5.4727, 7.6377, 4.9571, 7.4239, 4.4415, 7.0459, 4.1163, 6.668, 3.7911, 6.0879, 3.5918, 5.5079, 3.3926, 4.8516, 3.3135, 4.1954, 3.2344, 3.3399, 3.2344, 2.9766, 3.2344, 2.9766, 0, .8145, 0, .8145, 9.2461, 3.504, 9.2461, 4.3184,
                    9.2461, 4.9512, 9.1612, 5.584, 9.0762, 6.1436, 8.8653, 6.7032, 8.6543, 7.0694, 8.3116, 7.4356, 7.9688, 7.6436, 7.4268, 7.8516, 6.8848, 7.8516, 6.1641
               ]
          },
          Q: {
               bounds: [.6036, -2.461, 8.3204, 11.8653],
               commands: "MQQQQQQQQQQQQQQQQQQQQZMQQQQQLLLQQQQQQZ",
               bearing: [.6036, .6094],
               points: [4.7637, 7.8458, 4.3008, 7.8458, 3.9522, 7.6788, 3.6036, 7.5118, 3.3809, 7.2305, 3.1583, 6.9493, 3.0176, 6.5303, 2.877, 6.1114, 2.8213, 5.6514, 2.7657, 5.1915, 2.7657, 4.6231, 2.7657, 4.0547, 2.8213, 3.5948, 2.877, 3.1348, 3.0176, 2.7159, 3.1583, 2.2969, 3.378, 2.0127, 3.5977, 1.7286,
                    3.9493, 1.5616, 4.3008, 1.3946, 4.7637, 1.3946, 5.2266, 1.3946, 5.5782, 1.5616, 5.9297, 1.7286, 6.1495, 2.0127, 6.3692, 2.2969, 6.5098, 2.7159, 6.6504, 3.1348, 6.7061, 3.5948, 6.7618, 4.0547, 6.7618, 4.6231, 6.7618, 5.1915, 6.7061, 5.6514, 6.6504, 6.1114, 6.5098, 6.5303, 6.3692, 6.9493, 6.1465, 7.2305, 5.9239, 7.5118, 5.5752, 7.6788, 5.2266, 7.8458, 4.7637, 7.8458, 4.7637, 9.4043, 6.8555, 9.4043, 7.8897, 8.1475, 8.9239, 6.8907, 8.9239, 4.6231, 8.9239, 3.3399, 8.5987, 2.379, 8.2735, 1.418, 7.585, .7852, 6.8965, .1524, 5.8653, -.0586, 7.5528, -1.3711, 6.5333, -2.461, 3.8614, -.0938, 3.0352, .0352, 2.4112, .4219, 1.7872, .8086, 1.3917, 1.4209, .9961, 2.0333, .7999, 2.8331, .6036, 3.6329, .6036, 4.6231, .6036, 6.8907, 1.6377, 8.1475, 2.6719, 9.4043, 4.7637, 9.4043
               ]
          },
          R: {
               bounds: [.8145, 0, 7.1778, 9.2461],
               commands: "MQQQQLLLQQQQLLLLLQQQQQQQQQQZMQQQQQQQQQQLLZ",
               bearing: [.8145, .6387],
               points: [5.1856, 4.6055, 5.8243, 4.5411, 6.3018, 4.4004, 6.7793, 4.2598, 7.1778, 3.9961, 7.5762, 3.7325, 7.7842, 3.2901, 7.9922, 2.8477, 7.9922, 2.2383, 7.9922, 0, 5.8536, 0, 5.8536, 2.3848, 5.8536, 2.8536, 5.7042, 3.17, 5.5547, 3.4864, 5.253, 3.6563, 4.9512,
                    3.8262, 4.5762, 3.8936, 4.2012, 3.961, 3.668, 3.961, 2.9766, 3.961, 2.9766, 0, .8145, 0, .8145, 9.2461, 3.2696, 9.2461, 4.3653, 9.2461, 5.1651, 9.1465, 5.9649, 9.0469, 6.4952, 8.8624, 7.0254, 8.6778, 7.3418, 8.379, 7.6583, 8.0801, 7.7901, 7.7198, 7.9219, 7.3594, 7.9219, 6.8731, 7.9219, 6.3926, 7.7901, 6.0206, 7.6583, 5.6485, 7.4209, 5.3965, 7.1836, 5.1446, 6.835, 4.9747, 6.4864, 4.8047, 6.085, 4.7168, 5.6836, 4.629, 5.1856, 4.6055, 3.2286, 5.2676, 3.7618, 5.2676, 4.1397, 5.2999, 4.5176, 5.3321, 4.8399, 5.42, 5.1622, 5.5079, 5.3555, 5.6602, 5.5489, 5.8125, 5.6573, 6.0528,
                    5.7657, 6.293, 5.7657, 6.6211, 5.7657, 6.9375, 5.6836, 7.1602, 5.6016, 7.3829, 5.4375, 7.5352, 5.2735, 7.6875, 4.9893, 7.7754, 4.7051, 7.8633, 4.3448, 7.8985, 3.9844, 7.9336, 3.4747, 7.9336, 2.9766, 7.9336, 2.9766, 5.2676
               ]
          },
          S: {
               bounds: [.545, -.2403, 6.8672, 9.668],
               commands: "MQQQQQLLLQQQQQQQQQQQQQLQQQQQQQQQQQLLQQQQQQQQQQQQQQLQQZ",
               bearing: [.545, .5977],
               points: [7.4122, 2.7305, 7.4122, -.2403, 3.9903, -.2403, 3.4805, -.2403, 2.959, -.1465, 2.4375, -.0528, 2.0948, .0586, 1.752, .17, 1.3917, .337, 1.0313, .504, .9258, .5625, .6973, .7032, .6856, .709, 1.1602,
                    2.3321, 1.2247, 2.2911, 1.3389, 2.2266, 1.4532, 2.1622, 1.7872, 1.9981, 2.1211, 1.834, 2.4317, 1.711, 2.7422, 1.5879, 3.1348, 1.4854, 3.5274, 1.3829, 3.8204, 1.3887, 4.0958, 1.3946, 4.2569, 1.4004, 4.418, 1.4063, 4.629, 1.4356, 4.8399, 1.4649, 4.96, 1.5235, 5.0801, 1.5821, 5.1944, 1.6788, 5.3086, 1.7754, 5.3584, 1.9278, 5.4083, 2.0801, 5.4083, 2.2852, 5.4083, 2.6602, 5.2295, 2.918, 5.0508, 3.1758, 4.5879, 3.3633, 2.1036, 4.3829, 1.336, 4.6993, .9405, 5.3321, .545, 5.9649, .545, 6.7911, .545, 7.3184, .7413, 7.7608, .9375, 8.2032, 1.2686, 8.5049, 1.5997, 8.8067, 2.042, 9.0206,
                    2.4844, 9.2344, 2.9678, 9.3311, 3.4512, 9.4278, 3.9551, 9.4278, 4.4004, 9.4278, 4.8897, 9.3428, 5.379, 9.2579, 5.7598, 9.1407, 6.1407, 9.0235, 6.46, 8.9063, 6.7793, 8.7891, 6.9551, 8.7071, 7.125, 8.625, 6.5743, 6.9961, 6.5274, 7.0313, 6.4454, 7.084, 6.3633, 7.1368, 6.1026, 7.2745, 5.8418, 7.4122, 5.5752, 7.5176, 5.3086, 7.6231, 4.9249, 7.711, 4.5411, 7.7989, 4.1778, 7.7989, 3.9434, 7.7989, 3.7647, 7.7901, 3.586, 7.7813, 3.3809, 7.752, 3.1758, 7.7227, 3.0293, 7.6641, 2.8829, 7.6055, 2.7569, 7.5147, 2.6309, 7.4239, 2.5694, 7.2833, 2.5079, 7.1426, 2.5079, 6.961, 2.5079,
                    6.8204, 2.543, 6.712, 2.5782, 6.6036, 2.7481, 6.4542, 2.918, 6.3047, 3.2227, 6.1817, 5.3086, 5.3555, 6.1758, 5.0098, 6.794, 4.3067, 7.4122, 3.6036, 7.4122, 2.7305
               ]
          },
          T: {
               bounds: [-.0704, 0, 6.9141, 9.2461],
               commands: "MLLLLLLLZ",
               bearing: [-.0704, -.0645],
               points: [6.8438, 7.7579, 4.4883, 7.7579, 4.4883, 0, 2.3262, 0, 2.3262, 7.7579, -.0704, 7.7579, -.0704, 9.2461, 6.8438, 9.2461]
          },
          U: {
               bounds: [.8204, -.2168, 7.8223, 9.4629],
               commands: "MQQQQQQQQQQQQQLLLQQQQLLZ",
               bearing: [.8204, .8204],
               points: [2.9825, 4.2129, 3, 3.1407, 3.0645, 2.8331, 3.129, 2.5254, 3.1934, 2.3174,
                    3.2579, 2.1094, 3.3487, 1.9747, 3.4395, 1.8399, 3.5684, 1.711, 3.6973, 1.5821, 3.8672, 1.5059, 4.2247, 1.3418, 4.629, 1.3418, 5.0333, 1.3418, 5.2735, 1.3917, 5.5137, 1.4415, 5.6895, 1.5528, 5.8653, 1.6641, 5.9971, 1.7989, 6.129, 1.9336, 6.2139, 2.1446, 6.2989, 2.3555, 6.3545, 2.5577, 6.4102, 2.7598, 6.4336, 3.0528, 6.4805, 3.5391, 6.4805, 4.2129, 6.4805, 9.2461, 8.6426, 9.2461, 8.6426, 4.2364, 8.6426, 2.0508, 7.7081, .917, 6.7735, -.2168, 4.7344, -.2168, 2.6661, -.2168, 1.7227, .9551, .8204, 2.0801, .8204, 4.2364, .8204, 9.2461, 2.9825, 9.2461
               ]
          },
          V: {
               bounds: [-.0469,
                    0, 7.8985, 9.2461
               ],
               commands: "MLLLLLLZ",
               bearing: [-.0469, -.0528],
               points: [1.9688, 9.2461, 3.9258, 2.9473, 5.8125, 9.2461, 7.8516, 9.2461, 4.9688, 0, 2.8243, 0, -.0469, 9.2461]
          },
          W: {
               bounds: [.129, 0, 11.4493, 9.2461],
               commands: "MLLLLLLLLLLLLZ",
               bearing: [.129, .1172],
               points: [4.7051, 9.17, 7.0079, 9.17, 8.2208, 2.625, 9.4922, 9.2461, 11.5782, 9.2461, 9.5977, 0, 7.2247, 0, 5.8536, 7.0606, 4.4883, 0, 2.1094, 0, .129, 9.2461, 2.2208, 9.2461, 3.4922, 2.625]
          },
          X: {
               bounds: [-.0293, 0, 8.0743, 9.2461],
               commands: "MLLLLLLLLLLLZ",
               bearing: [-.0293, -.0293],
               points: [4.0079,
                    6.252, 5.8008, 9.2461, 8.045, 9.2461, 5.2149, 4.67, 8.045, 0, 5.754, 0, 4.0079, 2.8946, 2.2618, 0, -.0293, 0, 2.8008, 4.67, -.0293, 9.2461, 2.2149, 9.2461
               ]
          },
          Y: {
               bounds: [-.3633, 0, 7.9805, 9.2461],
               commands: "MLLLLLLLLZ",
               bearing: [-.3633, -.375],
               points: [3.6094, 5.3028, 5.4258, 9.2461, 7.6172, 9.2461, 4.629, 3.0352, 4.629, 0, 2.5899, 0, 2.5899, 3.0352, -.3633, 9.2461, 1.793, 9.2461]
          },
          Z: {
               bounds: [.3106, 0, 6.504, 9.2461],
               commands: "MLLLLLLLLLZ",
               bearing: [.3106, .3985],
               points: [6.8028, 9.2461, 6.8028, 7.9336, 2.7305, 1.7344, 6.8145, 1.7344, 6.8145, 0, .3106, 0, .3106,
                    1.4708, 4.4239, 7.7579, .3106, 7.7579, .3106, 9.2461
               ]
          },
          a: {
               bounds: [.5508, -.1524, 6.0528, 7.1602],
               commands: "MQQQQLQQQZMQLQQQLLLQQQQQQQQQQZ",
               bearing: [.5508, .7149],
               points: [2.9239, 2.9942, 2.6016, 2.7833, 2.6016, 2.2852, 2.6016, 1.7872, 2.8301, 1.5293, 3.0586, 1.2715, 3.4688, 1.2715, 4.1133, 1.2715, 4.5645, 1.8165, 4.5645, 3.1583, 4.5762, 3.17, 4.3389, 3.1875, 4.1016, 3.2051, 4.002, 3.2051, 3.2461, 3.2051, 2.9239, 2.9942, 3.6563, 5.5899, 2.4786, 5.5899, 1.4708, 5.1153, .9844, 6.3399, 2.0625, 7.0079, 3.7266, 7.0079, 5.6368, 7.0079, 6.2461, 5.7891, 6.6036, 5.086,
                    6.6036, 3.9493, 6.6036, 0, 5.0157, 0, 4.7344, .879, 4.4356, .3633, 4.0137, .1055, 3.5918, -.1524, 2.9356, -.1524, 1.8047, -.1524, 1.1778, .4366, .5508, 1.0254, .5508, 2.1182, .5508, 3.211, 1.3711, 3.7413, 2.1915, 4.2715, 3.668, 4.2715, 4.1836, 4.2715, 4.5645, 4.2012, 4.5645, 4.8809, 4.5059, 5.0333, 4.3829, 5.3672, 4.1866, 5.4786, 3.9903, 5.5899, 3.6563, 5.5899
               ]
          },
          b: {
               bounds: [1.1075, -.1524, 6.4747, 10.2598],
               commands: "MQLLLLLQQQQQZMQQQQLQZ",
               bearing: [1.1075, .4571],
               points: [4.8223, -.1524, 3.3516, -.1524, 2.9883, .9727, 2.543, 0, 1.1075, 0, 1.1075, 9.8321, 3.1641,
                    10.1075, 3.1641, 6.211, 3.8672, 7.0079, 5.0157, 7.0079, 5.8301, 7.0079, 6.4102, 6.5567, 7.5821, 5.6543, 7.5821, 3.4336, 7.5821, .6915, 5.8946, .0352, 5.4258, -.1524, 4.8223, -.1524, 4.3477, 1.1719, 5.5313, 1.1719, 5.5313, 3.4336, 5.5313, 4.7579, 5.2852, 5.2383, 5.0391, 5.6954, 4.5293, 5.6954, 3.8555, 5.6954, 3.1641, 5.0157, 3.1641, 1.7344, 3.6797, 1.1719, 4.3477, 1.1719
               ]
          },
          c: {
               bounds: [.586, -.1465, 5.6543, 7.1543],
               commands: "MQQQQQQQLQQQQQQQLQQQQQZ",
               bearing: [.586, .3633],
               points: [.8438, 1.8633, .586, 2.5372, .586, 3.3487, .586, 4.1602, .7676, 4.7374, .9493, 5.3145,
                    1.2657, 5.7247, 1.5821, 6.1348, 2.004, 6.4278, 2.8418, 7.0079, 3.8907, 7.0079, 4.67, 7.0079, 5.1827, 6.8584, 5.6954, 6.709, 6.2403, 6.4219, 5.8594, 5.1036, 5.7012, 5.2559, 5.209, 5.4405, 4.7168, 5.625, 4.2422, 5.625, 3.3692, 5.625, 3.0088, 5.1182, 2.6485, 4.6114, 2.6485, 3.4336, 2.6485, 1.2364, 4.4004, 1.2364, 5.0508, 1.2364, 5.7774, 1.7051, 5.8536, 1.752, 5.8536, 1.7579, 6.2344, .4395, 5.877, .252, 5.6133, .1465, 4.8926, -.1465, 4.043, -.1465, 3.1934, -.1465, 2.5958, .0879, 1.9981, .3223, 1.5499, .7559, 1.1016, 1.1895, .8438, 1.8633
               ]
          },
          d: {
               bounds: [.627, -.1524, 6.4864,
                    10.2657
               ],
               commands: "MQQQQQLLLLLQQQQQQZMQQLQQQZ",
               bearing: [.627, .9375],
               points: [.7149, 2.2735, .627, 2.7833, .627, 3.6563, .627, 4.5293, .9317, 5.3174, 1.2364, 6.1055, 1.834, 6.5567, 2.4317, 7.0079, 3.2461, 7.0079, 4.418, 7.0079, 5.0567, 6.129, 5.0567, 9.8321, 7.1133, 10.1133, 7.1133, 0, 5.6661, 0, 5.2208, .9727, 5.0918, .5333, 4.6114, .2227, 4.0372, -.1524, 3.3692, -.1524, 2.795, -.1524, 2.3204, .0323, 1.8458, .2168, 1.5323, .5362, 1.2188, .8555, 1.0108, 1.3096, .8028, 1.7637, .7149, 2.2735, 2.6778, 3.4336, 2.6778, 1.2305, 3.8614, 1.2305, 4.6934, 1.2305, 5.0567,
                    1.7344, 5.0567, 5.0157, 4.3594, 5.6368, 3.6797, 5.6368, 2.7774, 5.6368, 2.6954, 4.1075, 2.6778, 3.8497, 2.6778, 3.4336
               ]
          },
          e: {
               bounds: [.545, -.1524, 6.211, 7.1602],
               commands: "MQQQZMLQQQQQQQQLLQQQZ",
               bearing: [.545, .4688],
               points: [5.0801, 3.961, 5.0977, 5.625, 3.9024, 5.625, 3.504, 5.625, 3.2168, 5.3907, 2.6719, 4.9395, 2.6719, 3.961, 6.0176, 1.7813, 6.4043, .4102, 5.3145, -.1465, 4.125, -.1524, 1.8399, -.1524, .961, 1.5118, .545, 2.3145, .5684, 3.3165, .5918, 4.3184, .8497, 4.9747, 1.1075, 5.6309, 1.5586, 6.0762, 2.4961, 7.0079, 3.9375, 7.0079, 4.8106, 7.0079, 5.4493,
                    6.6211, 6.7559, 5.8243, 6.7442, 3.9024, 6.7442, 2.9415, 2.6778, 2.9415, 2.7012, 2.168, 3.129, 1.6993, 3.5567, 1.2364, 4.2833, 1.2422, 5.2852, 1.2481, 6.0176, 1.7813
               ]
          },
          f: {
               bounds: [.3633, 0, 4.8458, 9.9317],
               commands: "MQQLLLLLLLLLQQQLQZ",
               bearing: [.3633, -.1231],
               points: [4.336, 8.4141, 3.9258, 8.4141, 3.7295, 8.0655, 3.5333, 7.7168, 3.5333, 6.8028, 5.1739, 6.8028, 5.1739, 5.9532, 3.5274, 5.9532, 3.5274, 0, 1.4766, 0, 1.4766, 5.9532, .3633, 5.9532, .3633, 6.8028, 1.4766, 6.8028, 1.4766, 8.3555, 2.0625, 9.1436, 2.6485, 9.9317, 3.8672, 9.9317, 4.5352, 9.9317, 5.209,
                    9.7618, 5.209, 8.2676, 4.8165, 8.4141, 4.336, 8.4141
               ]
          },
          g: {
               bounds: [.4571, -3.2754, 7.084, 10.2833],
               commands: "MQQQQQQQQQQQLQQQZMLQQQQQQQZMQQQQQLLLQQQQQQQQQQQLQQQQQQLLZ",
               bearing: [.4571, -.1172],
               points: [2.1827, -.6241, 2.086, -.8028, 2.086, -.9756, 2.086, -1.1485, 2.1065, -1.2569, 2.127, -1.3653, 2.2061, -1.4766, 2.2852, -1.5879, 2.4375, -1.6465, 2.7774, -1.7813, 3.3868, -1.7813, 3.9961, -1.7813, 4.3448, -1.7315, 4.6934, -1.6817, 4.8956, -1.6026, 5.0977, -1.5235, 5.2149, -1.3887, 5.3965, -1.1719, 5.3995, -.8438, 5.4024, -.5157, 5.2911, -.3575, 5.0625, -.0293, 3.8438, .0879, 3.0235, .17, 2.9766, .17, 2.7627, 0, 2.5489, -.17, 2.4141, -.3077, 2.2793, -.4454, 2.1827, -.6241, 3.2227, 3.545, 3.9375, 3.6036, 4.254, 3.627, 4.5235, 3.9844, 4.7872, 4.3477, 4.7754, 4.711, 4.7754, 5.6719, 3.7208, 5.6719, 3.1758, 5.6719, 2.9004, 5.4522, 2.625, 5.2325, 2.625, 4.6495, 2.625, 4.0665, 3.0118, 3.6915, 3.1055, 3.6036, 3.2227, 3.545, 6.0938, 5.6719, 6.4688, 5.1094, 6.4688, 4.7872, 6.4688, 4.4649, 6.4102, 4.1954, 6.3516, 3.9258, 6.1846, 3.6211, 6.0176, 3.3165, 5.7598, 3.0821, 5.168, 2.5723, 4.0723, 2.4668, 2.2969, 2.2969, 2.4024, 1.5938,
                    3.9727, 1.4766, 5.6133, 1.3536, 6.3985, .8057, 7.1836, .2579, 7.1836, -.8497, 7.1836, -3.2754, 3.4336, -3.2754, .8731, -3.2754, .5274, -1.9278, .4571, -1.6524, .4571, -1.1954, .4571, -.7383, .7735, -.2813, 1.0899, .1758, 1.67, .4688, .7559, .5567, .6387, 1.5762, .6036, 2.0684, .668, 2.2442, .7325, 2.42, .8379, 2.5665, 1.0665, 2.8946, 1.6758, 3.0938, 2.1504, 3.2227, 1.3477, 3.2579, .9961, 3.8379, .7969, 4.1602, .7969, 4.6348, .7969, 5.754, 1.5381, 6.3809, 2.2793, 7.0079, 3.5274, 7.0079, 4.7754, 7.0079, 5.3204, 6.6563, 6.0997, 6.9961, 6.9493, 6.9961, 7.5411, 6.9961, 7.5411,
                    5.6719
               ]
          },
          h: {
               bounds: [1.1075, 0, 6.3165, 10.125],
               commands: "MLQQQQQLLLQQQQQLLLZ",
               bearing: [1.1075, .7208],
               points: [3.1583, 10.125, 3.1583, 6.1934, 3.1934, 6.2813, 3.378, 6.4483, 3.5625, 6.6153, 3.7559, 6.7266, 4.2422, 7.0079, 4.9922, 7.0079, 6.1465, 7.0079, 6.7852, 6.3106, 7.4239, 5.6133, 7.4239, 4.2364, 7.4239, 0, 5.3731, 0, 5.3731, 4.377, 5.3731, 5.004, 5.0889, 5.3204, 4.8047, 5.6368, 4.4151, 5.6368, 4.0254, 5.6368, 3.7999, 5.5694, 3.5743, 5.502, 3.4571, 5.42, 3.3399, 5.3379, 3.1583, 5.1797, 3.1583, 0, 1.1075, 0, 1.1075, 9.7735]
          },
          i: {
               bounds: [1.1543, -.0176, 2.2793,
                    10.5704
               ],
               commands: "MQQQQQQQQZMLLLZ",
               bearing: [1.1543, .8379],
               points: [1.1543, 9.4161, 1.1543, 9.9024, 1.4795, 10.2276, 1.8047, 10.5528, 2.2852, 10.5528, 2.7657, 10.5528, 3.0997, 10.2276, 3.4336, 9.9024, 3.4336, 9.4161, 3.4336, 8.9297, 3.0997, 8.6045, 2.7657, 8.2793, 2.2852, 8.2793, 1.8047, 8.2793, 1.4795, 8.6045, 1.1543, 8.9297, 1.1543, 9.4161, 3.3106, -.0176, 1.2598, -.0176, 1.2598, 6.7793, 3.3106, 6.7793]
          },
          j: {
               bounds: [-.0528, -2.0391, 3.3516, 12.5743],
               commands: "MQQQQLLLQQQQZMQQQQQQQQZ",
               bearing: [-.0528, .9786],
               points: [-.0528, -.6622, .252, -.4922,
                    .4512, -.337, .6504, -.1817, .8262, .0469, 1.002, .2754, 1.087, .586, 1.1719, .8965, 1.1719, 1.3067, 1.1719, 6.7969, 3.2286, 6.7969, 3.2286, 1.1895, 3.2286, .5684, 3.0176, .0118, 2.8067, -.545, 2.4405, -.9522, 2.0743, -1.3594, 1.6026, -1.6377, 1.1309, -1.9161, .5977, -2.0391, 1.084, 9.4014, 1.084, 9.8907, 1.3975, 10.2129, 1.711, 10.5352, 2.1915, 10.5352, 2.6719, 10.5352, 2.9854, 10.2129, 3.2989, 9.8907, 3.2989, 9.4014, 3.2989, 8.9122, 2.9854, 8.587, 2.6719, 8.2618, 2.1915, 8.2618, 1.711, 8.2618, 1.3975, 8.587, 1.084, 8.9122, 1.084, 9.4014
               ]
          },
          k: {
               bounds: [1.1075, 0, 6.9258,
                    10.1192
               ],
               commands: "MLLLLLLLLLLLZ",
               bearing: [1.1075, -.0118],
               points: [3.1641, 2.3965, 3.1641, 0, 1.1075, 0, 1.1075, 9.8321, 3.1641, 10.1192, 3.1641, 4.3125, 5.7422, 6.8497, 7.9747, 6.8497, 4.9747, 3.8028, 8.0333, 0, 5.7188, 0, 3.7032, 2.9063]
          },
          l: {
               bounds: [1.0196, 0, 2.0567, 10.1133],
               commands: "MLLLZ",
               bearing: [1.0196, .9551],
               points: [3.0762, 10.1133, 3.0762, 0, 1.0196, 0, 1.0196, 9.8321]
          },
          m: {
               bounds: [1.1075, 0, 9.7911, 7.0079],
               commands: "MQLLLLLQQQQQQQQLLLQQQLLLQQQZ",
               bearing: [1.1075, .7208],
               points: [3.961, 5.5665, 3.4043, 5.3086, 3.1641, 4.8692, 3.1641,
                    0, 1.1075, 0, 1.1075, 6.7969, 2.5606, 6.7969, 3.0176, 5.754, 3.2579, 6.3926, 3.6915, 6.6856, 4.1719, 7.0079, 4.8633, 7.0079, 5.5196, 7.0079, 5.9737, 6.7823, 6.4278, 6.5567, 6.7032, 5.9883, 7.0606, 6.504, 7.5381, 6.7559, 8.0157, 7.0079, 8.7833, 7.0079, 9.8321, 7.0079, 10.3653, 6.334, 10.8985, 5.6602, 10.8985, 4.4239, 10.8985, 0, 8.8418, 0, 8.8418, 4.5821, 8.8418, 5.625, 8.1446, 5.625, 7.8692, 5.625, 7.6231, 5.4932, 7.377, 5.3614, 7.0547, 5.0508, 7.0547, 0, 4.9981, 0, 4.9981, 4.6407, 4.9981, 5.4434, 4.6055, 5.584, 4.4942, 5.625, 4.3243, 5.625, 4.0899, 5.625, 3.961, 5.5665
               ]
          },
          n: {
               bounds: [1.0723, 0, 6.1524, 7.0079],
               commands: "MQQQLLLQQQQLLLLZ",
               bearing: [1.0723, .7618],
               points: [3.0235, 5.9239, 3.5508, 7.0079, 4.8135, 7.0079, 6.0762, 7.0079, 6.6504, 6.3194, 7.2247, 5.6309, 7.2247, 4.2247, 7.2247, 0, 5.168, 0, 5.168, 4.377, 5.168, 5.0625, 4.96, 5.3409, 4.752, 5.6192, 4.3096, 5.6338, 3.8672, 5.6485, 3.5713, 5.461, 3.2754, 5.2735, 3.129, 5.0157, 3.129, 0, 1.0723, 0, 1.0723, 6.7969, 2.6309, 6.7969]
          },
          o: {
               bounds: [.4102, -.1524, 6.668, 7.1602],
               commands: "MQQQQQQQQZMQQQQQQQQZ",
               bearing: [.4102, .4278],
               points: [3.75, 1.2188, 4.4063, 1.2188, 4.7227,
                    1.752, 5.0391, 2.2852, 5.0391, 3.4219, 5.0391, 4.5586, 4.7227, 5.0918, 4.4063, 5.625, 3.75, 5.625, 3.0938, 5.625, 2.7774, 5.0918, 2.461, 4.5586, 2.461, 3.4219, 2.461, 2.2852, 2.7774, 1.752, 3.0938, 1.2188, 3.75, 1.2188, 3.7442, 7.0079, 5.3438, 7.0079, 6.211, 6.0616, 7.0782, 5.1153, 7.0782, 3.4102, 7.0782, 1.7168, 6.2168, .7823, 5.3555, -.1524, 3.75, -.1524, 2.1446, -.1524, 1.2774, .7823, .4102, 1.7168, .4102, 3.4102, .4102, 5.1153, 1.2774, 6.0616, 2.1446, 7.0079, 3.7442, 7.0079
               ]
          },
          p: {
               bounds: [.9375, -2.379, 6.504, 9.3868],
               commands: "MQLLLLLQQQQQQQZMQQQQQQQLQQQQZ",
               bearing: [.9375, .4571],
               points: [4.5938, -.1524, 3.6211, -.1524, 2.9942, .7032, 2.9942, -2.379, .9375, -2.379, .9375, 6.7969, 2.502, 6.7969, 2.8887, 5.9122, 3.0645, 6.4336, 3.5157, 6.7208, 3.9727, 7.0079, 4.7286, 7.0079, 5.4844, 7.0079, 5.9795, 6.7559, 6.4747, 6.504, 6.7969, 6.0176, 7.4415, 5.045, 7.4415, 3.3311, 7.4415, 1.6172, 6.6592, .7325, 5.877, -.1524, 4.5938, -.1524, 5.3672, 2.9385, 5.379, 3.2168, 5.379, 3.5479, 5.379, 3.879, 5.3672, 4.0958, 5.3555, 4.3125, 5.3233, 4.5733, 5.2911, 4.834, 5.2208, 5.0098, 5.1504, 5.1856, 5.0391, 5.3438, 4.8282, 5.6485, 4.3536, 5.6485,
                    3.6036, 5.6485, 2.9942, 5.0215, 2.9942, 1.8985, 3.8321, 1.2188, 4.377, 1.2188, 4.834, 1.2188, 5.0508, 1.5645, 5.2676, 1.9102, 5.3116, 2.2852, 5.3555, 2.6602, 5.3672, 2.9385
               ]
          },
          q: {
               bounds: [.6036, -2.379, 6.4864, 9.3868],
               commands: "MQQQLLLLLQQQQQZMQQQQQQQLQQQQQZ",
               bearing: [.6036, .879],
               points: [2.3731, 6.8321, 2.8536, 7.0079, 3.4278, 7.0079, 4.002, 7.0079, 4.4473, 6.6915, 4.7813, 6.4805, 5.045, 5.8829, 5.3321, 6.7969, 7.0899, 6.7969, 7.0899, -2.379, 5.0333, -2.379, 5.0333, .709, 4.3067, -.1465, 3.4336, -.1465, 2.8125, -.1465, 2.2911, .0586, 1.7696, .2637, 1.4766,
                    .627, .6036, 1.6934, .6036, 3.3106, .6036, 6.17, 2.3731, 6.8321, 2.7012, 4.2833, 2.6485, 3.9317, 2.6485, 3.5186, 2.6485, 3.1055, 2.6602, 2.8858, 2.6719, 2.6661, 2.7042, 2.3936, 2.7364, 2.1211, 2.8038, 1.9307, 2.8711, 1.7403, 2.9766, 1.5704, 3.1934, 1.2247, 3.6504, 1.2247, 4.3418, 1.2247, 5.0333, 1.9043, 5.0333, 4.8692, 4.7813, 5.2735, 4.5586, 5.4317, 4.2833, 5.625, 3.8672, 5.625, 3.4922, 5.625, 3.2491, 5.4463, 3.0059, 5.2676, 2.8799, 4.9512, 2.754, 4.6348, 2.7012, 4.2833
               ]
          },
          r: {
               bounds: [1.043, 0, 4.0547, 6.8086],
               commands: "MQQQQLQQLLLLZ",
               bearing: [1.043, .0704],
               points: [3.0411,
                    5.7188, 3.1758, 6.0704, 3.3575, 6.252, 3.5567, 6.4454, 3.7383, 6.5333, 3.9375, 6.6329, 4.2305, 6.7208, 4.5235, 6.8086, 5.0977, 6.8086, 5.0977, 5.0567, 4.7989, 5.1622, 4.4297, 5.1622, 3.7559, 5.1622, 3.0997, 4.6641, 3.0997, 0, 1.043, 0, 1.043, 6.7969, 2.8067, 6.7969
               ]
          },
          s: {
               bounds: [.7208, -.1465, 5.3848, 7.1543],
               commands: "MQQQQQQLLQQQQQQQLQQQQQLQQQQQZ",
               bearing: [.7208, .6563],
               points: [2.6426, 2.9063, 1.4766, 3.3575, 1.1309, 3.7325, .7208, 4.1778, .7208, 5.0625, .7208, 5.9473, 1.4444, 6.4776, 2.168, 7.0079, 3.4629, 7.0079, 4.1485, 7.0079, 4.8399, 6.8292, 5.5313,
                    6.6504, 5.836, 6.5215, 5.9766, 6.4688, 5.5899, 5.168, 5.1622, 5.3321, 4.5938, 5.4639, 4.0254, 5.5958, 3.627, 5.6045, 3.2286, 5.6133, 2.9942, 5.5459, 2.7598, 5.4786, 2.6749, 5.3907, 2.5899, 5.3028, 2.5752, 5.0743, 2.5606, 4.8458, 2.6719, 4.7344, 2.7833, 4.6231, 3.0997, 4.5, 4.8458, 3.8321, 5.2149, 3.6973, 5.4727, 3.5098, 6.1055, 3.0528, 6.1055, 2.0391, 6.1055, .6563, 4.8926, .1524, 4.1661, -.1465, 3.3399, -.1465, 1.7461, -.1465, .7383, .4571, 1.125, 1.793, 1.5645, 1.5938, 2.1856, 1.4239, 2.7657, 1.2715, 3.211, 1.2598, 3.7208, 1.2481, 3.9258, 1.3653, 4.1954, 1.5176, 4.1954,
                    1.9864, 4.1895, 2.2969, 3.5625, 2.543
               ]
          },
          t: {
               bounds: [0, -.0938, 5.379, 9.92],
               commands: "MQQQQLLLLLLLLLLLQQQQQLQQQQQZ",
               bearing: [0, .1407],
               points: [3.3809, -.0938, 2.8594, -.0938, 2.4698, .0557, 2.0801, .2051, 1.7989, .5274, 1.5176, .8497, 1.3741, 1.3829, 1.2305, 1.9161, 1.2305, 2.6543, 1.2305, 5.9532, 0, 5.9532, 0, 6.7969, 1.2833, 6.7969, 1.3418, 9.334, 3.2754, 9.8262, 3.2754, 6.7969, 5.1856, 6.7969, 5.1856, 5.9532, 3.2754, 5.9532, 3.2754, 2.4493, 3.2754, 1.9219, 3.4366, 1.6436, 3.5977, 1.3653, 3.9844, 1.3594, 4.1836, 1.3594, 4.4122, 1.4327, 4.6407, 1.5059, 4.7696,
                    1.5821, 4.9043, 1.6524, 4.8985, 1.6641, 5.379, .4278, 5.3438, .4043, 5.2823, .3692, 5.2208, .334, 5.0127, .2461, 4.8047, .1583, 4.585, .0879, 4.3653, .0176, 4.0342, -.0381, 3.7032, -.0938, 3.3809, -.0938
               ]
          },
          u: {
               bounds: [1.1719, -.1524, 6.0528, 6.9493],
               commands: "MQQQLLLLLQQQQLLZ",
               bearing: [1.1719, .6915],
               points: [3.1993, 2.4786, 3.1934, 1.8985, 3.3985, 1.5586, 3.5918, 1.2422, 4.0782, 1.2188, 4.7051, 1.2657, 5.168, 1.7813, 5.168, 6.7969, 7.2247, 6.7969, 7.2247, 0, 5.7774, 0, 5.3262, 1.0372, 5.0743, .3926, 4.7872, .1758, 4.3711, -.1524, 3.6797, -.1524, 2.4024, -.1524,
                    1.7872, .545, 1.1719, 1.2422, 1.1719, 2.6309, 1.1719, 6.7969, 3.1993, 6.7969
               ]
          },
          v: {
               bounds: [.0352, 0, 6.8438, 6.7969],
               commands: "MLLLLLLZ",
               bearing: [.0352, .0352],
               points: [4.6934, 0, 2.209, 0, .0352, 6.7969, 2.1915, 6.7969, 3.4512, 1.7637, 4.6993, 6.7969, 6.879, 6.7969]
          },
          w: {
               bounds: [.1407, 0, 9.2403, 6.7969],
               commands: "MLLLLLLLLLLLLZ",
               bearing: [.1407, .1407],
               points: [5.6133, 0, 4.7344, 3.8204, 3.879, 0, 1.834, 0, .1407, 6.7969, 2.045, 6.7969, 2.9356, 2.3614, 3.8614, 6.7969, 5.6602, 6.7969, 6.5801, 2.3731, 7.5118, 6.7969, 9.3809, 6.7969, 7.6817, 0]
          },
          x: {
               bounds: [-.0293,
                    0, 6.7969, 6.7969
               ],
               commands: "MLLLLLLLLLLLZ",
               bearing: [-.0293, -.0586],
               points: [3.3809, 2.0274, 2.2852, 0, .0176, 0, 2.3379, 3.4219, -.0293, 6.7969, 2.2852, 6.7969, 3.4043, 4.8809, 4.4942, 6.7969, 6.7676, 6.7969, 4.4532, 3.4219, 6.7325, 0, 4.4942, 0]
          },
          y: {
               bounds: [.1407, -2.7422, 6.9141, 9.5391],
               commands: "MLLLLLLQQLQQQQZ",
               bearing: [.1407, .1348],
               points: [2.9649, .252, .1407, 6.7969, 2.2383, 6.7969, 3.8555, 2.1915, 4.9805, 6.7969, 7.0547, 6.7969, 4.7344, -.1875, 4.3125, -1.4883, 3.5391, -2.1094, 2.7657, -2.7305, 1.4766, -2.7422, .9024, -1.3536, 1.4649, -1.3125,
                    1.8223, -1.21, 2.1797, -1.1075, 2.4024, -.8907, 2.625, -.6739, 2.7364, -.4249, 2.8477, -.1758, 2.9649, .252
               ]
          },
          z: {
               bounds: [.5977, 0, 5.127, 6.8086],
               commands: "MLLLLLLLLLZ",
               bearing: [.5977, .4454],
               points: [3.4571, 5.2559, .668, 5.2618, .668, 6.8086, 5.6602, 6.8086, 5.6602, 5.4551, 2.8418, 1.5469, 5.7247, 1.5469, 5.7247, 0, .5977, 0, .5977, 1.3653]
          },
          0: {
               bounds: [.8262, -.1583, 6.8672, 7.2247],
               commands: "MQQQQQQQQQQQQQQQQQQZMQQQQQQQQQQQZ",
               bearing: [.8262, .8438],
               points: [4.2481, 1.3653, 4.5938, 1.3653, 4.8575, 1.4737, 5.1211, 1.5821, 5.294, 1.7725, 5.4668, 1.9629,
                    5.5752, 2.2413, 5.6836, 2.5196, 5.7276, 2.8301, 5.7715, 3.1407, 5.7715, 3.5274, 5.7715, 3.9668, 5.6924, 4.3184, 5.6133, 4.67, 5.4405, 4.9512, 5.2676, 5.2325, 4.9659, 5.3877, 4.6641, 5.543, 4.2481, 5.543, 3.9141, 5.543, 3.6534, 5.4288, 3.3926, 5.3145, 3.2256, 5.1241, 3.0586, 4.9336, 2.9502, 4.6641, 2.8418, 4.3946, 2.7979, 4.1016, 2.754, 3.8086, 2.7598, 3.4688, 2.7657, 2.9825, 2.8389, 2.6133, 2.9122, 2.2442, 3.0792, 1.9542, 3.2461, 1.6641, 3.542, 1.5147, 3.8379, 1.3653, 4.2481, 1.3653, 4.2481, 7.0665, 5.3614, 7.0665, 6.1436, 6.6241, 6.9258, 6.1817, 7.3096, 5.376, 7.6934,
                    4.5704, 7.6934, 3.4571, 7.6934, 2.3497, 7.3038, 1.5411, 6.9141, .7325, 6.1348, .2872, 5.3555, -.1583, 4.251, -.1583, 3.1465, -.1583, 2.3702, .2901, 1.5938, .7383, 1.21, 1.544, .8262, 2.3497, .8262, 3.4571, .8262, 5.1563, 1.7051, 6.1114, 2.584, 7.0665, 4.2481, 7.0665
               ]
          },
          1: {
               bounds: [.586, 0, 3.504, 6.8614],
               commands: "MLLLLLLZ",
               bearing: [.586, 1.254],
               points: [2.0508, 0, 2.0508, 5.2266, 1.1368, 4.834, .586, 6.2286, 2.1504, 6.8614, 4.0899, 6.8497, 4.0899, 0]
          },
          2: {
               bounds: [.8204, 0, 5.3731, 6.9786],
               commands: "MQQQQLQLLLQQQQQQQQQQQLLLLLLQQLQLQQQQZ",
               bearing: [.8204,
                    .6856
               ],
               points: [4.2422, 4.6055, 4.2422, 5.0333, 4.0284, 5.2413, 3.8145, 5.4493, 3.3399, 5.4493, 3.0821, 5.4493, 2.7481, 5.3672, 2.4141, 5.2852, 2.0977, 5.1563, 1.629, 4.9629, 1.4766, 4.8985, 1.3594, 4.8399, 1.3536, 4.834, .8204, 6.2344, .8321, 6.2403, .9786, 6.3165, 1.1631, 6.3956, 1.3477, 6.4747, 1.7461, 6.6299, 2.1446, 6.7852, 2.6045, 6.8819, 3.0645, 6.9786, 3.4688, 6.9786, 3.8731, 6.9786, 4.2481, 6.9141, 4.6231, 6.8497, 4.9834, 6.6944, 5.3438, 6.5391, 5.6075, 6.3077, 5.8711, 6.0762, 6.0323, 5.71, 6.1934, 5.3438, 6.1934, 4.8868, 6.1934, 4.1954, 5.8565, 3.6299, 5.5196,
                    3.0645, 4.6758, 2.3204, 3.8321, 1.5704, 6.0118, 1.5704, 6.0118, 0, .9844, 0, .9844, 1.2715, 2.8887, 2.8829, 2.9122, 2.9004, 3.0674, 3.0293, 3.2227, 3.1583, 3.2754, 3.2051, 3.4688, 3.375, 3.6153, 3.504, 3.6739, 3.5743, 3.8438, 3.7618, 3.961, 3.8848, 4.0137, 3.9727, 4.0665, 4.0606, 4.128, 4.1749, 4.1895, 4.2891, 4.2159, 4.3946, 4.2422, 4.5, 4.2422, 4.6055
               ]
          },
          3: {
               bounds: [.7032, -1.0313, 5.3321, 8.0743],
               commands: "MQQQQQQQQLLLQQQQQQQQQQQQQQQQQQQQQLLLQQQQQQQQLQQQQZ",
               bearing: [.7032, .8731],
               points: [4.0079, 4.8575, 4.0079, 5.1856, 3.7413, 5.3467, 3.4747, 5.5079, 3.0411,
                    5.5079, 2.8887, 5.5079, 2.7188, 5.4844, 2.5489, 5.461, 2.3907, 5.4258, 2.2325, 5.3907, 2.0772, 5.3467, 1.9219, 5.3028, 1.7959, 5.2588, 1.67, 5.2149, 1.5733, 5.1768, 1.4766, 5.1387, 1.4239, 5.1211, 1.3711, 5.0977, .7032, 6.4395, .8086, 6.4981, .92, 6.5567, 1.125, 6.6475, 1.3301, 6.7383, 1.585, 6.8262, 1.8399, 6.9141, 2.1915, 6.9786, 2.543, 7.043, 2.8946, 7.043, 3.4278, 7.043, 3.8584, 6.9727, 4.2891, 6.9024, 4.6583, 6.7383, 5.0274, 6.5743, 5.2764, 6.3194, 5.5254, 6.0645, 5.669, 5.6866, 5.8125, 5.3086, 5.8243, 4.8223, 5.836, 4.2715, 5.5137, 3.8057, 5.1915, 3.3399, 4.6465,
                    3.2051, 5.2442, 3.0586, 5.6397, 2.5401, 6.0352, 2.0215, 6.0352, 1.4004, 6.0352, .7793, 5.8067, .3047, 5.5782, -.17, 5.1651, -.4571, 4.752, -.7442, 4.2071, -.8877, 3.6622, -1.0313, 3, -1.0313, 2.625, -1.0313, 2.2618, -.9903, 1.8985, -.9493, 1.6465, -.8907, 1.3946, -.8321, 1.1983, -.7735, 1.002, -.7149, .9083, -.6739, .8086, -.6329, 1.295, .8438, 1.3008, .8438, 1.4297, .7911, 1.6055, .7295, 1.7813, .668, 2.1973, .5743, 2.6133, .4805, 2.9415, .4805, 3.5333, .4805, 3.835, .6856, 4.1368, .8907, 4.1368, 1.3829, 4.1368, 1.7344, 3.8819, 1.9952, 3.627, 2.2559, 3.2374, 2.376, 2.8477,
                    2.4961, 2.4024, 2.4844, 2.4024, 3.9258, 2.7247, 3.9258, 3, 3.9756, 3.2754, 4.0254, 3.5069, 4.1309, 3.7383, 4.2364, 3.8731, 4.4239, 4.0079, 4.6114, 4.0079, 4.8575
               ]
          },
          4: {
               bounds: [.4922, -1.2715, 6.334, 8.4024],
               commands: "MLLLLLLLLLLZMLLZ",
               bearing: [.4922, .6797],
               points: [4.295, 7.1309, 5.7715, 6.7442, 5.7715, 1.8575, 6.8262, 1.8575, 6.8262, .3458, 5.7715, .3458, 5.7715, -1.2715, 4.084, -1.2657, 4.084, .3458, .7325, .3458, .4922, 1.5235, 2.4434, 1.8458, 4.084, 1.8458, 4.084, 4.295]
          },
          5: {
               bounds: [.7559, -1.0899, 5.3907, 7.9395],
               commands: "MLQQQQQQQQQLLLLLLQQQQQQQQQQZ",
               bearing: [.7559, .7325],
               points: [1.002, .9434, 1.125, .8965, 1.2071, .8672, 1.4473, .7911, 1.6875, .7149, 1.9219, .6592, 2.1563, .6036, 2.4756, .5538, 2.795, .504, 3.0645, .504, 3.6973, .4981, 4.0489, .7823, 4.4004, 1.0665, 4.3946, 1.6407, 4.3887, 2.2442, 4.0928, 2.6075, 3.7969, 2.9708, 3.2227, 2.9649, 2.6309, 2.9649, 1.7579, 2.4903, .9375, 3.2168, .9375, 6.8497, 5.6543, 6.8497, 5.6543, 5.4141, 2.584, 5.4141, 2.584, 4.0958, 2.584, 4.1075, 2.6807, 4.1631, 2.7774, 4.2188, 2.9854, 4.2803, 3.1934, 4.3418, 3.4219, 4.3418, 4.6758, 4.3418, 5.4112, 3.6182, 6.1465, 2.8946, 6.1465,
                    1.6641, 6.1465, .8204, 5.751, .1905, 5.3555, -.4395, 4.6553, -.7647, 3.9551, -1.0899, 3.0528, -1.0665, 2.4844, -1.0489, 1.8721, -.8965, 1.2598, -.7442, .7559, -.5274
               ]
          },
          6: {
               bounds: [.8028, -.586, 6.1641, 8.543],
               commands: "MQQQQQQQQQQQQZMQQQQQQQQQQQQQLQQQQQQZ",
               bearing: [.8028, .4571],
               points: [2.7129, 2.6778, 2.7247, 2.2735, 2.7979, 1.9629, 2.8711, 1.6524, 3.0206, 1.418, 3.17, 1.1836, 3.4219, 1.0606, 3.6739, .9375, 4.0196, .9375, 4.2774, .9375, 4.4737, 1.0225, 4.67, 1.1075, 4.793, 1.251, 4.9161, 1.3946, 4.9922, 1.6055, 5.0684, 1.8165, 5.0977, 2.0391, 5.127, 2.2618,
                    5.127, 2.5372, 5.127, 3.0762, 4.8575, 3.3575, 4.5879, 3.6387, 4.0665, 3.6387, 3.2989, 3.6387, 2.7129, 3.0821, 6.9668, 2.2618, 6.9668, 1.6348, 6.7647, 1.1104, 6.5625, .586, 6.1905, .211, 5.8184, -.1641, 5.2647, -.375, 4.711, -.586, 4.0313, -.586, 3.2813, -.586, 2.6631, -.3282, 2.045, -.0704, 1.6436, .3721, 1.2422, .8145, 1.0225, 1.4063, .8028, 1.9981, .8028, 2.6719, .8028, 3.5508, 1.0401, 4.3125, 1.2774, 5.0743, 1.6875, 5.6485, 2.0977, 6.2227, 2.6749, 6.6827, 3.252, 7.1426, 3.9141, 7.4502, 4.5762, 7.7579, 5.3379, 7.9571, 5.8067, 6.4102, 4.0782, 6.0586, 3.3106, 5.0391, 3.7325,
                    5.1211, 4.1075, 5.1211, 4.7461, 5.1211, 5.2911, 4.8868, 5.836, 4.6524, 6.1993, 4.2569, 6.5625, 3.8614, 6.7647, 3.3428, 6.9668, 2.8243, 6.9668, 2.2618
               ]
          },
          7: {
               bounds: [.7618, -1.3829, 5.625, 8.2325],
               commands: "MLLLLLLZ",
               bearing: [.7618, .211],
               points: [5.9063, 6.8497, 6.3868, 5.795, 2.9415, -1.3829, 1.2012, -.6094, 4.0606, 5.3379, .7618, 5.3379, .7618, 6.8497]
          },
          8: {
               bounds: [.8145, -.7442, 6.0235, 8.4961],
               commands: "MQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQZMQQQQQQQQZMQQQQQQZ",
               bearing: [.8145, .8145],
               points: [3.8292, 7.752, 4.4297, 7.752, 4.9424, 7.6055, 5.4551, 7.459,
                    5.8448, 7.1807, 6.2344, 6.9024, 6.4571, 6.4659, 6.6797, 6.0293, 6.6797, 5.4844, 6.6797, 4.7637, 6.2461, 4.2422, 5.8125, 3.7208, 5.1387, 3.586, 5.4668, 3.5391, 5.7715, 3.3721, 6.0762, 3.2051, 6.3135, 2.9532, 6.5508, 2.7012, 6.6944, 2.3497, 6.8379, 1.9981, 6.8379, 1.6114, 6.8379, 1.1192, 6.6739, .7208, 6.5098, .3223, 6.2256, .0528, 5.9415, -.2168, 5.5518, -.3985, 5.1622, -.5801, 4.7315, -.6622, 4.3008, -.7442, 3.8262, -.7442, 3.3516, -.7442, 2.9209, -.6622, 2.4903, -.5801, 2.1036, -.3985, 1.7168, -.2168, 1.4327, .0528, 1.1485, .3223, .9815, .7208, .8145, 1.1192, .8145,
                    1.6114, .8145, 1.9981, .9581, 2.3497, 1.1016, 2.7012, 1.3418, 2.9532, 1.5821, 3.2051, 1.8868, 3.3721, 2.1915, 3.5391, 2.5137, 3.586, 1.8458, 3.7208, 1.4092, 4.2422, .9727, 4.7637, .9727, 5.4844, .9727, 6.0293, 1.1954, 6.4659, 1.418, 6.9024, 1.8077, 7.1807, 2.1973, 7.459, 2.7129, 7.6055, 3.2286, 7.752, 3.8292, 7.752, 3.8292, .8028, 4.4004, .8028, 4.6758, 1.0137, 4.9512, 1.2247, 4.9512, 1.7403, 4.9512, 2.3086, 4.6641, 2.6485, 4.377, 2.9883, 3.8262, 2.9883, 3.2754, 2.9883, 2.9883, 2.6485, 2.7012, 2.3086, 2.7012, 1.7403, 2.7071, 1.2247, 2.9825, 1.0137, 3.2579, .8028, 3.8292,
                    .8028, 3.8262, 4.418, 4.3418, 4.418, 4.5938, 4.6524, 4.8458, 4.8868, 4.8458, 5.4024, 4.8458, 6.2637, 3.8262, 6.2637, 2.8067, 6.2637, 2.8067, 5.4024, 2.8125, 4.8868, 3.0616, 4.6524, 3.3106, 4.418, 3.8262, 4.418
               ]
          },
          9: {
               bounds: [.6797, -1.5821, 6.1758, 8.543],
               commands: "MQQQQLLQQQQQQQQZMQQQQQQQQQQQQLQQQZ",
               bearing: [.6797, .5567],
               points: [2.5254, 4.0079, 2.5196, 3.5098, 2.795, 3.1993, 3.0704, 2.8887, 3.5215, 2.8887, 3.7266, 2.8887, 4.0694, 2.9151, 4.4122, 2.9415, 4.6524, 2.9649, 4.8868, 2.9883, 4.9747, 3.7969, 4.9688, 4.1719, 4.8956, 4.462, 4.8223, 4.752, 4.67, 4.9747,
                    4.5176, 5.1973, 4.2657, 5.3174, 4.0137, 5.4375, 3.668, 5.4375, 3.3223, 5.4375, 3.0938, 5.3467, 2.8653, 5.2559, 2.7452, 5.0596, 2.625, 4.8633, 2.5782, 4.6202, 2.5313, 4.377, 2.5254, 4.0079, 3.545, 1.4356, 2.2559, 1.4356, 1.4678, 2.1417, .6797, 2.8477, .6797, 4.0899, .6797, 4.9278, 1.0342, 5.5811, 1.3887, 6.2344, 2.0391, 6.5977, 2.6895, 6.961, 3.5391, 6.961, 5.1153, 6.961, 5.9854, 6.1026, 6.8555, 5.2442, 6.8555, 3.709, 6.8555, 2.8125, 6.5684, 2.0098, 6.2813, 1.2071, 5.8184, .6211, 5.3555, .0352, 4.752, -.4307, 4.1485, -.8965, 3.5333, -1.1719, 2.918, -1.4473, 2.3086, -1.5821,
                    1.8516, -.0235, 2.7364, .1583, 3.378, .5772, 4.0196, .9961, 4.377, 1.5411, 3.9844, 1.4356, 3.545, 1.4356
               ]
          },
          "+": {
               bounds: [.6739, .5684, 4.9454, 5.6954],
               commands: "MLLLLLLLLLLLZ",
               bearing: [.6739, .6153],
               points: [5.6192, 2.6368, 3.9844, 2.6368, 3.9844, .5684, 2.2969, .5684, 2.2969, 2.6368, .6739, 2.6368, .6739, 4.2129, 2.2969, 4.2129, 2.2969, 6.2637, 3.9844, 6.2637, 3.9844, 4.2129, 5.6192, 4.2129]
          },
          "-": {
               bounds: [.9141, 3.3633, 4.6524, 1.5352],
               commands: "MLLLZ",
               bearing: [.9141, .9961],
               points: [5.5665, 3.3633, .9141, 3.3633, .9141, 4.8985, 5.5665, 4.8985]
          }
     };

     function Jd(a, b, c, d) {
          this.da = a;
          this.$ = b;
          this.Db = c;
          this.ca = d;
          this.ea = new K;
          this.aa = new w(0, 0)
     }
     f = Jd.prototype;
     f.Ma = function() {
          return nd(this.da, this.ea)
     };
     f.ab = function() {
          return this.$
     };
     f.la = function() {
          return this.aa
     };
     f.Ib = function() {
          return this.Db + this.$.width + this.ca
     };
     f.Xb = function() {
          return this.$.height - (this.aa.y - this.$.y)
     };
     f.Cc = function() {
          return this.aa.y - this.$.y
     };
     f.translate = function(a, b) {
          this.ea.translate(a, b);
          this.$.x += a;
          this.$.y += b;
          this.aa.x += a;
          this.aa.y += b
     };

     function Kd(a) {
          this.da = Id;
          var b = this.aa = a / this.da.F.bounds[3],
               c = this.aa,
               d = new K;
          this.ca = Dc(d, b, 0, 0, c, 0, 0);
          this.$ = a
     };

     function Ld() {
          this.$ = 1;
          this.ca = new vd(Md(this), M["line-color"]);
          this.ea = this.aa = new vd(Md(this), M["edit-color"], M["edit-transparency"], [Md(this), 2 * Md(this)]);
          this.da = new Kd(M["node-cap-height"] * this.$)
     }
     var Nd, Od, Pd, Qd, Rd;

     function Sd(a, b) {
          a.$ = b;
          var c = Md(a);
          a.ca.aa = c;
          a.aa.aa = c;
          a.aa.$ = [c, 2 * c];
          a.da = new Kd(M["node-cap-height"] * a.$)
     }

     function Md(a) {
          return M["line-width"] * a.$
     }

     function Td(a) {
          return M["line-offset"] * a.$
     }

     function Ud(a) {
          return M["stereo-width"] * a.$
     }

     function Vd(a) {
          return M["node-radius"] * a.$
     }

     function Wd(a) {
          for (var b in a)
               if ("node-colors" === b) {
                    var c = a[b] || {},
                         d;
                    for (d in c) M[b][d] = a[b][d]
               } else M[b] = a[b];
          Object.keys(M["node-colors"]);
          a = M["node-colors"];
          for (var e in a) Xd[e] = new wd(a[e]);
          Nd = new wd(M["unknown-node-color"]);
          Pd = new wd(M["edit-color"], M["edit-transparency"]);
          Qd = new wd("#ff0000", .75);
          Rd = Pd;
          Nd = new wd(M["unknown-node-color"]);
          Od = new wd(M["line-color"])
     }
     var M = {
               "node-colors": {}
          },
          Xd = {};
     Wd({
          border: .15,
          "line-width": .1,
          "line-offset": .2,
          "line-end-padding": .08,
          "stereo-width": .25,
          "node-cap-height": .42,
          "node-radius": .3,
          "methyl-visible": !1,
          "taper-hash": !0,
          "edit-color": "#00ff00",
          "edit-transparency": .75,
          "line-color": "#000000",
          "unknown-node-color": "#555555",
          "node-colors": {
               N: "#0000ff",
               O: "#ff0000",
               F: "#ff00ff",
               P: "#ff9900",
               S: "#ff9900",
               Cl: "#00ff00",
               Br: "#CC3333",
               I: "#940094"
          }
     });

     function Yd(a, b, c) {
          this.x = da(a) ? a : 0;
          this.y = da(b) ? b : 0;
          this.z = da(c) ? c : 0
     }
     Yd.prototype.clone = function() {
          return new Yd(this.x, this.y, this.z)
     };
     Yd.prototype.toString = function() {
          return "(" + this.x + ", " + this.y + ", " + this.z + ")"
     };

     function Zd(a) {
          F.call(this);
          this.na = a;
          this.pa = [];
          this.ka = [];
          this.ya = this.ma = !1;
          this.ea = new Yd(0, 0, 0)
     }
     t(Zd, F);

     function $d(a) {
          return a.na.$.indexOf(a)
     }
     f = Zd.prototype;
     f.getParent = function() {
          return this.na
     };
     f.eb = function(a) {
          this.ya !== a && (this.ya = a, ae(this, be, this))
     };
     f.ac = function() {
          return this.ya
     };
     f.sa = function(a) {
          this.ma !== a && (this.ma = a, ae(this, ce, this))
     };
     f.Cb = function() {
          return this.ma
     };
     f.Vb = function(a) {
          this.ka.push(a);
          this.pa.push(de(a, this));
          ae(this, ee, this)
     };
     f.Bc = function(a) {
          La(this.ka, a);
          La(this.pa, de(a, this));
          ae(this, ee, this)
     };
     f.vb = function() {
          return this.ka
     };
     f.move = function(a, b, c) {
          if (a !== this.ea.x || b !== this.ea.y || (c || 0) !== this.ea.z) {
               var d = this.Aa();
               this.ea.x = a;
               this.ea.y = b;
               this.ea.z = void 0 === c ? 0 : c;
               ae(this, fe, this, d)
          }
     };
     f.la = function() {
          return this.ea
     };
     f.qb = function(a) {
          a.Wb && (a = a.Wb, this.move(a.x, a.y, a.z))
     };
     f.Aa = function() {
          return {
               Wb: this.ea.clone()
          }
     };

     function ae(a, b, c, d) {
          b = new y(b, c);
          b.rc = d;
          G(a, b)
     }
     var ee = "node-definition-changed",
          ce = "node-selection-changed",
          be = "node-hover-changed",
          fe = "node-moved";

     function ge(a, b, c, d) {
          F.call(this);
          this.aa = this.da = !1;
          this.oa = a;
          this.qa = b;
          this.ca = c;
          this.$ = d || he;
          this.Da(c)
     }
     t(ge, F);
     f = ge.prototype;
     f.Oa = function() {
          return this.$
     };

     function ie(a, b) {
          if (a.$ !== b) {
               var c = a.Aa();
               a.$ = b;
               je(a, ke, a, c)
          }
     }
     f.getParent = function() {
          return this.ca
     };
     f.eb = function(a) {
          a != this.aa && (this.aa = a, je(this, le, this))
     };
     f.ac = function() {
          return this.aa
     };
     f.sa = function(a) {
          a !== this.da && (this.da = a, je(this, me, this))
     };
     f.Cb = function() {
          return this.da
     };

     function de(a, b) {
          if (a.oa === b) return a.qa;
          if (a.qa === b) return a.oa
     }
     f.Aa = function() {
          return {
               source: this.oa,
               target: this.qa,
               Rd: this.$
          }
     };
     f.qb = function(a) {
          var b = a.source,
               c = a.target;
          if (b !== this.oa || c !== this.qa) {
               var d = this.Aa();
               this.oa = b;
               this.qa = c;
               je(this, ke, this, d)
          }
          void 0 !== a.Rd && ie(this, a.Rd)
     };

     function je(a, b, c, d) {
          b = new y(b, c);
          b.rc = d;
          G(a, b)
     }
     var he = "none",
          me = "edge-selection-changed",
          le = "edge-hover-changed",
          ke = "edge-definition-changed";

     function ne() {
          F.call(this);
          this.aa = [];
          this.$ = []
     }
     t(ne, F);

     function oe(a) {
          for (var b = 0; b < a.$.length; b++) a.$[b].sa(!1);
          for (b = 0; b < a.aa.length; b++) a.aa[b].sa(!1)
     }

     function pe(a) {
          for (var b = [], c = 0; c < a.$.length; c++) {
               var d = a.$[c];
               d.Cb() && b.push(d)
          }
          return b
     }
     f = ne.prototype;
     f.jc = function(a) {
          this.$.push(a);
          G(this, new y(qe, a))
     };
     f.sb = function(a) {
          La(this.$, a);
          G(this, new y(re, a))
     };
     f.Tb = function(a) {
          this.aa.push(a);
          G(this, new y(se, a))
     };
     f.Ub = function(a) {
          La(this.aa, a);
          G(this, new y(te, a))
     };
     f.vb = function() {
          return this.aa
     };
     f.connect = function(a, b) {
          var c = new ge(a, b, this);
          a.Vb(c);
          b.Vb(c);
          this.aa.push(c);
          return c
     };

     function ue(a, b, c) {
          for (var d = 0; d < a.aa.length; d++) {
               var e = a.aa[d];
               if (e.oa === b && e.qa === c || e.oa === c && e.qa === b) return e
          }
     }

     function ve(a) {
          a.$ = [];
          a.aa = [];
          G(a, new y(we, a))
     }
     var qe = "node-added",
          re = "node-removed",
          se = "edge-added",
          te = "edge-removed",
          we = "graph-cleared";

     function xe(a, b) {
          Zd.call(this, b);
          var c = this.ca = a;
          this.aa = c.wb(0, c.ga);
          c = this.ca;
          this.$ = c.ga - c.wb(0, c.ga)
     }
     t(xe, Zd);
     f = xe.prototype;
     f.toString = function() {
          return [this.ca.kb, void 0 === this.da ? "" : "-" + this.da.jb, this.ea.toString(), this.Rb() ? "[" + this.Rb() + "]" : "", 0 < this.aa ? "[H" + this.aa + "]" : ""].join("")
     };
     f.fa = function() {
          return this.ca
     };

     function ye(a, b) {
          if (a.ca !== b) {
               var c = a.Aa();
               a.ca = b;
               for (var d = 0, e = 0; e < a.ka.length; e++) d += a.ka[e].Ba;
               a.$ = a.ca.Dc() - d / 2;
               a.aa = 0;
               a.aa = a.ca.wb(ze(a), a.$);
               a.$ -= a.aa;
               delete a.da;
               ae(a, ee, a, c)
          }
     }
     f.Yb = function() {
          return this.da
     };

     function Ae(a, b) {
          if (!(a.da && a.da.jb === b || !a.da && !b)) {
               var c = a.Aa();
               b ? a.da = a.ca.Yb(b) : delete a.da;
               ae(a, ee, a, c)
          }
     }
     f.Dc = function() {
          return this.$
     };
     f.wb = function() {
          return this.aa
     };
     f.Rb = function() {
          return this.ca.Rb(this.$ + ze(this) / 2)
     };

     function ze(a) {
          for (var b = 2 * a.aa, c = 0; c < a.ka.length; c++) b += a.ka[c].Ba;
          return b
     }
     f.Jb = function(a) {
          var b = this.Aa();
          this.$ += this.aa - a;
          this.aa = 0;
          this.aa = this.ca.wb(ze(this), this.$);
          this.$ -= this.aa;
          ae(this, ee, this, b)
     };

     function Be(a) {
          for (var b = 0, c = 0; c < a.ka.length; c++) b += a.ka[c].Ba / 2 - 1;
          return b
     }
     f.Vb = function(a) {
          this.$ += this.aa - a.Ba / 2;
          this.aa = 0;
          this.aa = this.ca.wb(ze(this) + a.Ba, this.$);
          this.$ -= this.aa;
          xe.ia.Vb.call(this, a)
     };
     f.Bc = function(a) {
          this.Aa();
          this.$ += this.aa + a.Ba / 2;
          this.aa = 0;
          this.aa = this.ca.wb(ze(this) - a.Ba, this.$);
          this.$ -= this.aa;
          xe.ia.Bc.call(this, a)
     };
     f.qb = function(a) {
          xe.ia.qb.call(this, a);
          a.element && ye(this, a.element);
          void 0 !== a.Fd && Ae(this, a.Fd);
          if (void 0 !== a.Td) {
               var b = a.Td;
               a = a.sf;
               if (this.aa !== b || this.$ != a) {
                    var c = this.Aa();
                    this.aa = b;
                    this.$ = a;
                    ae(this, ee, this, c)
               }
          }
     };
     f.Aa = function() {
          var a = xe.ia.Aa.call(this);
          a.element = this.ca;
          a.Fd = this.da ? this.da.jb : 0;
          a.Td = this.aa;
          a.sf = this.$;
          return a
     };

     function Ce(a, b, c, d, e) {
          ge.call(this, a, b, d, e);
          if (0 > c) throw De;
          if (c % 2) throw Ee;
          this.Ba = c
     }
     t(Ce, ge);
     Ce.prototype.Jb = function(a) {
          if (a) {
               var b = this.Aa();
               Fe(this, -a);
               2 < this.Ba && (this.$ = he);
               je(this, ke, this, b)
          }
     };

     function Ge(a) {
          var b = a.Aa();
          a.$ === he ? 6 === a.Ba ? Fe(a, -4) : Fe(a, 2) : a.$ = he;
          je(a, ke, a, b)
     }
     Ce.prototype.Aa = function() {
          var a = Ce.ia.Aa.call(this);
          a.Cd = this.Ba;
          return a
     };
     Ce.prototype.qb = function(a) {
          Ce.ia.qb.call(this, a);
          if (a.Cd !== this.Ba) {
               var b = this.Aa();
               this.Ba = a.Cd;
               je(this, ke, this, b)
          }
     };

     function Fe(a, b) {
          a.Ba += b;
          a.oa.Jb(b / 2);
          a.qa.Jb(b / 2)
     }
     var De = "bond-electron-count-negative",
          Ee = "bond-electron-count-odd";

     function He(a, b) {
          this.jb = a;
          this.pf = !0 === b ? !0 : !1
     };

     function Ie(a, b, c) {
          this.kb = a;
          this.$ = b;
          this.Yd = c;
          this.hb = [];
          this.ja = -1;
          this.ga = 0
     }
     f = Ie.prototype;
     f.getName = function() {
          return this.$
     };
     f.ba = function(a, b) {
          var c = new He(a, b);
          this.hb.push(c);
          this.hb.sort(function(a, b) {
               return a.jb - b.jb
          });
          return c
     };

     function Je(a, b) {
          for (var c = 0; c < a.hb.length; c++)
               if (a.hb[c].jb === b) return !0;
          return !1
     }
     f.Yb = function(a) {
          for (var b = 0; b < this.hb.length; b++) {
               var c = this.hb[b];
               if (c.jb === a) return c
          }
          throw Ke;
     };
     f.Rb = function(a) {
          return this.ga - a
     };
     f.wb = function(a, b) {
          return Math.min(8 - a - b, b)
     };
     f.Dc = function() {
          return this.ga
     };
     f.toString = function() {
          for (var a = this.kb, b = [], c = 0; c < this.hb.length; c++) b.push(this.hb[c].jb);
          b.length && (a += "[");
          a += b.join("-");
          b.length && (a += "]");
          return a
     };
     var Ke = "element-isotope-not-found";

     function Le() {
          this.$ = {}
     }

     function N(a, b, c, d) {
          c = new Ie(b, c, d);
          return a.$[b] = c
     }
     Le.prototype.ba = function(a, b) {
          var c = this.$[a];
          if (!c) throw Me;
          if (c.Yd > b) throw Ne;
          c.ba(b)
     };
     Le.prototype.fa = function(a) {
          a = this.$[a];
          if (!a) throw Me;
          return a
     };

     function Oe() {
          if (!Pe) {
               Pe = new Le;
               var a, b = Pe;
               a = N(b, "H", "Hydrogen", 1);
               a.ba(1, !0);
               a.ba(2);
               a.ba(3);
               a.ga = 1;
               a.ja = 1;
               a = N(b, "He", "Helium", 2);
               a.ba(3);
               a.ba(4, !0);
               a.ga = 2;
               a.ja = 18;
               a = N(b, "Li", "Lithium", 3);
               a.ba(6);
               a.ba(7, !0);
               a.ga = 1;
               a.ja = 1;
               a = N(b, "Be", "Beryllium", 4);
               a.ba(9);
               a.ga = 2;
               a.ja = 2;
               a = N(b, "B", "Boron", 5);
               a.ba(10);
               a.ba(11, !0);
               a.ga = 3;
               a.ja = 13;
               a = N(b, "C", "Carbon", 6);
               a.ba(12, !0);
               a.ba(13);
               a.ga = 4;
               a.ja = 14;
               a = N(b, "N", "Nitrogen", 7);
               a.ba(14, !0);
               a.ba(15);
               a.ga = 5;
               a.ja = 15;
               a = N(b, "O", "Oxygen", 8);
               a.ba(16, !0);
               a.ba(17);
               a.ba(18);
               a.ga =
                    6;
               a.ja = 16;
               a = N(b, "F", "Fluorine", 9);
               a.ba(19, !0);
               a.ga = 7;
               a.ja = 17;
               a = N(b, "Ne", "Neon", 10);
               a.ba(20, !0);
               a.ba(21);
               a.ba(22);
               a.ga = 8;
               a.ja = 18;
               a = N(b, "Na", "Sodium", 11);
               a.ba(23, !0);
               a.ga = 1;
               a.ja = 1;
               a = N(b, "Mg", "Magnesium", 12);
               a.ba(24, !0);
               a.ba(25);
               a.ba(26);
               a.ga = 2;
               a.ja = 2;
               a = N(b, "Al", "Aluminum", 13);
               a.ba(27, !0);
               a.ga = 3;
               a.ja = 13;
               a = N(b, "Si", "Silicon", 14);
               a.ba(28, !0);
               a.ba(29);
               a.ba(30);
               a.ga = 4;
               a.ja = 14;
               a = N(b, "P", "Phosphorous", 15);
               a.ba(31, !0);
               a.ga = 5;
               a.ja = 15;
               a = N(b, "S", "Sulfur", 16);
               a.ba(32, !0);
               a.ba(33);
               a.ba(34);
               a.ba(36);
               a.ga = 6;
               a.ja =
                    16;
               a = N(b, "Cl", "Chlorine", 17);
               a.ba(35, !0);
               a.ba(37);
               a.ga = 7;
               a.ja = 17;
               a = N(b, "Ar", "Argon", 18);
               a.ba(36);
               a.ba(38);
               a.ba(40, !0);
               a.ga = 8;
               a.ja = 18;
               a = N(b, "K", "Potassium", 19);
               a.ba(39, !0);
               a.ba(40);
               a.ba(41);
               a.ga = 1;
               a.ja = 1;
               a = N(b, "Ca", "Calcium", 20);
               a.ba(40, !0);
               a.ba(42);
               a.ba(43);
               a.ba(44);
               a.ba(46);
               a.ba(48);
               a.ga = 2;
               a.ja = 2;
               a = N(b, "Sc", "Scandium", 21);
               a.ba(45, !0);
               a.ga = 3;
               a.ja = 3;
               a = N(b, "Ti", "Titanium", 22);
               a.ba(46);
               a.ba(47);
               a.ba(48, !0);
               a.ba(49);
               a.ba(50);
               a.ga = 4;
               a.ja = 4;
               a = N(b, "V", "Vanadium", 23);
               a.ba(50);
               a.ba(51, !0);
               a.ga = 5;
               a.ja = 5;
               a =
                    N(b, "Cr", "Chromium", 24);
               a.ba(50);
               a.ba(52, !0);
               a.ba(53);
               a.ba(54);
               a.ga = 6;
               a.ja = 6;
               a = N(b, "Mn", "Manganese", 25);
               a.ba(55, !0);
               a.ga = 7;
               a.ja = 7;
               a = N(b, "Fe", "Iron", 26);
               a.ba(54);
               a.ba(56, !0);
               a.ba(57);
               a.ba(58);
               a.ga = 8;
               a.ja = 8;
               a = N(b, "Co", "Cobalt", 27);
               a.ba(59, !0);
               a.ga = 9;
               a.ja = 9;
               a = N(b, "Ni", "Nickel", 28);
               a.ba(58, !0);
               a.ba(60);
               a.ba(61);
               a.ba(62);
               a.ba(64);
               a.ga = 10;
               a.ja = 10;
               a = N(b, "Cu", "Copper", 29);
               a.ba(63, !0);
               a.ba(65);
               a.ga = 11;
               a.ja = 11;
               a = N(b, "Zn", "Zinc", 30);
               a.ba(64, !0);
               a.ba(66);
               a.ba(67);
               a.ba(68);
               a.ba(70);
               a.ga = 12;
               a.ja = 12;
               a = N(b, "Ga",
                    "Gallium", 31);
               a.ba(69, !0);
               a.ba(71);
               a.ga = 3;
               a.ja = 13;
               a = N(b, "Ge", "Germanium", 32);
               a.ba(70);
               a.ba(72);
               a.ba(73);
               a.ba(74, !0);
               a.ba(76);
               a.ga = 4;
               a.ja = 14;
               a = N(b, "As", "Arsenic", 33);
               a.ba(75, !0);
               a.ga = 5;
               a.ja = 15;
               a = N(b, "Se", "Selenium", 34);
               a.ba(74);
               a.ba(76);
               a.ba(77);
               a.ba(78);
               a.ba(80, !0);
               a.ba(82);
               a.ga = 6;
               a.ja = 16;
               a = N(b, "Br", "Bromine", 35);
               a.ba(79, !0);
               a.ba(81);
               a.ga = 7;
               a.ja = 17;
               a = N(b, "Kr", "Krypton", 36);
               a.ba(78);
               a.ba(80);
               a.ba(82);
               a.ba(83);
               a.ba(84, !0);
               a.ba(86);
               a.ga = 8;
               a.ja = 18;
               a = N(b, "Rb", "Rubidium", 37);
               a.ba(85, !0);
               a.ba(87);
               a.ga = 1;
               a.ja = 1;
               a = N(b, "Sr", "Strontium", 38);
               a.ba(84);
               a.ba(86);
               a.ba(87);
               a.ba(88, !0);
               a.ga = 2;
               a.ja = 2;
               a = N(b, "Y", "Yttrium", 39);
               a.ba(89, !0);
               a.ga = 3;
               a.ja = 3;
               a = N(b, "Zr", "Zirconium", 40);
               a.ba(90, !0);
               a.ba(91);
               a.ba(92);
               a.ba(94);
               a.ba(96);
               a.ga = 4;
               a.ja = 4;
               a = N(b, "Nb", "Niobium", 41);
               a.ba(93, !0);
               a.ga = 5;
               a.ja = 5;
               a = N(b, "Mo", "Molybdenum", 42);
               a.ba(92);
               a.ba(94);
               a.ba(95);
               a.ba(96);
               a.ba(97);
               a.ba(98, !0);
               a.ba(100);
               a.ga = 6;
               a.ja = 6;
               a = N(b, "Tc", "Technetium", 43);
               a.ga = 7;
               a.ja = 7;
               a = N(b, "Ru", "Ruthenium", 44);
               a.ba(96);
               a.ba(98);
               a.ba(99);
               a.ba(100);
               a.ba(101);
               a.ba(102, !0);
               a.ba(104);
               a.ga = 8;
               a.ja = 8;
               a = N(b, "Rh", "Rhodium", 45);
               a.ba(103, !0);
               a.ga = 9;
               a.ja = 9;
               a = N(b, "Pd", "Palladium", 46);
               a.ba(102);
               a.ba(104);
               a.ba(105);
               a.ba(106, !0);
               a.ba(108);
               a.ba(110);
               a.ga = 10;
               a.ja = 10;
               a = N(b, "Ag", "Silver", 47);
               a.ba(107, !0);
               a.ba(109);
               a.ga = 11;
               a.ja = 11;
               a = N(b, "Cd", "Cadmium", 48);
               a.ba(106);
               a.ba(108);
               a.ba(110);
               a.ba(111);
               a.ba(112);
               a.ba(113);
               a.ba(114, !0);
               a.ba(116);
               a.ga = 12;
               a.ja = 12;
               a = N(b, "In", "Indium", 49);
               a.ba(113);
               a.ba(115, !0);
               a.ga = 3;
               a.ja = 13;
               a = N(b, "Sn", "Tin", 50);
               a.ba(112);
               a.ba(114);
               a.ba(115);
               a.ba(116);
               a.ba(117);
               a.ba(118);
               a.ba(119);
               a.ba(120, !0);
               a.ba(122);
               a.ba(124);
               a.ga = 4;
               a.ja = 14;
               a = N(b, "Sb", "Antimony", 51);
               a.ba(121, !0);
               a.ba(123);
               a.ga = 5;
               a.ja = 15;
               a = N(b, "Te", "Tellurium", 52);
               a.ba(120);
               a.ba(122);
               a.ba(123);
               a.ba(124);
               a.ba(125);
               a.ba(126);
               a.ba(128);
               a.ba(130, !0);
               a.ga = 6;
               a.ja = 16;
               a = N(b, "I", "Iodine", 53);
               a.ba(127, !0);
               a.ba(131);
               a.ga = 7;
               a.ja = 17;
               a = N(b, "Xe", "Xenon", 54);
               a.ba(124);
               a.ba(126);
               a.ba(128);
               a.ba(129);
               a.ba(130);
               a.ba(131);
               a.ba(132, !0);
               a.ba(134);
               a.ba(136);
               a.ga = 8;
               a.ja = 18;
               a = N(b, "Cs", "Cesium", 55);
               a.ba(133, !0);
               a.ga =
                    1;
               a.ja = 1;
               a = N(b, "Ba", "Barium", 56);
               a.ba(130);
               a.ba(132);
               a.ba(134);
               a.ba(135);
               a.ba(136);
               a.ba(137);
               a.ba(138, !0);
               a.ga = 2;
               a.ja = 2;
               a = N(b, "La", "Lanthanum", 57);
               a.ba(138);
               a.ba(139, !0);
               a.ga = 3;
               a = N(b, "Ce", "Cerium", 58);
               a.ba(136);
               a.ba(138);
               a.ba(140, !0);
               a.ba(142);
               a.ga = 4;
               a = N(b, "Pr", "Praseodymium", 59);
               a.ba(141, !0);
               a.ga = 5;
               a = N(b, "Nd", "Neodymium", 60);
               a.ba(142, !0);
               a.ba(143);
               a.ba(144);
               a.ba(145);
               a.ba(146);
               a.ba(148);
               a.ba(150);
               a.ga = 6;
               a = N(b, "Pm", "Promethium", 61);
               a.ga = 7;
               a = N(b, "Sm", "Samarium", 62);
               a.ba(144);
               a.ba(147);
               a.ba(148);
               a.ba(149);
               a.ba(150);
               a.ba(152, !0);
               a.ba(154);
               a.ga = 8;
               a = N(b, "Eu", "Europium", 63);
               a.ba(151);
               a.ba(153, !0);
               a.ga = 9;
               a = N(b, "Gd", "Gadolinium", 64);
               a.ba(152);
               a.ba(154);
               a.ba(155);
               a.ba(156);
               a.ba(157);
               a.ba(158, !0);
               a.ba(160);
               a.ga = 10;
               a = N(b, "Tb", "Terbium", 65);
               a.ba(159, !0);
               a.ga = 11;
               a = N(b, "Dy", "Dysprosium", 66);
               a.ba(156);
               a.ba(158);
               a.ba(160);
               a.ba(161);
               a.ba(162);
               a.ba(163);
               a.ba(164, !0);
               a.ga = 12;
               a = N(b, "Ho", "Holmium", 67);
               a.ba(165, !0);
               a.ga = 13;
               a = N(b, "Er", "Erbium", 68);
               a.ba(162);
               a.ba(164);
               a.ba(166, !0);
               a.ba(167);
               a.ba(168);
               a.ba(170);
               a.ga = 14;
               a = N(b, "Tm", "Thulium", 69);
               a.ba(169, !0);
               a.ga = 15;
               a = N(b, "Yb", "Ytterbium", 70);
               a.ba(168);
               a.ba(170);
               a.ba(171);
               a.ba(172);
               a.ba(173);
               a.ba(174, !0);
               a.ba(176);
               a.ga = 16;
               a = N(b, "Lu", "Lutetium", 71);
               a.ba(175, !0);
               a.ba(176);
               a.ga = 17;
               a.ja = 3;
               a = N(b, "Hf", "Hafnium", 72);
               a.ba(174);
               a.ba(176);
               a.ba(177);
               a.ba(178);
               a.ba(179);
               a.ba(180, !0);
               a.ga = 4;
               a.ja = 4;
               a = N(b, "Ta", "Tantalum", 73);
               a.ba(180);
               a.ba(181, !0);
               a.ga = 5;
               a.ja = 5;
               a = N(b, "W", "Tungsten", 74);
               a.ba(180);
               a.ba(182);
               a.ba(183);
               a.ba(184, !0);
               a.ba(186);
               a.ga = 6;
               a.ja = 6;
               a = N(b, "Re", "Rhenium", 75);
               a.ba(185);
               a.ba(187, !0);
               a.ga = 7;
               a.ja = 7;
               a = N(b, "Os", "Osmium", 76);
               a.ba(184);
               a.ba(186);
               a.ba(187);
               a.ba(188);
               a.ba(189);
               a.ba(190);
               a.ba(192, !0);
               a.ga = 8;
               a.ja = 8;
               a = N(b, "Ir", "Iridium", 77);
               a.ba(191);
               a.ba(193, !0);
               a.ga = 9;
               a.ja = 9;
               a = N(b, "Pt", "Platinum", 78);
               a.ba(190);
               a.ba(192);
               a.ba(194);
               a.ba(195, !0);
               a.ba(196);
               a.ba(198);
               a.ga = 10;
               a.ja = 10;
               a = N(b, "Au", "Gold", 79);
               a.ba(197, !0);
               a.ga = 11;
               a.ja = 11;
               a = N(b, "Hg", "Mercury", 80);
               a.ba(196);
               a.ba(198);
               a.ba(199);
               a.ba(200);
               a.ba(201);
               a.ba(202, !0);
               a.ba(204);
               a.ga = 12;
               a.ja = 12;
               a = N(b, "Tl", "Thalium", 81);
               a.ba(203);
               a.ba(205, !0);
               a.ga = 3;
               a.ja = 13;
               a = N(b, "Pb", "Lead", 82);
               a.ba(204);
               a.ba(206);
               a.ba(207);
               a.ba(208, !0);
               a.ga = 4;
               a.ja = 14;
               a = N(b, "Bi", "Bismuth", 83);
               a.ba(209, !0);
               a.ga = 5;
               a.ja = 15;
               a = N(b, "Po", "Polonium", 84);
               a.ga = 6;
               a.ja = 16;
               a = N(b, "At", "Astatine", 85);
               a.ga = 7;
               a.ja = 17;
               a = N(b, "Rn", "Radon", 86);
               a.ga = 8;
               a.ja = 18;
               a = N(b, "Fr", "Francium", 87);
               a.ga = 1;
               a.ja = 1;
               a = N(b, "Ra", "Radium", 88);
               a.ga = 2;
               a.ja = 2;
               a = N(b, "Ac", "Actinium", 89);
               a.ga = 3;
               a = N(b, "Th", "Thorium", 90);
               a.ba(232, !0);
               a.ga = 4;
               a = N(b, "Pa", "Protactinium", 91);
               a.ba(231, !0);
               a.ga = 5;
               a = N(b, "U", "Uranium",
                    92);
               a.ba(234);
               a.ba(235);
               a.ba(238, !0);
               a.ga = 6;
               a = N(b, "Np", "Neptunium", 93);
               a.ga = 7;
               a = N(b, "Pu", "Plutonium", 94);
               a.ga = 8;
               a = N(b, "Am", "Americium", 95);
               a.ga = 9;
               a = N(b, "Cm", "Curium", 96);
               a.ga = 10;
               a = N(b, "Bk", "Berkelium", 97);
               a.ga = 11;
               a = N(b, "Cf", "Californium", 98);
               a.ga = 12;
               a = N(b, "Es", "Einsteinium", 99);
               a.ga = 13;
               a = N(b, "Fm", "Fermium", 100);
               a.ga = 14;
               a = N(b, "Md", "Mendelevium", 101);
               a.ga = 15;
               a = N(b, "No", "Nobelium", 102);
               a.ga = 16;
               a = N(b, "Lr", "Lawrencium", 103);
               a.ga = 17;
               a = N(b, "Rf", "Rutherfordium", 104);
               a.ga = 4;
               a = N(b, "Db", "Dubnium", 105);
               a.ga =
                    5;
               a = N(b, "Sg", "Seaborgium", 106);
               a.ga = 6;
               a = N(b, "Bh", "Bhorium", 107);
               a.ga = 7;
               a = N(b, "Hs", "Hassium", 108);
               a.ga = 8;
               a = N(b, "Mt", "Meitnerium", 109);
               a.ga = 9;
               a = N(b, "Ds", "Darmstadtium", 110);
               a.ga = 10;
               a = N(b, "Rg", "Roentgenium", 111);
               a.ga = 11;
               a = N(b, "Cn", "Copernicium", 112);
               a.ga = 12
          }
          return Pe
     }
     var Me = "atomic-system-no-such-element",
          Ne = "atomic-system-infeasible-isotope",
          Pe = void 0;

     function Qe() {
          ne.call(this)
     }
     t(Qe, ne);

     function Re(a, b, c, d) {
          b = Oe().fa(b);
          b = new xe(b);
          b.move(c || 0, d || 0, void 0);
          a.jc(b);
          return b
     }
     Qe.prototype.jc = function(a) {
          a.na = this;
          a.Da(this || null);
          Qe.ia.jc.call(this, a)
     };
     Qe.prototype.sb = function(a) {
          if (a.getParent() !== this) throw Se;
          var b = a.vb(),
               c = [],
               d;
          for (d = 0; d < b.length; d++) c.push(b[d]);
          for (d = 0; d < c.length; d++) this.Ub(c[d]);
          a.na = void 0;
          a.Da(null);
          Qe.ia.sb.call(this, a)
     };
     Qe.prototype.Tb = function(a) {
          a.ca = this;
          a.oa.Vb(a);
          a.qa.Vb(a);
          Qe.ia.Tb.call(this, a)
     };
     Qe.prototype.Ub = function(a) {
          a.ca = void 0;
          a.oa.Bc(a);
          a.qa.Bc(a);
          Qe.ia.Ub.call(this, a)
     };
     var Se = "molecule-no-such-atom";

     function Te(a, b) {
          null != a && this.append.apply(this, arguments)
     }
     Te.prototype.$ = "";
     Te.prototype.set = function(a) {
          this.$ = "" + a
     };
     Te.prototype.append = function(a, b, c) {
          this.$ += String(a);
          if (null != b)
               for (var d = 1; d < arguments.length; d++) this.$ += arguments[d];
          return this
     };
     Te.prototype.toString = function() {
          return this.$
     };

     function Ue() {
          this.$ = -1
     }

     function Ve(a) {
          if (!(a.aa && a.$ < a.aa.length - 1)) throw We;
          a.$++;
          return a.aa[a.$]
     }
     var We = "line-reader-no-next-line";

     function Xe(a, b) {
          this.Gd = b;
          this.message = a + " on line " + b
     }
     t(Xe, Error);

     function Ye() {
          this.$ = new Qe;
          this.aa = new Ue;
          this.da = this.ca = !1
     }
     var Ze;

     function $e(a, b) {
          a.ca = -1 !== b.indexOf(af);
          a.da = -1 !== b.indexOf(bf);
          var c = a.aa;
          c.aa = -1 !== b.indexOf("\r\n") ? b.split("\r\n") : b.split("\n");
          c.$ = 0;
          try {
               for (c = 0; 3 > c; c++) Ve(a.aa)
          } catch (nb) {
               cf(a, df)
          }
          c = a.aa;
          c = c.aa ? c.aa[c.$] : void 0;
          if (c) {
               var d, e;
               try {
                    d = D(c, 0, 3), e = D(c, 3, 6)
               } catch (nb) {
                    cf(a, ef)
               }
               for (var g, c = 0; c < d; c++) {
                    try {
                         g = Ve(a.aa)
                    } catch (nb) {
                         cf(a, df)
                    }
                    try {
                         var h = a,
                              k = g,
                              m = D(k, 0, 10, 0),
                              n = D(k, 10, 20, 0),
                              B = D(k, 20, 30, 0),
                              S = h.da ? 0 : D(k, 34, 36, 0),
                              Z = h.ca ? 0 : D(k, 36, 39, 0);
                         D(k, 42, 45, 0);
                         D(k, 45, 48, 0);
                         D(k, 48, 51, 0);
                         var Da = Re(h.$, k.substring(31,
                              34).trim());
                         Da.move(m, n, B);
                         Da.Jb(Z);
                         if (S) {
                              var Ea = Da.fa(),
                                   aa;
                              a: {
                                   if (Ea.hb.length)
                                        for (h = 0; h < Ea.hb.length; h++) {
                                             var r = Ea.hb[h];
                                             if (r.pf) {
                                                  aa = r;
                                                  break a
                                             }
                                        }
                                   aa = void 0
                              }
                              var ba = aa.jb + S;
                              Je(Ea, ba) || Oe().ba(Ea.kb, ba);
                              Ae(Da, ba)
                         }
                    } catch (nb) {
                         cf(a, ef)
                    }
               }
               var jc;
               for (g = 0; g < e; g++) {
                    try {
                         jc = Ve(a.aa)
                    } catch (nb) {
                         cf(a, df)
                    }
                    try {
                         var m = jc,
                              Hb = D(m, 0, 3),
                              id = D(m, 3, 6),
                              Ib = D(m, 6, 9),
                              kc = D(m, 9, 12);
                         D(m, 15, 18);
                         if (1 !== Ib && 2 !== Ib && 3 !== Ib) throw Error(ff);
                         var Ua = a.$,
                              Q = new Ce(a.$.$[Hb - 1], a.$.$[id - 1], 2 * Ib, Ua, void 0);
                         Ua.Tb(Q);
                         switch (kc) {
                              case gf:
                                   ie(Q, "wedge");
                                   break;
                              case hf:
                                   ie(Q, "hash");
                                   break;
                              case jf:
                                   ie(Q, "either");
                                   break;
                              case kf:
                                   ie(Q, "cis-or-trans")
                         }
                    } catch (nb) {
                         cf(a, ef)
                    }
               }
          } else cf(a, df);
          var jd;
          try {
               jd = Ve(a.aa)
          } catch (nb) {
               cf(a, df)
          }
          for (; jd.indexOf(lf);) {
               jc = a;
               Hb = jd;
               id = Hb.substring(0, 6).trim();
               if (-1 !== mf.indexOf(id))
                    for (Ib = D(Hb, 6, 9), kc = 0; kc < Ib; kc++) switch (Q = 8 * kc, Ua = D(Hb, 10 + Q, 13 + Q), Q = D(Hb, 14 + Q, 17 + Q), id) {
                         case af:
                              jc.$.$[Ua - 1].Jb(Q);
                              break;
                         case bf:
                              Ua = jc.$.$[Ua - 1], e = Ua.fa(), Oe(), Je(e, Q) || Oe().ba(e.kb, Q), Ae(Ua, Q)
                    }
               try {
                    jd = Ve(a.aa)
               } catch (nb) {
                    cf(a, df)
               }
          }
     }

     function nf(a, b, c) {
          c.append(a);
          E(b.length, c, 3);
          for (a = 0; a < b.length; a++) {
               c.append(" ");
               var d = b[a];
               E(d[0], c, 3);
               c.append(" ");
               E(d[1], c, 3)
          }
          c.append("\n")
     }

     function cf(a, b) {
          throw new Xe(b, a.aa.$ + 1);
     }
     var gf = 1,
          kf = 3,
          jf = 4,
          hf = 6,
          af = "M  CHG",
          bf = "M  ISO",
          lf = "M  END",
          mf = ["M  CHG", "M  ISO", "M  END"],
          df = "[Molfile] unexpected end of file",
          ff = "[Molfile] invalid bond type",
          ef = "[Molfile] syntax error";

     function of () {
          F.call(this);
          this.$ = new Qe;
          this.ea = this.da = 0;
          this.ca = this.aa = void 0;
          this.$.Da(this)
     }
     t( of , F);
     var pf = new Ye;

     function qf(a, b) {
          a.aa !== b && (a.aa && a.aa.eb(!1), a.ca && (a.ca.eb(!1), a.ca = void 0), b && b.eb(!0), a.aa = b)
     }

     function rf(a, b) {
          a.ca !== b && (a.ca && a.ca.eb(!1), a.aa && (a.aa.eb(!1), a.aa = void 0), b && b.eb(!0), a.ca = b)
     }

     function sf(a) {
          for (var b = Ma(a.$.$), c = 0; c < b.length; c++) b[c].sa(!1), b[c].eb(!1), a.$.sb(b[c])
     }

     function tf(a) {
          a.da += 1;
          1 === a.da && O(a, uf, a)
     }

     function vf(a) {
          if (!a.da) throw Error(wf);
          --a.da;
          a.da || (O(a, xf, a), O(a, yf, a))
     }

     function zf(a, b) {
          var c = b.pa.slice(0);
          b.sa(!1);
          b.eb(!1);
          a.$.sb(b);
          for (var d = 0; d < c.length; d++) {
               var e = c[d];
               void 0 !== e.getParent() && 0 === e.pa.length && (e.sa(!1), e.eb(!1), a.$.sb(e))
          }
     }

     function Af(a, b) {
          var c = b.oa,
               d = b.qa;
          b.sa(!1);
          b.eb(!1);
          a.$.Ub(b);
          void 0 !== c.getParent() && 0 === c.pa.length && (c.sa(!1), c.eb(!1), a.$.sb(c));
          void 0 !== d.getParent() && 0 === d.pa.length && (d.sa(!1), d.eb(!1), a.$.sb(d))
     }

     function Bf(a, b, c, d, e, g) {
          var h = Cf(a, b, e);
          h || (h = Re(a.$, "C", b.x, b.y));
          (b = Cf(a, c, e)) || (b = Re(a.$, "C", c.x, c.y));
          (c = ue(a.$, h, b)) ? d && Ge(c): (a = a.$, g = new Ce(h, b, 2, a, g), a.Tb(g), c = g);
          return c
     }

     function Cf(a, b, c) {
          c = c || 0;
          a = a.$.$;
          for (var d = 0; d < a.length; d++) {
               var e = a[d];
               if (Ic(b, e.la()) < c) return e
          }
     }

     function Df(a, b) {
          a.$.Da(null);
          ve(a.$);
          pf.$ = a.$;
          try {
               $e(pf, b)
          } catch (c) {
               throw ve(a.$), c;
          }
          a.$.Da(a)
     }

     function Ef(a) {
          pf.$ = a.$;
          a = new Te;
          a.append(dc);
          a.append("\n");
          a.append("  ");
          a.append("CWRITER3");
          var b = new Date;
          a.append(("0" + (b.getMonth() + 1)).slice(-2));
          a.append(("0" + b.getDate()).slice(-2));
          a.append(b.getFullYear().toString().slice(-2));
          a.append(("0" + b.getHours()).slice(-2));
          a.append(("0" + b.getMinutes()).slice(-2));
          a.append("2D");
          a.append("                              ");
          a.append("\n");
          a.append("Created with ChemWriter - http://chemwriter.com");
          a.append("\n");
          E(pf.$.$.length, a, 3);
          E(pf.$.vb().length,
               a, 3);
          E("0", a, 3);
          E("0", a, 3);
          a: {
               for (var b = pf.$.vb(), c = 0; c < b.length; c++) {
                    var d = b[c];
                    if ("wedge" === d.Oa() || "hash" === d.Oa()) {
                         b = !0;
                         break a
                    }
               }
               b = !1
          }
          E(b ? 1 : 0, a, 3);
          E("0", a, 3);
          E("0", a, 3);
          E("0", a, 3);
          E("0", a, 3);
          E("0", a, 3);
          a.append(999);
          a.append(" V2000");
          a.append("\n");
          d = pf.$.$;
          c = pf.$.vb();
          for (b = 0; b < d.length; b++) {
               var e = a,
                    g = pf.$.$[b],
                    h = g.la();
               E(h.x, e, 10, 4);
               E(h.y, e, 10, 4);
               E(h.z, e, 10, 4);
               e.append(" ");
               g = g.fa().kb;
               fc(g, e, 3, 1, void 0);
               E("0", e, 2);
               for (g = 0; 11 > g; g++) E("0", e, 3);
               e.append("\n")
          }
          for (b = 0; b < c.length; b++) {
               d = a;
               e = pf.$.aa[b];
               E($d(e.oa) + 1, d, 3);
               E($d(e.qa) + 1, d, 3);
               E(e.Ba / 2, d, 3);
               switch (e.Oa()) {
                    case "wedge":
                         E(gf, d, 3);
                         break;
                    case "hash":
                         E(hf, d, 3);
                         break;
                    case "either":
                         E(jf, d, 3);
                         break;
                    case "cis-or-trans":
                         E(kf, d, 3)
               }
               for (e = 0; 3 > e; e++) d.append("  0");
               d.append("\n")
          }
          b = pf.$.$;
          c = [];
          for (d = 0; d < b.length; d++) e = b[d].Rb(), 0 !== e && c.push([d + 1, e]);
          c.length && nf(af, c, a);
          b = pf.$.$;
          c = [];
          for (d = 0; d < b.length; d++)(e = b[d].Yb()) && 0 < e.jb && c.push([d + 1, e.jb]);
          0 < c.length && nf(bf, c, a);
          a.append(lf);
          return a.toString()
     }

     function O(a, b, c) {
          G(a, new y(b, c))
     }
     var uf = "document-composite-edit-entered",
          xf = "document-composite-edit-exited",
          yf = "document-edited",
          wf = "document-not-in-composite-edit";

     function Ff(a, b, c) {
          this.x = a;
          this.y = b;
          this.$ = c
     };

     function Gf(a) {
          this.$ = [];
          this.ca = 0;
          this.aa = new w(0, 0);
          this.da = a || 0
     }
     f = Gf.prototype;
     f.la = function() {
          return this.aa
     };

     function P(a, b, c, d, e) {
          for (var g = 0; g < b.length; g++) {
               var h;
               var k = c;
               if (h = k.da[b[g]]) {
                    var m, n, B, S, Z, Da = k,
                         Ea = h.commands.split(""),
                         aa = h.points,
                         r = new L,
                         ba = 0;
                    for (Z = 0; Z < Ea.length; Z += 1) switch (Ea[Z]) {
                         case "M":
                              r.Ya(aa[ba++], aa[ba++]);
                              break;
                         case "L":
                              r.wa(aa[ba++], aa[ba++]);
                              break;
                         case "C":
                              throw {
                                   name: "UnsupportedOperation",
                                   message: "Path command C not used."
                              };
                         case "Q":
                              S = aa[ba++];
                              B = aa[ba++];
                              n = aa[ba++];
                              m = aa[ba++];
                              r.Na(S, B, n, m, n, m);
                              break;
                         case "Z":
                              r.close();
                              break;
                         default:
                              throw {
                                   name: "UnsupportedOperation",
                                   message: "Command " +
                                        Ea[Z] + " not known."
                              };
                    }
                    od(r, Da.ca);
                    k = k.ca.La;
                    h = new Jd(r, new cd(h.bounds[0] * k, h.bounds[1] * k, h.bounds[2] * k, h.bounds[3] * k), h.bearing[0] * k, h.bearing[1] * k)
               } else h = void 0;
               h && (d ? (r = h, k = new K, k.scale(.6, .6), r.da = nd(r.da, k), r.Db *= .6, r.ca *= .6, r.$.width *= .6, r.$.height *= .6, r.$.x = r.aa.x + r.Db, r.$.y = r.aa.y - .6 * r.$.y) : e && (r = h, k = c.$, m = new K, m.translate(0, k - .6 * r.Xb()), m.scale(.6, .6), od(r.da, m), r.Db *= .6, r.ca *= .6, r.$.height *= .6, r.$.y = r.aa.y + k - r.$.height, r.$.x = r.aa.x + r.Db, r.$.width *= .6), r = a, k = new w(r.aa.x + r.ca, r.aa.y),
                    h.translate(-(h.ea.Va - k.x), -(h.ea.Wa - k.y)), r.$.push(h), r.ca += h.Ib())
          }
     }
     f.Ma = function() {
          for (var a = new L, b = 0; b < this.$.length; b++) gd(a, this.$[b].Ma());
          return a
     };
     f.Xb = function() {
          for (var a = 0, b = 0; b < this.$.length; b++) a = Math.max(a, this.$[b].Xb());
          return a
     };
     f.Cc = function() {
          for (var a = 0, b = 0; b < this.$.length; b++) a = Math.max(a, this.$[b].Cc());
          return a
     };
     f.translate = function(a, b) {
          for (var c = 0; c < this.$.length; c++) this.$[c].translate(a, b);
          this.aa.x += a;
          this.aa.y += b
     };

     function Hf(a, b) {
          if (a.$.length) {
               var c = a.$[0],
                    d = a.$[a.$.length - 1].ab(),
                    d = d.x + d.width - c.ab().x;
               a.translate(b.x - a.aa.x - c.Db - .5 * d, b.y - a.aa.y - .5 * a.Xb())
          }
     }

     function If(a, b) {
          var c = b.la();
          a.translate(c.x - a.aa.x - a.Ib(), c.y - a.aa.y)
     }

     function Jf(a, b) {
          var c = b.la();
          a.translate(c.x - a.aa.x + b.Ib(), c.y - a.aa.y)
     }
     f.Ib = function() {
          for (var a = 0, b = 0; b < this.$.length; b++) a += this.$[b].Ib();
          return a
     };

     function Kf(a, b, c) {
          var d = c.ab(),
               e = c.la();
          a.translate(b.x - (e.x + c.Db + .5 * d.width), b.y - (e.y + .5 * (d.y + d.height - e.y)))
     };

     function Lf(a) {
          this.$ = a
     };

     function Mf(a, b, c, d, e, g, h) {
          this.aa = .15 * d.$;
          this.na = a;
          this.Ja = b;
          this.ma = c;
          this.$ = d;
          this.ka = 0 < e ? "H" : "";
          this.ya = 1 < e ? e.toString() : "";
          this.da = "";
          void 0 !== g && (this.da = 1 < Math.abs(g) ? Math.abs(g).toString() : "", g && (this.da += 0 < g ? "+" : "-"));
          this.ea = h ? h.toString() : "";
          this.ca = new L
     }
     Mf.prototype.la = function() {
          return this.na
     };
     Mf.prototype.Ma = function() {
          return this.ca
     };

     function Nf(a) {
          this.$ = a;
          this.ya = this.Ja = this.ka = this.na = 0
     }

     function Of(a) {
          if (3 < a.$.oa.pa.length || 3 < a.$.qa.pa.length) return Pf;
          for (var b = a.$.oa.pa, c = 0; c < b.length; c++) {
               var d = b[c];
               d !== a.$.qa && (0 <= Vc(a.$, d) ? (a.ca = d, a.na++) : (a.aa = d, a.ka++))
          }
          b = a.$.qa.pa;
          for (c = 0; c < b.length; c++) d = b[c], d !== a.$.oa && (0 <= Vc(a.$, d) ? (a.ea = d, a.na++) : (a.da = d, a.ka++));
          if (!a.na && !a.ka) return Pf;
          if (a.na > a.ka) return Qf;
          if (a.na < a.ka) return Rf;
          if (a.ca && !a.aa && !a.ea && a.da || a.aa && !a.ca && !a.da && a.ea) return Qf;
          if (a.ca && a.aa && !a.ea && !a.da || a.ea && a.da && !a.ca && !a.aa) return Pf;
          if (c = Sf(a)) a.Ja++, 4 === c.length &&
               -1 !== c[1].pa.indexOf(c[2]) && Tf(c) && a.Ja++, Uf(a, c) && a.Ja++;
          if (c = Vf(a)) a.ya++, 4 === c.length && -1 !== c[1].pa.indexOf(c[2]) && Tf(c) && a.ya++, Uf(a, c) && a.ya++;
          return a.Ja >= a.ya ? Qf : Rf
     }

     function Uf(a, b) {
          if (3 !== b.length) return !1;
          if (1 < b[0].Dc()) {
               var c = ue(a.$.getParent(), b[1], b[2]);
               if (2 < c.Ba) return !0
          } else if (1 < b[2].Dc() && (c = ue(a.$.getParent(), b[0], b[1]), 2 < c.Ba)) return !0;
          return !1
     }

     function Tf(a) {
          var b = a[0].getParent();
          return 4 !== ue(b, a[0], a[1]).Ba || 4 !== ue(b, a[2], a[3]).Ba ? !1 : !0
     }

     function Sf(a) {
          if (a.ca === a.ea) return [a.ca];
          if (-1 !== a.ca.pa.indexOf(a.ea)) return [a.ca, a.ea];
          for (var b = a.ca.pa, c = a.ea.pa, d = 0; d < b.length; d++) {
               var e = b[d];
               if (e !== a.$.oa)
                    for (var g = 0; g < c.length; g++) {
                         var h = c[g];
                         if (h !== a.$.qa) {
                              if (e === h) return [a.ca, e, a.ea];
                              if (-1 !== e.pa.indexOf(h)) return [a.ca, e, h, a.ea]
                         }
                    }
          }
     }

     function Vf(a) {
          if (a.aa === a.da) return [a.aa];
          if (-1 !== a.aa.pa.indexOf(a.da)) return [a.aa, a.da];
          for (var b = a.aa.pa, c = a.da.pa, d = 0; d < b.length; d++) {
               var e = b[d];
               if (e !== a.$.oa)
                    for (var g = 0; g < c.length; g++) {
                         var h = c[g];
                         if (h !== a.$.qa) {
                              if (e === h) return [a.aa, e, a.da];
                              if (-1 !== e.pa.indexOf(h)) return [a.aa, e, h, a.da]
                         }
                    }
          }
     }
     var Pf = "edge-descriptor-center",
          Qf = "edge-descriptor-top",
          Rf = "edge-descriptor-bottom";

     function Wf(a) {
          this.Ua = a;
          this.$ = {};
          this.aa = {}
     }

     function Xf(a, b) {
          if ("C" === b.fa().kb ? !0 === M["methyl-visible"] && 1 === b.pa.length || void 0 !== b.Yb() || 0 !== b.Rb() || 0 === b.pa.length : 1) {
               var c;
               c = a.Ua.da;
               var d = b.la(),
                    e = b.fa().kb,
                    g = b.wb(),
                    h = new Lf(b),
                    k = b.Rb(),
                    m = b.Yb() ? b.Yb().jb : void 0;
               c = new Mf(d, e, h, c, g, k, m);
               hd(c.ca);
               var n;
               a: {
                    h = c.ma;d = "node-descriptor-east";k = h.$.pa;
                    if (!k.length && h.$.fa && (e = h.$.fa().ja, 16 === e || 17 === e)) {
                         d = "node-descriptor-west";
                         break a
                    }
                    e = {
                         "node-descriptor-north": 0,
                         "node-descriptor-south": 0,
                         "node-descriptor-east": 0,
                         "node-descriptor-west": 0
                    };
                    for (g =
                         0; g < k.length; g++) {
                         var m = e,
                              B = Uc(h.$, k[g]),
                              S = Math.max(0, Math.sin(B)),
                              Z = Math.max(0, -Math.sin(B)),
                              Da = Math.max(0, Math.cos(B)),
                              B = Math.max(0, -Math.cos(B));
                         m["node-descriptor-north"] += S * S;
                         m["node-descriptor-south"] += Z * Z;
                         m["node-descriptor-east"] += Da * Da;
                         m["node-descriptor-west"] += B * B
                    }
                    h = ["node-descriptor-east", "node-descriptor-west", "node-descriptor-north", "node-descriptor-south"];
                    for (g = 0; g < h.length; g++) {
                         k = h[g];
                         m = !0;
                         for (S = g + 1; S < h.length; S++)
                              if (1E-4 < e[k] - e[h[S]]) {
                                   m = !1;
                                   break
                              }
                         if (m) {
                              d = k;
                              break
                         }
                    }
               }
               switch (d) {
                    case "node-descriptor-east":
                         n =
                              new Gf(c.aa);
                         P(n, c.Ja, c.$);
                         P(n, c.ka, c.$);
                         P(n, c.ya, c.$, !0);
                         P(n, c.da, c.$, !1, !0);
                         Kf(n, c.na, n.$[0]);
                         c.ea && (d = new Gf(c.aa), P(d, c.ea, c.$, !1, !0), If(d, n), gd(c.ca, d.Ma()));
                         d = (d = n.$[0]) ? d.ab() : void 0;
                         c.lc = d;
                         break;
                    case "node-descriptor-west":
                         n = new Gf(c.aa);
                         P(n, c.da, c.$, !1, !0);
                         P(n, c.ka, c.$);
                         P(n, c.ya, c.$, !0);
                         P(n, c.ea, c.$, !1, !0);
                         P(n, c.Ja, c.$);
                         Kf(n, c.na, n.$[n.$.length - 1]);
                         d = (d = n.$[n.$.length - 1]) ? d.ab() : void 0;
                         c.lc = d;
                         break;
                    case "node-descriptor-north":
                         n = new Gf(c.aa);
                         P(n, c.Ja, c.$);
                         Hf(n, c.na);
                         c.da !== dc && (d = new Gf(c.aa),
                              P(d, c.da, c.$, !1, !0), Jf(d, n), gd(c.ca, d.Ma()));
                         c.ea !== dc && (d = new Gf(c.aa), P(d, c.ea, c.$, !1, !0), If(d, n), gd(c.ca, d.Ma()));
                         c.ka !== dc && (d = new Gf(c.aa), P(d, c.ka, c.$), P(d, c.ya, c.$, !0), e = n.la(), d.translate(e.x - d.aa.x, e.y - d.aa.y + (n.Xb() + n.Cc()) + d.da), gd(c.ca, d.Ma()));
                         c.lc = n.Ma().ab();
                         break;
                    case "node-descriptor-south":
                         n = new Gf(c.aa), P(n, c.Ja, c.$), Hf(n, c.na), c.ea !== dc && (d = new Gf(c.aa), P(d, c.ea, c.$, !1, !0), If(d, n), gd(c.ca, d.Ma())), c.da !== dc && (d = new Gf(c.aa), P(d, c.da, c.$, !0), Jf(d, n), gd(c.ca, d.Ma())), c.ka !== dc &&
                              (d = new Gf(c.aa), P(d, c.ka, c.$), P(d, c.ya, c.$, !0), e = n.la(), d.translate(e.x - d.aa.x, e.y - d.aa.y - (d.Xb() + d.Cc()) - n.da), gd(c.ca, d.Ma())), c.lc = n.Ma().ab()
               }
               gd(c.ca, n.Ma());
               a.$[q(b)] = c;
               return c.Ma()
          }
     }

     function Yf(a, b) {
          var c = a.$[q(b.oa)];
          a: {
               var d = a.$[q(b.qa)];
               switch (b.Ba) {
                    case 2:
                         c = Zf(a, b, c, d);
                         break a;
                    case 4:
                         if ("cis-or-trans" === b.Oa()) {
                              var e = $f(b),
                                   g = e.clone(),
                                   h = Td(a.Ua);
                              ag(a, e, c, d);
                              ag(a, g, c, d);
                              Pc(e, -h / 2);
                              Pc(g, h / 2);
                              c = e.ua;
                              d = e.va;
                              h = g.va;
                              e.ua = g.ua;
                              e.va = h;
                              g.ua = c;
                              g.va = d;
                              c = [e, g]
                         } else {
                              var e = new Nf(b),
                                   g = $f(b),
                                   h = Td(a.Ua),
                                   k;
                              switch (Of(e)) {
                                   case Qf:
                                        k = g.clone();
                                        ag(a, g, c, d);
                                        ag(a, k, c, d);
                                        Pc(k, h);
                                        c || bg(g, k, e.ca);
                                        d || cg(g, k, e.ea);
                                        break;
                                   case Rf:
                                        k = g.clone();
                                        ag(a, g, c, d);
                                        ag(a, k, c, d);
                                        Pc(k, -h);
                                        c || bg(g, k, e.aa);
                                        d || cg(g, k, e.da);
                                        break;
                                   case Pf:
                                        ag(a, g, c, d), k = g.clone(), Pc(g, -h / 2), Pc(k, h / 2)
                              }
                              c = [g, k]
                         }
                         break a;
                    case 6:
                         g = $f(b);
                         e = Td(a.Ua);
                         ag(a, g, c, d);
                         c = g.clone();
                         d = g.clone();
                         g = [g, c, d];
                         Pc(c, -e);
                         Pc(d, e);
                         c = g;
                         break a;
                    default:
                         c = Zf(a, b, c, d)
               }
          }
          return a.aa[q(b)] = c
     }

     function dg(a, b) {
          return new Ff(sb(b.oa.la().x, b.qa.la().x, .5), sb(b.oa.la().y, b.qa.la().y, .5), Vd(a.Ua))
     }

     function eg(a) {
          var b, c;
          for (c in a.aa) {
               var d = a.aa[c];
               if (void 0 === d.ab) {
                    var e = a,
                         g = b;
                    for (b = 0; b < d.length; b++) {
                         var h = d[b];
                         g || (g = new qc(h.va, h.ua, h.va, h.ua));
                         var k = .5 * Md(e.Ua);
                         g.left = Math.min(g.left, Math.min(h.ua, h.Ga) - k);
                         g.right = Math.max(g.right, Math.max(h.ua, h.Ga) + k);
                         g.top = Math.max(g.top, Math.max(h.va, h.Ha) + k);
                         g.bottom = Math.min(g.bottom, Math.min(h.va, h.Ha) - k)
                    }
                    b = g
               } else e = a, d = d.ab(), b || (b = new qc(d.y + d.height, d.x + d.width, d.y, d.x)), e = .5 * Md(e.Ua), b.left = Math.min(b.left, d.x - e), b.right = Math.max(b.right, d.x +
                    d.width + e), b.top = Math.max(b.top, d.y + d.height + e), b.bottom = Math.min(b.bottom, d.y - e)
          }
          for (c in a.$) e = b, d = a.$[c].Ma().ab(), e || (e = new qc(d.y + d.height, d.x + d.width, d.y, d.x)), e.left = Math.min(e.left, d.x - 0), e.right = Math.max(e.right, d.x + d.width + 0), e.top = Math.max(e.top, d.y + d.height + 0), e.bottom = Math.min(e.bottom, d.y - 0), b = e;
          return b
     }

     function Zf(a, b, c, d) {
          switch (b.Oa()) {
               case he:
                    return b = $f(b), ag(a, b, c, d), [b];
               case "wedge":
                    var e = $f(b);
                    ag(a, e, c, d);
                    d = Ic(b.oa.la(), b.qa.la());
                    var g = b.oa.la(),
                         h = Jc(g.x, g.y, e.ua, e.va);
                    c = Jc(g.x, g.y, e.Ga, e.Ha);
                    e = Ud(a.Ua);
                    a = .5 * h * e / d;
                    e = .5 * c * e / d;
                    d = new L;
                    d.Ya(h, a);
                    d.wa(c, e);
                    d.wa(c, -e);
                    d.wa(h, -a);
                    d.close();
                    a = new K;
                    b = Tc(b);
                    a.translate(g.x, g.y);
                    Fc(a, b);
                    od(d, a);
                    return d;
               case "hash":
                    h = $f(b);
                    ag(a, h, c, d);
                    c = Ic(b.oa.la(), b.qa.la());
                    g = b.oa.la();
                    d = Jc(g.x, g.y, h.ua, h.va);
                    var e = 2 * Md(a.Ua),
                         k = Jc(g.x, g.y, h.Ga, h.Ha),
                         h = new L;
                    for (a =
                         Ud(a.Ua); k >= d;) {
                         var m = (M["taper-hash"] ? .5 * k : a) * a / c;
                         h.Ya(k, m);
                         h.wa(k, -m);
                         k -= e
                    }
                    a = new K;
                    b = Tc(b);
                    a.translate(g.x, g.y);
                    Fc(a, b);
                    od(h, a);
                    return h;
               case "either":
                    g = $f(b);
                    ag(a, g, c, d);
                    h = Jc(g.ua, g.va, g.Ga, g.Ha);
                    c = .2 * Ud(a.Ua);
                    d = 2 * c;
                    e = Math.floor(h / (2 * c));
                    k = 0;
                    a = new L;
                    e || (a.Ya(2 * c, 0), a.Rc(c, d, 0, 180));
                    for (var n = 0; n < e; n++) k += 2 * c, m = n % 2 ? -1 : 1, a.Ya(k, 0), a.Rc(c, 2 * k / h * d, 0, 180 * m);
                    h = new K;
                    b = Tc(b);
                    g = new w(g.ua, g.va);
                    h.translate(g.x, g.y);
                    Fc(h, b);
                    od(a, h);
                    return a
          }
     }

     function ag(a, b, c, d) {
          a = M["line-end-padding"] * a.Ua.$;
          if (c) {
               c = c.lc.clone();
               var e = a || 0;
               c.x -= e;
               c.y -= e;
               c.width += 2 * e;
               c.height += 2 * e;
               if (c = Kc(b, c)) b.ua = c.x, b.va = c.y
          }
          d && (d = d.lc.clone(), a = a || 0, d.x -= a, d.y -= a, d.width += 2 * a, d.height += 2 * a, d = Kc(b, d)) && (b.Ga = d.x, b.Ha = d.y)
     }

     function bg(a, b, c) {
          c && (c = c.la(), c = new J(a.ua, a.va, c.x, c.y), Mc(c, -Nc(a, c) / 2), a = Lc(b, c)) && (b.ua = a.x, b.va = a.y)
     }

     function cg(a, b, c) {
          c && (c = c.la(), c = new J(a.Ga, a.Ha, c.x, c.y), Mc(c, Nc(c, new J(a.Ga, a.Ha, a.ua, a.va)) / 2), a = Lc(b, c)) && (b.Ga = a.x, b.Ha = a.y)
     }

     function $f(a) {
          var b = a.oa.la();
          a = a.qa.la();
          return new J(b.x, b.y, a.x, a.y)
     };

     function R(a) {
          H.call(this);
          this.ca = new Ed(a);
          this.$ = new yd;
          this.aa = new of ;
          this.ma = new Ld;
          this.ea = new Wf(this.ma);
          I(this, this.ca);
          I(this.ca, this.$)
     }
     t(R, H);
     R.prototype.za = function() {
          this.da = this.bd.aa("div", {
               "class": "chemwriter-image"
          })
     };
     R.prototype.rb = function(a) {
          sf(this.aa);
          Dd(this.$);
          var b = this.ea;
          b.$ = {};
          b.aa = {};
          try {
               Df(this.aa, a)
          } catch (g) {
               throw a = new L, a.Ya(0, 0), a.wa(70, 0), a.wa(100, 30), a.wa(100, 150), a.wa(0, 150), a.close(), a.Ya(30, 55), a.wa(70, 95), a.Ya(70, 55), a.wa(30, 95), Ad(this.$, a, new vd(4, "#ff0000"), void 0), b = a.ab(), b.x = b.x - 2, b.width += 4, b.y = b.y - 2, b.height += 4, a = new L, a.Ya(70, 0), a.wa(100, 30), a.wa(70, 30), a.close(), Ad(this.$, a, void 0, new wd("#ff0000")), Gd(this.ca, b), g;
          }
          b = this.aa.$;
          a = Hc(b);
          Sd(this.ma, a);
          var c = b.$;
          for (a = 0; a < c.length; a++) {
               var d =
                    c[a],
                    e = Xf(this.ea, d);
               e && Ad(this.$, e, void 0, Xd[d.fa().kb] || Nd)
          }
          b = b.vb();
          for (a = 0; a < b.length; a++)
               if (c = Yf(this.ea, b[a]), d = this.ma.ca, void 0 === c.length) c.close && Ad(this.$, c, d, Od);
               else
                    for (e = 0; e < c.length; e++) zd(this.$, c[e], d);
          (a = eg(this.ea)) ? (a = ed(a), Gd(this.ca, a), b = this.$, c = new K, c.translate(0, 2 * a.y + a.height), c.scale(1, -1), Cd(b, c)) : Gd(this.ca, new cd(0, 0, 100, 100))
     };
     R.prototype.Zb = function() {
          return Ef(this.aa)
     };
     R.prototype.ra = function() {
          return !this.aa.$.$.length
     };

     function fg() {
          this.aa = [];
          this.$ = 0
     }

     function gg(a) {
          return void 0 !== a.aa[a.$ - 1]
     }

     function hg(a) {
          return void 0 !== a.aa[a.$]
     }

     function ig(a, b) {
          a.aa.length && a.$ !== a.aa.length && a.aa.splice(a.$, a.aa.length - a.$);
          a.aa.push(b);
          a.$ += 1
     };

     function jg() {};

     function kg() {
          this.$ = []
     }
     t(kg, jg);
     kg.prototype.gb = function() {
          for (var a = 0; a < this.$.length; a++) this.$[a].gb()
     };
     kg.prototype.$c = function() {
          for (var a = this.$.length - 1; 0 <= a; a--) this.$[a].$c()
     };

     function lg(a) {
          if (a) {
               var b = a.$,
                    c = {},
                    d;
               for (d in b) c[d] = b[d];
               this.$ = c;
               this.ca = a.ca
          } else this.$ = {}, this.ca = 0
     }
     lg.prototype.get = function(a) {
          a = "string" === typeof a ? a : q(a);
          return (a = this.$[a]) ? a.value : void 0
     };

     function mg(a, b, c) {
          var d = "string" === typeof b ? b : q(b);
          d in a.$ || (a.ca += 1);
          a.$[d] = {
               key: b,
               value: c
          }
     }

     function ng(a, b) {
          var c = "string" === typeof b ? b : q(b);
          a.$[c] && (delete a.$[c], --a.ca)
     }

     function og(a) {
          a.$ = {};
          a.ca = 0
     }

     function pg(a) {
          var b = [],
               c;
          for (c in a.$) b.push(a.$[c].key);
          return b
     }
     lg.prototype.clone = function() {
          var a = new lg,
               b;
          for (b in this.$) {
               var c = this.$[b];
               mg(a, c.key, c.value)
          }
          return a
     };

     function qg() {
          F.call(this);
          this.ka = this.ea = !1;
          this.aa = new fg;
          this.ca = new kg;
          this.da = new lg
     }
     t(qg, F);

     function rg(a, b) {
          a.$ = b;
          var c = a.aa,
               d = c.aa;
          if (!ga(d))
               for (var e = d.length - 1; 0 <= e; e--) delete d[e];
          d.length = 0;
          c.$ = 0;
          sg(a);
          G(a, tg);
          G(a, ug)
     }
     f = qg.prototype;
     f.hc = function() {
          if (gg(this.aa)) {
               vg(this);
               tf(this.$);
               var a = this.aa,
                    a = a.aa[a.$ - 1];
               if (!a) throw Error("No previous command");
               a.$c();
               vf(this.$);
               sg(this);
               a = this.aa;
               if (0 < a.$) --a.$;
               else throw Error("Can not step back");
          } else throw Error(wg);
          gg(this.aa) || G(this, tg);
          G(this, xg)
     };
     f.cc = function() {
          if (hg(this.aa)) {
               var a;
               a = this.aa;
               a = a.aa[a.$];
               if (!a) throw Error("No next command");
               vg(this);
               tf(this.$);
               a.gb();
               vf(this.$);
               sg(this);
               a = this.aa;
               if (a.$ < a.aa.length) a.$ += 1;
               else throw Error("Can not step forward");
          } else throw Error(yg);
          hg(this.aa) || G(this, ug);
          G(this, zg)
     };

     function sg(a) {
          A(a.$, qe, a.wd, !1, a);
          A(a.$, re, a.zd, !1, a);
          A(a.$, se, a.td, !1, a);
          A(a.$, te, a.vd, !1, a);
          A(a.$, ee, a.xd, !1, a);
          A(a.$, ke, a.ud, !1, a);
          A(a.$, fe, a.yd, !1, a);
          A(a.$, uf, a.rd, !1, a);
          A(a.$, xf, a.sd, !1, a);
          A(a.$, "document-group-move-entered", a.ze, !1, a);
          A(a.$, "document-group-move-exited", a.Ae, !1, a)
     }

     function vg(a) {
          C(a.$, qe, a.wd, !1, a);
          C(a.$, re, a.zd, !1, a);
          C(a.$, se, a.td, !1, a);
          C(a.$, te, a.vd, !1, a);
          C(a.$, ee, a.xd, !1, a);
          C(a.$, ke, a.ud, !1, a);
          C(a.$, fe, a.yd, !1, a);
          C(a.$, uf, a.rd, !1, a);
          C(a.$, xf, a.sd, !1, a)
     }
     f.rd = function() {
          this.ea = !0
     };
     f.sd = function() {
          this.ea = !1;
          0 < this.ca.$.length && (ig(this.aa, this.ca), this.ca = new kg, G(this, zg), G(this, ug))
     };
     f.ze = function() {
          this.ka = !0
     };
     f.Ae = function() {
          if (0 !== this.da.ca) {
               for (var a = this.da.clone(), b = new lg, c = pg(a), d = 0; d < c.length; d++) {
                    var e = c[d];
                    mg(b, e, e.Aa())
               }
               og(this.da);
               Ag(this, function() {
                    for (var a = pg(b), c = 0; c < a.length; c++) a[c].qb(b.get(a[c]))
               }, function() {
                    for (var b = pg(a), c = 0; c < b.length; c++) b[c].qb(a.get(b[c]))
               });
               G(this, zg)
          }
     };
     f.wd = function(a) {
          var b = a.target;
          Ag(this, function() {
               this.$.$.jc(b)
          }.bind(this), function() {
               this.$.$.sb(b)
          }.bind(this))
     };
     f.zd = function(a) {
          var b = a.target;
          Ag(this, function() {
               this.$.$.sb(b)
          }.bind(this), function() {
               this.$.$.jc(b)
          }.bind(this))
     };
     f.xd = function(a) {
          var b = a.target,
               c = a.rc,
               d = b.Aa();
          Ag(this, function() {
               c && b.qb(d)
          }, function() {
               c && b.qb(c)
          })
     };
     f.yd = function(a) {
          if (this.ka) {
               var b = a.target;
               this.da.get(b) || mg(this.da, b, a.rc)
          } else {
               var b = a.target,
                    c = a.rc,
                    d = b.Aa();
               Bg(this, function() {
                    b.move(d.Wb.x, d.Wb.y)
               }, function() {
                    b.move(c.Wb.x, c.Wb.y)
               })
          }
     };
     f.ud = function(a) {
          var b = a.target,
               c = a.rc,
               d = b.Aa();
          Ag(this, function() {
               b.qb(d)
          }, function() {
               b.qb(c)
          })
     };
     f.td = function(a) {
          var b = a.target;
          Ag(this, function() {
               this.$.$.Tb(b)
          }.bind(this), function() {
               this.$.$.Ub(b)
          }.bind(this))
     };
     f.vd = function(a) {
          var b = a.target;
          Ag(this, function() {
               this.$.$.Ub(b)
          }.bind(this), function() {
               this.$.$.Tb(b)
          }.bind(this))
     };

     function Ag(a, b, c) {
          a.ea ? (b = Cg(b, c), a.ca.$.push(b)) : Dg(a, b, c)
     }

     function Bg(a, b, c) {
          Dg(a, b, c)
     }

     function Dg(a, b, c) {
          b = Cg(b, c);
          a.ca.$.push(b);
          ig(a.aa, a.ca);
          a.ca = new kg
     }

     function Cg(a, b) {
          var c = new jg;
          c.gb = a;
          c.$c = b;
          return c
     }
     var wg = "Can not undo",
          yg = "Can not redo",
          zg = "undo-manager-undo-available",
          tg = "undo-manager-undo-unavailable",
          xg = "undo-manager-redo-available",
          ug = "undo-manager-redo-unavailable";

     function Eg(a) {
          if (a.classList) return a.classList;
          a = a.className;
          return l(a) && a.match(/\S+/g) || []
     }

     function Fg(a, b) {
          return a.classList ? a.classList.contains(b) : 0 <= Ha(Eg(a), b)
     }

     function Gg(a, b) {
          a.classList ? a.classList.add(b) : Fg(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
     }

     function Hg(a, b) {
          a.classList ? a.classList.remove(b) : Fg(a, b) && (a.className = Ja(Eg(a), function(a) {
               return a != b
          }).join(" "))
     };

     function Ig() {
          H.call(this)
     }
     t(Ig, H);
     Ig.prototype.ta = function() {
          Ig.ia.ta.call(this);
          var a = x("a", {
               //href: "http://chemwriter.com/plans/",
               //target: "_blank",
               //style: "background: rgb(204, 68, 68); color: yellow; width: 100%; position: absolute; top: 0; font-family: monospace; font-size: 16px; text-align: center; text-decoration: none; padding: 2px 0"
          });
          a.textContent;
          this.fa().appendChild(a)
     };

     function Jg(a, b) {
          F.call(this);
          this.aa = b || 1;
          this.pb = new Ac(a.x, a.y);
          this.da = this.pb.clone();
          this.da.x -= this.aa;
          this.ca = [];
          this.$ = []
     }
     t(Jg, F);
     Jg.prototype.Bb = function() {
          return this.da
     };
     Jg.prototype.vc = function(a, b) {
          var c = Qc(this.pb, a);
          if (!b && 0 < this.ca.length) {
               for (var c = 0, d = Qc(this.pb, a), e = Math.abs(this.ca[0] - d), g = 1; g < this.ca.length; g++) {
                    var h = Math.abs(this.ca[g] - d);
                    h < e && (e = h, c = g)
               }
               c = this.ca[c]
          }
          Kg(this, c);
          G(this, new y(Lg))
     };

     function Mg(a, b) {
          a.ca = [];
          for (var c = 2 * Math.PI / 12, d = 0; 12 > d; d++) a.ca.push(Rc(b + d * c));
          Kg(a, b)
     }
     Jg.prototype.ka = function() {};

     function Kg(a, b) {
          var c = b - Qc(a.pb, a.Bb()),
               d = a.da,
               e;
          e = a.pb;
          e = Cc(Bc(d.clone(), e), c).add(e);
          d.x = e.x;
          d.y = e.y;
          a.ka(c)
     }
     var Lg = "rotator-coordinates-changed";

     function Ng() {
          F.call(this)
     }
     t(Ng, F);

     function Og(a, b) {
          function c() {
               h = (d = b.fa()) ? d.clientWidth : 0;
               k = d ? d.clientHeight : 0;
               h === e && k === g || G(a, Pg);
               e = h;
               g = k;
               b.pc || window.requestAnimationFrame(c)
          }
          var d = b.fa(),
               e = d ? d.clientWidth : 0,
               g = d ? d.clientHeight : 0,
               h = e,
               k = g;
          window.requestAnimationFrame(c)
     }
     var Pg = "dom-tracker-element-resized";

     function Qg(a, b) {
          H.call(this);
          this.Xa = a;
          this.aa = new K;
          this.dd = new Ng;
          this.ra = void 0;
          this.Jc = {};
          this.ob = {};
          this.Pc = {};
          this.bc = {};
          this.Mb = {};
          this.Fb = {};
          this.cd = {};
          this.Ab = {};
          this.ad = new Ed(b);
          this.ca = new yd;
          this.ea = new yd;
          this.$ = new yd;
          this.Ca = new yd;
          this.ma = new yd;
          I(this.ca, this.ea);
          I(this.ca, this.$);
          I(this.ca, this.Ca);
          I(this.ca, this.ma);
          I(this.ad, this.ca);
          I(this, this.ad);
          A(this.dd, Pg, this.le, !1, this);
          Og(this.dd, this)
     }
     t(Qg, H);
     f = Qg.prototype;
     f.za = function() {
          this.da = x("div", {
               "class": "chemwriter-document-view"
          })
     };
     f.nc = function(a, b) {
          var c = Xf(a, b);
          if (c) {
               var d = Xd[b.fa().kb] || Nd,
                    c = Ad(this.ea, c, void 0, d);
               this.Jc[q(b)] = c
          }
     };
     f.Nc = function(a, b) {
          var c = this.Jc[q(b)];
          c && this.ea.fa().removeChild(c);
          delete a.$[q(b)];
          delete this.Jc[q(b)]
     };
     f.uc = function(a, b) {
          this.Nc(a, b);
          this.nc(a, b)
     };

     function Rg(a, b) {
          var c = b.x + a.fa().getBoundingClientRect().left,
               d = b.y + a.fa().getBoundingClientRect().top,
               c = (c = document.elementFromPoint(c, d)) ? q(c) : void 0;
          return a.Mb[c]
     }

     function Sg(a, b) {
          var c = b.x + a.fa().getBoundingClientRect().left,
               d = b.y + a.fa().getBoundingClientRect().top,
               c = (c = document.elementFromPoint(c, d)) ? q(c) : void 0;
          return a.cd[c]
     }
     f.mc = function(a, b) {
          var c = Yf(a, b),
               d = this.Xa.ca,
               e = [];
          if (void 0 === c.length) {
               if (c.close) {
                    var g = Ad(this.ea, c, d, Od);
                    e.push(g)
               }
          } else
               for (var h = 0; h < c.length; h++) g = zd(this.ea, c[h], d), e.push(g);
          this.ob[q(b)] = e
     };
     f.Mc = function(a, b) {
          for (var c = this.ob[q(b)], d = 0; d < c.length; d++) this.ea.fa().removeChild(c[d]);
          delete a.aa[q(b)];
          delete this.ob[q(b)]
     };
     f.tc = function(a, b) {
          this.Mc(a, b);
          this.mc(a, b)
     };

     function Tg(a, b, c) {
          for (var d = [], e = c.$, g = 0; g < e.length; g++) {
               var h = e[g];
               d.push(new Ff(h.x, h.y, Vd(b.Ua)))
          }
          b = [];
          h = Rd;
          for (e = 0; e < d.length; e++) g = Bd(a.$, d[e], h), b.push(g);
          d = [];
          e = c.$;
          for (g = 1; g < e.length; g++) {
               var h = e[g - 1],
                    k = e[g],
                    h = new J(h.x, h.y, k.x, k.y);
               d.push(h)
          }
          2 < e.length && (h = e[e.length - 1], e = e[0], h = new J(h.x, h.y, e.x, e.y), d.push(h));
          h = a.Xa.ea;
          for (e = 0; e < d.length; e++) g = zd(a.$, d[e], h), b.push(g);
          a.Pc[q(c)] = b
     }

     function Ug(a, b) {
          for (var c = a.Pc[q(b)], d = 0; d < c.length; d++) a.$.fa().removeChild(c[d]);
          delete a.Pc[q(b)]
     }

     function Vg(a, b) {
          var c = Ad(a.Ca, b.$, a.Xa.aa, xd);
          a.bc[q(b)] = c
     }

     function Wg(a, b) {
          var c = a.bc[q(b)];
          c && (a.Ca.fa().removeChild(c), delete a.bc[q(b)])
     }

     function Xg(a, b) {
          var c;
          b ? c = ed(b) : c = new cd(0, 0, 10, 10);
          var d = Md(a.Xa);
          c.x -= d;
          c.y -= d;
          c.width += 2 * d;
          c.height += 2 * d;
          var d = a.fa().clientWidth,
               e = a.fa().clientHeight;
          d && e ? (d = bd(c, new cd(0, 0, d, e)), d.translate(-c.x, c.y + c.height), d.scale(1, -1), a.aa = d, Cd(a.ca, a.aa)) : a.ra = b || new qc(10, 10, 0, 0)
     }

     function Yg(a, b) {
          var c;
          c = a.aa;
          var d = c.La * c.Ra - c.Pa * c.Qa;
          c = new K(c.Ra / d, -c.Qa / d, -c.Pa / d, c.La / d, (c.Pa * c.Wa - c.Ra * c.Va) / d, (c.Qa * c.Va - c.La * c.Wa) / d);
          d = [b.x, b.y];
          Gc(c, d, d, 1);
          return new w(d[0], d[1])
     }
     f.translate = function(a) {
          this.aa.translate(a.x, a.y);
          Cd(this.ca, this.aa)
     };

     function Zg(a, b, c) {
          b = b.clone();
          b.x *= 1 - c;
          b.y *= 1 - c;
          a.aa.translate(b.x, b.y);
          a.aa.scale(c, c);
          Cd(a.ca, a.aa)
     }
     f.le = function() {
          var a = this.fa().clientWidth,
               b = this.fa().clientHeight;
          Gd(this.ad, new cd(0, 0, a, b));
          this.ra && (a = this.ra, this.ra = void 0, Xg(this, a))
     };

     function $g() {
          F.call(this);
          this.$ = new L
     }
     t($g, F);
     $g.prototype.Ma = function() {
          return this.$
     };

     function ah(a, b) {
          a.$.Ea.length ? a.$.wa(b.x, b.y) : a.$.Ya(b.x, b.y);
          G(a, new y(bh, a))
     }

     function ch(a, b) {
          var c = b.x,
               d = b.y,
               e = !1,
               g = 0,
               h = 0,
               k = 0,
               m = 0,
               n = 0;
          kd(a.$, na(function(a, b) {
               if (!e) {
                    switch (a) {
                         case 1:
                              if (m !== h || n !== k) g += dh(m, n, h, k, c, d);
                              h = m = b[0];
                              k = n = b[1];
                              break;
                         case 2:
                              for (var B = 0; B < b.length; B += 2) g += dh(m, n, b[B], b[B + 1], c, d), m = b[B], n = b[B + 1]
                    }
                    if (n !== k || m !== h) g += dh(m, n, h, k, c, d), m = h, n = k;
                    c === m && d === n && (g = 0, n = k, e = !0)
               }
          }, a));
          n !== k && (g += dh(m, n, h, k, c, d));
          return g
     }

     function dh(a, b, c, d, e, g) {
          return e < a && e < c || e > a && e > c || g > b && g > d || a === c || !(g < b && g < d) && (d - b) * (e - a) / (c - a) <= g - b ? 0 : e === a ? a < c ? 0 : -1 : e === c ? a < c ? 1 : 0 : a < c ? 1 : -1
     }
     var bh = "lasso-coordinate-added";

     function eh() {
          this.aa = new lg;
          this.$ = new lg
     }
     f = eh.prototype;
     f.nc = function(a) {
          mg(this.aa, a, fh)
     };
     f.uc = function(a) {
          this.aa.get(a) || mg(this.aa, a, gh)
     };
     f.Nc = function(a) {
          this.aa.get(a) === fh ? ng(this.aa, a) : mg(this.aa, a, hh)
     };
     f.mc = function(a) {
          mg(this.$, a, fh)
     };
     f.tc = function(a) {
          this.$.get(a) || mg(this.$, a, gh)
     };
     f.Mc = function(a) {
          this.$.get(a) === fh ? ng(this.$, a) : mg(this.$, a, hh)
     };

     function ih(a) {
          og(a.aa);
          og(a.$)
     }

     function jh(a, b, c) {
          for (var d = pg(a.aa), e = 0; e < d.length; e++) {
               var g = d[e];
               switch (a.aa.get(g)) {
                    case fh:
                         var h = b,
                              k = c,
                              m = g;
                         h.nc(k, m);
                         g = h;
                         h = m;
                         k = Bd(g.ma, new Ff(h.la().x, h.la().y, Vd(k.Ua)), xd);
                         g.Mb[q(k)] = h;
                         g.Fb[q(h)] = k;
                         break;
                    case gh:
                         k = b;
                         k.uc(c, g);
                         h = k.Fb[q(g)];
                         k = g.la();
                         g = h;
                         h = k.y;
                         g.setAttribute("cx", k.x);
                         g.setAttribute("cy", h);
                         break;
                    case hh:
                         k = b, k.Nc(c, g), h = k.Fb[q(g)], k.ma.fa().removeChild(h), delete k.Mb[q(h)], delete k.Fb[q(g)]
               }
          }
     }

     function kh(a, b, c) {
          for (var d = pg(a.$), e = 0; e < d.length; e++) {
               var g = d[e];
               switch (a.$.get(g)) {
                    case fh:
                         var h = b,
                              k = c,
                              m = g;
                         h.mc(k, m);
                         g = h;
                         h = m;
                         k = Bd(g.ma, dg(k, h), xd);
                         g.cd[q(k)] = h;
                         g.Ab[q(h)] = k;
                         break;
                    case gh:
                         k = b;
                         h = c;
                         m = g;
                         k.tc(h, m);
                         g = h;
                         h = m;
                         k = k.Ab[q(h)];
                         g = dg(g, h);
                         h = g.y;
                         k.setAttribute("cx", g.x);
                         k.setAttribute("cy", h);
                         break;
                    case hh:
                         k = b, h = g, k.Mc(c, h), g = k, k = h, h = g.Ab[q(k)], g.ma.fa().removeChild(h), delete g.Ab[q(k)]
               }
          }
     }
     var fh = "redraw-buffer-command-draw",
          hh = "redraw-buffer-command-undraw",
          gh = "redraw-buffer-command-redraw";

     function T() {
          F.call(this);
          this.ka = lh.DEFAULT;
          this.ea = 1
     }
     t(T, F);
     f = T.prototype;
     f.getName = function() {
          return "unknown"
     };
     f.Fa = function() {
          return "Unknown"
     };
     f.Nb = function(a) {
          this.ea = a
     };
     f.Xc = function() {
          return this.ka
     };
     f.gc = function(a) {
          this.ka !== a && (this.ka = a, G(this, mh))
     };
     f.Eb = function() {};
     f.nb = function() {};
     f.Gb = function() {};
     f.ub = function() {};
     f.connect = function(a) {
          this.aa = a
     };
     f.kc = function() {
          delete this.aa
     };
     f.Kb = function() {
          return !1
     };
     f.cb = function() {};
     f.Sa = function() {};
     f.sc = function() {};
     f.Sb = function() {};
     f.tb = function() {};
     f.$a = function() {};
     f.Vc = function() {};
     f.Qb = function() {};
     f.yb = function() {};
     f.zb = function() {};
     f.Sc = function() {};
     f.Tc = function() {};
     f.Za = function() {};
     f.reset = function() {};

     function nh(a) {
          tf(a.aa)
     }

     function oh(a) {
          vf(a.aa)
     }

     function ph(a) {
          return a.aa ? a.aa.$ : void 0
     }
     var lh = {
               DEFAULT: "chemwriter-default-cursor",
               ed: "chemwriter-move-cursor"
          },
          mh = "tool-cursor-changed";

     function qh() {
          this.aa = -1
     };

     function rh() {
          this.aa = 64;
          this.$ = [];
          this.ka = [];
          this.na = [];
          this.da = [];
          this.da[0] = 128;
          for (var a = 1; a < this.aa; ++a) this.da[a] = 0;
          this.ea = this.ca = 0;
          this.reset()
     }
     t(rh, qh);
     rh.prototype.reset = function() {
          this.$[0] = 1732584193;
          this.$[1] = 4023233417;
          this.$[2] = 2562383102;
          this.$[3] = 271733878;
          this.$[4] = 3285377520;
          this.ea = this.ca = 0
     };

     function sh(a, b, c) {
          c || (c = 0);
          var d = a.na;
          if (l(b))
               for (var e = 0; 16 > e; e++) d[e] = b.charCodeAt(c) << 24 | b.charCodeAt(c + 1) << 16 | b.charCodeAt(c + 2) << 8 | b.charCodeAt(c + 3), c += 4;
          else
               for (e = 0; 16 > e; e++) d[e] = b[c] << 24 | b[c + 1] << 16 | b[c + 2] << 8 | b[c + 3], c += 4;
          for (e = 16; 80 > e; e++) {
               var g = d[e - 3] ^ d[e - 8] ^ d[e - 14] ^ d[e - 16];
               d[e] = (g << 1 | g >>> 31) & 4294967295
          }
          b = a.$[0];
          c = a.$[1];
          for (var h = a.$[2], k = a.$[3], m = a.$[4], n, e = 0; 80 > e; e++) 40 > e ? 20 > e ? (g = k ^ c & (h ^ k), n = 1518500249) : (g = c ^ h ^ k, n = 1859775393) : 60 > e ? (g = c & h | k & (c | h), n = 2400959708) : (g = c ^ h ^ k, n = 3395469782), g = (b <<
               5 | b >>> 27) + g + m + n + d[e] & 4294967295, m = k, k = h, h = (c << 30 | c >>> 2) & 4294967295, c = b, b = g;
          a.$[0] = a.$[0] + b & 4294967295;
          a.$[1] = a.$[1] + c & 4294967295;
          a.$[2] = a.$[2] + h & 4294967295;
          a.$[3] = a.$[3] + k & 4294967295;
          a.$[4] = a.$[4] + m & 4294967295
     }

     function th(a, b, c) {
          if (null != b) {
               da(c) || (c = b.length);
               for (var d = c - a.aa, e = 0, g = a.ka, h = a.ca; e < c;) {
                    if (!h)
                         for (; e <= d;) sh(a, b, e), e += a.aa;
                    if (l(b))
                         for (; e < c;) {
                              if (g[h] = b.charCodeAt(e), ++h, ++e, h == a.aa) {
                                   sh(a, g);
                                   h = 0;
                                   break
                              }
                         } else
                              for (; e < c;)
                                   if (g[h] = b[e], ++h, ++e, h == a.aa) {
                                        sh(a, g);
                                        h = 0;
                                        break
                                   }
               }
               a.ca = h;
               a.ea += c
          }
     };

     function uh(a) {
          for (var b = [], c = 0, d = 0; d < a.length; d++) {
               for (var e = a.charCodeAt(d); 255 < e;) b[c++] = e & 255, e >>= 8;
               b[c++] = e
          }
          a = new rh;
          th(a, b);
          b = [];
          d = 8 * a.ea;
          56 > a.ca ? th(a, a.da, 56 - a.ca) : th(a, a.da, a.aa - (a.ca - 56));
          for (c = a.aa - 1; 56 <= c; c--) a.ka[c] = d & 255, d /= 256;
          sh(a, a.ka);
          for (c = d = 0; 5 > c; c++)
               for (e = 24; 0 <= e; e -= 8) b[d] = a.$[c] >> e & 255, ++d;
          a = [];
          for (c = 0; c < b.length; c++) a[2 * c] = "0123456789abcdef".charAt(b[c] >> 4 & 15), a[2 * c + 1] = "0123456789abcdef".charAt(b[c] & 15);
          return a.join("")
     };
     var vh = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

     function wh(a) {
          F.call(this);
          this.aa = a;
          this.$ = {
               status: void 0,
               body: void 0
          }
     }
     t(wh, F);

     function xh(a) {
          var b = a.aa.match(vh)[3],
               c = window.location.href.match(vh)[3];
          b && b !== c && "undefined" !== typeof XDomainRequest ? yh(a) : zh(a)
     }

     function zh(a) {
          var b = new XMLHttpRequest;
          b.onreadystatechange = function() {
               4 === b.readyState && (this.$.status = b.status, this.$.body = b.responseText, G(this, Ah))
          }.bind(a);
          b.open("GET", a.aa, !0);
          b.send()
     }

     function yh(a) {
          var b = new XDomainRequest;
          b.timeout = 9999;
          b.open("GET", a.aa);
          b.onerror = function() {
               this.$.status = 400;
               delete this.$.body;
               G(this, Ah)
          }.bind(a);
          b.onprogress = function() {
               G(this, Bh)
          }.bind(a);
          b.ontimeout = function() {
               this.$.status = 400;
               delete this.$.body;
               G(this, Ah)
          }.bind(a);
          b.onload = function() {
               this.$.status = 200;
               this.$.body = b.responseText;
               G(this, Ah)
          }.bind(a);
          b.send()
     }
     var Ah = "request-ready",
          Bh = "request-progress";

     function Ch() {
          F.call(this);
          this.$ = {};
          this.aa = void 0;
          this.ca = this.da = !1
     }
     t(Ch, F);
     Ch.prototype.ea = function(a) {
          this.aa = a || "";
          this.ca = !0;
          a = a.split("\n");
          for (var b = 0; b < a.length; b++) {
               var c = a[b];
               "#" !== c[0] && (c = c.split(":"), 2 === c.length && (this.$[c[0]] = c[1].trim()))
          }
          if (this.aa && (b = this.aa.split("\n"), 1 !== b.length && (a = b.pop().split(":")[1], void 0 !== a))) {
               a = a.trim();
               for (var c = b.join("\n"), d = "", e = 4, g = 0; 10 > g; g++) e += 7 * g, d += "0123456789abcdef".charAt(e % 16);
               b = d + uh(b[4] || "");
               b = uh(c + b);
               if (a === b && (a = this.$["Deployment Expires"]) && !(Date.parse(a) < Date.parse(new Date))) switch (this.$["License Type"]) {
                    case "website":
                         this.da =
                              window.location.hostname === this.$["Licensed Host"] || window.location.hostname === [cc, this.$["Licensed Host"]].join(".")
               }
          }
          G(this, Fd)
     };
     Ch.prototype.oc = function() {
          return this.da
     };
     var Fd = "molfile-loaded";

     function Dh(a) {
          H.call(this);
          this.ib = a;
          this.Ca = new Ld;
          this.ra = new Wf(this.Ca);
          this.aa = new Qg(this.Ca, a);
          this.$ = new of ;
          this.ca = new U;
          this.ma = new qg;
          this.ea = new eh;
          rg(this.ma, this.$);
          this.ca.connect(this.$);
          this.ma.Da(this);
          this.$.Da(this);
          I(this, this.aa)
     }
     t(Dh, H);
     f = Dh.prototype;
     f.ta = function() {
          Dh.ia.ta.call(this);
          this.ib.ca ? this.ib.oc() || yc(this, new Ig, 0) : Yb(this.ib, Fd, this.Le, !1, this);
          Eh(this);
          A(this.ca, mh, this.df, !1, this)
     };
     f.za = function() {
          this.da = x("div", {
               "class": "chemwriter-canvas " + lh.DEFAULT
          })
     };
     f.rb = function(a) {
          Df(this.$, a);
          a = Hc(this.$.$);
          Sd(this.Ca, a);
          this.ca.Nb(a);
          Fh(this);
          Gh(this)
     };
     f.Zb = function() {
          return Ef(this.$)
     };

     function Hh(a, b) {
          oe(a.$.$);
          Ih(a.ca, b)
     }
     f.hc = function() {
          gg(this.ma.aa) && this.ma.hc()
     };
     f.cc = function() {
          hg(this.ma.aa) && this.ma.cc()
     };
     f.ec = function() {
          Xg(this.aa, eg(this.ra))
     };
     f.translate = function(a) {
          a = a.clone();
          var b = this.aa.aa.La;
          a.x /= b;
          a.y /= -b;
          this.aa.translate(a)
     };
     f.xa = function(a) {
          this.ca.xa(a)
     };

     function Gh(a) {
          for (var b = a.$.$, c = b.$, d = 0; d < c.length; d++) a.ea.nc(c[d]);
          b = b.vb();
          for (d = 0; d < b.length; d++) a.ea.mc(b[d]);
          d = a.ea;
          b = a.aa;
          c = a.ra;
          jh(d, b, c);
          kh(d, b, c);
          ih(d);
          a.ec()
     }

     function Eh(a) {
          A(a.$, qe, a.de, !1, a);
          A(a.$, re, a.ge, !1, a);
          A(a.$, se, a.ae, !1, a);
          A(a.$, te, a.ce, !1, a);
          A(a.$, "document-lasso-added", a.He, !1, a);
          A(a.$, "document-lasso-removed", a.Je, !1, a);
          A(a.$, ce, a.Ve, !1, a);
          A(a.$, be, a.Ue, !1, a);
          A(a.$, fe, a.fe, !1, a);
          A(a.$, ee, a.ee, !1, a);
          A(a.$, me, a.Ce, !1, a);
          A(a.$, le, a.Be, !1, a);
          A(a.$, ke, a.be, !1, a);
          A(a.$, "document-rotator-added", a.Xe, !1, a);
          A(a.$, "document-rotator-removed", a.Ze, !1, a);
          A(a.$, Lg, a.Ye, !1, a);
          A(a.$, bh, a.Ie, !1, a);
          A(a.$, uf, a.Zd, !1, a);
          A(a.$, xf, a.$d, !1, a)
     }
     f.Le = function(a) {
          a.target.oc() || yc(this, new Ig, 0)
     };
     f.Zd = function() {};
     f.df = function(a) {
          a = a.target;
          for (var b in lh) {
               var c = lh[b];
               Hg(this.fa(), c)
          }
          Gg(this.fa(), a.Xc())
     };
     f.$d = function() {
          var a = this.ea,
               b = this.aa,
               c = this.ra;
          jh(a, b, c);
          kh(a, b, c);
          ih(a)
     };
     f.de = function(a) {
          this.ea.nc(a.target)
     };
     f.fe = function(a) {
          this.ea.uc(a.target);
          for (var b = a.target.vb(), c = 0; c < b.length; c++) {
               var d = b[c],
                    e = de(d, a.target);
               this.ea.tc(d);
               this.ea.uc(e)
          }
     };
     f.ge = function(a) {
          a.target === this.$.aa && qf(this.$, void 0);
          this.ea.Nc(a.target)
     };
     f.ee = function(a) {
          a = a.target;
          this.ea.uc(a);
          a = a.vb();
          for (var b = 0; b < a.length; b++) this.ea.tc(a[b])
     };
     f.Ve = function(a) {
          var b = a.target;
          b.Cb() || b.ac() ? (a = this.ca.Kb(), b = this.aa.Fb[q(b)], nc(b, a ? Qd : Pd)) : (a = this.aa.Fb[q(b)], nc(a, xd))
     };
     f.Ue = function(a) {
          var b = a.target;
          b.ac() || b.Cb() ? (a = this.ca.Kb(), b = this.aa.Fb[q(b)], nc(b, a ? Qd : Pd)) : (a = this.aa.Fb[q(b)], nc(a, xd))
     };
     f.Ce = function(a) {
          var b = a.target;
          b.Cb() || b.ac() ? (a = this.ca.Kb(), b = this.aa.Ab[q(b)], nc(b, a ? Qd : Pd)) : (a = this.aa.Ab[q(b)], nc(a, xd))
     };
     f.Be = function(a) {
          var b = a.target;
          b.ac() || b.Cb() ? (a = this.ca.Kb(), b = this.aa.Ab[q(b)], nc(b, a ? Qd : Pd)) : (a = this.aa.Ab[q(b)], nc(a, xd))
     };
     f.be = function(a) {
          this.ea.tc(a.target)
     };
     f.ae = function(a) {
          this.ea.mc(a.target)
     };
     f.ce = function(a) {
          a.target === this.$.ca && rf(this.$, void 0);
          this.ea.Mc(a.target)
     };
     f.Xe = function(a) {
          Tg(this.aa, this.ra, a.target)
     };
     f.Ze = function(a) {
          Ug(this.aa, a.target)
     };
     f.Ye = function(a) {
          var b = this.aa,
               c = this.ra;
          a = a.target;
          Ug(b, a);
          Tg(b, c, a)
     };
     f.He = function(a) {
          Vg(this.aa, a.target)
     };
     f.Je = function(a) {
          Wg(this.aa, a.target)
     };
     f.Ie = function(a) {
          var b = this.aa;
          a = a.target;
          Wg(b, a);
          Vg(b, a)
     };

     function Fh(a) {
          var b = a.aa;
          Dd(b.ea);
          Dd(b.$);
          Dd(b.Ca);
          Dd(b.ma);
          b.ra = void 0;
          b.Jc = {};
          b.ob = {};
          b.Pc = {};
          b.bc = {};
          b.Mb = {};
          b.Fb = {};
          b.cd = {};
          b.Ab = {};
          var c = new K;
          b.aa = c;
          Cd(b.ca, b.aa);
          a = a.ra;
          a.$ = {};
          a.aa = {}
     };

     function Jh(a, b, c, d, e, g) {
          if (!(cb || db || fb && ob("525"))) return !0;
          if (v && e) return Kh(a);
          if (e && !d) return !1;
          p(b) && (b = Lh(b));
          e = 17 == b || 18 == b || v && 91 == b;
          if ((!c || v) && e || v && 16 == b && (d || g)) return !1;
          if ((fb || db) && d && c) switch (a) {
               case 220:
               case 219:
               case 221:
               case 192:
               case 186:
               case 189:
               case 187:
               case 188:
               case 190:
               case 191:
               case 192:
               case 222:
                    return !1
          }
          if (cb && d && b == a) return !1;
          switch (a) {
               case 13:
                    return !0;
               case 27:
                    return !(fb || db)
          }
          return Kh(a)
     }

     function Kh(a) {
          if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || (fb || db) && !a) return !0;
          switch (a) {
               case 32:
               case 43:
               case 63:
               case 64:
               case 107:
               case 109:
               case 110:
               case 111:
               case 186:
               case 59:
               case 189:
               case 187:
               case 61:
               case 188:
               case 190:
               case 191:
               case 192:
               case 222:
               case 219:
               case 220:
               case 221:
                    return !0;
               default:
                    return !1
          }
     }

     function Lh(a) {
          if (eb) a = Mh(a);
          else if (v && fb) switch (a) {
               case 93:
                    a = 91
          }
          return a
     }

     function Mh(a) {
          switch (a) {
               case 61:
                    return 187;
               case 59:
                    return 186;
               case 173:
                    return 189;
               case 224:
                    return 91;
               case 0:
                    return 224;
               default:
                    return a
          }
     };

     function Nh(a, b) {
          F.call(this);
          a && Oh(this, a, b)
     }
     t(Nh, F);
     f = Nh.prototype;
     f.$b = null;
     f.Gc = null;
     f.Zc = null;
     f.Hc = null;
     f.bb = -1;
     f.Lb = -1;
     f.Qc = !1;
     var Ph = {
               3: 13,
               12: 144,
               63232: 38,
               63233: 40,
               63234: 37,
               63235: 39,
               63236: 112,
               63237: 113,
               63238: 114,
               63239: 115,
               63240: 116,
               63241: 117,
               63242: 118,
               63243: 119,
               63244: 120,
               63245: 121,
               63246: 122,
               63247: 123,
               63248: 44,
               63272: 46,
               63273: 36,
               63275: 35,
               63276: 33,
               63277: 34,
               63289: 144,
               63302: 45
          },
          Qh = {
               Up: 38,
               Down: 40,
               Left: 37,
               Right: 39,
               Enter: 13,
               F1: 112,
               F2: 113,
               F3: 114,
               F4: 115,
               F5: 116,
               F6: 117,
               F7: 118,
               F8: 119,
               F9: 120,
               F10: 121,
               F11: 122,
               F12: 123,
               "U+007F": 46,
               Home: 36,
               End: 35,
               PageUp: 33,
               PageDown: 34,
               Insert: 45
          },
          Rh = cb || db || fb && ob("525"),
          Sh = v && eb;
     f = Nh.prototype;
     f.pe = function(a) {
          if (fb || db)
               if (17 == this.bb && !a.ctrlKey || 18 == this.bb && !a.$ || v && 91 == this.bb && !a.metaKey) this.Lb = this.bb = -1; - 1 == this.bb && (a.ctrlKey && 17 != a.keyCode ? this.bb = 17 : a.$ && 18 != a.keyCode ? this.bb = 18 : a.metaKey && 91 != a.keyCode && (this.bb = 91));
          Rh && !Jh(a.keyCode, this.bb, a.shiftKey, a.ctrlKey, a.$, a.metaKey) ? this.handleEvent(a) : (this.Lb = Lh(a.keyCode), Sh && (this.Qc = a.$))
     };
     f.qe = function(a) {
          this.Lb = this.bb = -1;
          this.Qc = a.$
     };
     f.handleEvent = function(a) {
          var b = a.Hb,
               c, d, e = b.altKey;
          cb && "keypress" == a.type ? c = this.Lb : (fb || db) && "keypress" == a.type ? c = this.Lb : bb && !fb ? c = this.Lb : (c = b.keyCode || this.Lb, d = b.charCode || 0, Sh && (e = this.Qc), v && 63 == d && 224 == c && (c = 191));
          (d = c = Lh(c)) ? 63232 <= c && c in Ph ? d = Ph[c] : 25 == c && a.shiftKey && (d = 9): b.keyIdentifier && b.keyIdentifier in Qh && (d = Qh[b.keyIdentifier]);
          a = d == this.bb;
          this.bb = d;
          b = new Th(d, 0, a, b);
          b.$ = e;
          G(this, b)
     };
     f.fa = function() {
          return this.$b
     };

     function Oh(a, b, c) {
          a.Hc && Uh(a);
          a.$b = b;
          a.Gc = A(a.$b, "keypress", a, c);
          a.Zc = A(a.$b, "keydown", a.pe, c, a);
          a.Hc = A(a.$b, "keyup", a.qe, c, a)
     }

     function Uh(a) {
          a.Gc && (Zb(a.Gc), Zb(a.Zc), Zb(a.Hc), a.Gc = null, a.Zc = null, a.Hc = null);
          a.$b = null;
          a.bb = -1;
          a.Lb = -1
     }
     f.lb = function() {
          Nh.ia.lb.call(this);
          Uh(this)
     };

     function Th(a, b, c, d) {
          z.call(this, d);
          this.type = "key";
          this.keyCode = a;
          this.repeat = c
     }
     t(Th, z);

     function Vh(a, b) {
          if ("function" == fa(a)) b && (a = na(a, b));
          else if (a && "function" == typeof a.handleEvent) a = na(a.handleEvent, a);
          else throw Error("Invalid listener argument");
          2147483647 < Number(400) || ca.setTimeout(a, 400)
     };
     var Wh = {
          8: "backspace",
          9: "tab",
          13: "enter",
          16: "shift",
          17: "ctrl",
          18: "alt",
          19: "pause",
          20: "caps-lock",
          27: "esc",
          32: "space",
          33: "pg-up",
          34: "pg-down",
          35: "end",
          36: "home",
          37: "left",
          38: "up",
          39: "right",
          40: "down",
          45: "insert",
          46: "delete",
          48: "0",
          49: "1",
          50: "2",
          51: "3",
          52: "4",
          53: "5",
          54: "6",
          55: "7",
          56: "8",
          57: "9",
          59: "semicolon",
          61: "equals",
          65: "a",
          66: "b",
          67: "c",
          68: "d",
          69: "e",
          70: "f",
          71: "g",
          72: "h",
          73: "i",
          74: "j",
          75: "k",
          76: "l",
          77: "m",
          78: "n",
          79: "o",
          80: "p",
          81: "q",
          82: "r",
          83: "s",
          84: "t",
          85: "u",
          86: "v",
          87: "w",
          88: "x",
          89: "y",
          90: "z",
          93: "context",
          96: "num-0",
          97: "num-1",
          98: "num-2",
          99: "num-3",
          100: "num-4",
          101: "num-5",
          102: "num-6",
          103: "num-7",
          104: "num-8",
          105: "num-9",
          106: "num-multiply",
          107: "num-plus",
          109: "num-minus",
          110: "num-period",
          111: "num-division",
          112: "f1",
          113: "f2",
          114: "f3",
          115: "f4",
          116: "f5",
          117: "f6",
          118: "f7",
          119: "f8",
          120: "f9",
          121: "f10",
          122: "f11",
          123: "f12",
          186: "semicolon",
          187: "equals",
          189: "dash",
          188: ",",
          190: ".",
          191: "/",
          192: "`",
          219: "open-square-bracket",
          220: "\\",
          221: "close-square-bracket",
          222: "single-quote",
          224: "win"
     };

     function Xh(a) {
          F.call(this);
          this.aa = this.ca = {};
          this.da = 0;
          this.ya = Xa(Yh);
          this.ma = Xa(Zh);
          this.ea = null;
          this.$ = a;
          A(this.$, "keydown", this.Ec, void 0, this);
          gb && A(this.$, "keypress", this.Ed, void 0, this);
          A(this.$, "keyup", this.Dd, void 0, this)
     }
     var $h;
     t(Xh, F);

     function ai(a) {
          this.$ = a || null;
          this.next = a ? null : {}
     }
     var Yh = [27, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 19],
          Zh = "color date datetime datetime-local email month number password search tel text time url week".split(" ");
     f = Xh.prototype;
     f.Qd = function(a, b) {
          bi(this.ca, ci(arguments), a)
     };

     function ci(a) {
          if (l(a[1])) a = Ka(di(a[1]), function(a) {
               return a.keyCode & 255 | a.we << 8
          });
          else {
               var b = a,
                    c = 1;
               ga(a[1]) && (b = a[1], c = 0);
               for (a = []; c < b.length; c += 2) a.push(b[c] & 255 | b[c + 1] << 8)
          }
          return a
     }
     f.lb = function() {
          Xh.ia.lb.call(this);
          this.ca = {};
          C(this.$, "keydown", this.Ec, !1, this);
          gb && C(this.$, "keypress", this.Ed, !1, this);
          C(this.$, "keyup", this.Dd, !1, this);
          this.$ = null
     };

     function di(a) {
          a = a.replace(/[ +]*\+[ +]*/g, "+").replace(/[ ]+/g, " ").toLowerCase();
          a = a.split(" ");
          for (var b = [], c, d = 0; c = a[d]; d++) {
               var e = c.split("+"),
                    g = null;
               c = 0;
               for (var h, k = 0; h = e[k]; k++) {
                    switch (h) {
                         case "shift":
                              c |= 1;
                              continue;
                         case "ctrl":
                              c |= 2;
                              continue;
                         case "alt":
                              c |= 4;
                              continue;
                         case "meta":
                              c |= 8;
                              continue
                    }
                    null === g || Fa("At most one non-modifier key can be in a stroke.");
                    e = void 0;
                    if (!$h) {
                         g = {};
                         for (e in Wh) g[Wh[e]] = Lh(parseInt(e, 10));
                         $h = g
                    }
                    g = $h[h];
                    break
               }
               b.push({
                    keyCode: g,
                    we: c
               })
          }
          return b
     }
     f.Dd = function(a) {
          eb && ei(this, a);
          gb && !this.ka && gb && a.ctrlKey && a.$ && this.Ec(a)
     };

     function ei(a, b) {
          if (v) {
               if (224 == b.keyCode) {
                    a.na = !0;
                    Vh(function() {
                         this.na = !1
                    }, a);
                    return
               }
               var c = b.metaKey || a.na;
               67 != b.keyCode && 88 != b.keyCode && 86 != b.keyCode || !c || (b.metaKey = c, a.Ec(b))
          }
          32 == a.ea && 32 == b.keyCode && b.preventDefault();
          a.ea = null
     }
     f.Ed = function(a) {
          32 < a.keyCode && gb && a.ctrlKey && a.$ && (this.ka = !0)
     };

     function bi(a, b, c) {
          var d = b.shift(),
               e = a[d];
          if (e && (!b.length || e.$)) throw Error("Keyboard shortcut conflicts with existing shortcut");
          b.length ? (d = d.toString(), e = new ai, e = d in a ? a[d] : a[d] = e, bi(e.next, b, c)) : a[d] = new ai(c)
     }
     f.Ec = function(a) {
          var b;
          b = a.keyCode;
          if (16 == b || 17 == b || 18 == b) b = !1;
          else {
               var c = a.target,
                    d = "TEXTAREA" == c.tagName || "INPUT" == c.tagName || "BUTTON" == c.tagName || "SELECT" == c.tagName,
                    e = !d && (c.isContentEditable || c.ownerDocument && "on" == c.ownerDocument.designMode);
               b = !d && !e || this.ya[b] ? !0 : e ? !1 : a.$ || a.ctrlKey || a.metaKey ? !0 : "INPUT" == c.tagName && this.ma[c.type] ? 13 == b : "INPUT" == c.tagName || "BUTTON" == c.tagName ? 32 != b : !1
          }
          if (b) {
               b = Lh(a.keyCode);
               c = b & 255 | ((a.shiftKey ? 1 : 0) | (a.ctrlKey ? 2 : 0) | (a.$ ? 4 : 0) | (a.metaKey ? 8 : 0)) << 8;
               if (!this.aa[c] ||
                    1500 <= oa() - this.da) this.aa = this.ca, this.da = oa();
               (c = this.aa[c]) && c.next && (this.aa = c.next, this.da = oa());
               "keydown" == a.type && gb && a.ctrlKey && a.$ ? this.ka = !1 : c && (c.next ? a.preventDefault() : (this.aa = this.ca, this.da = oa(), a.preventDefault(), c = c.$, d = a.target, e = G(this, new fi("shortcut", c, d)), (e &= G(this, new fi("shortcut_" + c, c, d))) || a.preventDefault(), eb && (this.ea = b)))
          }
     };

     function fi(a, b, c) {
          y.call(this, a, c);
          this.identifier = b
     }
     t(fi, y);

     function gi() {}
     f = gi.prototype;
     f.connect = function(a) {
          this.ha = a
     };
     f.hd = function(a) {
          var b = Rg(this.ha.aa, a),
               c = b ? void 0 : Sg(this.ha.aa, a);
          b ? this.ha.ca.cb(b) : c ? this.ha.ca.tb(c) : this.ha.ca.yb(Yg(this.ha.aa, a));
          this.ea = b;
          this.da = c
     };
     f.jd = function(a, b) {
          var c = Rg(this.ha.aa, a),
               d = c ? void 0 : Sg(this.ha.aa, a);
          this.ea ? this.ha.ca.Sb(this.ea) : this.da ? this.ha.ca.Qb(this.da) : this.ha.ca.Tc();
          delete this.ea;
          delete this.da;
          c ? this.ha.ca.sc(c) : d ? this.ha.ca.Vc(d) : this.ha.ca.Sc(Yg(this.ha.aa, a));
          this.ha.ca.Za(Yg(this.ha.aa, a), b);
          this.ea = c;
          this.da = d
     };
     f.kd = function(a) {
          var b = Rg(this.ha.aa, a),
               c = b ? void 0 : Sg(this.ha.aa, a);
          b ? this.ha.ca.Sa(b) : c ? this.ha.ca.$a(c) : this.ha.ca.zb(Yg(this.ha.aa, a));
          this.ea = b;
          this.da = c
     };
     f.gd = function(a) {
          this.ha.translate(a)
     };
     f.ld = function(a, b) {
          var c = this.ha,
               d = Yg(c.aa, a);
          Zg(c.aa, d, b)
     };

     function hi(a, b) {
          F.call(this);
          var c = this.$ = a;
          if (c = ia(c) && 1 == c.nodeType ? this.$ : this.$ ? this.$.body : null) {
               var d = 9 == c.nodeType ? c : c.ownerDocument || c.document;
               d.defaultView && d.defaultView.getComputedStyle && (c = d.defaultView.getComputedStyle(c, null)) && (c.direction || c.getPropertyValue("direction"))
          }
          this.aa = A(this.$, eb ? "DOMMouseScroll" : "mousewheel", this, b)
     }
     t(hi, F);
     hi.prototype.handleEvent = function(a) {
          var b = 0,
               c = a.Hb;
          "mousewheel" == c.type ? (a = ii(-c.wheelDelta), b = da(c.wheelDeltaX) ? ii(-c.wheelDeltaY) : a) : (a = c.detail, 100 < a ? a = 3 : -100 > a && (a = -3), da(c.axis) && c.axis === c.HORIZONTAL_AXIS || (b = a));
          p(this.ca) && (b = Math.min(Math.max(b, -this.ca), this.ca));
          b = new ji(a, c, 0, b);
          G(this, b)
     };

     function ii(a) {
          return fb && (v || hb) && a % 40 ? a : a / 40
     }
     hi.prototype.lb = function() {
          hi.ia.lb.call(this);
          Zb(this.aa);
          this.aa = null
     };

     function ji(a, b, c, d) {
          z.call(this, b);
          this.type = "mousewheel";
          this.detail = a;
          this.deltaY = d
     }
     t(ji, z);

     function ki() {
          this.$ = !1;
          this.aa = void 0
     }
     f = ki.prototype;
     f.connect = function(a) {
          this.ca = a;
          this.ea = new hi(a.fa());
          a.fa().addEventListener("mousedown", this.he.bind(this), !0);
          a.fa().addEventListener("mousemove", this.Ne.bind(this), !0);
          a.fa().addEventListener("mouseup", this.je.bind(this), !0);
          a.fa().addEventListener("mouseover", this.Qe.bind(this), !0);
          a.fa().addEventListener("mouseout", this.ie.bind(this), !0);
          window.addEventListener("mouseup", this.Re.bind(this), !0);
          a.fa().addEventListener("MozMousePixelScroll", this.Te.bind(this), !0);
          A(this.ea, "mousewheel", this.Se, !1, this)
     };
     f.Jd = function() {};
     f.md = function() {};
     f.nd = function() {};
     f.Ld = function() {};
     f.Kd = function() {};
     f.he = function(a) {
          0 === a.button && (a.preventDefault(), this.$ = !0, this.na(li(this, a)))
     };
     f.Ne = function(a) {
          a.preventDefault();
          var b = li(this, a);
          a.shiftKey && !this.$ ? (this.aa && (a = b.clone(), a.x -= this.aa.x, a.y -= this.aa.y, this.md(a)), this.aa = b) : (this.$ ? this.ka(b, a.shiftKey) : this.Jd(b), this.aa = void 0)
     };
     f.je = function(a) {
          this.$ && (this.$ = !1, this.da(li(this, a)), a.preventDefault())
     };
     f.Re = function(a) {
          this.$ && (this.$ = !1, this.da(li(this, a)))
     };
     f.Qe = function(a) {
          this.Ld(a)
     };
     f.ie = function(a) {
          for (var b = a.toElement || a.relatedTarget; b && b.parentNode && b.parentNode !== window;) {
               if (b.parentNode === this.ca.fa() || b === this.ca.fa()) return b.preventDefault && b.preventDefault(), !1;
               b = b.parentNode
          }
          this.Kd(a)
     };
     f.Se = function(a) {
          a.preventDefault();
          a.stopPropagation();
          this.nd(li(this, a.Hb), 0 < a.deltaY ? .95 : 1.05)
     };
     f.Te = function(a) {
          a.preventDefault()
     };

     function li(a, b) {
          var c = b.pageX - a.ca.fa().getBoundingClientRect().left - window.pageXOffset,
               d = b.pageY - a.ca.fa().getBoundingClientRect().top - window.pageYOffset;
          return new w(c, d)
     };

     function mi(a, b, c) {
          this.ea = b;
          this.aa = c / (2 * Math.sin(Math.PI / b));
          Jg.call(this, a, this.aa);
          for (a = 0; a < this.ea; a++) b = 2 * a * Math.PI / this.ea, this.$.push(new Ac(this.Bb().x + this.aa * Math.cos(b), this.Bb().y + this.aa * Math.sin(b)))
     }
     t(mi, Jg);
     mi.prototype.ka = function(a) {
          for (var b = 1; b < this.$.length; b++) {
               var c = this.$[b],
                    d;
               d = this.pb;
               var e = a;
               d = Cc(Bc(c.clone(), d), e).add(d);
               c.x = d.x;
               c.y = d.y
          }
     };

     function V(a) {
          T.call(this);
          this.ca = a
     }
     t(V, T);
     f = V.prototype;
     f.getName = function() {
          return ni[this.ca].toLowerCase()
     };
     f.Fa = function() {
          return ni[this.ca]
     };
     f.Eb = function(a) {
          qf(this.aa, a)
     };
     f.nb = function() {
          qf(this.aa, void 0)
     };
     f.Gb = function(a) {
          rf(this.aa, a)
     };
     f.ub = function() {
          rf(this.aa, void 0)
     };
     f.cb = function(a) {
          V.ia.cb.call(this, a);
          oi(this, a.la(), Xc(a))
     };
     f.Sa = function(a) {
          V.ia.Sa.call(this, a);
          pi(this)
     };
     f.tb = function(a) {
          V.ia.tb.call(this, a);
          for (var b = Tc(a), c = [], d = a.oa.pa, e = a.qa.pa, g = 0; g < d.length; g++) {
               var h = d[g];
               h !== a.oa && h !== a.qa && c.push(h)
          }
          for (g = 0; g < e.length; g++) h = e[g], h !== a.oa && h !== a.qa && c.push(h);
          for (e = d = 0; e < c.length; e++) d += Vc(a, c[e]);
          oi(this, a.oa.la(), Rc(b + (this.ca - 2) * Math.PI / (2 * this.ca) * (0 <= d ? -1 : 1)));
          this.da = a
     };
     f.$a = function(a) {
          V.ia.$a.call(this, a);
          pi(this)
     };
     f.yb = function(a) {
          V.ia.yb.call(this, a);
          oi(this, a, Math.PI / 6)
     };
     f.zb = function(a) {
          V.ia.zb.call(this, a);
          pi(this)
     };
     f.Za = function(a, b) {
          V.ia.Za.call(this, a);
          if (this.$)
               if (this.da) {
                    var c = Wc(this.da, this.$.Bb());
                    if (c !== Wc(this.da, a)) {
                         var c = Rc(Tc(this.da) + (this.ca - 2) * Math.PI / (2 * this.ca) * (0 <= c ? -1 : 1)),
                              d = this.da.oa.la(),
                              e = this.aa,
                              g = this.$;
                         g.Da(null);
                         O(e, "document-rotator-removed", g);
                         oi(this, d, c)
                    }
               } else this.$.vc(a, b)
     };
     f.reset = function() {
          V.ia.reset.call(this);
          if (this.$) {
               var a = this.aa,
                    b = this.$;
               b.Da(null);
               O(a, "document-rotator-removed", b)
          }
          delete this.$;
          delete this.da
     };
     f.Bd = function() {};

     function pi(a) {
          if (a.$) {
               var b = a.$.$;
               nh(a);
               for (var c = a.aa, d = .3 * a.ea, e = [], g, h = 1; h < b.length; h++) g = Bf(c, b[h - 1], b[h], !1, d), e.push(g);
               g = Bf(c, b[b.length - 1], b[0], !1, d);
               e.push(g);
               a.Bd(e);
               oh(a)
          }
          a.reset()
     }

     function oi(a, b, c) {
          b = new mi(b, a.ca, a.ea);
          Mg(b, c);
          c = a.aa;
          b.Da(c);
          O(c, "document-rotator-added", b);
          a.$ = b
     }
     var ni = {
          3: "Cyclopropane",
          4: "Cyclobutane",
          5: "Cyclopentane",
          6: "Cyclohexane",
          7: "Cycloheptane",
          8: "Cyclooctane"
     };

     function qi() {
          V.call(this, 6)
     }
     t(qi, V);
     qi.prototype.Bd = function(a) {
          for (var b = 0; b < a.length; b++) {
               var c = a[b],
                    d;
               if (2 !== c.Ba) d = !1;
               else {
                    d = c.oa;
                    var e = c.qa;
                    d = d.wb() && !Be(d) && e.wb() && !Be(e)
               }
               d && (Ge(c), b++)
          }
     };
     qi.prototype.getName = function() {
          return "benzene"
     };
     qi.prototype.Fa = function() {
          return "Benzene"
     };

     function ri() {
          this.ca = new ki;
          this.na = new Nh;
          this.$ = this.aa = this.ka = void 0
     }
     t(ri, gi);
     f = ri.prototype;
     f.connect = function(a) {
          ri.ia.connect.call(this, a);
          this.ha = a;
          this.ca.na = this.We.bind(this);
          this.ca.ka = this.jd.bind(this);
          this.ca.da = this.kd.bind(this);
          this.ca.Jd = this.Me.bind(this);
          this.ca.Ld = this.Pe.bind(this);
          this.ca.Kd = this.Oe.bind(this);
          this.ca.nd = this.ld.bind(this);
          this.ca.md = this.gd.bind(this);
          this.ca.connect(a.aa);
          Oh(this.na, a.fa());
          this.ka = new Xh(a.getParent().fa());
          this.ka.Qd("undo", v ? "meta+z" : "ctrl+z");
          this.ka.Qd("redo", v ? "shift+meta+z" : "ctrl+y");
          A(this.na, "key", this.Fe, !1, this);
          A(this.ka,
               "shortcut", this.Ge, !1, this)
     };

     function si(a) {
          if (void 0 !== a.aa || void 0 !== a.$) a.aa ? a.ha.ca.nb(a.aa) : a.$ && a.ha.ca.ub(a.$), a.aa = void 0, a.$ = void 0
     }
     f.Pe = function() {
          var a = this.ha.fa();
          a.setAttribute("tabindex", 1E3);
          a.focus()
     };
     f.Oe = function() {
          si(this);
          var a = this.ha.fa();
          a.removeAttribute("tabindex");
          a.blur()
     };
     f.Me = function(a) {
          var b = Rg(this.ha.aa, a);
          a = b ? void 0 : Sg(this.ha.aa, a);
          b ? this.aa !== b && (this.aa ? this.ha.ca.nb(this.aa) : this.$ && this.ha.ca.ub(this.$), this.ha.ca.Eb(b), this.aa = b, this.$ = void 0) : a ? this.$ !== a && (this.aa ? this.ha.ca.nb(this.aa) : this.$ && this.ha.ca.ub(this.$), this.ha.ca.Gb(a), this.aa = void 0, this.$ = a) : si(this)
     };
     f.We = function(a) {
          si(this);
          this.hd(a)
     };
     f.Fe = function(a) {
          if (!a.ctrlKey && !a.metaKey) {
               switch (a.keyCode) {
                    case 72:
                         W(this, "H");
                         break;
                    case 66:
                         W(this, "B");
                         break;
                    case 67:
                         W(this, "C");
                         break;
                    case 78:
                         W(this, "N");
                         break;
                    case 79:
                         W(this, "O");
                         break;
                    case 70:
                         W(this, "F");
                         break;
                    case 76:
                         W(this, "Cl");
                         break;
                    case 82:
                         W(this, "Br");
                         break;
                    case 73:
                         W(this, "I");
                         break;
                    case 80:
                         W(this, "P");
                         break;
                    case 90:
                         W(this, "Si");
                         break;
                    case 83:
                         W(this, "S");
                         break;
                    case 84:
                         W(this, "Sn");
                         break;
                    case 46:
                         ti(this);
                         break;
                    case 8:
                         ti(this);
                         break;
                    case 65:
                         var b = this.ha.$.aa;
                         if (b) {
                              var c = new qi;
                              c.Nb(this.ha.Ca.$);
                              c.connect(this.ha.$);
                              tf(this.ha.$);
                              c.cb(b);
                              c.Sa(b);
                              vf(this.ha.$)
                         } else {
                              for (var b = this.ha.$.$, c = [], d = 0; d < b.aa.length; d++) {
                                   var e = b.aa[d];
                                   e.ac() && c.push(e)
                              }
                              if (b = c[0]) c = new qi, c.Nb(this.ha.Ca.$), c.connect(this.ha.$), tf(this.ha.$), c.tb(b), c.$a(b), vf(this.ha.$)
                         }
                         break;
                    default:
                         return
               }
               a.preventDefault()
          }
     };

     function W(a, b) {
          var c = a.ha.$.aa;
          if (c) {
               var d = Oe().fa(b);
               tf(a.ha.$);
               ye(c, d);
               vf(a.ha.$)
          }
     }

     function ti(a) {
          tf(a.ha.$);
          var b = a.ha.$;
          b.aa ? zf(b, b.aa) : b.ca && Af(b, b.ca);
          for (var b = a.ha.$, c = pe(b.$), d = 0; d < c.length; d++) {
               var e = c[d];
               void 0 !== e.getParent() && zf(b, e)
          }
          vf(a.ha.$)
     }
     f.Ge = function(a) {
          switch (a.identifier) {
               case "undo":
                    this.ha.hc();
                    break;
               case "redo":
                    this.ha.cc()
          }
     };

     function ui() {
          F.call(this);
          this.$ = vi;
          this.aa = this.ca = void 0;
          this.ea = this.da = 1
     }
     t(ui, F);
     f = ui.prototype;
     f.connect = function(a) {
          a.addEventListener("touchstart", this.hf.bind(this), !0);
          a.addEventListener("touchmove", this.gf.bind(this), !0);
          a.addEventListener("touchend", this.ff.bind(this), !0);
          a.addEventListener("touchcancel", this.ef.bind(this), !0);
          this.ca = a
     };
     f.Nd = function() {};
     f.Od = function() {};
     f.Md = function() {};
     f.Uc = function() {};
     f.ke = function() {};
     f.od = function() {};
     f.pd = function() {};
     f.hf = function(a) {
          switch (a.touches.length) {
               case 1:
                    if ("http://www.w3.org/2000/svg" === a.target.namespaceURI) switch (a.preventDefault(), this.$) {
                         case vi:
                              this.$ = wi, this.Od(xi(this, a))
                    }
                    break;
               case 2:
                    a: {
                         void 0 === a.scale && (this.ea = Jc(a.touches[0].clientX, a.touches[0].clientY, a.touches[1].clientX, a.touches[1].clientY), a.scale = 1);
                         switch (this.$) {
                              case vi:
                                   var b = yi(this, a);
                                   this.aa = b.clone();
                                   this.da = 1;
                                   this.$ = zi;
                                   break;
                              case wi:
                                   b = yi(this, a);
                                   this.aa = b.clone();
                                   this.da = 1;
                                   this.$ = zi;
                                   this.Uc();
                                   break;
                              default:
                                   break a
                         }
                         a.preventDefault()
                    }
          }
     };
     f.gf = function(a) {
          switch (a.touches.length) {
               case 1:
                    switch (this.$) {
                         case wi:
                              this.Nd(xi(this, a))
                    }
                    break;
               case 2:
                    switch (void 0 === a.scale && (a.scale = Jc(a.touches[0].clientX, a.touches[0].clientY, a.touches[1].clientX, a.touches[1].clientY) / this.ea), this.$) {
                         case zi:
                              var b = a.scale / this.da;
                              this.od(Ai(this, a));
                              this.pd(yi(this, a), b);
                              this.aa = yi(this, a);
                              this.da = a.scale
                    }
          }
     };
     f.ff = function(a) {
          switch (this.$) {
               case wi:
                    this.Md(Bi(this, a));
                    this.$ = vi;
                    break;
               case zi:
                    this.$ = vi, this.aa = void 0
          }
     };
     f.ef = function() {
          this.$ = vi;
          this.aa = void 0;
          this.ea = this.da = 1;
          this.Uc()
     };

     function Bi(a, b) {
          var c = b.changedTouches[0],
               d = c.pageX - a.ca.getBoundingClientRect().left - window.pageXOffset,
               c = c.pageY - a.ca.getBoundingClientRect().top - window.pageYOffset;
          return new w(d, c)
     }

     function xi(a, b) {
          var c = b.touches[0],
               d = c.pageX - a.ca.getBoundingClientRect().left - window.pageXOffset,
               c = c.pageY - a.ca.getBoundingClientRect().top - window.pageYOffset;
          return new w(d, c)
     }

     function yi(a, b) {
          var c = b.touches[0],
               d = b.touches[1],
               e = a.ca.getBoundingClientRect(),
               g = window.pageXOffset,
               h = window.pageYOffset;
          return new w(sb(c.pageX - e.left - g, d.pageX - e.left - g, .5), sb(c.pageY - e.top - h, d.pageY - e.top - h, .5))
     }

     function Ai(a, b) {
          if (!a.aa) return new w(0, 0);
          var c = yi(a, b);
          c.x -= a.aa.x;
          c.y -= a.aa.y;
          return c
     }
     var vi = "touchscreen-state-waiting",
          wi = "touchscreen-state-touching",
          zi = "touchscreen-state-pinching";

     function Ci() {
          this.$ = new ui
     }
     t(Ci, gi);
     Ci.prototype.connect = function(a) {
          Ci.ia.connect.call(this, a);
          this.$.Od = this.hd.bind(this);
          this.$.Nd = this.jd.bind(this);
          this.$.Md = this.kd.bind(this);
          this.$.Uc = this.ca.bind(this);
          this.$.ke = this.aa.bind(this);
          this.$.od = this.gd.bind(this);
          this.$.pd = this.ld.bind(this);
          this.$.connect(a.fa())
     };
     Ci.prototype.ca = function() {
          this.ha.ca.reset()
     };
     Ci.prototype.aa = function(a, b, c) {
          var d = this.ha;
          b = Yg(d.aa, b);
          Zg(d.aa, b, c);
          this.ha.translate(a)
     };

     function U() {
          T.call(this);
          this.ca = []
     }
     t(U, T);
     f = U.prototype;
     f.getName = function() {
          return this.$ ? this.$.getName() : U.ia.getName.call(this)
     };
     f.Fa = function() {
          return this.$ ? this.$.Fa() : U.ia.Fa.call(this)
     };
     f.Eb = function(a) {
          this.$ ? this.$.Eb(a) : U.ia.Eb.call(this, a)
     };
     f.nb = function(a) {
          this.$ ? this.$.nb(a) : U.ia.nb.call(this, a)
     };
     f.Gb = function(a) {
          this.$ ? this.$.Gb(a) : U.ia.Gb.call(this, a)
     };
     f.ub = function(a) {
          this.$ ? this.$.ub(a) : U.ia.ub.call(this, a)
     };
     f.Xc = function() {
          return this.$ ? this.$.getName() : U.ia.Xc.call(this)
     };
     f.gc = function(a) {
          this.$ ? this.$.gc(a) : U.ia.gc.call(this, a)
     };
     f.Nb = function(a) {
          U.ia.Nb.call(this, a);
          this.$ && this.$.Nb(a)
     };
     f.xa = function(a) {
          this.ca.push(a);
          a.Da(this)
     };

     function Ih(a, b) {
          var c;
          a: {
               for (c = 0; c < a.ca.length; c++) {
                    var d = a.ca[c];
                    if (d.getName() === b) {
                         c = d;
                         break a
                    }
               }
               c = void 0
          }
          if (!c) throw Error(Di);
          a.$ && a.$.kc();
          a.aa && c.connect(a.aa);
          c.Nb(a.ea);
          a.$ = c
     }
     f.connect = function(a) {
          U.ia.connect.call(this, a);
          this.$ && this.$.connect(a)
     };
     f.kc = function() {
          U.ia.kc.call(this);
          this.$ && this.$.kc()
     };
     f.Kb = function() {
          return this.$ ? this.$.Kb() : U.ia.Kb.call(this)
     };
     f.cb = function(a) {
          this.$ && this.$.cb(a)
     };
     f.Sa = function(a) {
          this.$ && this.$.Sa(a)
     };
     f.sc = function(a) {
          this.$ && this.$.sc(a)
     };
     f.Sb = function(a) {
          this.$ && this.$.Sb(a)
     };
     f.tb = function(a) {
          this.$ && this.$.tb(a)
     };
     f.$a = function(a) {
          this.$ && this.$.$a(a)
     };
     f.Vc = function(a) {
          this.$ && this.$.Vc(a)
     };
     f.Qb = function(a) {
          this.$ && this.$.Qb(a)
     };
     f.yb = function(a) {
          this.$ && this.$.yb(a)
     };
     f.zb = function(a) {
          this.$ && this.$.zb(a)
     };
     f.Sc = function(a) {
          this.$ && this.$.Sc(a)
     };
     f.Tc = function() {
          this.$ && this.$.Tc()
     };
     f.Za = function(a, b) {
          this.$ && this.$.Za(a, b)
     };
     f.reset = function() {
          this.$ && this.$.reset()
     };
     var Di = "toolbox-no-such-tool";

     function Ei() {
          T.call(this);
          this.$ = new $g
     }
     t(Ei, T);
     f = Ei.prototype;
     f.$a = function(a) {
          Ei.ia.$a.call(this, a);
          this.$.$.Ea.length && this.Pb()
     };
     f.Sa = function(a) {
          Ei.ia.Sa.call(this, a);
          this.$.$.Ea.length && this.Pb()
     };
     f.yb = function(a) {
          Ei.ia.yb.call(this, a);
          hd(this.$.$);
          oe(ph(this));
          ah(this.$, a);
          a = this.aa;
          var b = this.$;
          b.Da(a);
          O(a, "document-lasso-added", b)
     };
     f.zb = function(a) {
          Ei.ia.zb.call(this, a);
          this.Pb()
     };
     f.Za = function(a) {
          Ei.ia.Za.call(this, a);
          if (this.$.$.Ea.length) {
               ah(this.$, a);
               a = this.aa.$.$;
               for (var b = 0; b < a.length; b++) ch(this.$, a[b].la()) & 1 ? a[b].sa(!0) : a[b].sa(!1)
          }
     };
     f.reset = function() {
          Ei.ia.reset.call(this);
          var a = this.aa,
               b = this.$;
          b.Da(null);
          O(a, "document-lasso-removed", b);
          oe(ph(this));
          hd(this.$.$)
     };
     f.Pb = function() {
          var a = this.aa,
               b = this.$;
          b.Da(null);
          O(a, "document-lasso-removed", b);
          hd(this.$.$)
     };

     function Fi() {
          Ei.call(this);
          this.ca = void 0
     }
     t(Fi, Ei);
     f = Fi.prototype;
     f.getName = function() {
          return "move"
     };
     f.Fa = function() {
          return "Move one or more atoms"
     };
     f.Eb = function(a) {
          qf(this.aa, a);
          a.Cb() && this.gc(lh.ed)
     };
     f.nb = function() {
          qf(this.aa, void 0);
          this.gc(lh.DEFAULT)
     };
     f.cb = function(a) {
          Fi.ia.cb.call(this, a);
          a.Cb() || (oe(ph(this)), a.sa(!0));
          var b = this.aa;
          b.ea += 1;
          1 === b.ea && O(b, "document-group-move-entered", b);
          this.gc(lh.ed);
          this.ca = a
     };
     f.Sa = function(a) {
          Fi.ia.Sa.call(this, a);
          this.ca = void 0;
          a = this.aa;
          if (!a.ea) throw Error("document-not-in-group-move");
          --a.ea;
          a.ea || O(a, "document-group-move-exited", a)
     };
     f.Za = function(a) {
          if (this.ca) {
               var b = a.x - this.ca.la().x;
               a = a.y - this.ca.la().y;
               var c = ph(this).$;
               nh(this);
               for (var d = 0; d < c.length; d++) {
                    var e = c[d];
                    if (e.Cb()) {
                         var g = e.la();
                         e.move(g.x + b, g.y + a)
                    }
               }
               oh(this)
          } else Fi.ia.Za.call(this, a)
     };
     f.Pb = function() {
          Fi.ia.Pb.call(this);
          this.ca = void 0
     };

     function Gi() {
          Ei.call(this);
          this.ca = this.da = void 0
     }
     t(Gi, Ei);
     f = Gi.prototype;
     f.Fa = function() {
          return "Delete atoms and bonds"
     };
     f.getName = function() {
          return "delete"
     };
     f.Kb = function() {
          return !0
     };
     f.Eb = function(a) {
          qf(this.aa, a)
     };
     f.Gb = function(a) {
          rf(this.aa, a)
     };
     f.nb = function() {
          qf(this.aa, void 0)
     };
     f.ub = function() {
          rf(this.aa, void 0)
     };
     f.cb = function(a) {
          Gi.ia.cb.call(this, a);
          a.sa(!0);
          this.da = a
     };
     f.Sa = function(a) {
          Gi.ia.Sa.call(this, a);
          a === this.da && (nh(this), a.sa(!1), zf(this.aa, a), oh(this));
          this.da = void 0
     };
     f.Sb = function(a) {
          a.sa(!1);
          this.da = void 0
     };
     f.tb = function(a) {
          a.sa(!0);
          this.ca = a
     };
     f.Qb = function(a) {
          a.sa(!1);
          this.ca = void 0
     };
     f.$a = function(a) {
          Gi.ia.$a.call(this, a);
          a === this.ca && (nh(this), Af(this.aa, a), oh(this));
          this.ca = void 0
     };
     f.Za = function(a) {
          this.da || this.ca || Gi.ia.Za.call(this, a)
     };
     f.reset = function() {
          Gi.ia.reset.call(this);
          oe(ph(this));
          this.ca = this.da = void 0
     };
     f.Pb = function() {
          if (this.$.$.Ea.length) {
               nh(this);
               for (var a = pe(ph(this)), b = 0; b < a.length; b++) {
                    var c = a[b];
                    c.sa(!1);
                    ph(this).sb(c)
               }
               oh(this)
          } else oe(ph(this));
          this.da = this.ca = void 0;
          Gi.ia.Pb.call(this)
     };

     function Hi(a, b) {
          Jg.call(this, a, b);
          this.$.push(this.pb);
          this.$.push(this.Bb());
          this.aa = b || 1;
          this.ea = void 0
     }
     t(Hi, Jg);
     Hi.prototype.vc = function(a, b) {
          this.ea || Hi.ia.vc.call(this, a, b)
     };

     function Ii(a, b) {
          a.ea = a.Bb().clone();
          a.da.x = b.x;
          a.da.y = b.y;
          G(a, new y(Lg))
     };

     function X() {
          T.call(this);
          this.da = this.ca = this.na = void 0
     }
     t(X, T);
     f = X.prototype;
     f.getName = function() {
          return "single-bond"
     };
     f.Fa = function() {
          return "Single Bond"
     };
     f.Eb = function(a) {
          qf(this.aa, a)
     };
     f.nb = function() {
          qf(this.aa, void 0)
     };
     f.Gb = function(a) {
          rf(this.aa, a)
     };
     f.ub = function() {
          rf(this.aa, void 0)
     };
     f.Oa = function() {
          return he
     };
     f.cb = function(a) {
          X.ia.cb.call(this, a);
          var b = $c(a);
          Ji(this, a.la(), b);
          this.na = a
     };
     f.Sa = function(a) {
          X.ia.Sa.call(this, a);
          Ki(this)
     };
     f.sc = function(a) {
          X.ia.sc.call(this, a);
          a !== this.na && this.$ && (Ii(this.$, a.la()), this.da = a)
     };
     f.Sb = function(a) {
          X.ia.Sb.call(this, a);
          if (this.da && this.da === a) {
               var b = this.$;
               a = a.la();
               if (!b.ea) throw Error("line-rotator-can-not-unclamp");
               b.ea = void 0;
               var c = b.Bb(),
                    d = b.pb,
                    e = d.x - a.x,
                    d = d.y - a.y,
                    e = b.aa / Math.sqrt(e * e + d * d);
               c.x = sb(b.pb.x, a.x, e);
               c.y = sb(b.pb.y, a.y, e);
               b.vc(a)
          }
     };
     f.tb = function(a) {
          X.ia.tb.call(this, a);
          a.sa(!0);
          this.ca = a
     };
     f.$a = function(a) {
          X.ia.$a.call(this, a);
          if (this.ca) {
               a.sa(!1);
               nh(this);
               if (this.Oa() === he) Ge(a);
               else if (a.Oa() === this.Oa()) {
                    var b = a.oa,
                         c = a.qa,
                         d = a.Aa();
                    a.oa = c;
                    a.qa = b;
                    je(a, ke, a, d)
               } else ie(a, this.Oa());
               oh(this);
               this.ca = void 0
          } else Ki(this)
     };
     f.Qb = function(a) {
          X.ia.Qb.call(this, a);
          this.ca && this.ca === a && (a.sa(!1), this.ca = void 0)
     };
     f.yb = function(a) {
          X.ia.yb.call(this, a);
          Ji(this, a, Math.PI / 6)
     };
     f.zb = function(a) {
          X.ia.zb.call(this, a);
          Ki(this)
     };
     f.Za = function(a, b) {
          X.ia.Za.call(this, a, b);
          b ? Ii(this.$, a) : this.$ && this.$.vc(a)
     };
     f.reset = function() {
          if (this.$) {
               var a = this.aa,
                    b = this.$;
               b.Da(null);
               O(a, "document-rotator-removed", b)
          }
          this.da = this.na = this.$ = void 0;
          oe(this.aa.$)
     };

     function Ki(a) {
          a.$ && (nh(a), Bf(a.aa, a.$.pb, a.$.Bb(), !0, .3 * a.ea, a.Oa()), oh(a));
          a.reset()
     }

     function Ji(a, b, c) {
          b = new Hi(b, a.ea);
          Mg(b, c);
          c = a.aa;
          b.Da(c);
          O(c, "document-rotator-added", b);
          a.$ = b
     };

     function Li() {
          X.call(this)
     }
     t(Li, X);
     Li.prototype.getName = function() {
          return "wedge-bond"
     };
     Li.prototype.Fa = function() {
          return "Wedge Bond"
     };
     Li.prototype.Oa = function() {
          return "wedge"
     };

     function Mi() {
          X.call(this)
     }
     t(Mi, X);
     Mi.prototype.getName = function() {
          return "hash-bond"
     };
     Mi.prototype.Fa = function() {
          return "Hash Bond"
     };
     Mi.prototype.Oa = function() {
          return "hash"
     };

     function Ni() {
          X.call(this)
     }
     t(Ni, X);
     Ni.prototype.getName = function() {
          return "wavy-bond"
     };
     Ni.prototype.Fa = function() {
          return "Wavy Bond"
     };
     Ni.prototype.Oa = function() {
          return "either"
     };

     function Oi() {
          T.call(this)
     }
     t(Oi, T);
     f = Oi.prototype;
     f.gb = function() {};
     f.Gb = function(a) {
          rf(this.aa, a)
     };
     f.ub = function() {
          rf(this.aa, void 0)
     };
     f.tb = function(a) {
          a.sa(!0);
          this.$ = a
     };
     f.$a = function(a) {
          this.$ === a && (this.gb(a), a.sa(!1), delete this.$)
     };
     f.Qb = function(a) {
          this.$ === a && a.sa(!1);
          delete this.$
     };

     function Pi() {
          T.call(this)
     }
     t(Pi, Oi);
     Pi.prototype.gb = function(a) {
          nh(this);
          "cis-or-trans" === a.Oa() ? ie(a, he) : (a.Jb(a.Ba - 4), ie(a, "cis-or-trans"));
          oh(this)
     };
     Pi.prototype.getName = function() {
          return "crossed-bond"
     };
     Pi.prototype.Fa = function() {
          return "Cis or Trans Double Bond"
     };

     function Qi() {
          T.call(this)
     }
     t(Qi, T);
     f = Qi.prototype;
     f.gb = function() {};
     f.Eb = function(a) {
          qf(this.aa, a)
     };
     f.nb = function() {
          qf(this.aa, void 0)
     };
     f.cb = function(a) {
          a.sa(!0);
          this.ca = a
     };
     f.Sa = function(a) {
          this.ca === a && (this.gb(a), a.sa(!1));
          delete this.ca
     };
     f.Sb = function(a) {
          this.ca === a && a.sa(!1)
     };

     function Ri() {
          T.call(this)
     }
     t(Ri, Qi);
     Ri.prototype.getName = function() {
          return "increase-charge"
     };
     Ri.prototype.Fa = function() {
          return "Increase charge"
     };
     Ri.prototype.gb = function(a) {
          nh(this);
          a.Jb(1);
          oh(this)
     };

     function Si() {
          T.call(this)
     }
     t(Si, Qi);
     Si.prototype.getName = function() {
          return "decrease-charge"
     };
     Si.prototype.Fa = function() {
          return "Decrease charge"
     };
     Si.prototype.gb = function(a) {
          nh(this);
          a.Jb(-1);
          oh(this)
     };

     function Ti() {
          T.call(this)
     }
     t(Ti, Qi);
     Ti.prototype.getName = function() {
          return "next-isotope"
     };
     Ti.prototype.Fa = function() {
          return "Set isotope to next available"
     };
     Ti.prototype.gb = function(a) {
          nh(this);
          var b = a.ca.hb;
          if (b.length) {
               var c = a.Aa();
               if (a.da) {
                    var d = Ha(b, a.da);
                    d === b.length - 1 ? delete a.da : (d++, a.da = b[d])
               } else a.da = b[0];
               ae(a, ee, a, c)
          }
          oh(this)
     };

     function Ui() {}

     function Vi(a, b) {
          Wi(b, "undo", "Undo [" + (v ? "\u2318Z" : "Ctrl-Z") + "]", function(a) {
               a.hc()
          }, Xi);
          Wi(b, "redo", "Redo [" + (v ? "\u21e7\u2318Z" : "Ctrl-Y") + "]", function(a) {
               a.cc()
          }, Yi);
          Wi(b, "new-document", "New Document", function(a) {
               a = a.ha;
               tf(a.$);
               sf(a.$);
               vf(a.$)
          }, Zi);
          Wi(b, "edit-document", "Copy & Paste", function(a) {
               a.Ad.Ac()
          });
          Wi(b, "reset-view", "Zoom to Fit", function(a) {
               a.ec()
          }, $i);
          Wi(b, "full-screen", a.$ ? "Exit Full Screen" : "Full Screen", function(a) {
               var b = a.fa().parentNode,
                    c = document.querySelector("body");
               a.fc ? (b.setAttribute("style",
                    a.fc.parent), b.classList.remove("chemwriter-fullscreen"), a.fc.body ? c.setAttribute("style", a.fc.body) : c.removeAttribute("style"), a.fc = void 0) : (a.fc = {
                    parent: b.getAttribute("style"),
                    body: c.getAttribute("style")
               }, b.removeAttribute("style"), b.classList.add("chemwriter-fullscreen"), c.setAttribute("style", "position: fixed; overflow: hidden"));
               a.ha.ec()
          }, aj);
          Wi(b, "about", "About ChemWriter", function(a) {
               a.fd.Ac()
          })
     };
     var bj = Ya(),
          cj = u("Safari") && !(Ya() || u("Coast") || u("Opera") || u("Edge") || u("Silk") || u("Android")) && !(u("iPhone") && !u("iPod") && !u("iPad") || u("iPad") || u("iPod"));

     function dj() {
          H.call(this)
     }
     t(dj, H);
     dj.prototype.Ac = function() {
          v && (cj || bj) ? Gg(this.fa(), "chemwriter-show-no-transition") : Gg(this.fa(), "chemwriter-show")
     };
     dj.prototype.ic = function() {
          v && (cj || bj) ? Hg(this.fa(), "chemwriter-show-no-transition") : Hg(this.fa(), "chemwriter-show")
     };
     dj.prototype.za = function() {
          this.da = x("div", {
               "class": v && (cj || bj) ? "chemwriter-overlay-no-transition" : "chemwriter-overlay"
          })
     };

     function ej(a) {
          H.call(this);
          this.$ = a
     }
     t(ej, H);
     ej.prototype.za = function() {
          this.da = x("div", {
               "class": this.$
          })
     };

     function fj(a, b) {
          a.fa().appendChild(b)
     };

     function gj() {
          H.call(this)
     }
     t(gj, H);
     gj.prototype.za = function() {
          this.da = x("ul", {
               "class": "chemwriter-button-row"
          })
     };

     function hj(a) {
          H.call(this);
          this.Mb = a || "#000000";
          this.aa = new gj;
          this.ca = new ej("chemwriter-content");
          I(this, this.ca);
          I(this, this.aa)
     }
     t(hj, dj);
     hj.prototype.za = function() {
          hj.ia.za.call(this);
          this.Xa = x("div", {
               "class": "chemwriter-dialog",
               style: "background-color:" + this.Mb + ";"
          });
          this.fa().appendChild(this.Xa)
     };
     hj.prototype.Wc = function() {
          return this.Xa
     };

     function ij(a) {
          H.call(this);
          this.ca = a;
          this.$ = !0
     }
     t(ij, H);
     ij.prototype.za = function() {
          this.da = x("li", {
               "class": "chemwriter-text-button"
          }, this.ca)
     };
     ij.prototype.ta = function() {
          ij.ia.ta.call(this);
          jj(this);
          A(this.fa(), "touchend", this.aa, !1, this);
          A(this.fa(), "click", this.aa, !1, this)
     };
     ij.prototype.aa = function(a) {
          a.preventDefault();
          a.stopPropagation();
          this.$ && G(this, kj)
     };
     ij.prototype.xb = function(a) {
          this.$ !== a && (this.$ = a, jj(this))
     };

     function jj(a) {
          a.mb && (a.$ ? (Hg(a.fa(), "chemwriter-button-disabled"), Gg(a.fa(), "chemwriter-button-enabled")) : (Hg(a.fa(), "chemwriter-button-enabled"), Gg(a.fa(), "chemwriter-button-disabled")))
     }
     var kj = "text-button-pressed";

     function lj() {
          H.call(this);
          this.$ = this.aa = void 0
     }
     t(lj, H);
     lj.prototype.za = function() {
          var a = x("div", {
                    "class": "chemwriter-code-editor"
               }),
               b = x("textarea", {
                    "class": "chemwriter-code-editor-front",
                    spellcheck: !1,
                    wrap: "off"
               }),
               c = x("textarea", {
                    "class": "chemwriter-code-editor-back",
                    spellcheck: !1,
                    wrap: "off"
               });
          b.addEventListener("scroll", function() {
               c.scrollTop = b.scrollTop;
               c.scrollLeft = b.scrollLeft
          }, !1);
          a.appendChild(c);
          a.appendChild(b);
          this.da = a;
          this.aa = b;
          this.$ = c
     };
     lj.prototype.oc = function() {
          return "" === this.$.value
     };

     function mj(a, b) {
          a.aa.value = b;
          a.$.value = ""
     }

     function nj(a, b) {
          var c = a.aa.value.split(/[\n|\r\n]/);
          c[b] = c[b].replace(/[^\n|\r\n]/g, String.fromCharCode(9608));
          if ("" === c[b])
               for (var d = 0; 80 > d; d++) c[b] += String.fromCharCode(9608);
          a.$.value = c.join("\n");
          a.$.scrollTop = a.aa.scrollTop
     }

     function oj(a) {
          a.aa.select();
          a.aa.scrollTop = 0;
          a.$.scrollTop = 0
     };

     function pj(a) {
          H.call(this);
          this.ca = "";
          this.ea = new ej("chemwriter-left-panel");
          this.ma = new ej("chemwriter-right-panel");
          this.$ = new lj;
          this.aa = new R(a);
          I(this.ea, this.$);
          I(this.ma, this.aa);
          I(this, this.ea);
          I(this, this.ma)
     }
     t(pj, H);
     pj.prototype.za = function() {
          this.da = x("div", {
               "class": "chemwriter-clipboard"
          })
     };

     function qj(a, b) {
          mj(a.$, b);
          try {
               a.aa.rb(b), a.$.$.value = ""
          } catch (c) {
               nj(a.$, c.Gd - 1)
          }
          setTimeout(function() {
               oj(this.$)
          }.bind(a), 1)
     };

     function rj(a, b) {
          hj.call(this);
          this.bc = a;
          this.ra = void 0;
          this.ea = new ij("Use Molecule");
          this.ob = new ij("Select All");
          this.Ca = new ij("Clear");
          this.ma = new ij("Cancel");
          this.$ = new pj(b);
          I(this.aa, this.ea);
          I(this.aa, this.ob);
          I(this.aa, this.Ca);
          I(this.aa, this.ma);
          I(this.ca, this.$)
     }
     t(rj, hj);
     f = rj.prototype;
     f.ta = function() {
          rj.ia.ta.call(this);
          A(this.ea, kj, this.nf, !1, this);
          A(this.ob, kj, this.$e, !1, this);
          A(this.Ca, kj, this.ye, !1, this);
          A(this.ma, kj, this.xe, !1, this)
     };
     f.Ac = function() {
          rj.ia.Ac.call(this);
          qj(this.$, this.getParent().Zb());
          this.ra = setInterval(this.Ee.bind(this), 100)
     };
     f.ic = function() {
          rj.ia.ic.call(this);
          clearInterval(this.ra)
     };
     f.Ee = function() {
          var a = this.$,
               b = a.$.aa.value;
          if (a.ca !== b) {
               a.ca = b;
               try {
                    a.aa.rb(b), a.$.$.value = ""
               } catch (c) {
                    nj(a.$, c.Gd - 1)
               }
          }
          this.ea.xb(this.$.$.oc())
     };
     f.nf = function() {
          this.bc.rb(this.$.$.aa.value);
          this.ic()
     };
     f.$e = function() {
          oj(this.$.$)
     };
     f.ye = function() {
          qj(this.$, "")
     };
     f.xe = function() {
          this.ic()
     };

     function sj() {
          hj.call(this);
          this.ra = new ij("Done");
          this.$ = new ej("chemwriter-about-panel");
          this.ea = new ej("chemwriter-documentation-panel");
          I(this.aa, this.ra);
          I(this.ca, this.$);
          I(this.ca, this.ea)
     }
     t(sj, hj);
     sj.prototype.ta = function() {
          sj.ia.ta.call(this);
          var a = x("div", {
                    "class": "chemwriter-logo"
               }),
               b = x("div", {
                    "class": "chemwriter-product-name"
               }),
               c = x("div", {
                    "class": "chemwriter-rev"
               }, "Version: 3.3.8"),
               d = x("div", {
                    "class": "chemwriter-rev"
               }, "Commit: af5756b3"),
               e = x("div", {
                    "class": "chemwriter-authors"
               }, "Authors: Richard Apodaca; Robert Apodaca; Orion Jankowski; Zachary Catlin"),
               g = x("div", {
                    "class": "chemwriter-copyright"
               });
          b.innerHTML = 'ChemWriter<span class="chemwriter-super">&reg;</span>';
          g.innerHTML = '&copy; 2007-2017 <a href="http://metamolecular.com" target="_blank">Metamolecular, LLC';
          fj(this.$, a);
          fj(this.$, b);
          fj(this.$, c);
          fj(this.$, d);
          fj(this.$, e);
          fj(this.$, g);
          a = x("ul", {
               "class": "chemwriter-list"
          });
          b = x("li", {
               "class": "chemwriter-list-item"
          });
          c = x("li", {
               "class": "chemwriter-list-item"
          });
          d = x("li", {
               "class": "chemwriter-list-item"
          });
          b.innerHTML = '<a href="http://chemwriter.com/user-guide/" target="_blank">User Guide</a>';
          c.innerHTML = '<a href="http://chemwriter.com/developer-guide/" target="_blank">Developer Guide</a>';
          d.innerHTML = '<a href="http://chemwriter.com/support?subject=chemwriter-about-dialog" target="_blank">Questions & Comments</a>';
          a.appendChild(b);
          a.appendChild(c);
          a.appendChild(d);
          fj(this.ea, a);
          A(this, kj, this.ma, !1, this)
     };
     sj.prototype.ma = function() {
          this.ic()
     };

     function tj(a) {
          H.call(this);
          this.Mb = a;
          this.ea = []
     }
     t(tj, H);
     tj.prototype.za = function() {
          var a;
          switch (this.Mb) {
               case uj:
                    a = "chemwriter-palette-left";
                    break;
               case vj:
                    a = "chemwriter-palette-bottom";
                    break;
               case wj:
                    a = "chemwriter-palette-right";
                    break;
               case xj:
                    a = "chemwriter-palette-bottom-right";
                    break;
               case yj:
                    a = "chemwriter-palette-float";
                    break;
               case zj:
                    a = "chemwriter-palette-box"
          }
          this.da = x("div", {
               "class": a + " chemwriter-palette "
          })
     };

     function Aj(a, b) {
          a.ea.push(b);
          I(a, b)
     }

     function Bj(a, b) {
          for (var c = 0; c < a.ea.length; c++) {
               var d = a.ea[c];
               if (d.getName() === b) {
                    Cj(d, !0);
                    break
               }
          }
     }
     var uj = "palette-left",
          wj = "palette-right",
          vj = "palette-bottom",
          xj = "palette-bottom-right",
          yj = "palette-float",
          zj = "palette-box";

     function Dj() {
          H.call(this);
          this.$ = new tj(yj);
          this.aa = [];
          I(this, this.$)
     }
     t(Dj, H);

     function Ej(a, b) {
          a.aa.length || Cj(b, !0);
          Aj(a.$, b);
          a.aa.push(b)
     }
     Dj.prototype.za = function() {
          this.da = x("div", {
               "class": "chemwriter-dynamic-palette"
          })
     };
     Dj.prototype.ta = function() {
          Dj.ia.ta.call(this);
          A(this.fa(), "touchend", this.ca, !1, this);
          A(this.fa(), "click", this.ca, !1, this)
     };
     Dj.prototype.ca = function() {
          Hg(this.fa(), "chemwriter-appear")
     };

     function Fj(a) {
          H.call(this);
          this.$ = a
     }
     t(Fj, H);
     Fj.prototype.za = function() {
          this.da = x("div", {
               "class": this.$
          })
     };

     function Gj(a) {
          H.call(this);
          this.aa = a;
          this.$ = void 0
     }
     t(Gj, H);
     Gj.prototype.ta = function() {
          Gj.ia.ta.call(this);
          this.fa().value = this.wc;
          this.fa() && (this.$.value = this.wc);
          A(this.fa(), "change", this.ca, !1, this)
     };
     Gj.prototype.za = function() {
          var a = x("div", {
               "class": "chemwriter-select"
          });
          this.$ = x("select", {});
          for (var b = 0; b < this.aa.length; b += 2) {
               var c = this.aa[b + 1],
                    d = x("option", {
                         value: this.aa[b]
                    });
               d.textContent = c;
               this.$.appendChild(d)
          }
          a.appendChild(this.$);
          this.da = a
     };
     Gj.prototype.ca = function() {
          this.wc = this.$.value;
          G(this, Hj)
     };
     var Hj = "select-selected";

     function Ij(a) {
          H.call(this);
          this.$ = new Jj("button", "tooltip", !1, "", !1);
          var b;
          b = Oe();
          b = Object.keys(b.$);
          var c = [];
          b.sort(Pa);
          for (var d = 0; d < b.length; d++) {
               var e = b[d];
               c.push(e);
               c.push(e)
          }
          this.ca = new Gj(c);
          this.aa = void 0;
          I(this, this.$);
          I(this, this.ca);
          Kj(a, this.$)
     }
     t(Ij, H);
     Ij.prototype.za = function() {
          this.da = x("div", {
               "class": "chemwriter-element-select"
          })
     };
     Ij.prototype.ta = function() {
          Ij.ia.ta.call(this);
          A(this.ca, Hj, this.ea, !1, this)
     };

     function Lj(a, b) {
          var c = a.$,
               d = b.kb;
          c.fa() && (c.fa().textContent = d);
          c.ca = d;
          Mj(a.$, b.getName());
          c = a.ca;
          c.wc = b.kb;
          c.fa() && (c.$.value = c.wc);
          a.aa = b
     }
     Ij.prototype.ea = function(a) {
          a = a.target.wc;
          a = Oe().fa(a);
          Lj(this, a);
          Cj(this.$, !0)
     };

     function Nj(a) {
          tj.call(this, vj);
          this.ob = a;
          this.ca = void 0;
          this.ra = {};
          this.ma = new Fj("chemwriter-palette-box");
          this.aa = new Fj("chemwriter-flex-box");
          this.Xa = new Fj("chemwriter-stiff-box");
          this.$ = new Ij(a);
          this.Ca = new Ng;
          I(this.ma, this.aa);
          I(this.ma, this.Xa);
          I(this.Xa, this.$);
          I(this, this.ma);
          A(this.Ca, Pg, this.oe, !1, this);
          Og(this.Ca, this)
     }
     t(Nj, tj);
     f = Nj.prototype;
     f.ta = function() {
          Nj.ia.ta.call(this);
          A(this.aa, Oj, this.Ke, !1, this);
          A(this.$, Hj, this.bf, !1, this);
          A(this.$, Oj, this.af, !1, this)
     };

     function Pj(a, b) {
          var c = a.$.aa;
          if (c) {
               var d = new Jj("button", c.getName(), !1, c.kb, !1);
               I(a.aa, d);
               Kj(a.ob, d);
               a.ra[q(d)] = c
          }
          Lj(a.$, b)
     }
     f.oe = function() {
          for (var a = zc(this.aa).reverse(), b = Number.POSITIVE_INFINITY, c = !1, d = 0; d < a.length; d++) {
               var e = uc(this.aa, a[d]),
                    g = e.fa().getBoundingClientRect().top;
               e.Oc ? (c = !0, b = g) : c && g < b && (b = g, Cj(e, !0))
          }
     };
     f.Ke = function(a) {
          this.ca = this.ra[q(a.target)];
          G(this, Qj)
     };
     f.bf = function() {
          this.ca = this.$.aa;
          G(this, Qj)
     };
     f.af = function() {
          this.ca = this.$.aa;
          G(this, Qj)
     };
     var Qj = "element-selected";

     function Rj() {
          T.call(this);
          this.$ = void 0
     }
     t(Rj, Qi);
     Rj.prototype.getName = function() {
          return "element"
     };
     Rj.prototype.Fa = function() {
          return this.$ ? this.$.getName() : ""
     };
     Rj.prototype.gb = function() {
          nh(this);
          ye(this.ca, this.$);
          oh(this)
     };

     function Sj() {
          H.call(this)
     }
     t(Sj, H);
     Sj.prototype.za = function() {
          this.da = x("div", {
               "class": "chemwriter-icon"
          })
     };

     function Jj(a, b, c, d, e) {
          H.call(this);
          this.Oc = !1;
          this.aa = !0;
          this.$ = void 0;
          this.Ca = c || !1;
          this.ca = d || void 0;
          this.ra = e || !1;
          this.ma = void 0;
          Tj(this, a);
          Mj(this, b);
          d || (this.ma = new Sj, I(this, this.ma))
     }
     t(Jj, H);
     f = Jj.prototype;
     f.za = function() {
          var a = x("div", {
               "class": Uj(this) + " chemwriter-button",
               title: this.Xa
          });
          this.Ca && a.appendChild(x("div", {
               "class": "chemwriter-detail-disclosure"
          }));
          this.ca && (a.textContent = this.ca);
          this.da = a
     };
     f.ta = function() {
          Jj.ia.ta.call(this);
          this.aa ? (Vj(this), Gg(this.fa(), Wj)) : Gg(this.fa(), Xj)
     };
     f.xb = function(a) {
          this.aa !== a && (this.fa() && (a ? (Gg(this.fa(), Wj), Hg(this.fa(), Xj), Vj(this)) : (Hg(this.fa(), Wj), Gg(this.fa(), Xj), Hg(this.fa(), Yj), C(this.fa(), "touchstart", this.yc, !1, this), C(this.fa(), "touchend", this.zc, !1, this), C(this.fa(), "mousedown", this.yc, !1, this), C(this.fa(), "mouseup", this.zc, !1, this), C(this.fa(), "mouseout", this.qd, !1, this))), this.aa = a, this.Oc = !1)
     };

     function Cj(a, b) {
          if (a.Oc !== b && a.aa) {
               if (a.fa()) {
                    var c = a.fa(),
                         d = Yj;
                    Fg(c, d) ? Hg(c, d) : Gg(c, d)
               }
               b && G(a, Oj);
               a.Oc = b
          }
     }

     function Tj(a, b) {
          a.fa() && Hg(a.fa(), Uj(a));
          a.ea = b;
          a.fa() && Gg(a.fa(), Uj(a))
     }
     f.getName = function() {
          return this.ea
     };

     function Mj(a, b) {
          a.Xa = b;
          a.fa() && (a.fa().title = b)
     }

     function Vj(a) {
          A(a.fa(), "touchstart", a.yc, !1, a);
          A(a.fa(), "touchend", a.zc, !1, a);
          A(a.fa(), "mousedown", a.yc, !1, a);
          A(a.fa(), "mouseup", a.zc, !1, a);
          A(a.fa(), "mouseout", a.qd, !1, a)
     }
     f.yc = function(a) {
          a.preventDefault();
          this.aa && (this.$ = window.setTimeout(this.cf.bind(this), 200))
     };
     f.zc = function(a) {
          a.preventDefault();
          this.$ && (Cj(this, !0), this.ra && Cj(this, !1));
          Zj(this)
     };
     f.qd = function(a) {
          a.preventDefault();
          Zj(this)
     };
     f.cf = function() {
          Cj(this, !0);
          G(this, ak);
          this.$ = void 0
     };

     function Zj(a) {
          a.$ && (window.clearTimeout(a.$), a.$ = void 0)
     }

     function Uj(a) {
          return "chemwriter-button-" + a.ea
     }
     var Oj = "button-pressed",
          ak = "button-held",
          Yj = "chemwriter-button-pressed",
          Wj = "chemwriter-button-enabled",
          Xj = "chemwriter-button-disabled";

     function bk() {
          F.call(this);
          this.$ = []
     }
     t(bk, F);

     function Kj(a, b) {
          a.$.push(b);
          A(b, Oj, a.aa, !1, a)
     }
     bk.prototype.aa = function(a) {
          a = a.target;
          for (var b = 0; b < this.$.length; b++) {
               var c = this.$[b];
               c !== a && Cj(c, !1)
          }
     };

     function ck(a) {
          H.call(this);
          this.ha = new Dh(a);
          this.ea = new bk;
          this.ca = new tj(uj);
          this.$ = new Nj(this.ea);
          this.Ca = new tj(wj);
          this.ra = new tj(xj);
          this.fd = new sj;
          this.Ad = new rj(this, a);
          this.ob = new Ci;
          this.Xa = new ri;
          this.ma = new Rj;
          this.aa = {};
          I(this, this.ca);
          I(this, this.$);
          I(this, this.Ca);
          I(this, this.ra);
          I(this, this.ha);
          I(this, this.Ad);
          I(this, this.fd);
          this.ha.xa(this.ma);
          this.ib = a;
          this.fc = void 0
     }
     t(ck, H);
     f = ck.prototype;
     f.za = function() {
          this.da = x("div", {
               "class": "chemwriter-editor"
          })
     };
     f.ta = function() {
          ck.ia.ta.call(this);
          this.ob.connect(this.ha);
          this.Xa.connect(this.ha);
          this.ha.ec();
          A(this, zg, this.lf, !0, this);
          A(this, tg, this.mf, !0, this);
          A(this, xg, this.jf, !0, this);
          A(this, ug, this.kf, !0, this);
          A(this, xf, this.ne, !1, this);
          A(this.$, Qj, this.De, !1, this)
     };
     f.hc = function() {
          this.ha.hc()
     };
     f.cc = function() {
          this.ha.cc()
     };
     f.ec = function() {
          this.ha.ec()
     };
     f.rb = function(a) {
          var b = new of ,
               c;
          Ze || (Ze = new Ye);
          c = Ze;
          c.$ = b.$;
          $e(c, a);
          a = this.ha;
          a.$.Da(null);
          a.ca.kc();
          ih(a.ea);
          Fb(a.$);
          delete a.$;
          Fh(a);
          a.$ = b;
          Eh(a);
          a.ca.connect(b);
          rg(a.ma, b);
          c = Hc(a.$.$);
          Sd(a.Ca, c);
          a.ca.Nb(c);
          Gh(a);
          b.Da(a);
          G(a, new y(yf, b));
          dk(this)
     };
     f.Zb = function() {
          return this.ha.Zb()
     };
     f.me = function() {
          return !this.ha.$.$.$.length
     };
     f.xa = function(a) {
          var b = new Jj(a.getName(), a.Fa());
          A(b, Oj, function() {
               Hh(this.ha, a.getName())
          }, !1, this);
          Aj(this.ca, b);
          Kj(this.ea, b);
          this.ha.xa(a)
     };

     function ek(a, b) {
          for (var c = b.ca[0], d = new Jj(c.getName(), c.Fa(), !0), e = new Dj, g = new bk, h = b.ca, k = 0; k < h.length; k++) {
               var m = h[k],
                    n = fk(a, m, d, b);
               Ej(e, n);
               Kj(g, n);
               a.ha.xa(m)
          }
          I(a, e);
          Aj(a.ca, d);
          Kj(a.ea, d);
          A(d, Oj, function() {
               Hh(this.ha, b.$.getName())
          }, !1, a);
          A(d, ak, function() {
               var a = d.fa().offsetTop;
               Gg(e.fa(), "chemwriter-appear");
               e.$.fa().style.top = a - 4 + "px"
          }, !1, a);
          Ih(b, c.getName())
     }

     function Wi(a, b, c, d, e) {
          b = new Jj(b, c, !1, void 0, !0);
          A(b, Oj, function() {
               d(this)
          }, !1, a);
          if (e) switch (a.aa[e] = b, e) {
               case Xi:
                    b.xb(!1);
                    break;
               case Yi:
                    b.xb(!1)
          }
          e === aj ? Aj(a.ra, b) : Aj(a.Ca, b)
     }

     function fk(a, b, c, d) {
          var e = new Jj(b.getName(), b.Fa());
          A(e, Oj, function() {
               Tj(c, b.getName());
               Mj(c, b.Fa());
               Ih(d, b.getName());
               Hh(this.ha, b.getName())
          }, !1, a);
          a.ha.xa(b);
          return e
     }
     f.De = function() {
          this.ma.$ = this.$.ca;
          var a = this.ma.getName();
          Hh(this.ha, a);
          Bj(this.ca, a)
     };
     f.lf = function() {
          var a = this.aa[Xi];
          a && a.xb(!0)
     };
     f.mf = function() {
          var a = this.aa[Xi];
          a && a.xb(!1)
     };
     f.jf = function() {
          var a = this.aa[Yi];
          a && a.xb(!0)
     };
     f.kf = function() {
          var a = this.aa[Yi];
          a && a.xb(!1)
     };
     f.ne = function() {
          dk(this)
     };

     function dk(a) {
          var b = a.aa[Zi];
          b && b.xb(!!a.ha.$.$.$.length);
          (b = a.aa[$i]) && b.xb(!!a.ha.$.$.$.length)
     }
     var Xi = "chemwriter-editor-role-undo",
          Yi = "chemwriter-editor-role-redo",
          $i = "chemwriter-editor-reset-view",
          Zi = "chemwriter-editor-role-new-document",
          aj = "chemwriter-editor-role-fullscreen";
     var Y = {},
          gk = {},
          hk = [],
          ik = !1;
     Y.ready = function(a) {
          ik ? a() : hk.push(a)
     };
     Y.rf = function() {
          for (var a = 0; a < hk.length; a++) hk[a]();
          ik = !0
     };
     Y.refresh = function() {
          Y.te();
          Y.se()
     };
     Y.Yc = function() {
          Y.ue();
          Y.ve();
          Y.refresh();
          Y.rf()
     };
     Y.ve = function() {
          var a = document.querySelector("script[data-chemwriter-style]");
          if (a) {
               var b;
               try {
                    b = JSON.parse(a.textContent)
               } catch (c) {
                    throw Error("Error parsing stylesheet: " + a.textContent);
               }
               Wd(b)
          }
     };
     Y.te = function() {
          Y.Id(document);
          for (var a = document.querySelectorAll("iframe"), b = 0; b < a.length; b++) {
               var c;
               try {
                    c = a[b].contentWindow.document
               } catch (d) {}
               c && Y.Id(c)
          }
     };
     Y.Id = function(a) {
          a = a.querySelectorAll('div[data-chemwriter-ui="image"]');
          for (var b = 0; b < a.length; b++) Y.Xd(a[b])
     };
     Y.se = function() {
          Y.Hd(document);
          for (var a = document.querySelectorAll("iframe"), b = 0; b < a.length; b++) {
               var c;
               try {
                    c = a[b].contentWindow.document
               } catch (d) {}
               document && Y.Hd(c)
          }
     };
     Y.Hd = function(a) {
          a = a.querySelectorAll('div[data-chemwriter-ui="editor"]');
          for (var b = 0; b < a.length; b++) Y.Wd(a[b])
     };
     Y.Wd = function(a) {
          var b = ic(a),
               c = new ck(Y.ib),
               d = new Ui,
               e = new U,
               g = new Fi,
               h = new Gi;
          e.xa(g);
          e.xa(h);
          ek(c, e);
          e = new U;
          e.xa(new X);
          e.xa(new Li);
          e.xa(new Mi);
          e.xa(new Ni);
          e.xa(new Pi);
          ek(c, e);
          c.xa(new qi);
          c.xa(new V(6));
          c.xa(new V(5));
          e = new U;
          e.xa(new V(3));
          e.xa(new V(4));
          e.xa(new V(7));
          e.xa(new V(8));
          ek(c, e);
          e = new U;
          e.xa(new Ri);
          e.xa(new Si);
          e.xa(new Ti);
          ek(c, e);
          Hh(c.ha, "single-bond");
          Bj(c.ca, "single-bond");
          e = Oe();
          g = e.fa("C");
          Pj(c.$, g);
          g = e.fa("N");
          Pj(c.$, g);
          g = e.fa("O");
          Pj(c.$, g);
          g = e.fa("S");
          Pj(c.$, g);
          g = e.fa("F");
          Pj(c.$, g);
          g = e.fa("Cl");
          Pj(c.$, g);
          g = e.fa("Br");
          Pj(c.$, g);
          g = e.fa("I");
          Pj(c.$, g);
          g = e.fa("H");
          Pj(c.$, g);
          e = e.fa("Si");
          Pj(c.$, e);
          Vi(d, c);
          (d = a.parentNode) && d.replaceChild(b, a);
          vc(c, b);
          Y.Pd(c, a)
     };
     Y.Xd = function(a) {
          var b = ic(a),
               c = new R(Y.ib),
               d = a.parentNode;
          d && d.replaceChild(b, a);
          vc(c, b);
          Y.Pd(c, a)
     };
     Y.Pd = function(a, b) {
          var c = b.getAttribute("data-chemwriter-data") || "",
               d = b.getAttribute("id");
          if (c) c = c.replace(hc, "\n"), setTimeout(function() {
               Y.rb(a, c, d)
          }, 1);
          else {
               var e = b.getAttribute("data-chemwriter-src");
               if (e) {
                    var g = new wh(e);
                    Yb(g, Ah, function() {
                         var b = g.$;
                         200 === b.status ? Y.rb(a, b.body, d) : Y.error({
                              message: "Error reading file at URL: " + e,
                              id: d
                         })
                    }, !1);
                    xh(g)
               }
          }
          d && (gk[d] = a)
     };
     Y.rb = function(a, b, c) {
          try {
               a.rb(b)
          } catch (d) {
               Y.error({
                    message: "Error reading inline file: " + d.message,
                    id: c
               })
          }
     };
     Y.error = function(a) {
          window.console && window.console.error(JSON.stringify(a))
     };
     Y.ue = function() {
          var a = Y.ib,
               b = document.querySelector("script[data-chemwriter-license]");
          b ? (b = b.getAttribute("data-chemwriter-license"), Y.qf(b, a.ea.bind(a))) : a.ea("")
     };
     Y.qf = function(a, b) {
          if (a) {
               var c = new wh(a);
               Yb(c, Ah, function() {
                    200 === c.$.status ? b(c.$.body) : b("")
               }, !1);
               xh(c)
          } else b("")
     };
     Y.ib = new Ch;
     window.addEventListener ? window.addEventListener("load", function() {
          Y.Yc()
     }, !1) : window.attachEvent("onload", function() {
          for (var a = document.getElementsByTagName("div"), b = 0; b < a.length; b++) {
               var c = a[b];
               if (c.getAttribute("data-chemwriter-ui")) {
                    var d = document.createElement("div");
                    d.setAttribute("id", c.getAttribute("id"));
                    d.setAttribute("style", "width:" + c.getAttribute("data-chemwriter-width") + "px;height:" + c.getAttribute("data-chemwriter-height") + "px;");
                    d.setAttribute("class", "chemwriter-fallback-content");
                    c.parentNode.replaceChild(d, c)
               }
          }
     });
     ea("chemwriter.System", Y);
     Y.ready = Y.ready;
     ea("chemwriter.components", gk);
     ea("chemwriter.refresh", Y.refresh);
     ck.prototype.getMolfile = ck.prototype.Zb;
     ck.prototype.setMolfile = ck.prototype.rb;
     ck.prototype.addEventListener = ck.prototype.Vd;
     ck.prototype.isEmpty = ck.prototype.me;
     R.prototype.getMolfile = R.prototype.Zb;
     R.prototype.setMolfile = R.prototype.rb;
     R.prototype.isEmpty = R.prototype.ra;
})();
