// Conexion con SQLITE 3
const {Sequelize, DataTypes} = require("sequelize");

const sequelize = new Sequelize({
  // Indicamos que vamos a conectarnos con Sqlite
  dialect: 'sqlite',
  // Donde se va a almacenar el archivo de la BD
  storage: './example.db'
});

async function connect() {
  try {
    await sequelize.authenticate();
    console.log("> Conectado con exito...");
  }catch(e) {
    console.error("> No se pudo conectar a la base de datos..");
    console.error(e);
  }

}
connect();

const Task = sequelize.define("tasks", {
  name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  description: {
  type: DataTypes.STRING(),
  allowNull: false
  }
});