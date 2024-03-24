import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AircraftsState } from "./aircrafts.state";

export const selectLogIsConnected = createSelector(
    createFeatureSelector('airbusState'),
    (state: AircraftsState) => {
        
        return state.isLogin;
    }
)