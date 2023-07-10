import classes from '@/components/TourCard.module.css';
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';


const TourCard = () => {
  return (
  // 12のうち3の領域を利用するGridコンポーネントを作成
  <Grid item xs={3}>
    {/* paperの標高を指定 */}
    <Paper elevation={3}>
      <img
        src="https://cdn2.veltra.com/ptr/20170614052221_2032870996_10518_0.jpg?imwidth=550&impolicy=custom"
        alt=""
        className="img"
      />
      {/* Xは横だけpaddingを適用する */}
      <Box paddingX={1}>
        {/* h2要素をsubtitle1のように見せる */}
        <Typography variant="subtitle1" component="h2">
          Immerse into the Falls
        </Typography>
        <Box
          //styleをつける
          sx={{
            display: "flex",
            alignItems: "center"
          }}
        >
          {/* p要素をbody2のように見せる */}
          <Typography variant="body2" component="p">
            5 hours
          </Typography>
        </Box>
      </Box>
    </Paper>
  </Grid>
  );
};

export default TourCard;