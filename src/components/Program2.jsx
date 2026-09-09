import React from "react";

const code = `import cv2
import numpy as np

# Load Color Image
img = cv2.imread('sample.jpg')
if img is None:
    print("Image not found. Check the file path.")
    exit()

# Convert to Grayscale
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

# Sobel Edge Detection (X and Y)
sobelx = cv2.Sobel(gray, cv2.CV_64F, 1, 0, ksize=3)
sobely = cv2.Sobel(gray, cv2.CV_64F, 0, 1, ksize=3)
sobelx = cv2.convertScaleAbs(sobelx)
sobely = cv2.convertScaleAbs(sobely)

# Canny Edge Detection
canny = cv2.Canny(gray, 100, 200)

# Thresholding (Binary)
_, thresh_binary = cv2.threshold(gray, 127, 255, cv2.THRESH_BINARY)

# Thresholding (Otsu)
_, thresh_otsu = cv2.threshold(gray, 0, 255,
                                cv2.THRESH_BINARY + cv2.THRESH_OTSU)

# Display Results
cv2.imshow('Original Color Image', img)
cv2.imshow('Grayscale Image', gray)
cv2.imshow('Sobel X', sobelx)
cv2.imshow('Sobel Y', sobely)
cv2.imshow('Canny Edge', canny)
cv2.imshow('Binary Threshold', thresh_binary)
cv2.imshow('Otsu Threshold', thresh_otsu)

cv2.waitKey(0)
cv2.destroyAllWindows()
`;

export default function Program2() {
  return (
    <div className="program">
      <h2>Experiment 2</h2>
      <h3>Aim</h3>
      <p>To apply edge detection (Sobel, Canny) and thresholding techniques on grayscale and color images.</p>

      <h3>Software Required</h3>
      <p>Python, OpenCV, Jupyter Notebook / VS Code</p>

      <h3>Theory</h3>
      <p>Edge detection is used to find the boundaries of objects in an image. It highlights regions with high intensity changes.</p>
      <ul>
        <li>Sobel Edge Detection – computes gradient in X and Y directions.</li>
        <li>Canny Edge Detection – multi-stage algorithm for better edges.</li>
        <li>Thresholding – converts grayscale image into binary image.</li>
      </ul>

      <h3>Program</h3>
      <pre><code>{code}</code></pre>

      <h3>Explanation</h3>
      <ul>
        <li>imread() loads the color image.</li>
        <li>cvtColor() converts it to grayscale.</li>
        <li>Sobel calculates gradients in X and Y directions to detect edges.</li>
        <li>Canny detects edges using a multi-stage algorithm (better results).</li>
        <li>threshold() converts grayscale image into binary image.</li>
        <li>Otsu's method automatically finds the best threshold value.</li>
      </ul>

      <h3>Result</h3>
      <p>Edge detection using Sobel and Canny operators and thresholding techniques were successfully applied on the grayscale image. The edges and binary images are displayed as output.</p>
    </div>
  );
}
