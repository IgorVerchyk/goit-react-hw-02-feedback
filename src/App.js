import React, { Component } from 'react'
import Layout from './components/Layout'
import FbModule from './components/Feedback/FeedbackModule'
import FbStat from './components/Feedback/FeedbackStat'
import FeedbackButtRender from './components/Feedback/FeedbackButtRender'

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  onLeaveFeedback = (buttName) => {
    this.setState({ [buttName]: this.state[buttName] + 1 })
  }
  render() {
    const { good, neutral, bad } = this.state
    return (
      <Layout>
        <FbModule title="Please leave feedback">
          <FeedbackButtRender
            feedbacks={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
          <FbStat good={good} neutral={neutral} bad={bad} />
        </FbModule>
      </Layout>
    )
  }
}
