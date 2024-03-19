import { Action } from "@ngrx/store";
import { AircraftsState, AircraftsStateEnum, initState } from "./aircrafts.state";
import { AircraftsActions, AircraftsActionsTypes } from "./aircrafts.actions";
import { OperationActionsTypes } from "./operation.action";
import { EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { Operation } from "../model/operation.model";
import { AuthenticateActionsTypes, loginActions } from "./authenticate.action";

export const adapter: EntityAdapter<Operation> = createEntityAdapter<Operation>({

});

export const initialState: AircraftsState = adapter.getInitialState({
    aircrafts: [],
    errorMessage: "",
    dataState: AircraftsStateEnum.INITIAL,
    ids: [],
    entities: {},
    isLogin:false,
    user : []
});

export function AircraftsReducer(state: AircraftsState = initialState, action: Action) : AircraftsState {
    switch(action.type) {
        case OperationActionsTypes.ADD_OPERATION:
            return adapter.addOne((<AircraftsActions> action).payload, state);

        case OperationActionsTypes.REMOVE_OPERATION:
            return adapter.removeOne((<AircraftsActions> action).payload, state);

        case AircraftsActionsTypes.GET_ALL_AIRCRAFTS:
            return {...state, dataState: AircraftsStateEnum.LOADING}

        case AircraftsActionsTypes.GET_ALL_AIRCRAFTS_SUCCESS:
            return {...state, dataState: AircraftsStateEnum.LOADED, aircrafts:(<AircraftsActions> action).payload};

        case AircraftsActionsTypes.GET_ALL_AICRAFTS_ERROR:
            return{...state, dataState: AircraftsStateEnum.ERROR, errorMessage:(<AircraftsActions> action).payload};

        case AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS:
            return{...state, dataState: AircraftsStateEnum.LOADING};

        case AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS_SUCCESS:
            return{...state, dataState: AircraftsStateEnum.LOADED, aircrafts:(<AircraftsActions> action).payload};
        
        case AircraftsActionsTypes.GET_DESIGNED_AIRCRAFTS_ERROR:
            return{...state, dataState: AircraftsStateEnum.ERROR, errorMessage:(<AircraftsActions> action).payload};
            
        case AircraftsActionsTypes.GET_DEVELOPMENT_AIRCRAFTS:
            return{...state, dataState: AircraftsStateEnum.LOADING};

        case AircraftsActionsTypes.GET_DEVELOPMENT_AIRCRAFTS_SUCCESS:
            return{...state, dataState: AircraftsStateEnum.LOADED, aircrafts:(<AircraftsActions> action).payload};

        case AircraftsActionsTypes.GET_DEVELOPMENT_AIRCRAFTS_ERROR:
            return{...state, dataState: AircraftsStateEnum.ERROR, errorMessage:(<AircraftsActions> action).payload};

        case AircraftsActionsTypes.GET_SEARCH_AIRCRAFTS:
            return{...state, dataState: AircraftsStateEnum.LOADING};

        case AircraftsActionsTypes.GET_SEARCH_AIRCRAFTS_SUCCESS:
            return{...state, dataState: AircraftsStateEnum.LOADED, aircrafts:(<AircraftsActions> action).payload};

        case AircraftsActionsTypes.GET_SEARCH_AIRCRAFTS_ERROR:
            return{...state, dataState: AircraftsStateEnum.ERROR, errorMessage:(<AircraftsActions> action).payload};

        case AuthenticateActionsTypes.LOGING:
            return{...state, dataState: AircraftsStateEnum.LOADING};

        case AuthenticateActionsTypes.LOGING_SUCCESS:
            return{...state, dataState: AircraftsStateEnum.LOADED, isLogin: true}; 

        case AuthenticateActionsTypes.LOGING_ERROR:
            return{...state, dataState: AircraftsStateEnum.ERROR, isLogin: false , errorMessage:(<loginActions> action).payload};

        case AuthenticateActionsTypes.LOGOUT:
            return{...state, dataState: AircraftsStateEnum.LOADING};

        case AuthenticateActionsTypes.LOGOUT_SUCCES:
            return{...state, dataState: AircraftsStateEnum.LOADED, isLogin: false}; 

        case AuthenticateActionsTypes.LOGOUT_ERROR:
            return{...state, dataState: AircraftsStateEnum.ERROR, errorMessage:(<loginActions> action).payload};
            
        default: return{...state}
    }
}