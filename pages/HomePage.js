export class Homepage{

constructor(page){
this.page=page;
this.productList='//*[@id="tbodyid"]/div/div/div/h4/a'
this.addToCartbtn = 'a:has-text("Add To Cart")'
this.cart='#cartur'
}

async addProductToCart(productName) {
    // Get all product elements as Locators
    const productList = await this.page.locator(this.productList);
  
    // Loop through each product and check for the name
    const count = await productList.count(); // Get the number of products
    for (let i = 0; i < count; i++) {
      const product = productList.nth(i); // Get the nth product
  
      // Wait for the product to be attached and visible
      await product.waitFor({ state: 'attached' });
  
      // Check if the product's text matches the productName
      if (productName === await product.textContent()) {
        // Click the product if it matches
        await product.click();
        break; // Exit the loop once the product is found and clicked
      }
    }
    await this.page.on('dialog', dialog=>dialog.accept());
await this.page.locator(this.addToCartbtn).click();
await this.page.waitForTimeout(1000); 

}

async gotoCart(){
    await this.page.locator(this.cart).click();

}
}
