import Service from './Service.js'
export default class Model {
    items = [];

    constructor(data){
        data.forEach(service=> this.items.push(new Service(service.name, service.link, service.group)));
        // data.map(service=> this.items.push(new Service(...service)));
    }
    print(){
        this.items.forEach(element => {
            console.log(element);
        });
    }
    search(searchByGroup){
        return this.items.filter(service => service.group.toLowerCase() == searchByGroup.toLowerCase())
    }
}