import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

interface IProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    series: Array<number | any>,
    labels: Array<string>,
}

const PieDonutChart = ({ series, labels }: IProps) => {

    const options: ApexOptions = {
        chart: {
            width: '100%',
            height: '100%',
            type: 'donut',
        },
        labels: labels,
        series: series,
    }


    return (
        <div id="chart" style={{
            width: "500px",
        }}>
            <Chart options={options} series={series} type="donut" width={"100%"} />
        </div>
    );
}

export default PieDonutChart;