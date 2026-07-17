import os
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

model = genai.GenerativeModel("gemini-2.5-flash")

def marketing_strategy(startup_idea):

    prompt = f"""
You are an expert Startup Marketing Consultant.

Analyze the startup idea and provide:

1. Target Audience
2. Marketing Channels
3. Social Media Strategy
4. Branding Ideas
5. Pricing Strategy
6. Promotional Activities
7. Customer Acquisition Plan
8. Marketing Tips

Startup Idea:
{startup_idea}
"""

    response = model.generate_content(prompt)

    return response.text