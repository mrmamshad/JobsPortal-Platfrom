import React from 'react'

export default function EmployerLogo({width = 90 , logo}) {
    const randomSeed = Math.floor(Math.random() * 100000);
    const imageUrl = `http://picsum.photos/seed/${randomSeed}/${width}/${width}`;
  return (
    <img src={logo} alt="Image" className='rounded-xl'  width={width} />
  )
}
