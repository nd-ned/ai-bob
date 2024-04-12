import './load-indicator.css'

type LoadIndicatorProps = {
  size?: 'sm' | 'md' | 'lg'
}

const LoadIndicator = ({ size = 'md' }: LoadIndicatorProps) => {
  return <span className={`loading-animation ${size}`}></span>
}

export default LoadIndicator
