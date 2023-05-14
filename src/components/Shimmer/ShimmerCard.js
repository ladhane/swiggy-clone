import React from 'react'

const ShimmerCard = () => {
  return (
    <div className="w-60 border-2 rounded border-gray-300 m-5 animate-gradient-x bg-gradient-to-r from-gray-300 to-transparent">
    <div className="m-4 h-56 bg-gray-200"></div>
    <div className="m-4 h-2 bg-gray-200"></div>
    <div className="m-4 h-2 bg-gray-200"></div>
    <div className="m-4 h-4 bg-gray-200"></div>
  </div>
  )
}

export default ShimmerCard;