import {RentmonitorServerApplication} from './application';
import {ApplicationConfig} from '@loopback/core';
import {RentmonitorDataSource} from './datasources/rentmonitor.datasource';

export {RentmonitorServerApplication};

export async function main(options: ApplicationConfig = {}) {
  const app = new RentmonitorServerApplication(options);
  app.dataSource(RentmonitorDataSource);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
