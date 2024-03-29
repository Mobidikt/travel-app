import React, { useEffect, useState } from 'react'
import { useIntl } from 'react-intl'
import './Slider.scss'
import { Row, Col, Carousel, Spin } from 'antd'
import { useParams } from 'react-router-dom'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import Grades from '../Grades/Grades'
import useTypedSelector from '../../hooks/useTypedSelector'
import useActions from '../../hooks/useActions'

const SampleNextArrow = (props: any) => {
  // eslint-disable-next-line
  const { className, style, onClick } = props
  return (
    // eslint-disable-next-line
    <button
      type="button"
      // eslint-disable-next-line
      className={`${className} arrow__btn`}
      // eslint-disable-next-line
      style={{
        ...style,
        fontSize: '25px',
      }}
      // eslint-disable-next-line
      onClick={onClick}
    >
      <RightOutlined />
    </button>
  )
}

const SamplePrevArrow: React.FC = (props: any) => {
  // eslint-disable-next-line
  const { className, style, onClick } = props
  return (
    // eslint-disable-next-line
    <button
      type="button"
      // eslint-disable-next-line
      style={{
        ...style,
        fontSize: '25px',
      }}
      // eslint-disable-next-line
      className={`${className} arrow__btn`}
      // eslint-disable-next-line
      onClick={onClick}
    >
      <LeftOutlined />
    </button>
  )
}

const settings = {
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
}

const CarouselArrows = () => {
  const [fullScreen, setFullScreen] = useState(false)
  const intl = useIntl()
  const { attraction, isLoading } = useTypedSelector((state) => state.attractionsReducer)
  const { language } = useTypedSelector((state) => state.language)
  const { fetchAttractions } = useActions()
  const { id } = useParams()

  useEffect(() => {
    fetchAttractions(id)
    // eslint-disable-next-line
  }, [language])
  // eslint-disable-next-line

  if (isLoading) return <Spin />
  const zoomMap = () => {
    setFullScreen(!fullScreen)
  }

  return (
    <div className="slider">
      <h2 className="slider__title">{intl.formatMessage({ id: 'Attractions' })}</h2>
      <Row className="slider__wrapper" justify="center">
        <Col span={20}>
          <Carousel
            arrows
            // autoplay
            // eslint-disable-next-line
            {...settings}
          >
            {attraction.map((item) => {
              return (
                <div className="card-slider" key={item.name}>
                  <div className="card-slider__wrapper">
                    <img className="card-slider__img" src={item.picture} alt={item.name} />
                    <div className="card-slider__info">
                      <h3 className="card-slider__title">{item.name}</h3>
                      <p className="card-slider__description">{item.description}</p>
                      <Grades attractionId={item.id} score={item.score} />
                    </div>
                  </div>
                </div>
              )
            })}
            {/* <button className="map__btn" type="button" onClick={zoomMap}>
              {fullScreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
            </button> */}
          </Carousel>
        </Col>
      </Row>
    </div>
  )
}

export default CarouselArrows
