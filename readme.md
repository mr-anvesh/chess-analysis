# Chess Game Analysis Tool

Generate classifications for your Chess moves, for free.
<br><br>
Enter a game by its PGN or pick a game from your Chess.com / Lichess.org account and have it analysed so that you can see where your mistakes and brilliancies are.

**ANNOUNCEMENT**<br>
This project is currently closed to further contributions - we are working on rebuilding the website from the ground up :)

## Running locally
### Prerequisites
- Node.js 20.x runtime or later.
- TypeScript package installed globally.

### Starting application
- Download the source code using `git clone` or download as ZIP.
- Open the root directory of the project in a terminal.
- Run `npm i` to install all of the necessary dependencies.
- Create a file called `.env` in the root directory of the project.
- Choose a port for the webserver by adding `PORT=<some port>` to the file.
- If you want to use a CAPTCHA:
    - Add your client secret as `RECAPTCHA_SECRET=<secret>` to the .env file
    - Open `src/public/pages/report/index.html`, find `data-sitekey` and replace the value with your reCAPTCHA public site key
- Run `npm start` to compile TypeScript and start the webserver.

### NPM Scripts
- `npm start` - Compiles TypeScript and starts the webserver.
- `npm run build` - Compiles TypeScript.
- `npm run test` - Generates reports from some sample evaluations for classification testing at `src/test/reports`.

## Running in Docker
### Prerequisites
- Docker installed on the server

### Build a Docker image
- Download the source code using `git clone` or download as ZIP.
- Open the root directory of the project in a terminal.
- Create a file called `.env` in the root directory of the project.
- If you want to use a CAPTCHA:
    - Add your client secret as `RECAPTCHA_SECRET=<secret>` to the .env file
    - Open `src/public/pages/report/index.html`, find `data-sitekey` and replace the value with your reCAPTCHA public site key
- Run `sudo docker build . -t chess-analysis` to build the image

### Start a Docker container with the chess-analysis image
- Run `sudo docker run -d -P chess-analysis`
- If you wish to choose the port instead of Docker choosing one for you, replace `-P` with `-p <port>:80`

## Support the Project
If you find this tool useful and would like to support its development, any contributions are greatly appreciated ❤️