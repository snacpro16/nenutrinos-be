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
//append_imports_end
export class idsutil {
  public client: any;
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
    this.serviceName = 'idsutil';
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
      instance = new idsutil(
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
      //appendnew_flow_idsutil_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: idsutil');

    //appendnew_flow_idsutil_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: idsutil');
    //appendnew_flow_idsutil_HttpIn
  }
  //   service flows_idsutil

  async getIDSClientInstance(clientInstance = null, ...others) {
    try {
      var bh: any = {
        input: {
          clientInstance: clientInstance,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_2atpSF402leDtJ9r(bh);
      //appendnew_next_getIDSClientInstance
      return (
        // formatting output variables
        {
          input: {
            clientInstance: bh.input.clientInstance,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dON1Dj1WMdRBLSD1');
    }
  }

  async getAuthorizationParams(authParams = null, ...others) {
    try {
      var bh: any = {
        input: {
          authParams: authParams,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_7YL6DXa7u6TVTwOf(bh);
      //appendnew_next_getAuthorizationParams
      return (
        // formatting output variables
        {
          input: {
            authParams: bh.input.authParams,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_CEzsFFGcYN0WtzRK');
    }
  }

  async handleTokenExpiry(existingSession = '', newSession = '', ...others) {
    try {
      var bh: any = {
        input: {
          existingSession: existingSession,
          newSession: newSession,
        },
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_Td7SEkoGS5kQ5exT(bh);
      //appendnew_next_handleTokenExpiry
      return (
        // formatting output variables
        {
          input: {
            newSession: bh.input.newSession,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_NdcADa72KE2SMkcT');
    }
  }

  //appendnew_flow_idsutil_start

  async sd_2atpSF402leDtJ9r(bh) {
    try {
      bh.local.client = this.client;
      bh = await this.sd_NDvR3YN7qjsaaO0E(bh);
      //appendnew_next_sd_2atpSF402leDtJ9r
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_2atpSF402leDtJ9r');
    }
  }

  async sd_NDvR3YN7qjsaaO0E(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['istype'](
          bh.local.client,
          'undefined',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_J9L3oEbqPtl8tfbi(bh);
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
        bh = await this.sd_PkriznIdTmteDYJN(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_uelw8O8rsKeG9lJ3');
    }
  }

  async sd_J9L3oEbqPtl8tfbi(bh) {
    try {
      const DEFAULT_HTTP_OPTIONS = {
        timeout: 60000,
      };

      custom.setHttpOptionsDefaults({
        timeout: DEFAULT_HTTP_OPTIONS.timeout,
      });
      log.info(
        `Identity server default HTTP options : ${DEFAULT_HTTP_OPTIONS}`
      );
      const issuer = await Issuer.discover(
        settings.default['ids']['issuerURL']
      );
      log.info(`Identity server discovered at : ${issuer.issuer}`);
      const client = await new issuer.Client({
        client_id: settings.default['ids']['client_id'],
        client_secret: settings.default['ids']['client_secret'],
      });
      client[custom.clock_tolerance] = parseInt(
        process.env.CLOCK_TOLERANCE.toString()
      );
      log.info('Client connected...');
      bh.input.clientInstance = client;
      bh = await this.sd_wT9EYjwm6xW54zf0(bh);
      //appendnew_next_sd_J9L3oEbqPtl8tfbi
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_yZuDc5M83glhBCA6');
    }
  }

  async sd_wT9EYjwm6xW54zf0(bh) {
    try {
      this.client = bh.input.clientInstance;
      //appendnew_next_sd_wT9EYjwm6xW54zf0
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_wT9EYjwm6xW54zf0');
    }
  }

  async sd_PkriznIdTmteDYJN(bh) {
    try {
      bh.input.clientInstance = this.client;
      //appendnew_next_sd_PkriznIdTmteDYJN
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_PkriznIdTmteDYJN');
    }
  }

  async sd_7YL6DXa7u6TVTwOf(bh) {
    try {
      bh.input.authParams = {
        scope: 'openid profile email address phone offline_access user',
        prompt: 'consent',
      };
      //appendnew_next_sd_7YL6DXa7u6TVTwOf
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_CP4dh2svKShU7KNH');
    }
  }

  async sd_Td7SEkoGS5kQ5exT(bh) {
    try {
      const tokenset = bh.input.existingSession.data.tokenset;
      bh.local.expires_at = tokenset['expires_at'] * 1000;
      bh.local.refreshTime = new Date().valueOf() + 300000; // 5min before
      bh = await this.sd_k3DExrGQArMQa22b(bh);
      //appendnew_next_sd_Td7SEkoGS5kQ5exT
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ws2eYIBAxqqZD6UH');
    }
  }

  async sd_k3DExrGQArMQa22b(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['gt'](
          bh.local.expires_at,
          bh.local.refreshTime,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_5nD65FpeyZEpXupm(bh);
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
        bh = await this.sd_nBCUXYI1J1IjPR1x(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_RpHYFR097lC1lfCo');
    }
  }

  async sd_5nD65FpeyZEpXupm(bh) {
    try {
      bh.input.newSession = bh.input.existingSession.data;
      //appendnew_next_sd_5nD65FpeyZEpXupm
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ULelxK7T6SV8Xzsk');
    }
  }

  async sd_nBCUXYI1J1IjPR1x(bh) {
    try {
      let outputVariables = await this.getIDSClientInstance(undefined);
      bh.input.client = outputVariables.input.clientInstance;

      bh = await this.sd_qL9Mviy7F4sc2t67(bh);
      //appendnew_next_sd_nBCUXYI1J1IjPR1x
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_tflm3Z2jM6ltZRrv');
    }
  }

  async sd_qL9Mviy7F4sc2t67(bh) {
    try {
      bh.local.refresh_token = await bh.input.client.introspect(
        bh.input.existingSession.data.tokenset.refresh_token,
        'refresh_token'
      );
      bh = await this.sd_ASHgsZiMGqDcx0SB(bh);
      //appendnew_next_sd_qL9Mviy7F4sc2t67
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_M3qZiYid9R7UmWXo');
    }
  }

  async sd_ASHgsZiMGqDcx0SB(bh) {
    try {
      let otherwiseFlag = true;
      if (
        this.sdService.operators['true'](
          bh.local.refresh_token.active,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_J6XKRgByHasFBSp8(bh);
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
        bh = await this.sd_EgUC5B8p6Vp4y70s(bh);
        otherwiseFlag = false;
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_GEkwTx3ELsj728Zp');
    }
  }

  async sd_J6XKRgByHasFBSp8(bh) {
    try {
      bh.input.newSession = { rotated: true };
      bh.input.newSession['tokenset'] = await bh.input.client.refresh(
        bh.input.existingSession.data.tokenset.refresh_token
      );
      bh.input.newSession['userInfo'] = await bh.input.client.userinfo(
        bh.input.newSession['tokenset']['access_token']
      );
      bh.input.newSession['tokenset']['claims'] = Object.assign(
        {},
        bh.input.newSession['tokenset'].claims()
      );
      //appendnew_next_sd_J6XKRgByHasFBSp8
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_mWL5zRzGJptDzx3u');
    }
  }

  async sd_EgUC5B8p6Vp4y70s(bh) {
    try {
      bh.input.newSession = false;
      //appendnew_next_sd_EgUC5B8p6Vp4y70s
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_9Jty3rYICLf13MXN');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false ||
      (await this.sd_P1y1RA2uIJj20OY6(bh))
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
  async sd_P1y1RA2uIJj20OY6(bh) {
    const nodes = ['handleTokenExpiry'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_EgUC5B8p6Vp4y70s(bh);
      //appendnew_next_sd_P1y1RA2uIJj20OY6
      return true;
    }
    return false;
  }
  //appendnew_flow_idsutil_Catch
}
