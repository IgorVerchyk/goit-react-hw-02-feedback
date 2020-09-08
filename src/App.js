import React, { Component } from 'react'
import Layout from './components/Layout'
import SectionTitle from './components/Feedback/FeedbackModule'
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

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, stat) => {
      acc += stat
      return acc
    }, 0)
  }

  countPositiveFeedbackPercentage = () => {
    return this.state.good === 0
      ? 0
      : Math.round((this.state.good / this.countTotalFeedback()) * 100)
  }

  render() {
    const { good, neutral, bad } = this.state
    return (
      <Layout>
        <SectionTitle title="Please leave feedback">
          <FeedbackButtRender
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </SectionTitle>
        <SectionTitle>
          <FbStat
            title="Statistics"
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            statPersentage={this.countPositiveFeedbackPercentage()}
          />
        </SectionTitle>
      </Layout>
    )
  }
}
