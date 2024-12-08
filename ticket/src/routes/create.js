const express = require('express')
const { authUser } = require('../middleware/auth-user');
const { requireAuth } = require('../middleware/require-auth');
const { Ticket } = require('../model/ticket');

const router = express.Router();

router.post('/api/ticket', authUser, requireAuth, async (req, res) => {

    const { title, price } = req.body;

    if (!title && !price) {
        throw new Error('Title, Price is required');
    }

    const ticket = await Ticket.create({ title, price, userId: req.user?.id })
    await ticket.save();
    res.status(201).send({ ticket: ticket });
})

router.patch('/api/update-ticket/:id', authUser, requireAuth, async (req, res) => {
    const { title, price } = req.body;

    if (!title && !price) {
        throw new Error('Title, Price is required');
    }

    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) {
        throw new Error("No Found");
    }

    ticket.set({
        title: title,
        price: price
    })

    await ticket.save()

    // const ticket = await Ticket.findByIdAndUpdate({ }, { title, price })
    // await ticket.save();
    res.status(200).send({ ticket: ticket });
})

module.exports = {
    createTicketRouter: router
}