import React from "react";
import { Grid, Box } from "@mui/material";

import {
  BlogCard,
  SalesOverview,
  ProductPerformance,
 // DailyActivities,
} from "./dashboard1-components";

const Dashboard1 = () => {

  return (
    <Box>
      <Grid container spacing={0}>
        {/* ------------------------- row 1 ------------------------- */}
        {/* ------------------------- row 2 ------------------------- */}
        {/* ------------------------- row 3 ------------------------- */}
        <BlogCard />
      </Grid>
    </Box>
    
  );
};    

export default Dashboard1;
