"use client";

import { useState } from "react";
import { Box } from "@mui/material";
import { Header, DataTable, Loading, Error } from "@/components";
import { useDataByType } from "@/hooks/useDataByType";
import { DataType } from "@/types";

/**
 * Home - Main application page component.
 * Displays a data table with SpaceX data (launches, rockets, ships, etc.)
 * with a header containing data type selector and theme toggle.
 * Handles loading and error states for GraphQL data fetching.
 */
export default function Home() {
  const [dataType, setDataType] = useState<DataType>(DataType.LAUNCHES);
  const { data, loading, error, config } = useDataByType(dataType);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header dataView={dataType} onDataViewChange={setDataType} />
      <Box sx={{ flex: 1, px: 3, py: 2, minHeight: 0 }}>
        {loading && <Loading />}
        {error && <Error message={error.message} />}
        {data && <DataTable data={data} columns={config.columns} />}
      </Box>
    </Box>
  );
}
