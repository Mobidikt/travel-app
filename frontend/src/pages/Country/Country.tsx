import React from 'react'
import AuthCard from '../../components/AuthCard/AuthCard'
import Description from '../../components/Description/Description'
import Video from '../../components/Video/Video'

const Country: React.FC = () => {
  return (
    <div className="country-page">
      <Description />
      <Video />
      <AuthCard />
    </div>
  )
}

export default Country
