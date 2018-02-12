import React from 'react'
import propTypes from 'prop-types'

const Sidebar = ({ users }) => (
  <aside id="sidebar" className="sidebar">
    <ul>
      {users.map(user => {
        return (
          <li key={user.id}>{user.name}</li>
        )
      })}
    </ul>
  </aside>
)

Sidebar.propTypes = {
  users: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      name: propTypes.string.isRequired
    }).isRequired
  ).isRequired
}

export default Sidebar
