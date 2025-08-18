import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../Components/Header";
import { mockTransactions } from "../../data/mock";
import EmailIcon from "@mui/icons-material/Email";
import Download from "@mui/icons-material/Download";
import PointOfSale from "@mui/icons-material/PointOfSale";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Traffic from "@mui/icons-material/Traffic";
import LineChart from "../../Components/LineChart";
import PieChart from "../../Components/PieChart";
import BarChart from "../../Components/BarChart";
import GeographyChart from "../../Components/GeographyChart";
import StatBox from "../../Components/StatBox";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your Dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.Primary[100],
              color: colors.Secondary[500],
              fontSize: "12px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <Download sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID AND CHARTS*/}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12 , 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* Row1*/}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.Third[900]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,909"
            subtitle="Email Sent"
            progress="0.65"
            increase="+14%"
            icon={
              <EmailIcon
                sx={{ color: colors.Secondary[500], fontSize: "20px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.Third[900]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="23,456"
            subtitle="New User Added"
            progress="0.80"
            increase="+15%"
            icon={
              <PersonAdd
                sx={{ color: colors.Secondary[500], fontSize: "20px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.Third[900]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="23,333"
            subtitle="Traffic outbound"
            progress="0.20"
            increase="+11%"
            icon={
              <Traffic
                sx={{ color: colors.Secondary[500], fontSize: "20px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.Third[900]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="23,333"
            subtitle="Sales Made"
            progress="0.50"
            increase="+13%"
            icon={
              <PointOfSale
                sx={{ color: colors.Secondary[500], fontSize: "20px" }}
              />
            }
          />
        </Box>
        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.Third[900]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex"
            justifyContent="space-Between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight={"600"}
                color={colors.Secondary[500]}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.Third[500]}
              >
                $45,234,234
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <Download sx={{ fontSize: "20px", color: colors.Third[500] }} />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" mt="-20px">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        {/* Transactions */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.Third[900]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.Primary[900]}`}
            color={colors.Third[900]}
            p="15px"
          >
            <Typography
              color={colors.Secondary[500]}
              variant="h5"
              fontWeight="600"
            >
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.Primary[900]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.Third[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography
                  color={colors.Secondary[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.Secondary[500]}>{transaction.date}</Box>
              <Box
                backgroundColor={colors.Third[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                {transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>
        {/* ROW 3 */}
        {/* Campaign */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.Third[900]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="5px"
          >
            <Typography
              variant="h5"
              color={colors.Third[500]}
              sx={{ mt: "15px" }}
            >
              Distributed Revenue Generated
            </Typography>
            <Typography>Includes extra expenditures and costs</Typography>
            <Box height="300px" width="300px" mt="-40px">
              <PieChart isDashboard={true} />
            </Box>
          </Box>
        </Box>
        {/* Sales */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.Third[900]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        {/* Geography Based Traffic */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.Third[900]}
          padding="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Geography Based Traffic
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
