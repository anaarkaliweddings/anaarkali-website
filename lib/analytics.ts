// Google Analytics 4 & Search Console Integration
export const GA_TRACKING_ID = 'G-XXXXXXXXXX'; // Replace with your GA4 ID

// Track page views
export const pageview = (url: URL): void => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', GA_TRACKING_ID, {
      page_location: url,
    });
  }
};

// Track events
export const event = (
  action: string,
  category: string,
  label?: string,
  value?: number
): void => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Core Web Vitals tracking
export const trackWebVitals = (): void => {
  if (typeof window !== 'undefined') {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS((metric) => event('CLS', 'Web Vitals', metric.name, Math.round(metric.value * 1000)));
      getFID((metric) => event('FID', 'Web Vitals', metric.name, Math.round(metric.value)));
      getFCP((metric) => event('FCP', 'Web Vitals', metric.name, Math.round(metric.value)));
      getLCP((metric) => event('LCP', 'Web Vitals', metric.name, Math.round(metric.value)));
      getTTFB((metric) => event('TTFB', 'Web Vitals', metric.name, Math.round(metric.value)));
    });
  }
};

// Wedding-specific event tracking
export const trackWeddingEvent = (eventName: string, details?: any) => {
  event(eventName, 'Wedding', JSON.stringify(details));
};

// Form submission tracking
export const trackFormSubmission = (formType: string) => {
  event('form_submit', 'Engagement', formType);
};

// Video interaction tracking
export const trackVideoInteraction = (action: string, videoName: string) => {
  event(action, 'Video', videoName);
};

// Consultation booking tracking
export const trackConsultationBooking = (type: string) => {
  event('consultation_booked', 'Conversion', type);
};
