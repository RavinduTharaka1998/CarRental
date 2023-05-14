const express = require('express');
const rentalRoutes = express.Router();


let Vehicles = require('./vehicle.model');

rentalRoutes.route('/adminaddvehicle').post(function (req,res){
    console.log("Vehicle add function called...");
    let vehicles = new Vehicles(req.body);
    vehicles.save()
        .then(vehicles => {
            res.status(200).json({'vehicle' : 'vehicle is added successfull'});
        })
        .catch(err => {
            res.status(400).send("Unable to save database")
        });
});

rentalRoutes.route('/admiviewvehicle').get(function (req, res){
    console.log("Vehicle view function called...");
   
    Vehicles.find(function (err,veh){
        if(err)
            console.log(err);
        else{
            res.json(veh)
        }
    });

});

rentalRoutes.route('/admineditvehicle/:id').get(function (req,res){
    console.log("Vehicle edit function called...");
    let id = req.params.id;
    Vehicles.findById(id, function (err,vehicles){
        res.json(vehicles);
    });
});

rentalRoutes.route('/adminupdatevehicle/:id').post(function (req,res){
    console.log("Vehicle update function called...");
    let id = req.params.id;
    Vehicles.findById(id, function (err, vehicles){
        if(!vehicles)
            res.status(404).send("Data is not found??");
        else{
            vehicles.id = req.body.id;
            vehicles.type = req.body.type;
            vehicles.manufacturer = req.body.manufacturer;
            vehicles.year = req.body.year;
            vehicles.passengers = req.body.passengers;
            vehicles.price = req.body.price;


            vehicles.save().then(vehicles => {
                res.json('Update Complete');
            })
                .catch(err =>{
                    res.status(400).send("Unable to update data");
                });
        }
    });
});

rentalRoutes.route('/admindeletevehicle/:id').get(function(req,res){
    console.log("Vehicle delete function called...");
    Vehicles.findByIdAndRemove({_id:req.params.id}, function (err, vehicles){
        if(err)res.json(err);

        else res.json('Successfully Removed');
    });
});

rentalRoutes.route('/admisearchvehicle/:id').get(function (req, res){
    console.log("Vehicle search function called...");
    let search = req.params.id;
    Vehicles.find({$or:[{id: search}, {type: search},{manufacturer: search},{year: search},{passengers: search},{status: search},{price: search}]},function (err,vehi){ 
   
        if(err)
            console.log(err);
        else{
            res.json(vehi)
        }
    });
});

module.exports = rentalRoutes;