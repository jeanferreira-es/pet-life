const Database = require('../configs/Database');

module.exports = {
    store(request, response){
       const pool = Database.connection();
       const user = request.body;

       pool.query(
           'INSERT INTO user (name, email, phone, adm, password) VALUES (?,?,?,?,SHA1(?))',
           [user.name, user.email, user.phone, user.adm, user.password],
           (err, row) => {
                if(err) {
                    console.log(err);
                    return response.json({ success: false });
                }
                pool.end();
                
                return response.json({success: true, id: row.insertId});
            }
       );
        
    },
    
    show(request, response){
        const pool = Database.connection();
        const { id } = request.query;

        pool.query(
            "SELECT * FROM user WHERE iduser = ?",
            [id],
            (err,row) => {
                if(err) throw err;
                pool.end();

                delete row[0].password;
                return response.json({...row[0], success: true});
            }
        );

    },

    Update(request, response){
        const pool = Database.connection();
        const user = request.body;

        pool.query(
            "UPDATE user SET name = ?, email = ?, phone = ? WHERE iduser = ?",
            [user.name, user.email, user.phone, user.id],
            (err,row) => {
                if(err) return response.json({ success: false });

                pool.end();

                let success = row.affectedRows ? true : false;
                return response.json({success});
                
            }
        );
    },

    delete(request, response){
        const pool = Database.connection();
        const { id } = request.body;
        
        pool.query(
            "DELETE FROM bonus WHERE user_iduser = ?",
            [id],
            (err,row) => {
                if(err) {
                    console.log(err);
                    return response.json({ success: false, message: "erro ao deletar bonus" });
                }

                pool.query(
                    "DELETE FROM appointment WHERE user_iduser = ?",
                    [id],
                    (err,row) => {
                        if(err) {
                            console.log(err);
                            return response.json({ success: false, message: "erro ao deletar consultas" });
                        }
        
                        pool.query(
                            "DELETE FROM pet WHERE user_iduser = ?",
                            [id],
                            (err,row) => {
                                if(err) {
                                    console.log(err);
                                    return response.json({ success: false, message: "erro ao deletar pets" });
                                }
                                
                                pool.query(
                                    "DELETE FROM user WHERE iduser = ?",
                                    [id],
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
                            }
                        );
                    }
                );

            }
        );

        
    }
}