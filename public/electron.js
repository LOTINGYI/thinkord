/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main/config/config.ts":
/*!*******************************!*\
  !*** ./main/config/config.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// import * as path from 'path';
Object.defineProperty(exports, "__esModule", { value: true });
exports.database = void 0;
// let workpath = process.env.HOME + '//AppData//Roaming//thinkord'
// const config = {
//   "development": {
//     "dialect": "sqlite",
//     "storage": "main/db.sqlite3",
//     "operatorsAliases": false
//   },
//   "test": {
//     "dialect": "sqlite",
//     "storage": 'main/db_tst.sqlite3',
//     "operatorsAliases": false
//   },
//   "production": {
//     "dialect": "sqlite",
//     "storage": path.join(workpath, '/db_prd.sqlite3'),
//     "operatorsAliases": false
//   }
// }
// export { config }
const sequelize_1 = __webpack_require__(/*! sequelize */ "sequelize");
exports.database = new sequelize_1.Sequelize({
    dialect: 'sqlite',
    storage: 'main/db.sqlite3'
});


/***/ }),

/***/ "./main/electron.ts":
/*!**************************!*\
  !*** ./main/electron.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = __webpack_require__(/*! electron */ "electron");
const path = __importStar(__webpack_require__(/*! path */ "path"));
const electron_is_dev_1 = __importDefault(__webpack_require__(/*! electron-is-dev */ "./node_modules/electron-is-dev/index.js"));
const FileChannel_1 = __webpack_require__(/*! ./ipc/FileChannel */ "./main/ipc/FileChannel.ts");
const index_1 = __webpack_require__(/*! ./models/index */ "./main/models/index.ts");
// import { Node } from "./models/node.model";
class Main {
    init(channel) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield index_1.DBCreate.create();
            console.log("db: ", db);
            electron_1.app.on('ready', this.createWindow);
            electron_1.app.on('window-all-closed', this.onWindowAllClosed);
            electron_1.app.on('activate', this.onActivate);
        });
    }
    onWindowAllClosed() {
        if (process.platform !== 'darwin') {
            electron_1.app.quit();
        }
    }
    onActivate() {
        if (!this.win) {
            this.createWindow();
        }
    }
    createWindow() {
        this.win = new electron_1.BrowserWindow({
            width: 800,
            height: 600,
            webPreferences: {
                nodeIntegration: true,
                // enableRemoteModule: true,
                contextIsolation: true,
                preload: path.resolve(__dirname, 'preload.js')
            }
        });
        this.win.loadURL(electron_is_dev_1.default ? "http://localhost:3000" : `file://${path.join(__dirname, '../build/index.html')}`);
        this.win.once('ready-to-show', () => {
            if (this.win)
                this.win.show();
        });
        this.win.on('closed', () => {
            this.win = null;
        });
    }
}
(new Main()).init([
    new FileChannel_1.FileChannel('fileprocess')
]);


/***/ }),

/***/ "./main/ipc/FileChannel.ts":
/*!*********************************!*\
  !*** ./main/ipc/FileChannel.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileChannel = void 0;
const electron_1 = __webpack_require__(/*! electron */ "electron");
const file_1 = __webpack_require__(/*! ../utils/file */ "./main/utils/file.ts");
class FileChannel {
    constructor(channelName) {
        this.channelName = channelName;
        electron_1.ipcMain.on(this.channelName, (event, command, args) => {
            switch (command) {
                case 'save':
                case 'delete':
                case 'load':
                    this[command](event, args);
                    break;
                default:
                    console.log('There is no command in thic channel');
                    break;
            }
        });
    }
    save(event, args) {
        console.log(args);
        event.reply('fuck', 'u');
    }
    load(event, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield file_1.loadFile();
            event.reply('loadComplete', data);
        });
    }
    delete(event, args) {
        console.log(args);
    }
}
exports.FileChannel = FileChannel;


/***/ }),

/***/ "./main/models sync recursive ^\\.\\/.*$":
/*!***********************************!*\
  !*** ./main/models sync ^\.\/.*$ ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./": "./main/models/index.ts",
	"./block": "./main/models/block.js",
	"./block.js": "./main/models/block.js",
	"./blockfile": "./main/models/blockfile.js",
	"./blockfile.js": "./main/models/blockfile.js",
	"./collection": "./main/models/collection.js",
	"./collection.js": "./main/models/collection.js",
	"./file": "./main/models/file.js",
	"./file.js": "./main/models/file.js",
	"./folder": "./main/models/folder.js",
	"./folder.js": "./main/models/folder.js",
	"./index": "./main/models/index.ts",
	"./index.ts": "./main/models/index.ts",
	"./node.model": "./main/models/node.model.ts",
	"./node.model.ts": "./main/models/node.model.ts",
	"./test": "./main/models/test.js",
	"./test.js": "./main/models/test.js",
	"./user": "./main/models/user.js",
	"./user.js": "./main/models/user.js",
	"./user.model": "./main/models/user.model.ts",
	"./user.model.ts": "./main/models/user.model.ts"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./main/models sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./main/models/block.js":
/*!******************************!*\
  !*** ./main/models/block.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = (sequelize, DataTypes) => {
  const Block = sequelize.define('Block', {
    title: DataTypes.STRING,
    type: {
      type: DataTypes.ENUM,
      values: ['text', 'image', 'audio', 'video']
    },
    description: DataTypes.TEXT,
    bookmark: DataTypes.BOOLEAN,
    collectionId: DataTypes.INTEGER
  }, {});

  // Block.updateTitle = async (id, title) => {
  //   try {
  //     await Block.update({
  //       title: title
  //     }, {
  //       where: { id: id }
  //     })
  //   } catch (err) {
  //     console.error(err)
  //   }
  // }

  // Block.updateDescription = async (id, des) => {
  //   try {
  //     await Block.update({
  //       description: des
  //     }, {
  //       where: { id: id }
  //     })
  //   } catch (err) {
  //     console.error(err)
  //   }
  // }

  // Block.updateBookmark = async (id, bookmark) => {
  //   try {
  //     await Block.update({
  //       bookmark: bookmark
  //     }, {
  //       where: { id: id }
  //     })
  //   } catch (err) {
  //     console.error(err)
  //   }
  // }

  Block.associate = function (models) {
    // associations can be defined here
    Block.belongsTo(models.Collection, { foreignKey: 'collectionId', as: 'collection' })
    Block.belongsToMany(models.File, { through: 'BlockFile', foreignKey: 'blockId', as: 'files' })
  };
  return Block;
};


/***/ }),

/***/ "./main/models/blockfile.js":
/*!**********************************!*\
  !*** ./main/models/blockfile.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = (sequelize, DataTypes) => {
  const BlockFile = sequelize.define('BlockFile', {
    blockId: DataTypes.INTEGER,
    fileId: DataTypes.INTEGER
  }, {});

  BlockFile.associate = function (models) {
    // associations can be defined here
    BlockFile.belongsTo(models.Block, { foreignKey: 'blockId' })
    BlockFile.belongsTo(models.File, { foreignKey: 'fileId' })
  };
  return BlockFile;
};


/***/ }),

/***/ "./main/models/collection.js":
/*!***********************************!*\
  !*** ./main/models/collection.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = (sequelize, DataTypes) => {
  const Collection = sequelize.define('Collection', {
    name: DataTypes.STRING,
    display: DataTypes.BOOLEAN,
    folderId: DataTypes.INTEGER
  }, {})

  // Collection.createOne = async (name, folderId) => {
  //   try {
  //     Collection.create({
  //       collectionName: name,
  //       display: true,
  //       folderId: folderId
  //     })
  //   } catch (err) {
  //     console.error(err)
  //   }
  // }

  // Collection.updateName = async (id, name) => {
  //   try {
  //     await Collection.update({
  //       name: name
  //     }, {
  //       where: { id: id }
  //     })
  //   } catch (err) {
  //     console.error(err)
  //   }
  // }

  Collection.associate = function (models) {
    // associations can be defined here
    Collection.belongsTo(models.Folder, { foreignKey: 'folderId', as: 'folders' })
    Collection.hasMany(models.Block, { foreignKey: 'collectionId', as: 'blocks' })
  };
  return Collection;
};


/***/ }),

/***/ "./main/models/file.js":
/*!*****************************!*\
  !*** ./main/models/file.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = (sequelize, DataTypes) => {
  const File = sequelize.define('File', {
    name: DataTypes.STRING,
    path: DataTypes.STRING
  }, {});

  File.associate = function (models) {
    // associations can be defined here
    File.belongsToMany(models.Block, { through: 'BlockFile', foreignKey: 'fileId', as: 'blocks' })
  };

  return File;
};


/***/ }),

/***/ "./main/models/folder.js":
/*!*******************************!*\
  !*** ./main/models/folder.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = (sequelize, DataTypes) => {
  const Folder = sequelize.define('Folder', {
    name: DataTypes.STRING
  }, {});

  Folder.associate = function (models) {
    // associations can be defined here
    Folder.hasMany(models.Collection, { foreignKey: 'folderId', as: 'collections' })
  };
  return Folder;
};


/***/ }),

/***/ "./main/models/index.ts":
/*!******************************!*\
  !*** ./main/models/index.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__filename) {
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBCreate = void 0;
const fs = __importStar(__webpack_require__(/*! fs */ "fs"));
const path = __importStar(__webpack_require__(/*! path */ "path"));
const sequelize_1 = __webpack_require__(/*! sequelize */ "sequelize");
// // import { config } from '../config/config.ts';
const basename = path.basename(__filename);
const env = process.env.NOD;
const db = {};
let sequelize;
sequelize = new sequelize_1.Sequelize({
    dialect: 'sqlite',
    storage: 'main/db.sqlite3'
});
const dir = path.join(__dirname, '../main/models');
class DBCreate {
    static create() {
        return __awaiter(this, void 0, void 0, function* () {
            /** 1 Process each file and extract the model to db object */
            yield this.fileprocess();
            /** 2 Add the sequelize and Sequelize attributes */
            db.sequelize = sequelize;
            db.Sequelize = sequelize_1.Sequelize;
            return db;
        });
    }
    static fileprocess() {
        return __awaiter(this, void 0, void 0, function* () {
            yield fs
                .readdirSync(dir)
                .filter((file) => {
                return (file.indexOf('.') !== 0) && (file !== 'index.ts') && (file.slice(-3) === '.ts');
            })
                .forEach((file) => __awaiter(this, void 0, void 0, function* () {
                const module = yield Promise.resolve().then(() => __importStar(__webpack_require__("./main/models sync recursive ^\\.\\/.*$")(`./${file}`)));
                const key = Object.keys(module)[0];
                const value = Object.values(module)[0];
                db[key] = value;
            }));
        });
    }
}
exports.DBCreate = DBCreate;

/* WEBPACK VAR INJECTION */}.call(this, "/index.js"))

/***/ }),

/***/ "./main/models/node.model.ts":
/*!***********************************!*\
  !*** ./main/models/node.model.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
const sequelize_1 = __webpack_require__(/*! sequelize */ "sequelize");
const config_1 = __webpack_require__(/*! ../config/config */ "./main/config/config.ts");
class Node extends sequelize_1.Model {
}
exports.Node = Node;
Node.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: new sequelize_1.DataTypes.STRING(128),
        allowNull: false,
    }
}, {
    tableName: "nodes",
    sequelize: config_1.database,
});
Node.sync({ force: true }).then(() => console.log("Node table created"));


/***/ }),

/***/ "./main/models/test.js":
/*!*****************************!*\
  !*** ./main/models/test.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {


// import * as fs from 'fs';
// import * as path from 'path';
// import { Sequelize } from 'sequelize';
// import { config } from '../config/config.ts';
// const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || 'development';
// const db = {};


// let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(config.database, config.username, config.password, config);
// }

// fs
//   .readdirSync(__dirname)
//   .filter(file => {
//     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
//   })
//   .forEach(file => {
//     // const model = sequelize['import'](path.join(__dirname, file));
//     const model = require(path.join(__dirname, file))(sequelize, Sequelize)
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

// export default db;


/***/ }),

/***/ "./main/models/user.js":
/*!*****************************!*\
  !*** ./main/models/user.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    passwordConfirm: DataTypes.STRING
  }, {});
  
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};


/***/ }),

/***/ "./main/models/user.model.ts":
/*!***********************************!*\
  !*** ./main/models/user.model.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_1 = __webpack_require__(/*! sequelize */ "sequelize");
class User extends sequelize_1.Model {
}
exports.User = User;


/***/ }),

/***/ "./main/utils/file.ts":
/*!****************************!*\
  !*** ./main/utils/file.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadFile = void 0;
const fs = __importStar(__webpack_require__(/*! fs */ "fs"));
const path = __importStar(__webpack_require__(/*! path */ "path"));
const electron_is_dev_1 = __importDefault(__webpack_require__(/*! electron-is-dev */ "./node_modules/electron-is-dev/index.js"));
function loadFile() {
    return new Promise((resolve, reject) => {
        let p = electron_is_dev_1.default ? `./public/real-dev-data.json` : path.join(__dirname, '../build/real-dev-data.json');
        fs.readFile(p, function (err, data) {
            if (err) {
                reject(err);
            }
            else {
                resolve(data.toString());
            }
        });
    });
}
exports.loadFile = loadFile;


/***/ }),

/***/ "./node_modules/electron-is-dev/index.js":
/*!***********************************************!*\
  !*** ./node_modules/electron-is-dev/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const electron = __webpack_require__(/*! electron */ "electron");

if (typeof electron === 'string') {
	throw new TypeError('Not running in an Electron environment!');
}

const app = electron.app || electron.remote.app;

const isEnvSet = 'ELECTRON_IS_DEV' in process.env;
const getFromEnv = parseInt(process.env.ELECTRON_IS_DEV, 10) === 1;

module.exports = isEnvSet ? getFromEnv : !app.isPackaged;


/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./main/electron.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./main/electron.ts */"./main/electron.ts");


/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "sequelize":
/*!***************************************!*\
  !*** external "require('sequelize')" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require('sequelize');

/***/ })

/******/ });
//# sourceMappingURL=electron.js.map