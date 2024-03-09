import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { text, languageCode, name } = await request.json();
  const apikey = process.env.GOOGLE_API_KEY;
  const endpoint = `https://texttospeech.googleapis.com/v1/text:synthesize?key=${apikey}`;
  const payload = {
    input: {
      text,
    },
    voice: {
      languageCode,
      name,
      // ssmlGender: "FEMALE",
    },
    audioConfig: {
      audioEncoding: "MP3",
    },
  };
  const response = await fetch(endpoint, {
    method: "POST",
    body: JSON.stringify(payload),
  }).then((res) => res.json());

  return NextResponse.json(response);
}
