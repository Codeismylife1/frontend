import Model from './model.js'
import data from './data.js'
const state = {};

state.services = new Model(data);

state.services.print();
console.log(
    state.services.search("Улсын бүртгэлийн ерөнхий газар"));
