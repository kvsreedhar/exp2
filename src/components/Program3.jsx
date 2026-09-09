import React from "react";

const code = `import cv2
import numpy as np

# Load Image
img = cv2.imread('noisy.jpg')
if img is None:
    print("Image not found. Check the file path.")
    exit()

# Apply Gaussian Filter
gaussian = cv2.GaussianBlur(img, (5, 5), 0)

# Apply Median Filter
median = cv2.medianBlur(img, 5)

# Apply Bilateral Filter
bilateral = cv2.bilateralFilter(img, d=9, sigmaColor=75, sigmaSpace=75)

# Display Images
cv2.imshow('Original Noisy Image', img)
cv2.imshow('Gaussian Filter', gaussian)
cv2.imshow('Median Filter', median)
cv2.imshow('Bilateral Filter', bilateral)

cv2.waitKey(0)
cv2.destroyAllWindows()
`;

export default function Program3() {
  return (
    <div className="program">
      <h2>Experiment 3</h2>
      <h3>Aim</h3>
      <p>To implement image filtering operations: Gaussian, Median, and Bilateral filters using OpenCV.</p>

      <h3>Software Required</h3>
      <p>Python, OpenCV, Jupyter Notebook / VS Code</p>

      <h3>Theory</h3>
      <p>Image filtering is used to remove noise and improve image quality. Different filters work in different ways:</p>
      <ul>
        <li>Gaussian Filter – reduces Gaussian noise by blurring the image using a Gaussian kernel.</li>
        <li>Median Filter – removes salt-and-pepper noise by replacing each pixel value with the median of its neighborhood.</li>
        <li>Bilateral Filter – reduces noise while preserving edges by considering both spatial and intensity differences.</li>
      </ul>

      <h3>Program</h3>
      <pre><code>{code}</code></pre>

      <h3>Explanation</h3>
      <ul>
        <li>imread() loads the noisy image.</li>
        <li>GaussianBlur() applies Gaussian filtering using a 5x5 kernel.</li>
        <li>medianBlur() replaces each pixel with the median of its neighborhood.</li>
        <li>bilateralFilter() smooths the image while preserving edges.</li>
        <li>All filtered images are displayed for comparison.</li>
      </ul>

      <h3>Result</h3>
      <p>Thus, Gaussian, Median, and Bilateral filters were successfully implemented using OpenCV. The filters effectively reduced noise while preserving important details in the image.</p>
    </div>
  );
}
