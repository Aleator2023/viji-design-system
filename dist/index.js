import oe from "react";
var P = { exports: {} }, x = {};
var H;
function ae() {
  if (H) return x;
  H = 1;
  var s = /* @__PURE__ */ Symbol.for("react.transitional.element"), n = /* @__PURE__ */ Symbol.for("react.fragment");
  function i(p, l, c) {
    var h = null;
    if (c !== void 0 && (h = "" + c), l.key !== void 0 && (h = "" + l.key), "key" in l) {
      c = {};
      for (var f in l)
        f !== "key" && (c[f] = l[f]);
    } else c = l;
    return l = c.ref, {
      $$typeof: s,
      type: p,
      key: h,
      ref: l !== void 0 ? l : null,
      props: c
    };
  }
  return x.Fragment = n, x.jsx = i, x.jsxs = i, x;
}
var E = {};
var G;
function se() {
  return G || (G = 1, process.env.NODE_ENV !== "production" && (function() {
    function s(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === re ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case m:
          return "Fragment";
        case O:
          return "Profiler";
        case w:
          return "StrictMode";
        case L:
          return "Suspense";
        case _:
          return "SuspenseList";
        case ee:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case y:
            return "Portal";
          case C:
            return e.displayName || "Context";
          case A:
            return (e._context.displayName || "Context") + ".Consumer";
          case N:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case K:
            return r = e.displayName || null, r !== null ? r : s(e.type) || "Memo";
          case M:
            r = e._payload, e = e._init;
            try {
              return s(e(r));
            } catch {
            }
        }
      return null;
    }
    function n(e) {
      return "" + e;
    }
    function i(e) {
      try {
        n(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, o = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          o
        ), n(e);
      }
    }
    function p(e) {
      if (e === m) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === M)
        return "<...>";
      try {
        var r = s(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function l() {
      var e = I.A;
      return e === null ? null : e.getOwner();
    }
    function c() {
      return Error("react-stack-top-frame");
    }
    function h(e) {
      if (B.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function f(e, r) {
      function t() {
        W || (W = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function v() {
      var e = s(this.type);
      return z[e] || (z[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function S(e, r, t, o, F, $) {
      var a = t.ref;
      return e = {
        $$typeof: j,
        type: e,
        key: r,
        props: t,
        _owner: o
      }, (a !== void 0 ? a : null) !== null ? Object.defineProperty(e, "ref", {
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
        value: F
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: $
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function k(e, r, t, o, F, $) {
      var a = r.children;
      if (a !== void 0)
        if (o)
          if (te(a)) {
            for (o = 0; o < a.length; o++)
              R(a[o]);
            Object.freeze && Object.freeze(a);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else R(a);
      if (B.call(r, "key")) {
        a = s(e);
        var g = Object.keys(r).filter(function(ne) {
          return ne !== "key";
        });
        o = 0 < g.length ? "{key: someKey, " + g.join(": ..., ") + ": ...}" : "{key: someKey}", J[a + o] || (g = 0 < g.length ? "{" + g.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          o,
          a,
          g,
          a
        ), J[a + o] = !0);
      }
      if (a = null, t !== void 0 && (i(t), a = "" + t), h(r) && (i(r.key), a = "" + r.key), "key" in r) {
        t = {};
        for (var D in r)
          D !== "key" && (t[D] = r[D]);
      } else t = r;
      return a && f(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), S(
        e,
        a,
        t,
        l(),
        F,
        $
      );
    }
    function R(e) {
      T(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === M && (e._payload.status === "fulfilled" ? T(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function T(e) {
      return typeof e == "object" && e !== null && e.$$typeof === j;
    }
    var u = oe, j = /* @__PURE__ */ Symbol.for("react.transitional.element"), y = /* @__PURE__ */ Symbol.for("react.portal"), m = /* @__PURE__ */ Symbol.for("react.fragment"), w = /* @__PURE__ */ Symbol.for("react.strict_mode"), O = /* @__PURE__ */ Symbol.for("react.profiler"), A = /* @__PURE__ */ Symbol.for("react.consumer"), C = /* @__PURE__ */ Symbol.for("react.context"), N = /* @__PURE__ */ Symbol.for("react.forward_ref"), L = /* @__PURE__ */ Symbol.for("react.suspense"), _ = /* @__PURE__ */ Symbol.for("react.suspense_list"), K = /* @__PURE__ */ Symbol.for("react.memo"), M = /* @__PURE__ */ Symbol.for("react.lazy"), ee = /* @__PURE__ */ Symbol.for("react.activity"), re = /* @__PURE__ */ Symbol.for("react.client.reference"), I = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, B = Object.prototype.hasOwnProperty, te = Array.isArray, Y = console.createTask ? console.createTask : function() {
      return null;
    };
    u = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var W, z = {}, U = u.react_stack_bottom_frame.bind(
      u,
      c
    )(), V = Y(p(c)), J = {};
    E.Fragment = m, E.jsx = function(e, r, t) {
      var o = 1e4 > I.recentlyCreatedOwnerStacks++;
      return k(
        e,
        r,
        t,
        !1,
        o ? Error("react-stack-top-frame") : U,
        o ? Y(p(e)) : V
      );
    }, E.jsxs = function(e, r, t) {
      var o = 1e4 > I.recentlyCreatedOwnerStacks++;
      return k(
        e,
        r,
        t,
        !0,
        o ? Error("react-stack-top-frame") : U,
        o ? Y(p(e)) : V
      );
    };
  })()), E;
}
var X;
function le() {
  return X || (X = 1, process.env.NODE_ENV === "production" ? P.exports = ae() : P.exports = se()), P.exports;
}
var d = le();
const ie = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_847_25288)'%3e%3cpath%20d='M2.8291%2013.1707L13.1717%202.82814'%20stroke='%23F1F1F1'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M2.8291%202.82928L13.1717%2013.1719'%20stroke='%23F1F1F1'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_847_25288'%3e%3crect%20width='16'%20height='16'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", ce = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_1177_7929)'%3e%3cpath%20d='M18.7245%204.58088C18.9187%204.45241%2019.1834%204.47435%2019.3544%204.64533C19.5253%204.81629%2019.5463%205.08017%2019.4179%205.27424L19.3544%205.35236L12.706%2011.9998L19.3535%2018.6473L19.4179%2018.7254C19.5464%2018.9195%2019.5244%2019.1833%2019.3535%2019.3543C19.1825%2019.5252%2018.9186%2019.5472%2018.7245%2019.4188L18.6464%2019.3543L11.999%2012.7069L5.35345%2019.3533C5.15822%2019.5485%204.84167%2019.5485%204.64642%2019.3533C4.45118%2019.1581%204.45121%2018.8416%204.64642%2018.6463L11.2919%2011.9998L4.64642%205.35432C4.4512%205.1591%204.45129%204.84256%204.64642%204.64728C4.84168%204.45202%205.15819%204.45202%205.35345%204.64728L11.999%2011.2928L18.6464%204.64533L18.7245%204.58088Z'%20fill='%23F1F1F1'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1177_7929'%3e%3crect%20width='16'%20height='16'%20fill='white'%20transform='translate(4%204)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", ue = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_355_4264)'%3e%3cpath%20d='M4%208L12%208'%20stroke='%23F1F1F1'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M8%204L8%2012'%20stroke='%23F1F1F1'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_355_4264'%3e%3crect%20width='16'%20height='16'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", fe = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_7521_33583)'%3e%3cpath%20d='M5%2012L19%2012'%20stroke='%23F1F1F1'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M12%205L12%2019'%20stroke='%23F1F1F1'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_7521_33583'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e", de = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12.9389%208.0127H12.9479'%20stroke='%23F1F1F1'%20stroke-width='2.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M7.93007%208.01288H7.93907'%20stroke='%23F1F1F1'%20stroke-width='2.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M2.92128%208.0127H2.93028'%20stroke='%23F1F1F1'%20stroke-width='2.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e", pe = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12.3535%2017.0214C12.1582%2017.2164%2011.8417%2017.2166%2011.6465%2017.0214C11.4516%2016.8261%2011.4515%2016.5095%2011.6465%2016.3143L15.4619%2012.4999L7.33398%2012.4999C7.05784%2012.4999%206.83398%2012.276%206.83398%2011.9999C6.83407%2011.7238%207.05789%2011.4999%207.33398%2011.4999L15.458%2011.4999L11.6465%207.68834L11.583%207.60924C11.4552%207.41532%2011.476%207.15209%2011.6465%206.98131C11.8173%206.81053%2012.0813%206.78887%2012.2754%206.91686L12.3535%206.98131L17.0156%2011.6424C17.064%2011.6896%2017.1037%2011.746%2017.1299%2011.8094C17.1363%2011.8249%2017.1398%2011.8414%2017.1445%2011.8573C17.1581%2011.9026%2017.167%2011.9501%2017.167%2011.9999V12.0018C17.1668%2012.1295%2017.1178%2012.2569%2017.0205%2012.3544L12.3535%2017.0214Z'%20fill='%23F1F1F1'/%3e%3c/svg%3e", q = {
  close: { 16: ie, 24: ce },
  plus: { 16: ue, 24: fe },
  more: { 16: de },
  //  16
  arrowNext: { 24: pe }
  //  24
}, he = "inline-flex select-none items-center justify-center rounded-lg transition disabled:cursor-not-allowed", me = {
  32: "h-8 text-[13px] leading-4 font-normal",
  44: "h-11 text-[14px] leading-[18px] font-medium"
}, Z = {
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
}, Q = {
  32: "h-4 w-4",
  44: "h-6 w-6"
};
function b(...s) {
  return s.filter(Boolean).join(" ");
}
function ge({ sizeClass: s }) {
  return /* @__PURE__ */ d.jsx(
    "span",
    {
      className: b(
        "inline-block rounded-full border border-current border-t-transparent animate-spin",
        s
      ),
      "aria-hidden": "true"
    }
  );
}
function be(s, n, i) {
  if (!i || n === "none" || n === "center")
    return Z[s];
  if (s === 32) {
    if (n === "left") return "pl-3 pr-4";
    if (n === "right") return "pl-4 pr-3";
  }
  return n === "left" ? "pl-3 pr-5" : n === "right" ? "pl-5 pr-3" : Z[s];
}
function xe({
  variant: s = "primary",
  height: n = 44,
  shape: i = "rect",
  fullWidth: p,
  isLoading: l,
  disabled: c,
  className: h,
  children: f,
  iconName: v,
  icon: S,
  iconPosition: k = "none",
  type: R,
  ...T
}) {
  const u = i === "square" ? "center" : k, j = n === 32 ? 16 : 24, y = v ? q[v][j] ?? q[v][24] ?? q[v][16] ?? null : null, m = S ?? (y ? /* @__PURE__ */ d.jsx(y, { className: "h-full w-full" }) : null), w = !!m && u !== "none", O = typeof f < "u" && f !== null && f !== "", A = i === "square" || w && u === "center", C = !!c || !!l, N = n === 32 ? "w-8" : "w-11", L = b(
    he,
    me[n],
    ve[s],
    i === "rect" && be(n, u, w),
    i === "square" && b("px-0", N),
    p && i !== "square" && "w-full",
    h
  ), _ = () => m ? /* @__PURE__ */ d.jsx(
    "span",
    {
      className: b(
        "inline-flex items-center justify-center",
        Q[n]
      ),
      children: m
    }
  ) : null;
  return /* @__PURE__ */ d.jsxs(
    "button",
    {
      ...T,
      type: R ?? "button",
      disabled: C,
      "aria-disabled": C,
      "aria-busy": l || void 0,
      className: b(L, l && "relative"),
      children: [
        /* @__PURE__ */ d.jsxs(
          "span",
          {
            className: b(
              "inline-flex items-center justify-center",
              we[n],
              l && "opacity-0"
            ),
            children: [
              w && u === "left" ? _() : null,
              !A && O ? /* @__PURE__ */ d.jsx("span", { className: "inline-flex", children: f }) : null,
              w && u === "right" ? _() : null,
              w && u === "center" ? _() : null
            ]
          }
        ),
        l ? /* @__PURE__ */ d.jsx("span", { className: "absolute inset-0 inline-flex items-center justify-center", children: /* @__PURE__ */ d.jsx(ge, { sizeClass: Q[n] }) }) : null
      ]
    }
  );
}
export {
  xe as Button,
  q as ICONS
};
