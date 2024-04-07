import React from 'react'
import { ResponsiveLine } from '@nivo/line'
import { FormDesgin } from '../../Data/AnalysisData'

const FormsAna = () => {
    return (
        <div className="bg-white rounded-xl shadow-boxshade py-6 px-6">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                    <h2 className='font-Para font-bold text-xl'>Total Plan Buy</h2>
                </div>
                <div className='w-[100%] h-[250px]'>
                    <ResponsiveLine
                        data={FormDesgin}
                        margin={{ top: 0, right: 20, bottom: 50, left: 30 }}
                        xScale={{ type: 'point' }}
                        yScale={{
                            type: 'linear',
                        }}
                        curve="cardinal"
                        axisTop={null}
                        axisRight={null}
                        lineWidth={0}
                        colors={{ scheme: 'dark2' }}
                        pointSize={12}
                        pointColor={{ theme: 'background' }}
                        pointBorderWidth={2}
                        pointBorderColor={{ from: 'serieColor' }}
                        // pointLabelYOffset={-12}
                        enableArea={true}
                        areaOpacity={0.3}
                        enableTouchCrosshair={true}
                        useMesh={true}
                        legends={[
                            {
                                anchor: 'bottom',
                                direction: 'row',
                                justify: false,
                                translateX: 0,
                                translateY: 50,
                                itemsSpacing: 0,
                                itemDirection: 'left-to-right',
                                itemWidth: 80,
                                itemHeight: 20,
                                itemOpacity: 1,
                                symbolSize: 20,
                                symbolShape: 'circle',
                                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                            }
                        ]}
                    />
                </div>
            </div>
        </div>
    )
}

export default FormsAna