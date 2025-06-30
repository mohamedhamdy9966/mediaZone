import React from 'react'

function Skipped() {
  return (
    <div className="flex items-center justify-center my-16 pt-40">
      {/* Project Container */}
      <div
        className="flex items-center justify-center w-64 h-32 rounded-full"
        style={{
          background: 'rgba(245, 212, 73, 0.85)',
          transform: 'rotate(-8deg)',
          marginRight: '-43px', // negative margin to make them touch
          zIndex: 2,
        }}
      >
        <h2 className="text-4xl font-bold jaro text-black">Project</h2>
      </div>
      {/* & Symbol */}
      <span className="text-5xl font-bold text-white select-none z-10 relative" style={{ margin: '0 8px' }}>&amp;</span>
      {/* Client Container */}
      <div
        className="flex items-center justify-center w-64 h-32 rounded-full"
        style={{
          background: '#206BFF',
          transform: 'rotate(8deg)',
          marginLeft: '-24px', // negative margin to make them touch
          zIndex: 2,
        }}
      >
        <h2 className="text-4xl font-bold jaro text-white">Client</h2>
      </div>
    </div>
  )
}

export default Skipped