import '../style/CharacterCard.scss'
import ALightSaber from './ALightSaber'
import LightSaberColor from '../types/LightSaberColorEnum'
import { ForceWeilder } from '../types/Character'

interface PropsInterface{
  yourCharacter: ForceWeilder
}

const ACharacterCard = ({yourCharacter}: PropsInterface) => {
  return (
    <div className="card">
      <div className="card-content">
        <h2 className="name">{yourCharacter.name}</h2>
        <p><span className="info-title">Lightsaber:</span>
          <ALightSaber color={LightSaberColor.Black} />
        </p>
        <p><span className="info-title">Rank:</span> {yourCharacter.rank}</p>
        <p><span className="info-title">Force Level:</span> {yourCharacter.forceLevel}</p>
      </div>
    </div>
  )
}

export default ACharacterCard