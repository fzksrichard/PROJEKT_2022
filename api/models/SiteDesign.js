const mongoose=require("mongoose");

const SiteDesignSchema=new mongoose.Schema(
    {
        title: {type: String, required: true},
        deadline: {type: Date, required: true},
        type: {type: String, required: true},
        color: {type: String, required: true},
        menuitems: {type: Number, required: true},
        desc:{type: String, required: true},
        target: {type: String, required: true},
    }, 
    {timestamps: true}
);

module.exports =mongoose.model("SiteDesign", SiteDesignSchema);