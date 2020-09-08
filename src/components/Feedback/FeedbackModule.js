import React from 'react'
import PropTypes from 'prop-types'

const FeedbackModule = ({ title, children }) => (
  <>
    <h2>{title}</h2>
    {children}
  </>
)

FeedbackModule.propTypes = {
  title: PropTypes.string,
}

export default FeedbackModule
