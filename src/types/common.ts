import { GridColDef } from "@mui/x-data-grid";
import { DocumentNode } from "@apollo/client";
import { DataType } from "./dataTypes";

// Base entity interface - all data types have an id
export interface BaseEntity {
  id: string;
}

// Configuration for a data type
export interface DataTypeConfig<T extends BaseEntity = BaseEntity> {
  type: DataType;
  label: string;
  query: DocumentNode;
  columns: GridColDef[];
  dataKey: string; // Key to extract data from query response
}
