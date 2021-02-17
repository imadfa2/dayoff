const {verify} = require('jsonwebtoken');

module.exports = {
    checktoken : (req, res , next) => {
        let token = req.get("authorization");
        if (token) {
            token = token.slice(7);
            verify(token, "vX7xQr*45h&J", (err, decoded) =>{
                if (err) {
                    res.json("Invaled token")
                }else{
                    next();
                }
            })
        }else{
            res.json("مافي ولا حمار")
        }
    }
}