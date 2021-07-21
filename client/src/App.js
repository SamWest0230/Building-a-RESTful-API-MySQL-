import React from "react"
import './App.scss'
import axios from 'axios'
const url = 'http://localhost:8080'

class App extends React.Component {
  state = {
   games: [],
   specificGame: {},
   name: null,
   id: null,

}

  handleChange = (e) => {
    console.log(e.target.value)
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    get = () => {
      console.log(process.env)
      axios
      .get(url + '/games')
      .then(response => {
        console.log(response.data)
        this.setState({
          games: response.data
        })
      })
      .catch((err) => {
        console.log(err);
      })
    }
    handleSubmit = (event) => {
      event.preventDefault();
      const name = this.state.name
    axios
    .get(url + '/games' + '/' + name)
    .then(response => {
      console.log(response.data)
      this.setState({
        specificGame: response.data
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
          {this.state.games.map(game => {
            console.log(game)
            return(
              <div className='app__games--div'> 
                <h1>Name: {game.name}</h1>
                <h2>Platform: {game.platforms}</h2>
                <h3>Genere: {game.genere}</h3>
                <h4>ID: {game.id}</h4>
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
          <form onSubmit={this.handleSubmit}>
            <label>Name of Game</label>
            <input type='text' name='name' onChange={this.handleChange}></input>
            <button type='submit'>Find</button>
          </form>
        </div>
        <div className='app__games--div'> 
          <div>
                <h1>Name: {this.state.specificGame.name}</h1>
                <h2>Platform: {this.state.specificGame.platforms}</h2>
                <h3>Genere: {this.state.specificGame.genere}</h3>
                <h4>ID: {this.state.specificGame.id}</h4>
         </div>

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
