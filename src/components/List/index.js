import React from 'react';
import PropTypes from 'prop-types'
import './styles.sass'

const List = ({list}) => {
    return(
        <div>
            list
        </div>
    )
}

List.propTypes = {
    list: PropTypes.array.isRequired,
}

export default List;