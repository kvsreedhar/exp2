import React from "react";

const code = `import cv2
import pytesseract
from googletrans import Translator
from nltk.tokenize import sent_tokenize

# Load image
img = cv2.imread("signboard.jpg")

# Extract text using OCR
text = pytesseract.image_to_string(img)

print("Extracted Text:")
print(text)

# Translation
translator = Translator()
translated = translator.translate(text, dest='te')

print("\\nTranslated Text (Telugu):")
print(translated.text)

# Summarization
sentences = sent_tokenize(text)

print("\\nSummary:")
for sent in sentences[:2]:
    print(sent)
`;

export default function Program12() {
  return (
    <div className="program">
      <h2>Experiment 12</h2>
      <h3>Aim</h3>
      <p>To develop a mini project integrating Computer Vision and Natural Language Processing for extracting text from signboards/documents and performing translation or summarization.</p>

      <h3>Software Required</h3>
      <p>Python, OpenCV, pytesseract, NLTK, googletrans, Jupyter Notebook / VS Code</p>

      <h3>Theory</h3>
      <p>This mini project combines Computer Vision (CV) and Natural Language Processing (NLP) to build an intelligent application. OCR (Optical Character Recognition) is used to extract text from images such as signboards, documents, or notices. After extracting text, NLP techniques are used to translate text into another language and summarize long text into short meaningful sentences.</p>
      <p>This experiment combines: Computer Vision → OCR for text extraction, and NLP → Translation / Text summarization.</p>
      <p>Applications: Smart document reader, Signboard translator, Automated summarizer, Assistive reading systems.</p>

      <h3>Program</h3>
      <pre><code>{code}</code></pre>

      <h3>Explanation</h3>
      <ul>
        <li>OpenCV loads the input image.</li>
        <li>Tesseract OCR extracts text from the image.</li>
        <li>Google Translate converts text into Telugu.</li>
        <li>NLTK processes extracted text for summarization.</li>
        <li>Important sentences are selected as summary.</li>
      </ul>

      <h3>Result</h3>
      <p>Thus, a mini project integrating Computer Vision and Natural Language Processing was successfully implemented. The system extracts text from signboards/documents and performs translation or summarization effectively.</p>
    </div>
  );
}
