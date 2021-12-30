const Database = require('../configs/Database');

module.exports = {
    store(request, response){
        const pool = Database.connection();
        const pet = request.body;

        pool.query(
            "INSERT INTO pet (name, specie, gender, user_iduser) VALUES (?,?,?,?)",
            [pet.name, pet.specie, pet.gender, pet.user_iduser],
            (err,row) => {
                if(err) {
                    console.log(err);
                    return response.json({ success: false });
                }
                pool.end();

                return response.json({success: true});
            }
        );

    },

    show(request, response){
        const pool = Database.connection();
        const { user_iduser } = request.query;

        pool.query(
            "SELECT * FROM pet WHERE user_iduser = ?",
            [user_iduser],
            (err,rows) => {
                if(err) {
                    console.log(err);
                    return response.json({ success: false });
                }
                
                if(rows.length){
                    pool.end();

                    return response.json(rows);
                }else {
                    return response.json({ success: false, total: 0 });
                }
            }
        );
        
    },

    count(request, response){
        const pool = Database.connection();
        const { userId } = request.params;

        console.log(request.params);

        pool.query(
            "SELECT COUNT(*) AS total FROM pet WHERE user_iduser = ?",
            [userId],
            (err,row) => {
                if(err) {
                    console.log(err);
                    return response.json({ success: false, total: 0 });
                }
                pool.end();

                const { total } = row[0];   
                return response.json({total: total});
            }
        );

    },

    delete(request, response){
        const pool = Database.connection();
        const { idpet } = request.query;

        pool.query("DELETE FROM appointment WHERE pet_idpet = ?", [idpet], (err, rows) => {
            if(err) {
                console.log(err);
                return response.json({ success: false });
            }

            pool.query(
                "DELETE FROM pet WHERE idpet = ?",
                [idpet],
                (err,row) => {
                    if(err) {
                        console.log(err);
                        return response.json({ success: false });
                    }
                    pool.end();
    
                    let success = row.affectedRows ? true : false;
                    return response.json({success});
                }
            );
        })

    }
}