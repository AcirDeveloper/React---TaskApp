import {
    AppBar,
    Box,
    Button,
    Container,
    Toolbar,
    Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="transparent">
                <Container>
                    <Toolbar>
                        <Typography sx={{ flexGrow: 1 }} variant="h6">
                            <Link
                                to="/"
                                style={{
                                    textDecoration: "none",
                                    color: "#eee",
                                }}
                            >
                                PERN STACK
                            </Link>
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            component={Link}
                            to="/tasks/new"
                        >
                            NEW TASK
                        </Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}
