import { Property, AnyEntity, PrimaryKey, } from 'mikro-orm';

export class BaseRow implements AnyEntity<BaseRow, 'accountNumber'> {
  constructor(args?: Partial<BaseRow>) {
    Object.assign(this, args)
  }

  @PrimaryKey()
  accountNumber: number;
  
  @Property({ type: 'text', })
  streetName: string;

}
