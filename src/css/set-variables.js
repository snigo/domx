function setCSSVariables(element, entries) {
  if (!element || !entries) return undefined;
  if (typeof element !== 'object' || typeof entries !== 'object') return undefined;

  if (!Array.isArray(entries)) {
    entries = Object.entries(entries);
  }

  if ('style' in element && 'setProperty' in element.style) {
    entries.forEach(([key, value]) => {
      element.style.setProperty(`--${key}`, value);
    });
  }

  return undefined;
}

export default setCSSVariables;
