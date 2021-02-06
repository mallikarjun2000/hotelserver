import express from 'express';
import service from '../models/services.js';
import user from '../models/users.js'

const addService = (req, res) => {
    const serv = new service(req.body);
    serv.save()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
}

const availableServices = (req, res) => {
    service.find()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
}

const getGuestDetails = (req, res) => {
    user.findById(req.body.id)
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
}

const seeAllGuests = (req, res) => {
    user.find({role:'guest'})
    .then((result) =>{ res.send(result)
    })
    .catch((err) => console.log(err));
}

export {addService, availableServices, getGuestDetails, seeAllGuests};