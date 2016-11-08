import { connect } from 'react-redux';
import Task from './component';

const mapStateToProps = (state, { _id, text, checked, private: priv, }) => {
	toggleChecked: () => {
		// actions.toggleTaskChecked(_id, !checked);
		// Set the checked property to the opposite of its current value
		Meteor.call('tasks.setChecked', _id, !checked);
	};

	deleteThisTask: () => {
		// actions.removeTask(_id);
		Meteor.call('tasks.remove', _id);
	};

	togglePrivate: () => {
		// actions.toggleTaskPrivacy(_id, !priv);
		Meteor.call('tasks.setPrivate', _id, !private);
	};

	return ({ toggleChecked, deleteThisTask, togglePrivate, });
};

// export default connect(mapStateToProps)(Task);