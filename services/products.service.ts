import type { AxiosRequestConfig } from "axios"
import type { IProduct } from "@/types/product.interface"
import { coreService } from "@/services/core.service"

const ENDPOINT = "/products"

export const getProducts = async (config: AxiosRequestConfig = {}): Promise<IProduct[]> => {
  const response = await coreService.get<IProduct[]>(ENDPOINT, config)
  return response.data
}

export const getProduct = async (productId: string, config: AxiosRequestConfig = {}): Promise<IProduct> => {
  const response = await coreService.get<IProduct>(`${ENDPOINT}/${productId}`, config)
  return response.data
}
