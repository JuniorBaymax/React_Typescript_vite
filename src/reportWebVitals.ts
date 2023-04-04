import { ReportHandler, WebVitalsMetric } from 'web-vitals';

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && typeof window !== 'undefined') {
    import('web-vitals').then(
      ({ getCLS, getFID, getFCP, getLCP, getTTFB }: typeof import('web-vitals')) => {
        getCLS(onPerfEntry as (metric: WebVitalsMetric) => void);
        getFID(onPerfEntry as (metric: WebVitalsMetric) => void);
        getFCP(onPerfEntry as (metric: WebVitalsMetric) => void);
        getLCP(onPerfEntry as (metric: WebVitalsMetric) => void);
        getTTFB(onPerfEntry as (metric: WebVitalsMetric) => void);
      },
    );
  }
};

export default reportWebVitals;
