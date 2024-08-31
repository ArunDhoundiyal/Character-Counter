import './index.css'

const DisplayCharacterCount = ({characterItem}) => {
  const {character} = characterItem
  const characterCount =
    character.length > 0 ? `${character}: ${character.length}` : ''
  return (
    <li>
      <p>{characterCount}</p>
    </li>
  )
}

export default DisplayCharacterCount
