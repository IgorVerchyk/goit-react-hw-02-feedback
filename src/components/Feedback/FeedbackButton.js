import React from 'react'
import PropTypes from 'prop-types'

import style from './Feedback.module.css'

const LeaveFBButt = ({ nameBtn, onLeaveFeedback }) => (
  <button
    className={style.button}
    onClick={() => onLeaveFeedback(nameBtn)}
    type="button"
  >
    {nameBtn}
  </button>
)

LeaveFBButt.propTypes = {
  nameBtn: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}

export default LeaveFBButt
