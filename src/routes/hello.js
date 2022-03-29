const router = require('express').Router();
router.route('/').get((req,res)=>{
    msg = `Hello ${req.query.name || "world"} from get request`;
    res.json({msg})
});

router.route('/:lang').get((req,res)=>{
   switch (req.params.lang) {
       case "es":
           msg="Hola Mundo"
           break;
        case "en":
            msg="Hello World"
            break;
        case "fr":
            msg="Bonjour Monde"
            break;
       default:
            msg="Hello is working";
           break;
   }
   res.json({msg});
});

router.route('/').post((req,res)=>{
msg=`Hello ${req.body.name || "world"} from post request` ;
res.json({msg});
})

module.exports=router;