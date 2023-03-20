import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Ready() {

    let hk = useNavigate()

    console.log(hk)

  return (
    <div>ready</div>
  )
}
