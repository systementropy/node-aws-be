import Mongoose from 'mongoose';

const PostSchema = Mongoose.Schema({
  title : {
    type: String,
    required: true
  },
  description : {
    type: String,
    required: true
  },
  date : {
    type: Date,
    default: Date.now
  }
})

// PostSchema.methods.add = function(data, callback){
//   console.log(data);
//   return this.save(callback);
// }

export default Mongoose.model('Post', PostSchema)