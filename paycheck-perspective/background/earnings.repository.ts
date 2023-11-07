import connection from "../db";
import Tutorial from "../earnings.model";

interface IEarningsRepository {
  save(earnings: Earnings): Promise<Earnings>;
  retrieveAll(searchParams: {occupation: string, median_earnings: number}): Promise<Tutorial[]>;
  retrieveById(earningsoccupation: string): Promise<Tutorial | undefined>;
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
      "INSERT INTO earnings (occupation,Number_of_full_time_workers,Number_of_men, Number_of_women, Percentage_of_women_in_occupational_group, Median_earnings) VALUES(?,?,?)",
      //[tutorial.title, tutorial.description, tutorial.published ? tutorial.published : false],
      (err, res) => {
        if (err) reject(err);
        else
          this.retrieveById(res.insertId)
            .then((tutorial) => resolve(tutorial!))
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
      connection.query<Tutorial[]>(
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
      [tutorial.title, tutorial.description, tutorial.published, tutorial.id],
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
      "DELETE FROM tutorials WHERE id = ?",
      [tutorialId],
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