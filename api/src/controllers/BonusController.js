const Database = require('../configs/Database');

module.exports = {
    store(request, response){
        const pool = Database.connection();
        const bonus = request.body;

        pool.query(
            "INSERT INTO bonus (value, appointment_idappointment, user_iduser) VALUES (?,?,?)",
            [10, bonus.appointment_idappointment, bonus.user_iduser],
            (err,row) => {
                if(err) {
                    console.log(err);
                    return response.json({ success: false });
                }
                pool.end();

                return response.json({ success: true});
            }
        );

    },

    show(request, response){
        const pool = Database.connection();
        const { user_iduser } = request.query;

        pool.query(
            "SELECT SUM(value) AS total FROM bonus WHERE user_iduser = ?",
            [user_iduser],
            (err,row) => {
                if(err) {
                    console.log(err);
                    return response.json({ success: false });
                }
                pool.end;

                row[0].total = row[0].total == null ? 0 : row[0].total;
                return response.json({...row[0], success: true});
            }
        );
        
    }
}