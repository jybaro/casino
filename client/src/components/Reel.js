import React from 'react'
import { Symbol } from './Symbol'

export const Reel = ({init, time, scrolling, index}) => {
    return (
        <div className="w-1/4 h-1">
            <div className="slider">
	            <div className={scrolling ? "slide-track" : ""}>
                    <div className="slide">
                        <Symbol type={scrolling ? init : index} />
                    </div>
                    <div className="slide">
                        <Symbol type={(init + 1) % 4} />
                    </div>
                    <div className="slide">
                        <Symbol type={(init + 2) % 4} />
                    </div>
                    <div className="slide">
                        <Symbol type={(init + 3) % 4} />
                    </div>
                    <div className="slide">
                        <Symbol type={init} />
                    </div>
                </div>
            </div>
        </div>
    )
}
