import * as vscode from "vscode";
import { TreeItemCollapsibleState } from "vscode";

import * as ffi from './rust/wasm_demo';
import { booted } from './rust/wasm_demo_wasm';

export interface MyTreeNode {
    id: number;
    name: string;
}

export class MyTreeProvider implements vscode.TreeDataProvider<MyTreeNode> {
    private _onDidChangeTreeData: vscode.EventEmitter<MyTreeNode> = new vscode.EventEmitter<MyTreeNode>();
    public readonly onDidChangeTreeData: vscode.Event<MyTreeNode> = this._onDidChangeTreeData.event;

    private tree: MyTreeNode[] = [];

    constructor(private context: vscode.ExtensionContext) {
        // booted.then(() => {
        //     this._onDidChangeTreeData.fire();
        // });
    }

    getTreeItem(element: MyTreeNode): vscode.TreeItem | Thenable<vscode.TreeItem> {
        return new vscode.TreeItem(element.name);
    }

    async getChildren(element?: MyTreeNode): Promise<MyTreeNode[]> {
        let bt = await booted;
        if (element == null) {
            let arr: number[] = ffi.range(42);
            return arr.map(i => ({ id: i, name: `Item ${i}` }));
        }
        return [];
    }
}
