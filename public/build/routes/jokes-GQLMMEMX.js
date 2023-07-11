import {
  tailwind_default
} from "/build/_shared/chunk-SZCBWS73.js";
import {
  Link,
  Outlet,
  require_jsx_dev_runtime,
  useLoaderData,
  useNavigate
} from "/build/_shared/chunk-BKXBFHRI.js";
import {
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// app/styles/jokes.css
var jokes_default = "/build/_assets/jokes-JQWM6NKN.css";

// app/routes/jokes.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links = () => [
  { rel: "stylesheet", href: tailwind_default },
  { rel: "stylesheet", href: jokes_default }
];
function JokesRoute() {
  const { jokes, userid, user } = useLoaderData();
  const navigate = useNavigate();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "jokes-layout", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "jokes-header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "home-link", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", title: "Remix Jokes", "aria-label": "Remix Jokes", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "logo", children: "\u{1F92A}" }, void 0, false, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 25,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "logo-medium", children: "J\u{1F92A}KES" }, void 0, false, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 26,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/jokes.tsx",
        lineNumber: 24,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/jokes.tsx",
        lineNumber: 23,
        columnNumber: 11
      }, this),
      user ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "user-info", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: `Hi ${user.username}` }, void 0, false, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 31,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { action: "/logout", method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "button", children: "Logout" }, void 0, false, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 33,
          columnNumber: 17
        }, this) }, void 0, false, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 32,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/jokes.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/login", children: "Login" }, void 0, false, {
        fileName: "app/routes/jokes.tsx",
        lineNumber: 39,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/jokes.tsx",
      lineNumber: 22,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/jokes.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", { className: "jokes-main", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "container", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "jokes-list", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: ".", children: "Get a random joke" }, void 0, false, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 46,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Here are a few more jokes to check out:" }, void 0, false, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 47,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: jokes.map(
          ({ id, name }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: id, children: name }, void 0, false, {
            fileName: "app/routes/jokes.tsx",
            lineNumber: 51,
            columnNumber: 19
          }, this) }, id, false, {
            fileName: "app/routes/jokes.tsx",
            lineNumber: 50,
            columnNumber: 15
          }, this)
        ) }, void 0, false, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 48,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "All my jokes:" }, void 0, false, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 55,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { children: jokes.map(
          ({ id, jokesterId, name }) => userid === jokesterId && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: id, children: name }, void 0, false, {
            fileName: "app/routes/jokes.tsx",
            lineNumber: 61,
            columnNumber: 23
          }, this) }, id, false, {
            fileName: "app/routes/jokes.tsx",
            lineNumber: 60,
            columnNumber: 17
          }, this)
        ) }, void 0, false, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 56,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "new", className: "button", children: "Add your own" }, void 0, false, {
          fileName: "app/routes/jokes.tsx",
          lineNumber: 66,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/jokes.tsx",
        lineNumber: 45,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "jokes-outlet", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/routes/jokes.tsx",
        lineNumber: 71,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/routes/jokes.tsx",
        lineNumber: 70,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/jokes.tsx",
      lineNumber: 44,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/jokes.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/jokes.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}
export {
  JokesRoute as default,
  links
};
//# sourceMappingURL=/build/routes/jokes-GQLMMEMX.js.map
