const express = require('express');

const routes = express.Router();
const Task   = require('../models/task');

//---- Get Method ------
routes.get('/',async (req,res)=>{

  let tasks = await Task.find({}).sort({_id:-1});
  // res.json({Tasks:tasks,Message:'juhjhhjhjh'});
  // remeber data commng from the api should be match with schema and below json formate
  res.json(tasks);

});

//---- Post Method ------
routes.post('/',(req,res)=>{

  let task = new Task({
    // we want to change just title thats why we just puted title:req.body.title
    title:req.body.title,
  });

  if(task.save()){
  res.json({messgae:'Task addedd successfully'});
  }else{
    res.json({messgae:'Task not addedd'});
  }

});

//---- Put Method (Edite)------
routes.put('/:id',async(req,res)=>{

  console.log(req.params.id,req.body);

  let task = await Task.findByIdAndUpdate(req.params.id,{
    title:req.body.title,
    // isCompleted:req.body.isCompleted,
  });

  if(task){
    res.json({messgae:'Task Updated successfully'});
    }else{
      res.json({messgae:'Task not updated or not found'});
    }
});

//---- Delete Method ------
routes.delete('/:id',async(req,res)=>{
  let task = await Task.findByIdAndDelete(req.params.id);
  if(task){
    res.json({messgae:'Task deleted successfully'});
    }else{
      res.json({messgae:'Task not Deleted or not found'});
    }
});


module.exports = routes;

