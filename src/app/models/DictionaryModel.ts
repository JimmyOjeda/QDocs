import { ColumnModel } from "./ColumnModel";

export interface DictionaryModel{
  id: String,
  database_id: String,
  table_id: String,
  name: String,
  columns: ColumnModel[]
}
