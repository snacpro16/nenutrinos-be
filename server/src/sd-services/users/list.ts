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
export class list {
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
    this.serviceName = 'list';
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
      instance = new list(
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
      //appendnew_flow_list_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: list');

    //appendnew_flow_list_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: list');

    if (!this.swaggerDocument['paths']['/users']) {
      this.swaggerDocument['paths']['/users'] = {
        get: {
          summary: 'Fetching blogs list',
          description: 'for fetching details call the API with GET  method',
          consumes: [],
          produces: [],
          parameters: [],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/users']['get'] = {
        summary: 'Fetching blogs list',
        description: 'for fetching details call the API with GET  method',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/users`,
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
          bh = await this.userListScript(bh);
          //appendnew_next_sd_VNl08xiTsdTKJfVx
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_VNl08xiTsdTKJfVx');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_list_HttpIn
  }
  //   service flows_list

  //appendnew_flow_list_start

  async userListScript(bh) {
    try {
      bh.local.query = 'SELECT * FROM users';

      bh.local.response = {
        status: 200,
        data: bh.local.users,
        message: 'Users Fetch Successfully',
      };
      bh = await this.sQLQuery(bh);
      //appendnew_next_userListScript
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_QNef0YehNjB0gHVb');
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
      bh.local.users = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.local.query,
        params
      );
      bh = await this.userListScript1(bh);
      //appendnew_next_sQLQuery
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_mmaRV8U35x5aKW66');
    }
  }

  async userListScript1(bh) {
    try {
      bh.local.response = {
        status: 200,
        data: bh.local.users,
        message: 'Users Fetch Successfully',
      };
      await this.hTTPResponse(bh);
      //appendnew_next_userListScript1
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_7CraUnErXY7Ra0sO');
    }
  }

  async hTTPResponse(bh) {
    try {
      bh.web.res.status(200).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_RdynT6ippnfNv4iL');
    }
  }

  async sd_Z6xriyQHJPYT6UoI(bh) {
    try {
      if (
        this.sdService.operators['eq'](
          bh.error.message,
          '1',
          undefined,
          undefined
        )
      ) {
        bh = await this.userError(bh);
      } else if (
        this.sdService.operators['eq'](
          bh.error.message,
          '2',
          undefined,
          undefined
        )
      ) {
        bh = await this.blogError2F(bh);
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Z6xriyQHJPYT6UoI');
    }
  }

  async userError(bh) {
    try {
      bh.local.error = {
        code: bh.error.message,
        message: 'Opps.. somthing went wrong !!!!',
      };
      await this.hTTPErrorOut(bh);
      //appendnew_next_userError
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_x1KZTohc8WyN81ws');
    }
  }

  async hTTPErrorOut(bh) {
    try {
      bh.web.res.status(500).send(bh.local.error);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_VTiZt14wLWMHHiiD');
    }
  }

  async blogError2F(bh) {
    try {
      bh.local.error = {
        code: bh.error.message,
        message: 'Opps.. somthing went wrong !!!!',
      };
      await this.hTTPErrorOut(bh);
      //appendnew_next_blogError2F
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_eS5WAIqLb0aYA7MM');
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
    const nodes = ['sd_Oz8ikA0XSnKaaaME'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_Z6xriyQHJPYT6UoI(bh);
      //appendnew_next_error
      return true;
    }
    return false;
  }
  //appendnew_flow_list_Catch
}
