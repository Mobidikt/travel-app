import React from 'react'
import './SearchField.scss'
import { Input } from 'antd'
import useActions from '../../hooks/useActions'

const { Search } = Input

const SearchField: React.FC = () => {
  const { filterCountries } = useActions()

  return (
    <div className="search">
      <Search
        placeholder="Search Country"
        autoFocus
        allowClear
        onSearch={filterCountries}
        style={{ width: 200 }}
      />
    </div>
  )
}

export default SearchField
