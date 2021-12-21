const Mysql = require('mysql');

module.exports = {
    connection(){
        const connect = Mysql.createPool({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'petlife'
        });

        return connect;
    }
}