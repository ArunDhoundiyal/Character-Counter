import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import DisplayCharacterCount from '../DisplayCharacterCount'
import './index.css'

const CharacterCounter = () => {
  const [countCharacter, setCountCharacter] = useState({character: ''})
  const [countCharacterObj, setCountCharacterObj] = useState([])

  const onChangeCharacter = event => {
    setCountCharacter({character: event.target.value})
  }

  const onClickSubmitButton = event => {
    event.preventDefault()
    const newArrayList = {
      id: uuidv4(),
      character: countCharacter.character,
    }
    setCountCharacterObj(preState => [...preState, newArrayList])
    setCountCharacter({character: ''})
  }
  return (
    <div className="bg-container">
      <div className="inner-bg-card-container">
        <div className="first-child-yellow-inner-container">
          <div className="heading-content-container">
            <h1 className="count-heading">
              Count the characters like a <br /> Boss..!
            </h1>
          </div>
          {countCharacterObj.length > 0 ? (
            <ul>
              {countCharacterObj.map(characterItem => (
                <DisplayCharacterCount
                  key={characterItem.id}
                  characterItem={characterItem}
                />
              ))}
            </ul>
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt="no user inputs"
            />
          )}
        </div>
        <div className="second-last-child-dark-inner-container">
          <h1 className="characterCounter-heading">Character Counter</h1>
          <form className="input-container" onSubmit={onClickSubmitButton}>
            <input
              type="text"
              className="input-text-style"
              placeholder="Enter the Characters here..."
              onChange={onChangeCharacter}
              value={countCharacter.character}
            />
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CharacterCounter
