import React, { useState } from 'react'
import { HTMLReactParser } from 'html-react-parser'
import { useParams } from 'react-router-dom'
import { Col, Row, Typography, Select } from 'antd'
import Loader from './Loader'
import LineChart from './lineChart'
import { useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } from '../services/api.service'
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';


function CrypoDetails() {
    return (
        <>

        </>
    )
}

export default CrypoDetails