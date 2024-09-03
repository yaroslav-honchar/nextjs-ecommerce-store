import type { AxiosRequestConfig } from "axios"
import type { IColor } from "@/types/color.interface"
import { coreService } from "@/services/core.service"

const ENDPOINT = "/colors"

export const getColors = async (config: AxiosRequestConfig = {}): Promise<IColor[]> => {
  const response = await coreService.get<IColor[]>(ENDPOINT, config)
  return response.data
}

export const getColor = async (colorId: string, config: AxiosRequestConfig = {}): Promise<IColor> => {
  const response = await coreService.get<IColor>(`${ENDPOINT}/${colorId}`, config)
  return response.data
}
