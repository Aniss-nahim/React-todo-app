import PropTypes from 'prop-types'

const Button = ({ text, color, toggle}) => {

    return (
        <button className={'btn btn-sm btn-'+ color} onClick={toggle} >{text} </button>
    )
}

Button.defaultProps = {
    color : 'success'
}

Button.propTypes ={
    text : PropTypes.string.isRequired,
    color : PropTypes.string,
}

export default Button
