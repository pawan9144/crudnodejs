const express = require("express");
const app = express.Router()
const MensRanking = require("../modals/mens")
const createRecord = require("../controller")

// we will handle Post Req

app.post("/mens",createRecord)

// we will handle get Req

router.get("/mens",async (req,res,next)=>{
try{
const getDetails = await MensRanking.find({})
    res.status(200).json({
        message: "player details",
        getDetails
    })

}catch(e){
res.status(400).send(e)
}
})


// we will handle single get Req indivisual

router.get("/mens/:id",async (req,res,next)=>{
    try{
        const _id = req.params.id
    const getSingleDetail= await MensRanking.findById({_id:_id}).sort({"ranking":1})
        res.status(200).json({
            message: "player single detail",
            getSingleDetail
        })
    
    }catch(e){
    res.status(400).send(e)
    }
    })
    

    // we will handle patch Req indivisual

router.patch("/mens/:id",async (req,res,next)=>{
    try{
        const _id = req.params.id
    const getSingleDetail= await MensRanking.findByIdAndUpdate({_id:_id},req.body,{
        new:true
    })
        res.status(200).json({
            message: "player update",
            getSingleDetail
        })
    
    }catch(e){
    res.status(500).send(e)
    }
    })
    
    // we will handle delete Req indivisual

    router.delete("/mens/:id",async (req,res,next)=>{
        try{
            const _id = req.params.id
        const getSingleDetail= await MensRanking.findByIdAndDelete({_id:_id})
            res.status(200).json({
                message: "player delete",
                getSingleDetail
            })
        
        }catch(e){
        res.status(500).send(e)
        }
        })


        module.exports= app