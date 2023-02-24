import React, { useState } from 'react'
import Select from 'react-select'
import './style.css'

interface IOptionsItem {
  label: string
  value: string
}

interface IOptions extends Array<IOptionsItem> {}

const options: IOptions = [
  { value: 'MEGA-SENA', label: 'MEGA-SENA' },
  { value: 'CORP', label: 'CORP' },
]

const colourStyles = {
  control: (styles: any) => ({
    ...styles,
    borderRadius: 8,
    fontSize: 12,
    minHeight: 'auto',
    fontWeight: 'bold',
    color: '#797979',
    border: 'none',
    boxShadow: '1px 1px 4px #56545447',
  }),
}

export const SoftSelect: React.FunctionComponent<{}> = () => {
  const [selectedOption, setSelectedOption] = useState<IOptionsItem | null>(options[0])

  return (
    <div>
      <Select
        defaultValue={selectedOption}
        components={{
          IndicatorSeparator: () => null,
        }}
        placeholder="Select"
        onChange={setSelectedOption}
        options={options}
        styles={colourStyles}
      />
    </div>
  )
}

export default SoftSelect
