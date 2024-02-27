const Customer = require('../models/Customer');
const mongoose = require('mongoose');
exports.homepage = async(req, res)=>{
    
    const locals = {
        title: 'NodeJs',
        description:'Free NodesJs User Management System'
    }


    try{
        const customers = await Customer.find({}).limit(22);
        res.render('index', {locals, customers});

    }
    catch (error){
        console.log(error);
    }

   
}


exports.addCustomer = async(req, res)=>{
    const locals = {
        title: 'Add New Customer',
        description:'Add User'
    }
    res.render('customer/add', locals);
}

exports.postCustomer = async(req, res)=>{
    console.log(req.body);
    const newCustomer = new Customer({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        details: req.body.details,
        tel: req.body.tel,
        email: req.body.email,

    });
    try{
        await Customer.create(newCustomer);
        console.log('New Cutomer is Added');
        res.redirect('/');
    }
    catch(error){
        console.log(error);
    }
    
}