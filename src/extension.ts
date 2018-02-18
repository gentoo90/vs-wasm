'use strict';

import * as path from "path";
import * as fs from "fs";
import * as vscode from 'vscode';
import { MyTreeProvider } from './treeProvider';

export function activate(context: vscode.ExtensionContext) {
    console.log('Congratulations, your extension "vs-wasm" is now active!');
    const myTreeProvider = new MyTreeProvider(context);
    vscode.window.registerTreeDataProvider("myTreeView", myTreeProvider);
}

export function deactivate() {
}
