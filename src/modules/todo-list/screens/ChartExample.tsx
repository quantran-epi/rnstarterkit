import { Container } from '@components/container'
import React from 'react'
import { BarChart } from 'react-native-charts-wrapper';
import { processColor } from 'react-native';

export const ChartExample = () => {
    return (
        <Container>
            <BarChart
                style={{ flex: 1 }}
                data={{
                    dataSets: [{
                        values: [{ y: 100 }, { y: 105 }, { y: 102 }, { y: 110 }, { y: 114 }, { y: 109 }, { y: 105 }, { y: 99 }, { y: 95 }],
                        label: 'Bar dataSet',
                        config: {
                            color: processColor('teal'),
                            barShadowColor: processColor('lightgrey'),
                            highlightAlpha: 90,
                            highlightColor: processColor('red'),
                        }
                    }],

                    config: {
                        barWidth: 0.7,
                    }
                }}
                xAxis={{
                    valueFormatter: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                    granularityEnabled: true,
                    granularity: 1,
                }}
                animation={{ durationY: 1500 }}
                legend={{
                    enabled: true,
                    textSize: 14,
                    form: 'SQUARE',
                    formSize: 14,
                    xEntrySpace: 10,
                    yEntrySpace: 5,
                    formToTextSpace: 5,
                    wordWrapEnabled: true,
                    maxSizePercent: 0.5,
                    custom: { labels: ["dad", "dads"] }
                }}
                gridBackgroundColor={processColor('#ffffff')}
                visibleRange={{ x: { min: 5, max: 5 } }}
                drawBarShadow={false}
                drawValueAboveBar={true}
                onSelect={(event) => console.log("CHART SELECTED", event)}
                highlights={[{ x: 3 }, { x: 6 }]}
                chartDescription={{ text: "Chart description", textColor: processColor('red') }}
            />
        </Container>
    )
}