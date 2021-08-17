import * as MenuActionCreators from './menucall'
import * as UserActionCreators from './usercall'
import * as LocationActionCreators from './locationcall'
import * as RoutesActionCreators from './routescall'
import * as RouteRecordActionCreators from './routerecordcall'
import * as PositionsActionCreators from './positionscall'
import * as JobActionCreators from './jobcall'
import * as WorklogActionCreators from './worklogcall'

const ActionCreators = {
    ...MenuActionCreators,
    ...UserActionCreators,
    ...LocationActionCreators,
    ...RoutesActionCreators,
    ...PositionsActionCreators,
    ...JobActionCreators,
    ...RouteRecordActionCreators,
    ...WorklogActionCreators,
}
export default ActionCreators