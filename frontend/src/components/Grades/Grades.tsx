import { message, Rate } from 'antd'
import React from 'react'
import useActions from '../../hooks/useActions'
import useTypedSelector from '../../hooks/useTypedSelector'
import AttractionsApi from '../../services/AttractionsApi'
import './Grades.scss'

type GradesPropsType = {
  attractionId: string,
  score: {
    score: number,
    votedPeople: Array<string>,
  },
}

const Grades: React.FC<GradesPropsType> = ({ attractionId, score }) => {
  const { email, token } = useTypedSelector((state) => state.authReducer)
  const { setNewScore } = useActions()
  const countVotedPeople = score.votedPeople.length

  const countStars = score.score / countVotedPeople

  const rateHandleClick = async (value: number) => {
    if (!token) {
      return message.warning('Это возможность доступна только авторизованным пользователям')
    }

    if (score.votedPeople.includes(email || '')) {
      return message.warning('Вы уже оценили эту достопремечательность')
    }

    await AttractionsApi.update(attractionId, email || '', value)

    setNewScore(attractionId, email || '', value)

    return message.success('Вы успешно оценили эту достопремечательность')
  }

  return (
    <div className="grades">
      {countVotedPeople === 0 ? (
        <h3>Ещё никто не оценил эту достопримечательность</h3>
      ) : (
        <h3>Рейтинг: {countStars}</h3>
      )}

      <Rate value={countStars} onChange={rateHandleClick} />
    </div>
  )
}

export default Grades
