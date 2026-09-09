import React from "react";

const code = `import cv2
import numpy as np

# Load Image
img = cv2.imread('sample.jpg')

if img is None:
    print("Image not found. Check the file path.")
    exit()

# 1. Display Original Image
cv2.imshow('Original Image', img)

# 2. Resizing the Image
resized_img = cv2.resize(img, (600, 400))  # (width, height)
cv2.imshow('Resized Image', resized_img)

# 3. Cropping the Image
# (start_row, end_row, start_col, end_col)
cropped_img = img[100:400, 150:500]
cv2.imshow('Cropped Image', cropped_img)

# 4. Rotating the Image
(h, w) = img.shape[:2]
center = (w // 2, h // 2)
angle = 45   # rotation angle
scale = 1.0

# Get rotation matrix and rotate the image
M = cv2.getRotationMatrix2D(center, angle, scale)
rotated_img = cv2.warpAffine(img, M, (w, h))
cv2.imshow('Rotated Image (45 deg)', rotated_img)

# Wait until a key is pressed, then close all windows
cv2.waitKey(0)
cv2.destroyAllWindows()
`;

export default function Program1() {
  return (
    <div className="program">
      <h2>Experiment 1</h2>
      <h3>Aim</h3>
      <p>To load and display an image using OpenCV and perform basic operations like resizing, cropping, and rotation.</p>

      <h3>Software Required</h3>
      <p>Python, OpenCV, Jupyter Notebook / VS Code</p>

      <h3>Theory</h3>
      <p>OpenCV is a powerful library for image processing. It allows us to read an image and perform various operations on it.</p>
      <ul>
        <li>Resizing – changes the dimensions of the image.</li>
        <li>Cropping – extracts a region of interest from the image.</li>
        <li>Rotation – rotates the image by a given angle.</li>
      </ul>

      <h3>Program</h3>
      <pre><code>{code}</code></pre>

      <h3>Explanation</h3>
      <ul>
        <li>imread() loads the image.</li>
        <li>imshow() displays the image.</li>
        <li>resize() changes the image size.</li>
        <li>Cropping is done using numpy slicing.</li>
        <li>getRotationMatrix2D() returns the rotation matrix and warpAffine() applies the rotation.</li>
      </ul>

      <h3>Result</h3>
      <p>The image is successfully loaded and displayed. Basic operations like resizing, cropping, and rotation are performed and displayed.</p>
    </div>
  );
}
