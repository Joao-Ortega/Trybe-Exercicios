// ./src/Connector.ts
// import mysql, { Connection } from 'mysql';

// interface ConnectorConstructor {
//   host: string;
//   port: number;
//   database?: string;
//   user?: string;
//   password?: string;
// }

// export default class MySQLConnector {
//   private connection: Connection;

//   constructor(config: ConnectorConstructor) {
//     this.connection = mysql.createConnection({ ...config, database: undefined });
//     this.connection.connect();
//     const queries = [
//       `CREATE DATABASE IF NOT EXISTS ${config.database};`,
//       `USE ${config.database};`,
//       'CREATE TABLE IF NOT EXISTS counter (token CHAR(36) UNIQUE, count INT);',
//     ];
//     queries.forEach((query) => this.connection.query(query));
//   }

//   public async getCount(token: string): Promise<number> {
//     const query = `SELECT count FROM counter WHERE token='${token}';`;

//     return new Promise((resolve, reject) => {
//       this.connection.query(query, (error, results) => {
//         if (error) return reject(error);

//         let result = parseInt(results[0].count, 10);
//         result = Number.isNaN(result) ? 0 : result;
//         resolve(result);
//       });
//     });
//   }

//   public incrementCount(token: string): void {
//     this.connection.query(`UPDATE counter SET count = count + 1 WHERE token='${token}';`);
//   }

//   private async updateCount(token: string, value: number) {
//     this.connection.query(`UPDATE counter SET count=${value} WHERE token='${token}';`);
//   }

//   public clearCount(token: string): void {
//     this.updateCount(token, 0);
//   }

//   public firstCount(token: string): void {
//     this.connection.query(`INSERT IGNORE INTO counter VALUES('${token}', 0);`);
//   }

//   public closeConnection(): void {
//     this.connection.end();
//   }
// }

// export interface Connector {
//   getCount(token: string): number | Promise<number>;

//   incrementCount(token: string): void;
  
//   closeConnection(): void;

//   clearCount(token: string): void;

//   firstCount(token: string): void;
// }

// export interface ConnectorConstructor {
//   host: string;
//   port: number;
//   database?: string;
//   user?: string;
//   password?: string;
// }

// export default Connector;

// ./src/Connectors/Connector.ts

export interface ReadOnlyConnector {
  getCount(token: string): number | Promise<number>;

  closeConnection(): void;
}

export interface Connector extends ReadOnlyConnector {
  incrementCount(token: string): void;

  clearCount(token: string): void;

  firstCount(token: string): void;
}

export interface ConnectorConstructor {
  host: string;
  port: number;
  database?: string;
  user?: string;
  password?: string;
}

export default Connector;
