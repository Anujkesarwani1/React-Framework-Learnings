import React from 'react'
import PropTypes from 'prop-types'
import './Avatar.css'


const Avatar = ({srcAvatar, widthAvatar, heightAvatar, ...rest}) => {
    return (
        <img 
            className='Avatar'
            src={srcAvatar} 
            alt="Avatar not found" 
            width={widthAvatar}
            height={heightAvatar}
            {...rest} 
            />
    );
}

Avatar.prototype = {
    srcAvatar: PropTypes.string,
    widthAvatar: PropTypes.string,
    heightAvatar: PropTypes.string,
}

export default Avatar;

