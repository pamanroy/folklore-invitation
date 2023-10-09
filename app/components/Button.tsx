import classNames from 'classnames'
import { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
  theme?: 'dark' | 'light'
}

export const Button = ({ theme = 'light', children, className, ...props }: Props) => (
  <button
    {...props}
    className={twMerge(
      classNames(
        'italic rounded-md px-4 py-2 disabled:cursor-not-allowed',
        theme === 'light' && 'bg-slate-50 hover:bg-slate-300 disabled:bg-slate-400 text-gray-900',
        theme === 'dark' && 'bg-slate-900 hover:bg-slate-700 disabled:bg-slate-500 text-gray-50'
      ),
      className
    )}
  >
    {children}
  </button>
)
