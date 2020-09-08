import React from 'react'
import PropTypes from 'prop-types'
import FbButt from './FeedbackButton'
import style from './Feedback.module.css'

const FeedbackButtRender = ({ feedbacks, onLeaveFeedback }) => (
  <div className={style.controls_container}>
    {feedbacks.map((buttonChar) => (
      <FbButt
        key={buttonChar}
        nameBtn={buttonChar}
        onLeaveFeedback={onLeaveFeedback}
      />
    ))}
  </div>
)

FeedbackButtRender.propTypes = {
  feedbacks: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}

export default FeedbackButtRender
