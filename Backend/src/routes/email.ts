import express from "express";
import multer from "multer";
import { authenticateToken } from "../middleware/auth";
import { sendEmails, uploadExcel } from "../controllers/emailController";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/send", authenticateToken, sendEmails);
router.post("/upload", authenticateToken, upload.single("file"), uploadExcel);

export default router;
