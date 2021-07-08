import React, {useState} from 'react'
import { SlotMachine } from '../components/SlotMachine'
import { CashOut } from '../components/CashOut'
import { Message } from '../components/Message'
import { Status } from '../components/Status'
import { Header } from '../components/Header'


export const Casino = ({machine, setStart, setMachine}) => {
    const [hideInfo, setHideInfo] = useState(false);
    return (
        <>
            <Header title="Casino" machine={machine} setStart={setStart}  setMachine={setMachine} hideInfo={hideInfo}/>
            <div className="p-8">
                <SlotMachine  machine={machine} setStart={setStart}  setMachine={setMachine} setHideInfo={setHideInfo}/>
                <CashOut  machine={machine} setStart={setStart}  setMachine={setMachine} />
                <Status />
                <Message />
            </div>
        </>
    )
}
