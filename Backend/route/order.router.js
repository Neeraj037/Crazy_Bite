import {Router} from 'express'
import {placeorder,getorder} from '../controller/order.controller.js'
const router=Router()
router.route("/order").post(placeorder);
router.route("/getorder").post(getorder)
export default router