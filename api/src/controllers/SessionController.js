const Database = require('../configs/Database');

module.exports = {
    show(request, response){
        const pool = Database.connection();

        const {email, password} = request.body;
        console.log(request.body);

        pool.query(
            "SELECT * FROM user WHERE email = ? AND password = SHA1(?)",
            [email, password],
            (err,row) => {
                if(err) {
                    console.log(err);
                    return response.json({ success: false });
                }
                pool.end();

                if(row.length){
                    delete row[0].password;
                    response.json({...row[0], success: true});
                }else {
                    response.json({ success: false });
                }
            }
        );
    }
}