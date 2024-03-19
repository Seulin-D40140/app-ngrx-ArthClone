import { Action } from "@ngrx/store";
import { User } from "../model/user.model";

export enum AuthenticateActionsTypes {
    LOGING = "[Authenticate] Loging",
    LOGING_SUCCESS = "[Authenticate] Login Success",
    LOGING_ERROR = "[Authenticate] Login Error",

    LOGOUT = "[Authenticate] Logout",
    LOGOUT_SUCCES = "[Authenticate] Logout Succes",
    LOGOUT_ERROR = "[Authenticate] Logout Error",



    GET_USER_DETAIL = "[Authenticate] Get User Details",
    GET_USER_DETAIL_SUCCESS = "[Authenticate] Get User Detail Success",
    GET_USER_DETAIL_ERROR = "[Authenticate] Get User Detail Error",
}

export class loginUserAction implements Action {
    type: AuthenticateActionsTypes = AuthenticateActionsTypes.LOGING;
    constructor(public payload: any) {}
}

export class loginUserActionSuccess implements Action {
    type: AuthenticateActionsTypes = AuthenticateActionsTypes.LOGING_SUCCESS;
    constructor(public payload: User) {}
}

export class loginUserActionError implements Action {
    type: AuthenticateActionsTypes = AuthenticateActionsTypes.LOGING_ERROR;
    constructor(public payload: any) {}
}

export class logoutUserAction implements Action {
    type: AuthenticateActionsTypes = AuthenticateActionsTypes.LOGOUT;
    constructor(public payload: any) {}
}

export class logoutUserActionSuccess implements Action {
    type: AuthenticateActionsTypes = AuthenticateActionsTypes.LOGOUT_SUCCES;
    constructor(public payload: any) {}
}

export class logoutUserActionError implements Action {
    type: AuthenticateActionsTypes = AuthenticateActionsTypes.LOGOUT_ERROR;
    constructor(public payload: any) {}
}

export type loginActions = loginUserAction | loginUserActionSuccess | loginUserActionError | 
            logoutUserAction | logoutUserActionSuccess | logoutUserActionError