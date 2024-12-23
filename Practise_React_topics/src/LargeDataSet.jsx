import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  CircularProgress,
  Pagination,
  Paper,
} from "@mui/material";

const LargeDataset = () => {
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize] = useState(10);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.escuelajs.co/api/v1/products?limit=${pageSize}&offset=${
            (pageNumber - 1) * pageSize
          }`
        );
        console.log(response);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [pageSize, pageNumber]);

  const handlePageChange = (event, newPage) => {
    setPageNumber(newPage);
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        margin: "auto",
        padding: 2,
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Data List
      </Typography>

      <Paper elevation={3} sx={{ padding: 2 }}>
        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center">
            <CircularProgress />
          </Box>
        ) : (
          <List>
            {data.map((item) => (
              <ListItem key={item.id} divider>
                <ListItemText
                  primary={`#${item.id} - ${item.title}`}
                  secondary={item.description || "No description available"}
                />
              </ListItem>
            ))}
          </List>
        )}
      </Paper>

      <Box display="flex" justifyContent="center" mt={2}>
        <Pagination
          count={10}
          page={pageNumber}
          onChange={handlePageChange}
          color="primary"
          shape="rounded"
        />
      </Box>
    </Box>
  );
};

export default LargeDataset;
