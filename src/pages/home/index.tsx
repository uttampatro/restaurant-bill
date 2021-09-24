import {
    Button,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Container,
    createTheme,
    CssBaseline,
    Grid,
    Link,
    ThemeProvider,
    Toolbar,
    Typography,
} from '@material-ui/core';
import React, { useEffect } from 'react';
import { useState } from 'react';
import history from '../../history';
import { restaurantService, userService } from '../../services';

const Home = () => {
    const theme = createTheme();
    const User = localStorage.getItem('user');
    const user = User ? JSON.parse(User) : undefined;
    const [restaurants, setRestaurants] = useState<any[]>([]);

    const fetchAllRestaurant = async () => {
        try {
            const data = await restaurantService.getAllRestaurant();
            setRestaurants(data);
        } catch (error) {
            console.log(error);
        }
    };

    const logout = async () => {
        try {
            await userService.logout();
            history.push('/login');
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchAllRestaurant();
    }, []);

    return (
        <div>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Container maxWidth="lg">
                    <Toolbar
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            borderBottom: '1px solid gray',
                        }}
                    >
                        <Typography
                            component="h2"
                            variant="h5"
                            color="inherit"
                            align="center"
                            noWrap
                        >
                            Blog
                        </Typography>

                        <Button
                            onClick={logout}
                            variant="outlined"
                            size="small"
                        >
                            logout
                        </Button>
                    </Toolbar>
                    <main>
                        <Grid
                            style={{ paddingTop: '20px' }}
                            container
                            spacing={4}
                        >
                            {restaurants.map(restaurant => {
                                return (
                                    <Grid item xs={12} md={6}>
                                        <CardActionArea component="a" href="#">
                                            <Card style={{ display: 'flex' }}>
                                                <CardContent
                                                    style={{ flex: 1 }}
                                                >
                                                    <Typography
                                                        component="h2"
                                                        variant="h5"
                                                    >
                                                        {restaurant.name}
                                                    </Typography>
                                                    <Typography
                                                        style={{
                                                            paddingTop: '30px',
                                                            fontSize: 'medium',
                                                        }}
                                                        variant="subtitle1"
                                                        paragraph
                                                    >
                                                        {restaurant.description}
                                                    </Typography>
                                                </CardContent>
                                                <CardMedia
                                                    component="img"
                                                    style={{
                                                        width: 160,
                                                        height: 170,
                                                        display: 'block',
                                                    }}
                                                    image={restaurant.imageUrl}
                                                />
                                            </Card>
                                        </CardActionArea>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </main>
                </Container>
            </ThemeProvider>
        </div>
    );
};

export default Home;
