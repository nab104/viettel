import React from "react";

export interface ProvinceData {
  id: string;
  name: string;
  width: string;
  height: string;
  top: number;
  left: number;
  svg: React.ReactNode;
  dotX?: number;
  dotY?: number;
}
