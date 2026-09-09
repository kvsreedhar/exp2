import React from "react";

const code = `import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import MultinomialNB
from sklearn.metrics import accuracy_score, classification_report

# Sample dataset
data = {
    'text': [
        'I love this movie, it was fantastic!',
        'What a great film, excellent acting.',
        'I enjoyed the story and the characters.',
        'This is the best movie I have seen.',
        'I hate this movie, it was terrible.',
        'Worst film ever, waste of time.',
        'The acting was bad and the plot was boring.',
        'I did not like this movie at all.',
        'Absolutely wonderful! A must watch.',
        'Very disappointing and poorly made.'
    ],
    'label': ['pos', 'pos', 'pos', 'pos', 'neg', 'neg', 'neg', 'neg', 'pos', 'neg']
}
df = pd.DataFrame(data)

# Split into train and test sets
X_train, X_test, y_train, y_test = train_test_split(
    df['text'], df['label'], test_size=0.3, random_state=42, stratify=df['label']
)

# Convert text to TF-IDF features
vectorizer = TfidfVectorizer(stop_words='english')
X_train_vec = vectorizer.fit_transform(X_train)
X_test_vec = vectorizer.transform(X_test)

# Train Naive Bayes classifier
model = MultinomialNB()
model.fit(X_train_vec, y_train)

# Predict and evaluate
y_pred = model.predict(X_test_vec)
acc = accuracy_score(y_test, y_pred)
print(f"Accuracy: {acc*100:.2f}%")
print("\\nClassification Report:")
print(classification_report(y_test, y_pred, target_names=['Negative', 'Positive']))

# Predict custom sentences
custom = ["I really enjoyed this movie, it was amazing!",
          "This film was horrible and very boring."]
custom_vec = vectorizer.transform(custom)
pred = model.predict(custom_vec)
for sent, p in zip(custom, pred):
    print(f"\\nText: {sent}")
    print(f"Sentiment: {'Positive' if p=='pos' else 'Negative'}")
`;

export default function Program9() {
  return (
    <div className="program">
      <h2>Experiment 9</h2>
      <h3>Aim</h3>
      <p>To build a simple sentiment analysis classifier using Bag-of-Words or TF-IDF features and Naive Bayes algorithm.</p>

      <h3>Software Required</h3>
      <p>Python, scikit-learn, NLTK, Jupyter Notebook / VS Code</p>

      <h3>Theory</h3>
      <p>Sentiment Analysis is the task of determining the sentiment expressed in a piece of text, typically as Positive or Negative. In this experiment, we use a Bag-of-Words / TF-IDF representation to convert text into numerical features and train a Multinomial Naive Bayes classifier to predict the sentiment. Naive Bayes is a probabilistic classifier based on Bayes' theorem with the assumption of feature independence.</p>

      <h3>Program</h3>
      <pre><code>{code}</code></pre>

      <h3>Explanation</h3>
      <ul>
        <li>The text data is converted into numerical features using TF-IDF.</li>
        <li>Multinomial Naive Bayes is trained on the training data.</li>
        <li>The model predicts the sentiment of test data and custom sentences.</li>
        <li>Accuracy and classification report show the performance of the model.</li>
        <li>Positive sentiment is labeled as 'pos' and Negative as 'neg'.</li>
      </ul>

      <h3>Result</h3>
      <p>Thus, a simple sentiment analysis classifier was successfully built using TF-IDF (Bag-of-Words) features and Multinomial Naive Bayes. The model accurately classifies text as Positive or Negative and can predict the sentiment of unseen reviews.</p>
    </div>
  );
}
