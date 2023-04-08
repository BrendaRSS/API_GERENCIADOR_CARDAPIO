import mongoose from 'mongoose';

const { Schema } = mongoose;

const productSchema = new Schema(
  {
    categories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        require: true,
      },
    ],
    name: {
      type: String,
      require: true,
    },
    qty: {
      type: Number,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);

export default Product;
