import {RowDataPacket} from "mysql2"

export default interface new_schema extends RowDataPacket {
  occupation?: string;
  Number_of_full_time_workers?: number;
  Number_of_men?: number;
  Number_of_women?: number;
  Percentage_of_women_in_occupational_group?: number;
  Median_earnings?: number;
}