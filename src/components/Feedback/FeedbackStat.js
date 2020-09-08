import React from 'react'
import PropTypes from 'prop-types'

const FeedbackStat = ({ good, neutral, bad }) => {
  return (
    <>
      <h2>Statistics</h2>
      {
        <>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
        </>
      }
    </>
  )
}

FeedbackStat.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
}

export default FeedbackStat
