import { createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers' 

const initialState={};

//middleware
const middleware= [thunk]

//store
const store = createStore(rootReducer,initialState,compose( 
    applyMiddleware(...middleware),
    window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
));

export default store;
