import React from "react";

const code = `import spacy
from spacy import displacy

# Load English language model
nlp = spacy.load("en_core_web_sm")

# Sample text
text = ("Elon Musk is the CEO of Tesla Inc. and SpaceX. "
        "He was born on June 28, 1971, in Pretoria, South Africa.")
print("Original Text:")
print(text)
print("\\n" + "-"*70 + "\\n")

# Process text with spaCy
doc = nlp(text)

# 1. Part-of-Speech (POS) Tagging
print("PART-OF-SPEECH (POS) TAGGING:")
print(f"{'Word':<15}{'POS Tag':<15}{'Explanation'}")
print("-"*70)
for token in doc:
    print(f"{token.text:<15}{token.pos_:<15}{spacy.explain(token.pos_)}")

print("\\n" + "-"*70 + "\\n")

# 2. Named Entity Recognition (NER)
print("NAMED ENTITY RECOGNITION (NER):")
print(f"{'Entity Text':<20}{'Label':<15}{'Explanation'}")
print("-"*70)
for ent in doc.ents:
    print(f"{ent.text:<20}{ent.label_:<15}{spacy.explain(ent.label_)}")

# Visualize entities (optional in Jupyter)
# displacy.render(doc, style="ent", jupyter=True)
`;

export default function Program8() {
  return (
    <div className="program">
      <h2>Experiment 8</h2>
      <h3>Aim</h3>
      <p>To implement Part-of-Speech (POS) tagging and Named Entity Recognition (NER) using spaCy.</p>

      <h3>Software Required</h3>
      <p>Python, spaCy, Jupyter Notebook / VS Code</p>

      <h3>Theory</h3>
      <p>POS tagging assigns grammatical categories (e.g., Noun, Verb, Adjective) to each word in a sentence. Named Entity Recognition (NER) identifies and classifies important entities in the text (e.g., Person, Organization, Location, Date). spaCy provides pre-trained models that make these tasks efficient and accurate.</p>

      <h3>Program</h3>
      <pre><code>{code}</code></pre>

      <h3>Explanation</h3>
      <ul>
        <li>spaCy's en_core_web_sm model is used for NLP tasks.</li>
        <li>doc object contains tokens, POS tags, and entity information.</li>
        <li>token.pos_ gives the part-of-speech tag of each word.</li>
        <li>doc.ents extracts named entities and their labels.</li>
        <li>spacy.explain() provides the meaning of POS tags and entity labels.</li>
      </ul>

      <h3>Result</h3>
      <p>Thus, Part-of-Speech tagging and Named Entity Recognition were successfully implemented using spaCy. Each word is assigned a grammatical category, and important entities like persons, organizations, dates, and locations are identified.</p>
    </div>
  );
}
