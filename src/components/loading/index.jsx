import React, { memo } from 'react'
import './loading.scss'

const Loading = () => {
  return (
    <section className='loading'>
      <span class="loader"></span>
    </section>
  )
}

export default memo(Loading)