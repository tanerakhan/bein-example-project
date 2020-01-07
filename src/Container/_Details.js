/* eslint-disable no-useless-constructor */
import React, { PureComponent } from 'react'
import {connect} from 'react-redux';
import DetailComponent from '../Components/Details/Loadable'
import { Icon } from 'semantic-ui-react'
let actions = require('../Actions/index');

class _Details extends PureComponent {
    constructor(props){
        super(props);
        this.goBack = this.goBack.bind(this);
    }
    
    componentDidMount() {
        const params = this.props.match.params;
        this.props.filter(params);
    }

    goBack(){
        this.props.history.goBack();
    }
    render() {
        const { detailsData } = this.props.movie;
        return (
            <React.Fragment>
            <button id="goBack" onClick={this.goBack}><Icon disabled name='long arrow alternate left' />go back</button>
                {
                     detailsData.map(({ Title, Year, Released, Runtime, Genre, Director, Actors, Plot, Language, Country, Awards, imdbRating, Images, imdbID }) => {
                      return <DetailComponent
                                key={imdbID}
                                Title={Title}
                                Images={Images[1]}
                                Year={Year}
                                Released={Released}
                                Runtime={Runtime}
                                Genre={Genre}
                                Director={Director}
                                Actors={Actors}
                                Plot={Plot}
                                Language={Language}
                                Country={Country}
                                Awards={Awards}
                                imdbRating={imdbRating}
                                />
                    })
                }
            </React.Fragment>
        )
    }
}
export default connect((state)=>{return state},actions)(_Details)
