import { useState } from 'preact/hooks'

import LoadIndicator from '../LoadIndicator'
import './loading-button.css'

type LoadingButtonProps = {
  title: string
  onclick: () => void
}

const LoadingButton = ({ title, onclick }: LoadingButtonProps) => {
  const [loading, setLoading] = useState(false)

  const handleClick = async () => {
    setLoading(true)

    await onclick()

    setLoading(false)
  }

  return (
    <button className="primary-btn loading-button" disabled={loading} onClick={handleClick}>
      {loading ? <LoadIndicator size="sm" /> : title}
    </button>
  )
}

export default LoadingButton
