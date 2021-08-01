import express from 'express';
import Post from '../models/Post.js';

const router = express.Router();
router.get('/', async (req, res) => {
   try {
    const posts = await Post.find() //
    res.json(posts)
   } catch (error) {
     res.json({ msg : error })
   }
});

router.get('/:id', async (req, res) => {
  const postId = req.params.id
  try {
   const post = await Post.findById(postId) //
   res.json(post)
  } catch (error) {
    res.json({ msg : error })
  }
});


router.post('/', async (req, res) => {
  console.log(req.body);
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  });
  
  try {
    const savedPost = await post.save();
    res.json(savedPost)  
  } catch (error) {
    res.json({msg:error})
  }
});

router.delete('/:id', async (req, res) => {
  const postId = req.params.id
  try {
   const post = await Post.deleteOne({ _id: postId}) //
   res.json(post)
  } catch (error) {
    res.json({ msg : error })
  }
});


router.patch('/:id', async (req, res) => {
  const postId = req.params.id
  try {
   const post = await Post.updateOne ({ _id: postId}, { $set: {}}) //
   res.json(post)
  } catch (error) {
    res.json({ msg : error })
  }
});


export default router;