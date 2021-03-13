import React, { createRef } from 'react'
import { Carousel } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import useTypedSelector from '../../hooks/useTypedSelector'
import './Slider.scss'

const Slider: React.FC = () => {
  const carouselRef = createRef()
  const { currentCountry } = useTypedSelector((state) => state.countriesReducer)
  const previuos = () => {
    carouselRef.current.next()
  }
  const onChange = (a, b, c) => {
    console.log(a, b, c)
  }
  return currentCountry ? (
    <div>
      <button type="button" onClick={previuos}>
        <LeftOutlined />
      </button>
      <Carousel autoplay afterChange={onChange} ref={carouselRef}>
        <div>
          <h3 className="contentStyle">3</h3>
        </div>
        <div>
          <h3 className="contentStyle">3</h3>
        </div>
      </Carousel>
      <RightOutlined />
    </div>
  ) : null
}
class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.carouselRef = createRef();
  }

  onChange = (a, b, c) => {
    console.log(a, b, c);
  };

  handleNext = () => this.carouselRef.current.next();

  handlePrev = () => this.carouselRef.current.prev();

  render() {
    return (
      <div className="App">
        <Carousel afterChange={this.onChange} ref={this.carouselRef}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
        </Carousel>
        <Button onClick={this.handlePrev}>Previous</Button>
        <Button onClick={this.handleNext}>Next</Button>
      </div>
    );
  }
}

export default Slider
