import React, { useEffect, useState } from 'react'
import { Rate } from 'antd'
import { StarOutlined, StarFilled } from '@ant-design/icons'
import useTypedSelector from '../../hooks/useTypedSelector'

const Grades: React.FunctionComponent<{ attractionId: number }> = ({ attractionId }) => {
  const { currentCountry } = useTypedSelector((state) => state.countriesReducer)
  const [grade, setGrade] = useState<number>(5)
  /* useEffect(() => {
    const HOST = 'http://localhost:8000'
    const id: number = attractionId
    const URL = `${HOST}/grade/${id}`
    const ac = new AbortController()
    fetch(URL)
      .then((response) => response.json())
      .then((response) => setGrade(response))
      .catch((error) => setGrade(error))
  }, [attractionId]) */
  const handleGrades = (num: number): Record<string, unknown> => {
    const gradeUser = {
      id: attractionId,
      value: num,
    }
    const HOST = 'http://localhost:8000'
    const id: number = attractionId
    const URL = `${HOST}/grade/${id}/${num}`
    const ac = new AbortController()
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(gradeUser),
    })
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((error) => console.log(error))
    return gradeUser
  }
  return (
    <div className="grades">
      <Rate allowHalf allowClear={false} onChange={(value) => handleGrades(value)} value={grade} />
    </div>
  )
}

export default Grades
