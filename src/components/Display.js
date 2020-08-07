import React from 'react'

const Display = (props) => {
  console.log(props)

  const rows = props.showMsg.map((message, index) => {
    return (
      <p key={index} >{message.input}</p>
    )
  })

  return (
    <div className="container border mb-3 bg-white text-right">{rows}</div>
  
  )

}

export default Display;