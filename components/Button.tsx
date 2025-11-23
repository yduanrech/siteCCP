import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  icon,
  ...props 
}) => {
  const baseStyle = "inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-[#193762] text-white hover:bg-[#122a4d] focus:ring-[#193762]",
    secondary: "bg-[#1e97d1] text-white hover:bg-[#1780b3] focus:ring-[#1e97d1]",
    outline: "border-2 border-[#193762] text-[#193762] bg-transparent hover:bg-slate-50 focus:ring-[#193762]"
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${widthStyle} ${className}`} 
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};