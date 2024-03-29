import numpy as np

import gymnasium as gym
from gymnasium import spaces
from .snek import Snek


class SnekWorldEnv(gym.Env):
    metadata = {"render_modes": ["human", "rgb_array"], "render_fps": 4}

    def __init__(self, render_mode=None, size=5):
        self.game = Snek()

        self.size = size  # The size of the square grid
        # self.window_size = 512  # The size of the PyGame window

        # Observations are dictionaries with the agent's and the target's location.
        # Each location is encoded as an element of {0, ..., `size`}^2, i.e. MultiDiscrete([size, size]).
        self.observation_space = spaces.Discrete(70140)

        # spaces.Dict(
        #     {
        #         "agent": spaces.Box(0, size - 1, shape=(2,), dtype=int),
        #         "target": spaces.Box(0, size - 1, shape=(2,), dtype=int),
        #     }
        # )

        # We have 4 actions, corresponding to "right", "up", "left", "down"
        self.action_space = spaces.Discrete(4)

        """
        The following dictionary maps abstract actions from `self.action_space` to
        the direction we will walk in if that action is taken.
        I.e. 0 corresponds to "right", 1 to "up" etc.
        """
        self._action_to_direction = {
            0: np.array([1, 0]),  # right
            1: np.array([0, 1]),  # up
            2: np.array([-1, 0]),  # left
            3: np.array([0, -1]),  # down
        }

        assert render_mode is None or render_mode in self.metadata["render_modes"]
        self.render_mode = render_mode

        """
        If human-rendering is used, `self.window` will be a reference
        to the window that we draw to. `self.clock` will be a clock that is used
        to ensure that the environment is rendered at the correct framerate in
        human-mode. They will remain `None` until human-mode is used for the
        first time.
        """
        self.window = None
        self.clock = None

    def _get_obs(self):
        snek_row = self.game.snek[1]
        snek_col = self.game.snek[0]
        total_rows = 19
        total_cols = 11
        possible_location = total_rows * total_cols

        food_row = self.game.food[1]
        food_col = self.game.food[0]
        destination = food_row * (total_rows - 1) + food_col
        return (
            snek_row * (total_rows - 1) + snek_col
        ) * possible_location + destination
        # (18 * 18 + 10) * 19 * 11 +(18 * 18 + 10)
        # (10 * 10 + 18) * 19 * 11 +(10 * 10 + 18)

    def _get_info(self):
        # print("getting info...")
        return {}
        # return {
        #     "distance": np.linalg.norm(
        #         self._agent_location - self._target_location, ord=1
        #     )
        # }

    def step(self, action):
        # Map the action (element of {0,1,2,3}) to the direction we walk in
        direction = self._action_to_direction[action]

        self.game.update(direction)
        # We use `np.clip` to make sure we don't leave the grid
        # self._agent_location = np.clip(
        #     self._agent_location + direction, 0, self.size - 1
        # )
        # An episode is done iff the agent has reached the target
        # terminated = np.array_equal(self._agent_location, self._target_location)
        terminated = np.array_equal(self.game.snek, self.game.food)

        reward = 10 if terminated else -1  # Binary sparse rewards
        observation = self._get_obs()
        info = self._get_info()

        if self.render_mode == "human":
            # print("render game...")
            self.game.render()
            # self._render_frame()

        return observation, reward, terminated, False, info

    def reset(self, seed=None, options=None):
        # We need the following line to seed self.np_random
        super().reset(seed=seed)

        self.game = Snek()

        # Choose the agent's location uniformly at random
        # self._agent_location = self.np_random.integers(0, self.size, size=2, dtype=int)

        # We will sample the target's location randomly until it does not coincide with the agent's location
        # self._target_location = self._agent_location
        # while np.array_equal(self._target_location, self._agent_location):
        #     self._target_location = self.np_random.integers(
        #         0, self.size, size=2, dtype=int
        #     )

        observation = self._get_obs()
        info = self._get_info()

        if self.render_mode == "human":
            # print("render game...")
            self.game.render()
            # self._render_frame()

        return observation, info
