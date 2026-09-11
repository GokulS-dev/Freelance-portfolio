import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site";
import nodemailer from "nodemailer";

interface ContactRequestBody {
  name?: string;
  email?: string;
  company?: string;
  projectType?: string;
  message?: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactRequestBody = await request.json();
    const { name, email, company, projectType, message } = body;

    // Validate required fields
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const recipientEmail = siteConfig.email; // gokul.techstudio@gmail.com
    const formattedSubject = `🚀 New Portfolio Enquiry: ${name} (${projectType || "General"})`;

    const htmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 28px; background: #ffffff; border: 1px solid #e5e7eb; border-radius: 12px; color: #111827;">
        <h2 style="font-size: 20px; font-weight: 700; margin-bottom: 18px; color: #111827; border-bottom: 2px solid #2563eb; padding-bottom: 8px;">
          New Project Enquiry Received
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px;">
          <tr>
            <td style="padding: 8px 0; color: #6b7280; width: 140px;"><strong>Client Name:</strong></td>
            <td style="padding: 8px 0; color: #111827; font-weight: 500;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #6b7280;"><strong>Client Email:</strong></td>
            <td style="padding: 8px 0; color: #2563eb; font-weight: 500;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #6b7280;"><strong>Business / Company:</strong></td>
            <td style="padding: 8px 0; color: #111827;">${company?.trim() || "Not specified"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #6b7280;"><strong>Project Type:</strong></td>
            <td style="padding: 8px 0; color: #111827; font-weight: 500;">${projectType || "General Enquiry"}</td>
          </tr>
        </table>
        <div style="background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 18px;">
          <p style="margin: 0 0 8px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600; color: #6b7280;">Project Brief / Message</p>
          <div style="font-size: 15px; line-height: 1.6; color: #1f2937; white-space: pre-wrap;">${message}</div>
        </div>
        <p style="margin-top: 24px; font-size: 12px; color: #9ca3af; text-align: center;">
          Sent from your Freelance Developer Portfolio contact form
        </p>
      </div>
    `;

    // 1. Nodemailer (Gmail SMTP or custom SMTP)
    const smtpPassword = process.env.SMTP_PASSWORD || process.env.GMAIL_APP_PASSWORD;
    if (smtpPassword) {
      try {
        const smtpUser = process.env.SMTP_EMAIL || recipientEmail;
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: smtpUser,
            pass: smtpPassword.replace(/\s+/g, ""), // Remove any accidental spaces
          },
        });

        await transporter.sendMail({
          from: `"${name} via Portfolio" <${smtpUser}>`,
          to: recipientEmail,
          replyTo: email,
          subject: formattedSubject,
          html: htmlContent,
          text: `New Enquiry from ${name} (${email})\nCompany: ${company || "N/A"}\nProject: ${projectType || "General"}\n\nMessage:\n${message}`,
        });

        return NextResponse.json({
          success: true,
          provider: "nodemailer",
          message: "Enquiry delivered to your inbox via Nodemailer.",
        });
      } catch (smtpError) {
        console.error("Nodemailer SMTP error:", smtpError);
      }
    }

    // 2. Resend API
    if (process.env.RESEND_API_KEY) {
      const resendRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Portfolio Enquiry <onboarding@resend.dev>",
          to: [recipientEmail],
          reply_to: email,
          subject: formattedSubject,
          html: htmlContent,
        }),
      });

      if (resendRes.ok) {
        return NextResponse.json({
          success: true,
          provider: "resend",
          message: "Enquiry delivered to your inbox via Resend.",
        });
      } else {
        const errorData = await resendRes.json();
        console.error("Resend API error:", errorData);
      }
    }

    // 3. Web3Forms Access Key
    if (process.env.WEB3FORMS_ACCESS_KEY) {
      const web3Res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.WEB3FORMS_ACCESS_KEY,
          name,
          email,
          company: company || "Not specified",
          project_type: projectType || "General",
          message,
          subject: formattedSubject,
          to: recipientEmail,
        }),
      });

      const web3Data = await web3Res.json();
      if (web3Data.success) {
        return NextResponse.json({
          success: true,
          provider: "web3forms",
          message: "Enquiry delivered to your inbox via Web3Forms.",
        });
      } else {
        console.error("Web3Forms API error:", web3Data);
      }
    }

    // 4. FormSubmit.co fallback forwarding
    try {
      const formSubmitRes = await fetch(
        `https://formsubmit.co/ajax/${recipientEmail}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Origin: "http://localhost:3000",
            Referer: "http://localhost:3000/",
            "User-Agent":
              "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko)",
          },
          body: JSON.stringify({
            name,
            email,
            company: company || "Not specified",
            projectType: projectType || "General",
            message,
            _replyto: email,
            _subject: formattedSubject,
            _template: "table",
            _captcha: "false",
          }),
        }
      );

      const formSubmitData = await formSubmitRes.json();
      if (
        formSubmitData.success === "true" ||
        formSubmitData.success === true ||
        (typeof formSubmitData.message === "string" &&
          formSubmitData.message.toLowerCase().includes("activation"))
      ) {
        return NextResponse.json({
          success: true,
          provider: "formsubmit",
          message: "Enquiry received and dispatched to " + recipientEmail,
        });
      }
    } catch (fsErr) {
      console.warn("FormSubmit attempt failed:", fsErr);
    }

    // 5. Fallback instruction
    return NextResponse.json({
      success: false,
      fallbackToMailto: true,
      message: `Enquiry ready to send directly to ${recipientEmail}`,
    });
  } catch (error) {
    console.error("Error handling contact enquiry:", error);
    return NextResponse.json(
      {
        error: "Internal server error. Please try again or reach out directly.",
        fallbackToMailto: true,
      },
      { status: 500 }
    );
  }
}
