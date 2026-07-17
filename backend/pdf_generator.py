from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph
from reportlab.lib.styles import getSampleStyleSheet

def generate_pdf(report_text):

    pdf_file = "startup_report.pdf"

    doc = SimpleDocTemplate(pdf_file, pagesize=letter)

    styles = getSampleStyleSheet()

    story = []

    for line in report_text.split("\n"):
        story.append(Paragraph(line, styles["BodyText"]))

    doc.build(story)

    return pdf_file