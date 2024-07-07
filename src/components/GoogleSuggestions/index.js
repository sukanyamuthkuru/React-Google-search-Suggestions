import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  inputElement = event => {
    this.setState({searchInput: event.target.value})
  }

  onclickArrowButton = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const searchReasults = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-image"
        />
        <div className="container">
          <div className="input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="searh-icon"
            />
            <input
              type="search"
              placeholder="Search Google"
              className="input"
              onChange={this.inputElement}
              value={searchInput}
            />
          </div>
          <ul className="list-container">
            {searchReasults.map(eachItem => (
              <SuggestionItem
                key={eachItem.id}
                names={eachItem}
                onclickArrowButton={this.onclickArrowButton}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
