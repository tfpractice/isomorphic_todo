
// const Task = ({
//  _id,
//  text,
//  private: priv,
//  checked,
// }) => (
//  <li className={classnames({ checked, private: priv })}>
//             <button
//                 className="delete"
//                 onClick={()=>deleteThisTask(_id)}>  &times;
//             </button>
//             <input
//                 type="checkbox"
//                 readOnly
//                 checked={checked}
//                 onClick={()=>toggleChecked(_id, checked)}
//              />
//             { showPrivateButton ? (
//                 <button
//                     className="toggle-priv"
//                     onClick={()=>togglePrivate(_id, priv)}>
//                         { priv ? 'Private' : 'Public' }
//                 </button>) : ''}

//             <span className="text">
//               <strong>{username}</strong>: { text }
//             </span>
//         </li>
// );

// Task.propTypes = {
//  // This component gets the task to display through a React prop.
//  // We can use propTypes to indicate it is required
//  // task: PropTypes.object.isRequired,
// };


// const toggleChecked = (_id, checked) => {
//  // actions.toggleTaskChecked(_id, !checked);
//  // Set the checked property to the opposite of its current value
//  Meteor.call('tasks.setChecked', _id, !checked);
// };

// const deleteThisTask = (_id) => {
//  // actions.removeTask(_id);
//  Meteor.call('tasks.remove', _id);
// };

// const togglePrivate = (_id, private) => {
//  // actions.toggleTaskPrivacy(_id, !priv);
//  Meteor.call('tasks.setPrivate', _id, !private);
// };

// export default Task;
