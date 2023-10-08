import { InputHTMLAttributes, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export const Input = forwardRef<HTMLInputElement, Props>((properties, ref) => {
  const { className, label, ...props } = properties
  return (
    <div className="flex flex-col">
      <label htmlFor={props.id} className="inline-block">
        {label}
      </label>
      <input
        {...props}
        className={twMerge(
          'bg-slate-50 border border-slate-300 focus:border-slate-900 italic focus:border-2 outline-none rounded p-1',
          className
        )}
        ref={ref}
      />
    </div>
  )
})
