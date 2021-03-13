import React, { useEffect, useState } from 'react'
import { StarOutlined, StarFilled } from '@ant-design/icons'
import useTypedSelector from '../../hooks/useTypedSelector'

const Grades: React.FC = () => {
  const [value, setValue] = useState<number>(5)
  useEffect(() => {
    fetch('http://localhost:8000/country/52457d8718f83293205aaa95/value')
      .then((response) => response.json())
      .then((response) => setValue(response))
      .catch((error) => setValue(error))
  }, [])
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
  const handleGrades = (countryId: string, num: number): Record<string, unknown> => {
    const gradeUser = {
      idCountry: countryId,
      value: num,
    }
    return gradeUser
  }
  const grades = grade()
  return (
    <div className="grades">
      {grades.map((el, index) =>
        el === 1 ? (
          <StarFilled onClick={() => handleGrades('1234', index + 1)} />
        ) : (
          <StarOutlined onClick={() => handleGrades('1234', index + 1)} />
        ),
      )}
    </div>
  )
}

export default Grades
