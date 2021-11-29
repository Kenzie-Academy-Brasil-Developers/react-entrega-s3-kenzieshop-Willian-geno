import {createStore, combineReducers} from  "redux";

import cardReducers from "./modules/card/reducers";

const reducers = combineReducers({card : cardReducers});

const store = createStore (reducers);

export default store;
