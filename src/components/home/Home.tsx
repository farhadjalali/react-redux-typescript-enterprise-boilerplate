import React from 'react'
import { Button, Component } from './style'

export const Home: React.FC = () => {
  return (
    <Component>
      Home
      <Button value="Start" color="red" />
      <Button value="Stop" color="yellow" />
    </Component>
  )
}
