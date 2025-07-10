import { Link } from 'react-router-dom';
import Back_Btn from './Back';
import FooterCom from './FooterC';
import { Card, CardContent, Typography } from '@mui/material';
import FooterC from './FooterC';
export default function InfoApp() {
  return (
    <div className="container_card_box">
      <Back_Btn />

      <Card className="margR margL">
        <CardContent>
          <Typography className="type_mg" variant="h3">
            اطلاعات برنامه
          </Typography>
          <Typography variant="subtitle1">
            در ورژن 3.0.0 هستید
          </Typography>
        </CardContent>
      </Card>

      {/* <FooterCom /> */}
      <FooterC />
    </div>
  );
}
