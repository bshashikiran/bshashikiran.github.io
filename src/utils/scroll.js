/**
 * Smoothly scrolls to an element by ID using native hardware-accelerated browser smoothing.
 */
export function scrollToElement(elementId, offset = 20, onComplete) {
  const el = document.getElementById(elementId);
  if (!el) return;

  const rect = el.getBoundingClientRect();
  const targetY = Math.max(0, rect.top + window.pageYOffset - offset);

  window.scrollTo({
    top: targetY,
    behavior: "smooth"
  });

  if (onComplete) {
    setTimeout(onComplete, 400);
  }
}

export function smoothScrollTo(targetY, onComplete) {
  window.scrollTo({
    top: targetY,
    behavior: "smooth"
  });

  if (onComplete) {
    setTimeout(onComplete, 400);
  }
}
