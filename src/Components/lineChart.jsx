import { Row, Col, Typography } from 'antd'
import React from 'react'
import { Line } from 'react-chartjs-2'


function LineChart({ coinHistory, currentPrice, coinName }) {
    const coinPrice = []
    const coinTimestamp = []
    const { Title } = Typography

    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        coinPrice.push(coinHistory?.data?.history[i].price)
    }

    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString())
    }


    const data = {
        labels: coinTimestamp,
        datasets: [{
            label: 'Price in USD',
            data: coinPrice,
            fil: false,
            backgroundColor: '#0071bd',
            borderColor: '#0071bd',
        }]
    }

    const options = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                }
            }],
        }
    }


    return (
        <>

            <Row className='chart-header'>
                <Title level={2} className='chart-title'>{coinName} PriceChat </Title>
                <Col className='price-container'>
                    <Title level={5} className='price-change'>Change:{coinHistory?.data?.change} </Title>
                    <Title level={5} className='current-price'>current:{coinName} Price: ${currentPrice} </Title>
                </Col>
            </Row>
            <Line data={data} options={options} />
        </>
    )
}

export default LineChart