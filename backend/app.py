from fastapi import FastAPI
from agent import ask_gemini
from database import engine, SessionLocal
from models import Base, ChatHistory

from idea_agent import generate_startup_idea
from market_agent import market_research
from finance_agent import finance_analysis
from marketing_agent import marketing_strategy
from mentor_agent import mentor_advice
from report_generator import generate_report

app = FastAPI()

Base.metadata.create_all(bind=engine)


@app.get("/")
def home():
    return {"message": "LaunchMate AI is running!"}


@app.get("/ask")
def ask(question: str):
    answer = ask_gemini(question)

    db = SessionLocal()

    chat = ChatHistory(
        question=question,
        answer=answer
    )

    db.add(chat)
    db.commit()
    db.close()

    return {
        "question": question,
        "answer": answer
    }


@app.get("/idea")
def idea(topic: str):
    result = generate_startup_idea(topic)
    return {"idea": result}


@app.get("/market")
def market(startup_idea: str):
    result = market_research(startup_idea)
    return {
        "startup_idea": startup_idea,
        "market_research": result
    }


@app.get("/finance")
def finance(startup_idea: str):
    result = finance_analysis(startup_idea)
    return {
        "startup_idea": startup_idea,
        "finance_report": result
    }


@app.get("/marketing")
def marketing(startup_idea: str):
    result = marketing_strategy(startup_idea)
    return {
        "startup_idea": startup_idea,
        "marketing_report": result
    }


@app.get("/mentor")
def mentor(startup_idea: str):
    result = mentor_advice(startup_idea)
    return {
        "startup_idea": startup_idea,
        "mentor_report": result
    }
@app.get("/report")
def report(startup_idea: str):

    idea = generate_startup_idea(startup_idea)

    market = market_research(startup_idea)

    # Replace this with your Business Agent function
    business = "Business plan will be generated here"

    finance = finance_analysis(startup_idea)

    marketing = marketing_strategy(startup_idea)

    mentor = mentor_advice(startup_idea)

    final_report = generate_report(
        idea,
        market,
        business,
        finance,
        marketing,
        mentor
    )

    return {
        "report": final_report
    }