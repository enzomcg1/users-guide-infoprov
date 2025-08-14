import React from 'react';

const Button = React.forwardRef(({ 
  className, 
  variant = "primary", 
  size = "default", 
  children, 
  ...props 
}, ref) => {
  const getButtonClasses = () => {
    let classes = '';
    
    // Base classes
    if (variant === 'primary') {
      classes = 'btn-primary';
    } else if (variant === 'secondary') {
      classes = 'btn-secondary';
    } else if (variant === 'outline') {
      classes = 'btn-outline';
    } else if (variant === 'ghost') {
      classes = 'btn-ghost';
    } else if (variant === 'destructive') {
      classes = 'btn-destructive';
    }
    
    // Size classes
    if (size === 'sm') {
      classes += ' btn-sm';
    } else if (size === 'lg') {
      classes += ' btn-lg';
    } else if (size === 'xl') {
      classes += ' btn-xl';
    }
    
    return classes;
  };
  
  return (
    <button
      className={`${getButtonClasses()} ${className || ''}`}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Button; 