import { SET_ALERT} from "../actions/types";

const initialState = {msg:"", alertType:"", id:""};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_ALERT:
      return {...state, msg:payload.msg, alertType:payload.alertType, id: payload.id};

    default:
      return state;
  }
}
