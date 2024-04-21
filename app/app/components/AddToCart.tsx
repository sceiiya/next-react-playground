import React from 'react'
import styles from './ProductCard.module.css'
const AddToCart = () => {
    let x = 8
  return (
    <div className={styles.card}>
        <button className='p-1' onClick={() => {console.log(x)}} >Click moe</button>
    </div>
  )
}

export default AddToCart