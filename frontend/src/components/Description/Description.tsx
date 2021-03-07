import React from 'react'
import './Description.scss'

const capital = 'Берн'

// eslint-disable-next-line
function Description() {
  return (
    <section className="description">
      <p className="description__text">
        Суверенное государство, федеративная республика, состоящая из 26 кантонов с федеральными
        властями в Берне. Крупнейшие города: Женева, Цюрих, Берн, Базель, Лозанна, Люцерн
      </p>
      <p className="description__capital">{`${capital} столица Швейцарии`}</p>
    </section>
  )
}

export default Description
