import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

// Data retrieved from https://netmarketshare.com


export const Graph = ({amountPercentage, interestPayPercentage}) => {

	// const options = {
	// 	title: {
	// 		text: 'My chart'
	// 	},
	// 	series: [{
	// 		data: [1, 2, 3]
	// 	}]
	// };

	const options = {
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false,
			type: 'pie',
			width: 300,
			height: 300
		},
		title: {
			text: ''
		},
		tooltip: {
			pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		},
		accessibility: {
			point: {
				valueSuffix: '%'
			}
		},
		plotOptions: {
			pie: {
				allowPointSelect: false,
				cursor: 'pointer',
				dataLabels: {
					enabled: false,
					format: '{point.percentage:.1f} %'
				}
			}
		},
		series: [{
			name: '',
			colorByPoint: true,
			data: [{
				name: 'Principal Amount',
				y: parseFloat(amountPercentage),
				sliced: true,
				selected: true
			}, {
				name: 'Interest Amount',
				y: parseFloat(interestPayPercentage)
			}]
		}]
	}

	return (
		<HighchartsReact
			highcharts={Highcharts}
			options={options}
		/>
	)
}