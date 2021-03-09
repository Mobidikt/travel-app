import React from 'react'
import './SearchField.scss'
import { Input } from 'antd'

const { Search } = Input

const SearchField: React.FC = () => {
  const onSearch = () => {}
  return (
    <div className="search">
      <Search
        placeholder="Search Country"
        autoFocus
        allowClear
        onSearch={onSearch}
        style={{ width: 200 }}
      />
    </div>
  )
}

export default SearchField
