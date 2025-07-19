import React from 'react'
import Spinner from '@shared/ui/UI/Spinner/Spinner.tsx'

type ButtonVariant = 'primary' | 'secondary'

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: 'bg-transparent text-primary border border-primary hover:bg-primary hover:text-white active:scale-95',
  secondary: 'bg-transparent text-darkBlue border border-darkBlue hover:bg-darkBlue hover:text-white active:scale-95',
}

interface BaseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  isLoading?: boolean
  fullWidth?: boolean
}

const BaseButton = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  BaseButtonProps
>(({
  variant = 'primary',
  className = '',
  children,
  disabled = false,
  isLoading = false,
  fullWidth = false,
  ...props
}, ref) => {
  const baseClasses = [
    'inline-flex items-center justify-center',
    'px-6 py-3 rounded-[4px] no-underline font-medium',
    'transition-all duration-300 ease-in-out font-comfortaa',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    fullWidth ? 'w-full' : '',
    (disabled || isLoading) ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
    VARIANT_CLASSES[variant],
    className,
  ].join(' ')

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={baseClasses}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      {...props}
    >
      {isLoading && <Spinner className="mr-2" />}
      {children}
    </button>
  )
})

export default BaseButton
