import { Interface } from 'readline'
import '../style/Modal.scss'

interface PropsInterface {messageTable : string[]}

const TheModal = ({messageTable} : PropsInterface) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close">&times;</span>
        <h3>Ton message</h3>
      </div>
    </div>
  )
}

export default TheModal