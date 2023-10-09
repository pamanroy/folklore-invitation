import { TextareaHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
}

export const TextArea = ({ label, className, ...props }: Props) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={props.id} className="inline-block">
        {label}
      </label>
      <textarea
        {...props}
        className={twMerge(
          'bg-slate-50 border border-slate-300 focus:border-slate-900 italic focus:border-2 outline-none rounded p-1',
          className
        )}
      />
    </div>
  )
}
