import React from 'react'

const Checkbox = ({type="checkbox", text, ids}) => {
    return (
        <div>
            <input type={type} id={ids} name={ids} value={text} />
            <label htmlFor={ids}>
                {text}
            </label>
        </div>
    );
}

export default Checkbox;