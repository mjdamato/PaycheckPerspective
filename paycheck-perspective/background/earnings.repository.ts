/*
import connection from "../db";
import Earnings from "../earnings.model";

interface IEarningsRepository {
  save(earnings: Earnings): Promise<Earnings>;
  retrieveAll(searchParams: {occupation: string, median_earnings: number}): Promise<Earnings[]>;
  retrieveById(earningsoccupation: string): Promise<Earnings | undefined>;
  update(earnings: new): Promise<number>;
  delete(occupation: string): Promise<number>;
  deleteAll(): Promise<number>;
}

class EarningsRepository implements IEarningsRepository { }

  retrieveAll(searchParams: {occupation?: string, median_earnings?: number}): Promise<Earnings[]> { }

  retrieveById(occupation: string): Promise<Earnings> { }

  update(earnings: Earnings: Promise<number> { }

  delete(occupation: string): Promise<number> { }

  deleteAll(): Promise<number> { }
}


import { OkPacket } from "mysql2";

save(earnings: Earnings): Promise<Earnings> {
  return new Promise((resolve, reject) => {
    connection.query<OkPacket>(
      "INSERT INTO earnings (occupation, Number_of_full_time_workers, Number_of_men, Number_of_women, Percentage_of_women_in_occupational_group, Median_earnings) VALUES(?,?,?)",
      //[earnings.occupation, earnings.Median_earnings, earnings.published ? earnings.published : false],
      (err, res) => {
        if (err) reject(err);
        else
          this.retrieveById(res.insertId)
            .then((earnings) => resolve(earnings!))
            .catch(reject);
      }
    );
  });
}

retrieveAll(searchParams: {occupation?: string, median_earnings?: number}): Promise<Earnings[]> {
    let query: string = "SELECT * FROM earnings";
    let condition: string = "";
  
    if (searchParams?.published)
      condition += "published = TRUE"
  
    if (searchParams?.title)
      condition += `LOWER(title) LIKE '%${searchParams.title}%'`
  
    if (condition.length)
      query += " WHERE " + condition;
  
    return new Promise((resolve, reject) => {
      connection.query<Earnings[]>(query, (err, res) => {
        if (err) reject(err);
        else resolve(res);
      });
    });
  }

  retrieveById(earningsOccupation: string): Promise<Earnings> {
    return new Promise((resolve, reject) => {
      connection.query<Earnings[]>(
        "SELECT * FROM earnings WHERE occupation = ?",
        [earningsOccupation],
        (err, res) => {
          if (err) reject(err);
          else resolve(res?.[0]);
        }
      );
    });
  }

import { OkPacket } from "mysql2";

update(earnings: Earnings): Promise<number> {
  return new Promise((resolve, reject) => {
    connection.query<OkPacket>(
      "UPDATE earnings SET median_earnings = ?, occupation = ?",
      [earnings.occupation, earnings.Median_earnings, earnings.published,],
      (err, res) => {
        if (err) reject(err);
        else resolve(res.affectedRows);
      }
    );
  });
}

import { OkPacket } from "mysql2";

delete(EarningsRepository: number): Promise<number> {
  return new Promise((resolve, reject) => {
    connection.query<OkPacket>(
      "DELETE FROM earnings WHERE id = ?",
      [earningsId],
      (err, res) => {
        if (err) reject(err);
        else resolve(res.affectedRows);
      }
    );
  });
}

import { OkPacket } from "mysql2";

deleteAll(): Promise<number> {
  return new Promise((resolve, reject) => {
    connection.query<OkPacket>("DELETE FROM earnings", (err, res) => {
      if (err) reject(err);
      else resolve(res.affectedRows);
    });
  });
}
*/
