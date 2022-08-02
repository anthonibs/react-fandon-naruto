import './index.scss'

const Button = (props) => {
    return (
        <div className='button-container'>
            <button className='button'>
                {props.children}
            </button>
        </div>
    )
}


export default Button