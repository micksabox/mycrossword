import { jsx as a, jsxs as $, Fragment as ce } from "react/jsx-runtime";
import * as _ from "react";
import fe, { useLayoutEffect as Te, useEffect as le, useRef as ye, useCallback as ne, useState as ke } from "react";
function Be(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var $e = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var o = {}.hasOwnProperty;
    function n() {
      for (var s = "", i = 0; i < arguments.length; i++) {
        var c = arguments[i];
        c && (s = r(s, t(c)));
      }
      return s;
    }
    function t(s) {
      if (typeof s == "string" || typeof s == "number")
        return s;
      if (typeof s != "object")
        return "";
      if (Array.isArray(s))
        return n.apply(null, s);
      if (s.toString !== Object.prototype.toString && !s.toString.toString().includes("[native code]"))
        return s.toString();
      var i = "";
      for (var c in s)
        o.call(s, c) && s[c] && (i = r(i, c));
      return i;
    }
    function r(s, i) {
      return i ? s ? s + " " + i : s + i : s;
    }
    e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
  })();
})($e);
var Re = $e.exports;
const ae = /* @__PURE__ */ Be(Re);
function W(e) {
  return (...o) => ae(o);
}
const We = ["b", "strong", "i", "em", "sub", "sup"], Me = /[A-Z]/;
function Ie(e, o) {
  return e.length !== 1 ? !1 : e.match(o);
}
function Pe(e) {
  return e.top >= 0 && e.left >= 0 && e.right <= (window.innerWidth || document.documentElement.clientWidth) && e.bottom <= (window.innerHeight || document.documentElement.clientHeight);
}
function je(e, o) {
  return e.top >= o.top && e.left >= o.left && e.right <= o.right && e.bottom <= o.bottom;
}
function Ae(e, o, n = "") {
  return {
    value: new Array(e).fill(n).map(() => new Array(o).fill(n))
  };
}
function Ge(e, o, n) {
  const t = Ae(e, o);
  return n.forEach(({ guess: r, pos: s }) => {
    t.value[s.col][s.row] = r !== void 0 ? r : "";
  }), t;
}
function ze(e, o, n, t) {
  if (e.value.reduce((s, i) => s + i.length, 0) !== o * n)
    return !1;
  for (let s = 0; s < o; s += 1)
    for (let i = 0; i < n; i += 1) {
      const c = e.value[s][i];
      if (c !== "" && !Ie(c, t))
        return !1;
    }
  return !0;
}
const pe = (e) => {
  let o;
  const n = /* @__PURE__ */ new Set(), t = (f, x) => {
    const m = typeof f == "function" ? f(o) : f;
    if (!Object.is(m, o)) {
      const v = o;
      o = x ?? (typeof m != "object" || m === null) ? m : Object.assign({}, o, m), n.forEach((u) => u(o, v));
    }
  }, r = () => o, c = { setState: t, getState: r, getInitialState: () => d, subscribe: (f) => (n.add(f), () => n.delete(f)) }, d = o = e(t, r, c);
  return c;
}, Oe = (e) => e ? pe(e) : pe, Ue = (e) => e;
function Ve(e, o = Ue) {
  const n = fe.useSyncExternalStore(
    e.subscribe,
    () => o(e.getState()),
    () => o(e.getInitialState())
  );
  return fe.useDebugValue(n), n;
}
const he = (e) => {
  const o = Oe(e), n = (t) => Ve(o, t);
  return Object.assign(n, o), n;
}, De = (e) => e ? he(e) : he, Y = De((e) => ({
  clues: [],
  setClues: (o) => {
    e(() => ({ clues: o }));
  },
  select: (o) => {
    e((n) => (typeof window < "u" && window.history.replaceState(null, "", `#${o}`), {
      clues: n.clues.map((t) => ({
        ...t,
        selected: t.id === o
      }))
    }));
  },
  answerAll: (o) => {
    e((n) => ({
      clues: n.clues.map((t) => ({
        ...t,
        answered: o
      }))
    }));
  },
  answerSome: (o, n) => {
    e((t) => ({
      clues: t.clues.map((r) => o.includes(r.id) ? {
        ...r,
        answered: n
      } : r)
    }));
  }
})), O = De((e, o) => ({
  cells: [],
  complete: !1,
  checkComplete: () => {
    if (o().complete)
      return null;
    const n = o().cells.every((t) => t.val === t.guess);
    return e({ complete: n }), n;
  },
  setCells: (n) => {
    e(() => ({ cells: n }));
  },
  select: (n) => {
    e((t) => ({
      cells: t.cells.map((r) => ({
        ...r,
        selected: r.pos.col === n.col && r.pos.row === n.row
      }))
    }));
  },
  answerAll: (n) => {
    e((t) => ({
      cells: t.cells.map((r) => ({
        ...r,
        guess: n ? r.val : void 0
      }))
    }));
  }
}));
function me({ message: e, style: o }) {
  const n = W();
  return /* @__PURE__ */ a("div", { className: n("GridError"), style: o, children: /* @__PURE__ */ $("div", { role: "alert", children: [
    /* @__PURE__ */ a("h1", { className: n("GridError__title"), children: "Something went wrong" }),
    /* @__PURE__ */ a("p", { className: n("GridError__subTitle"), children: e })
  ] }) });
}
function Fe({ className: e }) {
  return /* @__PURE__ */ a(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      className: e,
      viewBox: "0 0 16 16",
      children: /* @__PURE__ */ a(
        "path",
        {
          fillRule: "evenodd",
          d: "M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
        }
      )
    }
  );
}
function qe({ className: e }) {
  return /* @__PURE__ */ a(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      className: e,
      viewBox: "0 0 16 16",
      children: /* @__PURE__ */ a(
        "path",
        {
          fillRule: "evenodd",
          d: "M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
        }
      )
    }
  );
}
function te(e, o = {}) {
  const { allowedTags: n = [] } = o;
  if (!/<|>/.test(e))
    return e;
  let t = "", r = e;
  const s = n.length > 0 ? `\\b(${n.join("|")})\\b` : "(?!)", i = new RegExp(`</?(?!${s})\\w+[^>]*>`, "gi"), c = /<(\w+)[^>]*>/gi;
  for (; t !== r; )
    t = r, r = r.replace(i, ""), r = r.replace(c, "<$1>");
  return r;
}
const Ke = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'",
  "&#x27;": "'",
  "&#x2F;": "/",
  "&#96;": "`",
  "&#x3D;": "=",
  "&nbsp;": " ",
  "&copy;": "©",
  "&reg;": "®",
  "&trade;": "™",
  "&euro;": "€",
  "&pound;": "£",
  "&yen;": "¥",
  "&cent;": "¢",
  "&apos;": "'",
  "&sect;": "§",
  "&para;": "¶",
  "&plusmn;": "±",
  "&times;": "×",
  "&divide;": "÷",
  "&laquo;": "«",
  "&raquo;": "»",
  "&ldquo;": "“",
  "&rdquo;": "”",
  "&lsquo;": "‘",
  "&rsquo;": "’",
  "&hellip;": "…",
  "&middot;": "·",
  "&bull;": "•",
  "&ndash;": "–",
  "&mdash;": "—",
  "&alpha;": "α",
  "&beta;": "β",
  "&gamma;": "γ",
  "&delta;": "δ",
  "&pi;": "π",
  "&sigma;": "σ",
  "&omega;": "ω",
  "&mu;": "μ",
  "&tau;": "τ",
  "&phi;": "φ",
  "&chi;": "χ",
  "&psi;": "ψ",
  "&theta;": "θ"
};
function se(e) {
  return e.replace(/&([^;]+);/g, (o, n) => {
    const t = Ke[o.toLowerCase()];
    if (t !== void 0)
      return t;
    if (n.startsWith("#")) {
      let r;
      if (n.startsWith("#x") || n.startsWith("#X") ? r = parseInt(n.slice(2), 16) : r = parseInt(n.slice(1), 10), !isNaN(r))
        try {
          return String.fromCodePoint(r);
        } catch {
          return o;
        }
    }
    return o;
  });
}
function Je({
  allowedTags: e,
  num: o,
  onMoveNext: n,
  onMovePrev: t,
  show: r,
  text: s
}) {
  const i = W();
  return /* @__PURE__ */ a("div", { className: i("StickyClue", `StickyClue--${r}`), children: s !== void 0 && o !== void 0 ? /* @__PURE__ */ $(ce, { children: [
    /* @__PURE__ */ a(
      "button",
      {
        "aria-label": "Previous clue",
        className: i("StickyClue__button"),
        onClick: t,
        type: "button",
        children: /* @__PURE__ */ a(Fe, {})
      }
    ),
    /* @__PURE__ */ a("div", { className: i("StickyClue__inner"), children: /* @__PURE__ */ $("span", { className: i("StickyClue__text"), children: [
      /* @__PURE__ */ a("span", { className: i("StickyClue__num"), children: o }),
      /* @__PURE__ */ a(
        "span",
        {
          dangerouslySetInnerHTML: {
            __html: te(se(s), { allowedTags: e })
          }
        }
      )
    ] }) }),
    /* @__PURE__ */ a(
      "button",
      {
        "aria-label": "Next clue",
        className: i("StickyClue__button"),
        onClick: n,
        type: "button",
        children: /* @__PURE__ */ a(qe, {})
      }
    )
  ] }) : null });
}
const H = 31, Le = (e) => {
  const o = 1 + (H + 1) * e.col, n = 1 + (H + 1) * e.row, t = o + 1, r = n + 9, s = o + H * 0.5, i = n + H * 0.675;
  return { xRect: o, yRect: n, xNum: t, yNum: r, xText: s, yText: i };
};
function Xe({
  clueIds: e,
  guess: o,
  inputRef: n,
  isHighlighted: t,
  isSelected: r,
  num: s,
  onCellFocus: i,
  pos: c,
  selectedClueIndex: d
}) {
  if (e.length !== 1 && e.length !== 2)
    throw new Error(
      "Crossword data error: cell does not have 1 or 2 directions"
    );
  const f = W(), x = Y((I) => I.select), m = O((I) => I.select), { xRect: v, yRect: u, xNum: l, yNum: E, xText: y, yText: T } = Le(c), S = (I, B) => {
    i !== void 0 && i({
      pos: I,
      clueId: B
    });
  }, G = () => {
    var z;
    let I = d === -1 ? 0 : d;
    e.length === 2 && r && (I = d === 0 ? 1 : 0);
    const B = e[I];
    x(B), r || m(c), (!r || e.length === 2) && S(c, B), (z = n == null ? void 0 : n.current) == null || z.focus({ preventScroll: !0 });
  };
  return /* @__PURE__ */ $(
    "g",
    {
      className: f(
        "GridCell",
        t ? "GridCell--highlighted" : null,
        r ? "GridCell--selected" : null
      ),
      onClick: G,
      children: [
        /* @__PURE__ */ a(
          "rect",
          {
            className: f("GridCell__rect"),
            x: v,
            y: u,
            width: H,
            height: H
          }
        ),
        s ? /* @__PURE__ */ a("text", { className: f("GridCell__num"), x: l, y: E, children: s }) : null,
        /* @__PURE__ */ a(
          "text",
          {
            className: f("GridCell__text"),
            textAnchor: "middle",
            x: y,
            y: T,
            children: o
          }
        )
      ]
    }
  );
}
const Ye = _.memo(Xe);
const Ze = _.forwardRef(
  ({ onChange: e, onKeyDown: o, visible: n }, t) => {
    const r = W();
    return /* @__PURE__ */ a(
      "input",
      {
        autoComplete: "off",
        autoCorrect: "off",
        autoFocus: !1,
        className: r(
          "GridInput",
          n ? null : "GridInput--inclusivelyHidden"
        ),
        maxLength: 1,
        onChange: e,
        onKeyDown: o,
        ref: t,
        spellCheck: "false",
        tabIndex: -1,
        type: "text",
        value: ""
      }
    );
  }
), Qe = Ze;
function eo(e, o) {
  const [n, t] = _.useState(e);
  return _.useEffect(() => {
    const r = setTimeout(() => {
      t(e);
    }, o);
    return () => {
      clearTimeout(r);
    };
  }, [e, o]), n;
}
function ge(e) {
  return e * (H + 1) + 1;
}
function oo({ char: e, col: o, row: n, direction: t }) {
  const r = ge(n), s = ge(o), i = t === "across";
  if (e === ",") {
    const c = i ? 1 : H, d = i ? H : 1, f = i ? s - 2 : s, x = i ? r : r - 2;
    return /* @__PURE__ */ a("rect", { width: c, height: d, x: f, y: x });
  }
  if (e === "-") {
    const c = i ? H * 0.25 : 1, d = i ? 1 : H * 0.25, f = i ? s - 0.5 - c * 0.5 : s + H * 0.5 + c * 0.5, x = i ? r + H * 0.5 + d * 0.5 : r - 0.5 - d * 0.5;
    return /* @__PURE__ */ a("rect", { width: c, height: d, x: f, y: x });
  }
  return /* @__PURE__ */ a(ce, {});
}
function we(e, o, n) {
  if (o <= 0 || o >= n.length)
    return null;
  const t = n.position.x + (n.direction === "across" ? o : 0), r = n.position.y + (n.direction === "across" ? 0 : o);
  return /* @__PURE__ */ a(
    oo,
    {
      char: e,
      direction: n.direction,
      col: t,
      row: r
    },
    [t, r, n.direction].join(",")
  );
}
function no({ clues: e }) {
  return /* @__PURE__ */ a("svg", { className: "GridSeparators", children: e.filter((o) => Object.keys(o.separatorLocations).length > 0).map((o) => {
    const n = [], t = o.separatorLocations[","], r = o.separatorLocations["-"];
    return t !== void 0 && n.push(
      t.map((s) => we(",", s, o))
    ), r !== void 0 && n.push(
      r.map((s) => we("-", s, o))
    ), n;
  }) });
}
const to = _.memo(no);
function ve(e, o) {
  return o.map((n) => n.pos.col === e.pos.col && n.pos.row === e.pos.row ? e : n);
}
function so({
  cols: e,
  rows: o,
  entries: n,
  guessGrid: t,
  allowMissingSolutions: r = !1
}) {
  const s = [], i = n.map((c) => c.id);
  return n.forEach((c) => {
    var d, f;
    for (let x = 0; x < c.length; x += 1) {
      const m = c.direction === "across", v = m ? c.position.x + x : c.position.x, u = m ? c.position.y : c.position.y + x;
      if (v < 0 || v >= e || u < 0 || u >= o)
        throw new Error("Crossword data error: out of bounds");
      if (!r && c.solution !== void 0 && c.length !== c.solution.length)
        throw new Error("Crossword data error: solution length mismatch");
      if (!c.group.includes(c.id))
        throw new Error("Crossword data error: clue id missing from group");
      if (!c.group.every((E) => i.includes(E)))
        throw new Error("Crossword data error: group clue id not found");
      const l = s.find(
        ({ pos: E }) => E.col === v && E.row === u
      );
      if (l === void 0) {
        const E = t == null ? void 0 : t.value[v][u], y = {
          clueIds: [c.id],
          guess: E !== "" ? E : void 0,
          num: x === 0 ? c.number : void 0,
          pos: { col: v, row: u },
          selected: !1,
          val: (d = c.solution) == null ? void 0 : d[x]
        };
        s.push(y);
      } else {
        if (m && l.clueIds.some((y) => y.endsWith("across")))
          throw new Error("Crossword data error: overlapping across solutions");
        if (!m && l.clueIds.some((y) => y.endsWith("down")))
          throw new Error("Crossword data error: overlapping down solutions");
        const E = (f = c.solution) == null ? void 0 : f[x];
        if (!r && l.val !== E)
          throw new Error("Crossword data error: solution character clash");
        l.num = x === 0 ? c.number : l.num, l.clueIds = [...l.clueIds, c.id], r && E !== void 0 && (l.val = E);
      }
    }
  }), s;
}
function Ce(e, o) {
  return e.find(
    (n) => n.pos.col === o.col && n.pos.row === o.row
  );
}
function ro(e, o, n) {
  const t = Ce(e, {
    col: o.pos.col - (n ? 0 : 1),
    row: o.pos.row - (n ? 1 : 0)
  }), r = Ce(e, {
    col: o.pos.col + (n ? 0 : 1),
    row: o.pos.row + (n ? 1 : 0)
  });
  return (t == null ? void 0 : t.guess) === void 0 && (r == null ? void 0 : r.guess) === void 0;
}
function re(e, o) {
  const n = [];
  return e.forEach((t) => {
    const r = o.filter((s) => s.clueIds.includes(t)).sort(
      (s, i) => s.pos.col - i.pos.col || s.pos.row - i.pos.row
    );
    n.push(...r);
  }), n;
}
function io(e, o) {
  const n = { ",": [], "-": [] };
  let t = 0;
  return e.forEach((r) => {
    var i, c;
    const s = o.find((d) => d.id === r);
    if (s !== void 0) {
      const d = (i = s.separatorLocations[","]) == null ? void 0 : i.map(
        (x) => x + t
      );
      n[","] = [...n[","], ...d ?? []];
      const f = (c = s.separatorLocations["-"]) == null ? void 0 : c.map(
        (x) => x + t
      );
      n["-"] = [...n["-"], ...f ?? []];
    }
    t += s !== void 0 ? s.length : 0;
  }), n;
}
function ie(e, o) {
  const n = re(e.group, o), t = n.filter((r) => r.guess !== void 0);
  return n.length > 0 && n.length === t.length;
}
function co(e, o) {
  const n = [];
  return re(e.group, o).forEach((r) => {
    n.push(...r.clueIds);
  }), Array.from(new Set(n));
}
function lo(e, o, n) {
  return e.map((t) => ({
    ...t,
    answered: ie(t, o),
    selected: t.id === n
  }));
}
function ao(e, o) {
  return o === void 0 ? !1 : e.col === o.col && e.row === o.row;
}
function uo({
  cellMatcher: e,
  cells: o,
  clues: n,
  cols: t,
  guessGrid: r,
  inputRef: s,
  onCellChange: i,
  onCellFocus: c,
  onComplete: d,
  rawClues: f,
  rows: x,
  setGuessGrid: m
}) {
  const v = W(), u = o.find((w) => w.selected), l = n.find((w) => w.selected), E = t * H + t + 1, y = x * H + x + 1, [T, S] = _.useState(r), G = eo(T, 1e3), I = _.useRef(null), [B, z] = _.useState(1), U = O((w) => w.select), X = O((w) => w.setCells), F = Y((w) => w.select), q = Y((w) => w.answerSome), oe = O((w) => w.checkComplete), k = _.useCallback(() => {
    if (I.current !== null) {
      const w = I.current.clientWidth, C = I.current.clientHeight, p = w / E, g = C / y, N = Math.min(p, g);
      z(N);
    }
  }, [I.current]);
  _.useEffect(() => (window.addEventListener("resize", k), k(), function() {
    window.removeEventListener("resize", k);
  }), [k]), _.useEffect(() => {
    m(G);
  }, [G]);
  const K = (w, C) => {
    i !== void 0 && w.guess !== C && i({
      pos: w.pos,
      guess: C,
      previousGuess: w.guess
    });
  }, A = (w, C) => {
    c !== void 0 && c({
      pos: w,
      clueId: C
    });
  }, b = (w) => {
    S(Ge(t, x, w));
  }, h = () => {
    if (l === void 0 || u === void 0)
      return;
    if (l.direction === "across" && u.pos.col === l.position.x || l.direction === "down" && u.pos.row === l.position.y) {
      const C = l.group.indexOf(l.id);
      if (C > 0) {
        const p = l.group[C - 1], g = n.find((N) => N.id === p);
        if (g !== void 0) {
          const N = {
            col: g.position.x + (g.direction === "across" ? g.length - 1 : 0),
            row: g.position.y + (g.direction === "down" ? g.length - 1 : 0)
          };
          F(p), U(N), A(N, p);
        }
      }
    } else {
      const C = l.direction === "across" ? { col: u.pos.col - 1, row: u.pos.row } : { col: u.pos.col, row: u.pos.row - 1 };
      U(C), A(C, l.id);
    }
  }, R = () => {
    if (l === void 0 || u === void 0)
      return;
    if (l.direction === "across" && u.pos.col === l.position.x + l.length - 1 || l.direction === "down" && u.pos.row === l.position.y + l.length - 1) {
      const C = l.group.indexOf(l.id);
      if (l.group.length - 1 > C) {
        const p = l.group[C + 1], g = n.find((N) => N.id === p);
        if (g !== void 0) {
          const N = {
            col: g.position.x,
            row: g.position.y
          };
          F(p), U(N), A(N, p);
        }
      }
    } else {
      const C = l.direction === "across" ? { col: u.pos.col + 1, row: u.pos.row } : { col: u.pos.col, row: u.pos.row + 1 };
      U(C), A(C, l.id);
    }
  }, M = (w, C) => {
    const p = (D, j, L) => {
      const Z = D + j;
      return Z === -1 ? L - 1 : Z === L ? 0 : Z;
    };
    let { col: g, row: N } = u == null ? void 0 : u.pos;
    for (; ; ) {
      w === 1 || w === -1 ? g = p(g, w, t) : (C === 1 || C === -1) && (N = p(N, C, x));
      const D = o.find(
        // eslint-disable-next-line @typescript-eslint/no-loop-func
        (j) => j.pos.col === g && j.pos.row === N
      );
      if (D !== void 0)
        return D;
    }
  }, P = (w) => {
    if (l === void 0 || u === void 0)
      return;
    let C;
    switch (w) {
      case "Up":
        C = M(0, -1);
        break;
      case "Down":
        C = M(0, 1);
        break;
      case "Left":
        C = M(-1, 0);
        break;
      case "Right":
        C = M(1, 0);
        break;
      default:
        C = void 0;
    }
    C !== void 0 && (U(C.pos), C.clueIds.includes(l.id) ? A(C.pos, l.id) : (F(C.clueIds[0]), A(C.pos, C.clueIds[0])));
  }, J = (w) => {
    if (!(l === void 0 || u === void 0) && [
      "ArrowUp",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "Backspace",
      "Delete",
      "Tab"
    ].includes(w.key)) {
      if (w.preventDefault(), w.stopPropagation(), ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(w.key))
        P(w.key.replace("Arrow", ""));
      else if (["Backspace", "Delete"].includes(w.key)) {
        K(u, void 0);
        const C = {
          ...u,
          guess: void 0
        }, p = ve(C, o);
        X(p), u.clueIds.forEach((g) => {
          const N = n.find((D) => D.id === g);
          if (N) {
            const D = ie(N, p);
            q(N.group, D);
          }
        }), w.key === "Backspace" && h(), b(p);
      } else if (w.key === "Tab") {
        const C = n.findIndex((D) => D.selected);
        let p = 0;
        w.shiftKey ? p = C > 0 ? C - 1 : n.length - 1 : p = C < n.length - 1 ? C + 1 : 0;
        const g = n[p], N = {
          col: g.position.x,
          row: g.position.y
        };
        F(g.id), U(N), A(N, g.id);
      }
    }
  }, Q = (w) => {
    if (l === void 0 || u === void 0)
      return;
    const C = w.target.value.toUpperCase();
    if (Ie(C, e)) {
      K(u, C);
      const p = {
        ...u,
        guess: C
      }, g = ve(p, o);
      X(g), u.clueIds.forEach((N) => {
        const D = n.find((L) => L.id === N);
        ie(D, g) && q(D.group, !0);
      }), R(), d !== void 0 && oe() === !0 && d(), b(g);
    } else
      w.preventDefault();
  }, V = u !== void 0 ? Le(u == null ? void 0 : u.pos) : void 0;
  return /* @__PURE__ */ $(
    "div",
    {
      className: v("Grid"),
      "data-testid": "grid",
      style: {
        minWidth: E,
        minHeight: y,
        width: E,
        height: y,
        aspectRatio: `${t} / ${x}`
      },
      children: [
        /* @__PURE__ */ $(
          "svg",
          {
            preserveAspectRatio: "xMinYMin",
            ref: I,
            viewBox: `0 0 ${E} ${y}`,
            children: [
              /* @__PURE__ */ a(
                "rect",
                {
                  className: v("Grid__background"),
                  onMouseDown: (w) => {
                    w.preventDefault();
                    const C = document.querySelector(".GridInput");
                    C !== null && C.blur();
                  },
                  width: E,
                  height: y,
                  x: "0",
                  y: "0"
                }
              ),
              o.map(({ clueIds: w, guess: C, num: p, pos: g }) => {
                const N = ao(g, u == null ? void 0 : u.pos), D = w.some(
                  (L) => l == null ? void 0 : l.group.includes(L)
                ), j = l !== void 0 ? w.indexOf(l.id) : -1;
                return /* @__PURE__ */ a(
                  Ye,
                  {
                    clueIds: w,
                    guess: C,
                    inputRef: s,
                    isHighlighted: D,
                    isSelected: N,
                    num: p,
                    onCellFocus: c,
                    pos: g,
                    selectedClueIndex: j
                  },
                  `${g.col},${g.row}`
                );
              }),
              /* @__PURE__ */ a(to, { clues: f })
            ]
          }
        ),
        /* @__PURE__ */ a(
          "div",
          {
            className: v("Grid__inputContainer"),
            style: {
              width: u !== void 0 ? H * B : void 0,
              height: u !== void 0 ? H * B : void 0,
              top: (V == null ? void 0 : V.yRect) !== void 0 ? V.yRect * B : void 0,
              left: (V == null ? void 0 : V.xRect) !== void 0 ? V.xRect * B : void 0
            },
            children: /* @__PURE__ */ a(
              Qe,
              {
                onChange: Q,
                onKeyDown: J,
                ref: s,
                visible: u !== void 0
              }
            )
          }
        )
      ]
    }
  );
}
function fo({
  allowedHtmlTags: e,
  answered: o,
  col: n,
  containerRef: t,
  id: r,
  inputRef: s,
  isHighlighted: i,
  num: c,
  onCellFocus: d,
  row: f,
  scrollTo: x,
  text: m
}) {
  const v = W(), u = _.useRef(null), l = O((S) => S.select), E = Y((S) => S.select), y = (S, G) => {
    d !== void 0 && d({
      pos: S,
      clueId: G
    });
  }, T = _.useCallback(() => {
    var G;
    const S = { col: n, row: f };
    E(r), l(S), y(S, r), (G = s == null ? void 0 : s.current) == null || G.focus({ preventScroll: !0 });
  }, [s]);
  return _.useEffect(() => {
    if (x && u.current !== null && t !== void 0 && t.current !== null) {
      const S = u.current.getBoundingClientRect(), G = t.current.getBoundingClientRect();
      je(S, G) || u.current.scrollIntoView({
        behavior: "auto",
        block: "nearest",
        inline: "nearest"
      });
    }
  }, [x]), /* @__PURE__ */ $(
    "div",
    {
      className: v(
        "Clue",
        o ? "Clue--answered" : null,
        i ? "Clue--highlighted" : null
      ),
      onClick: T,
      onKeyDown: (S) => {
        S.key === "Enter" && T();
      },
      role: "button",
      ref: u,
      tabIndex: 0,
      children: [
        /* @__PURE__ */ a("span", { className: v("Clue__num"), children: c }),
        /* @__PURE__ */ a(
          "span",
          {
            className: v("Clue__text"),
            dangerouslySetInnerHTML: {
              __html: te(se(m), {
                allowedTags: e
              })
            },
            "data-text": te(se(m))
          }
        )
      ]
    }
  );
}
const be = _.memo(fo);
const po = [
  { name: "xs", max: 576 },
  { name: "sm", max: 768 },
  { name: "md", max: 992 },
  { name: "lg", max: 1200 },
  { name: "xl", max: 1400 },
  { name: "xxl", max: 99999 }
];
function ho() {
  const [e, o] = _.useState(), [n, t] = _.useState(), r = () => {
    t(window.innerWidth);
  };
  return _.useEffect(() => {
    if (window.addEventListener("resize", r), r(), n !== void 0) {
      const s = po.filter((i) => n < i.max);
      s.length > 0 ? o(s[0].name) : o(void 0);
    }
    return function() {
      window.removeEventListener("resize", r);
    };
  }, [n]), e;
}
function mo({
  allowedHtmlTags: e,
  entries: o,
  gridHeight: n,
  inputRef: t,
  onCellFocus: r,
  selectedClueId: s
}) {
  const i = ho(), c = _.useRef(null), d = _.useRef(null), f = _.useRef(null), x = o.filter((l) => l.direction === "across").sort((l, E) => l.number - E.number), m = o.filter((l) => l.direction === "down").sort((l, E) => l.number - E.number), v = (l) => {
    if (s === void 0)
      return !1;
    const E = o.find((y) => y.id === s);
    return (E == null ? void 0 : E.group.includes(l.id)) ?? !1;
  }, u = (l) => i !== void 0 && ["md", "lg", "xl", "xxl"].includes(i) && s !== void 0 && l.group.includes(s) && l.id === l.group[0];
  return /* @__PURE__ */ $(
    "div",
    {
      className: "Clues",
      ref: c,
      style: { maxHeight: n },
      children: [
        /* @__PURE__ */ $("div", { className: "Clues__list Clues__list--across", ref: d, children: [
          /* @__PURE__ */ a("h3", { className: "Clues__listHeader", children: "Across" }),
          /* @__PURE__ */ a("div", { className: "Clues__listBody", children: x.map((l) => /* @__PURE__ */ a(
            be,
            {
              allowedHtmlTags: e,
              answered: l.answered,
              col: l.position.x,
              containerRef: i === "md" ? c : d,
              id: l.id,
              inputRef: t,
              isHighlighted: v(l),
              num: l.humanNumber,
              onCellFocus: r,
              row: l.position.y,
              scrollTo: u(l),
              text: l.clue
            },
            l.id
          )) })
        ] }),
        /* @__PURE__ */ $("div", { className: "Clues__list Clues__list--down", ref: f, children: [
          /* @__PURE__ */ a("h3", { className: "Clues__listHeader", children: "Down" }),
          /* @__PURE__ */ a("div", { className: "Clues__listBody", children: m.map((l) => /* @__PURE__ */ a(
            be,
            {
              allowedHtmlTags: e,
              answered: l.answered,
              col: l.position.x,
              containerRef: i === "md" ? c : f,
              id: l.id,
              inputRef: t,
              isHighlighted: v(l),
              num: l.humanNumber,
              onCellFocus: r,
              row: l.position.y,
              scrollTo: u(l),
              text: l.clue
            },
            l.id
          )) })
        ] })
      ]
    }
  );
}
function xe(e) {
  return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
function go({
  allowedHtmlTags: e,
  className: o,
  clue: n,
  onClick: t,
  splitWords: r = !1
}) {
  if (!r)
    return /* @__PURE__ */ a(
      "span",
      {
        dangerouslySetInnerHTML: {
          __html: te(se(n), {
            allowedTags: e
          })
        }
      }
    );
  const i = te(se(n)).split(/\b([\p{L}\p{M}]+)\b/u);
  return /* @__PURE__ */ a(ce, { children: i.map((c, d) => d % 2 === 1 ? /* @__PURE__ */ a(
    "span",
    {
      className: o,
      onClick: () => t(xe(c)),
      onKeyDown: (f) => {
        f.key === "Enter" && t(xe(c));
      },
      role: "button",
      tabIndex: 0,
      children: c
    },
    `${c}-${d}`
  ) : /* @__PURE__ */ a("span", { children: c }, `${c}-${d}`)) });
}
function wo(e, o) {
  if (e[","].includes(o))
    return "SolutionDisplay__letter--hasSpace";
  if (e["-"].includes(o))
    return "SolutionDisplay__letter--hasHyphen";
}
function vo(e, o) {
  let n = e;
  return o.split("").forEach((t) => {
    n = n.replace(t, "");
  }), n;
}
function Co({
  cells: e,
  letters: o,
  separators: n,
  shuffling: t
}) {
  const r = W(), s = e.map((f) => f.guess).join(""), i = o !== void 0 ? vo(o == null ? void 0 : o.toUpperCase(), s) : void 0;
  let c = o == null ? void 0 : o.toUpperCase(), d = 0;
  return /* @__PURE__ */ a("div", { className: "SolutionDisplay", children: e.map((f, x) => {
    const m = f.guess !== void 0 && (c == null ? void 0 : c.includes(f.guess));
    return m && (c = c == null ? void 0 : c.replace(f.guess, "")), /* @__PURE__ */ a(
      "span",
      {
        className: r(
          "SolutionDisplay__letter",
          f.guess !== void 0 ? "SolutionDisplay__letter--populated" : null,
          t && f.guess !== void 0 && o !== void 0 && !m ? "SolutionDisplay__letter--missing" : null,
          wo(n, x + 1)
        ),
        children: f.guess ?? (t && i !== void 0 && i[d] !== void 0 ? i[d++] : null)
      },
      `${f.val}-${x}`
    );
  }) });
}
const _e = (e) => Math.round(e * 100) / 100, bo = (e, o, n) => {
  const t = o * Math.PI / 180 * n;
  return {
    left: `${e + _e(e * Math.sin(t))}%`,
    top: `${e + _e(e * Math.cos(t))}%`
  };
}, xo = (e) => ({
  left: `${e - 1}%`,
  top: `${e - 2}%`
}), _o = (e, o = 5) => e.length === 0 ? 0 : e.length < o ? 360 / e.length : 360 / (e.length - 1);
function So({
  letters: e,
  populatedLetters: o
}) {
  const n = W(), t = _o(e), r = 40;
  let s = o.toUpperCase();
  return /* @__PURE__ */ a("div", { className: n("WordWheel"), children: e.toUpperCase().split("").map((i, c) => {
    const d = s.includes(i);
    return d && (s = s.replace(i, "")), /* @__PURE__ */ a(
      "span",
      {
        className: n(
          "WordWheel__letter",
          c === 0 && (e.length === 1 || e.length > 4) ? "WordWheel__letter--central" : null,
          d ? "WordWheel__letter--populated" : null
        ),
        style: c === 0 && (e.length === 1 || e.length > 4) ? xo(r) : bo(r, t, c),
        children: i
      },
      `${i}-${c}`
    );
  }) });
}
const Eo = _.forwardRef(
  ({
    ariaLabel: e,
    children: o,
    className: n,
    disabled: t,
    id: r,
    onClick: s,
    onKeyDown: i,
    variant: c = "filled"
  }, d) => {
    const f = W();
    return /* @__PURE__ */ a(
      "button",
      {
        "aria-label": e,
        className: ae(f("Button", `Button--${c}`), n),
        disabled: t,
        id: r,
        onClick: s,
        onKeyDown: i,
        ref: d,
        type: "button",
        children: o
      }
    );
  }
), ee = Eo;
function No({ className: e }) {
  return /* @__PURE__ */ a(
    "svg",
    {
      className: e,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 28 28",
      children: /* @__PURE__ */ a("path", { d: "M21 9.8l-.8-.8-5.2 4.8-5.2-4.8-.8.8 4.8 5.2-4.8 5.2.8.8 5.2-4.8 5.2 4.8.8-.8-4.8-5.2 4.8-5.2" })
    }
  );
}
function yo({
  allowedHtmlTags: e,
  clue: o,
  groupCells: n,
  groupSeparators: t,
  onClose: r,
  style: s
}) {
  const i = W(), c = _.useRef(null), d = _.useRef(null), [f, x] = _.useState(""), [m, v] = _.useState(!1), u = f !== "" || m, l = n.length;
  _.useEffect(() => {
    var S;
    m || (S = c.current) == null || S.focus({ preventScroll: !0 });
  }, [m]);
  const E = () => {
    x(""), v(!1);
  }, y = () => {
    var S;
    f !== "" && (x(
      (G) => G.split("").sort(() => 0.5 - Math.random()).join("")
    ), v(!0), (S = d.current) == null || S.focus({ preventScroll: !0 }));
  }, T = (S) => {
    var G;
    x((I) => (I + S).substring(0, l)), (G = c.current) == null || G.focus({ preventScroll: !0 });
  };
  return _.useEffect(() => {
    E();
  }, [o.id]), /* @__PURE__ */ $(
    "div",
    {
      className: i(
        "AnagramHelper",
        m ? "AnagramHelper--shuffling" : null
      ),
      style: s,
      children: [
        /* @__PURE__ */ a(
          ee,
          {
            ariaLabel: "Close",
            className: i("AnagramHelper__closeButton"),
            onClick: r,
            variant: "outlined",
            children: /* @__PURE__ */ a(No, { className: i("AnagramHelper__closeButtonIcon") })
          }
        ),
        /* @__PURE__ */ a("div", { className: i("AnagramHelper__top"), children: m ? /* @__PURE__ */ a(
          So,
          {
            letters: f,
            populatedLetters: n.map((S) => S.guess).join("")
          }
        ) : /* @__PURE__ */ $(ce, { children: [
          /* @__PURE__ */ a(
            "input",
            {
              autoComplete: "off",
              className: i("AnagramHelper__input"),
              maxLength: l,
              onChange: (S) => x(S.target.value),
              onKeyDown: (S) => {
                ["Enter", "NumpadEnter"].includes(S.code) ? (S.preventDefault(), y()) : S.code === "Escape" && (f === "" ? r() : E());
              },
              placeholder: "Enter letters...",
              ref: c,
              spellCheck: "false",
              value: f
            }
          ),
          /* @__PURE__ */ $(
            "span",
            {
              className: i(
                "AnagramHelper__counter",
                f === "" ? "AnagramHelper__counter--hidden" : null
              ),
              children: [
                f.length,
                "/",
                l
              ]
            }
          )
        ] }) }),
        /* @__PURE__ */ $("div", { className: i("AnagramHelper__bottom"), children: [
          /* @__PURE__ */ $("div", { className: i("AnagramHelper__buttons"), children: [
            /* @__PURE__ */ a(ee, { disabled: !u, onClick: E, variant: "outlined", children: "Reset" }),
            /* @__PURE__ */ a(
              ee,
              {
                disabled: !u,
                onClick: y,
                onKeyDown: (S) => {
                  S.code === "Escape" && E();
                },
                ref: d,
                children: "Shuffle"
              }
            )
          ] }),
          /* @__PURE__ */ $("p", { className: i("AnagramHelper__clue"), children: [
            /* @__PURE__ */ a(
              "span",
              {
                className: i("AnagramHelper__clueNum"),
                children: `${o.number} ${o.direction}`
              }
            ),
            /* @__PURE__ */ a(
              go,
              {
                allowedHtmlTags: e,
                className: i("AnagramHelper__clickableWord"),
                clue: o.clue,
                onClick: (S) => T(S),
                splitWords: !m
              }
            )
          ] }),
          /* @__PURE__ */ a(
            Co,
            {
              cells: n,
              letters: f,
              separators: t,
              shuffling: m
            }
          )
        ] })
      ]
    }
  );
}
const He = typeof window < "u" ? Te : le;
function Se(e) {
  const o = ye(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });
  return He(() => {
    o.current = e;
  }, [e]), ne((...n) => {
    var t;
    return (t = o.current) == null ? void 0 : t.call(o, ...n);
  }, [o]);
}
function Ee(e, o, n, t) {
  const r = ye(o);
  He(() => {
    r.current = o;
  }, [o]), le(() => {
    const s = (n == null ? void 0 : n.current) ?? window;
    if (!(s && s.addEventListener))
      return;
    const i = (c) => {
      r.current(c);
    };
    return s.addEventListener(e, i, t), () => {
      s.removeEventListener(e, i, t);
    };
  }, [e, n, t]);
}
const ue = typeof window > "u";
function ko(e, o, n = {}) {
  const { initializeWithValue: t = !0 } = n, r = ne(
    (v) => n.serializer ? n.serializer(v) : JSON.stringify(v),
    [n]
  ), s = ne(
    (v) => {
      if (n.deserializer)
        return n.deserializer(v);
      if (v === "undefined")
        return;
      const u = o instanceof Function ? o() : o;
      let l;
      try {
        l = JSON.parse(v);
      } catch (E) {
        return console.error("Error parsing JSON:", E), u;
      }
      return l;
    },
    [n, o]
  ), i = ne(() => {
    const v = o instanceof Function ? o() : o;
    if (ue)
      return v;
    try {
      const u = window.localStorage.getItem(e);
      return u ? s(u) : v;
    } catch (u) {
      return console.warn(`Error reading localStorage key “${e}”:`, u), v;
    }
  }, [o, e, s]), [c, d] = ke(() => t ? i() : o instanceof Function ? o() : o), f = Se((v) => {
    ue && console.warn(
      `Tried setting localStorage key “${e}” even though environment is not a client`
    );
    try {
      const u = v instanceof Function ? v(i()) : v;
      window.localStorage.setItem(e, r(u)), d(u), window.dispatchEvent(new StorageEvent("local-storage", { key: e }));
    } catch (u) {
      console.warn(`Error setting localStorage key “${e}”:`, u);
    }
  }), x = Se(() => {
    ue && console.warn(
      `Tried removing localStorage key “${e}” even though environment is not a client`
    );
    const v = o instanceof Function ? o() : o;
    window.localStorage.removeItem(e), d(v), window.dispatchEvent(new StorageEvent("local-storage", { key: e }));
  });
  le(() => {
    d(i());
  }, [e]);
  const m = ne(
    (v) => {
      v.key && v.key !== e || d(i());
    },
    [e, i]
  );
  return Ee("storage", m), Ee("local-storage", m), [c, f, x];
}
const $o = 10;
function de({
  buttonText: e,
  onCancel: o,
  onConfirm: n,
  timeout: t = $o
}) {
  if (t <= 0)
    throw new Error("Confirm should have a timeout greater than zero");
  const r = W(), [s, i] = _.useState(t);
  return _.useEffect(() => {
    const c = setTimeout(() => {
      s <= 1 ? o() : i((d) => d - 1);
    }, 1e3);
    return function() {
      clearTimeout(c);
    };
  }, [s]), /* @__PURE__ */ $("div", { className: r("Confirm"), children: [
    /* @__PURE__ */ $("div", { className: r("Confirm__buttonContainer"), children: [
      /* @__PURE__ */ a(ee, { onClick: o, variant: "outlined", children: "Cancel" }),
      /* @__PURE__ */ a(ee, { className: r("Confirm__button"), onClick: n, children: e })
    ] }),
    /* @__PURE__ */ $("span", { className: r("Confirm__timeout"), children: [
      "This will automatically cancel in ",
      s
    ] })
  ] });
}
function Io({ className: e }) {
  return /* @__PURE__ */ a(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      className: e,
      width: "8",
      height: "8",
      viewBox: "0 0 292.362 292.362",
      children: /* @__PURE__ */ a("path", { d: "M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424   C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428   s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z" })
    }
  );
}
function Ao({ className: e, id: o, menu: n, text: t }) {
  if (n.length < 2)
    throw new Error("DropdownButton should have at least 2 menu items");
  const r = W(), s = _.useRef(null), i = _.useRef(null), c = _.useRef(null), [d, f] = _.useState(!1);
  _.useEffect(() => {
    const m = (v) => {
      const u = s.current !== null && !s.current.contains(v.target);
      d && u && f(!1);
    };
    return document.addEventListener("click", m), function() {
      document.removeEventListener("click", m);
    };
  }, [d]);
  const x = () => {
    if (c.current !== null && i.current !== null && (c.current.style.marginTop = "", !d)) {
      const m = c.current.getBoundingClientRect();
      if (!Pe(m)) {
        const u = m.height + i.current.clientHeight + 10;
        c.current.style.marginTop = `-${u}px`;
      }
    }
    f((m) => !m);
  };
  return /* @__PURE__ */ $(
    "div",
    {
      className: ae(
        r("DropdownButton", d ? "DropdownButton--expanded" : null),
        e
      ),
      ref: s,
      children: [
        /* @__PURE__ */ $(
          "button",
          {
            "aria-controls": o !== void 0 ? `${o}-listbox` : void 0,
            "aria-expanded": d ? "true" : "false",
            "aria-haspopup": "true",
            className: r("DropdownButton__button"),
            id: o,
            onClick: x,
            ref: i,
            type: "button",
            children: [
              /* @__PURE__ */ a("span", { children: t }),
              /* @__PURE__ */ a(Io, { className: r("DropdownButton__dropdownButtonIcon") })
            ]
          }
        ),
        /* @__PURE__ */ a(
          "ul",
          {
            "aria-label": `${t} menu`,
            className: r("DropdownButton__menu"),
            id: o !== void 0 ? `${o}-listbox` : void 0,
            ref: c,
            role: "listbox",
            children: n.map((m) => /* @__PURE__ */ a("li", { children: /* @__PURE__ */ a(
              "button",
              {
                className: r("DropdownButton__menuItem"),
                disabled: m.disabled,
                onClick: () => {
                  m.onClick(), f(!1);
                },
                type: "button",
                children: m.text
              }
            ) }, m.text))
          }
        )
      ]
    }
  );
}
const Ne = _.memo(Ao);
function Go({
  cells: e,
  clues: o,
  gridCols: n,
  gridRows: t,
  onAnagramHelperClick: r,
  onCellChange: s,
  onComplete: i,
  setGuessGrid: c,
  solutionsAvailable: d,
  selectedClueHasHash: f,
  onCheckClueHash: x,
  disableAnagram: m = !1,
  disableGridChecks: v = !1
}) {
  const u = W(), l = o.find((b) => b.selected), [E, y] = _.useState(!1), [T, S] = _.useState(!1), [G, I] = _.useState(!1), B = O((b) => b.answerAll), z = O((b) => b.setCells), U = O((b) => b.checkComplete), X = Y((b) => b.answerAll), F = Y((b) => b.answerSome), q = (b) => {
    c(Ge(n, t, b));
  }, oe = (b, h) => {
    co(b, h).forEach((M) => {
      const P = o.find((J) => J.id === M);
      if (P) {
        const J = ie(P, h);
        F(P.group, J);
      }
    });
  }, k = (b, h) => {
    s !== void 0 && b.guess !== h && s({
      pos: b.pos,
      guess: h,
      previousGuess: b.guess
    });
  }, K = [
    {
      disabled: l === void 0,
      onClick: () => {
        if (l !== void 0) {
          s !== void 0 && re(l.group, e).forEach((R) => {
            R.guess !== void 0 && R.val !== R.guess && k(R, void 0);
          });
          const b = e.map((h) => l.group.filter(
            (M) => h.clueIds.includes(M)
          ).length > 0 ? {
            ...h,
            guess: h.guess === h.val ? h.val : void 0
          } : h);
          z(b), oe(l, b), q(b);
        }
      },
      text: "Check word"
    },
    {
      onClick: () => y(!0),
      text: "Check grid",
      disabled: v
    }
  ], A = [
    {
      disabled: l === void 0,
      onClick: () => {
        if (l !== void 0) {
          const b = e.map((h) => {
            const R = l.group.filter(
              (M) => h.clueIds.includes(M)
            );
            if (R.length > 0) {
              if (h.clueIds.length === 1)
                return k(h, void 0), {
                  ...h,
                  guess: void 0
                };
              const P = R[0].includes("across");
              if (ro(e, h, P))
                return k(h, void 0), {
                  ...h,
                  guess: void 0
                };
            }
            return h;
          });
          z(b), F(l.group, !1), q(b);
        }
      },
      text: "Clear word"
    },
    { onClick: () => I(!0), text: "Clear grid" }
  ];
  return E ? /* @__PURE__ */ a("div", { className: u("Controls"), children: /* @__PURE__ */ a(
    de,
    {
      buttonText: "Confirm check grid",
      onCancel: () => y(!1),
      onConfirm: () => {
        s !== void 0 && e.forEach((h) => {
          h.guess !== void 0 && h.val !== h.guess && k(h, void 0);
        });
        const b = e.map((h) => ({
          ...h,
          guess: h.guess === h.val ? h.val : void 0
        }));
        z(b), o.forEach((h) => {
          const R = ie(h, b);
          F(h.group, R);
        }), y(!1), q(b);
      }
    }
  ) }) : T ? /* @__PURE__ */ a("div", { className: u("Controls"), children: /* @__PURE__ */ a(
    de,
    {
      buttonText: "Confirm reveal grid",
      onCancel: () => S(!1),
      onConfirm: () => {
        s !== void 0 && e.forEach((h) => {
          h.val !== h.guess && k(h, h.val);
        }), B(!0), X(!0), S(!1), i !== void 0 && U() === !0 && i();
        const b = e.map((h) => ({
          ...h,
          guess: h.val
        }));
        q(b);
      }
    }
  ) }) : G ? /* @__PURE__ */ a("div", { className: u("Controls"), children: /* @__PURE__ */ a(
    de,
    {
      buttonText: "Confirm clear grid",
      onCancel: () => I(!1),
      onConfirm: () => {
        s !== void 0 && e.forEach((b) => {
          b.guess !== void 0 && k(b, void 0);
        }), B(!1), X(!1), I(!1), q([]);
      }
    }
  ) }) : /* @__PURE__ */ $("div", { className: u("Controls"), children: [
    /* @__PURE__ */ $("div", { className: u("Controls__buttons"), children: [
      /* @__PURE__ */ a(ee, { disabled: m, onClick: r, children: "Anagram helper" }),
      d && /* @__PURE__ */ a(Ne, { menu: K, text: "Check" }),
      f && /* @__PURE__ */ a(
        ee,
        {
          onClick: x || (() => {
            console.log("onCheckClueHash is undefined");
          }),
          children: "Check clue hash"
        }
      )
    ] }),
    /* @__PURE__ */ a(Ne, { id: "clear-control", menu: A, text: "Clear" })
  ] });
}
function Do() {
  const [e, o] = ke(
    () => typeof window < "u" ? window.location.hash : ""
  );
  return le(() => {
    o(window.location.hash);
    const t = () => {
      o(window.location.hash);
    };
    return window.addEventListener("hashchange", t), () => window.removeEventListener("hashchange", t);
  }, []), [e, (t) => {
    typeof window < "u" && t !== e && (window.location.hash = t);
  }];
}
function Lo({
  allowedHtmlTags: e,
  allowMissingSolutions: o,
  cellMatcher: n,
  data: t,
  id: r,
  loadGrid: s,
  onCellChange: i,
  onCellFocus: c,
  onComplete: d,
  saveGrid: f,
  stickyClue: x,
  onClueHashCheckResult: m,
  disableAllReveals: v = !1,
  disableAnagram: u = !1,
  disableLetterChecks: l = !1,
  disableGridChecks: E = !1,
  checkClueHash: y
}) {
  const T = W(), [S, G] = ko(
    `crosswords.${r}`,
    Ae(t.dimensions.cols, t.dimensions.rows)
  ), [I] = Do(), B = Y((p) => p.clues), z = O((p) => p.cells), U = O((p) => p.select), X = Y((p) => p.select), F = O((p) => p.setCells), q = Y((p) => p.setClues), oe = O((p) => p.checkComplete), k = _.useMemo(() => {
    try {
      const p = so({
        cols: t.dimensions.cols,
        rows: t.dimensions.rows,
        entries: t.entries,
        guessGrid: s ?? S,
        allowMissingSolutions: o
      }), g = lo(t.entries, p);
      return {
        cells: p,
        clues: g,
        error: null
      };
    } catch (p) {
      return { cells: null, clues: null, error: p instanceof Error ? p.message : "An unknown error occurred" };
    }
  }, [t, s, o]), K = _.useMemo(
    () => z.length === 0 && k.cells !== null ? k.cells : z,
    [z, k.cells]
  ), A = _.useMemo(
    () => B.length === 0 && k.clues !== null ? k.clues : B,
    [B, k.clues]
  ), b = A.find((p) => p.selected), h = (b == null ? void 0 : b.group.length) === 1 ? b : A.find((p) => p.id === (b == null ? void 0 : b.group[0])), [R, M] = _.useState(!1), P = t.dimensions.rows * H + t.dimensions.rows + 1, J = t.dimensions.cols * H + t.dimensions.cols + 1, Q = _.useRef(null);
  if (_.useEffect(() => {
    k.cells !== null && (F(k.cells), oe());
  }, [k.cells]), _.useEffect(() => {
    k.clues !== null && q(k.clues);
  }, [k.clues]), _.useEffect(() => {
    A.find((g) => g.selected) === void 0 && X(I.replace("#", ""));
  }, [I]), s !== void 0 && !ze(
    s,
    t.dimensions.cols,
    t.dimensions.rows,
    n
  ))
    return /* @__PURE__ */ a("div", { className: T("Crossword"), children: /* @__PURE__ */ a(
      me,
      {
        message: "Error loading grid",
        style: {
          height: P,
          width: J,
          aspectRatio: `${t.dimensions.cols} / ${t.dimensions.rows}`
        }
      }
    ) });
  if (k.error !== null)
    return /* @__PURE__ */ a("div", { className: T("Crossword"), children: /* @__PURE__ */ a(
      me,
      {
        message: k.error,
        style: {
          height: P,
          width: J,
          aspectRatio: `${t.dimensions.cols} / ${t.dimensions.rows}`
        }
      }
    ) });
  const V = (p, g) => {
    c !== void 0 && c({
      pos: p,
      clueId: g
    });
  }, w = _.useCallback(
    (p) => {
      var L;
      const g = A.findIndex((Z) => Z.selected), N = p ? g < A.length - 1 ? g + 1 : 0 : g > 0 ? g - 1 : A.length - 1, D = A[N], j = {
        col: D.position.x,
        row: D.position.y
      };
      X(D.id), U(j), V(j, D.id), (L = Q == null ? void 0 : Q.current) == null || L.focus({ preventScroll: !0 });
    },
    [A, X, U, V]
  ), C = _.useCallback(
    async (p) => {
      p == null || p.preventDefault(), p == null || p.stopPropagation();
      const g = A.find((L) => L.selected);
      if (!g) {
        console.warn("Attempted to check hash but no clue selected.");
        return;
      }
      if (!y) {
        console.warn(
          "Attempted to check hash but `checkClueHash` prop is not provided."
        );
        return;
      }
      if (!g.solutionPoseidonHash) {
        console.warn("Selected clue does not have a hash to check against."), m && m(g.id, !1);
        return;
      }
      const j = [...re(g.group, K)].sort((L, Z) => g.direction === "across" ? L.pos.col - Z.pos.col : L.pos.row - Z.pos.row).map((L) => L.guess ?? "").join("");
      console.log("currentGuess for check:", j);
      try {
        const L = await y(
          g.id,
          j,
          g.solutionPoseidonHash
        );
        console.log("Hash check result:", L), m && m(g.id, L);
      } catch (L) {
        console.error("Error during hash check:", L), m && m(g.id, !1);
      }
    },
    [A, K, m, y]
  );
  return /* @__PURE__ */ $("div", { className: T("Crossword"), children: [
    /* @__PURE__ */ $("div", { className: T("Crossword__gridAndControls"), children: [
      /* @__PURE__ */ a(
        "div",
        {
          className: T("Crossword__gridContainer"),
          style: {
            maxWidth: t.dimensions.cols * H + t.dimensions.cols + 1
          },
          children: R && h !== void 0 ? /* @__PURE__ */ a(
            yo,
            {
              allowedHtmlTags: e,
              clue: h,
              groupCells: re(h.group, K),
              groupSeparators: io(h.group, A),
              onClose: () => M(!1),
              style: {
                height: P,
                maxHeight: P,
                width: J,
                maxWidth: J
              }
            }
          ) : /* @__PURE__ */ $(ce, { children: [
            x !== "never" ? /* @__PURE__ */ a(
              Je,
              {
                allowedTags: e,
                num: (h == null ? void 0 : h.group.length) === 1 ? `${h.number}${h.direction.charAt(0)}` : h == null ? void 0 : h.humanNumber,
                onMoveNext: () => w(!0),
                onMovePrev: () => w(!1),
                show: x,
                text: h == null ? void 0 : h.clue
              }
            ) : null,
            /* @__PURE__ */ a(
              uo,
              {
                cellMatcher: n,
                cells: K,
                clues: A,
                cols: t.dimensions.cols,
                guessGrid: S,
                inputRef: Q,
                onCellChange: i,
                onCellFocus: c,
                onComplete: d,
                rawClues: t.entries,
                rows: t.dimensions.rows,
                setGuessGrid: f ?? G
              }
            )
          ] })
        }
      ),
      /* @__PURE__ */ a(
        Go,
        {
          cells: K,
          clues: A,
          gridCols: t.dimensions.cols,
          gridRows: t.dimensions.rows,
          onAnagramHelperClick: () => M((p) => !p),
          onCellChange: i,
          onComplete: d,
          onCheckClueHash: C,
          setGuessGrid: f ?? G,
          solutionsAvailable: t.solutionAvailable,
          selectedClueHasHash: !!(b != null && b.solutionPoseidonHash),
          disableAllReveals: v,
          disableAnagram: u,
          disableLetterChecks: l,
          disableGridChecks: E
        }
      )
    ] }),
    /* @__PURE__ */ a(
      mo,
      {
        allowedHtmlTags: e,
        entries: A,
        gridHeight: P,
        inputRef: Q,
        onCellFocus: c,
        selectedClueId: b == null ? void 0 : b.id
      }
    )
  ] });
}
function Bo({
  allowedHtmlTags: e = We,
  allowMissingSolutions: o = !1,
  cellMatcher: n = Me,
  className: t,
  data: r,
  id: s,
  loadGrid: i,
  onCellChange: c,
  onCellFocus: d,
  onComplete: f,
  saveGrid: x,
  stickyClue: m = "auto",
  theme: v = "blue"
}) {
  const u = W();
  return /* @__PURE__ */ a(
    "div",
    {
      className: ae(
        u("MyCrossword", `MyCrossword--${v}Theme`),
        t
      ),
      children: /* @__PURE__ */ a(
        Lo,
        {
          allowedHtmlTags: e,
          allowMissingSolutions: o,
          cellMatcher: n,
          data: r,
          id: s,
          loadGrid: i,
          onCellChange: c,
          onCellFocus: d,
          onComplete: f,
          saveGrid: x,
          stickyClue: m
        }
      )
    }
  );
}
export {
  Bo as MyCrossword
};
