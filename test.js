const express = require('express')
const app = express()
const path = require('path');
const router = express.Router();

// 
var multer = require('multer');
const { env } = require('process');
// var upload = multer({dest:'uploads/'});
// var upload = multer({ storage: storage });
var folder = env['HOME']+'/Browserstack Downloads';

var imageStorage = multer.diskStorage({
  destination: path.join(folder),
  filename: function (req, file, cb) {
      cb(null , file.originalname);
  }
});

const imageUpload = multer({
  storage: imageStorage
}) 

const port = 3000


router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/public/index.html'));
  console.log(__dirname)
  console.log(path.resolve("./"))
  console.log(env['HOME']);

  //__dirname : It will resolve to your project folder.
});

app.post('/single', imageUpload.single('profile'), (req, res) => {
 folder = 'folderpath';
  try {
    res.send(req.file);
    
  }catch(err) {
    res.send(400);
  }
});


app.use('/', router);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


// app.use('/upload',)