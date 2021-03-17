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

const audio = new Audio(
  'https://d4.hotplayer.ru/download/487af87cce11afc076f2ed360e11cf4f/19649276_456239049/5517a07700e0-7373d3dc717a-a12947acfa8/%D0%9C%D1%83%D0%B7%D1%8B%D0%BA%D0%B0%20%D0%B8%D0%B7%20%D0%BC%D0%B0%D0%B9%D0%BD%D0%BA%D1%80%D0%B0%D1%84%D1%82%20-%204.mp3?play',
)

audio.loop = true

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
