import React from 'react'
import { Star } from '../star/Star'
import './Stars.css'

export const Stars = ({ count }) => {
    if (count <= 0 | count >= 6) {
        return
    }
  return (
    <ul className='card-body-stars u-clearfix'>
        {[...Array(count)].map((_, i) => <Star key={i} />)}
    </ul>
  )
}
