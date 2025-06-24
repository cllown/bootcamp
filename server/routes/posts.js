import express from 'express'
const router = express.Router();

let posts = [
   {id: 1, title: 'Post One'},
   {id: 2, title: 'Post Two'},
   {id: 3, title: 'Post Three'},
];

router.get('/', (req, res) => {
   return res.status(200).json(posts);
})

export default router;