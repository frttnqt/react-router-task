import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Modal from '../Modal';
import history from '../../history';
import {deleteStream, fetchStream} from "../../actions";

class StreamDelete extends React.Component {

	componentDidMount() {
		this.props.fetchStream(this.props.match.params?.id);
		this.streamId = this.props.match.params?.id;
	}

	onDelete = () => this.props.deleteStream(this.streamId);

	renderActions = () => {
		return (
			<React.Fragment>
				<button onClick={() => this.onDelete()} className="ui button negative">Delete</button>
				<Link to='/' className="ui button">Cancel</Link>
			</React.Fragment>
		)
	}

	render() {
		return (
			<div>
				<Modal
					title="Delete Stream"
					content="Are you sure you want to delete a stream?"
					actions={this.renderActions()}
					onDismiss={() => history.push('/')}
				/>
			</div>
		)
	}
};

const mapStateToProps = (state, ownProps) => ({
	stream: state.streams[ownProps.match.params.id]
});

export default connect(mapStateToProps, {fetchStream, deleteStream})(StreamDelete);
