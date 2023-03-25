const router = require("express").Router();
const Cinematic = require("../models/Cinematic");
const verify = require("../verifyToken");

//CREATE
router.post("/", verify, async (req, res) => {
    if (req.user.isAdmin) {
        const newCinematic = new Cinematic(req.body);
        try {
            const savedCinematic = await newCinematic.save();
            res.status(201).json(savedCinematic);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("Sorry! No can do , chief.");
    }
});

//UPDATE
router.put("/:id", verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const updatedCinematic = await Cinematic.findByIdAndUpdate(
                req.params.id,
                {
                    $set: req.body,
                },
                { new: true }
            );
            res.status(200).json(updatedCinematic);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("Sorry! No can do , chief.");
    }
});

//DELETE
router.delete("/:id", verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            await Cinematic.findByIdAndDelete(req.params.id);
            res.status(200).json("The cinematic has been deleted.");
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("Sorry! No can do , chief.");
    }
});

//GET
router.get("/find/:id", verify, async (req, res) => {
    try {
        const cinematic = await Cinematic.findById(req.params.id);
        res.status(200).json(cinematic);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET RANDOM
router.get("/random", verify, async (req, res) => {
    const type = req.query.type;
    let cinematic;
    try {
        if (type === "series") {
            cinematic = await Cinematic.aggregate([
                { $match: { isSeries: true } },
                { $sample: { size: 1 } },
            ]);
        } else {
            cinematic = await Cinematic.aggregate([
                { $match: { isSeries: false } },
                { $sample: { size: 1 } },
            ]);
        }
        res.status(200).json(cinematic);
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET ALL
router.get("/", verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const cinematics = await Cinematic.find();
            res.status(200).json(cinematics.reverse());
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("Sorry! No can do , chief.");
    }
});



module.exports = router;