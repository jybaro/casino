import React from 'react'
import { Reel } from './Reel'

export const ReelPanel = ({scrollingBox1, scrollingBox2, scrollingBox3, box1, box2, box3}) => {
    return (
        <div className="flex mb-4">
            <Reel scrolling={scrollingBox1} index={box1} init={ box1 } />
            <Reel scrolling={scrollingBox2} index={box2} init={ box2 } />
            <Reel scrolling={scrollingBox3} index={box3} init={ box3 } />
        </div>
    )
}
