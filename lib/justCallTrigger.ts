import {
  applyJustCallOverrides,
  closeJustCallWidget,
  isJustCallPanelOpen,
  positionJustCallPanelRight,
} from "./justCallOverrides";

declare global {
  interface Window {
    resizeTheframe?: () => void;
  }
}

const MAX_ATTEMPTS = 20;
const RETRY_MS = 250;

export { closeJustCallWidget };

export function openJustCallWidget(): Promise<boolean> {
  return new Promise((resolve) => {
    let attempts = 0;

    const tryOpen = () => {
      applyJustCallOverrides();

      const toggle = document.getElementById("toggleButton");
      if (toggle) {
        toggle.click();
        applyJustCallOverrides();
        positionJustCallPanelRight();
        requestAnimationFrame(() => {
          applyJustCallOverrides();
          positionJustCallPanelRight();
        });
        resolve(true);
        return;
      }

      if (typeof window.resizeTheframe === "function") {
        window.resizeTheframe();
        applyJustCallOverrides();
        positionJustCallPanelRight();
        requestAnimationFrame(() => {
          applyJustCallOverrides();
          positionJustCallPanelRight();
        });
        resolve(true);
        return;
      }

      if (++attempts >= MAX_ATTEMPTS) {
        resolve(false);
        return;
      }

      setTimeout(tryOpen, RETRY_MS);
    };

    tryOpen();
  });
}

export async function toggleJustCallWidget(): Promise<boolean> {
  if (isJustCallPanelOpen()) {
    return closeJustCallWidget();
  }

  return openJustCallWidget();
}
