import os
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

model = genai.GenerativeModel("gemini-2.5-flash")

def mentor_advice(startup_idea):

    prompt = f"""
You are an experienced Startup Mentor.

Analyze the following startup idea and provide:

1. Startup Score (out of 10)
2. Strengths
3. Weaknesses
4. Potential Risks
5. Suggestions for Improvement
6. Next Steps
7. Final Advice

Startup Idea:
{startup_idea}
"""

    response = model.generate_content(prompt)

    return response.text