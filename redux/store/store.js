// Dependencies
import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
// Files
import rootReducer from "../reducer/reducer";


const store = createStore(rootReducer, compose(applyMiddleware(thunk)));


export default store;