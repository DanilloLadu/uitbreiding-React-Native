import {combineReducers} from "redux";
import room from "./room";
import asset from "./asset";
import ticket from "./ticket";

const combinedReducers = combineReducers({room, asset, ticket});

export default combinedReducers;
