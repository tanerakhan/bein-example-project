import React from 'react'
import Header from './Components/Header/Loadable'
import Footer from './Components/Footer/Loadable'
import Slider from './Container/_Card'
import MovieDetails from './Container/_Details'
import { BrowserRouter, Redirect, Switch, Route} from "react-router-dom";

export default function App() {
    return (
      <React.Fragment>
       <BrowserRouter>
       <header>
         <Header/>
       </header>
       <section>
           <Switch>
             <Route exact path="/" component={Slider} />
             <Route exact path="/movie/:imdbID" component={MovieDetails}/>
             <Route render={() => <Redirect to="/" />} />
           </Switch>
       </section>
       <footer>
       <Footer/>
       </footer>
         </BrowserRouter>
      </React.Fragment>
     )
}
