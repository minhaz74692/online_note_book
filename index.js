var express = require('express');
const connectToMongo = require("./db");
var cors = require('cors')
connectToMongo();
const app = express()
const port = 5000

app.use(cors())

app.use(express.json())
//Available routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));



// step 3: Heroku 



if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
  };

  app.listen(process.env.PORT || port, () => {
    console.log(`iNoteBook Backend listening on port ${port}`)
  });