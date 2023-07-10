import classes from '@/pages/index.module.css';
import TourCard from '@/components/TourCard';
import { Container, Grid } from '@mui/material';

// まとめて上記のように記述することが可能
// import Container from '@mui/material/Container';
// import Grid from "@mui/material/Grid";

export default function Home() {
  return (
    <div className="mui">
      <Container>
        {/* spacing属性はGridで分けるコンテンツの間の間隔 */}
        <Grid container spacing={5}>
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
        </Grid>
      </Container>
    </div>
  )
}
