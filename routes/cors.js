const cors = require('cors');

const whitelist = ['http://localhost:3000', 'https://localhost:3443'];
const corsOptionsDelegate = (req, callback) => {
    let corsOptions;
    console.log(req.header('Origin'));
    if(whitelist.indexOf(req.header('Origin')) !== -1) {   // "indexof" returns "-1" if not found
        corsOptions = { origin: true };   //origin: true means allowed request to be accepted
    } else {
        corsOptions = { origin: false };  //not accepted because indexof returned a "-1"
    }
    callback(null, corsOptions);
};

exports.cors = cors();
exports.corsWithOptions = cors(corsOptionsDelegate);