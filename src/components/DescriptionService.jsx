import { Card, CardContent, Typography } from "@mui/material";

export default function DescriptionService({Desh3, Desp}) {
    return(
        <Card className="container_desc">
            <CardContent>
                <Typography variant="h5">{Desh3}</Typography>
                <Typography variant="subtitle1">{Desp}</Typography>
            </CardContent>
        </Card>
    )

}