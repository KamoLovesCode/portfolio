import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { message, context } = await request.json()

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({ error: "API key not configured" }, { status: 500 })
    }

    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-goog-api-key": process.env.GEMINI_API_KEY,
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `${context}\n\nUser question: ${message}`,
                },
              ],
            },
          ],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          },
        }),
      },
    )

    if (!response.ok) {
      const errorText = await response.text()
      console.error("Gemini API Error:", response.status, errorText)
      return NextResponse.json({ error: "Failed to get response from AI" }, { status: 500 })
    }

    const data = await response.json()

    if (data.candidates && data.candidates[0] && data.candidates[0].content && data.candidates[0].content.parts) {
      return NextResponse.json({
        response: data.candidates[0].content.parts[0].text,
      })
    } else {
      console.error("Invalid response structure:", data)
      return NextResponse.json({ error: "Invalid response from AI" }, { status: 500 })
    }
  } catch (error) {
    console.error("API Route Error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
