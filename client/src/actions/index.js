import streams from '../apis/streams';
import {CREATE_STREAM, DELETE_STREAM, FETCH_STREAM, FETCH_STREAMS, SIGN_IN, SIGN_OUT, UPDATE_STREAM} from "./types";
import history from '../history';

export const signIn = (userId) => ({
	type: SIGN_IN,
	payload: userId
});

export const signOut = () => ({
	type: SIGN_OUT
});

export const createStream = formValues => async (dispatch, getState) => {

	const {userId} = getState().auth;
	const {data} = await streams.post('/streams', {...formValues, userId});

	dispatch({
		type: CREATE_STREAM,
		payload: data
	});
	history.push('/');
};

export const fetchStreams = () => async dispatch => {

	const {data} = await streams.get('/streams');
	dispatch({
		type: FETCH_STREAMS,
		payload: data
	})
};

export const fetchStream = streamId => async dispatch => {

	const {data} = await streams.get(`/streams/${streamId}`);

	dispatch({
		type: FETCH_STREAM,
		payload: data
	})
};


export const editStream = (streamId, formValues) => async dispatch => {

	const {data} = await streams.patch(`/streams/${streamId}`, formValues);

	dispatch({
		type: UPDATE_STREAM,
		payload: data
	});
	history.push('/');
};

export const deleteStream = (streamId) => async dispatch => {

	await streams.delete(`/streams/${streamId}`);

	dispatch({
		type: DELETE_STREAM,
		payload: streamId
	})
	history.push('/');
};
