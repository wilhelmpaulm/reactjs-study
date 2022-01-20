import Button from './Button';
import PropTypes from 'prop-types'

const Header = ({title, onShowAddTask, showAddTask}) => {
  return <header className="header">
      <h1>{title}</h1>
      <Button color={showAddTask ? 'red' : 'green'} text={showAddTask ? 'close' : 'add'} onClick={onShowAddTask}/>
  </header>;
};


Header.defaultProps = {
    title: 'Task Tracker'
}
Header.propTypes = {
    title: PropTypes.string.isRequired
}

// CSS in JS
// const headingStyle = {
//     color: 'red',
//     background: 'gray'
// }

export default Header;
