import webbrowser
from pyautogui import screenshot

url = "https://krisjet.itch.io/snek"

webbrowser.open(url, new=0, autoraise=True)

screenshot().save("./snek.png")
