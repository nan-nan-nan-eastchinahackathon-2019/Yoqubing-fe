import { UserActionType } from "../action/UserAction";

const initialState = {
  session: {
    loged: 0,
    token: "",
    id: 0,
    name: "",
    infomation: {},
  }
}

const SessionReducer = (state = initialState, action : Action) => {
  switch(action.type) {
    case UserActionType.LOGIN:
      return {session: {...action.payload, loged: 1}};
    case UserActionType.LOGOUT:
      return {session: {...initialState.session, loged: 0}};
    case UserActionType.ME:
      return {session: {...initialState.session, infomation: action.payload}};
    default:
      return state;
  }
}

export default SessionReducer;