import { createStore, applyMiddleware, compose } from "redux";
import reducer from "../reducers/productReducer";
import thunk from "redux-thunk";



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];



const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middleware))
);




export default store;


















































// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
// import  rootReducer  from "../reducers";
// import reducer from "../reducers/productReducer";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const middleware = [thunk]

// const store = createStore(
//   reducer,
//   composeWithDevTools(applyMiddleware(...middleware))
// );

// export default store;
