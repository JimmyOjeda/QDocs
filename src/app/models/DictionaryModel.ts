import { ColumnModel } from "./ColumnModel";

export interface DictionaryModel{
  _id: string,
  database: string,
  name: string,
  columns: ColumnModel[]
}
