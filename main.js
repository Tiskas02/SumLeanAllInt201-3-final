//65130500078 Saksit Tatitrisakul

const product = []

function addNewProduct() {
    const itemInput = document.getElementById('product-input')
    if (!itemInput.value) {
        return false
    }
    product.push(itemInput.value)
    const html = `
        <div id="${itemInput.value}" class="product-item">
        <p>${itemInput.value}</p>
        <button>Remove</button>
        </div>
    `
    const displayTag = document.getElementById("product-list")
    displayTag.insertAdjacentHTML('beforeend',html)
    const remonechild = document.getElementById(`${itemInput.value}`).children[1]
    remonechild.addEventListener('click',removeProduct(`${itemInput.value}`))//clickตรงaddEventไม่ขึ้นครับ
    itemInput.value =''
}

function removeProduct(productId) {
    console.log(productId);
    const deleteIndex = product.findIndex(
        (product) =>
         product ===  productId
      )
      if (deleteIndex < 0 || deleteIndex >= product.length) {
        throw new Error('Invalid index.')
      }
      product.splice(deleteIndex, 1)
      console.log(product);
      const displayTag2 = document.getElementById(`${productId}`)
      console.log(displayTag2);
    //   displayTag2.remove()//อยากลบครับ เเต่ลบไม่ได้เพราะตอนนี้ติดปัญหาตรง บรรทัดที่ 19เเละ20ที่ไม่สามารถทำให้คลิกได้ครับ

}

function removeAllProduct() {
    const displayTag1 = document.getElementById("product-list")
    displayTag1.remove()
    product.splice(o,product.length)
}

function registerEvent() {
    const addBtn = document.getElementById('add-button')
    addBtn.addEventListener('click',addNewProduct)
    const removeAllBtn = document.getElementById('removeAll-button')
    removeAllBtn.addEventListener('click',removeAllProduct)
}
registerEvent();
