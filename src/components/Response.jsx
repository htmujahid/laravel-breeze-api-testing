import React from 'react'

function Response({res}) {
  return (
    <div>
      <div className="">
        <h2 className="text-lg font-medium leading-6 text-gray-900">Response</h2>
        <pre>
          {JSON.stringify(res, null, 2)}  
        </pre>  
      </div>
    </div>
  )
}

export default Response