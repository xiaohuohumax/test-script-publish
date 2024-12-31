// ==UserScript==
// @name         test-script-publish
// @namespace    vite-plugin-monkey
// @version      1.0.17
// @author       xiaohuohumax
// @description  test script publish
// @license      MIT
// @icon64       data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUwLjAwMDAwMCIgaGVpZ2h0PSIyNTAuMDAwMDAwIiB2aWV3Qm94PSIwIDAgMjUwIDI1MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgPGRlc2M+eGlhb2h1b2h1bWF4IGxvZ288L2Rlc2M+CiAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAzXzExOSI+CiAgICAgIDxyZWN0IGlkPSJsb2dvIiByeD0iNTAuMDAwMDAwIiB3aWR0aD0iMjUwLjAwMDAwMCIgaGVpZ2h0PSIyNTAuMDAwMDAwIiBmaWxsPSJ3aGl0ZSIgZmlsbC1vcGFjaXR5PSIwIi8+CiAgICA8L2NsaXBQYXRoPgogIDwvZGVmcz4KICA8cmVjdCBpZD0ibG9nbyIgcng9IjUwLjAwMDAwMCIgd2lkdGg9IjI1MC4wMDAwMDAiIGhlaWdodD0iMjUwLjAwMDAwMCIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1vcGFjaXR5PSIwIi8+CiAgPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAzXzExOSkiPgogICAgPHBhdGggZD0iTTg4IDIzMEw5MiAyMzBDOTYuNDEgMjMwIDEwMCAyMjYuNDEgMTAwIDIyMkwxMDAgMTcwTDE1MCAxNzBMMTUwIDIyMkMxNTAgMjI2LjQxIDE1My41OCAyMzAgMTU4IDIzMEwxNjIgMjMwQzE2Ni40MSAyMzAgMTcwIDIyNi40MSAxNzAgMjIyTDE3MCAxNzBMMjEyIDE3MEMyMTYuNDEgMTcwIDIyMCAxNjYuNDEgMjIwIDE2MkwyMjAgMTU4QzIyMCAxNTMuNTggMjE2LjQxIDE1MCAyMTIgMTUwTDE3MCAxNTBMMTcwIDEwMEwyMTIgMTAwQzIxNi40MSAxMDAgMjIwIDk2LjQxIDIyMCA5MkwyMjAgODhDMjIwIDgzLjU4IDIxNi40MSA4MCAyMTIgODBMMTcwIDgwTDE3MCAzOEMxNzAgMzMuNTggMTY2LjQxIDMwIDE2MiAzMEwxNTggMzBDMTUzLjU4IDMwIDE1MCAzMy41OCAxNTAgMzhMMTUwIDgwTDEwMCA4MEwxMDAgMzhDMTAwIDMzLjU4IDk2LjQxIDMwIDkyIDMwTDg4IDMwQzgzLjU4IDMwIDgwIDMzLjU4IDgwIDM4TDgwIDgwTDI4IDgwQzIzLjU4IDgwIDIwIDgzLjU4IDIwIDg4TDIwIDkyQzIwIDk2LjQxIDIzLjU4IDEwMCAyOCAxMDBMODAgMTAwTDgwIDE1MEwyOCAxNTBDMjMuNTggMTUwIDIwIDE1My41OCAyMCAxNThMMjAgMTYyQzIwIDE2Ni40MSAyMy41OCAxNzAgMjggMTcwTDgwIDE3MEw4MCAyMjJDODAgMjI2LjQxIDgzLjU4IDIzMCA4OCAyMzBaTTE1MCAxMDBMMTAwIDEwMEwxMDAgMTUwTDE1MCAxNTBMMTUwIDEwMFoiIGZpbGw9IiNGNEEyNjEiIGZpbGwtb3BhY2l0eT0iMS4wMDAwMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPgogICAgPHBhdGggZD0iTTE4MCAyOC4zNUwxODAgNzAuMzVMMjIyIDcwLjM1QzIyNi40MiA3MC4zNSAyMzAgNzMuOTMgMjMwIDc4LjM1TDIzMCA4Mi4zNUMyMzAgODYuNzcgMjI2LjQyIDkwLjM1IDIyMiA5MC4zNUwxODAgOTAuMzVDMTY4Ljk1IDkwLjM1IDE2MCA4MS40IDE2MCA3MC4zNUwxNjAgMjguMzVDMTYwIDIzLjkzIDE2My41OCAyMC4zNSAxNjggMjAuMzVMMTcyIDIwLjM1QzE3Ni40MiAyMC4zNSAxODAgMjMuOTMgMTgwIDI4LjM1WiIgZmlsbD0iIzJBOUQ4RiIgZmlsbC1vcGFjaXR5PSIxLjAwMDAwMCIgZmlsbC1ydWxlPSJldmVub2RkIi8+CiAgICA8cGF0aCBkPSJNMTA5LjY0IDI4TDEwOS42NCA3MEwxNTkuNjQgNzBDMTcwLjY5IDcwIDE3OS42NCA3OC45NSAxNzkuNjQgOTBMMTc5LjY0IDE0MEwyMjEuNjQgMTQwQzIyNi4wNiAxNDAgMjI5LjY0IDE0My41OCAyMjkuNjQgMTQ4TDIyOS42NCAxNTJDMjI5LjY0IDE1Ni40MSAyMjYuMDYgMTYwIDIyMS42NCAxNjBMMTU5LjY0IDE2MEwxNTkuNjQgOTBMODkuNjQgOTBMODkuNjQgMjhDODkuNjQgMjMuNTggOTMuMjIgMjAgOTcuNjQgMjBMMTAxLjY0IDIwQzEwNi4wNiAyMCAxMDkuNjQgMjMuNTggMTA5LjY0IDI4WiIgZmlsbD0iI0U3NkY1MSIgZmlsbC1vcGFjaXR5PSIxLjAwMDAwMCIgZmlsbC1ydWxlPSJldmVub2RkIi8+CiAgICA8cGF0aCBkPSJNMzcuNDkgNzAuMjVMODkuNDkgNzAuMjVDMTAwLjU0IDcwLjI1IDEwOS40OSA3OS4yIDEwOS40OSA5MC4yNUwxMDkuNDkgMTQwLjI1TDE1OS40OSAxNDAuMjVDMTcwLjU0IDE0MC4yNSAxNzkuNDkgMTQ5LjIgMTc5LjQ5IDE2MC4yNUwxNzkuNDkgMjEyLjI1QzE3OS40OSAyMTYuNjcgMTc1LjkxIDIyMC4yNSAxNzEuNDkgMjIwLjI1TDE2Ny40OSAyMjAuMjVDMTYzLjA3IDIyMC4yNSAxNTkuNDkgMjE2LjY3IDE1OS40OSAyMTIuMjVMMTU5LjQ5IDE2MC4yNUwxMDkuNDkgMTYwLjI1Qzk4LjQ0IDE2MC4yNSA4OS40OSAxNTEuMyA4OS40OSAxNDAuMjVMODkuNDkgOTAuMjVMMzcuNDkgOTAuMjVDMzMuMDcgOTAuMjUgMjkuNDkgODYuNjcgMjkuNDkgODIuMjVMMjkuNDkgNzguMjVDMjkuNDkgNzMuODMgMzMuMDcgNzAuMjUgMzcuNDkgNzAuMjVaIiBmaWxsPSIjRTlDNDZBIiBmaWxsLW9wYWNpdHk9IjEuMDAwMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KICAgIDxwYXRoIGQ9Ik04OS44MiAxNDAuMjNMMzcuODIgMTQwLjIzQzMzLjQgMTQwLjIzIDI5LjgyIDE0My44MSAyOS44MiAxNDguMjNMMjkuODIgMTUyLjIzQzI5LjgyIDE1Ni42NSAzMy40IDE2MC4yMyAzNy44MiAxNjAuMjNMODkuODIgMTYwLjIzTDg5LjgyIDIxMi4yM0M4OS44MiAyMTYuNjUgOTMuNCAyMjAuMjMgOTcuODIgMjIwLjIzTDEwMS44MiAyMjAuMjNDMTA2LjI0IDIyMC4yMyAxMDkuODIgMjE2LjY1IDEwOS44MiAyMTIuMjNMMTA5LjgyIDE0MC4yM0w4OS44MiAxNDAuMjNaIiBmaWxsPSIjRTc2RjUxIiBmaWxsLW9wYWNpdHk9IjEuMDAwMDAwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KICA8L2c+Cjwvc3ZnPgo=
// @source       https://github.com/xiaohuohumax/template.git
// @include      *
// @grant        GM_log
// @noframes
// ==/UserScript==

(function () {
  'use strict';

  var _GM_log = /* @__PURE__ */ (() => typeof GM_log != "undefined" ? GM_log : void 0)();
  async function start() {
    _GM_log("test-script-publish");
  }
  start().catch(_GM_log);

})();