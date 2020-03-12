import { Property, AnyEntity, PrimaryKey, } from 'mikro-orm';

export class BaseSegment
 implements AnyEntity<BaseSegment, 'accountNumber'> {
  constructor(args?: Partial<BaseSegment>) {
    Object.assign(this, args)
  }

  @PrimaryKey()
  accountNumber: number;
  
  @Property()
  yearBuilt: number;

}
