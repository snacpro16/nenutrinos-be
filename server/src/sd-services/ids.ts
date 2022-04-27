let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { StatusCodes as httpStatusCodes } from 'http-status-codes'; //_splitter_
import * as cookieParser from 'cookie-parser'; //_splitter_
import { Readable } from 'stream'; //_splitter_
import { setInterval } from 'timers'; //_splitter_
import { Issuer, custom } from 'openid-client'; //_splitter_
import * as crypto from 'crypto'; //_splitter_
import * as url from 'url'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { Middleware } from '../middleware/Middleware'; //_splitter_
import * as settings from '../config/config'; //_splitter_
import log from '../utils/Logger'; //_splitter_
import * as sd_YM9ojuHp2X7eERK1 from './idsutil'; //_splitter_
//append_imports_end
export class ids {
  private sdService = new SDBaseService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;
  private swaggerDocument: Object;
  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    swaggerDocument,
    globalTimers
  ) {
    this.serviceName = 'ids';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.swaggerDocument = swaggerDocument;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    swaggerDocument?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new ids(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        swaggerDocument,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    try {
      //append_listeners
    } catch (e) {
      throw e;
    }
  }

  async mountTimers() {
    try {
      //appendnew_flow_ids_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: ids');

    let mw_hrefstart: Middleware = new Middleware(
      this.serviceName,
      'hrefstart',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          bh = await this.sd_Fwm17Tf9vFYiOfsD(bh);
          //appendnew_next_sd_8RArjOpxTm8VM5UU
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_8RArjOpxTm8VM5UU');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['hrefstart'] = mw_hrefstart;
    let mw_Authorize: Middleware = new Middleware(
      this.serviceName,
      'Authorize',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          bh = await this.sd_tNPlwKXHFHZyc1bx(bh);
          //appendnew_next_sd_mXN9m1uWg4HQaZyE
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_mXN9m1uWg4HQaZyE');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['Authorize'] = mw_Authorize;
    //appendnew_flow_ids_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: ids');

    if (!this.swaggerDocument['paths']['/login']) {
      this.swaggerDocument['paths']['/login'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/login']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/login`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_AmqU7zloOAgWRtbn(bh);
          //appendnew_next_sd_679s61EstmLzOGT7
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_679s61EstmLzOGT7');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/login/cb']) {
      this.swaggerDocument['paths']['/login/cb'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/login/cb']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/login/cb`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_e59ToPltrkowT3JW(bh);
          //appendnew_next_sd_jh2j2Gy5UlylXCPj
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_jh2j2Gy5UlylXCPj');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/user/info']) {
      this.swaggerDocument['paths']['/user/info'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/user/info']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/user/info`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_DCqBYTvbUkmu5kE7(bh);
          //appendnew_next_sd_5bvs64gz54UvkmL0
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_5bvs64gz54UvkmL0');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/logout']) {
      this.swaggerDocument['paths']['/logout'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/logout']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/logout`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_JDnrgq4iKhgcNL8w(bh);
          //appendnew_next_sd_Vdu9Fog7aP5LrtHK
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Vdu9Fog7aP5LrtHK');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    if (!this.swaggerDocument['paths']['/logout/cb']) {
      this.swaggerDocument['paths']['/logout/cb'] = {
        get: {
          summary: '',
          description: '',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/logout/cb']['get'] = {
        summary: '',
        description: '',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/logout/cb`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          bh = await this.sd_5fR0zIiNsgThFcG5(bh);
          //appendnew_next_sd_9hdcn2gt26XWX5ZU
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_9hdcn2gt26XWX5ZU');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_ids_HttpIn
  }
  //   service flows_ids

  //appendnew_flow_ids_start

  async sd_AmqU7zloOAgWRtbn(bh) {
    try {
      bh.local.idsConfigured = false;
      if (
        settings.default.hasOwnProperty('ids') &&
        settings.default['ids'].hasOwnProperty('client_id') &&
        settings.default['ids'].hasOwnProperty('client_secret')
      ) {
        bh.local.idsConfigured = true;
      }
      bh = await this.sd_svKH7Jj8HmOwHqEi(bh);
      //appendnew_next_sd_AmqU7zloOAgWRtbn
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_AmqU7zloOAgWRtbn');
    }
  }

  async sd_svKH7Jj8HmOwHqEi(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.idsConfigured,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_4wbkYYbEvAEVFPum(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_hy5XzoLDPHl0mxEC(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_svKH7Jj8HmOwHqEi');
    }
  }

  async sd_4wbkYYbEvAEVFPum(bh) {
    try {
      bh.local.reqParams = {
        state: crypto.randomBytes(16).toString('hex'),
        nonce: crypto.randomBytes(16).toString('hex'),
        isMobile: bh.input.query.isMobile,
        redirectTo: bh.input.query.redirectTo,
      };
      bh = await this.sd_j5c4kUtWFENWOQkd(bh);
      //appendnew_next_sd_4wbkYYbEvAEVFPum
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_4wbkYYbEvAEVFPum');
    }
  }

  async sd_j5c4kUtWFENWOQkd(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.reqParams;
      }
      bh = await this.sd_BeRL11bsQknDrkIk(bh);
      //appendnew_next_sd_j5c4kUtWFENWOQkd
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_j5c4kUtWFENWOQkd');
    }
  }

  async sd_BeRL11bsQknDrkIk(bh) {
    try {
      const sd_YM9ojuHp2X7eERK1Instance: sd_YM9ojuHp2X7eERK1.idsutil =
        sd_YM9ojuHp2X7eERK1.idsutil.getInstance();
      let outputVariables =
        await sd_YM9ojuHp2X7eERK1Instance.getIDSClientInstance(undefined);
      bh.input.client = outputVariables.input.clientInstance;

      bh = await this.sd_uzyd31MLsbmsKCiq(bh);
      //appendnew_next_sd_BeRL11bsQknDrkIk
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_BeRL11bsQknDrkIk');
    }
  }

  async sd_uzyd31MLsbmsKCiq(bh) {
    try {
      const sd_YM9ojuHp2X7eERK1Instance: sd_YM9ojuHp2X7eERK1.idsutil =
        sd_YM9ojuHp2X7eERK1.idsutil.getInstance();
      let outputVariables =
        await sd_YM9ojuHp2X7eERK1Instance.getAuthorizationParams(undefined);
      bh.input.authParams = outputVariables.input.authParams;

      bh = await this.sd_gYnpNGtNgp9DrTcU(bh);
      //appendnew_next_sd_uzyd31MLsbmsKCiq
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_uzyd31MLsbmsKCiq');
    }
  }

  async sd_gYnpNGtNgp9DrTcU(bh) {
    try {
      const authorizationRequest = Object.assign(
        {
          redirect_uri: url.resolve(bh.web.req.href, '/api/login/cb'),
          scope: 'openid profile email address phone user',
          state: bh.local.reqParams.state,
          nonce: bh.local.reqParams.nonce,
          response_type: bh.input.client.response_types[0],
        },
        bh.input.authParams
      );

      bh.local.redirectHeaders = {
        location: bh.input.client.authorizationUrl(authorizationRequest),
      };

      await this.sd_viKipmWhHvq8Q3RY(bh);
      //appendnew_next_sd_gYnpNGtNgp9DrTcU
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_gYnpNGtNgp9DrTcU');
    }
  }

  async sd_viKipmWhHvq8Q3RY(bh) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_viKipmWhHvq8Q3RY');
    }
  }

  async sd_hy5XzoLDPHl0mxEC(bh) {
    try {
      bh.local.res = {
        message:
          'IDS client not registered. Register on the Neutrinos Stuido and try again',
      };
      await this.sd_2UOtW58QL3jywIU9(bh);
      //appendnew_next_sd_hy5XzoLDPHl0mxEC
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_hy5XzoLDPHl0mxEC');
    }
  }

  async sd_2UOtW58QL3jywIU9(bh) {
    try {
      bh.web.res.status(404).send(bh.local.res.message);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_2UOtW58QL3jywIU9');
    }
  }

  async sd_Fwm17Tf9vFYiOfsD(bh) {
    try {
      const protocol =
        bh.input.headers['x-forwarded-proto'] || bh.web.req.protocol;
      const href =
        protocol + '://' + bh.web.req.get('Host') + bh.web.req.originalUrl;
      bh.web.req.href = href;
      await this.sd_LV9PzvtSFLME8xd2(bh);
      //appendnew_next_sd_Fwm17Tf9vFYiOfsD
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Fwm17Tf9vFYiOfsD');
    }
  }

  async sd_LV9PzvtSFLME8xd2(bh) {
    try {
      bh.web.next();
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_LV9PzvtSFLME8xd2');
    }
  }

  async sd_e59ToPltrkowT3JW(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.input.sessionParams = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      bh = await this.sd_dxYCwQkBPVE4oKA6(bh);
      //appendnew_next_sd_e59ToPltrkowT3JW
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_e59ToPltrkowT3JW');
    }
  }

  async sd_dxYCwQkBPVE4oKA6(bh) {
    try {
      const sd_YM9ojuHp2X7eERK1Instance: sd_YM9ojuHp2X7eERK1.idsutil =
        sd_YM9ojuHp2X7eERK1.idsutil.getInstance();
      let outputVariables =
        await sd_YM9ojuHp2X7eERK1Instance.getIDSClientInstance(undefined);
      bh.input.client = outputVariables.input.clientInstance;

      bh = await this.sd_XlhDW0aOyVuzNwWO(bh);
      //appendnew_next_sd_dxYCwQkBPVE4oKA6
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dxYCwQkBPVE4oKA6');
    }
  }

  async sd_XlhDW0aOyVuzNwWO(bh) {
    try {
      const params = bh.input.client.callbackParams(bh.web.req);
      let tokenset = await bh.input.client.callback(
        url.resolve(bh.web.req.href, 'cb'),
        params,
        {
          nonce: bh.input.sessionParams.data.nonce,
          state: bh.input.sessionParams.data.state,
        }
      );

      bh.local.redirectTo = bh.input.sessionParams.data.redirectTo;

      bh.local.userDetails = {
        tokenset: Object.assign({}, tokenset),
        userInfo: await bh.input.client.userinfo(tokenset['access_token']),
      };
      bh.local.userDetails['tokenset']['claims'] = Object.assign(
        {},
        tokenset.claims()
      );
      bh = await this.sd_Wlnx4vijTBX8naD8(bh);
      //appendnew_next_sd_XlhDW0aOyVuzNwWO
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_XlhDW0aOyVuzNwWO');
    }
  }

  async sd_Wlnx4vijTBX8naD8(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.userDetails;
      }
      bh = await this.sd_bkqLgOYKZscVnVjO(bh);
      //appendnew_next_sd_Wlnx4vijTBX8naD8
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Wlnx4vijTBX8naD8');
    }
  }

  async sd_bkqLgOYKZscVnVjO(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['se'](
          bh.input.sessionParams.data.isMobile,
          'true',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_Ga5TyGE309BEhoSV(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_MMqF1fEWLXxxTHEi(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_bkqLgOYKZscVnVjO');
    }
  }

  async sd_Ga5TyGE309BEhoSV(bh) {
    try {
      bh.local.htmlResponse = `
 <html>
   <script>
      let _timer;
      _timer = setInterval(() => {
                  if(window.webkit) {
                      window.webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify({'auth': 'success'}));
                      clearInterval(_timer);
                  }
              }, 250);
      
   </script>
</html>`;
      await this.sd_6wudAgA4KOrElYji(bh);
      //appendnew_next_sd_Ga5TyGE309BEhoSV
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Ga5TyGE309BEhoSV');
    }
  }

  async sd_6wudAgA4KOrElYji(bh) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script-src 'sha256-wcX+PzUovy0uNFqMGCbbbzuT5v4aAxU9obFNyt6BHAQ='",
      });

      bh.web.res.status(200).send(bh.local.htmlResponse);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_6wudAgA4KOrElYji');
    }
  }

  async sd_MMqF1fEWLXxxTHEi(bh) {
    try {
      bh.local.redirectHeaders = {
        location: bh.local.redirectTo,
      };
      await this.sd_pZpR5XCtDElwVew1(bh);
      //appendnew_next_sd_MMqF1fEWLXxxTHEi
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_MMqF1fEWLXxxTHEi');
    }
  }

  async sd_pZpR5XCtDElwVew1(bh) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('Redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_pZpR5XCtDElwVew1');
    }
  }

  async sd_DCqBYTvbUkmu5kE7(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.session = JSON.parse(JSON.stringify(requestObject.session));
      }

      await this.sd_gv6JQNuJBSZkIWap(bh);
      //appendnew_next_sd_DCqBYTvbUkmu5kE7
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_DCqBYTvbUkmu5kE7');
    }
  }

  async sd_gv6JQNuJBSZkIWap(bh) {
    try {
      bh.web.res.status(200).send(bh.local.session.data.userInfo);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_gv6JQNuJBSZkIWap');
    }
  }

  async sd_RTSilCkyYe9iA2NT(bh) {
    try {
      bh.web.res.redirect('/api/login');
      //appendnew_next_sd_RTSilCkyYe9iA2NT
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_RTSilCkyYe9iA2NT');
    }
  }

  async sd_JDnrgq4iKhgcNL8w(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      bh = await this.sd_tFb795paHsOeYcNC(bh);
      //appendnew_next_sd_JDnrgq4iKhgcNL8w
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_JDnrgq4iKhgcNL8w');
    }
  }

  async sd_tFb795paHsOeYcNC(bh) {
    try {
      bh.local.sessionExists = false;
      if (
        bh.local.sessionData &&
        bh.local.sessionData.data &&
        bh.local.sessionData.data.tokenset
      ) {
        bh.local.sessionData['data']['redirectTo'] =
          bh.input.query['redirectTo'];
        bh.local.sessionData['data']['isMobile'] = bh.input.query['isMobile'];
        bh.local.sessionExists = true;
      } else {
        delete bh.local.sessionData['redirectTo'];
      }
      bh = await this.sd_uoXTzHqGlhZ8BTXV(bh);
      //appendnew_next_sd_tFb795paHsOeYcNC
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_tFb795paHsOeYcNC');
    }
  }

  async sd_uoXTzHqGlhZ8BTXV(bh) {
    try {
      const sd_YM9ojuHp2X7eERK1Instance: sd_YM9ojuHp2X7eERK1.idsutil =
        sd_YM9ojuHp2X7eERK1.idsutil.getInstance();
      let outputVariables =
        await sd_YM9ojuHp2X7eERK1Instance.getIDSClientInstance(undefined);
      bh.input.client = outputVariables.input.clientInstance;

      bh = await this.sd_D1M3otx4nGx0g3os(bh);
      //appendnew_next_sd_uoXTzHqGlhZ8BTXV
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_uoXTzHqGlhZ8BTXV');
    }
  }

  async sd_D1M3otx4nGx0g3os(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.sessionExists,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_dmi45ROBZzS4nU18(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_KcPAkM7l4GFiMSZM(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_D1M3otx4nGx0g3os');
    }
  }

  async sd_dmi45ROBZzS4nU18(bh) {
    try {
      await Promise.all([
        bh.local.sessionData.data.tokenset.access_token
          ? bh.input.client.revoke(
              bh.local.sessionData.data.tokenset.access_token,
              'access_token'
            )
          : undefined,
        bh.local.sessionData.data.tokenset.refresh_token
          ? bh.input.client.revoke(
              bh.local.sessionData.data.tokenset.refresh_token,
              'refresh_token'
            )
          : undefined,
      ]);

      bh.local.res = {
        idsURL: url.format(
          Object.assign(
            url.parse(bh.input.client.issuer.end_session_endpoint),
            {
              search: null,
              query: {
                id_token_hint: bh.local.sessionData.data.tokenset.id_token,
                post_logout_redirect_uri: url.resolve(
                  bh.web.req.href,
                  '/api/logout/cb'
                ),
                client_id: settings.default['ids']['client_id'],
              },
            }
          )
        ),
        sessionExists: true,
      };

      // Remove user info and tokenset before login redirect
      bh.local.sessionData.data.tokenset = null;
      bh.local.sessionData.data.userInfo = null;
      bh = await this.sd_dCWCI7Lqpk6tk1KJ(bh);
      //appendnew_next_sd_dmi45ROBZzS4nU18
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dmi45ROBZzS4nU18');
    }
  }

  async sd_dCWCI7Lqpk6tk1KJ(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.sessionData.data;
      }
      await this.sd_LO7p84BPWnLOZ7Yw(bh);
      //appendnew_next_sd_dCWCI7Lqpk6tk1KJ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dCWCI7Lqpk6tk1KJ');
    }
  }

  async sd_LO7p84BPWnLOZ7Yw(bh) {
    try {
      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_LO7p84BPWnLOZ7Yw');
    }
  }

  async sd_KcPAkM7l4GFiMSZM(bh) {
    try {
      bh.local.res = {
        sessionExists: false,
      };
      await this.sd_LO7p84BPWnLOZ7Yw(bh);
      //appendnew_next_sd_KcPAkM7l4GFiMSZM
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_KcPAkM7l4GFiMSZM');
    }
  }

  async sd_5fR0zIiNsgThFcG5(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      bh = await this.sd_fUVepFiHvcKsJawW(bh);
      //appendnew_next_sd_5fR0zIiNsgThFcG5
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_5fR0zIiNsgThFcG5');
    }
  }

  async sd_fUVepFiHvcKsJawW(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        let p = function () {
          return new Promise<void | string>((resolve, reject) => {
            requestObject.session.destroy(function (error) {
              if (error) {
                return reject(error);
              }
              return resolve();
            });
          });
        };
        await p();
      }
      bh = await this.sd_fE3SwhkNiYabXesN(bh);
      //appendnew_next_sd_fUVepFiHvcKsJawW
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_fUVepFiHvcKsJawW');
    }
  }

  async sd_fE3SwhkNiYabXesN(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['se'](
          bh.local.sessionData.data.isMobile,
          'true',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_sdoGceRCwH86Q4QB(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_yzNhLrwbtR8WLbc0(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_fE3SwhkNiYabXesN');
    }
  }

  async sd_sdoGceRCwH86Q4QB(bh) {
    try {
      bh.local.res = `<html>
   <script>
      var _timer;
      _timer = setInterval(() => {
                  if(window.webkit) {
                      window.webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify({'auth': 'success'}));
                      clearInterval(_timer);
                  }
              }, 250);
      
   </script>
</html>`;
      await this.sd_h7PmEPkF40Hj353H(bh);
      //appendnew_next_sd_sdoGceRCwH86Q4QB
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_sdoGceRCwH86Q4QB');
    }
  }

  async sd_h7PmEPkF40Hj353H(bh) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script 'sha256-j4HHWBMKh2PoLEAu017BWktgUmmL7VVMjnHuNWUHGOg='",
      });

      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_h7PmEPkF40Hj353H');
    }
  }

  async sd_yzNhLrwbtR8WLbc0(bh) {
    try {
      bh.local.redirectHeaders = {
        location: bh.local.sessionData.data.redirectTo,
      };
      await this.sd_PXv6PmBbxBtDQAYf(bh);
      //appendnew_next_sd_yzNhLrwbtR8WLbc0
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_yzNhLrwbtR8WLbc0');
    }
  }

  async sd_PXv6PmBbxBtDQAYf(bh) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_PXv6PmBbxBtDQAYf');
    }
  }

  async sd_tNPlwKXHFHZyc1bx(bh) {
    try {
      bh.local = {};
      bh = await this.sd_H1biJy03Yrd7Vg3V(bh);
      //appendnew_next_sd_tNPlwKXHFHZyc1bx
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_tNPlwKXHFHZyc1bx');
    }
  }

  async sd_H1biJy03Yrd7Vg3V(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      bh = await this.sd_SGs1kZNBUfDHwWwd(bh);
      //appendnew_next_sd_H1biJy03Yrd7Vg3V
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_H1biJy03Yrd7Vg3V');
    }
  }

  async sd_SGs1kZNBUfDHwWwd(bh) {
    try {
      bh.local.sessionExists = false;

      if (
        bh.local.sessionData &&
        bh.local.sessionData.data &&
        bh.local.sessionData.data.tokenset &&
        bh.local.sessionData.data.tokenset.access_token &&
        bh.local.sessionData.data.tokenset.refresh_token
      ) {
        bh.local.sessionExists = true;
      }
      bh = await this.sd_6VTL3J2PvssZXtXL(bh);
      //appendnew_next_sd_SGs1kZNBUfDHwWwd
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_SGs1kZNBUfDHwWwd');
    }
  }

  async sd_6VTL3J2PvssZXtXL(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.sessionExists,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_c9Ur6oPkt2357zT7(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_hGm6Jexh0UQdIstD(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_6VTL3J2PvssZXtXL');
    }
  }

  async sd_c9Ur6oPkt2357zT7(bh) {
    try {
      const sd_YM9ojuHp2X7eERK1Instance: sd_YM9ojuHp2X7eERK1.idsutil =
        sd_YM9ojuHp2X7eERK1.idsutil.getInstance();
      let outputVariables = await sd_YM9ojuHp2X7eERK1Instance.handleTokenExpiry(
        bh.local.sessionData,
        undefined
      );
      bh.local.newSession = outputVariables.input.newSession;

      bh = await this.sd_wRco9y49CXPSQ2Cg(bh);
      //appendnew_next_sd_c9Ur6oPkt2357zT7
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_c9Ur6oPkt2357zT7');
    }
  }

  async sd_wRco9y49CXPSQ2Cg(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['false'](
          bh.local.newSession,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_MdY4YHzVV7Ulf6dz(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_Znq1huBwvxLIegJZ(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_wRco9y49CXPSQ2Cg');
    }
  }

  async sd_MdY4YHzVV7Ulf6dz(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        let p = function () {
          return new Promise<void | string>((resolve, reject) => {
            requestObject.session.destroy(function (error) {
              if (error) {
                return reject(error);
              }
              return resolve();
            });
          });
        };
        await p();
      }
      bh = await this.sd_L0j7WUD6LuRk6i4U(bh);
      //appendnew_next_sd_MdY4YHzVV7Ulf6dz
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_MdY4YHzVV7Ulf6dz');
    }
  }

  async sd_L0j7WUD6LuRk6i4U(bh) {
    try {
      bh.local.res = {
        code: 'TOKEN_EXPIRED',
        message: 'Token invalid or access revoked',
      };
      await this.sd_F8iCjCeZ6Ll8CUcI(bh);
      //appendnew_next_sd_L0j7WUD6LuRk6i4U
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_L0j7WUD6LuRk6i4U');
    }
  }

  async sd_F8iCjCeZ6Ll8CUcI(bh) {
    try {
      bh.web.res.status(403).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_F8iCjCeZ6Ll8CUcI');
    }
  }

  async sd_Znq1huBwvxLIegJZ(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.newSession.rotated,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_5L1OWzFDhBPmNazq(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_4CUKKkTHbYdgOqhW(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Znq1huBwvxLIegJZ');
    }
  }

  async sd_5L1OWzFDhBPmNazq(bh) {
    try {
      delete bh.local.newSession.rotated;
      bh = await this.sd_lpgw97ExxlpHmHcr(bh);
      //appendnew_next_sd_5L1OWzFDhBPmNazq
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_5L1OWzFDhBPmNazq');
    }
  }

  async sd_lpgw97ExxlpHmHcr(bh) {
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.newSession;
      }
      await this.sd_4CUKKkTHbYdgOqhW(bh);
      //appendnew_next_sd_lpgw97ExxlpHmHcr
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_lpgw97ExxlpHmHcr');
    }
  }

  async sd_4CUKKkTHbYdgOqhW(bh) {
    try {
      bh.web.next();
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_4CUKKkTHbYdgOqhW');
    }
  }

  async sd_hGm6Jexh0UQdIstD(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['cont'](
          bh.input.path,
          '/user/info',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_FXcyGBTwxF9VFYLM(bh);
        otherwiseFlag = false;
      }
      if (
        this.sdService.operators['else'](
          otherwiseFlag,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_xQ0VvBVb2kP48mKZ(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_hGm6Jexh0UQdIstD');
    }
  }

  async sd_FXcyGBTwxF9VFYLM(bh) {
    try {
      bh.local.res = { message: 'Session expired' };
      await this.sd_F8iCjCeZ6Ll8CUcI(bh);
      //appendnew_next_sd_FXcyGBTwxF9VFYLM
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_FXcyGBTwxF9VFYLM');
    }
  }

  async sd_xQ0VvBVb2kP48mKZ(bh) {
    try {
      bh.local.res = { code: 'NO_SESSION', message: 'Session not present' };
      await this.sd_F8iCjCeZ6Ll8CUcI(bh);
      //appendnew_next_sd_xQ0VvBVb2kP48mKZ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_xQ0VvBVb2kP48mKZ');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false ||
      (await this.sd_ZNUSMRJ36vIfOuRt(bh)) ||
      (await this.sd_4yCmgzIz8mF9Ya4p(bh))
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  async sd_ZNUSMRJ36vIfOuRt(bh) {
    const nodes = [
      'sd_uzyd31MLsbmsKCiq',
      'sd_jh2j2Gy5UlylXCPj',
      'sd_dxYCwQkBPVE4oKA6',
      'sd_XlhDW0aOyVuzNwWO',
      'sd_e59ToPltrkowT3JW',
      'sd_bkqLgOYKZscVnVjO',
      'sd_Ga5TyGE309BEhoSV',
      'sd_MMqF1fEWLXxxTHEi',
      'sd_6wudAgA4KOrElYji',
      'sd_pZpR5XCtDElwVew1',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_RTSilCkyYe9iA2NT(bh);
      //appendnew_next_sd_ZNUSMRJ36vIfOuRt
      return true;
    }
    return false;
  }
  async sd_4yCmgzIz8mF9Ya4p(bh) {
    const nodes = ['sd_c9Ur6oPkt2357zT7'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_L0j7WUD6LuRk6i4U(bh);
      //appendnew_next_sd_4yCmgzIz8mF9Ya4p
      return true;
    }
    return false;
  }
  //appendnew_flow_ids_Catch
}
