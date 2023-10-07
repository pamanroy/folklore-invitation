import { ButtonHTMLAttributes, PropsWithChildren } from 'react'

export const Button = (props: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) => (
  <button {...props} className="italic mt-4 bg-slate-50 hover:bg-slate-300 rounded-md text-gray-900 px-4 py-2">
    {props.children}
  </button>
)
