import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post(api.inquiries.create.path, async (req, res) => {
    try {
      const input = api.inquiries.create.input.parse(req.body);
      await storage.createInquiry(input);

      try {
        await transporter.sendMail({
          from: `"Ready Desk Services" <${process.env.GMAIL_USER}>`,
          to: "reliableparalegalco@gmail.com",
          replyTo: input.email,
          subject: `New Inquiry from ${input.name}`,
          html: `
            <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 30px; background: #f5ede0; border-radius: 8px;">
              <h2 style="color: #5c3d2e; border-bottom: 2px solid #c27a4a; padding-bottom: 10px;">New Project Inquiry</h2>
              <p style="color: #5c3d2e;"><strong>Name:</strong> ${input.name}</p>
              <p style="color: #5c3d2e;"><strong>Email:</strong> ${input.email}</p>
              <p style="color: #5c3d2e;"><strong>Message:</strong></p>
              <div style="background: white; padding: 15px; border-radius: 6px; border-left: 3px solid #c27a4a; color: #333;">
                ${input.message.replace(/\n/g, "<br/>")}
              </div>
              <p style="color: #999; font-size: 12px; margin-top: 20px;">Sent from Ready Desk Services landing page</p>
            </div>
          `,
        });
      } catch (emailErr) {
        console.error("Email send failed:", emailErr);
      }

      res.json({ success: true, message: "Inquiry received" });
    } catch (err) {
      if (err instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid input" });
        return;
      }
      res.status(500).json({ message: "Internal server error" });
    }
  });

  return httpServer;
}
