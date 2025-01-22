import './index.css'

const SuggestionItem = props => {
  const {suggestions, onClickSuggestion} = props
  const {suggestion} = suggestions

  const handleClick = () => {
    onClickSuggestion(suggestion)
  }

  return (
    <li className="suggestion-container">
      <p className="description">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow"
        onClick={handleClick}
      />
    </li>
  )
}

export default SuggestionItem
