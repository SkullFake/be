const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true,
  },
  restaurant: {
    type: Boolean,
    required: true
  },
  bar: {
    type : Boolean,
    required: true
  },
  pab: {
    type : Boolean,
    required: true
  },
  cafe: {
    type : Boolean,
    required: true
  },
  pizzeria: {
    type : Boolean,
    required: true
  },
  banquet: {
    type : Boolean,
    required: true
  },
  childCafe: {
    type : Boolean,
    required: true
  },
  fastFood: {
    type : Boolean,
    required: true
  },
  nightclub: {
    type : Boolean,
    required: true
  },
  karaoke: {
    type : Boolean,
    required: true
  },
  sushi: {
    type : Boolean,
    required: true
  },
  liveMusic: {
    type : Boolean,
    required: true
  },
  terrace: {
    type : Boolean,
    required: true
  },
  childrenRoom: {
    type : Boolean,
    required: true
  },
  liveSportEvent: {
    type : Boolean,
    required: true
  },
  creditCard: {
    type : Boolean,
    required: true
  },
  takeOut: {
    type : Boolean,
    required: true
  },
  delivery: {
    type : Boolean,
    required: true
  },
  roundClock: {
    type : Boolean,
    required: true
  },
});

module.export = mongoose.model("Restaurant", RestaurantSchema);