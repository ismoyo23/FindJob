let conn = require("../helper/mysql");

// =================================================================
// portofolio proccess
module.exports = {
  Messanger: function (sender, receiver) {
    return new Promise((resolve, reject) => {
      conn.query(
        `SELECT * FROM Messanger AS m INNER JOIN Users AS u ON (u.id = m.sender_id OR u.id = m.receiver_id) WHERE m.sender_id IN (?, ?) AND m.receiver_id IN (?, ?) ORDER BY m.id_messanger ASC`,
        [sender, receiver, sender, receiver],
        function (error, result) {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        }
      );
    });
  },

  CreateMessanger: function (setData) {
    return new Promise((resolve, reject) => {
      conn.query(`INSERT INTO messanger SET ?`, [setData], function (
        error,
        result
      ) {
        if (error) {
          reject(error);
        } else {
          let newData = {
            id: result.insertId,
            ...setData,
          };
          resolve(newData);
        }
      });
    });
  },

  DestroyMessanger: function (id) {
    return new Promise((resolve, reject) => {
      conn.query(`DELETE FROM messanger ${id}`, function (error, result) {
        if (error) {
          reject(error);
        } else {
          let newData = {
            id,
          };
          resolve(newData);
        }
      });
    });
  },
};

// `SELECT m.*, u1.name AS sender, u2.name AS receiver FROM messages m JOIN profiles u1 ON m.sender_id = u1.user_id JOIN profiles u2 ON m.receiver_id = u2.user_id WHERE sender_id IN (?, ?) AND receiver_id IN (?, ?) ORDER BY created_at ASC
