import './index.css'

const SuggestionItem = props => {
  const {names, onclickArrowButton} = props
  const {suggestion, id} = names
  const onClickArrow = () => {
    onclickArrowButton(suggestion)
  }
  return (
    <li className="items">
      <p className="para">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow-image"
        onClick={onClickArrow}
      />
    </li>
  )
}

export default SuggestionItem
