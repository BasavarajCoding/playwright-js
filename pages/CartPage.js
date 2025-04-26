export class CartPage {
    constructor(page) {
        this.page = page;
        this.noOfProducts = '//tbody[@id="tbodyid"]/tr/td[2]';
    }

    async checkProductInCart(productName) {
        const productInCart = await this.page.$$(this.noOfProducts);

        for (const product of productInCart) {
            const productText = await product.textContent();

            if (productText.trim() === productName) {
                console.log(`✅ Product "${productName}" found in the cart`);
                return; // Exit if found
            }
        }

        // If we reach here, product was not found
        throw new Error(`❌ Product "${productName}" was NOT found in the cart`);
    }
}
