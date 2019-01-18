import React from 'react'

import { Demo, LaunchForm, LinkStartBtn } from '../components/LaunchPage'

const LaunchPage = () => (
  <div className="launch-page full-container parchment">
    <Demo />
    <LaunchForm />
    <LinkStartBtn path="/test" />
  </div>
)

export default LaunchPage