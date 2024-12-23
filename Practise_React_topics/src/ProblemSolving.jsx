import { useState } from "react";
import { Box, IconButton } from "@mui/material";

const ProblemSolving = () => {
  const [rows, setRows] = useState([
    { id: 1, noOfJoinees: "" },
    { id: 2, noOfJoinees: "" },
  ]);

  const handleProcessRowUpdate = (newRow) => {
    const updatedRows = rows.map((row) =>
      row.id === newRow.id
        ? { ...row, noOfJoinees: newRow.noOfJoinees || "" }
        : row
    );
    setRows(updatedRows);
    return newRow;
  };

  const handleInputChange = (id, value) => {
    if (/^\d*$/.test(value)) {
      // Allow only digits
      handleProcessRowUpdate({ id, noOfJoinees: value });
    }
  };

  const handleDeleteRow = (id) => {
    setRows((prevRows) => prevRows.filter((row) => row.id !== id));
  };

  const columns = [
    {
      field: "noOfJoinees",
      headerName: "No. of Joinees",
      width: 200,
      editable: true,
      renderCell: (params) => (
        <input
          type="number"
          value={params.value}
          onChange={(e) =>
            handleProcessRowUpdate({
              id: params.row.id,
              noOfJoinees: e.target.value,
            })
          }
        />
      ),
    },
    {
      field: "delete",
      headerName: "Delete",
      renderCell: (params) => (
        <IconButton onClick={() => handleDeleteRow(params.row.id)}></IconButton>
      ),
    },
  ];

  return (
    <Box>
      <table>
        <thead>
          <tr>
            <th>No. of Joinees</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td>
                <input
                  type="text"
                  value={row.noOfJoinees}
                  onChange={(e) => handleInputChange(row.id, e.target.value)}
                  onKeyDown={(e) => {
                    if (
                      !/^[0-9]$/.test(e.key) &&
                      !["Backspace", "ArrowLeft", "ArrowRight", "Tab"].includes(
                        e.key
                      )
                    ) {
                      e.preventDefault();
                    }
                  }}
                />
              </td>
              <td>
                <IconButton
                  onClick={() => handleDeleteRow(row.id)}
                ></IconButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Box>
  );
};

export default ProblemSolving;






