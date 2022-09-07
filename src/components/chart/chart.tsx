import React, {FC, useEffect, useState} from 'react';
import { Line } from 'react-chartjs-2';
import {
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip
} from "chart.js";
import axios from "axios";
import {useTypeSelector} from "../../hooks/useTypeSelector";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const Chart: FC = () => {
    const {singleCoin} = useTypeSelector(state => state.AllCoinsReducer)


    useEffect(() => {
        fetch();
    },[]);

    const [dailyPrice, setDailyPrice] = useState<any>([]);

    const clearPrices = (arr: any[]) => {
        const clearArr: number[] = [];

        arr = arr.reverse();
        arr.length = 7;

        arr.forEach((item: any) => {
            clearArr.push(item.priceUsd)
        })

        setDailyPrice(clearArr.map((i:number) => Number(i).toFixed(6)))
    }

    const fetch = async () => {
        try {
            const res = await axios.get(`https://api.coincap.io/v2/assets/${singleCoin.id}/history?interval=d1`);
            clearPrices(res.data.data)

        } catch (e) {
            console.log(e)
        }
    }

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
            },
        },
    };

    const labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const data = {
        labels,
        datasets: [
            {
                label: 'Daily pricing',
                data: dailyPrice,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };


    return (
        <div>
            <Line data={data} options={options} />
        </div>
    );
};

export default Chart;