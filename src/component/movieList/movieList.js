import React, { Component } from 'react';
import './movieList.css'
import { connect } from 'react-redux';
import { history } from '../../redux-container/store'
import Header from '../header'
import MovieCard from '../MovieCard'

import { getMovieList } from '../../redux-container/movie/action'



// 
class MovieList extends Component {
  constructor(props){
    super(props);
    this.state={loader:false}
  }
  componentDidMount =async()=> {
   this.setState({loader:true});
    await this.props.getMovieList()
   this.setState({loader:false});

  }

  onClickDetail = (id) => {
    console.log(id)
    sessionStorage.setItem('movieId', id)
    history.push('/movie')
  }
  render() {
    console.log(this.props.movieList)
    const { movieList } = this.props
    if (this.state.loader) {
      return <div className='loader'>

      </div>
    }
    return <div>
      <div className="container-fluid">
        <Header searchBar={true} />
        <div className="container1">
          {movieList && movieList.map((item, index) => {
            return <MovieCard 
            id={item.id}
            image_path={item.poster_path}
            title={item.title}
            rating={item.vote_average}
            description={item.overview}
            onClick={this.onClickDetail}
            />

          })}
        </div>

      </div>
    </div>
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    movieList: state.movie.movieList

  }
}
const mapDispatchToProps = dispatch => {
  return {
    getMovieList: () => dispatch(getMovieList()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);