import { GridDirection } from "@mui/material";
import React from "react";
import {
    type CSSProperties,
    type MouseEventHandler,
    type ReactNode,
} from "react";



export interface ContainerProps {


    direction?: GridDirection | undefined;
    children: ReactNode;
    justifyContent?: string | any | {
        xs?: number | string;
        md?: number | string;
        lg?: number | string;
        xl?: number | string;
        sm?: number | string;
    };
    style?: any;
    columnSpacing?: number | {
        xs?: number;
        md?: number;
        lg?: number;
        xl?: number;
        sm?: number;
    };
    alignItems?: string;
    rowSpacing?: number | {
        xs?: number;
        md?: number;
        lg?: number;
        xl?: number;
        sm?: number;
    };
    sx?: any;
    gap?: number | {
        xs?: number;
        md?: number;
        lg?: number;
        xl?: number;
        sm?: number;
    }



    onClick?: any;

    xs?: number;
    md?: number;
    lg?: number;
    xl?: number;
    sm?: number;
}
export interface ItemProps {
    onClick?: any;
    style?: any,
    children: ReactNode;
    xs?: number;
    md?: number;
    sx?: any;
    lg?: number;
    xl?: number;
    sm?: number;
}
