import './App.css'
import {v4} from 'uuid'
import {Component} from 'react'

class App extends Component {
  state = {list: [], input: ''}

  onChangeInput = event => {
    this.setState({input: event.target.value})
  }

  onAddToList = event => {
    event.preventDefault()
    const {input} = this.state
    const newItem = {
      id: v4(),
      input,
    }
    this.setState(prevState => ({
      list: [...prevState.list, newItem],
    }))
    this.setState({input: ''})
  }

  render() {
    const {input, list} = this.state

    return (
      <div className="main-container">
        <div className="text-container">
          <h1>Count the characters like a Boss...</h1>
          {list.length === 0 ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt="no user inputs"
            />
          ) : (
            <ul>
              {list.map(item => (
                <li className="item" key={item.id}>
                  <p>
                    {item.input} : {item.input.length}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="input-container">
          <h1>Character Counter</h1>
          <form onSubmit={this.onAddToList}>
            <input
              type="text"
              value={input}
              placeholder="Enter the Characters here"
              onChange={this.onChangeInput}
              className="input"
            />
            <button type="submit" className="button">
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default App
