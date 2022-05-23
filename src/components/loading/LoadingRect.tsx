import React from 'react';
import { useSelectTheme } from '../../hooks/useSelectTheme';
interface LoadingProps{
    size?: number;
    style?: React.CSSProperties;
}

export const LoadingRect = ( { size=100 , style }:LoadingProps) => {

    const { colors } = useSelectTheme().theme;

  return (
    <>
    {/* <xml version="1.0" encoding="utf-8"/> */}
    <svg xmlns="http://www.w3.org/2000/svg" style={{
        margin: 'auto',
        background: 'none',
        display: 'block',
        shapeRendering: 'auto',
        width: size,
        height: size,
        ...style
    }}  viewBox="0 0 100 100" 
        preserveAspectRatio="xMidYMid"
        >
        
        <rect x={size/5} y={size/6.6} width={size/10} height={size/2} fill={colors.particlesColor[0]}>
        <animate attributeName="y" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="18;30;30" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.2s"></animate>
        <animate attributeName="height" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="64;40;40" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.2s"></animate>
        </rect>
        <rect 
        x={size/2.22} y={size/6.6} width={size/10} height={size/2} fill={colors.particlesColor[1]}>
        <animate attributeName="y" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="20.999999999999996;30;30" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.1s"></animate>
        <animate attributeName="height" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="58.00000000000001;40;40" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.1s"></animate>
        </rect>
        <rect x={size/1.42}y={size/6.6} width={size/10} height={size/2} fill={colors.particlesColor[2]}>
        <animate attributeName="y" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="20.999999999999996;30;30" keySplines="0 0.5 0.5 1;0 0.5 0.5 1"></animate>
        <animate attributeName="height" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="58.00000000000001;40;40" keySplines="0 0.5 0.5 1;0 0.5 0.5 1"></animate>
        </rect>
    </svg>
    </>
  )
}
