const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    image: {
        type: String,
        default: "https://unsplash.com/photos/a-sandy-beach-next-to-a-rocky-cliff-gkx3kzTSHaE",
        set: (v) => v === "" ? "https://unsplash.com/photos/a-sandy-beach-next-to-a-rocky-cliff-gkx3kzTSHaE" : v,
    },
    price: Number,
    location: String,
    country: String
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;