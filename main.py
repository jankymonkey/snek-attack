import cv2
import numpy as np
import pyautogui
import webbrowser
import time
from pyscreeze import Box

url = "https://krisjet.itch.io/snek"
webbrowser.open(url, new=0, autoraise=True)

# display screen resolution, get it using pyautogui itself
SCREEN_SIZE = (1728, 1117)
# define the codec
fourcc = cv2.VideoWriter_fourcc(*"mp4v")
# frames per second
fps = 5.0
# create the video write object
out = cv2.VideoWriter("output.mp4", fourcc, fps, SCREEN_SIZE)
# the time you want to record in seconds
record_seconds = 10

while True:
    play_button = pyautogui.locateOnScreen("./run_game.png")
    time.sleep(1)
    if play_button != None:
        print(play_button)
        play_button_center = pyautogui.center(play_button)
        play_button_x, play_button_y = play_button_center
        print("run game button")
        print(play_button_x, play_button_y)
        pyautogui.click(play_button_x / 2, play_button_y / 2)
        break

while True:
    submit = pyautogui.locateOnScreen("./submit.png", confidence=0.8)

    time.sleep(1)

    if submit != None:
        submit_center = pyautogui.center(submit)
        submit_x, submit_y = submit_center
        print("submit button")
        print(submit_x, submit_y)
        pyautogui.click(submit_x / 2, submit_y / 2, 2) # TODO: not clicking!
        print("clicked!")
        break

for i in range(int(record_seconds * fps)):
    # make a screenshot
    img = pyautogui.screenshot()
    # convert these pixels to a proper numpy array to work with OpenCV
    frame = np.array(img)
    frame = cv2.resize(frame, SCREEN_SIZE)
    # convert colors from BGR to RGB
    frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)

    # https://docs.opencv.org/4.x/d4/dc6/tutorial_py_template_matching.html
    # submit_button = cv2.imread("./submit.png")
    # submit = cv2.matchTemplate(frame, submit_button, cv2.TM_CCOEFF)
    # min_val, max_val, min_loc, max_loc = cv2.minMaxLoc(submit)
    # left, top = min_loc
    # bottom, right = max_loc
    # submit_center = pyautogui.center(Box(left, top, right - left, bottom - top))
    # submit_x, submit_y = submit_center
    # print(submit_x, submit_y)
    # pyautogui.click(submit_x, submit_y)

    # print(min_val, max_val, min_loc, max_loc)
    # if submit:
    #     break

    # write the frame
    out.write(frame)
    # show the frame
    # cv2.imshow("screenshot", frame)
    # if the user clicks q, it exits
    if cv2.waitKey(1) == ord("q"):
        break

# make sure everything is closed when exited
out.release()
cv2.destroyAllWindows()
