export default {
  logger: {
    level: 'debug',
    transport: ['file', 'console'],
    exceptionFile: 'logs/exception.log',
    logFile: 'logs/console.log',
  },
  middlewares: {
    pre: [
      { ids: 'hrefstart' },
      { __ssdGlobalMiddlewares__: 'sd_7EmxxOk703exD5hF' },
      { __ssdGlobalMiddlewares__: 'cors' },
    ],
    post: [],
    sequences: {
      IDSAuthroizedAPIs: { pre: [{ ids: 'Authorize' }], post: [] },
      blogMiddleware: {
        pre: [{ list: 'MyMidd' }],
        post: [{ list: 'MyMiddl2' }],
      },
    },
  },
  ids: {
    client_id: 'FFgi0sIQvFBUmlZBsMFNj',
    client_secret:
      'Ypx059cRC8bjosDcXbU03jczhp03QN7svIGf1PZA6PtXhh_lKR7U9MN85O4V-VTBPcGf2hBZEJvdnLteIujz2A',
    issuerURL: 'https://ids.neutrinos.co',
    enabled: true,
  },
};
