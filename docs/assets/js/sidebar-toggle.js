(function () {
  var STORAGE_KEY = "guide-sidebar-collapsed";
  var MENU_ICON = '<svg viewBox="0 0 24 24"><path d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z"/></svg>';

  function applyState(collapsed) {
    document.body.classList.toggle("sidebar-collapsed", collapsed);
  }

  function isCollapsed() {
    try {
      return localStorage.getItem(STORAGE_KEY) === "true";
    } catch (e) {
      return false;
    }
  }

  function setCollapsed(collapsed) {
    try {
      localStorage.setItem(STORAGE_KEY, collapsed ? "true" : "false");
    } catch (e) {
      /* localStorage unavailable, state just won't persist across pages */
    }
    applyState(collapsed);
    positionToggleButton();
  }

  function insertToggleButton() {
    if (document.querySelector(".sidebar-toggle-btn")) return;

    var body = document.body;

    var button = document.createElement("button");
    button.type = "button";
    button.className = "sidebar-toggle-btn";
    button.setAttribute("aria-label", "Toggle navigation sidebar");
    button.title = "Toggle navigation sidebar";
    button.innerHTML = MENU_ICON;

    button.addEventListener("click", function () {
      setCollapsed(!document.body.classList.contains("sidebar-collapsed"));
    });

    body.insertAdjacentElement("afterbegin", button);
    positionToggleButton();
  }

  function positionToggleButton() {
    var button = document.querySelector(".sidebar-toggle-btn");
    var sidebar = document.querySelector(".md-sidebar--primary");
    if (!button) return;

    if (!sidebar || document.body.classList.contains("sidebar-collapsed")) {
      button.style.left = "";
      return;
    }

    var rect = sidebar.getBoundingClientRect();
    button.style.left = Math.round(rect.right + 20) + "px";
  }

  applyState(isCollapsed());

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", insertToggleButton);
  } else {
    insertToggleButton();
  }

  if (typeof document$ !== "undefined" && document$.subscribe) {
    document$.subscribe(function () {
      insertToggleButton();
      applyState(isCollapsed());
    });
  }

  window.addEventListener("resize", positionToggleButton);
})();
