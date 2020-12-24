import { ipcMain, IpcMainEvent } from "electron";
import log from "loglevel";
import { BaseChannel } from "./base-channel";
import { Block } from "../../models";
import { IpcRequest } from "../../shared/IpcRequest";

log.setLevel("info");

export class MediaChannel extends BaseChannel {
    public handleRequest(): void {
        ipcMain.on(this.channelName!, (event: IpcMainEvent, command: string, args: IpcRequest) => {
            switch (command) {
                case "fullsnip":
                case "handleVideo":
                    this[command](event, args);
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

    private async fullsnip(event: IpcMainEvent, args: IpcRequest): Promise<void> {
        const block = await Block.create({
            title: args.name,
            type: "image",
            bookmark: false,
            collectionId: parseInt(args.current),
        });

        await block.createFile({
            name: args.name,
            path: args.path,
        });
    }

    private handleVideo(event: IpcMainEvent, args: IpcRequest): void {
        log.info(args);
        const status = args.status;
        // if (status === false) VideoRecorder.start();
        // else if (status === true) VideoRecorder.stop();
    }
}
