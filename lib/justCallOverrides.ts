const LAUNCHER_SELECTORS = [
  ".iframe-button-control",
  "#toggleButton",
  ".iframe-button-control .f-button",
  ".iframe-button-control .click-now",
] as const;

const PANEL_SELECTORS = [".iframe-content", "#abc_jc_56"] as const;

/** Match FloatingActions: bottom-10 (40px) + ~52px button + gap */
const PANEL_BOTTOM = "112px";
const PANEL_RIGHT = "20px";

const MIN_OPEN_SIZE = 50;

declare global {
  interface Window {
    removeSettings?: () => void;
  }
}

function hideJustCallLauncher() {
  for (const selector of LAUNCHER_SELECTORS) {
    document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
      el.style.setProperty("display", "none", "important");
      el.style.setProperty("visibility", "hidden", "important");
      el.style.setProperty("pointer-events", "none", "important");
      el.style.setProperty("opacity", "0", "important");
    });
  }
}

export function isJustCallPanelOpen(): boolean {
  const panel = document.querySelector<HTMLElement>(".iframe-content");
  if (!panel) return false;

  const height = parseInt(panel.style.height || "0", 10);
  const width = parseInt(panel.style.width || "0", 10);
  if (height > MIN_OPEN_SIZE && width > MIN_OPEN_SIZE) return true;

  const iframe = document.getElementById("alsdj8") as HTMLElement | null;
  return iframe?.style.display === "block";
}

export function closeJustCallWidget(): boolean {
  if (typeof window.removeSettings === "function") {
    window.removeSettings();
    applyJustCallOverrides();
    return true;
  }

  const panel = document.querySelector<HTMLElement>(".iframe-content");
  const iframe = document.getElementById("alsdj8") as HTMLElement | null;

  if (panel) {
    panel.style.height = "0px";
    panel.style.width = "0px";
  }
  if (iframe) {
    iframe.style.display = "none";
  }

  applyJustCallOverrides();
  return Boolean(panel || iframe);
}

export function positionJustCallPanelRight() {
  for (const selector of PANEL_SELECTORS) {
    document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
      el.style.setProperty("left", "auto", "important");
      el.style.setProperty("right", PANEL_RIGHT, "important");
      el.style.setProperty("bottom", PANEL_BOTTOM, "important");
    });
  }
}

export function applyJustCallOverrides() {
  hideJustCallLauncher();
  if (isJustCallPanelOpen()) {
    positionJustCallPanelRight();
  }
}

function isDismissIgnoredTarget(target: Node | null): boolean {
  if (!target || !(target instanceof Element)) return false;

  return Boolean(
    target.closest(".iframe-content") ||
      target.closest("[data-floating-actions]") ||
      target.closest("[data-chatbot-widget]")
  );
}

function startJustCallDismissHandlers() {
  document.addEventListener("mousedown", (event) => {
    if (!isJustCallPanelOpen()) return;
    if (isDismissIgnoredTarget(event.target as Node)) return;
    closeJustCallWidget();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    if (!isJustCallPanelOpen()) return;
    closeJustCallWidget();
  });
}

let observerStarted = false;

export function startJustCallOverrides() {
  if (typeof window === "undefined" || observerStarted) return;
  observerStarted = true;

  applyJustCallOverrides();
  startJustCallDismissHandlers();

  const observer = new MutationObserver(() => {
    applyJustCallOverrides();
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["style", "class"],
  });
}
