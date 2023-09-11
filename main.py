import cv2
import numpy as np
import pyautogui
import webbrowser
import time
from pyscreeze import Box

url = "https://krisjet.itch.io/snek"
webbrowser.open(url, new=0, autoraise=True)

# display screen resolution, get it using pyautogui itself
SCREEN_SIZE = pyautogui.size()
# define the codec
fourcc = cv2.VideoWriter_fourcc(*"mp4v")
# frames per second
fps = 5.0
# create the video write object
out = cv2.VideoWriter("output.mp4", fourcc, fps, SCREEN_SIZE)
# the time you want to record in seconds
record_seconds = 10

print("scrolling")
time.sleep(1)
pyautogui.scroll(-5, 10, SCREEN_SIZE.height / 2)
print("scrolled")


def click(x, y):
    pyautogui.moveTo(x, y)
    pyautogui.mouseDown()
    time.sleep(0.5)  # or whatever you need, if even needed
    pyautogui.mouseUp()


def clickImageButton(imageName):
    while True:
        button = pyautogui.locateOnScreen(imageName, grayscale=True, confidence=0.8)
        if button != None:
            print(button)
            button_center = pyautogui.center(button)
            button_x, button_y = button_center
            print("clicking" + imageName)
            print(button_x, button_y)
            click(button_x / 2, button_y / 2)
            break


clickImageButton("./images/run_game.png")
clickImageButton("./images/submit.png")
clickImageButton("./images/menu.png")

while True:
    wonder_theme = pyautogui.locateOnScreen(
        "./images/wonder_theme.png", grayscale=True, confidence=0.8
    )
    if wonder_theme != None:
        break
    palette = pyautogui.locateOnScreen(
        "./images/palette.png", grayscale=True, confidence=0.8
    )
    if palette != None:
        palette_button = pyautogui.center(palette)
        palette_button_x, palette_button_y = palette_button
        click(palette_button_x / 2 + 150, palette_button_y / 2)

clickImageButton("./images/menu.png")
clickImageButton("./images/play.png")

while True:
    time.sleep(0.3)
    pyautogui.press("left")
    time.sleep(0.3)
    pyautogui.press("down")
    time.sleep(0.3)
    pyautogui.press("right")
    time.sleep(0.3)
    pyautogui.press("up")

# for i in range(int(record_seconds * fps)):
#     # make a screenshot
#     img = pyautogui.screenshot()
#     # convert these pixels to a proper numpy array to work with OpenCV
#     frame = np.array(img)
#     frame = cv2.resize(frame, SCREEN_SIZE)
#     # convert colors from BGR to RGB
#     frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)

#     # https://docs.opencv.org/4.x/d4/dc6/tutorial_py_template_matching.html
#     # submit_button = cv2.imread("./submit.png")
#     # submit = cv2.matchTemplate(frame, submit_button, cv2.TM_CCOEFF)
#     # min_val, max_val, min_loc, max_loc = cv2.minMaxLoc(submit)
#     # left, top = min_loc
#     # bottom, right = max_loc
#     # submit_center = pyautogui.center(Box(left, top, right - left, bottom - top))
#     # submit_x, submit_y = submit_center
#     # print(submit_x, submit_y)
#     # pyautogui.click(submit_x, submit_y)

#     # print(min_val, max_val, min_loc, max_loc)
#     # if submit:
#     #     break

#     # write the frame
#     out.write(frame)
#     # show the frame
#     # cv2.imshow("screenshot", frame)
#     # if the user clicks q, it exits
#     if cv2.waitKey(1) == ord("q"):
#         break

# # make sure everything is closed when exited
# out.release()
# cv2.destroyAllWindows()
