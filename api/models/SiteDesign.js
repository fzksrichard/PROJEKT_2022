const mongoose=require("mongoose");

const SiteDesignSchema=new mongoose.Schema(
    {
        userId: {type: String, required: true},
        title: {type: String, required: true},
        deadline: {type: Date, required: true},
        type: {type: String, required: true},
        color: {type: String, required: true},
        menuitems: {type: Number, required: true},
        menuitemsArray:{type: Array},
        desc:{type: String, required: true},
        target: {type: String, required: true},
        responsive: {type: Boolean, required: true},
        logo: {type: Boolean, required: true},
    }, 
    {timestamps: true}
);

module.exports =mongoose.model("SiteDesign", SiteDesignSchema);