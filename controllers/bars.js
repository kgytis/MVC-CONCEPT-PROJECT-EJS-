import mysql from 'mysql2/promise';
import mysqlConfig from '../dbConfig.js';

const getEverything = async (req, res) => {
    const con = await mysql.createConnection(mysqlConfig);

    const sql = `
    SELECT * FROM bars
    `
    const [data] = await con.query(sql);
    con.end();

    console.log(data)
    res.render('index', {
        data: data
    });
}

export default getEverything