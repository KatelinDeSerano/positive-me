import React from "react";
import './chart.css';
import {connect} from "react-redux";
var BarChart = require('react-chartjs-2').Bar;

export class Chart extends React.Component {
    render() {
        let labels = this.props.journal.map(entry => {
            return entry.date; 
        });
        let negative = this.props.journal.map(entry => {
            return entry.negativeFeeling; 
        });
        let positive = this.props.journal.map(entry => {
            return entry.positiveFeeling; 
        });
        var chartData = {
            

            labels: labels,
            datasets: [
                {
                    label: "My Negative Feelings",
                    fillColor: "rgba(220,220,220,0.2)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
                    data: negative
                },
                {
                    label: "My Positive Feelings",
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data: positive
                }
            ]
        };
        const chartOptions = {
            scales: {
                xAxes: [{
                    stacked: true
                }],
                yAxes: [{
                    stacked: true
                }]
            },
            
            // ///Boolean - Whether grid lines are shown across the chart
            // scaleShowGridLines : false,
        
            // //String - Colour of the grid lines
            // scaleGridLineColor : "rgba(0,0,0,.05)",
        
            //Number - Width of the grid lines
            scaleGridLineWidth : 1,
        
            //Boolean - Whether to show horizontal lines (except X axis)
            scaleShowHorizontalLines: true,
        
            //Boolean - Whether to show vertical lines (except Y axis)
            scaleShowVerticalLines: true,
        
            //Boolean - Whether the line is curved between points
            bezierCurve : true,
        
            //Number - Tension of the bezier curve between points
            bezierCurveTension : 0.4,
        
            //Boolean - Whether to show a dot for each point
            pointDot : true,
        
            //Number - Radius of each point dot in pixels
            pointDotRadius : 4,
        
            //Number - Pixel width of point dot stroke
            pointDotStrokeWidth : 1,
        
            //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
            pointHitDetectionRadius : 20,
        
            //Boolean - Whether to show a stroke for datasets
            datasetStroke : true,
        
            //Number - Pixel width of dataset stroke
            datasetStrokeWidth : 2,
        
            //Boolean - Whether to fill the dataset with a colour
            datasetFill : true,
            
            //String - A legend template
            legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>",
        
            //Boolean - Whether to horizontally center the label and point dot inside the grid
            offsetGridLines : false
            
        };

        
        return (
            <div className="chart">
                <BarChart data={chartData} options={chartOptions} width={400} height={250} />
            </div>
        );
    }
};

const mapStateToProps = state => ({
    journal: state.positiveReducer.journal
});
export default connect(mapStateToProps)(Chart);
