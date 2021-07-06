import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, showButton, onToggle }) => {
    return (
        <header className="d-flex justify-content-around">
            <h2>{title}</h2>
            { showButton ?  
            <Button color='warning' text='Close' toggle={onToggle}/> : <Button color='success' text='Add' toggle={onToggle}/> }
        </header>
    )
}

Header.defaultProps = {
    title : 'Todo List'
}

Header.propTypes = {
    title : PropTypes.string.isRequired
}

export default Header
