export interface ColumnModel{
  api_name: keyof typeof Object | string;
  label: string;
}
