import { app, ipcMain, IpcMainEvent, screen } from "electron";
import log from "loglevel";
import { BaseChannel } from "./base-channel";

log.setLevel("info");

export class SystemChannel extends BaseChannel {
    public handleRequest(): void {
        ipcMain.on(this.channelName!, (event: IpcMainEvent, command: string, args: any) => {
            switch (command) {
                case "getScreenShot":
                    this[command](event);
                    break;
                default:
                    log.warn("There is no command in thic channel");
                    break;
            }
        });
    }

    public handleRequestOnce(): void {
        ipcMain.once(this.channelName!, (event: IpcMainEvent, command: string, args: any) => {
            // Should add something
        });
    }

    private getScreenShot(event: IpcMainEvent): void {
        const userPath = this.getUserPath();
        const maxDimension = this.getScreenshotSize();
        const screenshotInfo = {
            ...maxDimension,
            userPath,
        };
        event.reply(this.channelName, screenshotInfo);
    }

    private getUserPath(): string {
        const userPath = app.getPath("userData");
        return userPath;
    }

    private getScreenshotSize(): Record<number, number> {
        const screenSize = screen.getPrimaryDisplay().workAreaSize;
        const maxDimension = Math.max(screenSize.width, screenSize.height);
        const screenshotSize = {
            width: maxDimension,
            height: maxDimension,
        };
        return screenshotSize;
    }
}
