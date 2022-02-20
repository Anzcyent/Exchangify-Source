import { createStore, applyMiddleware } from "redux";
import rootReducer from "./Reducers/index";
import thunk from "redux-thunk";

export default function configurationStore() {
    return createStore(rootReducer, applyMiddleware(thunk));
}