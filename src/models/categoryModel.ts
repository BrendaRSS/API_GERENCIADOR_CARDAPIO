import mongoose from 'mongoose';

const { Schema } = mongoose;

const categorySchema = new Schema({
  parent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    require: true,
    default: null,
  },
  name: {
    type: String,
    require: true,
  },
});

const Category = mongoose.model('Category', categorySchema);

export default Category;
