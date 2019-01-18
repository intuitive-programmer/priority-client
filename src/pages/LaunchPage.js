import React from 'react'

import { LaunchForm, LinkStartBtn } from '../components/LaunchPage'

const LaunchPage = () => (
  <div className="launch-page full-container parchment">
    {/* Instructional Demo */}
    <LaunchForm />
    <LinkStartBtn path="/test" />
  </div>
)

export default LaunchPage