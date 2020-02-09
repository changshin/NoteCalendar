
## Angular View notes Example Project

This is a Angular example project to view notes with their due date on a calenda.  It is a simple demo project that has no backend API and database. Fake notes are created and saved in local storage when you start it.

## Installation

1. Check node and npm version.

```bash
node --version
npm --version
```
If you didn't find node and npm, install node and npm in termial.

`https://nodejs.org/en/download/`


2. Install @angular/cli in terminal

`npm install - g @angular/cli`

 https://cli.angular.io/

3. Download the project or git clone

```bash
git clone https://github.com/changshin/NoteCalendar
cd NoteCalendar
npm install
```

4. Build commands

```bash
npm run build # build to a directory
npm run start # continously build, as a server
```

5. After running the `npm run start` command, you will be given a localhost URL that can be visited in a browser.

6. You can use `ng serve --aot --port 4200` instead of `npm run start`. You can chance the --port 4200 to --port 4201 or other port#.