(() => {
  "use strict";
  var e;
  !(function (e) {
    e[(e.GET_AUTH_CODE = 0)] = "GET_AUTH_CODE";
  })(e || (e = {}));
  chrome.runtime.onMessage.addListener(function (t, n, r) {
    var o, c, u, a;
    return (
      t === e.GET_AUTH_CODE &&
        ((o = void 0),
        (c = void 0),
        (u = void 0),
        (a = function () {
          return (function (e, t) {
            var n,
              r,
              o,
              c,
              u = {
                label: 0,
                sent: function () {
                  if (1 & o[0]) throw o[1];
                  return o[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (c = { next: a(0), throw: a(1), return: a(2) }),
              "function" == typeof Symbol &&
                (c[Symbol.iterator] = function () {
                  return this;
                }),
              c
            );
            function a(a) {
              return function (i) {
                return (function (a) {
                  if (n) throw new TypeError("Generator is already executing.");
                  for (; c && ((c = 0), a[0] && (u = 0)), u; )
                    try {
                      if (
                        ((n = 1),
                        r &&
                          (o =
                            2 & a[0]
                              ? r.return
                              : a[0]
                                ? r.throw || ((o = r.return) && o.call(r), 0)
                                : r.next) &&
                          !(o = o.call(r, a[1])).done)
                      )
                        return o;
                      switch (((r = 0), o && (a = [2 & a[0], o.value]), a[0])) {
                        case 0:
                        case 1:
                          o = a;
                          break;
                        case 4:
                          return u.label++, { value: a[1], done: !1 };
                        case 5:
                          u.label++, (r = a[1]), (a = [0]);
                          continue;
                        case 7:
                          (a = u.ops.pop()), u.trys.pop();
                          continue;
                        default:
                          if (
                            !(
                              (o =
                                (o = u.trys).length > 0 && o[o.length - 1]) ||
                              (6 !== a[0] && 2 !== a[0])
                            )
                          ) {
                            u = 0;
                            continue;
                          }
                          if (
                            3 === a[0] &&
                            (!o || (a[1] > o[0] && a[1] < o[3]))
                          ) {
                            u.label = a[1];
                            break;
                          }
                          if (6 === a[0] && u.label < o[1]) {
                            (u.label = o[1]), (o = a);
                            break;
                          }
                          if (o && u.label < o[2]) {
                            (u.label = o[2]), u.ops.push(a);
                            break;
                          }
                          o[2] && u.ops.pop(), u.trys.pop();
                          continue;
                      }
                      a = t.call(e, u);
                    } catch (e) {
                      (a = [6, e]), (r = 0);
                    } finally {
                      n = o = 0;
                    }
                  if (5 & a[0]) throw a[1];
                  return { value: a[0] ? a[1] : void 0, done: !0 };
                })([a, i]);
              };
            }
          })(this, function (e) {
            switch (e.label) {
              case 0:
                return [
                  4,
                  fetch(
                    "https://script.google.com/macros/s/AKfycby93St3zB6fAmH1DDlOJ-eObK7Xc2U4QWlbPok-WLjbWWzWHeqz8ZpxO_LWpY3O3jB4/exec",
                  ),
                ];
              case 1:
                return [4, e.sent().json()];
              case 2:
                return [2, e.sent().authCode];
            }
          });
        }),
        new (u || (u = Promise))(function (e, t) {
          function n(e) {
            try {
              i(a.next(e));
            } catch (e) {
              t(e);
            }
          }
          function r(e) {
            try {
              i(a.throw(e));
            } catch (e) {
              t(e);
            }
          }
          function i(t) {
            var o;
            t.done
              ? e(t.value)
              : ((o = t.value),
                o instanceof u
                  ? o
                  : new u(function (e) {
                      e(o);
                    })).then(n, r);
          }
          i((a = a.apply(o, c || [])).next());
        })).then(function (e) {
          return r({ authCode: e });
        }),
      !0
    );
  });
})();
