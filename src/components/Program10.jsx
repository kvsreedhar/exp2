import React from "react";

const code = `import gensim
from gensim import corpora
from gensim.models import LdaModel
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
import nltk
import pprint

nltk.download('punkt')
nltk.download('stopwords')

# Sample documents
documents = [
    "Artificial intelligence is transforming the world of technology.",
    "Machine learning enables computers to learn from data.",
    "Deep learning is a subset of machine learning.",
    "Natural language processing deals with text and speech.",
    "AI and ML have many applications in real life.",
    "Data science involves statistics, ML, and data visualization.",
    "Big data is crucial for training machine learning models.",
    "Robotics combines AI, sensors, and mechanical engineering.",
    "The stock market is affected by economic factors.",
    "Investors analyze stocks and financial reports."
]

# Preprocess the documents
stop_words = set(stopwords.words('english'))
texts = []
for doc in documents:
    tokens = word_tokenize(doc.lower())
    tokens = [word for word in tokens if word.isalpha() and word not in stop_words]
    texts.append(tokens)

# Create Dictionary and Corpus
dictionary = corpora.Dictionary(texts)
corpus = [dictionary.doc2bow(text) for text in texts]

# Build LDA Model
num_topics = 3
lda_model = LdaModel(corpus=corpus, id2word=dictionary,
                      num_topics=num_topics, passes=15, random_state=42)

# Display Topics
print(f"\\nTop {num_topics} Topics:")
pprint.pprint(lda_model.print_topics(num_words=8))

# Topic distribution for each document
print("\\nDocument - Topic Distribution:")
for i, doc_bow in enumerate(corpus):
    topic_dist = lda_model.get_document_topics(doc_bow, minimum_probability=0)
    print(f"Doc {i}: {topic_dist}")
`;

export default function Program10() {
  return (
    <div className="program">
      <h2>Experiment 10</h2>
      <h3>Aim</h3>
      <p>To perform topic modeling on a collection of documents using Latent Dirichlet Allocation (LDA).</p>

      <h3>Software Required</h3>
      <p>Python, Gensim, NLTK, Jupyter Notebook / VS Code</p>

      <h3>Theory</h3>
      <p>Topic Modeling is an unsupervised machine learning technique that discovers abstract topics present in a collection of documents. LDA (Latent Dirichlet Allocation) is a generative probabilistic model that represents each document as a mixture of topics and each topic as a distribution over words. It helps in organizing large text collections and exploring hidden themes.</p>

      <h3>Program</h3>
      <pre><code>{code}</code></pre>

      <h3>Explanation</h3>
      <ul>
        <li>Documents are preprocessed by tokenization and stopword removal.</li>
        <li>A dictionary is created and documents are converted to bag-of-words (corpus).</li>
        <li>LDA model is trained to discover 3 latent topics.</li>
        <li>print_topics() shows the top words for each topic.</li>
        <li>get_document_topics() shows the topic distribution for each document.</li>
      </ul>

      <h3>Result</h3>
      <p>Thus, topic modeling was successfully performed using Latent Dirichlet Allocation (LDA). The model discovered meaningful topics from the text corpus and represented each document as a mixture of these topics.</p>
    </div>
  );
}
