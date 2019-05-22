import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { types as superheroTypes, handleClick } from '../../store/reducers/superhero';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import List from '../../components/List';
import HeroDetails from '../../components/HeroDetails';
import './styles.sass';


class HeroInfo extends React.Component{
    componentDidMount(){
        this.props.getSuperheroes();
    }

    render() {
        const {
            superheroesList,
            heroSelected,
            loading,
            actions,
        } = this.props;

        if (loading || superheroesList === null) {
            return <CircularProgress />
        }
        return(
            <Grid container spacing={24} className={'super__Container'}>
                <Grid item xs={3}>
                    <h2 className={'super__Container__h2'}>Heroes</h2>
                    <List list={superheroesList} onClickCard={actions.handleClick}/>
                </Grid>
                <Grid item xs={9}>
                    <h2 className={'super__Container__h2'}>Hero Details</h2>     
                    {heroSelected ? <HeroDetails heroInfo={heroSelected} /> : 'No Hero Selected!!'}
                </Grid>
            </Grid>
        );
    }
}

function mapStateToProps(state) {
    return {
        superheroesList: state.superhero.superheroesList,
        loading: state.superhero.loading,
        heroSelected: state.superhero.heroSelected,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            handleClick,
        }, dispatch),
        getSuperheroes: () => dispatch({ type: superheroTypes.GET_SUPERHEROES_REQUESTED }),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroInfo);
