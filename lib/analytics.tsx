import { GoogleAnalytics } from '@next/third-parties/google'

// Google Analytics component
export function Analytics() {
  if (!process.env.NEXT_PUBLIC_GA_ID) {
    return null
  }

  return <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID as string} />
}

// Hotjar tracking script
export function HotjarScript() {
  if (!process.env.NEXT_PUBLIC_HOTJAR_ID) {
    return null
  }

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:${process.env.NEXT_PUBLIC_HOTJAR_ID},hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `,
      }}
    />
  )
}

// Event tracking utilities
export const trackEvent = (eventName: string, parameters?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters)
  }
}

// Common event tracking functions
export const analytics = {
  // Portfolio interactions
  viewPortfolio: (itemId: string, category: string) => {
    trackEvent('view_portfolio_item', {
      item_id: itemId,
      category: category,
    })
  },

  // Contact form interactions
  contactFormSubmit: (formType: string) => {
    trackEvent('contact_form_submit', {
      form_type: formType,
    })
  },

  // Service inquiries
  serviceInquiry: (serviceName: string) => {
    trackEvent('service_inquiry', {
      service_name: serviceName,
    })
  },

  // Page views
  pageView: (pageName: string) => {
    trackEvent('page_view', {
      page_name: pageName,
    })
  },
}

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
  }
}
