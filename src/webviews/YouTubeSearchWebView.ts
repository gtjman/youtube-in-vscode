import * as vscode from "vscode";

export class YouTubeSearchWebView implements vscode.WebviewViewProvider {
    constructor(private readonly _extensionUri: vscode.Uri) { }

    public resolveWebviewView(webviewView: vscode.WebviewView, context: vscode.WebviewViewResolveContext, _token: vscode.CancellationToken) {
        webviewView.webview.options = {
            enableScripts: true,
            localResourceRoots: [this._extensionUri]
        };
        webviewView.webview.html = this._getHtmlForWebview(webviewView.webview);
    }

    private _getHtmlForWebview(webview: vscode.Webview) {
        const stylesFile = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, "media", "styles.css"));
        const scriptFile = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, "media", "script.js"));

        return `<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">
				<meta img-src ${webview.cspSource} https:;  style-src ${webview.cspSource};" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<link href="${stylesFile}" rel="stylesheet">
				<title>YouTube Search</title>
			</head>
			<body>
			<div class="search-box">
        <input type="text" class="search-bar" placeholder="search" id="searchInput">
        <button class="search-btn" id="searchButton"><svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g><path d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z"></path></g></svg></button>
    </div>

<div id="results">
 </div>
      			<script src="${scriptFile}" />
				</body>
			</html>`;
    }
}