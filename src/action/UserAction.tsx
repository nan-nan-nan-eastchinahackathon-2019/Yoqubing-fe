export const UserActionType = {
  LOGIN: "LOGIN",
  REGISTER: "REGISTER",
  LOGOUT: "LOGOUT",
  ME: "ME",
  PASSWORD: "PASSWORD",
  UPDATE: "UPDATE",
}

export const loginAction = (payload : {id: number, token: string, name: string}) => async (dispatch : Function) => {
  dispatch({
    type: UserActionType.LOGIN,
    payload: payload,
  });
  window.localStorage.session = JSON.stringify(payload);
}

export const registerAction = () => async (dispatch : Function) => {
  dispatch({
    type: UserActionType.REGISTER,
  });
}

export const logoutAction = () => async (dispatch : Function) => {
  dispatch({
    type: UserActionType.LOGOUT,
  });
  window.localStorage.removeItem("session");
}

export const meAction = (payload : {id: number, name: string, phone: string, grade: string, major: string, score: number, username: string, balance: number}) => async (dispatch : Function) => {
  dispatch({
    type: UserActionType.ME,
    payload: payload,
  });
}

export const passwordAction = () => async (dispatch : Function) => {
  dispatch({
    type: UserActionType.PASSWORD,
  });
}

export const updateAction = () => async (dispatch : Function) => {
  dispatch({
    type: UserActionType.UPDATE,
  });
}