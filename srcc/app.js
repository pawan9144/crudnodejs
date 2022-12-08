const express = require("express");
const app = express();
const router = require("../srcc/routers/detail");
const { userRouter } = require("./routers");
require("../srcc/db/conn");

const port = process.env.PORT || 5000;

app.use(express.json());
app.get("/", (req, res) => {
  res.send(`
      <h1 style="color:blue;text-align:center;">This is a heading</h1>`);
});
// app.use("/api", router);
app.use("/", router);
app.use("/user", userRouter);

// // we will handle Post Req

// app.post("/mens",async(req,res,next)=>{
//     try{
// const dataFound  = await MensRanking.findOne({ranking: req.body.ranking});
// if(dataFound){
//     return res.json({
//         message: "Raniking already used"
//     })
// }
//         const addingMensRecords = new MensRanking(req.body);

// const data = await addingMensRecords.save();
// res.status(201).json({
//     message: "player details saved",
//     data
// })
//     }catch(e){
// res.status(400).send(e);
//     }
// })

// // we will handle get Req

// app.get("/mens",async (req,res,next)=>{
// try{
// const getDetails = await MensRanking.find({})
//     res.status(200).json({
//         message: "player details",
//         getDetails
//     })

// }catch(e){
// res.status(400).send(e)
// }
// })

// // we will handle single get Req indivisual

// app.get("/mens/:id",async (req,res,next)=>{
//     try{
//         const _id = req.params.id
//     const getSingleDetail= await MensRanking.findById({_id:_id}).sort({"ranking":1})
//         res.status(200).json({
//             message: "player single detail",
//             getSingleDetail
//         })

//     }catch(e){
//     res.status(400).send(e)
//     }
//     })

//     // we will handle patch Req indivisual

// app.patch("/mens/:id",async (req,res,next)=>{
//     try{
//         const _id = req.params.id
//     const getSingleDetail= await MensRanking.findByIdAndUpdate({_id:_id},req.body,{
//         new:true
//     })
//         res.status(200).json({
//             message: "player update",
//             getSingleDetail
//         })

//     }catch(e){
//     res.status(500).send(e)
//     }
//     })

//     // we will handle delete Req indivisual

//     app.delete("/mens/:id",async (req,res,next)=>{
//         try{
//             const _id = req.params.id
//         const getSingleDetail= await MensRanking.findByIdAndDelete({_id:_id})
//             res.status(200).json({
//                 message: "player delete",
//                 getSingleDetail
//             })

//         }catch(e){
//         res.status(500).send(e)
//         }
//         })

app.listen(port, () => {
  console.log(`server connection with port no. ${port}`);
});
