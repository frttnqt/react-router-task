import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {createStream} from "../../actions";
import {connect} from 'react-redux';

class StreamCreate extends React.Component {

	renderInput = ({input, label, meta}) => {
		const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
		return (
			<div className={className}>
				<label>{label}
				</label>
				<input autoComplete="off" {...input}/>
			</div>
		)
	};

	onSubmit = (formValues) => {
		this.props.createStream(formValues);
	}

	render() {
		return (
			<div>
				<form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
					<Field
						component={this.renderInput}
						name="title"
						label="Enter Title"
					/>
					<Field
						component={this.renderInput}
						name="description"
						label="Enter Description"
					/>
					<button className="ui button primary">Submit</button>
				</form>
			</div>
		)
	}
}

const validate = (formValues) => {
	const errors = {};
	if (!formValues.title) {
		errors.title = 'Enter title'
	}
	return errors;
};

const formWrapped = reduxForm({
	form: 'streamCreate',
	validate: validate
})(StreamCreate);

export default connect(null, {
	createStream
})(formWrapped);
