import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { types as superheroTypes } from '../../store/reducers/superhero';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import List from '../../components/List';
import './styles.sass';

class HeroInfo extends React.Component{
    
    state = {};

    componentDidMount(){
        this.props.getSuperheroes();
        console.log(this.props.superheroesList);
    }
    
    render() {

        const {
            superheroesList,
            loading,
        } = this.props;

        if (loading || superheroesList === null) {
            return <CircularProgress />
        }

        return(
            <Grid container spacing={24}>
                <Grid item xs={4}>
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                Lizard
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <Button size="small" color="primary">
                                Learn More
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={8}>
                    item2
                </Grid>
            </Grid>
        );
    }
}

function mapStateToProps(state) {
    return {
        superheroesList: state.superhero.superheroesList,
        loading: state.superhero.loading,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getSuperheroes: () => dispatch({ type: superheroTypes.GET_SUPERHEROES_REQUESTED }),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroInfo);
