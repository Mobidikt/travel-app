import {
  MinusCircleOutlined,
  PlayCircleOutlined,
  PlusCircleOutlined,
  StopOutlined,
} from '@ant-design/icons'
import { Button } from 'antd'
import { useIntl } from 'react-intl'
import React, { useState } from 'react'
import './Music.scss'

const audio = new Audio('https://z1.fm/download/16236002?play=on&ww=1583&wh=426')

const Music: React.FC = () => {
  const intl = useIntl()
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
      <h4 className="music__title">{intl.formatMessage({ id: 'music' })}</h4>
      <div className="music__wrapper">
        {!isPlaying ? (
          <Button size="large" shape="round" onClick={play} icon={<PlayCircleOutlined />} />
        ) : (
          <Button size="large" shape="round" onClick={stop} icon={<StopOutlined />} />
        )}
        <Button
          size="large"
          shape="round"
          onClick={lowVolumeSound}
          icon={<MinusCircleOutlined />}
        />
        <Button size="large" shape="round" onClick={upVolumeSound} icon={<PlusCircleOutlined />} />
      </div>
    </section>
  )
}

export default Music
