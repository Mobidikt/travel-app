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

const attraction = [
  {
    id: 123343241323,
    idCountry: 1,
    name: 'Женевское озеро',
    picture: 'https://im0-tub-ru.yandex.net/i?id=0293a1b505899db20d74a9702b85200d&n=13',
    description:
      'Самое большое озеро Альп и второе по величине озеро Центральной Европы. Расположено в границах Швейцарии и Франции. Площадь поверхности - 582 км². Высота над уровнем моря - 372 м.',
  },
  {
    id: 1232132131,
    idCountry: 1,
    name: 'Умирающий лев',
    picture: 'https://im0-tub-ru.yandex.net/i?id=24f03e274b1b95b02efa63bb0666f89a&n=13',
    description:
      'Всемирно известная скульптурная композиция, созданная по эскизу Бертеля Торвальдсена в швейцарском городе Люцерн. Посвящена доблести швейцарских гвардейцев, павших при сопротивлении штурму дворца Тюильри в день восстания 10 августа 1792 года.',
  },
  {
    id: 234314667,
    idCountry: 1,
    name: 'Бернский собор',
    picture: 'https://im0-tub-ru.yandex.net/i?id=5ad7f323fcf46dd9f2e454f7537c2df6&n=13',
    description:
      'Протестантский кафедральный собор, расположенный в южной части Старого Берна. Собор считается важнейшим позднеготическим храмом Швейцарии. С архитектурной точки зрения собор является трёхнефной базиликой.',
  },
  {
    id: 547653524,
    idCountry: 1,
    name: 'Гора Юнгфрау',
    picture: 'https://im0-tub-ru.yandex.net/i?id=bec958f4d84feb391810e2e28aa8edb3&n=13',
    description:
      'Одна из самых известных горных вершин Швейцарии. Её высота - 4158 метров над уровнем моря. Это третья по высоте гора Бернских Альп, которая образует вместе с горами Эйгер и Мёнх примечательное трио.',
  },
  {
    id: 76763452,
    idCountry: 1,
    name: 'Мост Капельбрюкке',
    picture: 'https://im0-tub-ru.yandex.net/i?id=f07bf7b30ab806a1dbb7718dba125e47&n=13',
    description:
      'Старинный мост в швейцарском городе Люцерне на реке Ройс. Самый древний деревянный крытый мост в Европе, одна из главных достопримечательностей Швейцарии и символ города Люцерна. Длина моста составляет 204,70 м. Капельбрюкке был построен в 1365 году.',
  },
  {
    id: 76763452,
    idCountry: 1,
    name: 'Женевский фонтан',
    picture: 'https://im0-tub-ru.yandex.net/i?id=8c7cfa17200ab8c43aee211038818718&n=13',
    description:
      'Фонтан на Женевском озере в Женеве, важная достопримечательность города и один из самых больших фонтанов в мире.',
  },
]

const CarouselArrows = () => {
  // eslint-disable-next-line
  return (
    <div className="slider">
      <h2 className="slider__title">Attractions</h2>
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
                <div className="card-slider" key={item.id}>
                  <div className="card-slider__wrapper">
                    <img className="card-slider__img" src={item.picture} alt={item.name} />
                    <div className="card-slider__info">
                      <h3 className="card-slider__title">{item.name}</h3>
                      <p className="card-slider__description">{item.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </Carousel>
        </Col>
      </Row>
    </div>
  )
}

export default CarouselArrows
