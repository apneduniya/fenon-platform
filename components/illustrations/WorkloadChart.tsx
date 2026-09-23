// Illustrative workload shape traced from the design (plot area 515×135 at x 772, y 2093 on the 1440 frame).
const GRID_Y = [0, 43.2, 86, 128.5]
const AXIS_Y = 135.2

const REQUESTS: [number, number][] = [
  [0, 113.6], [40.1, 113.6], [40.1, 91.6], [79.4, 91.6], [79.4, 47.1], [140.7, 47.1], [140.7, 15.7],
  [188.2, 15.7], [188.2, 58.5], [227.9, 58.5], [227.9, 71.5], [280.1, 71.5], [280.1, 27.1], [334, 27.1],
  [334, 1.2], [383.9, 1.2], [383.9, 49.9], [435.4, 49.9], [435.4, 101.8], [514.7, 101.8],
]

const COMPUTE: [number, number][] = [
  [0, 119], [34.6, 117.9], [64.8, 93.5], [83.3, 93.5], [122.6, 51.9], [145.4, 53], [178.8, 22.4], [194.5, 24.4],
  [235.8, 67.6], [265.2, 73.9], [271.1, 72.7], [316.3, 30.6], [337.9, 30.6], [365.4, 9.8], [374.1, 9], [387, 11],
  [422.4, 56.9], [436.1, 60.9], [479.4, 107.6], [514.7, 107.6],
]
const PEAK = COMPUTE[14]

// Horizontal-tangent cubic between knots gives the eased plateaus-and-ramps shape of the design.
function smoothPath(points: [number, number][]) {
  return points.reduce((d, [x, y], i) => {
    if (i === 0) return `M${x} ${y}`
    const [px, py] = points[i - 1]
    const mx = (px + x) / 2
    return `${d} C${mx} ${py} ${mx} ${y} ${x} ${y}`
  }, "")
}

const stepPath = REQUESTS.map(([x, y], i) => `${i ? "L" : "M"}${x} ${y}`).join(" ")

export function WorkloadChart({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 515 136" className={className} aria-hidden="true" preserveAspectRatio="none">
      <g stroke="var(--border)" strokeWidth="1" vectorEffect="non-scaling-stroke">
        {GRID_Y.map((y) => (
          <line key={y} x1="0" x2="515" y1={y} y2={y} vectorEffect="non-scaling-stroke" />
        ))}
        <line x1="0" x2="515" y1={AXIS_Y} y2={AXIS_Y} vectorEffect="non-scaling-stroke" />
        <line x1="0.5" x2="0.5" y1="0" y2={AXIS_Y} vectorEffect="non-scaling-stroke" />
      </g>
      <path
        d={stepPath}
        fill="none"
        stroke="var(--chart-2)"
        strokeWidth="1.25"
        strokeDasharray="4 4"
        vectorEffect="non-scaling-stroke"
      />
      <path d={smoothPath(COMPUTE)} fill="none" stroke="var(--chart-1)" strokeWidth="2" vectorEffect="non-scaling-stroke" />
      <circle cx={PEAK[0]} cy={PEAK[1]} r="3.9" fill="var(--chart-1)" />
    </svg>
  )
}
