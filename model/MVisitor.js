const mysql = require("mysql");

//mysql연결
const conn = mysql.createConnection({
  host: "kdt8-test.chrjqfrpahdq.ap-northeast-2.rds.amazonaws.com",
  user: "admin",
  password: "12345678",
  database: "kdt8",
  port: 3306,
});
conn.connect((err) => {
  if (err) {
    console.log("error");
    return;
  }
  console.log("connect");
});

exports.getVisitors = (cb) => {
  console.log(conn);
  const query = `SELECT * FROM visitor`;
  conn.query(query, (err, rows) => {
    console.log("visitor", rows);
    if (err) {
      console.log(err);
    }
    cb(rows);
  });
};
exports.getVisitor = (id, cb) => {
  console.log("방명록 하나 조회");
  console.log(id);
  const query = `SELECT * FROM visitor WHERE id=${id}`;
  conn.query(query, (err, rows) => {
    console.log(rows);
    cb(rows);
  });
};

exports.postVisitor = (data, cb) => {
  console.log("방명록 하나 추가");
  const query = `INSERT INTO visitor (name, comment) VALUES ('${data.name}', '${data.comment}')`;
  conn.query(query, (err, rows) => {
    console.log("write", rows);
    cb(rows);
  });
};

exports.patchVisitor = (data, cb) => {
  console.log("방명록 하나 수정");
  const query = `UPDATE visitor SET name='${data.name}',comment='${data.comment}' WHERE id=${data.id}`;
  conn.query(query, (err, rows) => {
    console.log(rows);
    cb(rows);
  });
};
exports.deleteVisitor = (data, cb) => {
  console.log("방명록 하나 삭제");
  const query = `DELETE FROM visitor WHERE id=${data.id}`;
  conn.query(query, (err, rows) => {
    cb(rows);
  });
};
