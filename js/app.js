//Creación de arrays Teclados

const allteclado = [teclado1,teclado2,teclado3,teclado4,teclado5,teclado6,teclado7, teclado9, teclado10, teclado11, teclado12, teclado13, teclado14,teclado15, teclado16, teclado18, teclado19, teclado20, teclado21]
let array_buy_teclado = []


// MIXINS SWEETALERT2

const toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})
//MENU LATERAL

//Capturar radius de Menu Lateral
const rbMarca = document.querySelectorAll('input[name="fav_marca"]')
const rbModelo = document.querySelectorAll('input[name="fav_modelo"]')
const rbIdioma = document.querySelectorAll('input[name="fav_idioma"]')

// Funciones
//----------

const searchMenu = () => {
    const searchResult = allteclado.filter((mc) => mc.marca.includes(rbMarcaSelect) && mc.modelo.includes(rbModeloSelect) && mc.idioma.includes(rbIdiomaSelect))
    listarLista(searchResult)  
    
    }

function capturarValorRadius()
{
    rbMarca.forEach((rbM) =>
    {
        if (rbM.checked) {
            rbMarcaSelect = rbM.value
        }
    }
    
    )

    rbModelo.forEach((rbMo) =>
    {
        if (rbMo.checked) {
            rbModeloSelect = rbMo.value
        }
    }
    
    )

    rbIdioma.forEach((rbI) =>
    {
        if (rbI.checked) {
            rbIdiomaSelect = rbI.value
        }
    }
    
    )

   searchMenu()
   btnagregar()
   
}

//Seleccionar boton Añadir



// Seleccionar boton Buscar 
const btn = document.querySelector('.button-4')
btn.addEventListener('click',capturarValorRadius)


//Seleccionar DIV para insertar HTML
const divArticle = document.querySelector('.mn_buy_article')

const listarLista = (array) => {
    divArticle.innerHTML = ''
    array.forEach((pd) => {
        const addDiv = document.createElement('div')
        addDiv.className = ('mn_by_art-box')
        addDiv.innerHTML = `
        <div class="img-box">
        <img src="${pd.img}" alt="">
      </div>
      <div class="tx-box">
        <p class="txt-p">MARCA: <span class="price-span">${pd.marca} </span></p>
        <p class="txt-p">MODELO: <span class="price-span">${pd.modelo}</span></p>
        <p class="txt-p">COMPATIBLE: <span class="price-span">${pd.compatible}</span></p>
        <p class="txt-p">IDIOMA: <span class="price-span">${pd.idioma}</span></p>
        <p class="txt-p">PRECIO: $ <span class="price-span">${pd.precio}</span></p>   
      </div>
      <div class="btn-box">
        <button data-id=${pd.id} class="button-37" role="button">Añadir al carro</button>
      </div>
        ` 
        divArticle.append(addDiv)
    }
    )
}


//******************************************************** */

function btnagregar() {

const btnAdd = document.querySelectorAll('.button-37')

   
const addBuy = (e) => 
{

        const cptBtnTarget = e.target.closest('.button-37').getAttribute('data-id')
        console.log(cptBtnTarget)
        const showCard = allteclado.find( cardA => cardA.id == cptBtnTarget)
        array_buy_teclado.push(showCard)
        fctBuy()
        console.log(array_buy_teclado)
        localStorage.setItem('carStorage',JSON.stringify(array_buy_teclado))
        
    
}


btnAdd.forEach((btn) =>
{
    btn.addEventListener('click',addBuy)
    

}

)

const divContainer = document.querySelector('.main')

console.log(divContainer)

const fctBuy = () =>
{
    divContainer.innerHTML= ''

    array_buy_teclado.forEach((buy) =>

    {
        const divBuy = document.createElement('div')
        divBuy.className = ('container')
        divBuy.innerHTML =`
        <div class="imgbox">
        <img src="${buy.img}" alt="">
        </div>

        <div class="txbox">
            <p class="txt-p"><span class="price-span">${buy.marca} </span></p>
            <p class="txt-p"><span class="price-span">${buy.modelo} </span></p>
            <p class="txt-p"><span class="price-span">${buy.compatible}</span></p>
            <p class="txt-p"><span class="price-span">${buy.idioma}</span></p>
            <p class="txt-p"><span class="price-span">${buy.precio}</span></p> 
        </div>
        <div class="btn-box">
            <button data-id=${buy.id} class="button-69" role="button">Quitar Producto</button>
        </div>
        ` 
        divContainer.append(divBuy)
    })

    document.querySelectorAll('.button-69').forEach((rid) => {
        rid.addEventListener('click', eliminarItem)
    })

}


if (localStorage.getItem('carStorage')) //Si existe sale TRUE
{
    //Si existe, entonces va agregar la información al array de compras
    array_buy_teclado = JSON.parse(localStorage.getItem('carStorage'))
    //Luego va monstrar lo que se tiene en array de compras
    fctBuy()
}

const eliminarItem = (e) => {
    const idSelected = e.target.closest('.button-69').getAttribute('data-id')
    array_buy_teclado = array_buy_teclado.filter((tid) => tid.id != idSelected)
    fctBuy()
}

}





const btnCarrito = document.querySelector('#btncarId')

console.log(btnCarrito)

function ocultar() {
    const divmn_buy = document.querySelector('.mn_buy')
    divmn_buy.style.display = 'none'

    const divmainmain = document.querySelector('.main-main')
    divmainmain.style.display = 'inline'

}

btnCarrito.addEventListener('click',ocultar)

const btnVolver = document.querySelector('.button-96')

function mostrar()
{
    const divmn_buy = document.querySelector('.mn_buy')
    divmn_buy.style.display = 'grid'

    const divmainmain = document.querySelector('.main-main')
    divmainmain.style.display = 'none'
}

btnVolver.addEventListener('click',mostrar)





