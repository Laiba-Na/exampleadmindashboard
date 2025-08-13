import { ResponsivePie } from "@nivo/pie";
import { useTheme  } from '@mui/material/styles'
import {mockPieData as data} from '../data/mock'
import {tokens} from '../theme';

const PieChart = ()=> {

    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

    return (
        <ResponsivePie 
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
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.6}
        cornerRadius={2}
        activeOuterRadiusOffset={8}
        colors={{ scheme: 'green_blue' }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={colors.lightColor[100]}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        enableArcLabels={false}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                translateY: 56,
                itemWidth: 100,
                itemHeight: 18,
                symbolShape: 'circle'
            }
        ]}
    />
    )
}


export default PieChart;