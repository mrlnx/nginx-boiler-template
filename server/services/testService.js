const express = require('express');
const statusCodes = require('../statusCodes');

class TestService {

    constructor(options) {
        this._options = options;
        this._router = express.Router();
        this.initializeRoutes();
    }

    get router() {
        return this._router;
    }

    initializeRoutes() {

        const test = {};
        test.test = "hallo";

        this.router.get('/', (req, res) => {
            res.status(statusCodes.OK).send("Test api");
        });

        this.router.get('/token', (req, res) => {

            const token = {
                "token": "u34y3892749832749832740983284rywiudfyuidsy"
            }

            res.status(statusCodes.OK).json(token);
        });

        this.router.get('/testReplace/:lengte/:breedte', (req, res) => {

            console.log(req.params);

            const keys = {};
            const l = keys.l = {};
            l.key = 'l';
            l.value = req.params.lengte;

            const b = keys.b = {};
            b.key = 'b';
            b.value = req.params.breedte;

            let test = "l * b / 1000000";
            const splitedString = test.split(' ');

            for(const v of splitedString) {
              if(keys[v] !== undefined) {
                test = test.replace(v, keys[v].value);
              }
            }

            console.log(eval(test));

            res.status(statusCodes.OK).json(test + " = " + eval(test));
        });
    }
}

exports.TestService = TestService;
