/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/prop-types */
import React, { Component } from "react";
import { v4 as uuid } from "uuid";
import appRuntime from "./appRuntime";
const StoreContext = React.createContext(null);
const StoreUpdateContext = React.createContext(null);

/*
 * [Please notice]
 * update data without mutating state: "using spread operator"
 * if you don't follow this rule, TimLo will kill it!
 * if you don't know spread operator: check this out
 * https://codeburst.io/javascript-the-spread-operator-a867a71668ca
 */

class StoreProvider extends Component {
    state = {
        data: {
            folders: [],
            folderIds: [],
            collections: [],
            recentUpdated: [],
        },
        changed: false,
    };

    // Load the user's content
    async componentDidMount() {
        // const data = await appRuntime.invoke("home-channel", "getAllData", "");
        // this.loadData(JSON.parse(data));
        // componentDidMount() {
        appRuntime.send("home-channel", "getHomeData");
        appRuntime.subscribeOnce("loadData", (data) => {
            const receiveData = {};
            receiveData.folders = JSON.parse(data.data);
            receiveData.orderCollections = JSON.parse(data.data2);
            this.loadData(receiveData);
        });
    }

    async componentDidUpdate() {
        if (this.state.changed) {
            // const data = await appRuntime.invoke("home-channel", "getAllData", "");
            // this.loadData(JSON.parse(data));
            // this.setState({ changed: false });
            appRuntime.send("home-channel", "getHomeData", "");
            appRuntime.subscribeOnce("loadData", (data) => {
                const receiveData = {};
                receiveData.folders = JSON.parse(data.data);
                receiveData.orderCollections = JSON.parse(data.data2);
                this.loadData(receiveData);
                this.setState({ changed: false });
            });
        }
    }

    loadData = (unprocessedData) => {
        const initState = {
            folders: [],
            folderIds: [],
            collections: [],
            recentUpdated: [],
        };

        /**Add Part */
        const { folders, orderCollections } = unprocessedData;
        folders.map((folder) => {
            initState.folderIds.push(folder.id);
            initState.folders.push(folder);
            folder.cs = [];
            return folder.collections.map((collection) => {
                folder["cs"].push(collection.id);
                initState.collections.push(collection);
                delete folder.collections;
                return folder;
            });
        });
        initState.recentUpdated = this.limitQueue(orderCollections);
        initState.collections = this.convertArrayToObject(initState.collections, "id");
        initState.folders = this.convertArrayToObject(initState.folders, "id");
        let data = initState;
        this.setState({ data });
        /**Add Part */

        // unprocessedData.map((folder) => {
        //     initState.folderIds.push(folder.id);
        //     initState.folders.push(folder);
        //     folder.cs = [];
        //     return folder.collections.map((collection) => {
        //         folder["cs"].push(collection.id);
        //         initState.collections.push(collection);
        //         delete folder.collections;
        //         return folder;
        //     });
        // });
        // initState.collections = this.convertArrayToObject(initState.collections, "id");
        // initState.folders = this.convertArrayToObject(initState.folders, "id");

        // let data = initState;
        // this.setState({ data });
    };

    /** Util */
    convertArrayToObject = (array, key) => {
        const initialValue = {};
        return array.reduce((obj, item) => {
            return {
                ...obj,
                [item[key]]: item,
            };
        }, initialValue);
    };

    limitQueue = (collections) => {
        let queue = [];
        // If limitedQueue size exceeds 4, limitedQueue should remove the first item;
        queue.push = function () {
            if (this.length >= 8) {
                this.shift();
            }
            return Array.prototype.push.apply(this, arguments);
        };
        collections.map((c) => {
            queue.push(c);
            return c;
        });
        return queue;
    };

    /** Operation */
    getFolder = (id) => {
        const { data } = this.state;
        return data.folders[id];
    };

    /**
     *
     * @param {string} id
     */
    getCollection = (id) => {
        const { data } = this.state;
        return data.collections[id];
    };

    getCollections = (collectionIds) => {
        const { data } = this.state;
        const collections = [];
        if (collectionIds) {
            collectionIds.forEach((collectionsId) => {
                collections.push(data.collections[collectionsId]);
            });
        }
        return collections;
    };

    /**
     *
     * @param {string} title
     * @param {string} content
     * @param {number} collectionId
     */
    addBlock = (title, content, collectionId) => {
        const { data } = this.state;
        const newBlockId = uuid();
        const newBlock = {
            id: newBlockId,
            title,
            content,
        };
        const collection = data.collections[collectionId];
        collection.blocks = [...collection.blocks, newBlock];
        const newState = {
            ...data,
            collections: {
                ...data.collections,
                [collectionId]: collection,
            },
        };
        this.setState({
            data: newState,
        });
    };

    /**
     *
     * @param {string} title
     */
    addCollection = async (title, id) => {
        // const { data } = this.state;
        const folderId = parseInt(id);
        const newCollection = {
            title,
            folderId,
        };

        await appRuntime.invoke("home-channel", "addCollection", newCollection);
        // appRuntime.subscribeOnce("updateData");
        this.setState({ changed: true });

        // appRuntime.subscribeOnce("updateData", (d) => {
        //     d = JSON.parse(d);
        //     d.blocks = [];

        //     const newState = {
        //         ...data,
        //         collections: {
        //             ...data.collections,
        //             [d.id]: d,
        //         },
        //     };

        //     this.setState({
        //         data: newState,
        //     });
        // });
    };

    /**
     *
     * @param {number} collectionId
     * @param {number} index
     */
    deleteBlock = (collectionId, index) => {
        const { data } = this.state;
        const collection = data.collections[collectionId];
        collection.blocks = [...collection.blocks.slice(0, index), ...collection.blocks.slice(index + 1)];
        const newState = {
            ...data,
            collections: {
                ...data.collections,
                [collectionId]: collection,
            },
        };
        this.setState({
            data: newState,
        });
    };

    /**
     *
     * @param {string} title
     * @param {number} collectionId
     */
    updateCollectionTitle = (title, collectionId) => {
        appRuntime.send("home-channel", "updateCollection", { title, collectionId });
        appRuntime.subscribeOnce("updateData");
        this.setState({ changed: true });
    };

    deleteCollection = async (collectionId) => {
        // const { data } = this.state;
        // let collections = { ...data.collections };
        // let folders = { ...data.folders };

        await appRuntime.invoke("home-channel", "deleteCollection", collectionId);
        // appRuntime.subscribeOnce("updateData");
        this.setState({ changed: true });
        // Object.values(folders).map((folder) => {
        //     if (folder.cs.includes(targetCId)) {
        //         let index = folder.cs.indexOf(collectionId);
        //         folder.cs.splice(index, 1);
        //     }
        //     return folders;
        // });
        // Object.keys(collections).map((cId) => {
        //     if (parseInt(cId) === targetCId) {
        //         delete collections[collectionId];
        //     }
        //     return collections;
        // });
        // const newState = {
        //     ...data,
        //     collections,
        //     folders
        // };
        // this.setState({
        //     data: newState,
        // });
    };

    /**
     *
     * @param {string} title
     * @param {number} collectionId
     * @param {number} index
     */
    updateBlockTitle = (title, collectionId, index) => {
        const { data } = this.state;
        const collection = data.collections[collectionId];
        const blocks = collection.blocks;
        const block = blocks[index];
        block.title = title;
        const newState = {
            ...data,
            collections: {
                ...data.collections,
                [collectionId]: {
                    ...collection,
                    blocks,
                },
            },
        };
        this.setState({
            data: newState,
        });
    };

    addFolder = async (folderName) => {
        // const { data } = this.state;
        const newFolder = {
            name: folderName,
            cs: [],
        };

        await appRuntime.invoke("home-channel", "addFolder", newFolder);
        this.setState({ changed: true });
        // appRuntime.subscribeOnce("updateData", () => {
        // d = JSON.parse(d);
        // d.cs = [];
        // const newState = {
        //     ...data,
        //     folderIds: [...data.folderIds, d.id],
        //     folders: {
        //         ...data.folders,
        //         [d.id]: d,
        //     },
        // };

        // this.setState({
        //     data: newState,
        // });
        // });
    };

    deletFolder = (folderId) => {
        const { data } = this.state;
        const newState = {
            collections: { ...data.collections },
            folderIds: [...data.folderIds],
            folders: { ...data.folders },
        };
        newState.folderIds.map((id, index) => {
            if (id === folderId) {
                newState.folderIds.splice(index, 1);
            }
            return newState;
        });
        Object.values(newState.folders).map((folder) => {
            if (folder.id === folderId) {
                delete newState.folders[folderId];
                folder.cs.map((collection) => {
                    delete newState.collections[collection];
                    return folder;
                });
            }
            return newState;
        });

        this.setState({
            data: newState,
        });
    };

    render() {
        return (
            <>
                {this.state ? (
                    <StoreContext.Provider
                        value={{
                            ...this.state,
                        }}
                    >
                        <StoreUpdateContext.Provider
                            value={{
                                addBlock: this.addBlock,
                                deleteBlock: this.deleteBlock,
                                updateBlockTitle: this.updateBlockTitle,
                                addFolder: this.addFolder,
                                getFolder: this.getFolder,
                                deleteFolder: this.deletFolder,
                                addCollection: this.addCollection,
                                getCollection: this.getCollection,
                                getCollections: this.getCollections,
                                updateCollectionTitle: this.updateCollectionTitle,
                                deleteCollection: this.deleteCollection,
                            }}
                        >
                            {this.props.children}
                        </StoreUpdateContext.Provider>
                    </StoreContext.Provider>
                ) : (
                        <h1>Loading</h1>
                    )}
            </>
        );
    }
}

// const StoreConsumer = StoreContext.Consumer

export { StoreProvider, StoreUpdateContext, StoreContext };
