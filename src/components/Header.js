import Button from './Button';
import PropTypes from 'prop-types'

const Header = ({title}) => {
    const onClick = (e ) => {
        console.log("click", e.target)
    }

  return <header className="header">
      <h1>{title}</h1>
      <Button color='green' text='Add' onClick={onClick}/>
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
