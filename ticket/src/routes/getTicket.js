const express = require('express')
const { authUser } = require('../middleware/auth-user');
const { requireAuth } = require('../middleware/require-auth');
const { Ticket } = require('../model/ticket');

const router = express.Router();

router.get('/api/tickets/:id', authUser, requireAuth, async (req, res) => {
    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) {
        throw new Error("No Found");
    }
    res.send(ticket);
})


router.get('/api/tickets', authUser, requireAuth, async (req, res) => {
    const ticket = await Ticket.find();

    if (!ticket.length) {
        throw new Error("No Found");
    }
    res.send(ticket);
})

module.exports = {
    allTicketRouter: router
}