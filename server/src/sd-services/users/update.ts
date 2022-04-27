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
export class update {
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
    this.serviceName = 'update';
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
      instance = new update(
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
      //appendnew_flow_update_TimerStart
    } catch (e) {
      throw e;
    }
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: update');

    //appendnew_flow_update_MiddlewareStart
  }
  private mountAllPaths() {
    log.debug('mounting all paths for service :: update');

    if (!this.swaggerDocument['paths']['/users']) {
      this.swaggerDocument['paths']['/users'] = {
        put: {
          summary: 'Add Blogs',
          description: 'Call method to add blog',
          consumes: ['application/json'],
          produces: ['application/json'],
          parameters: [
            {
              in: 'body',
              name: 'user',
              description: 'user object',
              required: false,
            },
          ],
          responses: {},
        },
      };
    } else {
      this.swaggerDocument['paths']['/users']['put'] = {
        summary: 'Add Blogs',
        description: 'Call method to add blog',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            in: 'body',
            name: 'user',
            description: 'user object',
            required: false,
          },
        ],
        responses: {},
      };
    }
    this.app['put'](
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
          bh = await this.addUserScript(bh);
          //appendnew_next_sd_D4nuBuWxAcO9uVcy
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_D4nuBuWxAcO9uVcy');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_update_HttpIn
  }
  //   service flows_update

  //appendnew_flow_update_start

  async addUserScript(bh) {
    try {
      console.log('body', bh.input.body);

      const { name, email, phonenumber } = bh.input.body;

      if (!name) {
        throw new Error('Title is required!');
      } else if (!email) {
        throw new Error('Email is required!');
      } else if (!phonenumber) {
        throw new Error('Phone Number is required!');
      }

      bh.local.query = `INSERT INTO users ( name, email,phonenumber)  VALUES ('${name}','${email}','${phonenumber}' );`;

      bh.local.response = {
        message: 'User Added Successfully',
        data: {
          ...bh.input.body,
        },
      };
      bh = await this.sd_zQnD81u1UVgzKMlt(bh);
      //appendnew_next_addUserScript
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_4cezdtcpdU3qn9jO');
    }
  }

  async sd_zQnD81u1UVgzKMlt(bh) {
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
      bh.local.result = await new GenericRDBMSOperations().executeSQL(
        connectionName,
        bh.local.query,
        params
      );
      await this.httpResponse(bh);
      //appendnew_next_sd_zQnD81u1UVgzKMlt
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_zQnD81u1UVgzKMlt');
    }
  }

  async httpResponse(bh) {
    try {
      bh.web.res.status(201).send(bh.local.response);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_gN72Tjbz0w4hMLIM');
    }
  }

  async userError2(bh) {
    try {
      bh.local.error = {
        status: 406,
        message: bh?.error?.message || 'Opps... Somthing Went Wrong!',
      };

      await this.hTTPErrorOut(bh);
      //appendnew_next_userError2
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ZW7PAKeUpJlxRvHB');
    }
  }

  async hTTPErrorOut(bh) {
    try {
      bh.web.res.status(bh.local.error.status).send(bh.local.error);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_OZAIF4Xqh4VgqnU7');
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
    const nodes = ['sd_1Hg4gvOOV7QPW1L1'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.userError2(bh);
      //appendnew_next_error
      return true;
    }
    return false;
  }
  //appendnew_flow_update_Catch
}
