import type { IBillboard } from "@/types/billboard.interface"

export interface ICategory {
  id: string
  name: string
  slug: string
  billboard: IBillboard
}
