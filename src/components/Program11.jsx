import React from "react";

const code = `import cv2
import pytesseract
import nltk
from nltk.tokenize import sent_tokenize, word_tokenize
from nltk.corpus import stopwords
from collections import defaultdict
import string

nltk.download('punkt')
nltk.download('stopwords')

# Load image
img = cv2.imread("sample_text.jpg")

# Extract text using OCR
text = pytesseract.image_to_string(img)

print("Extracted Text:")
print(text)

# Text Summarization
stop_words = set(stopwords.words("english"))
words = word_tokenize(text.lower())

word_freq = defaultdict(int)
for word in words:
    if word not in stop_words and word not in string.punctuation:
        word_freq[word] += 1

sentences = sent_tokenize(text)
sentence_scores = defaultdict(int)

for sent in sentences:
    for word in word_tokenize(sent.lower()):
        if word in word_freq:
            sentence_scores[sent] += word_freq[word]

summary = sorted(sentence_scores, key=sentence_scores.get,
                  reverse=True)[:2]

print("\\nSummary:")
for sent in summary:
    print(sent)
`;

export default function Program11() {
  return (
    <div className="program">
      <h2>Experiment 11</h2>
      <h3>Aim</h3>
      <p>To extract text from an image using Optical Character Recognition (OCR) with Tesseract and perform text summarization.</p>

      <h3>Software Required</h3>
      <p>Python, OpenCV, pytesseract, NLTK, Jupyter Notebook / VS Code</p>

      <h3>Theory</h3>
      <p>Optical Character Recognition (OCR) converts printed or handwritten text in images into machine-readable text. Tesseract is an open-source OCR engine widely used for extracting text from images. Text Summarization is an NLP technique used to reduce long text into a shorter meaningful summary while preserving important information. This experiment combines Computer Vision (OCR for text extraction) and NLP (text summarization).</p>

      <h3>Program</h3>
      <pre><code>{code}</code></pre>

      <h3>Explanation</h3>
      <ul>
        <li>OpenCV loads the image.</li>
        <li>Tesseract extracts text from the image.</li>
        <li>NLTK tokenizes the extracted text.</li>
        <li>Stopwords are removed.</li>
        <li>Important sentences are scored based on word frequency.</li>
        <li>Top sentences are selected as the summary.</li>
      </ul>

      <h3>Result</h3>
      <p>Thus, text was successfully extracted from the image using Tesseract OCR and summarized using NLP techniques. The experiment demonstrates integration of Computer Vision and Natural Language Processing.</p>
    </div>
  );
}
