import * as express from "express";
import { Application, Request, Response, NextFunction } from 'express';
const mongoose = require('mongoose');
import { RentModel } from "../../model/rent";
import { ElectricityPeriodModel } from "../../model/ElectricityPeriod";
var fs = require('fs');
var dbPath = __dirname + "/../../../dbconfig.json";
var dbConfig = JSON.parse(fs.readFileSync(dbPath, 'UTF-8'));
var password = dbConfig.url;

const router = express.Router();

//Get ElectricityPeriods
router.get('/', async (req: Request, res: Response)=>{
    const periods = await loadElectricityPeriodsCollection();
    res.send(periods);
})


//Add ElectricityPeriod
router.post('/', async (req:Request, res: Response) => {
    console.log(req.body);
    const connect = () => {
        let database = mongoose.connect(password, {
            useNewUrlParser: true,
            useFindAndModify: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });

        return {
            ElectricityPeriodModel,
        };
    };
    connect();
    await ElectricityPeriodModel.create(req.body);
    res.status(201).send(req.body);
});


async function loadPostsCollection()
{
    const connect = () => {
        let database = mongoose.connect(password, {
            useNewUrlParser: true,
            useFindAndModify: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });

        return {
            RentModel,
        };
    };

    const db = connect();

    const highestRent = await db.RentModel.findHighestTotal();
    console.log(highestRent);
    return highestRent;
}

async function loadElectricityPeriodsCollection()
{
    const connect = () => {
        let database = mongoose.connect(password, {
            useNewUrlParser: true,
            useFindAndModify: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        });

        return {
            ElectricityPeriodModel,
        };
    };

    const db = connect();
    return await db.ElectricityPeriodModel.findAllPeriods();
}

module.exports = router;