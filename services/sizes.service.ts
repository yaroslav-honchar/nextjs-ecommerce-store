import type { AxiosRequestConfig } from "axios"
import type { ISize } from "@/types/size.interface"
import { coreService } from "@/services/core.service"

const ENDPOINT = "/sizes"

export const getSizes = async (config: AxiosRequestConfig = {}): Promise<ISize[]> => {
  const response = await coreService.get<ISize[]>(ENDPOINT, config)
  return response.data
}

export const getSize = async (sizeId: string, config: AxiosRequestConfig = {}): Promise<ISize> => {
  const response = await coreService.get<ISize>(`${ENDPOINT}/${sizeId}`, config)
  return response.data
}
