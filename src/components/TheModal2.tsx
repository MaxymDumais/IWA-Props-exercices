import '../style/Modal.scss'

interface PropsInterface {jediMessage : string}

const TheModal = ({jediMessage}: PropsInterface) => {

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close">&times;</span>
        <h3>{jediMessage}</h3>
      </div>
    </div>
  )
}

export default TheModal