const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Machine = require('../models/machine');
const prizes = [10, 20, 30, 40];


router.get('/prizes/', async (req, res) => { 
   
    res.json(prizes);
});



router.get('/start/:id', async (req, res) => {
    if (mongoose.Types.ObjectId.isValid(req.params.id)) {
        const machine = await Machine.findById(req.params.id);
        if ( machine && machine.userName) {
            const newMachine = {
                userName: machine.userName, 
                credits: machine.credits,  
                sessionCredits: 10
            };
            await Machine.findByIdAndUpdate(req.params.id, newMachine); 
            const updatedMachine = await Machine.findById(req.params.id);
            res.json(updatedMachine);
    
        }
    }
});

router.get('/cashout/:id', async (req, res) => {
    const machine = await Machine.findById(req.params.id);
    //const { sessionCredits } = req.body;
    const newMachine = {
        userName: machine.userName, 
        credits: machine.credits + machine.sessionCredits,
        sessionCredits: 0
    };
    await Machine.findByIdAndUpdate(req.params.id, newMachine);
    const updatedMachine = await Machine.findById(req.params.id);
    res.json(updatedMachine);
});


router.get('/tryluck/:id', async (req, res) => {
    let machine = await Machine.findById(req.params.id); 

    if (machine.sessionCredits + machine.credits > 0) {  

        if (machine.sessionCredits > 0) {
            machine.sessionCredits -= 1;  
        } else {
            machine.credits -= 1;
        }

        const getLuck = () => { 
            const boxes = {
                box1: Math.ceil(Math.random() * 4) - 1, 
                box2: Math.ceil(Math.random() * 4) - 1,
                box3: Math.ceil(Math.random() * 4) - 1
            };
            return {
                result: (boxes.box1 === boxes.box2 && boxes.box1 === boxes.box3),
                boxes
            };
        };
    
        let luck = getLuck();
    
        if (luck.result) {       
            if (machine.sessionCredits < 40) {
                // do nothing
            } else if (machine.sessionCredits > 60) { 
                if (Math.random() <= 0.6 ) {
                    luck = getLuck(); 
                }
            } else { // between
                if (Math.random() <= 0.3 ) {
                    luck = getLuck(); 
                } 
            }    
        } 
    
        let pot = 0; 
        if (luck.result) {
            pot = prizes[luck.boxes.box1] ? prizes[luck.boxes.box1] : 0;
        }
    
        const newMachine = {
            userName: machine.userName, 
            credits: machine.credits, 
            sessionCredits: machine.sessionCredits + pot,  
            box1: luck.boxes.box1,
            box2: luck.boxes.box2,
            box3: luck.boxes.box3
        };

        await Machine.findByIdAndUpdate(req.params.id, newMachine);
        const updatedMachine = await Machine.findById(req.params.id);
        res.json(updatedMachine);
    } else { 
        res.json(machine);
    }
});

router.post('/login/', async (req, res) => {
    const { userName, password } = req.body; 
    if (userName && password) {
        console.log('a')
        const machines = await Machine.find({userName, password}); 
        console.log('b')
        if (machines && machines.length > 0) {
            console.log('c')
            const machine = machines[0];
            const newMachine = {
                userName: machine.userName, 
                credits: machine.credits,  
                sessionCredits: 0
            };
            console.log('d')
            await Machine.findByIdAndUpdate(machine._id, newMachine); 
            const updatedMachine = await Machine.findById(machine._id);
            res.json(updatedMachine);
            console.log('e')

        } else {
            const machine = new Machine({userName, password});
            const updatedMachine = await machine.save();
            res.json(updatedMachine);

        }
    }  
    console.log('f')
    
});

module.exports = router;