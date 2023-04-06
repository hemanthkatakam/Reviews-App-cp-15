// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  nextPerson = () => {
    const {index} = this.state
    const {reviewsList} = this.props
    const listLength = reviewsList.length
    if (index < listLength - 1) {
      this.setState(prevState => ({index: prevState.index + 1}))
    }
  }

  prevPerson = () => {
    const {index} = this.state
    if (index > 0) {
      this.setState(prevState => ({index: prevState.index - 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {index} = this.state
    const details = reviewsList[index]
    return (
      <div className="bg-container ">
        <h1 className="heading">Reviews</h1>
        <div className="li">
          <img
            src={details.imgUrl}
            alt={details.username}
            key={details.username}
          />
          <p className="name">{details.username}</p>
          <div className="button-container">
            <button
              type="button"
              onClick={this.prevPerson}
              data-testid="leftArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
              />
            </button>
            <button
              type="button"
              onClick={this.nextPerson}
              data-testid="rightArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />
            </button>
          </div>
          <p className="company-name">{details.companyName}</p>
          <p>{details.description}</p>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
