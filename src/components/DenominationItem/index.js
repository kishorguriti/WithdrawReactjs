// Write your code here

import './index.css'

const DenominationItem = props => {
  const {denomination, chooseButton} = props

  const {value} = denomination

  onclick = () => {
    chooseButton(value)
  }

  return (
    <li className="litstItem">
      <button className="cashButton" type="button" onClick={onclick}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
