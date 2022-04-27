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
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { Middleware } from '../../middleware/Middleware'; //_splitter_
import * as settings from '../../config/config'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import { GenericRDBMSOperations } from '../../utils/ndefault-sql/ExecuteSql/GenericRDBMSOperations'; //_splitter_
//append_imports_end
export class detail {
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
    this.serviceName = 'detail';
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
      instance = new detail(
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
      //appendnew_flow_detail_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: detail');

    //appendnew_flow_detail_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: detail');

    if (!this.swaggerDocument['paths']['/users/{name}']) {
      this.swaggerDocument['paths']['/users/{name}'] = {
        get: {
          summary: 'fetch blog details',
          description: 'call API with blog id',
          consumes: [],
          produces: [],
          parameters: [
            { in: 'path', name: 'name', description: 'name', required: true },
          ],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/users/{name}']['get'] = {
        summary: 'fetch blog details',
        description: 'call API with blog id',
        consumes: [],
        produces: [],
        parameters: [
          { in: 'path', name: 'name', description: 'name', required: true },
        ],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/users/:name`,
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
          bh = await this.getDetailsScript(bh);
          //appendnew_next_sd_renRHRTMcKQhgSWD
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_renRHRTMcKQhgSWD');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_detail_HttpIn
  }
  //   service flows_detail

  //appendnew_flow_detail_start

  async getDetailsScript(bh) {
    try {
      bh.local.query = `SELECT * FROM users WHERE name="${bh.input.params.name}"`;

      bh.local.response = {
        status: 200,
        data: bh.local.user,
        message: 'User Details Fetch Successfully',
      };
      bh = await this.sQLQuery(bh);
      //appendnew_next_getDetailsScript
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_mWoz9az8lBZDxXAW');
    }
  }

  async sQLQuery(bh) {
    try {
      let configObj = this.sdService.getConfigObj(
        'db-config',
        'sd_etWr60jvxRofVqty'
      );
      let connectionName;
      if (
        configObj &&
        configObj.hasOwnProperty('dbOption') &&
        configObj.dbOption.hasOwnProperty('name')
      ) {
        connectionName = configObj.dbOption.name;
      } else {
        throw new Error('Cannot find the selected config name');
      }
      let params = [];
      params = params ? params : [];
      bh.local.user = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.local.query,
        params
      );
      await this.httpResponse(bh);
      //appendnew_next_sQLQuery
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_GmcO5SQnZnMks4q5');
    }
  }

  async httpResponse(bh) {
    try {
      bh.web.res.status(200).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_huxtzk4K1o2O0Mut');
    }
  }

  async sd_s4W37bpxiJbgelw2(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          bh.error.message,
          '1',
          undefined,
          undefined
        )
      ) {
        bh = await this.blogError(bh);
      } else if (
        this.sdService.operators['eq'](
          bh.error.message,
          '2',
          undefined,
          undefined
        )
      ) {
        bh = await this.blogError2(bh);
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_s4W37bpxiJbgelw2');
    }
  }

  async blogError(bh) {
    try {
      bh.local.error = {
        code: 321,
        message: '321 Error !!!',
      };
      await this.hTTPErrorOut(bh);
      //appendnew_next_blogError
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_jpVGBUX6PmdfC8DP');
    }
  }

  async hTTPErrorOut(bh) {
    try {
      bh.web.res.status(500).send(bh.local.error);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_jRduVospBZcROvlg');
    }
  }

  async blogError2(bh) {
    try {
      bh.local.error = {
        code: 123,
        message: '123 Error !!!',
      };
      await this.hTTPErrorOut(bh);
      //appendnew_next_blogError2
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_1OI7nnoubbs9K2oo');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false ||
      (await this.error(bh))
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
  async error(bh) {
    const nodes = ['sd_2nxODheR1YKF8VI9'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_s4W37bpxiJbgelw2(bh);
      //appendnew_next_error
      return true;
    }
    return false;
  }
  //appendnew_flow_detail_Catch
}
