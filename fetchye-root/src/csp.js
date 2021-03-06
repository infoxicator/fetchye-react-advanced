import contentSecurityPolicyBuilder from 'content-security-policy-builder';

// Read about csp:
// https://github.com/americanexpress/one-app/blob/main/docs/api/modules/App-Configuration.md#csp
export default contentSecurityPolicyBuilder({
  directives: {
    reportUri: process.env.ONE_CLIENT_CSP_REPORTING_URL,
    defaultSrc: [
      '*',
    ],
    scriptSrc: [
      '*',
    ],
    imgSrc: [
      '*',
    ],
    styleSrc: [
      '*',
      "'unsafe-inline'",
    ],
    connectSrc: [
      '*',
    ],
  },
});
