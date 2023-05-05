import Model from './model.js'
import {} from './data.js'



const state = {};
const elements={};


//render 
/*

const html = `
    <li class="shopping__item" data-itemid=${item.id}>
        <p class="shopping__description">${item.item}</p>
        <button class="shopping__delete btn-tiny">
            <svg>
                <use href="img/icons.svg#icon-circle-with-cross"></use>
            </svg>
        </button>
    </li>
    `;
 elements.shoppingList.insertAdjacentHTML("beforeend", html);
z*/


// zuun taliin link listuudiig gargah
// select
// click event

// elements.shoppingList.addEventListener("click", e => {
//     // Клик хийсэн li элементийн data-itemid аттрибутыг шүүж гаргаж авах
//     const id = e.target.closest(".shopping__item").dataset.itemid;
  
//     // Олдсон ID-тэй орцыг моделоос устгана.
//     state.list.deleteItem(id);
        // state.service.search(id);
  
//     // Дэлгэцээс ийм ID-тэй орцыг олж бас устгана.
//     listView.deleteItem(id);
//   });


// state.services = new Model(data);
// console.log(data);

// // state.services.print();
// console.log(
//     state.services.search("Улсын бүртгэлийн ерөнхий газар"));

/**
 * Үйлчилгээ контролллер
 */
const controlService = ()=>{
    const id = window.location.hash.replace("#", "");

    if(id){
        // 2) Үйлчилгээний моделийг үүсгэж өгнө.
 
        state.data = new Model(id);
        
          // 3) UI дэлгэцийг бэлтгэнэ.
        clearServiceList();
        clearLeftMenuList();

        renderLeftMenu(state.data.leftMenus);
        renderServices(state.data.items);
    }else{
        // navigate undsen esvel #бүх-үйлчилгээ
        // window.location.replace()
    }
    
}


const clearServiceList=()=>{
    // select and innterHtml null
   
    // const elements.recipeDiv.innerHTML = "";
}
const clearLeftMenuList=()=>{

}
const renderServices=(services)=>{
    // services massive

    const html = ``;
    elements.insertAdjacentHTML('afterbegin',html);

}
const renderLeftMenu=(leftMenus)=>{
    const html = ``;
    elements.insertAdjacentHTML('afterbegin',html);
}




["load","hashchange"].forEach(event=>window.addEventListener(event,controlService))