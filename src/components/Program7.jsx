import React from "react";

const code = `import nltk
from nltk.corpus import stopwords
from nltk.stem import PorterStemmer, WordNetLemmatizer
from nltk.tokenize import word_tokenize
from nltk import download

# Download required resources
download('punkt')
download('stopwords')
download('wordnet')
download('omw-1.4')

# Sample text
text = ("Natural Language Processing (NLP) is an exciting field. "
        "It involves processing of text data, such as tokenization, "
        "stopword removal, stemming, and lemmatization.")
print("Original Text:")
print(text)

# 1. Tokenization
tokens = word_tokenize(text)
print("\\n1. Tokenized Text:")
print(tokens)

# 2. Stopword Removal
stop_words = set(stopwords.words('english'))
filtered_tokens = [word for word in tokens if word.lower() not in stop_words]
print("\\n2. After Stopword Removal:")
print(filtered_tokens)

# 3. Stemming
stemmer = PorterStemmer()
stemmed_tokens = [stemmer.stem(word) for word in filtered_tokens]
print("\\n3. After Stemming:")
print(stemmed_tokens)

# 4. Lemmatization
lemmatizer = WordNetLemmatizer()
lemmatized_tokens = [lemmatizer.lemmatize(word) for word in filtered_tokens]
print("\\n4. After Lemmatization:")
print(lemmatized_tokens)
`;

export default function Program7() {
  return (
    <div className="program">
      <h2>Experiment 7</h2>
      <h3>Aim</h3>
      <p>To preprocess text data using tokenization, stopword removal, stemming, and lemmatization using NLTK / spaCy.</p>

      <h3>Software Required</h3>
      <p>Python, NLTK, spaCy, Jupyter Notebook / VS Code</p>

      <h3>Theory</h3>
      <p>Text preprocessing is an important step in Natural Language Processing (NLP). It converts raw text into a clean and meaningful format.</p>
      <ul>
        <li>Tokenization – Splits text into individual words or tokens.</li>
        <li>Stopword Removal – Removes common words that do not add significant meaning.</li>
        <li>Stemming – Reduces words to their root form (may not be a real word).</li>
        <li>Lemmatization – Reduces words to their base (dictionary) form. Produces meaningful words.</li>
      </ul>

      <h3>Program</h3>
      <pre><code>{code}</code></pre>

      <h3>Explanation</h3>
      <ul>
        <li>word_tokenize() splits the sentence into words/tokens.</li>
        <li>stopwords.words('english') removes common words like is, an, of, etc.</li>
        <li>PorterStemmer() reduces words to their root form.</li>
        <li>WordNetLemmatizer() converts words to their base/dictionary form.</li>
      </ul>

      <h3>Result</h3>
      <p>Thus, the given text is successfully preprocessed using tokenization, stopword removal, stemming, and lemmatization. The output at each step helps in cleaning and preparing text data for NLP tasks.</p>
    </div>
  );
}
