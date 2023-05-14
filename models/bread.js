const mongoose = require('mongoose')

const breadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  hasGluten: {
    type: Boolean
  },
  image: {
    type: String,
    default: 'https://thumbs.dreamstime.com/b/bread-cut-14027607.jpgS'
  },
    baker: {
      type: mongoose.Types.ObjectId,
      ref: 'baker'
    }
})

breadSchema.methods.getBakedBy = function() {
  return `${this.name} was baked with love by ${this.baker.name} who has been with us since ${this.baker.startDate.getFullYear()}.`
}

module.exports = mongoose.model('bread', breadSchema)