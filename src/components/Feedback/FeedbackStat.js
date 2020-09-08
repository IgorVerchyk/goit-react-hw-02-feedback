import React from 'react'
import PropTypes from 'prop-types'

const FeedbackStat = ({ good, neutral, bad, total, statPersentage }) => {
  return total === 0 ? (
    <>
      <h2>Statistics</h2>
      <p>No feedback given</p>
    </>
  ) : (
    <>
      <h2>Statistics</h2>
      {
        <>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive feedbacks: {statPersentage}%</p>
        </>
      }
    </>
  )
}

FeedbackStat.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  statPersentage: PropTypes.number.isRequired,
}

export default FeedbackStat
