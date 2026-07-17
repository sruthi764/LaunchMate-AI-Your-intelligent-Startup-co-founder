import os
from dotenv import load_dotenv
import google.generativeai as genai

# Load API key
load_dotenv()

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

# Load Gemini model
model = genai.GenerativeModel("gemini-2.5-flash")

# Market Research Agent
def market_research(startup_idea):

    prompt = f"""
You are an experienced Market Research Expert.

Analyze the following startup idea and provide:

1. Startup Summary
2. Competitors
3. Target Customers
4. Market Demand
5. Strengths
6. Weaknesses
7. Risks
8. Growth Opportunities
9. Suggestions for Improvement

Startup Idea:
{startup_idea}
"""

    response = model.generate_content(prompt)

    return response.text