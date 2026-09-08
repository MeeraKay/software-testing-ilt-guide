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
  }

  function insertToggleButton() {
    if (document.querySelector(".sidebar-toggle-btn")) return;

    var content = document.querySelector(".md-content__inner");
    if (!content) return;

    var button = document.createElement("button");
    button.type = "button";
    button.className = "sidebar-toggle-btn";
    button.setAttribute("aria-label", "Toggle navigation sidebar");
    button.title = "Toggle navigation sidebar";
    button.innerHTML = MENU_ICON;

    button.addEventListener("click", function () {
      setCollapsed(!document.body.classList.contains("sidebar-collapsed"));
    });

    content.insertAdjacentElement("afterbegin", button);
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
})();
