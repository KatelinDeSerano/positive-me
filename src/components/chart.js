import React from "react";
import './chart.css';
import { connect } from "react-redux";
var BarChart = require('react-chartjs-2').Bar;

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export class Chart extends React.Component {

    render() {
        let labels = this.props.journal.map(entry => {
            let date = new Date(entry.date);
            let month = date.getMonth();
            let dt = date.getDate();
            if (dt < 10) {
                dt = '0' + dt;
            }
            let day = months[month] + " " + dt;
            return day;
        });
        let negative = this.props.journal.map(entry => {
            return -entry.emojiValue1;
        });
        let positive = this.props.journal.map(entry => {
            return entry.emojiValue2;
        });
        var chartData = {


            labels: labels,
            datasets: [
                {
                    label: "Negativity",
                    backgroundColor: "rgb(51, 189, 175)",
                    borderColorr: "rgb(51, 189, 175)",
                    borderWidth: 1,
                    hoverBackgroundColor: "rgb(51, 189, 175)",
                    hoverBorderColor: "rgb(51, 189, 175)",
                    data: negative
                },
                {
                    label: "Positivity",
                    backgroundColor: 'rgb(239, 237, 81)',
                    borderColor: 'rgb(239, 237, 81)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgb(239, 237, 81)',
                    hoverBorderColor: 'rgb(239, 237, 81)',
                    data: positive
                }
            ]
        };
        const chartOptions = {
            scales: {
                xAxes: [{
                    stacked: true,
                    time: {
                        displayFormats: {
                            day: "MMM D"
                        }
                    }
                }],
                yAxes: [{
                    stacked: true
                }]
            },

            //Number - Width of the grid lines
            scaleGridLineWidth: 1,

            //Boolean - Whether to show horizontal lines (except X axis)
            scaleShowHorizontalLines: true,

            //Boolean - Whether to show vertical lines (except Y axis)
            scaleShowVerticalLines: true,

            //Boolean - Whether the line is curved between points
            bezierCurve: true,

            //Number - Tension of the bezier curve between points
            bezierCurveTension: 0.4,

            //Boolean - Whether to show a dot for each point
            pointDot: true,

            //Number - Radius of each point dot in pixels
            pointDotRadius: 4,

            //Number - Pixel width of point dot stroke
            pointDotStrokeWidth: 1,

            //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
            pointHitDetectionRadius: 20,

            //Boolean - Whether to show a stroke for datasets
            datasetStroke: true,

            //Number - Pixel width of dataset stroke
            datasetStrokeWidth: 2,

            //Boolean - Whether to fill the dataset with a colour
            datasetFill: true,

            //String - A legend template
            legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>",

            //Boolean - Whether to horizontally center the label and point dot inside the grid
            offsetGridLines: false

        };


        return (
            <div className="chart">
                <BarChart data={chartData} options={chartOptions} width={400} height={200} />
            </div>
        );
    }
};

const mapStateToProps = state => ({
    journal: state.positiveReducer.journal
});
export default connect(mapStateToProps)(Chart);
