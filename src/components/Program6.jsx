import React from "react";

const code = `import cv2
import numpy as np

# Open Video
cap = cv2.VideoCapture(0)

# Read first frame and select ROI
ret, frame = cap.read()
roi = cv2.selectROI('Select Target', frame, False)
hsv_roi = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)

# Create mask for the selected region
mask = cv2.inRange(hsv_roi,
                    np.array((0., 60., 32.)),
                    np.array((180., 255., 255.)))

# Setup initial tracking window
track_window = tuple(roi)
roi_hsv = hsv_roi[int(roi[1]):int(roi[1]+roi[3]),
                   int(roi[0]):int(roi[0]+roi[2])]
roi_hist = cv2.calcHist([roi_hsv], [0], mask, [180], [0, 180])
cv2.normalize(roi_hist, roi_hist, 0, 255, cv2.NORM_MINMAX)
term_crit = (cv2.TERM_CRITERIA_EPS | cv2.TERM_CRITERIA_COUNT, 10, 1)

while True:
    ret, frame = cap.read()
    if not ret:
        break

    hsv = cv2.cvtColor(frame, cv2.COLOR_BGR2HSV)
    dst = cv2.calcBackProject([hsv], [0], roi_hist, [0, 180], 1)
    ret_val, track_window = cv2.CamShift(dst, track_window, term_crit)

    pts = cv2.boxPoints(ret_val)
    pts = np.int0(pts)
    img2 = cv2.polylines(frame, [pts], True, (0, 255, 0), 2)

    x, y, w, h = track_window
    cv2.circle(img2, (int(x+w/2), int(y+h/2)), 5, (0, 0, 255), -1)
    cv2.imshow('CamShift Tracking', img2)

    k = cv2.waitKey(30) & 0xff
    if k == 27:  # ESC key to exit
        break

cap.release()
cv2.destroyAllWindows()
`;

export default function Program6() {
  return (
    <div className="program">
      <h2>Experiment 6</h2>
      <h3>Aim</h3>
      <p>To implement color-based object tracking using HSV space and CamShift algorithm in OpenCV.</p>

      <h3>Software Required</h3>
      <p>Python, OpenCV, Numpy, Jupyter Notebook / VS Code</p>

      <h3>Theory</h3>
      <p>CamShift (Continuously Adaptive Mean Shift) is an extension of the Mean Shift algorithm. It is widely used for object tracking. HSV (Hue, Saturation, Value) color space is more suitable for color-based tracking because it is less sensitive to changes in lighting conditions.</p>
      <p>Main Steps:</p>
      <ul>
        <li>Convert the frame from BGR to HSV.</li>
        <li>Create a mask for the target color.</li>
        <li>Find the target object and initialize the tracking window.</li>
        <li>Apply CamShift to track the object in subsequent frames.</li>
        <li>Draw the tracking window and center on the object.</li>
      </ul>

      <h3>Program</h3>
      <pre><code>{code}</code></pre>

      <h3>Explanation</h3>
      <ul>
        <li>VideoCapture(0) opens the webcam.</li>
        <li>selectROI() is used to select the target object (color).</li>
        <li>inRange() creates a mask for the selected color in HSV space.</li>
        <li>calcHist() builds the histogram of the target region.</li>
        <li>CamShift() tracks the object and returns the rotated bounding box.</li>
        <li>boxPoints() converts the box to 4 corner points.</li>
        <li>A red dot shows the center of the tracked object.</li>
      </ul>

      <h3>Result</h3>
      <p>The selected color object is successfully tracked using CamShift algorithm in HSV color space. The tracking window adapts to the size and orientation changes of the object in real-time.</p>
    </div>
  );
}
