import { db } from "./db";
import { inquiries, type InsertInquiry } from "@shared/schema";

export interface IStorage {
  createInquiry(inquiry: InsertInquiry): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async createInquiry(inquiry: InsertInquiry): Promise<void> {
    await db.insert(inquiries).values(inquiry);
  }
}

export const storage = new DatabaseStorage();
