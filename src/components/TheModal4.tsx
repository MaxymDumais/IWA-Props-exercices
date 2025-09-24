import '../style/Modal.scss'
import ACharacterCard from '../components/ACharacterCard'
import { Interface } from 'readline'
import { ForceWeilder } from '../types/Character'

interface PropsInterface{
  character : ForceWeilder
  isSith : boolean
}

const TheModal = ({character, isSith}: PropsInterface) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <ACharacterCard yourCharacter={character}/>
        {isSith
          ?<p>c'est un sith</p>
          :
          <p>C'est un Jedi</p>
        }
        
      </div>
    </div>
  )
}

export default TheModal