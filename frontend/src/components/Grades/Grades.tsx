import { message, Rate } from 'antd'
import React from 'react'
import { useIntl } from 'react-intl'
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
  const intl = useIntl()
  const { email, token } = useTypedSelector((state) => state.authReducer)
  const { setNewScore } = useActions()
  const countVotedPeople = score.votedPeople.length

  const countStars = score.score / countVotedPeople

  const rateHandleClick = async (value: number) => {
    if (!token) {
      return message.warning(intl.formatMessage({ id: 'authorized_users' }))
    }

    if (score.votedPeople.includes(email || '')) {
      return message.warning(intl.formatMessage({ id: 'error_grades' }))
    }

    await AttractionsApi.update(attractionId, email || '', value)

    setNewScore(attractionId, email || '', value)

    return message.success(intl.formatMessage({ id: 'succses_grades' }))
  }

  return (
    <div className="grades">
      {countVotedPeople === 0 ? (
        <h3>{intl.formatMessage({ id: 'not_grades' })}</h3>
      ) : (
        <h3>
          {intl.formatMessage({ id: 'rating' })}: {countStars}
        </h3>
      )}

      <Rate value={countStars} onChange={rateHandleClick} />
    </div>
  )
}

export default Grades
