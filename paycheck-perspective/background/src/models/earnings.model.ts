
import {RowDataPacket} from "mysql2"

export default interface new_schema extends RowDataPacket {
  Occupation?: string;
  Number_of_full_time_workers?: number;
  Number_of_men?: number;
  Number_of_women?: number;
  Percentage_of_women_in_occupational_group?: number;
  Median_earnings?: number;
  Median_earnings_men?: number;
  Median_earnings_women?: number;
  Women_s_earnings_as_a_percentage_of_men_s_earnings?: number;
}
