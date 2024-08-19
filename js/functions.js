/* ------------------ Funciones del Menu ----------------------*/

//          1.ICONO DE MOSTRAR MENU
//Variables
const icons = document.querySelectorAll(".header__icon-img");
const iconMenu = icons[0];
const menuPanel = document.querySelector(".menu");
//Funcion
const showMenuHideCart = () => {
    menuPanel.classList.toggle("show");
    cartPanel.classList.remove("show");
}
//Escuchador
iconMenu.addEventListener("click", showMenuHideCart);


//          2.ICONO DE CERRAR MENU(x)
//Variables
const iconClose = document.querySelector(".icon-close__img");
//Funcion
const closeMenu = () => {
    menuPanel.classList.remove("show");
    const categoria = document.querySelector(".categoriesProducts__item");
    const show = categoria.classList.remove("showCategoriesProducts");
}
//Escuchador
iconClose.addEventListener("click", closeMenu);


/* ----------------------- Funciones del carrito -----------------------------*/

//          3.ICONO DE MOSTRAR CARRITO
//Variables
const selectIcon = document.querySelectorAll(".header__icon-img");
const cartIcon = selectIcon[1];
const cartPanel = document.querySelector(".cart");

//Funcion
const showCartHideMenu = () => {
    cartPanel.classList.toggle("show");
    menuPanel.classList.remove("show");
}
//Escuchador
cartIcon.addEventListener("click", showCartHideMenu);

//          4.ICONO DE CERRAR CARRITO(x)
//Variables
const closeCart = document.querySelectorAll(".icon-close__img");
const iconCloseCart = closeCart[8];
console.log(iconCloseCart);

//funcion
const closeCarrito = () => {
    cartPanel.classList.remove("show");
}
//Escuchador
iconCloseCart.addEventListener("click", closeCarrito);

/*----------------------------- Acciones del grid -------------------------------*/

//          5.AGREGAR PRODUCTOS AL GRID

//variables
const botonAddCart = document.querySelectorAll(".addCart");

//Funcion que manda los productos al carrito
const addProductButton = boton => {
    boton.addEventListener("click", () => {
        /*Aqui se crea cada seccion(fragmento) en el carrito 
        por cada producto que se agrega
        */
        const fragment = document.createDocumentFragment();
        for (let i = 0; i < 1; i++) {

            const itemPadreProducts = boton.parentElement;
            //console.log(itemPadreProducts);

            //Agregar elementos
            //foto del producto;
            const coverProduct = itemPadreProducts.firstElementChild;
            //console.log(coverProduct);
            const srcCover = coverProduct.getAttribute("src");

            //titulo del producto;
            const titleProduct = coverProduct.nextElementSibling;
            //console.log(titleProduct);

            //Costo
            const costProduct = titleProduct.nextElementSibling;
            //console.log(costProduct);


            //Se crea el <contenedor>
            let newDiv = document.createElement("div");
            newDiv.classList.add("cart__items");

            //Se crea el <img> del cover produtc
            let cover = document.createElement("img");
            cover.classList.add("cart__items-cover");
            cover.setAttribute("src", srcCover);
            cover.setAttribute("alt", "producto");

            //Se crea el <p> del nombre del producto
            let title = document.createElement("p");
            title.classList.add("cart__items-title");
            title.textContent = titleProduct.innerHTML;

            //Se crea el <p> del costo del producto
            let cost = document.createElement("p");
            cost.classList.add("cart__items-cost");
            cost.textContent = costProduct.innerHTML;

            //Se crea el <i> del icono de remover
            let iconRemove = document.createElement("i");
            iconRemove.classList.add("cart__items-iconRemove");
            //Se crea el <img> del icono de remover
            let imgRemove = document.createElement("img");
            imgRemove.classList.add("cart_delete-icon");
            //Se le da el atributo "src" con su valor
            imgRemove.setAttribute("src", "img/Varios/boton-remover-redondo.png");
            imgRemove.setAttribute("alt", "Icono quitar");
            //Eliminar Productos
            iconRemove.addEventListener("click", () => {
                const itemParent = iconRemove.parentElement;
                itemParent.remove();

                //badge que muestra el decremento del contador
                //se obtiene el padre de los elementos agregados del carrito
                const productsCount = document.querySelector(".cartItems");
                //se obtiene la cantidad de hijos que se van agregando al padre
                const cartItems = productsCount.childNodes.length;
                const counterItems = document.querySelector(".count");
                counterItems.innerHTML = cartItems;
                console.log(cartItems);


            })

            //Se agregan al contenedor 
            fragment.appendChild(newDiv);
            newDiv.appendChild(cover);
            newDiv.appendChild(title);
            newDiv.appendChild(cost);
            newDiv.appendChild(iconRemove);
            iconRemove.appendChild(imgRemove);

            //Activacion del badge
            const counterCart = document.querySelector(".countIcon");
            const showCounterCart = counterCart.classList.add("showCounterCart");
            //se obtiene el padre de los elementos agregados del carrito
            const productsCount = document.querySelector(".cartItems");
            //se obitiene la cantidad de hijos que se van agregando al padre
            const cartItems = productsCount.childNodes.length + 1;
            //Se crea un contador para los productsoq ue se van agregando
            for (let i = 0; i <= cartItems; i++) {
                const counterItmes = document.querySelector(".count");
                counterItmes.innerHTML = cartItems;

            }
        }
        //Se agrega los nuevos fragmentos de productso al portal del carrito
        document.querySelector(".cartItems").appendChild(fragment);

    });
}

//se ejecuta el metodo forEach con la funcion que agrega nuestros productos
botonAddCart.forEach(addProductButton);


/*----------------------------- Contador de Productos en el Carrito -------------------------------*/

//                  6. OBTENER y OCULTAR EL MENU INDIVIDUAL DE CADA CATEGORIA
//----------CATEGORIA CALZADO
const menuParent = document.querySelector(".menu__categories");
const menuParent1 = menuParent.firstElementChild;
const categoriaCalzado = menuParent1.lastElementChild;

const showCategoria = () => {
    const categoria = document.querySelector(".calzado");
    const categoriaCalzado = menuParent1.lastElementChild;
    categoriaCalzado.style.borderBottom = "2px solid black";
    const show = categoria.classList.add("showCategoriesProducts");
}

categoriaCalzado.addEventListener("click", showCategoria);

const closeMenuInd = document.querySelectorAll(".icon-close__img");
let close = closeMenuInd[1];

const hiddeCategoria = () => {
    const categoria = document.querySelector(".calzado");
    const categoriaCalzado = menuParent1.lastElementChild;
    categoriaCalzado.style.borderBottom = "none";
    const hidde = categoria.classList.remove("showCategoriesProducts");
}

close.addEventListener("click", hiddeCategoria);

//----------CATEGORIA MUJER
const menuParent2 = menuParent1.nextElementSibling;
const categoriaMujer = menuParent2.lastElementChild;
console.log(categoriaMujer);

const showCategoriaMujer = () => {
    const categoria = document.querySelector(".mujer");
    const categoriaMujer = menuParent2.lastElementChild;
    categoriaMujer.style.borderBottom = "2px solid black";
    const show = categoria.classList.add("showCategoriesProducts");
}

categoriaMujer.addEventListener("click", showCategoriaMujer);

const hiddeCategoriaMujer = () => {
    const categoria = document.querySelector(".mujer");
    const categoriaMujer = menuParent2.lastElementChild
    categoriaMujer.style.borderBottom = "none";
    const hidde = categoria.classList.remove("showCategoriesProducts");
}

close = closeMenuInd[2];

close.addEventListener("click", hiddeCategoriaMujer);

//----------CATEGORIA HOMBRE
const menuParent3 = menuParent2.nextElementSibling;
const categoriaHombre = menuParent3.lastElementChild;
console.log(categoriaHombre);

const showCategoriaHombre = () => {
    const categoria = document.querySelector(".hombre");
    const categoriaHombre = menuParent3.lastElementChild;
    categoriaHombre.style.borderBottom = "2px solid black";
    const show = categoria.classList.add("showCategoriesProducts");
}

categoriaHombre.addEventListener("click", showCategoriaHombre);

const hiddeCategoriaHombre = () => {
    const categoria = document.querySelector(".hombre");
    const categoriaHombre = menuParent3.lastElementChild
    categoriaHombre.style.borderBottom = "none";
    const hidde = categoria.classList.remove("showCategoriesProducts");
}

close = closeMenuInd[3];

close.addEventListener("click", hiddeCategoriaHombre);

//----------CATEGORIA NiÑOS
const menuParent4 = menuParent3.nextElementSibling;
const categoriaNinos = menuParent4.lastElementChild;
console.log(categoriaNinos);

const showCategoriaNinos = () => {
    const categoria = document.querySelector(".ninos");
    const categoriaNinos = menuParent4.lastElementChild;
    categoriaNinos.style.borderBottom = "2px solid black";
    const show = categoria.classList.add("showCategoriesProducts");
}

categoriaNinos.addEventListener("click", showCategoriaNinos);

const hiddeCategoriaNino = () => {
    const categoria = document.querySelector(".ninos");
    const categoriaNino = menuParent4.lastElementChild
    categoriaNino.style.borderBottom = "none";
    const hidde = categoria.classList.remove("showCategoriesProducts");
}

close = closeMenuInd[4];

close.addEventListener("click", hiddeCategoriaNino);

//----------CATEGORIA DEPORTES
const menuParent5 = menuParent4.nextElementSibling;
const categoriaDeportes = menuParent5.lastElementChild;
console.log(categoriaDeportes);

const showCategoriaDeportes = () => {
    const categoria = document.querySelector(".deportes");
    const categoriaDeportes = menuParent5.lastElementChild;
    categoriaDeportes.style.borderBottom = "2px solid black";
    const show = categoria.classList.add("showCategoriesProducts");
}

categoriaDeportes.addEventListener("click", showCategoriaDeportes);

const hiddeCategoriaDeportes = () => {
    const categoria = document.querySelector(".deportes");
    const categoriaDeportes = menuParent5.lastElementChild
    categoriaDeportes.style.borderBottom = "none";
    const hidde = categoria.classList.remove("showCategoriesProducts");
}

close = closeMenuInd[5];

close.addEventListener("click", hiddeCategoriaDeportes);

//----------CATEGORIA MUNDOADIDAS
const menuParent6 = menuParent5.nextElementSibling;
const categoriaMundoAdidas = menuParent6.lastElementChild;
console.log(categoriaMundoAdidas);

const showCategoriaMundoAdidas = () => {
    const categoria = document.querySelector(".mundoAdidas");
    const categoriaMundoAdidas = menuParent6.lastElementChild;
    categoriaMundoAdidas.style.borderBottom = "2px solid black";
    const show = categoria.classList.add("showCategoriesProducts");
}

categoriaMundoAdidas.addEventListener("click", showCategoriaMundoAdidas);

const hiddeCategoriaMundoAdidas = () => {
    const categoria = document.querySelector(".mundoAdidas");
    const categoriaMundoAdidas = menuParent6.lastElementChild
    categoriaMundoAdidas.style.borderBottom = "none";
    const hidde = categoria.classList.remove("showCategoriesProducts");
}

close = closeMenuInd[6];

close.addEventListener("click", hiddeCategoriaMundoAdidas);

//----------CATEGORIA OUTLET
const menuParent7 = menuParent6.nextElementSibling;
const categoriaOutlet = menuParent7.lastElementChild;


const showCategoriaOutlet = () => {
    const categoria = document.querySelector(".outlet");
    const categoriaOutlet = menuParent7.lastElementChild;
    categoriaOutlet.style.borderBottom = "2px solid black";
    const show = categoria.classList.add("showCategoriesProducts");
}

categoriaOutlet.addEventListener("click", showCategoriaOutlet);

const hiddeCategoriaOutlet = () => {
    const categoria = document.querySelector(".outlet");
    const categoriaOutlet = menuParent7.lastElementChild
    categoriaOutlet.style.borderBottom = "none";
    const hidde = categoria.classList.remove("showCategoriesProducts");
}

close = closeMenuInd[7];

close.addEventListener("click", hiddeCategoriaOutlet);