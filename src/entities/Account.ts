import { Entity, 
  OneToMany, Collection,
} from 'mikro-orm'
import { BaseRow, } from './BaseRow'
import { AccountSegment, } from './AccountSegment'

@Entity()
export class Account extends BaseRow {

  @OneToMany(() => AccountSegment, segment => segment.account, { joinColumn: 'accountNumber' })
  segments = new Collection<AccountSegment>(this);

}