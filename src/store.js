import { createStore } from 'redux';
import { rootRecude, initialState} from './reducer/'

const store = createStore(rootRecude, initialState);

export default store;
