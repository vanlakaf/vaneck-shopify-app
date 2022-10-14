import { useState } from "react";
import { DataTable } from "@shopify/polaris";
import axios from "axios";

/** @type { import("axios").AxiosInstance } */
const pimClient = axios.create({ baseURL: "https://test-case.quable.com/api" });

async function getDataFromPIM() {
  return await pimClient
    .get("/catalogs?page=1&limit=30", {
      headers: {
        authorization: "Bearer 055CF6DA40695A92B87396DED02638AA8E2A3D14",
        accept: "application/ld+json",
      },
    })
    .then((response) => response.data);
}

export function ProductList() {
  const [isLoading, setIsLoading] = useState(true);
  const [rows, setRows] = useState([["ID", "Name", "Description", "Oject Type"]]);

  getDataFromPIM()
    .then(() => {
      setIsLoading(false);
    });

  return (
    <>
      {isLoading ? (
        <p>Loading data...</p>
      ) : (
        <Card>
          <DataTable
            columnContentTypes={["text", "text", "text", "text"]}
            headings={["ID", "Name", "Description", "Oject Type"]}
            rows={rows}
          />
        </Card>
      )}
    </>
  );
}
