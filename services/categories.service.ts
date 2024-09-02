import type { AxiosRequestConfig } from "axios"
import type { ICategory } from "@/types/category.interface"
import { coreService } from "@/services/core.service"

const ENDPOINT = "/categories"

export const getCategories = async (config: AxiosRequestConfig = {}): Promise<ICategory[]> => {
  const response = await coreService.get<ICategory[]>(ENDPOINT, config)
  return response.data
}

export const getCategory = async (categoryId: string, config: AxiosRequestConfig = {}): Promise<ICategory> => {
  const response = await coreService.get<ICategory>(`${ENDPOINT}/${categoryId}`, config)
  return response.data
}
