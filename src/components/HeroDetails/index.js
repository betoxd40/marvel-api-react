import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Avatar from '../Avatar';
import './styles.sass';

const HeroDetails = ({heroInfo}) => {
    const {
        name,
        thumbnail,
        description,
        urls,
    } = heroInfo;
    return(
        <Paper elevation={1} className={'super__Paper'}>
            <div className={'super__Paper__Content'}>
                <h2>{name}</h2>
                <Avatar url={thumbnail.path + '.' + thumbnail.extension}/>
                <div className={'super__Paper__Description'}>
                    {description ? description : 'No biography available'}
                </div>
            </div>
            <div>
                {
                    urls.map((item, i) =>
                        <div className={'super__Paper__Url'} key={i}>
                            <span className={'super__Paper__Url__Type'}>{item.type}:</span> <a href={ item.url }>{item.url}</a>
                        </div>
                        )
                }
            </div>
        </Paper>
    );
}

HeroDetails.propTypes = {
    heroInfo: PropTypes.object.isRequired,
}

export default HeroDetails;