import React from 'react'
import css from './Loader.module.css'

function Loader() {
  return (
    <div className={css.wrapper}>
        <img src="https://acegif.com/wp-content/uploads/loading-25.gif" alt="Loading" />
    </div>
  )
}

export default Loader