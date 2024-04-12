import { useState } from 'preact/hooks'
import './add-button.css'

type AddBtnProps = {
  onClick: () => void
}

const AddButton = ({ onClick }: AddBtnProps) => {
  const [pressed, setPressed] = useState(false)

  return (
    <button
      className={`primary-btn add-btn${pressed ? ' pressed' : ''}`}
      onClick={onClick}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseOut={() => setPressed(false)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    </button>
  )
}

export default AddButton
