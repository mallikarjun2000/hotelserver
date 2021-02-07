import express from 'express';
import user from '../models/users.js';
import service from '../models/services.js';
import servCust from '../models/serviceCustomer.js';

const seeServices = (req, res) => {
    service.find()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
}

const buyService = (req, res) => {
    const serv = new servCust({
        custid: req.body.data.custid,
        service: req.body.data.service,
        status: req.body.data.status,
        cost: req.body.data.cost,
        rating: req.body.data.rating
    });
    serv.save()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
}

const seeUsingServices = (req, res) => {
    servCust.find({custid: req.body.data.custid})
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
}

const usingServiceStatus = (req, res) => {
    servCust.findOne({_id: req.body.data.servid})
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
}

const checkout = (req, res) => {
    servCust.find({custid: req.body.data.custid})
    .then((result) => {
        let sum = 0;
        result.forEach((item) => {
            sum += item.cost;
        });
        res.send({cost:sum});
    })
    .catch((err) => console.log(err));
}

const updateStatus = (req, res) => {
    servCust.findByIdAndUpdate(req.body.data.servid, {status: req.body.data.status}, { returnNewDocument: true })
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
}

export {seeServices, buyService, seeUsingServices, usingServiceStatus, checkout, updateStatus};