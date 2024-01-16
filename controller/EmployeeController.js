
const { response } = require('express');
const Employee = require('../model/Employee');

const getemployee = (req,res,next)=>{
    Employee.find({})
    .then(data => {
        res.status(200)
        res.json({
            data
        });
    })
    .catch(error => {
        res.status(500)
        res.json({
            message:'Internal Server Error'
        });
    });

}

const getemployeeId = (res,req,next)=>{
   const EmID = req.params.EmID
   Employee.findById(EmID)
   res.send(EmID);
}

const postemployee = (req,res,next)=>{
  const employee = Employee.create({
    name:req.body.name,
    designation:req.body.designation,
    email:req.body.email,
    phone:req.body.phone,

  });

  employee
  .then(response =>{
    res.status(201)
     res.json({
        message:"Employee Added Successfully"
     });
  })
  .catch(error=>{
    res.status(404)
    res.json({
        
       message:'Server not found' 
    })
  })

}

const updateemployee = (req,res,next)=>{
    const id = req.params.id
    const employeeupdate = {
      name:req.body.name,
      designation:req.body.designation,
      email:req.body.email,
      phone:req.body.phone,
  
    };
  
    Employee.findByIdAndUpdate(id,{$set:employeeupdate})
    .then(response =>{
      res.status(200)
       res.json({
          message:"Employee Update Successfully"
       });
    })
    .catch(error=>{
      res.status(404)
      res.json({
         message:'Server not found' 
      })
    })
  
  }

  const deleteemployee = (req,res,next)=>{
    const id = req.params.id
    Employee.findByIdAndDelete(id)
    .then(() =>{
        res.status(200)
        res.json(
            {
                message:"Employee Delete Successfully"
            }
        )
    })
    .catch(error=>{
        res.status(404)
        res.json({
            message:"Server not found"
        })
    })
  }

  module.exports= {
    getemployee,getemployeeId,postemployee,updateemployee,deleteemployee

  }