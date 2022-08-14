import * as vscode from "vscode";
import { YouTubeSearchWebView } from './webviews/YouTubeSearchWebView';
export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(vscode.window.registerWebviewViewProvider("youtube-in-vscode.youtubeSearchWebView", new YouTubeSearchWebView(context.extensionUri)));
}