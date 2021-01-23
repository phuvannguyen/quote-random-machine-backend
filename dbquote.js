import mongoose from "mongoose";

const quoteSchema  = mongoose.Schema({
    quote: String,
    author: String
});

export default mongoose.model("contents", quoteSchema)