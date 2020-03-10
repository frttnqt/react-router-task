import {CREATE_STREAM, DELETE_STREAM, FETCH_STREAM, FETCH_STREAMS, UPDATE_STREAM} from "../actions/types";
import {omit, mapKeys} from 'lodash';

export default (state = {}, action) => {
	switch (action.type) {
		case action.type === FETCH_STREAMS:
			return {...state, ...mapKeys(action.payload, 'id')};

		case action.type === FETCH_STREAM:
			return {...state, [action.payload.id]: action.payload};

		case action.type === CREATE_STREAM:
			return {...state, [action.payload.id]: action.payload};

		case action.type === UPDATE_STREAM:
			return {...state, [action.payload.id]: action.payload};

		case action.type === DELETE_STREAM:
			return omit(state, action.payload);
		default:
			return state;
	}
}
