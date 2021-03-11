import React from 'react'
import './SearchField.scss'
import { Input } from 'antd'
import useActions from '../../hooks/useActions'

const { Search } = Input

const SearchField: React.FC = () => {
  const { filterCountries } = useActions()

  return (
    <Search
      placeholder="Search Country"
      autoFocus
      allowClear
      onSearch={filterCountries}
      style={{ width: 200 }}
    />
  )
}

export default SearchField
