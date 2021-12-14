module.exports = {
    multipleMongooseToObject: function(mongooses){
        return mongooses.map(mongooses => mongooses.toObject());
    },
    mongooseToObjet: function(mongose){
        return mongose ? mongose.toObject(): mongose;
    }
}