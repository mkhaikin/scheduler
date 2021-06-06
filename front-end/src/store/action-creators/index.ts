import * as MenuActionCreators from './menucall'
import * as UserActionCreators from './usercall'
import * as LocationActionCreators from './locationcall'

export default{
    ...MenuActionCreators,
    ...UserActionCreators,
    ...LocationActionCreators
}