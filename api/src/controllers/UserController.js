const Database = require('../configs/Database');

module.exports = {
    store(request, response){
       const pool = Database.connection();

       const data = request.body;

       pool.query('INSERT INTO user (name, email, phone, adm, password) VALUES (?,?,?,?,?)',["Jean Ferreira","jeanferreira.es@gmail.com",'92991180933',0,"jean"],(err, rows) => {
           if(err) return response.json(err);

           return response.json(rows);
       });
        
    }
}