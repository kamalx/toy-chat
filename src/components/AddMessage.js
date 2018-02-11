import React from 'react'
import PropTypes from 'proptypes'

const addMessage = (props) => {
  let input
  return (
    <section id="new-message">
      <input
        onKeyPress = {(e) => {
          if(e.Key === "Enter") {
            props.dispatch(input.value, 'Me')
            input.value = ''
          }
        }}
        type="text"
        ref{(node) => {
          input = node
        }}
      />
    </section>
  )
}

AddMessage.PropTypes = {
  dispatch: PropTypes.func.isRequired
}

export default AddMessage
