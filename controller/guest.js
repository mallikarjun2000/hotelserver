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
    const serv = new servCust(req.body);
    serv.save()
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
}

const seeUsingServices = (req, res) => {
    servCust.find({custid: req.body.custid})
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
}

const usingServiceStatus = (req, res) => {
    servCust.findOne({_id: req.body._id})
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
}

const checkout = (req, res) => {
    servCust.find({custid: req.body.custid})
    .then((result) => {
        let sum = 0;
        result.forEach((item) => {
            sum += item.cost;
        });
        console.log(sum);
        res.send(`the bill is ${sum}`);
    })
    .catch((err) => console.log(err));
}

const updateStatus = (req, res) => {
    servCust.findByIdAndUpdate(req.body._id, {status: req.body.status}, { returnNewDocument: true })
    .then((result) => res.send(result))
    .catch((err) => console.log(err));
}

export {seeServices, buyService, seeUsingServices, usingServiceStatus, checkout, updateStatus};