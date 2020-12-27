import { app, BrowserWindow } from "electron";
import { BaseWindow } from "./base-window";
import * as path from "path";
import isDev from "electron-is-dev";
import { Factory } from "../ipc-manager/usage/factory";
import { UsageChannel } from "../ipc-manager/usage/usage-channel";

export class HomeWindow extends BaseWindow {
    static win?: BrowserWindow | null;

    public createWindow(): void {
        HomeWindow.win = new BrowserWindow({
            width: 1980,
            height: 1620,
            webPreferences: {
                enableRemoteModule: true,
                contextIsolation: true,
                nodeIntegration: false,
                preload: path.resolve(__dirname, "preload.js"),
            },
        });
        HomeWindow.win.webContents.openDevTools();
        HomeWindow.win.loadURL(
            isDev ? "http://localhost:3000" : `file://${path.join(__dirname, "../build/index.html")}`
        );
        HomeWindow.win.once("ready-to-show", () => {
            if (HomeWindow.win) {
                HomeWindow.win.show();
            }
        });
        HomeWindow.win.on("closed", () => {
            app.quit();
        });
    }

    public register(): void {
        if (HomeWindow.win) {
            new UsageChannel(new Factory()).setHomeFactory().map((obj) => {
                obj.handleRequest();
                obj.handleRequestOnce();
                return obj;
            });
        }
    }

    public closeWindow(): void {
        HomeWindow.win?.close();
    }

    public static sendMessage(response: string, data: string): void {
        HomeWindow.win?.webContents.send(response, data);
    }
}
