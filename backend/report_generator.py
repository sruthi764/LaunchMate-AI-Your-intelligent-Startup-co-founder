def generate_report(
    startup_idea,
    market_research,
    business_plan,
    finance_plan,
    marketing_strategy,
    mentor_feedback
):
    report = f"""
==============================
     LAUNCHMATE AI REPORT
==============================

1. Startup Idea
----------------
{startup_idea}

2. Market Research
------------------
{market_research}

3. Business Plan
----------------
{business_plan}

4. Finance Plan
---------------
{finance_plan}

5. Marketing Strategy
---------------------
{marketing_strategy}

6. Mentor Feedback
------------------
{mentor_feedback}

==============================
      END OF REPORT
==============================
"""

    return report