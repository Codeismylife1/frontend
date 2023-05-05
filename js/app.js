import Model from './model.js'
import {} from './data.js'



const state = {};
const elements={
    serviceList : document.querySelector('.serviceList'),
    leftNavList : document.querySelector('.leftNavList'),
    header : document.querySelectorAll('.this-is-heade')
};


//render 
/*


/**
 * Үйлчилгээ контролллер
 */
const controlService = ()=>{
    const id = window.location.hash.replace("#", "");
    console.log(id);
    if(id){
        // 2) Үйлчилгээний моделийг үүсгэж өгнө.
 
        state.data = new Model(id);
        console.log(state.data.getleftNavs());
        
          // 3) UI дэлгэцийг бэлтгэнэ.
        clearServiceList();
        clearLeftMenuList();

        renderLeftMenus(state.data.getleftNavs());
        // connect click event
        connectClickEvent();
      
          
        renderServices(state.data.getItems());
    }else{
        // navigate undsen esvel #бүх-үйлчилгээ
        // window.location.replace()
    }
    
}


const clearServiceList=()=>{
    // select and innterHtml null
    elements.serviceList.innerHTML = '';
   
    // const elements.recipeDiv.innerHTML = "";
}
const clearLeftMenuList=()=>{
    elements.leftNavList.innerHTML = "";
}
const renderServices=(services)=>{
    const html = `${services.map(service=>renderOneService(service)).join("")}`
    // // services massive

    elements.serviceList.insertAdjacentHTML('beforeend',html);
}
const renderOneService = (service)=>` <div class="list-item-container">

<div class="item-content">
<a href="${service.link ? service.link : "https://e-mongolia.mn/services/citizen/sector/all"}" target="_blank" >
  <div>
    <div class="item-title">${service.name}</div>

    <span class="item-description">
      <span class="ant-badge-status-dot"></span>
      <span class="">Онлайн үйлчилгээ</span></span
    >
  </div>
  </a>
</div>

</div>`;
const renderLeftMenus=(leftMenus)=>{
    const html = `${leftMenus.map(menu=> renderOneMenu(menu)).join("")}`;
    elements.leftNavList.insertAdjacentHTML('beforeend', html);
}

const renderOneMenu = menu=> `<li class="list-group-item leftNavMenu list-group-item-action" data-catname=${menu.name}>${menu.name}</li>`;

["load","hashchange"].forEach(event=>window.addEventListener(event,controlService))


const connectClickEvent = ()=>{
    Array.from(document.querySelectorAll('.leftNavMenu')).forEach(
        el=> el.addEventListener('click', e => {
            // Клик хийсэн li элементийн data-catname аттрибутыг шүүж гаргаж авах
            const id =  e.target.closest(".leftNavMenu").dataset.catname;
            // Олдсон категорид хамаарах үйлчилгээг шүүж гаргах.
            clearServiceList();
            elements.serviceList.insertAdjacentHTML('afterbegin',`<p class='font-weight-bold text-uppercase mt-4 mb-4'>${e.target.innerText}</p>`)

            state.data.items =  state.data.search(id);
            console.log(state.data.items);
            renderServices(state.data.items)
            // uilchilgeeg dahin render hiine 
            
          })
    )
};
