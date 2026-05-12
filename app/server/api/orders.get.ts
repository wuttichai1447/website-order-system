/// <reference types="node" />
import { readFile } from 'fs/promises'
import { join } from 'path'

interface Order {
  id: string
  customerName: string
  email: string
  phone: string
  serviceType: string
  projectDescription: string
  budget: string
  deadline?: string
  additionalNotes?: string
  createdAt: string
  status?: 'pending' | 'in-progress' | 'completed' | 'cancelled'
}

const ORDERS_FILE = join(process.cwd(), 'data', 'orders.json')

async function readOrders(): Promise<Order[]> {
  try {
    const data = await readFile(ORDERS_FILE, 'utf-8')
    return JSON.parse(data)
  } catch {
    return []
  }
}

export default defineEventHandler(async (_event) => {
  const orders = await readOrders()

  // Sort by createdAt descending (newest first)
  orders.sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  })

  return {
    success: true,
    orders,
    total: orders.length
  }
})
