import {Service, LeftMenu} from './Service.js'
import {hash,data, 
    oneStepService,oneStepLeftMenu,manyStepService,manyStepLeftMenu,
    dataLeftMenu} from './data.js'
export default class Model {
    #items = [];
    #leftNavs=[];

    // data ni id orj iren
    constructor(id){
        if(id == hash.lavlagaa){
            console.log('lavlagaa')
            data.forEach(service=> this.#items.push(new Service(service.name, service.link, service.group)));
            dataLeftMenu.forEach(menu=> this.#leftNavs.push(new LeftMenu(menu)))
        }else if(id == hash.manystepService){
            console.log('many ')

            manyStepService.forEach(service=> this.#items.push(new Service(service.name, service.link, service.group)));
            manyStepLeftMenu.forEach(menu=> this.#leftNavs.push(new LeftMenu(menu)))

        }else if(id == hash.onestepService){
            console.log('one  ')

            oneStepService.forEach(service=> this.#items.push(new Service(service.name, service.link, service.group)));
            oneStepLeftMenu.forEach(menu=> this.#leftNavs.push(new LeftMenu(menu)))

        }else{
            console.log('all');
            let all = [...data, ...manyStepService, ...oneStepService];
            let allLeftNavs = [...oneStepLeftMenu,...manyStepLeftMenu,...dataLeftMenu]
            all.forEach(service=> this.#items.push(new Service(service.name, service.link, service.group)));
            allLeftNavs.forEach(menu=> this.#leftNavs.push(new LeftMenu(menu)))

        }
     
    }
    getleftNavs(){
        return this.#leftNavs;
    }
    getItems(){
        return this.#items;
    }
    print(){
        this.#items.forEach(element => {
            console.log(element);
        });
    }
    search(searchByGroup){
        console.log(searchByGroup);
        return this.#items.filter(service => service.group.toLowerCase().startsWith(searchByGroup.toLowerCase()))
    }
}