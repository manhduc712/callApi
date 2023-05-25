import { combineReducers } from 'redux';
import postReducers from './postReducer';

const reducers = combineReducers({
    post: postReducers
});

export default (state, action) => reducers(state, action);