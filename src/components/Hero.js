import React from 'react';

export default function Hero({heroName}) {
    if(heroName === 'Yulia'){
        throw new Error('Not a hero!')
    }
  return (
    <div>
        {heroName}
    </div>
  )
}
