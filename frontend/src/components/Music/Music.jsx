import {
  MinusCircleOutlined,
  PlayCircleOutlined,
  PlusCircleOutlined,
  StopOutlined,
} from '@ant-design/icons'
import { Button } from 'antd'
import React, { Component, useState } from 'react'
import './Music.scss'

const audio = new Audio('http://streaming.tdiradio.com:8000/house.mp3')
const Music = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const play = () => {
    audio
      .play()
      .then(() => {})
      .catch((err) => console.log(err))
    setIsPlaying(true)
  }
  const stop = () => {
    audio.pause()
    setIsPlaying(false)
  }
  const lowVolumeSound = () => {
    if (audio.volume >= 0.1) audio.volume -= 0.1
  }
  const upVolumeSound = () => {
    if (audio.volume <= 0.9) audio.volume += 0.1
  }
  return (
    <section className="music">
      <p className="sound__title">Sound</p>
      {!isPlaying ? (
        <Button size="large" shape="round" onClick={play} icon={<PlayCircleOutlined />} />
      ) : (
        <Button size="large" shape="round" onClick={stop} icon={<StopOutlined />} />
      )}
      <Button size="large" shape="round" onClick={lowVolumeSound} icon={<MinusCircleOutlined />} />
      <Button size="large" shape="round" onClick={upVolumeSound} icon={<PlusCircleOutlined />} />
    </section>
  )
}

export default Music
