const jwt = require('jsonwebtoken')
const sectr = 'Rajveersignvalu$da';
const fetchuser = (req, res, next) => {
    //GET USER FROM JWT TOKEN AND ADD ID
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({
            error: "Please authenticate with using a valid credentials"
        })
    }
    try {
        const data = jwt.verify(token, sectr);
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({
            error: "Please authenticate with using a valid credentials"
        })
    }
}

module.exports = fetchuser;