const mongoose =require('mongoose');


const careerSchema = new mongoose.Schema ({
    title: {
        type: String,
        required: true
    },
   descritpion: {
       type: String
   },
   markdown: {
       type: String,
       required: true
   },
   ceatedAt: {
       type: Date,
       default: Date.now
   }
});

module.exports - mongoose.model ('Career', careerSchema);