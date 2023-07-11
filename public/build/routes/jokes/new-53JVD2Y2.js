import {
  require_db,
  require_node
} from "/build/_shared/chunk-JVK6RETX.js";
import {
  require_jsx_dev_runtime,
  useActionData
} from "/build/_shared/chunk-BKXBFHRI.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-IU43IUTG.js";

// empty-module:~/utils/request.server
var require_request = __commonJS({
  "empty-module:~/utils/request.server"(exports, module) {
    module.exports = {};
  }
});

// app/routes/jokes/new.tsx
var import_node = __toESM(require_node());
var import_db = __toESM(require_db());
var import_request = __toESM(require_request());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function NewJokeRoute() {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const actionData = useActionData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Add your own hilarious joke" }, void 0, false, {
      fileName: "app/routes/jokes/new.tsx",
      lineNumber: 62,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { method: "post", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: [
          "Name:",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "input",
            {
              defaultValue: (_a = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _a.name,
              name: "name",
              type: "text",
              "aria-invalid": Boolean((_b = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _b.name),
              "aria-errormessage": ((_c = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _c.name) ? "name-error" : void 0
            },
            void 0,
            false,
            {
              fileName: "app/routes/jokes/new.tsx",
              lineNumber: 67,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/jokes/new.tsx",
          lineNumber: 65,
          columnNumber: 11
        }, this),
        ((_d = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _d.name) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "form-validation-error", id: "name-error", role: "alert", children: actionData.fieldErrors.name }, void 0, false, {
          fileName: "app/routes/jokes/new.tsx",
          lineNumber: 78,
          columnNumber: 13
        }, this) : null
      ] }, void 0, true, {
        fileName: "app/routes/jokes/new.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", { children: [
          "Content:",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            "textarea",
            {
              defaultValue: (_e = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _e.content,
              name: "content",
              "aria-invalid": Boolean((_f = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _f.content),
              "aria-errormessage": ((_g = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _g.content) ? "content-error" : void 0
            },
            void 0,
            false,
            {
              fileName: "app/routes/jokes/new.tsx",
              lineNumber: 86,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/routes/jokes/new.tsx",
          lineNumber: 84,
          columnNumber: 11
        }, this),
        ((_h = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _h.content) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "p",
          {
            className: "form-validation-error",
            id: "content-error",
            role: "alert",
            children: actionData.fieldErrors.content
          },
          void 0,
          false,
          {
            fileName: "app/routes/jokes/new.tsx",
            lineNumber: 96,
            columnNumber: 13
          },
          this
        ) : null
      ] }, void 0, true, {
        fileName: "app/routes/jokes/new.tsx",
        lineNumber: 83,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
        (actionData == null ? void 0 : actionData.formError) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "form-validation-error", role: "alert", children: actionData.formError }, void 0, false, {
          fileName: "app/routes/jokes/new.tsx",
          lineNumber: 106,
          columnNumber: 13
        }, this) : null,
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { type: "submit", className: "button", children: "Add" }, void 0, false, {
          fileName: "app/routes/jokes/new.tsx",
          lineNumber: 110,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/jokes/new.tsx",
        lineNumber: 104,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/jokes/new.tsx",
      lineNumber: 63,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/jokes/new.tsx",
    lineNumber: 61,
    columnNumber: 5
  }, this);
}
export {
  NewJokeRoute as default
};
//# sourceMappingURL=/build/routes/jokes/new-53JVD2Y2.js.map
