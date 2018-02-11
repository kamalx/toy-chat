import React from 'react'
import PropTypes from 'proptypes'

const Sidebar = ({ users }) => {
  return (
    <aside id="sidebar" className="sidebar">
      <ul>
        users.map(user => {
          <li key={user.id}>{user.name}</li>
        })
      </ul>
    </aside>
  )

  Sidebar.PropTypes = {
    users: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
      }).isRequired
    ).isRequired
  }

export default Sidebar
