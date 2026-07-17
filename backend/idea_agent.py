import os
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

model = genai.GenerativeModel("gemini-2.5-flash")

def generate_startup_idea(topic):

    prompt = f"""
You are a startup consultant.

Generate:
1. Startup Name
2. Problem Statement
3. Solution
4. Target Customers

Topic: {topic}
"""

    response = model.generate_content(prompt)

    return response.text