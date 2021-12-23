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

                return response.json({success: true});
            }
        );

    },

    show(request, response){
        const pool = Database.connection();
        const { user_iduser } = request.body;

        pool.query(
            "SELECT * FROM pet WHERE user_iduser = ?",
            [user_iduser],
            (err,row) => {
                if(err) {
                    console.log(err);
                    return response.json({ success: false });
                }

                if(row.length){
                    return response.json({...row[0],success: true});
                }else {
                    return response.json({ success: false});
                }
            }
        );
        
    },

    delete(request, response){
        const pool = Database.connection();
        const { idpet } = request.body;

        pool.query(
            "DELETE FROM pet WHERE idpet = ?",
            [idpet],
            (err,row) => {
                if(err) {
                    console.log(err);
                    return response.json({ success: false });
                }

                let success = row.affectedRows ? true : false;
                return response.json({success});
            }
        );
    }
}