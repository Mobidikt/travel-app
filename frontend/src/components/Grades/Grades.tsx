import React, { useEffect, useState } from 'react'
import { StarOutlined, StarFilled } from '@ant-design/icons'
import useTypedSelector from '../../hooks/useTypedSelector'

const Grades: React.FC = () => {
  const { currentCountry } = useTypedSelector((state) => state.countriesReducer)
  const [value, setValue] = useState<number>(5)
  useEffect(() => {
    const HOST = 'http://localhost:8000'
    const id: string = currentCountry?.id || ''
    const URL = `${HOST}/grade/${id}`
    fetch(URL)
      .then((response) => response.json())
      .then((response) => setValue(response))
      .catch((error) => setValue(error))
  }, [currentCountry?.id])
  const grade = (): number[] => {
    const res: number[] = []
    let val: number = value
    for (let i = 0; i < 5; i += 1) {
      if (val > 0) {
        res.push(1)
        val -= 1
      } else {
        res.push(0)
      }
    }
    return res
  }
  const handleGrades = (num: number): Record<string, unknown> => {
    const gradeUser = {
      id: currentCountry?.id,
      value: num,
    }
    return gradeUser
  }
  const grades = grade()
  return (
    <div className="grades">
      {grades.map((el, index) =>
        el === 1 ? (
          <StarFilled onClick={() => handleGrades(index + 1)} />
        ) : (
          <StarOutlined onClick={() => handleGrades(index + 1)} />
        ),
      )}
    </div>
  )
}

export default Grades
