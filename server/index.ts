import config from './config';
import logger from './logger';
import ExpressServer from './expressServer';

const launchServer = async (): Promise<void> => {
  let expressServer: ExpressServer | undefined = undefined;
  try {
    expressServer = new ExpressServer(config.URL_PORT, config.OPENAPI_YAML);
    expressServer.launch();
    logger.info('Express server running');
  } catch (error: any) {
    console.error(error)
    logger.error('Express Server failure', error.message);
    if (expressServer) {
      await expressServer.close();
    }
  }
};

launchServer().catch(e => logger.error(e));
