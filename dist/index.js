import * as r from "react";
import ae from "react";
var F = { exports: {} }, x = {};
var G;
function le() {
  if (G) return x;
  G = 1;
  var n = /* @__PURE__ */ Symbol.for("react.transitional.element"), a = /* @__PURE__ */ Symbol.for("react.fragment");
  function c(p, i, u) {
    var h = null;
    if (u !== void 0 && (h = "" + u), i.key !== void 0 && (h = "" + i.key), "key" in i) {
      u = {};
      for (var d in i)
        d !== "key" && (u[d] = i[d]);
    } else u = i;
    return i = u.ref, {
      $$typeof: n,
      type: p,
      key: h,
      ref: i !== void 0 ? i : null,
      props: u
    };
  }
  return x.Fragment = a, x.jsx = c, x.jsxs = c, x;
}
var k = {};
var X;
function se() {
  return X || (X = 1, process.env.NODE_ENV !== "production" && (function() {
    function n(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === re ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case E:
          return "Fragment";
        case O:
          return "Profiler";
        case w:
          return "StrictMode";
        case M:
          return "Suspense";
        case g:
          return "SuspenseList";
        case te:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case L:
            return "Portal";
          case S:
            return e.displayName || "Context";
          case A:
            return (e._context.displayName || "Context") + ".Consumer";
          case N:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case ee:
            return t = e.displayName || null, t !== null ? t : n(e.type) || "Memo";
          case I:
            t = e._payload, e = e._init;
            try {
              return n(e(t));
            } catch {
            }
        }
      return null;
    }
    function a(e) {
      return "" + e;
    }
    function c(e) {
      try {
        a(e);
        var t = !1;
      } catch {
        t = !0;
      }
      if (t) {
        t = console;
        var o = t.error, l = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return o.call(
          t,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          l
        ), a(e);
      }
    }
    function p(e) {
      if (e === E) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === I)
        return "<...>";
      try {
        var t = n(e);
        return t ? "<" + t + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var e = Y.A;
      return e === null ? null : e.getOwner();
    }
    function u() {
      return Error("react-stack-top-frame");
    }
    function h(e) {
      if (q.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function d(e, t) {
      function o() {
        z || (z = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          t
        ));
      }
      o.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: o,
        configurable: !0
      });
    }
    function v() {
      var e = n(this.type);
      return U[e] || (U[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function P(e, t, o, l, C, D) {
      var s = o.ref;
      return e = {
        $$typeof: y,
        type: e,
        key: t,
        props: o,
        _owner: l
      }, (s !== void 0 ? s : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: v
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: C
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: D
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function R(e, t, o, l, C, D) {
      var s = t.children;
      if (s !== void 0)
        if (l)
          if (ne(s)) {
            for (l = 0; l < s.length; l++)
              T(s[l]);
            Object.freeze && Object.freeze(s);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else T(s);
      if (q.call(t, "key")) {
        s = n(e);
        var b = Object.keys(t).filter(function(oe) {
          return oe !== "key";
        });
        l = 0 < b.length ? "{key: someKey, " + b.join(": ..., ") + ": ...}" : "{key: someKey}", H[s + l] || (b = 0 < b.length ? "{" + b.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          l,
          s,
          b,
          s
        ), H[s + l] = !0);
      }
      if (s = null, o !== void 0 && (c(o), s = "" + o), h(t) && (c(t.key), s = "" + t.key), "key" in t) {
        o = {};
        for (var W in t)
          W !== "key" && (o[W] = t[W]);
      } else o = t;
      return s && d(
        o,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), P(
        e,
        s,
        o,
        i(),
        C,
        D
      );
    }
    function T(e) {
      j(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === I && (e._payload.status === "fulfilled" ? j(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function j(e) {
      return typeof e == "object" && e !== null && e.$$typeof === y;
    }
    var f = ae, y = /* @__PURE__ */ Symbol.for("react.transitional.element"), L = /* @__PURE__ */ Symbol.for("react.portal"), E = /* @__PURE__ */ Symbol.for("react.fragment"), w = /* @__PURE__ */ Symbol.for("react.strict_mode"), O = /* @__PURE__ */ Symbol.for("react.profiler"), A = /* @__PURE__ */ Symbol.for("react.consumer"), S = /* @__PURE__ */ Symbol.for("react.context"), N = /* @__PURE__ */ Symbol.for("react.forward_ref"), M = /* @__PURE__ */ Symbol.for("react.suspense"), g = /* @__PURE__ */ Symbol.for("react.suspense_list"), ee = /* @__PURE__ */ Symbol.for("react.memo"), I = /* @__PURE__ */ Symbol.for("react.lazy"), te = /* @__PURE__ */ Symbol.for("react.activity"), re = /* @__PURE__ */ Symbol.for("react.client.reference"), Y = f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, q = Object.prototype.hasOwnProperty, ne = Array.isArray, $ = console.createTask ? console.createTask : function() {
      return null;
    };
    f = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var z, U = {}, V = f.react_stack_bottom_frame.bind(
      f,
      u
    )(), J = $(p(u)), H = {};
    k.Fragment = E, k.jsx = function(e, t, o) {
      var l = 1e4 > Y.recentlyCreatedOwnerStacks++;
      return R(
        e,
        t,
        o,
        !1,
        l ? Error("react-stack-top-frame") : V,
        l ? $(p(e)) : J
      );
    }, k.jsxs = function(e, t, o) {
      var l = 1e4 > Y.recentlyCreatedOwnerStacks++;
      return R(
        e,
        t,
        o,
        !0,
        l ? Error("react-stack-top-frame") : V,
        l ? $(p(e)) : J
      );
    };
  })()), k;
}
var Z;
function ie() {
  return Z || (Z = 1, process.env.NODE_ENV === "production" ? F.exports = le() : F.exports = se()), F.exports;
}
var m = ie();
const ce = (n) => /* @__PURE__ */ r.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...n }, /* @__PURE__ */ r.createElement("g", { clipPath: "url(#clip0_847_25288)" }, /* @__PURE__ */ r.createElement("path", { d: "M2.8291 13.1707L13.1717 2.82814", stroke: "#F1F1F1", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ r.createElement("path", { d: "M2.8291 2.82928L13.1717 13.1719", stroke: "#F1F1F1", strokeLinecap: "round", strokeLinejoin: "round" })), /* @__PURE__ */ r.createElement("defs", null, /* @__PURE__ */ r.createElement("clipPath", { id: "clip0_847_25288" }, /* @__PURE__ */ r.createElement("rect", { width: 16, height: 16, fill: "white" })))), ue = (n) => /* @__PURE__ */ r.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...n }, /* @__PURE__ */ r.createElement("g", { clipPath: "url(#clip0_1177_7929)" }, /* @__PURE__ */ r.createElement("path", { d: "M18.7245 4.58088C18.9187 4.45241 19.1834 4.47435 19.3544 4.64533C19.5253 4.81629 19.5463 5.08017 19.4179 5.27424L19.3544 5.35236L12.706 11.9998L19.3535 18.6473L19.4179 18.7254C19.5464 18.9195 19.5244 19.1833 19.3535 19.3543C19.1825 19.5252 18.9186 19.5472 18.7245 19.4188L18.6464 19.3543L11.999 12.7069L5.35345 19.3533C5.15822 19.5485 4.84167 19.5485 4.64642 19.3533C4.45118 19.1581 4.45121 18.8416 4.64642 18.6463L11.2919 11.9998L4.64642 5.35432C4.4512 5.1591 4.45129 4.84256 4.64642 4.64728C4.84168 4.45202 5.15819 4.45202 5.35345 4.64728L11.999 11.2928L18.6464 4.64533L18.7245 4.58088Z", fill: "#F1F1F1" })), /* @__PURE__ */ r.createElement("defs", null, /* @__PURE__ */ r.createElement("clipPath", { id: "clip0_1177_7929" }, /* @__PURE__ */ r.createElement("rect", { width: 16, height: 16, fill: "white", transform: "translate(4 4)" })))), fe = (n) => /* @__PURE__ */ r.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...n }, /* @__PURE__ */ r.createElement("g", { clipPath: "url(#clip0_355_4264)" }, /* @__PURE__ */ r.createElement("path", { d: "M4 8L12 8", stroke: "#F1F1F1", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ r.createElement("path", { d: "M8 4L8 12", stroke: "#F1F1F1", strokeLinecap: "round", strokeLinejoin: "round" })), /* @__PURE__ */ r.createElement("defs", null, /* @__PURE__ */ r.createElement("clipPath", { id: "clip0_355_4264" }, /* @__PURE__ */ r.createElement("rect", { width: 16, height: 16, fill: "white" })))), de = (n) => /* @__PURE__ */ r.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...n }, /* @__PURE__ */ r.createElement("g", { clipPath: "url(#clip0_7521_33583)" }, /* @__PURE__ */ r.createElement("path", { d: "M5 12L19 12", stroke: "#F1F1F1", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ r.createElement("path", { d: "M12 5L12 19", stroke: "#F1F1F1", strokeLinecap: "round", strokeLinejoin: "round" })), /* @__PURE__ */ r.createElement("defs", null, /* @__PURE__ */ r.createElement("clipPath", { id: "clip0_7521_33583" }, /* @__PURE__ */ r.createElement("rect", { width: 24, height: 24, fill: "white" })))), me = (n) => /* @__PURE__ */ r.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...n }, /* @__PURE__ */ r.createElement("path", { d: "M12.9389 8.0127H12.9479", stroke: "#F1F1F1", strokeWidth: 2.5, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ r.createElement("path", { d: "M7.93007 8.01288H7.93907", stroke: "#F1F1F1", strokeWidth: 2.5, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ r.createElement("path", { d: "M2.92128 8.0127H2.93028", stroke: "#F1F1F1", strokeWidth: 2.5, strokeLinecap: "round", strokeLinejoin: "round" })), pe = (n) => /* @__PURE__ */ r.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...n }, /* @__PURE__ */ r.createElement("path", { d: "M12.3535 17.0214C12.1582 17.2164 11.8417 17.2166 11.6465 17.0214C11.4516 16.8261 11.4515 16.5095 11.6465 16.3143L15.4619 12.4999L7.33398 12.4999C7.05784 12.4999 6.83398 12.276 6.83398 11.9999C6.83407 11.7238 7.05789 11.4999 7.33398 11.4999L15.458 11.4999L11.6465 7.68834L11.583 7.60924C11.4552 7.41532 11.476 7.15209 11.6465 6.98131C11.8173 6.81053 12.0813 6.78887 12.2754 6.91686L12.3535 6.98131L17.0156 11.6424C17.064 11.6896 17.1037 11.746 17.1299 11.8094C17.1363 11.8249 17.1398 11.8414 17.1445 11.8573C17.1581 11.9026 17.167 11.9501 17.167 11.9999V12.0018C17.1668 12.1295 17.1178 12.2569 17.0205 12.3544L12.3535 17.0214Z", fill: "#F1F1F1" })), B = {
  close: { 16: ce, 24: ue },
  plus: { 16: fe, 24: de },
  more: { 16: me },
  //  16
  arrowNext: { 24: pe }
  //  24
}, he = "inline-flex select-none items-center justify-center rounded-lg transition disabled:cursor-not-allowed", Ee = {
  32: "h-8 text-[13px] leading-4 font-normal",
  44: "h-11 text-[14px] leading-[18px] font-medium"
}, Q = {
  32: "px-4",
  44: "px-5"
}, we = {
  32: "gap-1",
  44: "gap-2"
}, ve = {
  primary: "bg-[#1361E6] text-white hover:bg-[#1361E6]/80 disabled:bg-[#1361E6]/40 disabled:text-white/40",
  secondary: "bg-white/20 text-white hover:bg-white/30 disabled:bg-white/10 disabled:text-white/40",
  outline: "bg-transparent text-white/80 border border-white/20 hover:bg-white/20 hover:text-white disabled:text-white/40 disabled:hover:bg-transparent",
  ghost: "bg-transparent text-white/80 hover:bg-white/20 hover:text-white disabled:text-white/40 disabled:hover:bg-transparent"
}, K = {
  32: "h-4 w-4",
  44: "h-6 w-6"
};
function _(...n) {
  return n.filter(Boolean).join(" ");
}
function be({ sizeClass: n }) {
  return /* @__PURE__ */ m.jsx(
    "span",
    {
      className: _(
        "inline-block rounded-full border border-current border-t-transparent animate-spin",
        n
      ),
      "aria-hidden": "true"
    }
  );
}
function _e(n, a, c) {
  if (!c || a === "none" || a === "center")
    return Q[n];
  if (n === 32) {
    if (a === "left") return "pl-3 pr-4";
    if (a === "right") return "pl-4 pr-3";
  }
  return a === "left" ? "pl-3 pr-5" : a === "right" ? "pl-5 pr-3" : Q[n];
}
function xe({
  variant: n = "primary",
  height: a = 44,
  shape: c = "rect",
  fullWidth: p,
  isLoading: i,
  disabled: u,
  className: h,
  children: d,
  iconName: v,
  icon: P,
  iconPosition: R = "none",
  type: T,
  ...j
}) {
  const f = c === "square" ? "center" : R, y = a === 32 ? 16 : 24, L = v ? B[v][y] ?? B[v][24] ?? B[v][16] ?? null : null, E = P ?? (L ? /* @__PURE__ */ m.jsx(L, { className: "h-full w-full" }) : null), w = !!E && f !== "none", O = typeof d < "u" && d !== null && d !== "", A = c === "square" || w && f === "center", S = !!u || !!i, N = a === 32 ? "w-8" : "w-11", M = _(
    he,
    Ee[a],
    ve[n],
    c === "rect" && _e(a, f, w),
    c === "square" && _("px-0", N),
    p && c !== "square" && "w-full",
    h
  ), g = () => E ? /* @__PURE__ */ m.jsx(
    "span",
    {
      className: _(
        "inline-flex items-center justify-center",
        K[a]
      ),
      children: E
    }
  ) : null;
  return /* @__PURE__ */ m.jsxs(
    "button",
    {
      ...j,
      type: T ?? "button",
      disabled: S,
      "aria-disabled": S,
      "aria-busy": i || void 0,
      className: _(M, i && "relative"),
      children: [
        /* @__PURE__ */ m.jsxs(
          "span",
          {
            className: _(
              "inline-flex items-center justify-center",
              we[a],
              i && "opacity-0"
            ),
            children: [
              w && f === "left" ? g() : null,
              !A && O ? /* @__PURE__ */ m.jsx("span", { className: "inline-flex", children: d }) : null,
              w && f === "right" ? g() : null,
              w && f === "center" ? g() : null
            ]
          }
        ),
        i ? /* @__PURE__ */ m.jsx("span", { className: "absolute inset-0 inline-flex items-center justify-center", children: /* @__PURE__ */ m.jsx(be, { sizeClass: K[a] }) }) : null
      ]
    }
  );
}
export {
  xe as Button,
  B as ICONS
};
