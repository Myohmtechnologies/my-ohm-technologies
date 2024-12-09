// Fonction pour envoyer des événements à Google Analytics
export const trackEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, eventParams);
  }
};

// 1. Événements de navigation
export const navigationEvents = {
  pageView: (pagePath: string) => trackEvent('page_view', {
    page_path: pagePath,
    timestamp: new Date().toISOString(),
  }),
  scrollDepth: (depth: number) => trackEvent('scroll_depth', {
    depth_percentage: depth,
    timestamp: new Date().toISOString(),
  }),
  timeOnPage: (seconds: number, pagePath: string) => trackEvent('time_on_page', {
    duration_seconds: seconds,
    page_path: pagePath,
    timestamp: new Date().toISOString(),
  }),
};

// 2. Événements d'engagement
export const engagementEvents = {
  ctaClick: (buttonName: string, location: string) => trackEvent('cta_click', {
    button_name: buttonName,
    location,
    timestamp: new Date().toISOString(),
  }),
  videoInteraction: (action: 'play' | 'pause' | 'complete', videoId: string) => trackEvent('video_interaction', {
    action,
    video_id: videoId,
    timestamp: new Date().toISOString(),
  }),
  documentDownload: (documentName: string) => trackEvent('document_download', {
    document_name: documentName,
    timestamp: new Date().toISOString(),
  }),
};

// 3. Événements du formulaire de contact
export const contactFormEvents = {
  formStart: () => trackEvent('contact_form_start'),
  formSubmit: (success: boolean, subject: string) => trackEvent('contact_form_submit', {
    success,
    subject,
    timestamp: new Date().toISOString(),
  }),
  formError: (errorType: string) => trackEvent('contact_form_error', {
    error_type: errorType,
    timestamp: new Date().toISOString(),
  }),
};

// 4. Événements du simulateur
export type SimulatorStep = 'consommation' | 'region' | 'contact';

export const simulatorEvents = {
  simulatorStart: (source: string) => trackEvent('simulator_start', {
    source,
    timestamp: new Date().toISOString(),
  }),
  stepView: (step: SimulatorStep) => trackEvent('simulator_step_view', {
    step_name: step,
    timestamp: new Date().toISOString(),
  }),
  stepComplete: (step: SimulatorStep, data?: any) => trackEvent('simulator_step_complete', {
    step_name: step,
    step_data: data,
    timestamp: new Date().toISOString(),
  }),
  stepAbandoned: (step: SimulatorStep) => trackEvent('simulator_step_abandoned', {
    step_name: step,
    timestamp: new Date().toISOString(),
  }),
  simulatorComplete: (data: {
    consommation: number,
    region: string,
    success: boolean
  }) => trackEvent('simulator_complete', {
    ...data,
    timestamp: new Date().toISOString(),
  }),
};

// 5. Événements de contact téléphonique
export const phoneEvents = {
  phoneClick: (location: string) => trackEvent('phone_number_click', {
    location,
    timestamp: new Date().toISOString(),
  }),
  callDuration: (duration: number) => trackEvent('call_duration', {
    duration_seconds: duration,
    timestamp: new Date().toISOString(),
  }),
};

// 6. Événements commerciaux
export const commercialEvents = {
  promotionView: (promotionId: string) => trackEvent('promotion_view', {
    promotion_id: promotionId,
    timestamp: new Date().toISOString(),
  }),
  promotionClick: (promotionId: string) => trackEvent('promotion_click', {
    promotion_id: promotionId,
    timestamp: new Date().toISOString(),
  }),
  regionSelect: (region: string) => trackEvent('region_select', {
    region,
    timestamp: new Date().toISOString(),
  }),
};

// 7. Événements techniques
export const technicalEvents = {
  errorOccurred: (errorType: string, errorMessage: string) => trackEvent('error_occurred', {
    error_type: errorType,
    error_message: errorMessage,
    timestamp: new Date().toISOString(),
  }),
  performanceMetric: (metricName: string, value: number) => trackEvent('performance_metric', {
    metric_name: metricName,
    value,
    timestamp: new Date().toISOString(),
  }),
};
