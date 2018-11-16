//if ($('#chart-area').length > 0) {
//    var $cutoutPercentage = 72;
//    if ($('#chart-area').closest('.modal').length) {
//        $cutoutPercentage = 60
//    }
//    var config = {
//        type: 'doughnut',
//        data: {
//            datasets: [{
//                data: [
//                          // options segments
//                          17,
//                          35,
//                          30,
//                          15
//                      ],
//                backgroundColor: [
//                          // colors bg
//                          '#82bcff',
//                          '#31c966',
//                          '#3076f6',
//                          '#4ae2d5'
//                      ],
//                borderWidth: 0
//                  }]
//        },
//        options: {
//            showAllTooltips: true,
//            animation: {
//                animateScale: true,
//                animateRotate: true
//            },
//            cutoutPercentage: $cutoutPercentage, // distance from center
//            tooltips: {
//                enabled: false,
//                backgroundColor: "rgba(0,0,0,0)",
//                callbacks: {
//
//                    label: function (tooltipItem, data) {
//                        var datasetLabel = "";
//                        var label = data.labels[tooltipItem.index];
//                        return data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] + '%';
//                    }
//
//                }
//            },
//
//
//        }
//    };
//    Chart.plugins.register({
//        beforeRender: function (chart) {
//            if (chart.config.options.showAllTooltips) {
//                // create an array of tooltips
//                // we can't use the chart tooltip because there is only one tooltip per chart
//                chart.pluginTooltips = [];
//                chart.config.data.datasets.forEach(function (dataset, i) {
//                    chart.getDatasetMeta(i).data.forEach(function (sector, j) {
//                        chart.pluginTooltips.push(
//                            new Chart.Tooltip({
//                                    _chart: chart.chart,
//                                    _chartInstance: chart,
//                                    _data: chart.data,
//                                    _options: chart.options.tooltips,
//                                    _active: [sector]
//                                },
//                                chart
//                            )
//                        );
//                    });
//                });
//
//                // turn off normal tooltips
//                chart.options.tooltips.enabled = false;
//            }
//        },
//        afterDraw: function (chart, easing) {
//            if (chart.config.options.showAllTooltips) {
//                // we don't want the permanent tooltips to animate, so don't do anything till the animation runs atleast once
//                if (!chart.allTooltipsOnce) {
//                    if (easing !== 1) return;
//                    chart.allTooltipsOnce = true;
//                }
//
//                // turn on tooltips
//                chart.options.tooltips.enabled = true;
//                Chart.helpers.each(chart.pluginTooltips, function (tooltip) {
//                    tooltip.initialize();
//                    tooltip._options.bodyFontFamily = "PTSans', sans-serif"
//                    tooltip._options.displayColors = false;
//                    tooltip._options.bodyFontSize = tooltip._chart.height * 0.06;
//                    tooltip._options.mode = 'point',
//                        tooltip._options.yPadding = 0;
//                    tooltip._options.xPadding = -10;
//                    tooltip._options.position = 'average';
//                    tooltip._options.bodySpacing = 0;
//                    tooltip._options.caretPadding = 0;
//
//
//                    tooltip._options.caretSize = 0;
//                    //tooltip._options.cornerRadius = tooltip._options.bodyFontSize * 0.5;
//                    tooltip.update();
//                    // we don't actually need this since we are not animating tooltips
//                    tooltip.pivot();
//                    tooltip.transition(easing).draw();
//                });
//                chart.options.tooltips.enabled = false;
//            }
//        }
//    });
//
//    var randomScaling
//    window.onload = function () {
//        var ctx = document.getElementById('chart-area').getContext('2d');
//        window.myDoughnut = new Chart(ctx, config);
//    };
//
//}
$(function () {
var categ=["Декабрь", "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль"];
    $('#expertise__graph').highcharts({
        chart: {
            type: 'areaspline',
            marginBottom: 0,
            marginLeft: 0,
            marginRight: 0
        },
        credits: {
            enabled: false,
        },
        title: {
            text: null,
            x: -20
        },
        xAxis: {
            categories: categ,
            gridLineWidth: 0,
            minorTickWidth: 0,
            labels: {
                distance: -20,
                style: {
                    fontSize: '14px',
                    color: "rgba(0, 0, 0, 0.42)",
                },
            },
            endOnTick: false,
            maxPadding: 0,
            showFirstLabel: false,
            showLastLabel: false,
             min: 0.5,
            max: categ.length-1.5
        },
        yAxis: {
            id: 1,
            title: {
                text: null
            },
            labels: {
                enabled: false,
                useHTML: true
            },
            gridLineWidth: 1,
            gridLineColor: 'transparent',
            maxPadding: 0,
            legend: {
                enabled: false,
                padding: 0
            }

        },
        tooltip: {
            formatter: function () {
                var nosheets = this.y.toLocaleString();
                return nosheets + ' экспертиз';
            },
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            borderWidth: 0,
            shadow: false,
            borderRadius: 5,
            borderWidth: 0,
            padding: 7,
            style: {
                color: "#fff",
                fontSize: '14px'
            }
        },
        legend: {
            enabled: false,
            padding: 0,
        },

        plotOptions: {
            area: {
                pointStart: 65,
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    radius: 12,
                    zIndex: 3,
                    states: {
                        hover: {
                            enabled: true,
                        },
                    },
                },
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                                [0, 'rgba(130, 188, 255, 0)'],
                                [1, 'rgba(63, 152, 255, 0.59)']
                            ]
                },
                borderColor: "#fff",
                borderRadius: 60,
            },
            spline: {

                marker: {
                    radius: 5,
                    lineColor: '#0085e1',
                    lineWidth: 1
                }
            },
            series: {
                pointWidth: 1,
                marker: {
                    fillColor: '#d2e7ff',
                    lineColor: "#fff",
                    lineWidth: 2,
                    radius: 8,
                    states: {
                        hover: {
                            fillColor: "#82bcff",
                            radius: 10,
                        },
                    },
                },

                point: {
                    events: {
                        click: function(event) {
                            console.log(this);
                            if (previousPoint) {alert(1)
                                previousPoint.update({ color: '#7cb5ec' });
                            }
                            previousPoint = this;
                            this.update({ color: '#fe5800' });
                            }
                    }
                }
            },
            point: {
                events: {
                    mouseover: function () {
                        var id = this.eq(),
                            point = $(".highcharts-column-series .highcharts-point"),
                            eq_point = point.eq(id);
                        eq_point.color('#000');
                        console.log(id, point, eq_point);
                        //                        "highcharts-point"
                        //                        target.states.hover.color("#58a5ff");

                    },
                },
            },
        },
        series: [{
                color: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [[0, 'rgba(63, 152, 255, 0.59)'],
                                [1, 'rgba(130, 188, 255, 0.05)']
                            ]
                },
                data: [0, 50, 70, 150, 190, 140, 158, 160],
                zIndex: 3,

            },
            {
                type: 'column',
                color: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [[0, 'rgba(88, 165, 255, 0.21)'],
                                [1, 'rgba(49, 201, 102, 0.1)']
                            ],
                    },
                yAxis: 1,
                data: [0, 50, 70, 150, 190, 140, 158, 160],
                zIndex: 1,
                borderWidth: 0,
                states: {
                    hover: {
                        pointWidth: 2,
                        color: "#58a5ff",
                    },
                },
    }],
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 899,
                },
                chartOptions: {
                    xAxis: {
                        categories: ["Дек","Янв", "Фев", "Мар", "Апр", "Май", "Июнь", "Июль"],
                        
                    }
                }
            }]
        }
    });

    //remove first marker 
    if ($('.highcharts-markers > path:first-child').length) {
        $('.highcharts-markers > path:first-child').remove();
    }
    if ($('.highcharts-markers > path:last-child').length) {
        $('.highcharts-markers > path:last-child').remove();
    }
});
