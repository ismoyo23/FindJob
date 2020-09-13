let conn = require("../helper/mysql");
const { search } = require("../router/AuthRouter");

// =================================================================
// portofolio proccess
module.exports = {
  History: function (search) {
    return new Promise((resolve, reject) => {
      conn.query(
        `SELECT * FROM messanger as m LEFT JOIN messanger as m1 ON ( ( (m.sender_id = m1.sender_id AND m.receiver_id = m1.receiver_id) OR (m.sender_id = m1.receiver_id and m.receiver_id = m1.sender_id ) ) AND CASE WHEN m.created_at = m1.created_at THEN m.id_messanger < m1.id_messanger ELSE m.created_at < m1.created_at END ) INNER JOIN users as u ON (m.sender_id = u.id OR m.receiver_id = u.id) WHERE u.id != ${search} AND m1.id_messanger is null AND ${search} IN(m.sender_id, m.receiver_id) ORDER BY m.created_at DESC`,
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
};
