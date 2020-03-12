import { createStore } from 'redux';
import { rootReducer, initialState} from './reducer/'

const store = createStore(rootReducer, initialState);

export default store;
