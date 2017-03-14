var ArticleSchema = new Schema({
    //rest of the properties...
    content: {
        type: String,
        default: '',
        trim: true
    },
    /////
    lat:{
        type: Number,
        default: 0,
        trim: true
    },
    lon:{
        type: Number,
        default: 0,
        trim: true
    },
    ///////
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});