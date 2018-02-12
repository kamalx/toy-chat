import React from 'react'
import propTypes from 'prop-types'

const Message = ({message, author}) => (
  <li>
    <i>{author}</i>: {message}
  </li>
)

Message.propTypes = {
  message: propTypes.string.isRequired,
  author: propTypes.string.isRequired
}

export default Message
