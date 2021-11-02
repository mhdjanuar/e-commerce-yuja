import {combineReducers} from 'redux';
import home from '../modules/home/reducer';

const rootReducer = combineReducers({
    home
});

export type ApplicationState = ReturnType<typeof rootReducer>;

export default rootReducer;