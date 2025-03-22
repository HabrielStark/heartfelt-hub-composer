import * as React from "react"
import * as RechartsPrimitive from "recharts"

import { cn } from "@/lib/utils"

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode
    icon?: React.ComponentType
    color?: string
  }
}

export const Chart = RechartsPrimitive.ResponsiveContainer

function getThemeColors<K extends string>(
  config: ChartConfig,
  keys: K[]
): string[] {
  return keys.map(key => config[key]?.color || "#000000")
}

export const ChartBar = ({ config, ...props }: RechartsPrimitive.BarProps & { config: ChartConfig }) => {
  return <RechartsPrimitive.Bar {...props} fill="#9b87f5" />
}

export const ChartArea = React.forwardRef<
  React.ElementRef<typeof RechartsPrimitive.Area>,
  React.ComponentPropsWithoutRef<typeof RechartsPrimitive.Area> & { config: ChartConfig }
>(({ className, config, ...props }, ref) => (
  <RechartsPrimitive.Area
    ref={ref}
    className={cn("fill-primary-300 stroke-primary-900", className)}
    {...props}
  />
))
ChartArea.displayName = "ChartArea"

export const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("h-[300px] w-full", className)} {...props} />
))
ChartContainer.displayName = "ChartContainer"

export const ChartLegend = React.forwardRef<
  React.ElementRef<typeof RechartsPrimitive.Legend>,
  React.ComponentPropsWithoutRef<typeof RechartsPrimitive.Legend>
>(({ className, ...props }, ref) => (
  <RechartsPrimitive.Legend
    ref={ref}
    className={cn("text-xs", className)}
    {...props}
  />
))
ChartLegend.displayName = "ChartLegend"

export const ChartLine = React.forwardRef<
  React.ElementRef<typeof RechartsPrimitive.Line>,
  React.ComponentPropsWithoutRef<typeof RechartsPrimitive.Line> & {
    config: ChartConfig
  }
>(({ className, config, ...props }, ref) => (
  <RechartsPrimitive.Line
    ref={ref}
    className={cn("fill-transparent", className)}
    {...props}
  />
))
ChartLine.displayName = "ChartLine"

export const ChartXAxis = React.forwardRef<
  React.ElementRef<typeof RechartsPrimitive.XAxis>,
  React.ComponentPropsWithoutRef<typeof RechartsPrimitive.XAxis>
>(({ className, ...props }, ref) => (
  <RechartsPrimitive.XAxis
    ref={ref}
    axisLine={false}
    tickLine={false}
    tick={{ fontSize: 12 }}
    {...props}
  />
))
ChartXAxis.displayName = "ChartXAxis"

export const ChartYAxis = React.forwardRef<
  React.ElementRef<typeof RechartsPrimitive.YAxis>,
  React.ComponentPropsWithoutRef<typeof RechartsPrimitive.YAxis>
>(({ className, ...props }, ref) => (
  <RechartsPrimitive.YAxis
    ref={ref}
    className={cn("", className)}
    axisLine={false}
    tickLine={false}
    tick={{ fontSize: 12 }}
    width={40}
    {...props}
  />
))
ChartYAxis.displayName = "ChartYAxis"

export const ChartTooltip = React.forwardRef<
  React.ElementRef<typeof RechartsPrimitive.Tooltip>,
  React.ComponentPropsWithoutRef<typeof RechartsPrimitive.Tooltip>
>(({ className, ...props }, ref) => (
  <RechartsPrimitive.Tooltip
    ref={ref}
    wrapperClassName={cn("!outline-none", className)}
    {...props}
  />
))
ChartTooltip.displayName = "ChartTooltip"

export const ChartPie = React.forwardRef<
  React.ElementRef<typeof RechartsPrimitive.Pie>,
  React.ComponentPropsWithoutRef<typeof RechartsPrimitive.Pie> & {
    config: ChartConfig
  }
>(({ className, config, dataKey, nameKey, data, ...props }, ref) => {
  const keys = data?.map((item) => item[nameKey as keyof typeof item] as string) || []
  const colors = getThemeColors(config, keys as any)

  return (
    <RechartsPrimitive.Pie
      ref={ref}
      nameKey={nameKey}
      dataKey={dataKey}
      data={data}
      className={cn("", className)}
      {...props}
    />
  )
})
ChartPie.displayName = "ChartPie"
