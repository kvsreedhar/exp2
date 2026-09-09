import React from "react";

const code = `import cv2
import numpy as np

# Load Image
img = cv2.imread('group.jpg')
if img is None:
    print('Image not found. Check the file path.')
    exit()

# Convert to Grayscale
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

# Load Haar Cascade for Face Detection
face_cascade = cv2.CascadeClassifier(
    cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

# Detect Faces
faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1,
                                       minNeighbors=5, minSize=(30, 30))

# Draw Rectangle around Faces
for (x, y, w, h) in faces:
    cv2.rectangle(img, (x, y), (x+w, y+h), (0, 255, 0), 2)
    cv2.putText(img, 'Face', (x, y-10), cv2.FONT_HERSHEY_SIMPLEX,
                0.7, (0, 255, 0), 2)

# Display Result
cv2.imshow('Detected Faces', img)
cv2.waitKey(0)
cv2.destroyAllWindows()
`;

export default function Program5() {
  return (
    <div className="program">
      <h2>Experiment 5</h2>
      <h3>Aim</h3>
      <p>To detect faces in images using Haar Cascade classifier in OpenCV.</p>

      <h3>Software Required</h3>
      <p>Python, OpenCV, Jupyter Notebook / VS Code</p>

      <h3>Theory</h3>
      <p>Haar Cascade Classifier is a machine learning based approach used for object detection. OpenCV provides pre-trained Haar Cascades for face detection. The classifier scans the image and detects faces. Detected faces are marked with rectangles.</p>

      <h3>Program</h3>
      <pre><code>{code}</code></pre>

      <h3>Explanation</h3>
      <ul>
        <li>imread() loads the input image.</li>
        <li>The image is converted to grayscale because Haar Cascade works on grayscale images.</li>
        <li>CascadeClassifier() loads the pre-trained Haar Cascade model.</li>
        <li>detectMultiScale() detects faces at multiple scales in the image.</li>
        <li>rectangle() draws a green rectangle around each detected face.</li>
        <li>putText() adds the label "Face" above each rectangle.</li>
        <li>All windows display the original, grayscale, and detected faces.</li>
      </ul>

      <h3>Result</h3>
      <p>Thus, faces in the given image were successfully detected using Haar Cascade classifier in OpenCV. Detected faces are highlighted with bounding boxes and labeled.</p>
    </div>
  );
}
