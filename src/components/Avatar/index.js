import React from 'react';
import PropTypes from 'prop-types';
import './styles.sass'

const Image = ({url}) => {
    return(
        <img src={url} className={'super__Image'} />
    );
}

Image.propTypes = {
    url: PropTypes.string.isRequired,
}

export default Image;