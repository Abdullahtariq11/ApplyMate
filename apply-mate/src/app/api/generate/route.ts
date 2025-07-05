import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import supabase from "@/lib/supabaseClient";
import { auth } from "@clerk/nextjs/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { resume, jobDescription } = body; // Make sure clerkUserId is sent from frontend!

  if (!resume || !jobDescription) {
    return NextResponse.json(
      { error: "Resume, job description, and user ID are required." },
      { status: 400 }
    );
  }

  const prompt = `You are a helpful assistant that writes personalized cover letters.
Given the following resume and job description, generate a cover letter.

Resume: ${resume}
Job Description: ${jobDescription}
Cover Letter:`;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    const result = completion.choices[0].message.content;

    try {
      
      const { error: dbError } = await supabase.from("cover_letters").insert({
        user_id: "userId",
        resume,
        job_desc: jobDescription,
        generated: result,
        status: "completed",
      });

      if (dbError) {
        console.error("Supabase insert error:", dbError);
        return NextResponse.json(
          { error: "Failed to save cover letter to database." },
          { status: 500 }
        );
      }
    } catch (err) {
      console.error("Unexpected Supabase insert error:", err);
      return NextResponse.json(
        { error: "Database insert crashed unexpectedly." },
        { status: 500 }
      );
    }

    return NextResponse.json({ result });
  } catch (error) {
    console.error("Error generating cover letter:", error);
    return NextResponse.json(
      { error: "Failed to generate cover letter." },
      { status: 500 }
    );
  }
}
