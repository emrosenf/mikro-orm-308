
import { MikroORM, EntityCaseNamingStrategy, AbstractSqlDriver, ReflectMetadataProvider,} from 'mikro-orm';
import { Account } from './entities/Account';

const main = async () => {
  const orm = await MikroORM.init<AbstractSqlDriver>({
    entitiesDirs: ['src/entities'],
    discovery: {
      tsConfigPath: '../tsconfig.json'
    },

    type: 'sqlite',
    dbName: 'dev.db',

    logger: console.log.bind(console),
    debug: true,

    metadataProvider: ReflectMetadataProvider,
    namingStrategy: EntityCaseNamingStrategy,
    autoJoinOneToOneOwner: false,
  });

  // ValidationError: You cannot merge entity 'AccountSegment' without identifier!
  // at Function.fromMergeWithoutPK (mikro-orm-example/node_modules/mikro-orm/dist/utils/ValidationError.js:50:15)
  // at EntityValidator.validatePrimaryKey (mikro-orm-example/node_modules/mikro-orm/dist/entity/EntityValidator.js:61:43)
  const acct = await orm.em.find(Account, {}, { populate: ['segments']})

  // 
  console.log(acct)

}

main().catch(err => {
  console.error(err)
})
