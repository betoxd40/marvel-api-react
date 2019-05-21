import React from 'react'
import PropTypes from 'prop-types'
import './styles.sass'

const Page = ({ children }) => (
    <div className="super__Page">
        {children}
    </div>
)

Page.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Page
