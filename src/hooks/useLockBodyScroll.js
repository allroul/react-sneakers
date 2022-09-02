import { useLayoutEffect } from 'react'

const useLockBodyScroll = () => {
  useLayoutEffect(
    () => {
      const initialBodyOverflowStyle = window.getComputedStyle(document.body).overflow
      document.body.style.overflow = 'hidden'

      return () => (document.body.style.overflow = initialBodyOverflowStyle)
    },
    []
  );
}

export default useLockBodyScroll