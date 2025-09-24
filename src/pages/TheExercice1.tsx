import '../style/Layout.scss'
import TheModal1 from '../components/TheModal1'
import { ChangeEvent, useState } from 'react'

const TheExercice1 = () => {
  const [jediOrNot, SetJediOrNot] = useState(false)
  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      SetJediOrNot(true)
    }
    else
    {
      SetJediOrNot(false)
    }
  }

  return (
    <>
      <h2>Premier défi</h2>
      <p>Passe à la modale un boolean qui permet d'afficher un message de jedi ou de seigneur sith</p>
      <p>True : May the Force be with you, young Jedi!</p>
      <p>False : Sorry,you are not a jedi</p>
      <p>La valeur du boolean provient du checkbox plus bas ici : </p>
      <p>Petit rappel, tu peux utiliser onChange et ensuite inspecter <code>event.target.checked</code></p>
      <label >Es-tu un jedi??
        <input type="checkbox" name="jedi" onChange={handleCheckboxChange} />
      </label>
      <TheModal1 isJediMessage={jediOrNot} />
    </>
  )
}

export default TheExercice1
