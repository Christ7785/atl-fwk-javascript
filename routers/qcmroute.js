const express = require("express");
const router = express.Router();
const { addQcm, addQuestionToQcm } = require("../models/inmemory");

const {
    displayQcms,
    displayFormQcm,
    createNewForm,
    displayQcmJson,
    displayQcmDetailed,
} = require("../controllers/qcms");

// DEFINITION DES ROUTES

router.get("/", displayQcms);


router.get("/json", displayQcmJson);

router.get("/new", displayFormQcm); //handler

router.post("/new", createNewForm);

router.get("/:qcmid", displayQcmDetailed);
//FIN DES ROUTES

module.exports = router;