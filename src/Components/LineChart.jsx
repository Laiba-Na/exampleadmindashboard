import { ResponsiveLine } from "@nivo/line";
import { useTheme  } from '@mui/material/styles'
import {mockLineData as data} from '../data/mock'
import {tokens} from '../theme';

const LineChart = ({isDashboard = false})=> {

     const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    return (
       <ResponsiveLine /* or Line for fixed dimensions */
        data={data}
         theme={{
            axis:{
                domain:{
                    line:{
                        stroke: colors.Primary[100]
                    }
                },
                legend:{
                  text:{
                        fill: colors.Primary[100]
                    }
                },
                ticks:{
                    line:{
                        stroke: colors.Primary[100],
                        strokeWidth: 1
                    },
                    text:{
                          fill: colors.Primary[100]
                    }
                }
            },
            legends:{
                text:{
                    fill: colors.Primary[100]
                },
            },
            tooltip:{
                container:{
                    color: colors.Secondary[500]
                }
            }
        }}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        axisBottom={{legend : isDashboard? undefined : "transportation", legendOffset: 36   }}
        axisLeft={{ legend : isDashboard? undefined : "count", legendOffset: -40 , tickValues : 5 }}
        enableGridX={false}
        
        colors={{ scheme: 'green_blue' }}
        lineWidth={8}
        pointSize={15}
        pointColor= {colors.Primary[900]}
        pointBorderWidth={5}
        pointBorderColor={{ from: 'seriesColor' }}
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                translateX: 100,
                itemWidth: 80,
                itemHeight: 22,
                symbolShape: 'circle'
            }
        ]}
    />
    )
}


export default LineChart;