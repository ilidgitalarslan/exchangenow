!(function (e) {
    "use strict";

    var t = {};
    function r(n) {
        if (t[n]) return t[n].exports;
        var a = (t[n] = { i: n, l: !1, exports: {} });
        return e[n].call(a.exports, a, a.exports, r), (a.l = !0), a.exports;
    }
    (r.m = e),
        (r.c = t),
        (r.d = function (e, t, n) {
            r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
        }),
        (r.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (r.t = function (e, t) {
            if ((1 & t && (e = r(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if ((r.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                for (var a in e)
                    r.d(
                        n,
                        a,
                        function (t) {
                            return e[t];
                        }.bind(null, a)
                    );
            return n;
        }),
        (r.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                        return e.default;
                    }
                    : function () {
                        return e;
                    };
            return r.d(t, "a", t), t;
        }),
        (r.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (r.p = ""),
        r((r.s = 13));
})([
    function (e, t) {
        (e.exports = function (e, t, r) {
            return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
        }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports);
    },
    function (e, t, r) {
        var n = r(4),
            a = r(5),
            o = r(6),
            i = r(8);
        (e.exports = function (e, t) {
            return n(e) || a(e, t) || o(e, t) || i();
        }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports);
    },
    function (e, t, r) {
        "use strict";
        const n = r(9),
            a = r(10),
            o = r(11),
            i = r(12),
            s = Symbol("encodeFragmentIdentifier");
        function c(e) {
            if ("string" != typeof e || 1 !== e.length) throw new TypeError("arrayFormatSeparator must be single character string");
        }
        function u(e, t) {
            return t.encode ? (t.strict ? n(e) : encodeURIComponent(e)) : e;
        }
        function d(e, t) {
            return t.decode ? a(e) : e;
        }
        function l(e) {
            const t = e.indexOf("#");
            return -1 !== t && (e = e.slice(0, t)), e;
        }
        function p(e) {
            const t = (e = l(e)).indexOf("?");
            return -1 === t ? "" : e.slice(t + 1);
        }
        function m(e, t) {
            return (
                t.parseNumbers && !Number.isNaN(Number(e)) && "string" == typeof e && "" !== e.trim()
                    ? (e = Number(e))
                    : !t.parseBooleans || null === e || ("true" !== e.toLowerCase() && "false" !== e.toLowerCase()) || (e = "true" === e.toLowerCase()),
                    e
            );
        }
        function f(e, t) {
            c((t = Object.assign({ decode: !0, sort: !0, arrayFormat: "none", arrayFormatSeparator: ",", parseNumbers: !1, parseBooleans: !1 }, t)).arrayFormatSeparator);
            const r = (function (e) {
                    let t;
                    switch (e.arrayFormat) {
                        case "index":
                            return (e, r, n) => {
                                (t = /\[(\d*)\]$/.exec(e)), (e = e.replace(/\[\d*\]$/, "")), t ? (void 0 === n[e] && (n[e] = {}), (n[e][t[1]] = r)) : (n[e] = r);
                            };
                        case "bracket":
                            return (e, r, n) => {
                                (t = /(\[\])$/.exec(e)), (e = e.replace(/\[\]$/, "")), t ? (void 0 !== n[e] ? (n[e] = [].concat(n[e], r)) : (n[e] = [r])) : (n[e] = r);
                            };
                        case "comma":
                        case "separator":
                            return (t, r, n) => {
                                const a = "string" == typeof r && r.includes(e.arrayFormatSeparator),
                                    o = "string" == typeof r && !a && d(r, e).includes(e.arrayFormatSeparator);
                                r = o ? d(r, e) : r;
                                const i = a || o ? r.split(e.arrayFormatSeparator).map((t) => d(t, e)) : null === r ? r : d(r, e);
                                n[t] = i;
                            };
                        case "bracket-separator":
                            return (t, r, n) => {
                                const a = /(\[\])$/.test(t);
                                if (((t = t.replace(/\[\]$/, "")), !a)) return void (n[t] = r ? d(r, e) : r);
                                const o = null === r ? [] : r.split(e.arrayFormatSeparator).map((t) => d(t, e));
                                void 0 !== n[t] ? (n[t] = [].concat(n[t], o)) : (n[t] = o);
                            };
                        default:
                            return (e, t, r) => {
                                void 0 !== r[e] ? (r[e] = [].concat(r[e], t)) : (r[e] = t);
                            };
                    }
                })(t),
                n = Object.create(null);
            if ("string" != typeof e) return n;
            if (!(e = e.trim().replace(/^[?#&]/, ""))) return n;
            for (const a of e.split("&")) {
                if ("" === a) continue;
                let [e, i] = o(t.decode ? a.replace(/\+/g, " ") : a, "=");
                (i = void 0 === i ? null : ["comma", "separator", "bracket-separator"].includes(t.arrayFormat) ? i : d(i, t)), r(d(e, t), i, n);
            }
            for (const e of Object.keys(n)) {
                const r = n[e];
                if ("object" == typeof r && null !== r) for (const e of Object.keys(r)) r[e] = m(r[e], t);
                else n[e] = m(r, t);
            }
            return !1 === t.sort
                ? n
                : (!0 === t.sort ? Object.keys(n).sort() : Object.keys(n).sort(t.sort)).reduce((e, t) => {
                    const r = n[t];
                    return (
                        Boolean(r) && "object" == typeof r && !Array.isArray(r)
                            ? (e[t] = (function e(t) {
                                return Array.isArray(t)
                                    ? t.sort()
                                    : "object" == typeof t
                                        ? e(Object.keys(t))
                                            .sort((e, t) => Number(e) - Number(t))
                                            .map((e) => t[e])
                                        : t;
                            })(r))
                            : (e[t] = r),
                            e
                    );
                }, Object.create(null));
        }
        (t.extract = p),
            (t.parse = f),
            (t.stringify = (e, t) => {
                if (!e) return "";
                c((t = Object.assign({ encode: !0, strict: !0, arrayFormat: "none", arrayFormatSeparator: "," }, t)).arrayFormatSeparator);
                const r = (r) => (t.skipNull && null == e[r]) || (t.skipEmptyString && "" === e[r]),
                    n = (function (e) {
                        switch (e.arrayFormat) {
                            case "index":
                                return (t) => (r, n) => {
                                    const a = r.length;
                                    return void 0 === n || (e.skipNull && null === n) || (e.skipEmptyString && "" === n) ? r : null === n ? [...r, [u(t, e), "[", a, "]"].join("")] : [...r, [u(t, e), "[", u(a, e), "]=", u(n, e)].join("")];
                                };
                            case "bracket":
                                return (t) => (r, n) => (void 0 === n || (e.skipNull && null === n) || (e.skipEmptyString && "" === n) ? r : null === n ? [...r, [u(t, e), "[]"].join("")] : [...r, [u(t, e), "[]=", u(n, e)].join("")]);
                            case "comma":
                            case "separator":
                            case "bracket-separator": {
                                const t = "bracket-separator" === e.arrayFormat ? "[]=" : "=";
                                return (r) => (n, a) =>
                                    void 0 === a || (e.skipNull && null === a) || (e.skipEmptyString && "" === a)
                                        ? n
                                        : ((a = null === a ? "" : a), 0 === n.length ? [[u(r, e), t, u(a, e)].join("")] : [[n, u(a, e)].join(e.arrayFormatSeparator)]);
                            }
                            default:
                                return (t) => (r, n) => (void 0 === n || (e.skipNull && null === n) || (e.skipEmptyString && "" === n) ? r : null === n ? [...r, u(t, e)] : [...r, [u(t, e), "=", u(n, e)].join("")]);
                        }
                    })(t),
                    a = {};
                for (const t of Object.keys(e)) r(t) || (a[t] = e[t]);
                const o = Object.keys(a);
                return (
                    !1 !== t.sort && o.sort(t.sort),
                        o
                            .map((r) => {
                                const a = e[r];
                                return void 0 === a ? "" : null === a ? u(r, t) : Array.isArray(a) ? (0 === a.length && "bracket-separator" === t.arrayFormat ? u(r, t) + "[]" : a.reduce(n(r), []).join("&")) : u(r, t) + "=" + u(a, t);
                            })
                            .filter((e) => e.length > 0)
                            .join("&")
                );
            }),
            (t.parseUrl = (e, t) => {
                t = Object.assign({ decode: !0 }, t);
                const [r, n] = o(e, "#");
                return Object.assign({ url: r.split("?")[0] || "", query: f(p(e), t) }, t && t.parseFragmentIdentifier && n ? { fragmentIdentifier: d(n, t) } : {});
            }),
            (t.stringifyUrl = (e, r) => {
                r = Object.assign({ encode: !0, strict: !0, [s]: !0 }, r);
                const n = l(e.url).split("?")[0] || "",
                    a = t.extract(e.url),
                    o = t.parse(a, { sort: !1 }),
                    i = Object.assign(o, e.query);
                let c = t.stringify(i, r);
                c && (c = "?" + c);
                let d = (function (e) {
                    let t = "";
                    const r = e.indexOf("#");
                    return -1 !== r && (t = e.slice(r)), t;
                })(e.url);
                return e.fragmentIdentifier && (d = "#" + (r[s] ? u(e.fragmentIdentifier, r) : e.fragmentIdentifier)), `${n}${c}${d}`;
            }),
            (t.pick = (e, r, n) => {
                n = Object.assign({ parseFragmentIdentifier: !0, [s]: !1 }, n);
                const { url: a, query: o, fragmentIdentifier: c } = t.parseUrl(e, n);
                return t.stringifyUrl({ url: a, query: i(o, r), fragmentIdentifier: c }, n);
            }),
            (t.exclude = (e, r, n) => {
                const a = Array.isArray(r) ? (e) => !r.includes(e) : (e, t) => !r(e, t);
                return t.pick(e, a, n);
            });
    },
    function (e) {
        e.exports = JSON.parse(
            '{"btc":0.1,"eth":1,"ada":2000,"bnb":1,"bnbmainnet":10,"bnbbsc":10,"usdt":1,"usdterc20":5000,"usdttrc20":5000,"xrp":4000,"doge":20000,"sol":50,"usdc":5000,"dot":200,"uni":200,"luna":100,"busd":5000,"busdbsc":5000,"bch":7,"ltc":30,"link":200,"icp":70,"wbtc":0,"matic":3000,"etc":80,"xlm":10000,"vet":40000,"fil":1,"theta":700,"trx":50000,"dai":5000,"xmr":20,"cake":200,"xtz":800,"eos":1000,"aave":10,"axs":60,"atom":200,"ftt":100,"grt":5000,"klay":3000,"cro":1,"neo":90,"bsv":1,"algo":5000,"mkr":1,"egld":30,"waves":200,"shib":700000000,"iota":1,"btt":1000000,"ksm":20,"ht":300,"hbar":20000,"comp":10,"amp":1,"dash":20,"qnt":1,"dcr":30,"chz":10000,"hot":400000,"zec":30,"enj":2000,"mana":5000,"ftm":7000,"ftmmainnet":1,"tfuel":10000,"xem":20000,"flow":200,"sushi":400,"tusd":5000,"btg":1,"yfi":0,"cel":1,"snx":400,"zil":1,"qtum":400,"okb":1,"rvn":40000,"bat":6000,"one":50000,"nexo":3000,"zen":50,"sc":200000,"bnt":1000,"pax":5000,"dgb":80000,"sand":5000,"ont":5000,"icx":4000,"zrx":4000,"omg":700,"nano":700,"chsb":1,"uma":400,"lrc":8000,"bqx":1,"iotx":60000,"sxp":1000,"iost":100000,"ren":7000,"waxp":10000,"bake":1,"lsk":1,"ocean":6000,"storj":3000,"knc":3000,"bcd":2000,"husd":1,"fet":8000,"nmr":100,"xvg":200000,"ubt":1,"ogn":4000,"srm":600,"rlc":1000,"eur":1500,"gt":1000,"fun":200000,"agi":1,"snt":50000,"stmx":100000,"ong":4000,"band":500,"bandmainnet":500,"ctsi":6000,"rep":1,"strax":2000,"oxt":10000,"coti":10000,"ardr":20000,"celr":100000,"uos":1,"cvc":10000,"nu":1,"steem":8000,"poly":10000,"elf":10000,"gusd":5000,"utk":10000,"chr":10000,"ant":1000,"bal":200,"mtl":2000,"hex":1,"steth":1,"xym":1,"mir":1000,"susd":1,"rpl":1,"ark":4000,"yfii":1,"ava":1000,"jst":70000,"farm":1,"klv":100000,"nwc":1,"mco":1,"powr":10000,"sys":20000,"kmd":4000,"pols":3000,"ppt":2000,"dnt":20000,"rook":1,"scrt":3000,"akro":100000,"gas":500,"loom":50000,"xor":1,"super":5000,"pnk":1,"aion":30000,"firo":600,"dao":1,"dia":2000,"gny":1,"fio":20000,"wtc":5000,"om":1,"stpt":80000,"grs":5000,"lgcy":1,"blz":20000,"shr":1,"dock":1,"adx":9000,"beam":1,"dusk":30000,"hoge":30000000,"aergo":20000,"unfi":400,"cudos":1,"front":4000,"pivx":1,"ae":1,"perl":50000,"go":100000,"hc":5000,"gto":100000,"srk":1,"nav":10000,"cnd":300000,"xcur":1,"ast":20000,"rdn":9000,"mdt":100000,"qsp":100000,"wabi":20000,"clo":1,"soc":1,"hez":1,"mph":1,"brd":20000,"mda":6000,"rcn":200000,"pay":1,"awc":500,"evx":9000,"dec":1,"dlt":50000,"yfl":1,"vib":90000,"amb":1,"swftc":2000000,"srn":1,"urus":1,"lxt":1,"xio":1,"fuse":1,"now":10000,"world":1,"eved":1,"dmg":1,"lead":1,"xchf":1,"mask":1,"sngls":1,"kishu":1,"dpi":1,"feg":1,"wise":1,"node":1,"keanu":1,"axn":1,"brise":1,"xaut":1,"oro":1,"cocktail":1,"bsocial":1,"npxs":1,"vybe":1,"geth":1,"milf":1,"usd":1500,"gbp":1000,"cad":1500,"jpy":10000,"rub":100000,"aud":1500,"chf":1500,"czk":2500,"dkk":2500,"nok":2500,"nzd":1500,"pln":2500,"sek":1000,"try":1500,"zar":1600,"huf":31000,"ils":1500,"ontbsc":5000,"avax":100,"krw":320000,"cny":10000,"aed":10000,"ang":5000,"ars":250000,"azn":5000,"bgn":4000,"bhd":1000,"bnd":4000,"bob":20000,"brl":15000,"bwp":30000,"clp":2000000,"crc":1000000,"dop":17000,"egp":47000,"gtq":23000,"hkd":23553,"hrk":18837,"inr":222000,"kes":327000,"kwd":500,"kzt":1000000,"mxn":59000,"myr":12000,"mzn":191000,"omr":1000,"pen":11000,"php":145000,"qar":11000,"ron":12000,"rsd":294000,"sar":11000,"sgd":4000,"thb":94000,"twd":84000,"uah":80000,"uyu":100000,"xaf":1000000,"zmw":60000}'
        );
    },
    function (e, t) {
        (e.exports = function (e) {
            if (Array.isArray(e)) return e;
        }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports);
    },
    function (e, t) {
        (e.exports = function (e, t) {
            var r = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
            if (null != r) {
                var n,
                    a,
                    o = [],
                    i = !0,
                    s = !1;
                try {
                    for (r = r.call(e); !(i = (n = r.next()).done) && (o.push(n.value), !t || o.length !== t); i = !0);
                } catch (e) {
                    (s = !0), (a = e);
                } finally {
                    try {
                        i || null == r.return || r.return();
                    } finally {
                        if (s) throw a;
                    }
                }
                return o;
            }
        }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports);
    },
    function (e, t, r) {
        var n = r(7);
        (e.exports = function (e, t) {
            if (e) {
                if ("string" == typeof e) return n(e, t);
                var r = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? n(e, t) : void 0;
            }
        }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports);
    },
    function (e, t) {
        (e.exports = function (e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
            return n;
        }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports);
    },
    function (e, t) {
        (e.exports = function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }),
            (e.exports.__esModule = !0),
            (e.exports.default = e.exports);
    },
    function (e, t, r) {
        "use strict";
        e.exports = (e) => encodeURIComponent(e).replace(/[!'()*]/g, (e) => "%" + e.charCodeAt(0).toString(16).toUpperCase());
    },
    function (e, t, r) {
        "use strict";
        var n = new RegExp("%[a-f0-9]{2}", "gi"),
            a = new RegExp("(%[a-f0-9]{2})+", "gi");
        function o(e, t) {
            try {
                return decodeURIComponent(e.join(""));
            } catch (e) {}
            if (1 === e.length) return e;
            t = t || 1;
            var r = e.slice(0, t),
                n = e.slice(t);
            return Array.prototype.concat.call([], o(r), o(n));
        }
        function i(e) {
            try {
                return decodeURIComponent(e);
            } catch (a) {
                for (var t = e.match(n), r = 1; r < t.length; r++) t = (e = o(t, r).join("")).match(n);
                return e;
            }
        }
        e.exports = function (e) {
            if ("string" != typeof e) throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
            try {
                return (e = e.replace(/\+/g, " ")), decodeURIComponent(e);
            } catch (t) {
                return (function (e) {
                    for (var t = { "%FE%FF": "ï¿½ï¿½", "%FF%FE": "ï¿½ï¿½" }, r = a.exec(e); r; ) {
                        try {
                            t[r[0]] = decodeURIComponent(r[0]);
                        } catch (e) {
                            var n = i(r[0]);
                            n !== r[0] && (t[r[0]] = n);
                        }
                        r = a.exec(e);
                    }
                    t["%C2"] = "ï¿½";
                    for (var o = Object.keys(t), s = 0; s < o.length; s++) {
                        var c = o[s];
                        e = e.replace(new RegExp(c, "g"), t[c]);
                    }
                    return e;
                })(e);
            }
        };
    },
    function (e, t, r) {
        "use strict";
        e.exports = (e, t) => {
            if ("string" != typeof e || "string" != typeof t) throw new TypeError("Expected the arguments to be of type `string`");
            if ("" === t) return [e];
            const r = e.indexOf(t);
            return -1 === r ? [e] : [e.slice(0, r), e.slice(r + t.length)];
        };
    },
    function (e, t, r) {
        "use strict";
        e.exports = function (e, t) {
            for (var r = {}, n = Object.keys(e), a = Array.isArray(t), o = 0; o < n.length; o++) {
                var i = n[o],
                    s = e[i];
                (a ? -1 !== t.indexOf(i) : t(i, s, e)) && (r[i] = s);
            }
            return r;
        };
    },
    function (e, t, r) {
        "use strict";
        r.r(t);
        var n = r(0),
            a = r.n(n),
            o = r(1),
            i = r.n(o),
            s = r(2),
            c = r.n(s);
        Math.pow(10, 8);
        var u = {
                lessThanXSeconds: { one: "less than a second", other: "less than {{count}} seconds" },
                xSeconds: { one: "1 second", other: "{{count}} seconds" },
                halfAMinute: "half a minute",
                lessThanXMinutes: { one: "less than a minute", other: "less than {{count}} minutes" },
                xMinutes: { one: "1 minute", other: "{{count}} minutes" },
                aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
                xHours: { one: "1 hour", other: "{{count}} hours" },
                xDays: { one: "1 day", other: "{{count}} days" },
                aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
                xWeeks: { one: "1 week", other: "{{count}} weeks" },
                aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
                xMonths: { one: "1 month", other: "{{count}} months" },
                aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
                xYears: { one: "1 year", other: "{{count}} years" },
                overXYears: { one: "over 1 year", other: "over {{count}} years" },
                almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
            },
            d = function (e, t, r) {
                var n,
                    a = u[e];
                return (n = "string" == typeof a ? a : 1 === t ? a.one : a.other.replace("{{count}}", t.toString())), null != r && r.addSuffix ? (r.comparison && r.comparison > 0 ? "in " + n : n + " ago") : n;
            };
        function l(e) {
            return function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    r = t.width ? String(t.width) : e.defaultWidth,
                    n = e.formats[r] || e.formats[e.defaultWidth];
                return n;
            };
        }
        var p = {
                date: l({ formats: { full: "EEEE, MMMM do, y", long: "MMMM do, y", medium: "MMM d, y", short: "MM/dd/yyyy" }, defaultWidth: "full" }),
                time: l({ formats: { full: "h:mm:ss a zzzz", long: "h:mm:ss a z", medium: "h:mm:ss a", short: "h:mm a" }, defaultWidth: "full" }),
                dateTime: l({ formats: { full: "{{date}} 'at' {{time}}", long: "{{date}} 'at' {{time}}", medium: "{{date}}, {{time}}", short: "{{date}}, {{time}}" }, defaultWidth: "full" }),
            },
            m = { lastWeek: "'last' eeee 'at' p", yesterday: "'yesterday at' p", today: "'today at' p", tomorrow: "'tomorrow at' p", nextWeek: "eeee 'at' p", other: "P" };
        function f(e) {
            return function (t, r) {
                var n,
                    a = r || {};
                if ("formatting" === (a.context ? String(a.context) : "standalone") && e.formattingValues) {
                    var o = e.defaultFormattingWidth || e.defaultWidth,
                        i = a.width ? String(a.width) : o;
                    n = e.formattingValues[i] || e.formattingValues[o];
                } else {
                    var s = e.defaultWidth,
                        c = a.width ? String(a.width) : e.defaultWidth;
                    n = e.values[c] || e.values[s];
                }
                return n[e.argumentCallback ? e.argumentCallback(t) : t];
            };
        }
        function h(e) {
            return function (t) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = r.width,
                    a = (n && e.matchPatterns[n]) || e.matchPatterns[e.defaultMatchWidth],
                    o = t.match(a);
                if (!o) return null;
                var i,
                    s = o[0],
                    c = (n && e.parsePatterns[n]) || e.parsePatterns[e.defaultParseWidth],
                    u = Array.isArray(c)
                        ? b(c, function (e) {
                            return e.test(s);
                        })
                        : g(c, function (e) {
                            return e.test(s);
                        });
                (i = e.valueCallback ? e.valueCallback(u) : u), (i = r.valueCallback ? r.valueCallback(i) : i);
                var d = t.slice(s.length);
                return { value: i, rest: d };
            };
        }
        function g(e, t) {
            for (var r in e) if (e.hasOwnProperty(r) && t(e[r])) return r;
        }
        function b(e, t) {
            for (var r = 0; r < e.length; r++) if (t(e[r])) return r;
        }
        var y;
        f({ values: { narrow: ["B", "A"], abbreviated: ["BC", "AD"], wide: ["Before Christ", "Anno Domini"] }, defaultWidth: "wide" }),
            f({
                values: { narrow: ["1", "2", "3", "4"], abbreviated: ["Q1", "Q2", "Q3", "Q4"], wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"] },
                defaultWidth: "wide",
                argumentCallback: function (e) {
                    return e - 1;
                },
            }),
            f({
                values: {
                    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                    abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                },
                defaultWidth: "wide",
            }),
            f({
                values: {
                    narrow: ["S", "M", "T", "W", "T", "F", "S"],
                    short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
                    abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                },
                defaultWidth: "wide",
            }),
            f({
                values: {
                    narrow: { am: "a", pm: "p", midnight: "mi", noon: "n", morning: "morning", afternoon: "afternoon", evening: "evening", night: "night" },
                    abbreviated: { am: "AM", pm: "PM", midnight: "midnight", noon: "noon", morning: "morning", afternoon: "afternoon", evening: "evening", night: "night" },
                    wide: { am: "a.m.", pm: "p.m.", midnight: "midnight", noon: "noon", morning: "morning", afternoon: "afternoon", evening: "evening", night: "night" },
                },
                defaultWidth: "wide",
                formattingValues: {
                    narrow: { am: "a", pm: "p", midnight: "mi", noon: "n", morning: "in the morning", afternoon: "in the afternoon", evening: "in the evening", night: "at night" },
                    abbreviated: { am: "AM", pm: "PM", midnight: "midnight", noon: "noon", morning: "in the morning", afternoon: "in the afternoon", evening: "in the evening", night: "at night" },
                    wide: { am: "a.m.", pm: "p.m.", midnight: "midnight", noon: "noon", morning: "in the morning", afternoon: "in the afternoon", evening: "in the evening", night: "at night" },
                },
                defaultFormattingWidth: "wide",
            }),
            (y = {
                matchPattern: /^(\d+)(th|st|nd|rd)?/i,
                parsePattern: /\d+/i,
                valueCallback: function (e) {
                    return parseInt(e, 10);
                },
            }),
            h({
                matchPatterns: { narrow: /^(b|a)/i, abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i, wide: /^(before christ|before common era|anno domini|common era)/i },
                defaultMatchWidth: "wide",
                parsePatterns: { any: [/^b/i, /^(a|c)/i] },
                defaultParseWidth: "any",
            }),
            h({
                matchPatterns: { narrow: /^[1234]/i, abbreviated: /^q[1234]/i, wide: /^[1234](th|st|nd|rd)? quarter/i },
                defaultMatchWidth: "wide",
                parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
                defaultParseWidth: "any",
                valueCallback: function (e) {
                    return e + 1;
                },
            }),
            h({
                matchPatterns: { narrow: /^[jfmasond]/i, abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i, wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i },
                defaultMatchWidth: "wide",
                parsePatterns: { narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i], any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i] },
                defaultParseWidth: "any",
            }),
            h({
                matchPatterns: { narrow: /^[smtwf]/i, short: /^(su|mo|tu|we|th|fr|sa)/i, abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i, wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i },
                defaultMatchWidth: "wide",
                parsePatterns: { narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i], any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i] },
                defaultParseWidth: "any",
            }),
            h({
                matchPatterns: { narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i, any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i },
                defaultMatchWidth: "any",
                parsePatterns: { any: { am: /^a/i, pm: /^p/i, midnight: /^mi/i, noon: /^no/i, morning: /morning/i, afternoon: /afternoon/i, evening: /evening/i, night: /night/i } },
                defaultParseWidth: "any",
            });
        r(3);
        function v(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ",";
            return decodeURI(e)
                .split(t)
                .map(function (e) {
                    return e.trim().toLowerCase();
                });
        }
        var k = function (e) {
                var t = Number(e);
                return Number.isNaN(t) ? 1 : t;
            },
            w = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return c.a.stringify(e);
            },
            x = function (e) {
                var t = {};
                return (
                    e
                        .slice(1, e.length)
                        .split("&")
                        .forEach(function (e) {
                            var r = e.split("="),
                                n = i()(r, 2),
                                a = n[0],
                                o = n[1],
                                s = escape(o);
                            if ("undefined" !== s && "" !== s)
                                switch (a) {
                                    case "from":
                                        t.fromTicker = s;
                                        break;
                                    case "to":
                                        t.toTicker = s;
                                        break;
                                    case "amount":
                                        t.fromAmount = k(s);
                                        break;
                                    case "amountTo":
                                        t.amountTo = k(s);
                                        break;
                                    case "activeTab":
                                        t.activeTab = s;
                                        break;
                                    case "mode":
                                        t.mode = s;
                                        break;
                                    case "isCheckTx":
                                        t.isCheckTx = "true" === s;
                                        break;
                                    case "fromAmount":
                                        t.fromAmount = s;
                                        break;
                                    case "fromCurrency":
                                        t.fromCurrency = s;
                                        break;
                                    case "toCurrency":
                                        t.toCurrency = s;
                                        break;
                                    case "fromNetwork":
                                        t.fromNetwork = s;
                                        break;
                                    case "toNetwork":
                                        t.toNetwork = s;
                                        break;
                                    case "FAQ":
                                        t.faq = "true" === s;
                                        break;
                                    case "logo":
                                        t.logo = "true" === s;
                                        break;
                                    case "address":
                                        t.recipientAddress = s;
                                        break;
                                    case "link_id":
                                        t.linkId = s;
                                        break;
                                    case "userid":
                                        t.userId = "true" === s;
                                        break;
                                    case "locales":
                                        t.locales = "true" === s;
                                        break;
                                    case "lang":
                                        t.lang = s;
                                        break;
                                    case "currencies_from":
                                        t.availableFromCurrencies = v(o);
                                        break;
                                    case "currencies_to":
                                        t.availableToCurrencies = v(o);
                                        break;
                                    case "alone":
                                        t.alone = "true" === s;
                                        break;
                                    case "toTheMoon":
                                        t.toTheMoon = "true" === s;
                                        break;
                                    case "horizontal":
                                        t.horizontal = "true" === s;
                                        break;
                                    case "isLedger":
                                        t.isLedger = "true" === s;
                                        break;
                                    case "primaryColor":
                                        t.primaryColor = s;
                                        break;
                                    case "darkMode":
                                        t.darkMode = "true" === s;
                                        break;
                                    case "backgroundColor":
                                        t.backgroundColor = s;
                                        break;
                                    case "configuratorType":
                                        t.configuratorType = s;
                                        break;
                                    case "topUpMode":
                                        t.topUpMode = "true" === s;
                                        break;
                                    case "topUpCurrency":
                                        t.topUpCurrency = s;
                                        break;
                                    case "topUpNetwork":
                                        t.topUpNetwork = s;
                                        break;
                                    case "topUpAddress":
                                        t.topUpAddress = s;
                                        break;
                                    case "topUpExtraId":
                                        t.topUpExtraId = s;
                                        break;
                                    case "isReverse":
                                        t.reverse = "true" === s;
                                }
                        }),
                        t
                );
            };
        function j(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t &&
                (n = n.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                    r.push.apply(r, n);
            }
            return r;
        }
        function M(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? j(Object(r), !0).forEach(function (t) {
                        a()(e, t, r[t]);
                    })
                    : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                        : j(Object(r)).forEach(function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                        });
            }
            return e;
        }
        var C = document.getElementById("iframe-widget"),
            O = document.getElementById("iframe-widget-wrapper");
        null === C && console.error("EXCHANGE WIDGET: iframe-widget not found");
        var A = M(M({}, x(C ? C.src : "")), x(window.location.search)),
            S = A.fromTicker,
            T = A.toTicker,
            U = A.fromAmount,
            F = A.faq,
            P = A.logo,
            E = A.locales,
            N = A.lang,
            W = A.linkId,
            I = A.userId,
            _ = A.horizontal,
            z = A.toTheMoon,
            q = A.primaryColor,
            R = A.fixedRate,
            L = A.isLedger,
            D = A.topUpMode,
            J = A.topUpCurrency,
            $ = A.topUpNetwork,
            X = A.topUpAddress,
            B = A.topUpExtraId;
        if (C) {
            var Q = w({
                from: S,
                to: T,
                amount: U,
                faq: F,
                logo: P,
                locales: E,
                lang: N,
                link_id: W,
                horizontal: _,
                primaryColor: q,
                toTheMoon: z,
                fixedRate: R,
                isLedger: L,
                topUpMode: D,
                topUpCurrency: J,
                topUpNetwork: $,
                topUpAddress: X,
                topUpExtraId: B,
            });
            C.src = "".concat("https://changenow.io/embeds/exchange-widget/v2/widget.html", "?").concat(Q);
        }
        window.addEventListener(
            "message",
            function (e) {
                if ("Guardarian" === e.data.messageText) {
                    var t = e.data.redirectUrl;
                    t && window.open(t, "_blank");
                }
                "Close modal" === e.data.messageText && document.querySelector(".wrapper-iframe").remove();
                if ("Open modal" === e.data.messageText) {
                    var r = e.data.dataQuery,
                        n = document.createElement("iframe"),
                        a = document.createElement("div");
                    (a.className = "wrapper-iframe"),
                        (a.style.cssText = "\n      position: fixed;\n      top: 0;\n      right: 0;\n      left: 0;\n      bottom: 0;\n      height: 100vh;\n      width: 100vw;\n      z-index: 10000000000;\n    "),
                        window.document.body.appendChild(a);
                    var o = escape(r.linkId ? r.linkId : ""),
                        i = w({
                            fromCurrency: r.fromCurrency,
                            toCurrency: r.toCurrency,
                            fromNetwork: r.fromNetwork,
                            toNetwork: r.toNetwork,
                            fromAmount: r.fromAmount,
                            userid: I,
                            link_id: o,
                            address: r.recipientAddress,
                            logo: r.logo,
                            FAQ: r.FAQ,
                            rate: r.rate,
                            lang: r.lang,
                            locales: r.locales,
                            isCheckTx: r.isCheckTx,
                            currencies_from: r.availableFromCurrencies,
                            currencies_to: r.availableToCurrencies,
                            mode: r.mode,
                            activeTab: r.activeTab,
                            toTheMoon: r.toTheMoon,
                            primaryColor: r.primaryColor,
                            isLedger: r.isLedger,
                            topUpMode: r.topUpMode,
                            topUpCurrency: r.topUpCurrency,
                            topUpNetwork: r.topUpNetwork,
                            topUpAddress: r.topUpAddress,
                            topUpExtraId: r.topUpExtraId,
                            isReverse: r.reverse,
                            amountTo: r.amountTo,
                        });
                    (n.src = "".concat("https://changenow.io/embeds/exchange-widget/v2/stepper.html", "?").concat(i)),
                        (n.style.cssText = "width: 100%; height: 100%; border: none"),
                        (n.id = "iframe-stepper"),
                        (n.allow = "camera *"),
                        a.appendChild(n);
                }
            },
            !1
        ),
            window.addEventListener("resize", function () {
                var e = window.matchMedia("(min-width: ".concat(840, "px)"));
                if (O && C) {
                    var t = C.clientWidth >= 840 && _;
                    O.style.height = e.matches && t ? "205px" : "356px";
                }
            });
    },
]);
