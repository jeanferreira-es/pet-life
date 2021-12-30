const Database = require('../configs/Database');

module.exports = {
    store(request, response){
        const pool = Database.connection();
        const appointment = request.body;

        pool.query(
            "INSERT INTO appointment (status, description, date, hour, user_iduser, pet_idpet) VALUES (?,?,?,?,?,?)",
            [appointment.status, appointment.description, appointment.date, appointment.hour, appointment.user_iduser, appointment.pet_idpet],
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
        const { page=1 } = request.query;
        const interval = 9;

        pool.query(
            "SELECT * FROM appointment ORDER BY status ASC LIMIT ? OFFSET ?",
            [interval, (page-1)*interval],
            (err,rows) => {
                if(err) {
                    console.log(err);
                    return response.json({ success: false });
                }
                pool.end();

                if(rows.length){
                    return response.json(rows);
                } else {
                    return response.json({success: false});
                }
            }
        );
    },

    index(request, response){
        const pool = Database.connection();
        const { userId } = request.params;
        const { page=1 } = request.query;
        const interval = 9;

        pool.query(
            "SELECT * FROM appointment "+
            "INNER JOIN pet ON pet.idpet = appointment.pet_idpet "+
            "WHERE appointment.user_iduser = ?  ORDER BY status ASC", //ASC LIMIT ? OFFSET ?
            [userId],//, interval, (page-1)*interval
            (err,rows) => {
                if(err) {
                    console.log(err);
                    return response.json({ success: false });
                }
                
                if(rows.length){
                    pool.end();
                    return response.json(rows);
                } else {
                    return response.json({...rows, success: false, total: 0});
                }

            }
        );
    },

    count(request, response){
        const pool = Database.connection();
        const { userId } = request.params;

        pool.query(
            "SELECT COUNT(*) AS total FROM appointment WHERE user_iduser = ?",
            [userId],
            (err,row) => {
                if(err) {
                    console.log(err);
                    return response.json({ success: false, total: 0 });
                }
                pool.end();

                const { total } = row[0];

                return response.json({ total: total });
            }
        );
    },

    edit(request, response){
        const pool = Database.connection();
        const { status, idappointment } = request.body;

        pool.query(
            "UPDATE appointment SET status = ? WHERE idappointment = ?",
            [status, idappointment],
            (err,row) => {
                if(err) {
                    console.log(err);
                    return response.json({ success: false });
                }
                pool.end();

                if(row.affectedRows){
                    return response.json({ success: true});
                } else{
                    return response.json({ success: false });
                }
            }
        );
    }
}