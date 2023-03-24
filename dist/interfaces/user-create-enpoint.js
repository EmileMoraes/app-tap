"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
let user = [];
router.get('/', (req, res) => {
    res.send("hi");
});
router.post('/users', (req, res) => {
    try {
        const { name, cpf, email, password } = req.body;
        let newUser = { name, cpf, email, password };
        // @ts-ignore
        user.push(newUser);
        res.status(201).json({ data: 1 });
    }
    catch (error) {
        return res.status(500).json({
            data: null,
            error: error,
        });
    }
});
