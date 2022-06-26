import express from 'express';
import mongoose from 'mongoose';

import PostMessage from '../models/postMessage.js';

const router = express.Router();



// Adise - changes    ------------------------------------

// Balance filter
export const balanceFilter = async (req, res) => {
    try {
      const postMess = await PostMessage.find(
        {
          $and: [ {balance: {$gt:req.body.start} }, { balance: {$lt:req.body.end} } ]

        }
      );

        res.status(200).json(postMess);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


// Cities filter
export const cityFilter = async (req, res) => {
    try {
        const postMess = await PostMessage.find(
          {
            $or: [
                {city: req.body.city1 },
                {city: req.body.city2 },
                {city: req.body.city3 },
                {city: req.body.city4 },
                {city: req.body.city5 }
              ]

          }
        );
        res.status(200).json(postMess);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


// Mortgage filter :
export const mortgageFilter = async (req, res) => {
    try {
      const postMess = await PostMessage.find(
        {
          haveMortgage: {$eq: req.body.mortgage}
        }

      );
        res.status(200).json(postMess);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}



// Credits cards filter
export const cardsFilter = async (req, res) => {
    try {
      const postMess = await PostMessage.find(
        {
          numCreditCards: {$eq: req.body.number}
        }

      );
        res.status(200).json(postMess);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


// Filter many things
export const twoFilters = async (req, res) => {
    try {

        const postMess = await PostMessage.find(
          {
            $or: [
              { $and: [ {numCreditCards: req.body.number }, { haveMortgage: req.body.mortgage}   ]},
              { $and: [ {numCreditCards: req.body.number }, {balance: {$gt:req.body.start} }, { balance: {$lt:req.body.end} }   ]},
              { $and: [ {haveMortgage: req.body.mortgage }, {balance: {$gt:req.body.start} }, { balance: {$lt:req.body.end} }   ]},
            ]

          }

        );

        res.status(200).json(postMess);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const threeFilters = async (req, res) => {
    try {
      const postMess = await PostMessage.find(
        {
          $and: [
             { haveMortgage: {$eq: req.body.mortgage} },
             { numCreditCards: {$eq: req.body.number} },
             { balance: {$gt:req.body.start} },
             { balance: {$lt:req.body.end} }
           ]
        }
      );
        res.status(200).json(postMess);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}



export default router;

// export const cityFilter = async (req, res) => {
//     try {
//         const postMess = await PostMessage.find();
//         const filterPost = postMess? (
//           postMess.map(item => {
//             return item.city
//           })
//         ) : []
//         // const find = await PostMessage.findAll({ balance: {$range: ['0','30000']} });
//         res.status(200).json(filterPost);
//     } catch (error) {
//         res.status(404).json({ message: error.message });
//     }
// }
