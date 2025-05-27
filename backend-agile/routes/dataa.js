const express = require('express');
const router = express.Router();
const fetchusers = require('../middleware/fetchuser');
const { body, validationResult } = require('express-validator');
const Data = require('../model/data');

// get All the data entered by the user
router.get('/fetchalldata', fetchusers, async(req, res) => {
    const notes = await Data.find({ user: req.user.id });
    res.json(notes)
})
router.use(
    express.urlencoded({ extended: true })
);
router.use(express.json());
// to be called when we want to Estimate the effort
const axios = require('axios')
const estimate = async(dat) => {
    console.log(dat);
    const response = await axios.post('http://127.0.0.1:8000/api/update', dat, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    //console.log(response.data);
    return response.data;
    //return response.json();
}

const Cost = (efforts) => {
    let effort = parseInt(efforts)
    let labourcost = 750000;
    let developer=9;
    let developerscost = (developer*labourcost)/52;
    let Weeks = efforts / (developer * 6*5)
    let cost = Weeks * developerscost;
    return cost;
}

// Add a new data to user profile using :POST "/api/auth/adddata
router.post('/adddata', [
        body('project', 'Project cannot be blank').exists(),
        body('input', 'Input cannot be blank').exists(),
        body('fdile', 'file cannot be blank').exists(),
        body('output', 'output cannot be blank').exists(),
        body('elete', 'delete cannot be blank').exists(),
        body('Interface', 'Interface cannot be blank').exists(),
        body('changed', 'changed cannot be blank').exists(),
        body('pf_range', 'PF_range cannot be blank').exists(),
        body('devtype', 'devtype cannot be blank').exists(),
        body('enquiry', 'enquiry cannot be blank').exists(),
        body('added', 'added cannot be blank').exists()
    ], fetchusers, async(req, res) => {
        try {

            const { project, input, output, fdile, elete, Interface, changed, pf_range, devtype, enquiry, added } = req.body;
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() })
            }
            //to update the data from flask api server
            //console.log(req.body)
            // await estimate(req.body);
            const dat = {
                project: req.body.project,
                input: req.body.input,
                output: req.body.output,
                fdile: req.body.fdile,
                elete: req.body.elete,
                added: req.body.added,
                Interface: req.body.Interface,
                changed: req.body.changed,
                pf_range: req.body.pf_range,
                devtype: req.body.devtype,
                enquiry: req.body.enquiry,
                user: req.user.id,
                effort: "raj",
                maxeffort: "rajj1"

            };
            const data = await estimate(dat);
            console.log("Flask returned data:", data)
            console.log(data);
            let coost = Cost(data.effort);
            const note = new Data({
                    project: req.body.project,
                    input: req.body.input,
                    output: req.body.output,
                    fdile: req.body.fdile,
                    elete: req.body.elete,
                    added: req.body.added,
                    Interface: req.body.Interface,
                    changed: req.body.changed,
                    pf_range: req.body.pf_range,
                    devtype: req.body.devtype,
                    enquiry: req.body.enquiry,
                    user: req.user.id,
                    effort: data.effort,
                    maxeffort: data.maxeffort,
                    cost: coost

                })
                // console.log(req.body);

            const savednote = await note.save();
            res.json(savednote)
        } catch (error) {
            console.error(error)
            res.status(500).send("Internal server error")
        }
    })
    //Delete the data by using DELETE method "/api/data/delete/:id"
router.delete('/deletedata/:id', fetchusers, async(req, res) => {
    const { project, input, output, fdile, elete, Interface, changed, pf_range, devtype, added } = req.body;
    try {
        let data = await Data.findById(req.params.id);
        if (!data) {
            return res.status(404).send("Not Found");
        }
        if (data.user.toString() != req.user.id) {
            return res.status(404).send("Not Authenticated");
        }
        data = await Data.findByIdAndDelete(req.params.id)
        res.json({ "Success": "data has been deleted successfully", data: data });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server error");
    }
})




//update in same data by using PUT method "/api/data/update"
router.put('/updatedata/:id', fetchusers, async(req, res) => {
    const { project, input, output, fdile, elete, Interface, added, changed, pf_range, devtype, enquiry } = req.body;
    try {
        const dat = {
            project: req.body.project,
            input: req.body.input,
            output: req.body.output,
            fdile: req.body.fdile,
            elete: req.body.elete,
            Interface: req.body.Interface,
            changed: req.body.changed,
            pf_range: req.body.pf_range,
            devtype: req.body.devtype,
            enquiry: req.body.enquiry,
            added: req.body.added,
            user: req.user.id,
            effort: "raj",
            maxeffort: "raj1"
        };
        const dater = await estimate(dat);
        console.log("Flask returned data:", dater)
        console.log(dater);

        const newdata = {};
        if (project) { newdata.project = project };
        if (input) { newdata.input = input };
        if (output) { newdata.output = output };
        if (fdile) { newdata.fdile = fdile };
        if (elete) { newdata.elete = elete };
        if (changed) { newdata.changed = changed }
        if (pf_range) { newdata.pf_range = pf_range }
        if (devtype) { newdata.devtype = devtype }
        if (Interface) { newdata.Interface = Interface }
        if (enquiry) { newdata.enquiry = enquiry }
        if (added) { newdata.added = added }
        newdata.effort = dater.effort;
        newdata.maxeffort = dater.maxeffort;
        newdata.cost = Cost(dater.effort)

        let data = await Data.findById(req.params.id);
        if (!data) {
            return res.status(404).send("Not Found");
        }
        if (data.user.toString() != req.user.id) {
            return res.status(404).send("Not Authenticated");
        }
        data = await Data.findByIdAndUpdate(req.params.id, { $set: newdata }, { new: true })
        res.json(data);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server error");
    }
})
module.exports = router;