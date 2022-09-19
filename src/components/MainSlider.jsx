import { useState } from 'react';
import '../main.scss'

const MainSlider = mainTitle => {
    const [pageOffset, setPageOffset] = useState(0);
    let sliderWidth;
    if(window.innerWidth > 1200) {
        sliderWidth = 960
    } else if(window.innerWidth <= 1200 && window.innerWidth >= 993) {
        sliderWidth = 765
    } else if(window.innerWidth <= 992 && window.innerWidth >= 769) {
        sliderWidth = 590
    } else if(window.innerWidth <= 768 && window.innerWidth >= 577) {
        sliderWidth = 457
    } else if(window.innerWidth <= 576) {
        sliderWidth = 295
    }
    const slidesNumber = 4 - 1;
    const maxOffset = -(sliderWidth * slidesNumber);

    const prevSlide = () => {
        setPageOffset(Math.min(pageOffset + sliderWidth, 0))        
        
    }

    const nextSlide = () => {
        setPageOffset(Math.max(pageOffset - sliderWidth, maxOffset))
    }        

    const executeScroll = () => mainTitle.mainTitle.current.scrollIntoView()

    return (
        <div className='slider'>
            {pageOffset == 0 ? null : <div className='slider__arrow-prev' onClick={() => prevSlide()}></div>}            
            <div className='slider__window'>
                <div className='slider__items' style={{transform: `translateX(${pageOffset}px)`}}>
                    <div className='slider__item slider__item_green active'>
                        <button onClick={executeScroll} className='green-button slider__button'>
                            explore
                        </button>
                    </div>
                    <div className='slider__item slider__item_blue'>
                        <button onClick={executeScroll} className='slider__button'>
                            explore
                        </button>
                    </div>
                    <div className='slider__item slider__item_red'>
                        <button onClick={executeScroll} className='slider__button'>
                            explore
                        </button>
                    </div>
                    <div className='slider__item slider__item_brown'>
                        <button onClick={executeScroll} className='slider__button'>
                            explore
                        </button>
                    </div>
                </div>                
            </div>   
            {pageOffset == -(sliderWidth*slidesNumber) ? null : <div className='slider__arrow-next' onClick={() => nextSlide()}></div>}
                     
        </div>
    )
}

export default MainSlider;