import React from 'react'

const Display = (props) => {
  const rows = props.showMsg.map((message, index) => {
    return (
      <div key={index}>
        <p>{message.nick} dice:</p>
        <p>{message.input}</p>
      </div>
    )
  })

  return (
    <div className="container border mb-3 bg-white">
      {rows}
    </div>
  )
}

export default Display;