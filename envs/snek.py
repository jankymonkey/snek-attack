import numpy as np
import pygame


class Snek:
    cell_size = 50

    def __init__(self):
        pygame.init()
        self.size = np.array([11, 19])

        self.snek = np.array([5, 10])

        self.food = np.array([1, 1])

        self.img = pygame.transform.scale(
            pygame.image.load("./images/foodie.png"), (self.cell_size, self.cell_size)
        )

    def update(self, direction):
        self.snek = np.clip(self.snek + direction, 0, self.size - 1)

    def render(self):
        grid = np.zeros(self.size)
        grid[self.snek[0], self.snek[1]] = 1
        grid[self.food[0], self.food[1]] = 2

        grid = np.fliplr(np.flip(np.transpose(grid)))

        blue = (0, 0, 255)
        red = (255, 0, 0)
        green = (0, 255, 0)

        screen = pygame.display.set_mode(
            (grid.shape[1] * self.cell_size, grid.shape[0] * self.cell_size)
        )

        # Render the array as a grid
        for i in range(grid.shape[0]):
            for j in range(grid.shape[1]):
                color = blue
                if grid[i, j] == 1:
                    color = red
                elif grid[i, j] == 2:
                    screen.blit(self.img, (j * self.cell_size, i * self.cell_size))
                    continue
                pygame.draw.rect(
                    screen,
                    color,
                    (
                        j * self.cell_size,
                        i * self.cell_size,
                        self.cell_size,
                        self.cell_size,
                    ),
                )

        pygame.display.flip()


# jw = Snek()
# jw.update(np.array([0, 1]))
# jw.update(np.array([0, 1]))
# jw.update(np.array([0, 1]))
# jw.update(np.array([0, 1]))
# jw.update(np.array([0, 1]))
# jw.render()
