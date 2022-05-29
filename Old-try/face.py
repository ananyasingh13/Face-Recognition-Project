import numpy as np
import cv2
import pickle

face_cascade = cv2.CascadeClassifier(
    'data/haarcascade_frontalface_alt2.xml')
eye_cascade = cv2.CascadeClassifier('data/haarcascade_eye.xml')
smile_cascade = cv2.CascadeClassifier('data/haarcascade_smile.xml')

recognizer = cv2.face.LBPHFaceRecognizer_create()
recognizer.read("trainer.yml")

labels = {}
with open("label.pickle", 'rb') as f:
    oglabels = pickle.load(f)
    labels = {v: k for k, v in oglabels.items()}

cap = cv2.VideoCapture(0)

while(True):
    # Capture frame-by-frame
    ret, frame = cap.read()
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    faces = face_cascade.detectMultiScale(
        gray, scaleFactor=1.5, minNeighbors=5)

    for(x, y, w, h) in faces:
        #print(x, y, w, h)
        roi_gray = gray[y:y+h, x:x+w]
        roi_color = frame[y:y+h, x:x+w]

        id, conf = recognizer.predict(roi_gray)
        if conf >= 45 and conf <= 70:
            print(id)
            print(labels[id])
            font = cv2.FONT_HERSHEY_SIMPLEX
            name = labels[id]
            color = (255, 255, 255)
            stroke = 2
            cv2.putText(frame, name, (x, y), font,
                        1, color, stroke, cv2.LINE_AA)

        img_item = "my-image.png"
        cv2.imwrite(img_item, roi_color)

        color = (255, 0, 0)  # Blue, green, red
        stroke = 2
        width = x + w
        height = y+h
        cv2.rectangle(frame, (x, y), (width, height), color, stroke)

        eyes = eye_cascade.detectMultiScale(roi_gray)
        for(ex, ey, ew, eh) in eyes:
            cv2.rectangle(roi_color, (ex, ey), (ex+ew, ey+eh), (0, 255, 0), 2)

        smile = smile_cascade.detectMultiScale(roi_gray)
        for(sx, sy, sw, sh) in smile:
            cv2.rectangle(roi_color, (sx, sy), (sx+sw, sy+sh), (0, 0, 230), 2)

            # Display the resulting frame
    cv2.imshow('frame', frame)
    #cv2.imshow('gray', gray)

    if cv2.waitKey(20) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()
