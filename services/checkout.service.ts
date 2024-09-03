import type { AxiosRequestConfig } from "axios"
import { coreService } from "@/services/core.service"

const ENDPOINT = "/checkout"

export const sendCheckout = async (
  productIds: string[],
  config: AxiosRequestConfig = {},
): Promise<{ url: Location }> => {
  const response = await coreService.post(`${ENDPOINT}`, productIds, config)
  return response.data
}
