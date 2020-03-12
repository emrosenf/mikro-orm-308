import * as express from 'express'
import { EntityManager, AbstractSqlDriver, } from 'mikro-orm'

export interface Context {
  em: EntityManager<AbstractSqlDriver>
  req: express.Request
  res: express.Response
}