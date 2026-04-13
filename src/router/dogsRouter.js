import express from "express"; 
export const router = express.Router();

import {getAllDogs, getDog, postDog, putDog, patchDog} from '../controllers/dogController.js'

//GET
router.get('/', getAllDogs); //implementar offset depois

//POST
router.post('/', postDog);

router
    .route("/:id")
    .get(getDog)
    .put(putDog)
    .patch(patchDog);

export default router;
