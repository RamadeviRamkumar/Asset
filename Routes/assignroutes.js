const router = require('express').Router();

const AssignedAsset = require('../model/assign model.js');

router.post("/assignassets", async (req, res) => {
    var assignedAsset = new AssignedAsset();
    assignedAsset.AssetsName = req.body.AssetsName;
    assignedAsset.AssetsId = req.body.AssetsId;
    assignedAsset.Category = req.body.Category;
    assignedAsset.SubCategory = req.body.SubCategory;
    assignedAsset.Model = req.body.Model;
    assignedAsset.PurchaseDate = req.body.PurchaseDate;
    assignedAsset.AssetsLocation = req.body.AssetsLocation;

    try {
        await assignedAsset.save();
        res.status(201).json({
            message: 'New Assign details Successfully',
            data: assignedAsset,
        });
    } catch (err) {
        res.status(400).json({
            message: 'Error adding assign asset',
            error: err.message,
        });
    }
});

var assigncontroller = require("../controller/assigncontroller.js");
router.route("/assign/getall").get(assigncontroller.index);

router
  .route("/assign/:user_id")
  .get(assigncontroller.view)
  .patch(assigncontroller.update)
  .put(assigncontroller.update)
  .delete(assigncontroller.Delete);

module.exports = router;