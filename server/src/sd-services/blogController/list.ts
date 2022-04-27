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

    let mw_MyMidd: Middleware = new Middleware(
      this.serviceName,
      'MyMidd',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          bh = await this.sd_DJocUXXGxJvT3b7U(bh);
          //appendnew_next_sd_ee0n1dMdOHGjTkw7
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_ee0n1dMdOHGjTkw7');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['MyMidd'] = mw_MyMidd;
    let mw_MyMiddl2: Middleware = new Middleware(
      this.serviceName,
      'MyMiddl2',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          bh = await this.sd_4kVFpJjUo905rrnI(bh);
          //appendnew_next_sd_8TsnLlnuEz3T4ewq
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_8TsnLlnuEz3T4ewq');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['MyMiddl2'] = mw_MyMiddl2;
    //appendnew_flow_list_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: list');

    if (!this.swaggerDocument['paths']['/blogs']) {
      this.swaggerDocument['paths']['/blogs'] = {
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
      this.swaggerDocument['paths']['/blogs']['get'] = {
        summary: 'Fetching blogs list',
        description: 'for fetching details call the API with GET  method',
        consumes: [],
        produces: [],
        parameters: [],
        responses: {},
      };
    }
    this.app['get'](
      `${this.serviceBasePath}/blogs`,
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
          bh = await this.blogListScript(bh);
          //appendnew_next_sd_Oy9kBCdOVXmHKJ1b
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Oy9kBCdOVXmHKJ1b');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_list_HttpIn
  }
  //   service flows_list

  //appendnew_flow_list_start

  async blogListScript(bh) {
    try {
      bh.local.query = 'SELECT * FROM blogs';
      // bh.local.query = 'Delete FROM blogs where id=0';
      // throw  new Error(2)
      bh = await this.sQLQuery(bh);
      //appendnew_next_blogListScript
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Oz8ikA0XSnKaaaME');
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
      let params = undefined;
      params = params ? params : [];
      bh.local.blogs = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.local.query,
        params
      );
      bh = await this.blogListScript1(bh);
      //appendnew_next_sQLQuery
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_DHCkLhd7VKpj1QvD');
    }
  }

  async blogListScript1(bh) {
    try {
      bh.web.req.blogs = bh.local.blogs;

      await this.hTTPResponse(bh);
      //appendnew_next_blogListScript1
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ihvQqh5xH51dIUzj');
    }
  }

  async hTTPResponse(bh) {
    try {
      bh.web.res.status(200).send(bh.local.blogs);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_eagPH1D0HKqzBTks');
    }
  }

  async sd_JHDhGbPtCotcq5j5(bh) {
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
        bh = await this.blogError2F(bh);
      }

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_JHDhGbPtCotcq5j5');
    }
  }

  async blogError(bh) {
    try {
      bh.local.error = {
        code: bh.error.message,
        message: 'Opps.. somthing went wrong !!!!',
      };
      await this.hTTPErrorOut(bh);
      //appendnew_next_blogError
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ZfQIjn2WO5nYRTJS');
    }
  }

  async hTTPErrorOut(bh) {
    try {
      bh.web.res.status(500).send(bh.local.error);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_GR8mm66e3eK7NX88');
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
      return await this.errorHandler(bh, e, 'sd_vhMiZz4Pwv3L6N33');
    }
  }

  async sd_DJocUXXGxJvT3b7U(bh) {
    try {
      console.log('Hi Mid');
      await this.sd_KvM72s1Vj3xNE4Et(bh);
      //appendnew_next_sd_DJocUXXGxJvT3b7U
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_DJocUXXGxJvT3b7U');
    }
  }

  async sd_KvM72s1Vj3xNE4Et(bh) {
    try {
      bh.web.res.set({ type: 'bh', value: '' });

      bh.web.next();
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_KvM72s1Vj3xNE4Et');
    }
  }

  async sd_4kVFpJjUo905rrnI(bh) {
    try {
      console.log('Hi Mid 2');
      await this.sd_6oGnveIpCsPI5vyX(bh);
      //appendnew_next_sd_4kVFpJjUo905rrnI
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_4kVFpJjUo905rrnI');
    }
  }

  async sd_6oGnveIpCsPI5vyX(bh) {
    try {
      bh.web.res.status(201).send(bh.web.req.blogs);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_6oGnveIpCsPI5vyX');
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
      bh = await this.sd_JHDhGbPtCotcq5j5(bh);
      //appendnew_next_error
      return true;
    }
    return false;
  }
  //appendnew_flow_list_Catch
}
