import * as n from "react";
import ae from "react";
var N = { exports: {} }, R = {};
var G;
function se() {
  if (G) return R;
  G = 1;
  var r = /* @__PURE__ */ Symbol.for("react.transitional.element"), o = /* @__PURE__ */ Symbol.for("react.fragment");
  function c(p, a, u) {
    var h = null;
    if (u !== void 0 && (h = "" + u), a.key !== void 0 && (h = "" + a.key), "key" in a) {
      u = {};
      for (var f in a)
        f !== "key" && (u[f] = a[f]);
    } else u = a;
    return a = u.ref, {
      $$typeof: r,
      type: p,
      key: h,
      ref: a !== void 0 ? a : null,
      props: u
    };
  }
  return R.Fragment = o, R.jsx = c, R.jsxs = c, R;
}
var L = {};
var X;
function ie() {
  return X || (X = 1, process.env.NODE_ENV !== "production" && (function() {
    function r(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === ne ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case _:
          return "Fragment";
        case k:
          return "Profiler";
        case S:
          return "StrictMode";
        case P:
          return "Suspense";
        case V:
          return "SuspenseList";
        case re:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case w:
            return "Portal";
          case F:
            return e.displayName || "Context";
          case v:
            return (e._context.displayName || "Context") + ".Consumer";
          case M:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case H:
            return t = e.displayName || null, t !== null ? t : r(e.type) || "Memo";
          case C:
            t = e._payload, e = e._init;
            try {
              return r(e(t));
            } catch {
            }
        }
      return null;
    }
    function o(e) {
      return "" + e;
    }
    function c(e) {
      try {
        o(e);
        var t = !1;
      } catch {
        t = !0;
      }
      if (t) {
        t = console;
        var l = t.error, s = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return l.call(
          t,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          s
        ), o(e);
      }
    }
    function p(e) {
      if (e === _) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === C)
        return "<...>";
      try {
        var t = r(e);
        return t ? "<" + t + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var e = I.A;
      return e === null ? null : e.getOwner();
    }
    function u() {
      return Error("react-stack-top-frame");
    }
    function h(e) {
      if (D.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function f(e, t) {
      function l() {
        Z || (Z = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          t
        ));
      }
      l.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: l,
        configurable: !0
      });
    }
    function m() {
      var e = r(this.type);
      return q[e] || (q[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function g(e, t, l, s, O, B) {
      var i = l.ref;
      return e = {
        $$typeof: y,
        type: e,
        key: t,
        props: l,
        _owner: s
      }, (i !== void 0 ? i : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: m
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
        value: O
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: B
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function j(e, t, l, s, O, B) {
      var i = t.children;
      if (i !== void 0)
        if (s)
          if (oe(i)) {
            for (s = 0; s < i.length; s++)
              A(i[s]);
            Object.freeze && Object.freeze(i);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else A(i);
      if (D.call(t, "key")) {
        i = r(e);
        var b = Object.keys(t).filter(function(le) {
          return le !== "key";
        });
        s = 0 < b.length ? "{key: someKey, " + b.join(": ..., ") + ": ...}" : "{key: someKey}", J[i + s] || (b = 0 < b.length ? "{" + b.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          s,
          i,
          b,
          i
        ), J[i + s] = !0);
      }
      if (i = null, l !== void 0 && (c(l), i = "" + l), h(t) && (c(t.key), i = "" + t.key), "key" in t) {
        l = {};
        for (var $ in t)
          $ !== "key" && (l[$] = t[$]);
      } else l = t;
      return i && f(
        l,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), g(
        e,
        i,
        l,
        a(),
        O,
        B
      );
    }
    function A(e) {
      T(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === C && (e._payload.status === "fulfilled" ? T(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function T(e) {
      return typeof e == "object" && e !== null && e.$$typeof === y;
    }
    var E = ae, y = /* @__PURE__ */ Symbol.for("react.transitional.element"), w = /* @__PURE__ */ Symbol.for("react.portal"), _ = /* @__PURE__ */ Symbol.for("react.fragment"), S = /* @__PURE__ */ Symbol.for("react.strict_mode"), k = /* @__PURE__ */ Symbol.for("react.profiler"), v = /* @__PURE__ */ Symbol.for("react.consumer"), F = /* @__PURE__ */ Symbol.for("react.context"), M = /* @__PURE__ */ Symbol.for("react.forward_ref"), P = /* @__PURE__ */ Symbol.for("react.suspense"), V = /* @__PURE__ */ Symbol.for("react.suspense_list"), H = /* @__PURE__ */ Symbol.for("react.memo"), C = /* @__PURE__ */ Symbol.for("react.lazy"), re = /* @__PURE__ */ Symbol.for("react.activity"), ne = /* @__PURE__ */ Symbol.for("react.client.reference"), I = E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, D = Object.prototype.hasOwnProperty, oe = Array.isArray, Y = console.createTask ? console.createTask : function() {
      return null;
    };
    E = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var Z, q = {}, z = E.react_stack_bottom_frame.bind(
      E,
      u
    )(), U = Y(p(u)), J = {};
    L.Fragment = _, L.jsx = function(e, t, l) {
      var s = 1e4 > I.recentlyCreatedOwnerStacks++;
      return j(
        e,
        t,
        l,
        !1,
        s ? Error("react-stack-top-frame") : z,
        s ? Y(p(e)) : U
      );
    }, L.jsxs = function(e, t, l) {
      var s = 1e4 > I.recentlyCreatedOwnerStacks++;
      return j(
        e,
        t,
        l,
        !0,
        s ? Error("react-stack-top-frame") : z,
        s ? Y(p(e)) : U
      );
    };
  })()), L;
}
var Q;
function ce() {
  return Q || (Q = 1, process.env.NODE_ENV === "production" ? N.exports = se() : N.exports = ie()), N.exports;
}
var d = ce();
const ue = (r) => /* @__PURE__ */ n.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ n.createElement("g", { clipPath: "url(#clip0_847_25288)" }, /* @__PURE__ */ n.createElement("path", { d: "M2.8291 13.1707L13.1717 2.82814", stroke: "#F1F1F1", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ n.createElement("path", { d: "M2.8291 2.82928L13.1717 13.1719", stroke: "#F1F1F1", strokeLinecap: "round", strokeLinejoin: "round" })), /* @__PURE__ */ n.createElement("defs", null, /* @__PURE__ */ n.createElement("clipPath", { id: "clip0_847_25288" }, /* @__PURE__ */ n.createElement("rect", { width: 16, height: 16, fill: "white" })))), de = (r) => /* @__PURE__ */ n.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ n.createElement("path", { d: "M18.7245 4.58088C18.9187 4.45241 19.1834 4.47435 19.3544 4.64533C19.5253 4.81629 19.5463 5.08017 19.4179 5.27424L19.3544 5.35236L12.706 11.9998L19.3535 18.6473L19.4179 18.7254C19.5464 18.9195 19.5244 19.1833 19.3535 19.3543C19.1825 19.5252 18.9186 19.5472 18.7245 19.4188L18.6464 19.3543L11.999 12.7069L5.35345 19.3533C5.15822 19.5485 4.84167 19.5485 4.64642 19.3533C4.45118 19.1581 4.45121 18.8416 4.64642 18.6463L11.2919 11.9998L4.64642 5.35432C4.4512 5.1591 4.45129 4.84256 4.64642 4.64728C4.84168 4.45202 5.15819 4.45202 5.35345 4.64728L11.999 11.2928L18.6464 4.64533L18.7245 4.58088Z", fill: "currentColor" })), fe = (r) => /* @__PURE__ */ n.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ n.createElement("g", { clipPath: "url(#clip0_355_4264)" }, /* @__PURE__ */ n.createElement("path", { d: "M4 8L12 8", stroke: "#F1F1F1", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ n.createElement("path", { d: "M8 4L8 12", stroke: "#F1F1F1", strokeLinecap: "round", strokeLinejoin: "round" })), /* @__PURE__ */ n.createElement("defs", null, /* @__PURE__ */ n.createElement("clipPath", { id: "clip0_355_4264" }, /* @__PURE__ */ n.createElement("rect", { width: 16, height: 16, fill: "white" })))), pe = (r) => /* @__PURE__ */ n.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ n.createElement("g", { clipPath: "url(#clip0_7521_33583)" }, /* @__PURE__ */ n.createElement("path", { d: "M5 12L19 12", stroke: "#F1F1F1", strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ n.createElement("path", { d: "M12 5L12 19", stroke: "#F1F1F1", strokeLinecap: "round", strokeLinejoin: "round" })), /* @__PURE__ */ n.createElement("defs", null, /* @__PURE__ */ n.createElement("clipPath", { id: "clip0_7521_33583" }, /* @__PURE__ */ n.createElement("rect", { width: 24, height: 24, fill: "white" })))), he = (r) => /* @__PURE__ */ n.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ n.createElement("path", { d: "M12.9389 8.0127H12.9479", stroke: "#F1F1F1", strokeWidth: 2.5, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ n.createElement("path", { d: "M7.93007 8.01288H7.93907", stroke: "#F1F1F1", strokeWidth: 2.5, strokeLinecap: "round", strokeLinejoin: "round" }), /* @__PURE__ */ n.createElement("path", { d: "M2.92128 8.0127H2.93028", stroke: "#F1F1F1", strokeWidth: 2.5, strokeLinecap: "round", strokeLinejoin: "round" })), me = (r) => /* @__PURE__ */ n.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ n.createElement("path", { d: "M12.3535 17.0214C12.1582 17.2164 11.8417 17.2166 11.6465 17.0214C11.4516 16.8261 11.4515 16.5095 11.6465 16.3143L15.4619 12.4999L7.33398 12.4999C7.05784 12.4999 6.83398 12.276 6.83398 11.9999C6.83407 11.7238 7.05789 11.4999 7.33398 11.4999L15.458 11.4999L11.6465 7.68834L11.583 7.60924C11.4552 7.41532 11.476 7.15209 11.6465 6.98131C11.8173 6.81053 12.0813 6.78887 12.2754 6.91686L12.3535 6.98131L17.0156 11.6424C17.064 11.6896 17.1037 11.746 17.1299 11.8094C17.1363 11.8249 17.1398 11.8414 17.1445 11.8573C17.1581 11.9026 17.167 11.9501 17.167 11.9999V12.0018C17.1668 12.1295 17.1178 12.2569 17.0205 12.3544L12.3535 17.0214Z", fill: "currentColor" })), we = (r) => /* @__PURE__ */ n.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ n.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8 13C9.65685 13 11 14.3431 11 16V18C11 19.6569 9.65685 21 8 21H6C4.34315 21 3 19.6569 3 18V16C3 14.3431 4.34315 13 6 13H8ZM6 14C4.89543 14 4 14.8954 4 16V18C4 19.0357 4.78722 19.887 5.7959 19.9893L6 20H8C9.10457 20 10 19.1046 10 18V16C10 14.8954 9.10457 14 8 14H6Z", fill: "currentColor" }), /* @__PURE__ */ n.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18 13C19.6569 13 21 14.3431 21 16V18C21 19.6569 19.6569 21 18 21H16C14.3431 21 13 19.6569 13 18V16C13 14.3431 14.3431 13 16 13H18ZM16 14C14.8954 14 14 14.8954 14 16V18C14 19.0357 14.7872 19.887 15.7959 19.9893L16 20H18C19.1046 20 20 19.1046 20 18V16C20 14.8954 19.1046 14 18 14H16Z", fill: "currentColor" }), /* @__PURE__ */ n.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8 3C9.65685 3 11 4.34315 11 6V8C11 9.65685 9.65685 11 8 11H6C4.34315 11 3 9.65685 3 8V6C3 4.34315 4.34315 3 6 3H8ZM6 4C4.89543 4 4 4.89543 4 6V8C4 9.03565 4.78722 9.887 5.7959 9.98926L6 10H8C9.10457 10 10 9.10457 10 8V6C10 4.89543 9.10457 4 8 4H6Z", fill: "currentColor" }), /* @__PURE__ */ n.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18 3C19.6569 3 21 4.34315 21 6V8C21 9.65685 19.6569 11 18 11H16C14.3431 11 13 9.65685 13 8V6C13 4.34315 14.3431 3 16 3H18ZM16 4C14.8954 4 14 4.89543 14 6V8C14 9.03565 14.7872 9.887 15.7959 9.98926L16 10H18C19.1046 10 20 9.10457 20 8V6C20 4.89543 19.1046 4 18 4H16Z", fill: "currentColor" })), ve = (r) => /* @__PURE__ */ n.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...r }, /* @__PURE__ */ n.createElement("path", { d: "M20.21 9.08301C20.21 8.54662 20.1047 8.01507 19.8994 7.51953C19.6941 7.02418 19.3929 6.57441 19.0137 6.19531V6.19434C18.6345 5.815 18.184 5.51391 17.6885 5.30859C17.193 5.10331 16.6613 4.99805 16.125 4.99805C15.5889 4.9981 15.0578 5.1034 14.5625 5.30859C14.067 5.5139 13.6165 5.81503 13.2373 6.19434L12.3535 7.07812C12.1582 7.27315 11.8417 7.27331 11.6465 7.07812L10.7637 6.19434C9.99771 5.42846 8.95818 4.99805 7.875 4.99805C6.79201 4.99816 5.75316 5.4286 4.9873 6.19434C4.22133 6.96031 3.79102 7.99976 3.79102 9.08301C3.79104 10.1661 4.22145 11.2048 4.9873 11.9707L12 18.9834L19.0137 11.9707C19.393 11.5915 19.6941 11.141 19.8994 10.6455C20.1046 10.1501 20.2099 9.6192 20.21 9.08301ZM21.21 9.08301C21.2099 9.75057 21.0787 10.4116 20.8232 11.0283C20.5677 11.6451 20.1928 12.2057 19.7207 12.6777L12.3535 20.0449C12.1582 20.2399 11.8416 20.2401 11.6465 20.0449L4.28027 12.6777C3.32689 11.7243 2.79104 10.4314 2.79102 9.08301C2.79102 7.73454 3.32676 6.44082 4.28027 5.4873C5.23366 4.53403 6.52679 3.99816 7.875 3.99805C9.22339 3.99805 10.5172 4.53389 11.4707 5.4873L12 6.0166L12.5303 5.4873C13.0023 5.01516 13.5629 4.64032 14.1797 4.38477C14.7964 4.12928 15.4575 3.9981 16.125 3.99805C16.7927 3.99805 17.4544 4.1292 18.0713 4.38477C18.6881 4.64033 19.2487 5.01514 19.7207 5.4873L19.8926 5.66895C20.2842 6.10087 20.5996 6.59698 20.8232 7.13672C21.0789 7.75361 21.21 8.41525 21.21 9.08301Z", fill: "currentColor" })), W = {
  close: { 16: ue, 24: de },
  plus: { 16: fe, 24: pe },
  more: { 16: he },
  arrowNext: { 24: me },
  grid: { 24: we },
  heart: { 24: ve }
}, Ce = "inline-flex select-none items-center rounded-lg transition disabled:cursor-not-allowed", Ee = {
  32: "h-8 text-[13px] leading-4 font-normal",
  44: "h-11 text-[14px] leading-[18px] font-medium"
}, K = {
  32: "px-4",
  44: "px-7"
}, be = {
  32: "gap-1",
  44: "gap-2"
}, xe = {
  primary: "bg-[#1361E6] text-white hover:bg-[#1361E6]/80 disabled:bg-[#1361E6]/40 disabled:text-white/40",
  secondary: "bg-white/20 text-white hover:bg-white/30 disabled:bg-white/10 disabled:text-white/40",
  outline: "bg-transparent text-white/80 border border-white/20 hover:bg-white/20 hover:text-white disabled:text-white/40 disabled:hover:bg-transparent",
  ghost: "bg-transparent text-white/80 hover:bg-white/20 hover:text-white disabled:text-white/40 disabled:hover:bg-transparent"
}, ee = {
  32: "h-4 w-4",
  44: "h-6 w-6"
};
function x(...r) {
  return r.filter(Boolean).join(" ");
}
function ge({ sizeClass: r }) {
  return /* @__PURE__ */ d.jsx(
    "span",
    {
      className: x(
        "inline-block rounded-full border border-current border-t-transparent animate-spin",
        r
      ),
      "aria-hidden": "true"
    }
  );
}
function _e(r, o, c) {
  if (!c || o === "none" || o === "center")
    return K[r];
  if (r === 32) {
    if (o === "left") return "pl-3 pr-4";
    if (o === "right") return "pl-4 pr-3";
  }
  return o === "left" ? "pl-3 pr-5" : o === "right" ? "pl-5 pr-3" : K[r];
}
function ke({
  variant: r = "primary",
  height: o = 44,
  shape: c = "rect",
  fullWidth: p,
  isLoading: a,
  disabled: u,
  className: h,
  children: f,
  iconName: m,
  icon: g,
  iconPosition: j = "none",
  align: A = "center",
  active: T = !1,
  type: E,
  ...y
}) {
  const w = c === "square" ? "center" : j, _ = o === 32 ? 16 : 24, S = m ? W[m][_] ?? W[m][24] ?? W[m][16] ?? null : null, k = g ?? (S ? /* @__PURE__ */ d.jsx(S, { className: "h-full w-full" }) : null), v = !!k && w !== "none", F = typeof f < "u" && f !== null && f !== "", M = c === "square" || v && w === "center", P = !!u || !!a, V = o === 32 ? "w-8" : "w-11", H = x(
    Ce,
    Ee[o],
    xe[r],
    T && "bg-white/10 text-white border border-white/5",
    c === "rect" && _e(o, w, v),
    c === "square" && x("px-0", V),
    p && c !== "square" && "w-full",
    h
  ), C = () => k ? /* @__PURE__ */ d.jsx(
    "span",
    {
      className: x(
        "inline-flex items-center justify-center",
        ee[o]
      ),
      children: k
    }
  ) : null;
  return /* @__PURE__ */ d.jsxs(
    "button",
    {
      ...y,
      type: E ?? "button",
      disabled: P,
      "aria-disabled": P,
      "aria-busy": a || void 0,
      className: x(H, a && "relative"),
      children: [
        /* @__PURE__ */ d.jsxs(
          "span",
          {
            className: x(
              "inline-flex items-center justify-center",
              be[o],
              a && "opacity-0"
            ),
            children: [
              v && w === "left" ? C() : null,
              !M && F ? /* @__PURE__ */ d.jsx("span", { className: "inline-flex", children: f }) : null,
              v && w === "right" ? C() : null,
              v && w === "center" ? C() : null
            ]
          }
        ),
        a ? /* @__PURE__ */ d.jsx("span", { className: "absolute inset-0 inline-flex items-center justify-center", children: /* @__PURE__ */ d.jsx(ge, { sizeClass: ee[o] }) }) : null
      ]
    }
  );
}
function te(...r) {
  return r.filter(Boolean).join(" ");
}
function Le({
  label: r,
  subLabel: o,
  leftSlot: c,
  rightSlot: p,
  iconName: a,
  active: u = !1,
  className: h,
  ...f
}) {
  const m = te(
    // layout
    "gap-2 px-3 border border-transparent transition-colors",
    "hover:border-transparent",
    // states
    u ? (
      // ACTIVE: 
      "bg-transparent text-white !hover:bg-transparent !hover:text-white"
    ) : (
      // INACTIVE: 
      "bg-transparent !text-white/40 hover:!text-white !hover:bg-white/20"
    ),
    h
  ), g = te(
    "block truncate text-[12px] leading-4",
    u ? "text-white/60" : "text-white/40"
  );
  return /* @__PURE__ */ d.jsxs(
    ke,
    {
      ...f,
      fullWidth: !0,
      align: "start",
      height: f.height ?? 44,
      variant: "ghost",
      iconName: a,
      iconPosition: a ? "left" : "none",
      className: m,
      children: [
        c ? /* @__PURE__ */ d.jsx("span", { className: "inline-flex items-center text-inherit", children: c }) : null,
        /* @__PURE__ */ d.jsxs("span", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ d.jsx("span", { className: "block truncate", children: r }),
          o ? /* @__PURE__ */ d.jsx("span", { className: g, children: o }) : null
        ] }),
        p ? /* @__PURE__ */ d.jsx("span", { className: "inline-flex items-center text-inherit", children: p }) : null
      ]
    }
  );
}
export {
  ke as Button,
  W as ICONS,
  Le as NavButton
};
