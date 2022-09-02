import { useLayoutEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { changeCartStatus } from '../store/cartSlice'

const useVisibleCart = () => {
  const dispatch = useDispatch()
  const cartBodyRef = useRef()
  const onCloseCart = ({ target }) => {
    target === cartBodyRef.current && dispatch(changeCartStatus(false))
  }
  
  useLayoutEffect(() => {
    const bodySelector = document.body
    const lockPaddingValue = window.innerWidth - bodySelector.offsetWidth
    const initialBodyOverflowStyle = window.getComputedStyle(bodySelector).overflow
    const initialBodyPaddingRightStyle = window.getComputedStyle(bodySelector).paddingRight

    bodySelector.style.overflow = 'hidden'
    bodySelector.style.paddingRight = `${lockPaddingValue}px`

    return () => {
      bodySelector.style.overflow = initialBodyOverflowStyle
      bodySelector.style.paddingRight = initialBodyPaddingRightStyle
    }
  }, [])

  return {
    onCloseCart,
    cartBodyRef
  }
}

export default useVisibleCart
