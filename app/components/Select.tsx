import { SelectHTMLAttributes } from 'react'

interface SelectOption {
  label: string
  value: SelectHTMLAttributes<HTMLSelectElement>['value']
}

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[]
  label: string
}

export const Select = ({ options, label, ...props }: Props) => {
  return (
    <div className="flex flex-col">
      <select {...props} className="outline-none italic bg-slate-50 border border-slate-300 focus:border-slate-900 rounded p-1">
        <option hidden disabled label={label} />
        {options.map(({ label, value }) => (
          <option label={label} key={label}>
            {value}
          </option>
        ))}
      </select>
    </div>
  )
}
