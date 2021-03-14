import React, { useEffect, useState } from 'react'
import './SearchField.scss'
import { Input } from 'antd'
import useActions from '../../hooks/useActions'

const { Search } = Input

const SearchField: React.FC = () => {
  const { filterCountries } = useActions()
  const [searchVal, setSearchVal] = useState('')

  useEffect(() => {
    filterCountries(searchVal)
    // eslint-disable-next-line
  }, [searchVal])

  // eslint-disable-next-line
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchVal(event.target.value)
  }

  return (
    <Search
      className="search"
      placeholder="Search Country"
      autoFocus
      allowClear
      onSearch={filterCountries}
      onChange={handleSearchChange}
    />
  )
}

export default SearchField
