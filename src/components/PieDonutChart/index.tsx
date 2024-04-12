import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const PieDonutChart = () => {

    const series = [44, 55, 41, 17, 15];

    const options: ApexOptions = {
        chart: {
            width: '100%',
            height: '100%',
            type: 'donut',
        }
    }

    return (
        <div id="chart" style={{
            width: "500px",
        }}>
            <Chart options={options} series={series} type="donut" width={"100%"}/>
        </div>
    );
}

export default PieDonutChart;