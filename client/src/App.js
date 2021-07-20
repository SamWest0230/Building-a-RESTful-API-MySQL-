import React from "react"
import './App.scss'
import axios from 'axios'
const url = process.env.REACT_APP_URL

class App extends React.Component {
  state = {
   games: [],

}

  handleChange = (e) => {
    console.log(e.target.value)
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    get = () => {
      axios
      .get(url + '/')
      .then(response => {
        this.setState({
          games: response
        })
      })
      .catch((err) => {
        console.log(err);
      })
    }


  render() {
    return (
      <div className="app">
        <h1 className='app__title'>Test API</h1>

        <div className='app__all'>
          <h2 className='app__all--title'>Get Games</h2>
          <button className='app__all--button' onClick={this.get}>GET</button>
        </div>

        <div className='app__games'>
          {this.state.games.forEach(game => {
            return(
              <div className='app__games--div'> 
                <h1>{game.name}</h1>
                <h2>{game.platform}</h2>
                <h3>{game.date}</h3>
                <h4>{game.id}</h4>
              </div>
            )
          })}
        </div>

        <div className='app__add'>
          <h2>Add Game</h2>
          <form>
            <label>Name of Game</label>
            <input type='text' name='name'></input>
            <label>Platform</label>
            <input type='text' name='platform'></input>
            <label>Release Date</label>
            <input type='date' name='date'></input>
            <button>Add</button>
          </form>
        </div>

        <div className='app__find'>
          <h2>Find Game</h2>
          <form>
            <label>Name of Game</label>
            <input type='text' name='name'></input>
            <button>Find</button>
          </form>
        </div>

        <div className='app__delete'>
          <h2> Delete Game</h2>
          <form>
            <label>Game ID</label>
            <input type='number' name='id'></input>
            <button>Delete</button>
          </form>
        </div>

      </div>
    );
  }
}

export default App;
