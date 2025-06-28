import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

/// Fetch the OpenAI API key from environment variables
/// and initialize the OpenAI client.
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { resume, jobDescription } = body;

  if (!resume || !jobDescription) {
    return NextResponse.json(
      { error: "Resume and job description are required." },
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
      store: true,
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });
    const result = completion.choices[0].message.content;
    return NextResponse.json({ result });
  } catch (error) {
    console.error("Error generating cover letter:", error);
    return NextResponse.json(
      { error: "Failed to generate cover letter." },
      { status: 500 }
    );
  }
}
