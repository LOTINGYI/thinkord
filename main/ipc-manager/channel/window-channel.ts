import { ipcMain, IpcMainEvent } from "electron";
import log from "loglevel";
import { BaseChannel } from "./base-channel";
import { ControlWindow } from "../../windows/control-window";
import { IpcRequest } from "../../shared/IpcRequest";
import { HomeWindow } from "../../windows/home-window";
interface BrowserWindows {
    [key: string]: ControlWindow | undefined;
}

export class WindowChannel extends BaseChannel {
    wins: BrowserWindows;

    constructor(props: string) {
        super(props);
        this.wins = {};
    }

    public handleRequest(): void {
        ipcMain.on(this.channelName!, (event: IpcMainEvent, command: string, args: IpcRequest) => {
            switch (command) {
                case "createControlBar":
                case "closeControlBar":
                case "captureSignal":
                    this[command](event, args);
                    break;
                default:
                    log.warn("There is no command in this channel");
                    break;
            }
        });
    }

    public handleRequestOnce(): void {
        ipcMain.once(this.channelName!, (event: IpcMainEvent, command: string, args: IpcRequest) => {
            // Should add something
        });
    }

    /** Start operation */
    public createControlBar(event: IpcMainEvent, args: IpcRequest): void {
        if (!this.wins.controlWindow) {
            this.wins.controlWindow = new ControlWindow();
            this.wins.controlWindow.createWindow();
            this.wins.controlWindow.register();
        } else {
            // Transfer information to different frame
            ControlWindow.sendMessage("changed", args.id);
        }
    }

    public closeControlBar(): void {
        if (this.wins.controlWindow) {
            this.wins.controlWindow.closeWindow();
            this.deleteRequest("test-channel");
            this.deleteRequest("system-channel");
            this.wins.controlWindow = undefined;
        }
    }

    public captureSignal(event: IpcMainEvent, args: IpcRequest): void {
        // Transfer information to different frame
        HomeWindow.sendMessage("capture", "hello");
    }
}
