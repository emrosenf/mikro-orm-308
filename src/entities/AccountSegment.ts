import { Entity, 
  ManyToOne, IdentifiedReference,
} from 'mikro-orm'
import { BaseSegment, } from './BaseSegment'
import { Account, } from './Account'

@Entity()
export class AccountSegment extends BaseSegment {

  @ManyToOne(() => Account, { fieldName: 'accountNumber', })
  account?: IdentifiedReference<Account>;
}