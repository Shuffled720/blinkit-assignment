import { Schema, model, models } from "mongoose"
const ImageSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
})
const Image = models.Image || model("Image", ImageSchema)
// const Image = mongoose.model("Image", ImageSchema)

export default Image
