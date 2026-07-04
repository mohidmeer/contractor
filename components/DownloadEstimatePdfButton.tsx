"use client";

import { useState } from "react";
import { FaDownload, FaSpinner } from "react-icons/fa";

type DownloadEstimatePdfButtonProps = {
  targetId?: string;
  fileName: string;
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}

/** Copy resolved rgb colors onto the clone so oklab/oklch never reach the canvas parser. */
function applyResolvedColors(originalRoot: HTMLElement, clonedRoot: HTMLElement) {
  const originalNodes = [
    originalRoot,
    ...Array.from(originalRoot.querySelectorAll<HTMLElement>("*")),
  ];
  const clonedNodes = [
    clonedRoot,
    ...Array.from(clonedRoot.querySelectorAll<HTMLElement>("*")),
  ];

  originalNodes.forEach((original, index) => {
    const clone = clonedNodes[index];
    if (!clone) return;

    const styles = window.getComputedStyle(original);

    clone.style.setProperty("color", styles.color, "important");
    clone.style.setProperty(
      "background-color",
      styles.backgroundColor,
      "important"
    );
    clone.style.setProperty("background-image", "none", "important");
    clone.style.setProperty("border-top-color", styles.borderTopColor, "important");
    clone.style.setProperty(
      "border-right-color",
      styles.borderRightColor,
      "important"
    );
    clone.style.setProperty(
      "border-bottom-color",
      styles.borderBottomColor,
      "important"
    );
    clone.style.setProperty(
      "border-left-color",
      styles.borderLeftColor,
      "important"
    );
    clone.style.setProperty("outline-color", styles.outlineColor, "important");
    clone.style.setProperty("box-shadow", styles.boxShadow, "important");
    clone.style.setProperty("text-shadow", "none", "important");
    clone.style.setProperty("backdrop-filter", "none", "important");
    clone.style.setProperty("-webkit-backdrop-filter", "none", "important");
  });
}

export default function DownloadEstimatePdfButton({
  targetId = "estimate-document",
  fileName,
}: DownloadEstimatePdfButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    const element = document.getElementById(targetId);
    if (!element) return;

    setLoading(true);
    try {
      const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
        import("html2canvas-pro"),
        import("jspdf"),
      ]);

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: "#ffffff",
        logging: false,
        scrollX: 0,
        scrollY: 0,
        windowWidth: element.scrollWidth,
        width: element.scrollWidth,
        height: element.scrollHeight,
        onclone: (_document, clonedElement) => {
          clonedElement.style.width = `${element.scrollWidth}px`;
          clonedElement.style.maxWidth = "none";
          clonedElement.style.transform = "none";
          applyResolvedColors(element, clonedElement);
        },
      });

      const imgData = canvas.toDataURL("image/png", 1.0);
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const margin = 8;
      const contentWidth = pageWidth - margin * 2;
      const pageContentHeight = pageHeight - margin * 2;
      const imgHeight = (canvas.height * contentWidth) / canvas.width;

      // Single page if it fits; otherwise slice across pages.
      if (imgHeight <= pageContentHeight) {
        pdf.addImage(
          imgData,
          "PNG",
          margin,
          margin,
          contentWidth,
          imgHeight,
          undefined,
          "FAST"
        );
      } else {
        const pxPerMm = canvas.width / contentWidth;
        const pageHeightPx = pageContentHeight * pxPerMm;
        let renderedHeight = 0;
        let pageIndex = 0;

        while (renderedHeight < canvas.height) {
          const sliceHeight = Math.min(
            pageHeightPx,
            canvas.height - renderedHeight
          );
          const sliceCanvas = document.createElement("canvas");
          sliceCanvas.width = canvas.width;
          sliceCanvas.height = sliceHeight;

          const ctx = sliceCanvas.getContext("2d");
          if (!ctx) break;

          ctx.fillStyle = "#ffffff";
          ctx.fillRect(0, 0, sliceCanvas.width, sliceCanvas.height);
          ctx.drawImage(
            canvas,
            0,
            renderedHeight,
            canvas.width,
            sliceHeight,
            0,
            0,
            canvas.width,
            sliceHeight
          );

          const sliceData = sliceCanvas.toDataURL("image/png", 1.0);
          const sliceMm = sliceHeight / pxPerMm;

          if (pageIndex > 0) pdf.addPage();
          pdf.addImage(
            sliceData,
            "PNG",
            margin,
            margin,
            contentWidth,
            sliceMm,
            undefined,
            "FAST"
          );

          renderedHeight += sliceHeight;
          pageIndex += 1;
        }
      }

      const safeName = slugify(fileName) || "estimate";
      pdf.save(`${safeName}.pdf`);
    } catch (error) {
      console.error("Failed to generate estimate PDF", error);
      alert("Could not download the PDF. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleDownload}
      disabled={loading}
      className="btn-primary flex w-full items-center justify-center gap-3 px-8 py-4 text-base shadow-lg sm:w-auto sm:min-w-[260px]"
    >
      {loading ? (
        <>
          <FaSpinner className="animate-spin" size={18} />
          Preparing PDF...
        </>
      ) : (
        <>
          <FaDownload size={18} />
          Download estimate PDF
        </>
      )}
    </button>
  );
}
