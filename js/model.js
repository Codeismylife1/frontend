import {Service, LeftMenu} from './Service.js'
import {hash,data, manyStepService, 
    oneStepService,oneStepLeftMenu,manyStepService,
    dataLeftMenu} from './data.js'
export default class Model {
    items = [];
    leftNavs=[];

    // data ni id orj iren
    constructor(id){
        if(id == hash.lavlagaa){
            data.forEach(service=> this.items.push(new Service(service.name, service.link, service.group)));
            this.leftNavs= dataLeftMenu;
        }else if(id == hash.manystepService){
            manyStepService.forEach(service=> this.items.push(new Service(service.name, service.link, service.group)));
            this.leftNavs= manyStepService;
        }else if(id == hash.onestepService){
            oneStepService.forEach(service=> this.items.push(new Service(service.name, service.link, service.group)));
            this.leftNavs= oneStepLeftMenu;
        }else{
            let all = [...data, ...manyStepService, ...oneStepService];
            let allLeftNavs = [...oneStepLeftMenu,...manyStepService,...dataLeftMenu]
            all.forEach(service=> items.push(new Service(service.name, service.link, service.group)));
            this.leftNavs = allLeftNavs;
        }
     
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