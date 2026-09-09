import React from "react";

const code = `import cv2
import numpy as np

# Load Image
img = cv2.imread('shapes.jpg')
if img is None:
    print("Image not found. Check the file path.")
    exit()

# Convert to Grayscale
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

# Thresholding
_, thresh = cv2.threshold(gray, 127, 255, cv2.THRESH_BINARY)

# Find Contours
contours, _ = cv2.findContours(thresh, cv2.RETR_EXTERNAL,
                                cv2.CHAIN_APPROX_SIMPLE)

# Draw Bounding Boxes
output = img.copy()
for cnt in contours:
    x, y, w, h = cv2.boundingRect(cnt)
    cv2.rectangle(output, (x, y), (x+w, y+h), (0, 255, 0), 2)

# Display Results
cv2.imshow('Original Image', img)
cv2.imshow('Binary Image', thresh)
cv2.imshow('Detected Objects', output)

cv2.waitKey(0)
cv2.destroyAllWindows()
`;

export default function Program4() {
  return (
    <div className="program">
      <h2>Experiment 4</h2>
      <h3>Aim</h3>
      <p>To perform object detection using contour detection and bounding boxes.</p>

      <h3>Software Required</h3>
      <p>Python, OpenCV, Jupyter Notebook / VS Code</p>

      <h3>Theory</h3>
      <p>Contour detection is a simple and effective technique used to detect objects in an image. It works by finding continuous points along the boundary of objects. After detecting contours, bounding boxes are drawn around the objects to locate them.</p>
      <p>Main Steps:</p>
      <ul>
        <li>Convert image to grayscale.</li>
        <li>Apply threshold to get binary image.</li>
        <li>Find contours in the binary image.</li>
        <li>Draw bounding rectangle around each contour.</li>
      </ul>

      <h3>Program</h3>
      <pre><code>{code}</code></pre>

      <h3>Explanation</h3>
      <ul>
        <li>imread() loads the input image.</li>
        <li>The image is converted to grayscale.</li>
        <li>threshold() converts the grayscale image to binary.</li>
        <li>findContours() detects the external contours of objects.</li>
        <li>boundingRect() calculates the bounding box coordinates.</li>
        <li>rectangle() draws bounding boxes around detected objects.</li>
        <li>All results are displayed for comparison.</li>
      </ul>

      <h3>Result</h3>
      <p>Thus, object detection was successfully performed using contour detection and bounding boxes. Objects in the image were detected and highlighted with rectangles.</p>
    </div>
  );
}
