import React from 'react'
import './Slider.scss'
import { Row, Col, Carousel } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'

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
        color: 'black',
        fontSize: '25px',
      }}
      // eslint-disable-next-line
      onClick={onClick}
    >
      <RightOutlined />
    </button>
  )
}

const SamplePrevArrow = (props: any) => {
  // eslint-disable-next-line
  const { className, style, onClick } = props
  return (
    // eslint-disable-next-line
    <button
      type="button"
      // eslint-disable-next-line
      style={{
        ...style,
        color: 'black',
        fontSize: '15px',
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
  // eslint-disable-next-line
  return (
    <div className="slider">
      <h2 className="slider__title">Attractions</h2>
      <Row justify="center">
        <Col span={16}>
          <Carousel
            arrows
            autoplay
            // eslint-disable-next-line
            {...settings}
          >
            <div className="slider__card">
              <h3 className="contentStyle">3</h3>
            </div>
            <div>
              <h3 className="contentStyle">3</h3>
            </div>
          </Carousel>
        </Col>
      </Row>
    </div>
  )
}

export default CarouselArrows
