import React, { useState, useEffect } from 'react';
import ReactEcharts from "echarts-for-react";
import axios from 'axios';
import { Box, Flex } from '@chakra-ui/react';

function Piechart(props) {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:5000/api/Dashboard/pie/${props.id}`).then((response) => {
            setData(response.data);
        })

    }, [])

    const options = {
        tooltip: {
            trigger: 'item'
        },
        title: {

            text: 'Total Payments', // The text for the title  
            bottom: 'bottom',
            left:"center",
            textStyle: {
            fontSize: 16 // Customize the font size and other text styles
            }
        },
        legend: {
            top: '5%',
            left: 'center',
            // doesn't perfectly work with our tricks, disable it
            selectedMode: false
        },
        series: [
            {
                name: 'Access From',
                type: 'pie',
                radius: ['40%', '70%'],
                center: ['50%', '70%'],
                // adjust the start angle
                startAngle: 180,
                label: {
                    show: true,
                    formatter(param) {
                        // correct the percentage
                        return param.name + ' (' + param.percent * 2 + '%)';
                    }
                },
                data: [
                    { value: data.remainingPayments, name: 'Remaining Payments' },
                    { value: data.completedPayments, name: 'Completed Payments' },
                    {
                        // make an record to fill the bottom 50%
                        value: data.remainingPayments + data.completedPayments,
                        itemStyle: {
                            // stop the chart from rendering this piece
                            color: 'none',
                            decal: {
                                symbol: 'none'
                            }
                        },
                        label: {
                            show: false
                        }
                    }
                ]
            }
        ]
    };
    return (
        <Flex direction="column">
            <Box width={700}>
                <ReactEcharts option={options} />
            </Box>
        </Flex>
    );
}

export default Piechart