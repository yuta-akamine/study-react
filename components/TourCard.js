import classes from '@/components/TourCard.module.css';
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { AccessTime } from "@mui/icons-material";


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
          //styleをつける。
          sx={{
            // flexbox、上下センター
            display: "flex",
            alignItems: "center"
          }}
        >
          {/* アイコン用タグ利用しスタイルをつけている */}
          <AccessTime sx={{width: 12.5}} />
          {/* p要素をbody2のように見せて要素の左側にmarginを適用 */}
          <Typography variant="body2" component="p" marginLeft={0.5}>
            5 hours
          </Typography>
        </Box>

        <Box
          //styleをつける。
          sx={{
            // flexbox、上下センター
            display: "flex",
            alignItems: "center"
          }}
          // 要素のmarginTopへ余白を指定
          marginTop={3}
        >
          {/* 評価の星マークをつける*/}
          <Rating
            // 属性をreadOnlyにする場合の名前
            name="read-only"
            // 評価の値
            value={4.5}
            // ユーザーが評価を変更できない
            readOnly
            // 評価値に小数点がある場合はprecision属性で精度の指定が必要
            precision={0.5}
            // 評価マークのサイズ指定
            size="small"
          />
          {/*  p要素をbody2のように見せて要素の左側にmarginを適用 */}
          <Typography variant="body2" component="p" marginLeft={0.5}>
            4.5
          </Typography>
          {/* p要素をbody3のように見せる。左側にmarginの設定 */}
          <Typography variant="body3" component="p" marginLeft={1.5}>
            (655 reviews)
          </Typography>
        </Box>

        <Box>
          {/* h3要素をh6のように見せる。上側にmarginの設定 */}
          <Typography variant="h6" component="h3" marginTop={0}>
            From C $147
          </Typography>

        </Box>
      </Box>
    </Paper>
  </Grid>
  );
};

export default TourCard;