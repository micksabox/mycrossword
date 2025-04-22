import { jsx as a, jsxs as k, Fragment as ce } from "react/jsx-runtime";
import * as _ from "react";
import fe, { useLayoutEffect as Te, useEffect as le, useRef as ye, useCallback as ne, useState as ke } from "react";
function Re(e) {
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
var Be = $e.exports;
const ae = /* @__PURE__ */ Re(Be);
function B(e) {
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
      const g = o;
      o = x ?? (typeof m != "object" || m === null) ? m : Object.assign({}, o, m), n.forEach((u) => u(o, g));
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
}, De = (e) => e ? he(e) : he, X = De((e) => ({
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
})), z = De((e, o) => ({
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
  const n = B();
  return /* @__PURE__ */ a("div", { className: n("GridError"), style: o, children: /* @__PURE__ */ k("div", { role: "alert", children: [
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
  const i = B();
  return /* @__PURE__ */ a("div", { className: i("StickyClue", `StickyClue--${r}`), children: s !== void 0 && o !== void 0 ? /* @__PURE__ */ k(ce, { children: [
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
    /* @__PURE__ */ a("div", { className: i("StickyClue__inner"), children: /* @__PURE__ */ k("span", { className: i("StickyClue__text"), children: [
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
const L = 31, He = (e) => {
  const o = 1 + (L + 1) * e.col, n = 1 + (L + 1) * e.row, t = o + 1, r = n + 9, s = o + L * 0.5, i = n + L * 0.675;
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
  const f = B(), x = X((A) => A.select), m = z((A) => A.select), { xRect: g, yRect: u, xNum: l, yNum: S, xText: $, yText: T } = He(c), E = (A, R) => {
    i !== void 0 && i({
      pos: A,
      clueId: R
    });
  }, I = () => {
    var V;
    let A = d === -1 ? 0 : d;
    e.length === 2 && r && (A = d === 0 ? 1 : 0);
    const R = e[A];
    x(R), r || m(c), (!r || e.length === 2) && E(c, R), (V = n == null ? void 0 : n.current) == null || V.focus({ preventScroll: !0 });
  };
  return /* @__PURE__ */ k(
    "g",
    {
      className: f(
        "GridCell",
        t ? "GridCell--highlighted" : null,
        r ? "GridCell--selected" : null
      ),
      onClick: I,
      children: [
        /* @__PURE__ */ a(
          "rect",
          {
            className: f("GridCell__rect"),
            x: g,
            y: u,
            width: L,
            height: L
          }
        ),
        s ? /* @__PURE__ */ a("text", { className: f("GridCell__num"), x: l, y: S, children: s }) : null,
        /* @__PURE__ */ a(
          "text",
          {
            className: f("GridCell__text"),
            textAnchor: "middle",
            x: $,
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
    const r = B();
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
  return e * (L + 1) + 1;
}
function oo({ char: e, col: o, row: n, direction: t }) {
  const r = ge(n), s = ge(o), i = t === "across";
  if (e === ",") {
    const c = i ? 1 : L, d = i ? L : 1, f = i ? s - 2 : s, x = i ? r : r - 2;
    return /* @__PURE__ */ a("rect", { width: c, height: d, x: f, y: x });
  }
  if (e === "-") {
    const c = i ? L * 0.25 : 1, d = i ? 1 : L * 0.25, f = i ? s - 0.5 - c * 0.5 : s + L * 0.5 + c * 0.5, x = i ? r + L * 0.5 + d * 0.5 : r - 0.5 - d * 0.5;
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
      const m = c.direction === "across", g = m ? c.position.x + x : c.position.x, u = m ? c.position.y : c.position.y + x;
      if (g < 0 || g >= e || u < 0 || u >= o)
        throw new Error("Crossword data error: out of bounds");
      if (!r && c.solution !== void 0 && c.length !== c.solution.length)
        throw new Error("Crossword data error: solution length mismatch");
      if (!c.group.includes(c.id))
        throw new Error("Crossword data error: clue id missing from group");
      if (!c.group.every((S) => i.includes(S)))
        throw new Error("Crossword data error: group clue id not found");
      const l = s.find(
        ({ pos: S }) => S.col === g && S.row === u
      );
      if (l === void 0) {
        const S = t == null ? void 0 : t.value[g][u], $ = {
          clueIds: [c.id],
          guess: S !== "" ? S : void 0,
          num: x === 0 ? c.number : void 0,
          pos: { col: g, row: u },
          selected: !1,
          val: (d = c.solution) == null ? void 0 : d[x]
        };
        s.push($);
      } else {
        if (m && l.clueIds.some(($) => $.endsWith("across")))
          throw new Error("Crossword data error: overlapping across solutions");
        if (!m && l.clueIds.some(($) => $.endsWith("down")))
          throw new Error("Crossword data error: overlapping down solutions");
        const S = (f = c.solution) == null ? void 0 : f[x];
        if (!r && l.val !== S)
          throw new Error("Crossword data error: solution character clash");
        l.num = x === 0 ? c.number : l.num, l.clueIds = [...l.clueIds, c.id], r && S !== void 0 && (l.val = S);
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
  const g = B(), u = o.find((C) => C.selected), l = n.find((C) => C.selected), S = t * L + t + 1, $ = x * L + x + 1, [T, E] = _.useState(r), I = eo(T, 1e3), A = _.useRef(null), [R, V] = _.useState(1), P = z((C) => C.select), F = z((C) => C.setCells), j = X((C) => C.select), ee = X((C) => C.answerSome), q = z((C) => C.checkComplete), G = _.useCallback(() => {
    if (A.current !== null) {
      const C = A.current.clientWidth, b = A.current.clientHeight, p = C / S, v = b / $, y = Math.min(p, v);
      V(y);
    }
  }, [A.current]);
  _.useEffect(() => (window.addEventListener("resize", G), G(), function() {
    window.removeEventListener("resize", G);
  }), [G]), _.useEffect(() => {
    m(I);
  }, [I]);
  const J = (C, b) => {
    i !== void 0 && C.guess !== b && i({
      pos: C.pos,
      guess: b,
      previousGuess: C.guess
    });
  }, w = (C, b) => {
    c !== void 0 && c({
      pos: C,
      clueId: b
    });
  }, h = (C) => {
    E(Ge(t, x, C));
  }, N = () => {
    if (l === void 0 || u === void 0)
      return;
    if (l.direction === "across" && u.pos.col === l.position.x || l.direction === "down" && u.pos.row === l.position.y) {
      const b = l.group.indexOf(l.id);
      if (b > 0) {
        const p = l.group[b - 1], v = n.find((y) => y.id === p);
        if (v !== void 0) {
          const y = {
            col: v.position.x + (v.direction === "across" ? v.length - 1 : 0),
            row: v.position.y + (v.direction === "down" ? v.length - 1 : 0)
          };
          j(p), P(y), w(y, p);
        }
      }
    } else {
      const b = l.direction === "across" ? { col: u.pos.col - 1, row: u.pos.row } : { col: u.pos.col, row: u.pos.row - 1 };
      P(b), w(b, l.id);
    }
  }, K = () => {
    if (l === void 0 || u === void 0)
      return;
    if (l.direction === "across" && u.pos.col === l.position.x + l.length - 1 || l.direction === "down" && u.pos.row === l.position.y + l.length - 1) {
      const b = l.group.indexOf(l.id);
      if (l.group.length - 1 > b) {
        const p = l.group[b + 1], v = n.find((y) => y.id === p);
        if (v !== void 0) {
          const y = {
            col: v.position.x,
            row: v.position.y
          };
          j(p), P(y), w(y, p);
        }
      }
    } else {
      const b = l.direction === "across" ? { col: u.pos.col + 1, row: u.pos.row } : { col: u.pos.col, row: u.pos.row + 1 };
      P(b), w(b, l.id);
    }
  }, W = (C, b) => {
    const p = (D, M, H) => {
      const Y = D + M;
      return Y === -1 ? H - 1 : Y === H ? 0 : Y;
    };
    let { col: v, row: y } = u == null ? void 0 : u.pos;
    for (; ; ) {
      C === 1 || C === -1 ? v = p(v, C, t) : (b === 1 || b === -1) && (y = p(y, b, x));
      const D = o.find(
        // eslint-disable-next-line @typescript-eslint/no-loop-func
        (M) => M.pos.col === v && M.pos.row === y
      );
      if (D !== void 0)
        return D;
    }
  }, O = (C) => {
    if (l === void 0 || u === void 0)
      return;
    let b;
    switch (C) {
      case "Up":
        b = W(0, -1);
        break;
      case "Down":
        b = W(0, 1);
        break;
      case "Left":
        b = W(-1, 0);
        break;
      case "Right":
        b = W(1, 0);
        break;
      default:
        b = void 0;
    }
    b !== void 0 && (P(b.pos), b.clueIds.includes(l.id) ? w(b.pos, l.id) : (j(b.clueIds[0]), w(b.pos, b.clueIds[0])));
  }, oe = (C) => {
    if (!(l === void 0 || u === void 0) && [
      "ArrowUp",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "Backspace",
      "Delete",
      "Tab"
    ].includes(C.key)) {
      if (C.preventDefault(), C.stopPropagation(), ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(C.key))
        O(C.key.replace("Arrow", ""));
      else if (["Backspace", "Delete"].includes(C.key)) {
        J(u, void 0);
        const b = {
          ...u,
          guess: void 0
        }, p = ve(b, o);
        F(p), u.clueIds.forEach((v) => {
          const y = n.find((D) => D.id === v);
          if (y) {
            const D = ie(y, p);
            ee(y.group, D);
          }
        }), C.key === "Backspace" && N(), h(p);
      } else if (C.key === "Tab") {
        const b = n.findIndex((D) => D.selected);
        let p = 0;
        C.shiftKey ? p = b > 0 ? b - 1 : n.length - 1 : p = b < n.length - 1 ? b + 1 : 0;
        const v = n[p], y = {
          col: v.position.x,
          row: v.position.y
        };
        j(v.id), P(y), w(y, v.id);
      }
    }
  }, Z = (C) => {
    if (l === void 0 || u === void 0)
      return;
    const b = C.target.value.toUpperCase();
    if (Ie(b, e)) {
      J(u, b);
      const p = {
        ...u,
        guess: b
      }, v = ve(p, o);
      F(v), u.clueIds.forEach((y) => {
        const D = n.find((H) => H.id === y);
        ie(D, v) && ee(D.group, !0);
      }), K(), d !== void 0 && q() === !0 && d(), h(v);
    } else
      C.preventDefault();
  }, U = u !== void 0 ? He(u == null ? void 0 : u.pos) : void 0;
  return /* @__PURE__ */ k(
    "div",
    {
      className: g("Grid"),
      "data-testid": "grid",
      style: {
        minWidth: S,
        minHeight: $,
        width: S,
        height: $,
        aspectRatio: `${t} / ${x}`
      },
      children: [
        /* @__PURE__ */ k(
          "svg",
          {
            preserveAspectRatio: "xMinYMin",
            ref: A,
            viewBox: `0 0 ${S} ${$}`,
            children: [
              /* @__PURE__ */ a(
                "rect",
                {
                  className: g("Grid__background"),
                  onMouseDown: (C) => {
                    C.preventDefault();
                    const b = document.querySelector(".GridInput");
                    b !== null && b.blur();
                  },
                  width: S,
                  height: $,
                  x: "0",
                  y: "0"
                }
              ),
              o.map(({ clueIds: C, guess: b, num: p, pos: v }) => {
                const y = ao(v, u == null ? void 0 : u.pos), D = C.some(
                  (H) => l == null ? void 0 : l.group.includes(H)
                ), M = l !== void 0 ? C.indexOf(l.id) : -1;
                return /* @__PURE__ */ a(
                  Ye,
                  {
                    clueIds: C,
                    guess: b,
                    inputRef: s,
                    isHighlighted: D,
                    isSelected: y,
                    num: p,
                    onCellFocus: c,
                    pos: v,
                    selectedClueIndex: M
                  },
                  `${v.col},${v.row}`
                );
              }),
              /* @__PURE__ */ a(to, { clues: f })
            ]
          }
        ),
        /* @__PURE__ */ a(
          "div",
          {
            className: g("Grid__inputContainer"),
            style: {
              width: u !== void 0 ? L * R : void 0,
              height: u !== void 0 ? L * R : void 0,
              top: (U == null ? void 0 : U.yRect) !== void 0 ? U.yRect * R : void 0,
              left: (U == null ? void 0 : U.xRect) !== void 0 ? U.xRect * R : void 0
            },
            children: /* @__PURE__ */ a(
              Qe,
              {
                onChange: Z,
                onKeyDown: oe,
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
  const g = B(), u = _.useRef(null), l = z((E) => E.select), S = X((E) => E.select), $ = (E, I) => {
    d !== void 0 && d({
      pos: E,
      clueId: I
    });
  }, T = _.useCallback(() => {
    var I;
    const E = { col: n, row: f };
    S(r), l(E), $(E, r), (I = s == null ? void 0 : s.current) == null || I.focus({ preventScroll: !0 });
  }, [s]);
  return _.useEffect(() => {
    if (x && u.current !== null && t !== void 0 && t.current !== null) {
      const E = u.current.getBoundingClientRect(), I = t.current.getBoundingClientRect();
      je(E, I) || u.current.scrollIntoView({
        behavior: "auto",
        block: "nearest",
        inline: "nearest"
      });
    }
  }, [x]), /* @__PURE__ */ k(
    "div",
    {
      className: g(
        "Clue",
        o ? "Clue--answered" : null,
        i ? "Clue--highlighted" : null
      ),
      onClick: T,
      onKeyDown: (E) => {
        E.key === "Enter" && T();
      },
      role: "button",
      ref: u,
      tabIndex: 0,
      children: [
        /* @__PURE__ */ a("span", { className: g("Clue__num"), children: c }),
        /* @__PURE__ */ a(
          "span",
          {
            className: g("Clue__text"),
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
  const i = ho(), c = _.useRef(null), d = _.useRef(null), f = _.useRef(null), x = o.filter((l) => l.direction === "across").sort((l, S) => l.number - S.number), m = o.filter((l) => l.direction === "down").sort((l, S) => l.number - S.number), g = (l) => {
    if (s === void 0)
      return !1;
    const S = o.find(($) => $.id === s);
    return (S == null ? void 0 : S.group.includes(l.id)) ?? !1;
  }, u = (l) => i !== void 0 && ["md", "lg", "xl", "xxl"].includes(i) && s !== void 0 && l.group.includes(s) && l.id === l.group[0];
  return /* @__PURE__ */ k(
    "div",
    {
      className: "Clues",
      ref: c,
      style: { maxHeight: n },
      children: [
        /* @__PURE__ */ k("div", { className: "Clues__list Clues__list--across", ref: d, children: [
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
              isHighlighted: g(l),
              num: l.humanNumber,
              onCellFocus: r,
              row: l.position.y,
              scrollTo: u(l),
              text: l.clue
            },
            l.id
          )) })
        ] }),
        /* @__PURE__ */ k("div", { className: "Clues__list Clues__list--down", ref: f, children: [
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
              isHighlighted: g(l),
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
  const r = B(), s = e.map((f) => f.guess).join(""), i = o !== void 0 ? vo(o == null ? void 0 : o.toUpperCase(), s) : void 0;
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
  const n = B(), t = _o(e), r = 40;
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
    const f = B();
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
), Q = Eo;
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
  const i = B(), c = _.useRef(null), d = _.useRef(null), [f, x] = _.useState(""), [m, g] = _.useState(!1), u = f !== "" || m, l = n.length;
  _.useEffect(() => {
    var E;
    m || (E = c.current) == null || E.focus({ preventScroll: !0 });
  }, [m]);
  const S = () => {
    x(""), g(!1);
  }, $ = () => {
    var E;
    f !== "" && (x(
      (I) => I.split("").sort(() => 0.5 - Math.random()).join("")
    ), g(!0), (E = d.current) == null || E.focus({ preventScroll: !0 }));
  }, T = (E) => {
    var I;
    x((A) => (A + E).substring(0, l)), (I = c.current) == null || I.focus({ preventScroll: !0 });
  };
  return _.useEffect(() => {
    S();
  }, [o.id]), /* @__PURE__ */ k(
    "div",
    {
      className: i(
        "AnagramHelper",
        m ? "AnagramHelper--shuffling" : null
      ),
      style: s,
      children: [
        /* @__PURE__ */ a(
          Q,
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
            populatedLetters: n.map((E) => E.guess).join("")
          }
        ) : /* @__PURE__ */ k(ce, { children: [
          /* @__PURE__ */ a(
            "input",
            {
              autoComplete: "off",
              className: i("AnagramHelper__input"),
              maxLength: l,
              onChange: (E) => x(E.target.value),
              onKeyDown: (E) => {
                ["Enter", "NumpadEnter"].includes(E.code) ? (E.preventDefault(), $()) : E.code === "Escape" && (f === "" ? r() : S());
              },
              placeholder: "Enter letters...",
              ref: c,
              spellCheck: "false",
              value: f
            }
          ),
          /* @__PURE__ */ k(
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
        /* @__PURE__ */ k("div", { className: i("AnagramHelper__bottom"), children: [
          /* @__PURE__ */ k("div", { className: i("AnagramHelper__buttons"), children: [
            /* @__PURE__ */ a(Q, { disabled: !u, onClick: S, variant: "outlined", children: "Reset" }),
            /* @__PURE__ */ a(
              Q,
              {
                disabled: !u,
                onClick: $,
                onKeyDown: (E) => {
                  E.code === "Escape" && S();
                },
                ref: d,
                children: "Shuffle"
              }
            )
          ] }),
          /* @__PURE__ */ k("p", { className: i("AnagramHelper__clue"), children: [
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
                onClick: (E) => T(E),
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
const Le = typeof window < "u" ? Te : le;
function Se(e) {
  const o = ye(() => {
    throw new Error("Cannot call an event handler while rendering.");
  });
  return Le(() => {
    o.current = e;
  }, [e]), ne((...n) => {
    var t;
    return (t = o.current) == null ? void 0 : t.call(o, ...n);
  }, [o]);
}
function Ee(e, o, n, t) {
  const r = ye(o);
  Le(() => {
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
    (g) => n.serializer ? n.serializer(g) : JSON.stringify(g),
    [n]
  ), s = ne(
    (g) => {
      if (n.deserializer)
        return n.deserializer(g);
      if (g === "undefined")
        return;
      const u = o instanceof Function ? o() : o;
      let l;
      try {
        l = JSON.parse(g);
      } catch (S) {
        return console.error("Error parsing JSON:", S), u;
      }
      return l;
    },
    [n, o]
  ), i = ne(() => {
    const g = o instanceof Function ? o() : o;
    if (ue)
      return g;
    try {
      const u = window.localStorage.getItem(e);
      return u ? s(u) : g;
    } catch (u) {
      return console.warn(`Error reading localStorage key “${e}”:`, u), g;
    }
  }, [o, e, s]), [c, d] = ke(() => t ? i() : o instanceof Function ? o() : o), f = Se((g) => {
    ue && console.warn(
      `Tried setting localStorage key “${e}” even though environment is not a client`
    );
    try {
      const u = g instanceof Function ? g(i()) : g;
      window.localStorage.setItem(e, r(u)), d(u), window.dispatchEvent(new StorageEvent("local-storage", { key: e }));
    } catch (u) {
      console.warn(`Error setting localStorage key “${e}”:`, u);
    }
  }), x = Se(() => {
    ue && console.warn(
      `Tried removing localStorage key “${e}” even though environment is not a client`
    );
    const g = o instanceof Function ? o() : o;
    window.localStorage.removeItem(e), d(g), window.dispatchEvent(new StorageEvent("local-storage", { key: e }));
  });
  le(() => {
    d(i());
  }, [e]);
  const m = ne(
    (g) => {
      g.key && g.key !== e || d(i());
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
  const r = B(), [s, i] = _.useState(t);
  return _.useEffect(() => {
    const c = setTimeout(() => {
      s <= 1 ? o() : i((d) => d - 1);
    }, 1e3);
    return function() {
      clearTimeout(c);
    };
  }, [s]), /* @__PURE__ */ k("div", { className: r("Confirm"), children: [
    /* @__PURE__ */ k("div", { className: r("Confirm__buttonContainer"), children: [
      /* @__PURE__ */ a(Q, { onClick: o, variant: "outlined", children: "Cancel" }),
      /* @__PURE__ */ a(Q, { className: r("Confirm__button"), onClick: n, children: e })
    ] }),
    /* @__PURE__ */ k("span", { className: r("Confirm__timeout"), children: [
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
  const r = B(), s = _.useRef(null), i = _.useRef(null), c = _.useRef(null), [d, f] = _.useState(!1);
  _.useEffect(() => {
    const m = (g) => {
      const u = s.current !== null && !s.current.contains(g.target);
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
  return /* @__PURE__ */ k(
    "div",
    {
      className: ae(
        r("DropdownButton", d ? "DropdownButton--expanded" : null),
        e
      ),
      ref: s,
      children: [
        /* @__PURE__ */ k(
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
  // selectedClueHasHash,
  onCheckClueHash: f,
  disableAnagram: x = !1,
  disableGridChecks: m = !1
}) {
  const g = B(), u = o.find((w) => w.selected), [l, S] = _.useState(!1), [$, T] = _.useState(!1), [E, I] = _.useState(!1), A = z((w) => w.answerAll), R = z((w) => w.setCells), V = z((w) => w.checkComplete), P = X((w) => w.answerAll), F = X((w) => w.answerSome), j = (w) => {
    c(Ge(n, t, w));
  }, ee = (w, h) => {
    co(w, h).forEach((K) => {
      const W = o.find((O) => O.id === K);
      if (W) {
        const O = ie(W, h);
        F(W.group, O);
      }
    });
  }, q = (w, h) => {
    s !== void 0 && w.guess !== h && s({
      pos: w.pos,
      guess: h,
      previousGuess: w.guess
    });
  }, G = [
    {
      disabled: u === void 0,
      onClick: () => {
        if (u !== void 0) {
          s !== void 0 && re(u.group, e).forEach((N) => {
            N.guess !== void 0 && N.val !== N.guess && q(N, void 0);
          });
          const w = e.map((h) => u.group.filter(
            (K) => h.clueIds.includes(K)
          ).length > 0 ? {
            ...h,
            guess: h.guess === h.val ? h.val : void 0
          } : h);
          R(w), ee(u, w), j(w);
        }
      },
      text: "Check word"
    },
    {
      onClick: () => S(!0),
      text: "Check grid",
      disabled: m
    }
  ], J = [
    {
      disabled: u === void 0,
      onClick: () => {
        if (u !== void 0) {
          const w = e.map((h) => {
            const N = u.group.filter(
              (K) => h.clueIds.includes(K)
            );
            if (N.length > 0) {
              if (h.clueIds.length === 1)
                return q(h, void 0), {
                  ...h,
                  guess: void 0
                };
              const W = N[0].includes("across");
              if (ro(e, h, W))
                return q(h, void 0), {
                  ...h,
                  guess: void 0
                };
            }
            return h;
          });
          R(w), F(u.group, !1), j(w);
        }
      },
      text: "Clear word"
    },
    { onClick: () => I(!0), text: "Clear grid" }
  ];
  return l ? /* @__PURE__ */ a("div", { className: g("Controls"), children: /* @__PURE__ */ a(
    de,
    {
      buttonText: "Confirm check grid",
      onCancel: () => S(!1),
      onConfirm: () => {
        s !== void 0 && e.forEach((h) => {
          h.guess !== void 0 && h.val !== h.guess && q(h, void 0);
        });
        const w = e.map((h) => ({
          ...h,
          guess: h.guess === h.val ? h.val : void 0
        }));
        R(w), o.forEach((h) => {
          const N = ie(h, w);
          F(h.group, N);
        }), S(!1), j(w);
      }
    }
  ) }) : $ ? /* @__PURE__ */ a("div", { className: g("Controls"), children: /* @__PURE__ */ a(
    de,
    {
      buttonText: "Confirm reveal grid",
      onCancel: () => T(!1),
      onConfirm: () => {
        s !== void 0 && e.forEach((h) => {
          h.val !== h.guess && q(h, h.val);
        }), A(!0), P(!0), T(!1), i !== void 0 && V() === !0 && i();
        const w = e.map((h) => ({
          ...h,
          guess: h.val
        }));
        j(w);
      }
    }
  ) }) : E ? /* @__PURE__ */ a("div", { className: g("Controls"), children: /* @__PURE__ */ a(
    de,
    {
      buttonText: "Confirm clear grid",
      onCancel: () => I(!1),
      onConfirm: () => {
        s !== void 0 && e.forEach((w) => {
          w.guess !== void 0 && q(w, void 0);
        }), A(!1), P(!1), I(!1), j([]);
      }
    }
  ) }) : /* @__PURE__ */ k("div", { className: g("Controls"), children: [
    /* @__PURE__ */ k("div", { className: g("Controls__buttons"), children: [
      /* @__PURE__ */ a(Q, { disabled: x, onClick: r, children: "Anagram helper" }),
      d && /* @__PURE__ */ a(Ne, { menu: G, text: "Check" }),
      /* @__PURE__ */ a(Q, { onClick: f, children: "Check clue hash" })
    ] }),
    /* @__PURE__ */ a(Ne, { id: "clear-control", menu: J, text: "Clear" })
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
function Ho({
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
  disableAllReveals: g = !1,
  disableAnagram: u = !1,
  disableLetterChecks: l = !1,
  disableGridChecks: S = !1,
  checkClueHash: $
}) {
  const T = B(), [E, I] = ko(
    `crosswords.${r}`,
    Ae(t.dimensions.cols, t.dimensions.rows)
  ), [A] = Do(), R = X((p) => p.clues), V = z((p) => p.cells), P = z((p) => p.select), F = X((p) => p.select), j = z((p) => p.setCells), ee = X((p) => p.setClues), q = z((p) => p.checkComplete), G = _.useMemo(() => {
    try {
      const p = so({
        cols: t.dimensions.cols,
        rows: t.dimensions.rows,
        entries: t.entries,
        guessGrid: s ?? E,
        allowMissingSolutions: o
      }), v = lo(t.entries, p);
      return {
        cells: p,
        clues: v,
        error: null
      };
    } catch (p) {
      return { cells: null, clues: null, error: p instanceof Error ? p.message : "An unknown error occurred" };
    }
  }, [t, s, o]), J = _.useMemo(
    () => V.length === 0 && G.cells !== null ? G.cells : V,
    [V, G.cells]
  ), w = _.useMemo(
    () => R.length === 0 && G.clues !== null ? G.clues : R,
    [R, G.clues]
  ), h = w.find((p) => p.selected), N = (h == null ? void 0 : h.group.length) === 1 ? h : w.find((p) => p.id === (h == null ? void 0 : h.group[0])), [K, W] = _.useState(!1), O = t.dimensions.rows * L + t.dimensions.rows + 1, oe = t.dimensions.cols * L + t.dimensions.cols + 1, Z = _.useRef(null);
  if (_.useEffect(() => {
    G.cells !== null && (j(G.cells), q());
  }, [G.cells]), _.useEffect(() => {
    G.clues !== null && ee(G.clues);
  }, [G.clues]), _.useEffect(() => {
    w.find((v) => v.selected) === void 0 && F(A.replace("#", ""));
  }, [A]), s !== void 0 && !ze(
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
          height: O,
          width: oe,
          aspectRatio: `${t.dimensions.cols} / ${t.dimensions.rows}`
        }
      }
    ) });
  if (G.error !== null)
    return /* @__PURE__ */ a("div", { className: T("Crossword"), children: /* @__PURE__ */ a(
      me,
      {
        message: G.error,
        style: {
          height: O,
          width: oe,
          aspectRatio: `${t.dimensions.cols} / ${t.dimensions.rows}`
        }
      }
    ) });
  const U = (p, v) => {
    c !== void 0 && c({
      pos: p,
      clueId: v
    });
  }, C = _.useCallback(
    (p) => {
      var H;
      const v = w.findIndex((Y) => Y.selected), y = p ? v < w.length - 1 ? v + 1 : 0 : v > 0 ? v - 1 : w.length - 1, D = w[y], M = {
        col: D.position.x,
        row: D.position.y
      };
      F(D.id), P(M), U(M, D.id), (H = Z == null ? void 0 : Z.current) == null || H.focus({ preventScroll: !0 });
    },
    [w, F, P, U]
  ), b = (p) => {
    p == null || p.preventDefault(), p == null || p.stopPropagation();
    const v = w.find((H) => H.selected);
    if (!v) {
      console.warn("Attempted to check hash but no clue selected.");
      return;
    }
    if (!$) {
      console.warn(
        "Attempted to check hash but `checkClueHash` prop is not provided."
      );
      return;
    }
    if (!v.solutionPoseidonHash) {
      console.warn("Selected clue does not have a hash to check against."), m && m(v.id, !1);
      return;
    }
    const M = [...re(v.group, J)].sort((H, Y) => v.direction === "across" ? H.pos.col - Y.pos.col : H.pos.row - Y.pos.row).map((H) => H.guess ?? "").join("");
    console.log("currentGuess for check:", M);
    try {
      const H = $(
        v.id,
        M,
        v.solutionPoseidonHash
      );
      console.log("Hash check result:", H), m && m(v.id, H);
    } catch (H) {
      console.error("Error during hash check:", H), m && m(v.id, !1);
    }
  };
  return /* @__PURE__ */ k("div", { className: T("Crossword"), children: [
    /* @__PURE__ */ k("div", { className: T("Crossword__gridAndControls"), children: [
      /* @__PURE__ */ a(
        "div",
        {
          className: T("Crossword__gridContainer"),
          style: {
            maxWidth: t.dimensions.cols * L + t.dimensions.cols + 1
          },
          children: K && N !== void 0 ? /* @__PURE__ */ a(
            yo,
            {
              allowedHtmlTags: e,
              clue: N,
              groupCells: re(N.group, J),
              groupSeparators: io(N.group, w),
              onClose: () => W(!1),
              style: {
                height: O,
                maxHeight: O,
                width: oe,
                maxWidth: oe
              }
            }
          ) : /* @__PURE__ */ k(ce, { children: [
            x !== "never" ? /* @__PURE__ */ a(
              Je,
              {
                allowedTags: e,
                num: (N == null ? void 0 : N.group.length) === 1 ? `${N.number}${N.direction.charAt(0)}` : N == null ? void 0 : N.humanNumber,
                onMoveNext: () => C(!0),
                onMovePrev: () => C(!1),
                show: x,
                text: N == null ? void 0 : N.clue
              }
            ) : null,
            /* @__PURE__ */ a(
              uo,
              {
                cellMatcher: n,
                cells: J,
                clues: w,
                cols: t.dimensions.cols,
                guessGrid: E,
                inputRef: Z,
                onCellChange: i,
                onCellFocus: c,
                onComplete: d,
                rawClues: t.entries,
                rows: t.dimensions.rows,
                setGuessGrid: f ?? I
              }
            )
          ] })
        }
      ),
      /* @__PURE__ */ a(
        Go,
        {
          cells: J,
          clues: w,
          gridCols: t.dimensions.cols,
          gridRows: t.dimensions.rows,
          onAnagramHelperClick: () => W((p) => !p),
          onCellChange: i,
          onComplete: d,
          onCheckClueHash: b,
          setGuessGrid: f ?? I,
          solutionsAvailable: t.solutionAvailable,
          selectedClueHasHash: !!(h != null && h.solutionPoseidonHash),
          disableAllReveals: g,
          disableAnagram: u,
          disableLetterChecks: l,
          disableGridChecks: S
        }
      )
    ] }),
    /* @__PURE__ */ a(
      mo,
      {
        allowedHtmlTags: e,
        entries: w,
        gridHeight: O,
        inputRef: Z,
        onCellFocus: c,
        selectedClueId: h == null ? void 0 : h.id
      }
    )
  ] });
}
function Ro({
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
  theme: g = "blue"
}) {
  const u = B();
  return /* @__PURE__ */ a(
    "div",
    {
      className: ae(
        u("MyCrossword", `MyCrossword--${g}Theme`),
        t
      ),
      children: /* @__PURE__ */ a(
        Ho,
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
  Ro as MyCrossword
};
