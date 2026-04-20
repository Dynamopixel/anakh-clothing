import React from 'react'
import { Button } from 'react-bootstrap';

const GradientButton = ({text}) => {
  return (
    <Button className="gradient-btn" >
      {text}
    </Button>
  )
}

export default GradientButton