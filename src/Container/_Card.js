/* eslint-disable no-useless-constructor */
import React, { PureComponent } from 'react'
import {connect} from 'react-redux';
import Card from '../Components/Card/Loadable'
import Slider from '../Components/Slider/Loadable'
import LazyLoad from '../Utils/LazyLoad/index'
import { Seperator } from '../Utils/Seperator';
let actions = require('../Actions/index');

class _Card extends PureComponent {
    constructor(props){
        super(props);
        this.redirect = this.redirect.bind(this);
    }
    
    componentDidMount() {
        this.props.data();
    }

    redirect(e){
        const id = e.currentTarget.id;
        this.props.history.push(`/movie/${id}`)
    }
    
    render() {
        const { dataParam } = this.props.movie;
        return (
                <Slider>
                    {
                        dataParam && dataParam.map( ({ imdbID, Title, Year, Released, Genre, Director, Plot, Images }) => (
                        <LazyLoad key={imdbID}>
                            <Card
                                id={imdbID}
                                redirect={(e) => this.redirect(e)} 
                                image={ Images[0] }
                                title={Title}
                                meta={Seperator(Genre, 40)}
                                description={Seperator(Plot, 50)}
                                year={Year}
                                released={Released}
                                director={Director}
                            />
                        </LazyLoad>
                    ))
                }
                </Slider>
        )
    }
}
export default connect((state)=>{return state},actions)(_Card)
