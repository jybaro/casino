import React, {useState} from 'react'
import { ReelPanel } from './ReelPanel'
import { CoinSlot } from './CoinSlot'
import { Lever } from './Lever'
import { WinningLine } from './WinningLine'

export const SlotMachine = ({machine, setStart, setMachine, setHideInfo}) => {
    const [scrollingBox1, setScrollingBox1] = useState(false);
    const [scrollingBox2, setScrollingBox2] = useState(false);
    const [scrollingBox3, setScrollingBox3] = useState(false);
    
    return (
        <div>
            <CoinSlot />
            <ReelPanel {...machine}  scrollingBox1={scrollingBox1} scrollingBox2={scrollingBox2} scrollingBox3={scrollingBox3} />
            <Lever  
                machine={machine} 
                setStart={setStart}  
                setMachine={setMachine} 
                setScrollingBox1={setScrollingBox1} 
                setScrollingBox2={setScrollingBox2}  
                setScrollingBox3={setScrollingBox3}
                setHideInfo={setHideInfo} 
                />
            <WinningLine />
        </div>
    )
}
