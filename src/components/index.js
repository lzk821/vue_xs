import ImageView from "./ImageView/index.vue"
import shouSku from "./shopSku/index.vue"

export const componentsPlugin = {
    install(app) {
        app.component('shopImageView',ImageView)
        app.component('shopSku',shouSku)
    }
}