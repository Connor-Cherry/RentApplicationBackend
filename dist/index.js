var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
//Middleware
app.use(bodyParser.json());
app.use(cors());
var port = process.env.PORT || 5000;
var posts = require('./routes/api/posts');
app.use('/api/posts', posts);
app.listen(port, function () { return console.log('Server started on port ' + port); });
//# sourceMappingURL=index.js.map