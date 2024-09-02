import type { AxiosRequestConfig } from "axios"
import type { IBillboard } from "@/types/billboard.interface"
import { coreService } from "@/services/core.service"

const ENDPOINT = "/billboards"

export const getBillboards = async (config: AxiosRequestConfig = {}): Promise<IBillboard[]> => {
  const response = await coreService.get<IBillboard[]>(ENDPOINT, config)
  return response.data
}

export const getBillboard = async (billboardId: string, config: AxiosRequestConfig = {}): Promise<IBillboard> => {
  const response = await coreService.get<IBillboard>(`${ENDPOINT}/${billboardId}`, config)
  return response.data
}
