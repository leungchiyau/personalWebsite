import express from "express";
import {knex} from "knex";
// import { client } from './db'

export let contactRouter = express.Router();

contactRouter.post('contact/message',(req,res)=>{
    let message = req.body.message;
    let fullName = req.body.fullName;
    let email = req.body.email;
    let subject = req.body.subject;
    // knex.insert({message}).into('')

})