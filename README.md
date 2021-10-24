## Installation

1. Install [docker](https://docs.docker.com/get-docker/).
2. Run this command.

```bash
docker run -it -v $PWD:/e2e -w /e2e cypress/included:8.6.0
```
3. You can check a video of the test execution in `/cypress/videos`.

OR

1. Install [node](https://nodejs.org/en/download/).
2. Run `npm install`. 
3. Run this command.

```bash
$(npm bin)/cypress open
```
4. In the opened window click on `imdb_spec.js`.
