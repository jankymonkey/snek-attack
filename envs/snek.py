from playwright.sync_api import sync_playwright
import pathlib

DEFAULT_NAVIGATION_TIMEOUT = 60 * 1000
DEFAULT_GAME_URL = "https://krisjet.itch.io/snek"


class Game:
    def __init__(
        self,
        headless=True,
        user_data_dir=None,
        navigation_timeout=DEFAULT_NAVIGATION_TIMEOUT,
        game_url=DEFAULT_GAME_URL,
        browser_ws_endpoint=None,
        initial_width=180,
        initial_height=320,
    ):
        self.initial_width = initial_width
        self.initial_height = initial_height
        self.headless = headless
        self.user_data_dir = user_data_dir
        self.navigation_timeout = navigation_timeout
        self.is_running = False
        self.browser = None
        self.page = None
        self.state = None
        self._dims = None
        # self.game_id = str(uuid.uuid4())
        self.state_id = 0
        self.game_url = game_url
        self.browser_ws_endpoint = browser_ws_endpoint

    # DO WE NEED ASYNC?
    # https://github.com/fabito/gym-neyboy/blob/d71b0fb707a366270649b8d9144384ee35cc26a9/gym_neyboy/envs/neyboy.py#L62C5-L62C10
    def initialize(self):
        with sync_playwright() as p:
            for browser_type in [p.chromium]:
                self.browser = browser_type.launch()
                self.page = self.browser.new_page()
                self.page.goto(self.game_url)
                envjs_path = pathlib.Path(__file__).resolve().parent.joinpath("env.js")
                self.page.add_script_tag(path=str(envjs_path))
                # self.is_ready()
                self.page.screenshot(path=f'example-{browser_type.name}.png')

    @staticmethod
    def create(
        headless=True,
        user_data_dir=None,
        navigation_timeout=DEFAULT_NAVIGATION_TIMEOUT,
        game_url=DEFAULT_GAME_URL,
        browser_ws_endpoint=None,
    ) -> "Game":
        o = Game(
            headless, user_data_dir, navigation_timeout, game_url, browser_ws_endpoint
        )
        o.initialize()
        return o

Game.create()
