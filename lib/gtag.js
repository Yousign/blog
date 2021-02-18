export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

export const consentGranted = () => {
  window.gtag('consent', 'default', {
    analytics_storage: 'granted',
  });
};
export const consentDenied = () => {
  window.gtag('consent', 'default', {
    analytics_storage: 'denied',
  });
};
