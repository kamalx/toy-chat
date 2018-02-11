import React from 'react'
import PropTypes from 'proptypes'

const Message = ({message, author}) => {
  return (
    <p>
      <i>{author}</i>: {message}
    </p>
  )
}

Message.PropTypes = {
  message: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
}

export default Message
