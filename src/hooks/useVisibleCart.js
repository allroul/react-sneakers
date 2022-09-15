import { useLayoutEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { changeCartStatus } from '../store/cartStatusSlice'

const useVisibleCart = cartStatus => {
  const dispatch = useDispatch()
  const cartBodyRef = useRef()
  const onCloseCart = ({ target }) => {
    target === cartBodyRef.current && dispatch(changeCartStatus(false))
  }
  
  useLayoutEffect(() => {
    const bodySelector = document.body
    const lockPaddingValue = window.innerWidth - bodySelector.offsetWidth
    
    if(cartStatus) {
      bodySelector.style.overflow = 'hidden'
      bodySelector.style.paddingRight = `${lockPaddingValue}px`
    } else {
      bodySelector.style.overflow = null
      bodySelector.style.paddingRight = null
    }
  }, [cartStatus])

  return {
    onCloseCart,
    cartBodyRef
  }
}

export default useVisibleCart
