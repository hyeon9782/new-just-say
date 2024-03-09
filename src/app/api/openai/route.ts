import { openai } from "@/lib/openai";
import { generateFunctions, generatePrompt } from "@/util/openai/openai";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { meaages, type, suggested } = await request.json();

    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo-0613",
      messages: [
        {
          role: "system",
          content: generatePrompt(type),
        },
        ...meaages,
      ],
      functions: generateFunctions(suggested),
      function_call: {
        name: "role_play",
      },
    });

    return NextResponse.json({
      status: 200,
      result: chatCompletion.choices[0].message.function_call?.arguments,
      token: chatCompletion.usage?.total_tokens,
      chatCompletion: chatCompletion,
    });
  } catch (error) {
    return NextResponse.json({
      status: 400,
      message: "GPT Fail",
      error,
    });
  }
}
