import React from 'react';
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Chip from '@material-ui/core/Chip';
import './styles.sass';

const List = ({list, onClickCard}) => {
    const truncateString = text => {
        if(text.length > 40) {
            return text.substring(0,40).concat('...')
        }
        return text;
    }
    return(
        list.map( (item,index) =>
            <div>
                <Card className="super__Card" onClick={() => onClickCard(item)}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image={item.thumbnail.path + '.' + item.thumbnail.extension}
                        />
                        <CardContent>
                            <h3>{item.name}</h3>
                            <div className={'super__Card__Description'}>
                                {item.description ? truncateString(item.description) : 'No description available'}
                            </div>
                            <div>
                                {
                                    item.comics.available > 0 &&
                                        <Chip
                                            label="Comics"
                                            color="primary"
                                            className={'super__Card__Chip'}
                                        />
                                }
                                {
                                    item.events.available > 0 &&
                                        <Chip
                                            label="Events"
                                            color="primary"
                                            className={'super__Card__Chip'}
                                        />
                                }
                                {
                                    item.series.available > 0 &&
                                    <Chip
                                        label="Series"
                                        color="primary"
                                        className={'super__Card__Chip'}
                                    />
                                }
                                {
                                    item.stories.available > 0 &&
                                    <Chip
                                        label="Stories"
                                        color="primary"
                                        className={'super__Card__Chip'}
                                    />
                                }
                            </div>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        )
    )
}

List.propTypes = {
    list: PropTypes.array.isRequired,
    onClickCard: PropTypes.func.isRequired,
}

export default List;