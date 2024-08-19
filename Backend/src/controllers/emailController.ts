import { Request, Response } from "express";
import xlsx from "xlsx";
import { sendEmail } from "../services/emailService";

export const sendEmails = async (req: Request, res: Response) => {
  const { email, name, company, template } = req.body;

  try {
    await sendEmail(email, name, company, template);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to send email", error });
  }
};

export const uploadExcel = async (req: Request, res: Response) => {
  const filePath = req.file?.path;

  if (!filePath) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  try {
    const workbook = xlsx.readFile(filePath);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const data = xlsx.utils.sheet_to_json(sheet) as {
      email: string;
      name: string;
      company: string;
    }[];

    for (const entry of data) {
      await sendEmail(
        entry.email,
        entry.name,
        entry.company,
        req.body.template
      );
    }
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to send email", error });
  }
};
