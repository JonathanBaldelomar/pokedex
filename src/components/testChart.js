import { padding } from '@mui/system';
import {
    Chart as CharJS,
    LineElement,
    PointElement,
    Tooltip,
    Legend,
    RadialLinearScale
  } from 'chart.js';
import { Radar } from 'react-chartjs-2';

CharJS.register(
    LineElement,
    PointElement,
    Tooltip,
    Legend,
    RadialLinearScale
)

function RadarFunction() {
    const data = {
        labels: ['a','b','c'],
        datasets: [{
            label: 'PokeApi',
            data: [1, 2, 3, 4, 5],
            backgroundColor: 'aqua',
            borderColor: 'black'
        }]
    }

    const options = {

    }

    return (
        <div className="RadarFunction">
            <div style= { {with: '50px', padding: 20 } }>
                <Radar
                    data = {data}
                    options = {options}
                ></Radar>
            </div>
        </div>
    );
};

export default RadarFunction;