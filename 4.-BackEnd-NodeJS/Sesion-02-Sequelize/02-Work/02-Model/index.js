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
/*
  CREATE TABLE tasks (
    id INTEGER PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description VARCHAR(255) NOT NULL,
    views INTEGER DEFAULT 0 NOT NULL,
    is_active BOOLEAN DEFAULT TRUE NOT NULL
  )
 */
const Task = sequelize.define("tasks", {
  name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  description: {
    type: DataTypes.STRING(),
    allowNull: false
  },
  views: {
		type: DataTypes.INTEGER,
		defaultValue: 0,
		allowNull: false,
	},
	isActive: {
		field: "is_active",
		type: DataTypes.BOOLEAN,
		defaultValue: true,
		allowNull: false,
	},
});

async function sync() {
  try {
    await sequelize.sync({ force: true });
    console.log("> Base de datos actualizada!")
  }catch(e) {
    console.error("> No se pudo conectar..");
    console.error(e);
  }
}
sync();

/*const Task = sequelize.define("tasks", {
	name: {
		type: DataTypes.STRING(100),
		allowNull: false,
	},
	description: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	views: {
		type: DataTypes.INTEGER,
		defaultValue: 0,
		allowNull: false,
	},
	isActive: {
		field: "is_active",
		type: DataTypes.BOOLEAN,
		defaultValue: true,
		allowNull: false,
	},
});

async function sync() {
	try {
		await sequelize.sync({ force: true });
		console.log("> Base de datos actualizada!");
	} catch (e) {
		console.error("> No se puede actualizar la base de datos");
		console.error(e);
	}
}

sync();*/