const createRecord = async(req,res,next)=>{
    try{
const dataFound  = await MensRanking.findOne({ranking: req.body.ranking});
if(dataFound){
    return res.json({
        message: "Raniking already used"
    })
}
        const addingMensRecords = new MensRanking(req.body);

const data = await addingMensRecords.save();
res.status(201).json({
    message: "player details saved",
    data
})
    }catch(e){
res.status(400).send(e);
    }
}

module.exports = createRecord