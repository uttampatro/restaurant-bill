import { Button, Grid, Input, Typography } from '@material-ui/core';
import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import restaurantService from '../../services/restaurantService';

function Menu() {
    // const fetchFoodsByRestaurantId = async (restaurantId: any) => {
    //     try {
    //         const data = await restaurantService.getFoodsByRestaurantId(
    //             restaurantId
    //         );
    //         console.log(data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    // const { restaurantId }: any = useParams;

    // useEffect(() => {
    //     fetchFoodsByRestaurantId(restaurantId);
    // });
    return (
        <Grid
            style={{
                padding: '2rem 2.25rem 1rem',
                margin: '20px auto',
                maxWidth: '50rem',
                boxShadow: '0 0 1rem rgba(0, 0, 0, 0.1)',
                // backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80')`,
            }}
        >
            <Grid>
                <Grid
                    style={{
                        paddingTop: '10px',
                        paddingBottom: '10px',
                        display: 'flex',
                        justifyContent: 'center',
                        borderBottom: '1px solid ',
                    }}
                >
                    <Typography
                        variant="h4"
                        style={{
                            fontWeight: '-moz-initial',
                        }}
                    >
                        China corner
                    </Typography>
                </Grid>
                <Grid>
                    <section
                        style={{
                            gridColumn: '1/2',
                            // paddingLeft: '100px',
                            // paddingRight: '100px',
                            // paddingBottom: '60%',
                            paddingTop: '20px',
                        }}
                    >
                        <article
                            style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                marginBottom: '1.5rem',
                            }}
                        >
                            <h3 style={{ margin: 0, flexGrow: 1 }}>
                                veg noddle
                            </h3>
                            <Grid style={{ paddingRight: '30px' }}>
                                <input
                                    type="text"
                                    inputMode="numeric"
                                    pattern="[0-9]*"
                                    style={{
                                        width: '1.75rem',
                                        height: '1.75rem',
                                        padding: '0.25rem',
                                        margin: '0 1rem',
                                        position: 'sticky',
                                        backgroundColor: 'transparent',
                                        border: '1px solid lightgray',
                                        borderRadius: '50%',
                                        textAlign: 'center',
                                    }}
                                />
                            </Grid>
                            <strong className="mains-price">₹15</strong>
                        </article>
                    </section>
                </Grid>
            </Grid>

            <Grid
                style={{
                    gridColumn: '1/3',
                    marginTop: '0%',
                    padding: '0.75rem 0 1.25rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    position: 'sticky',
                    backgroundColor: 'white',
                    borderTop: '1px solid ',
                    bottom: 0,
                }}
            >
                <Grid>
                    <span style={{ margin: 0 }}>Total:</span>
                    <span style={{ fontSize: '1.2rem' }}> ₹155</span>
                </Grid>
                <Button
                    variant="contained"
                    style={{
                        backgroundColor: 'lightblue',
                        width: '130px',
                        height: '30px',
                    }}
                >
                    Add
                </Button>
            </Grid>
        </Grid>
    );
}

export default Menu;
