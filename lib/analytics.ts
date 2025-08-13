export const trackCallClick = (label: string) => () => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'call_button_click', {
      event_category: 'Calls',
      event_label: label,
      value: 1
    });
    console.log(label)
  }
};