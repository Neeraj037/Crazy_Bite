import {Router} from 'express'
import {placeorder,getAllOrders} from '../controller/order.controller.js'
const router=Router()
router.route("/order").post(placeorder);
router.route("/getorder/:id").get(getAllOrders)
export default router