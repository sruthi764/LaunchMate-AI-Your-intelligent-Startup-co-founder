import os
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

model = genai.GenerativeModel("gemini-2.5-flash")

def finance_analysis(startup_idea):

    prompt = f"""
You are a Startup Finance Expert.

Analyze the following startup idea and provide:

1. Estimated Initial Investment
2. Monthly Expenses
3. Expected Revenue
4. Estimated Profit
5. Break-even Time
6. Funding Sources
7. Financial Risks
8. Cost Saving Suggestions

Startup Idea:
{startup_idea}
"""

    response = model.generate_content(prompt)

    return response.text