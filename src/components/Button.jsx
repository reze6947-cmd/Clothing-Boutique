import { Link } from 'react-router-dom'
import './Button.css'

function Button({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  icon: Icon,
  iconPosition = 'right',
  type = 'button',
  onClick,
  disabled = false,
  className = '',
  as,
  to,
  href,
}) {
  const classes = [
    'btn',
    `btn-${variant}`,
    `btn-${size}`,
    fullWidth && 'btn-full',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon size={18} />}
      {children}
      {Icon && iconPosition === 'right' && <Icon size={18} />}
    </>
  )

  if (as === Link || to) {
    return (
      <Link to={to || '/'} className={classes}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    )
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  )
}

export default Button
