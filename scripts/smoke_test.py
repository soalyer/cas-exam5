#!/usr/bin/env python3
"""Dependency-free local serving smoke test for the app shell and its assets."""

from html.parser import HTMLParser
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from threading import Thread
from urllib.parse import urljoin, urlparse
from urllib.request import urlopen


ROOT = Path(__file__).resolve().parent.parent
REQUIRED_IDS = {
    "sidebar",
    "main-content",
    "sidebar-toggle",
    "export-data",
    "import-data",
    "figure-dialog",
    "toast",
}


class ShellParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids = set()
        self.assets = []

    def handle_starttag(self, tag, attrs):
        attributes = dict(attrs)
        if "id" in attributes:
            self.ids.add(attributes["id"])
        reference = attributes.get("src") if tag == "script" else attributes.get("href") if tag == "link" else None
        if reference and not urlparse(reference).scheme and not reference.startswith(("#", "//")):
            self.assets.append(reference)


class QuietHandler(SimpleHTTPRequestHandler):
    def log_message(self, _format, *_args):
        pass


def fetch(url):
    with urlopen(url, timeout=5) as response:
        body = response.read()
        if response.status != 200:
            raise AssertionError(f"{url} returned HTTP {response.status}")
        if not body:
            raise AssertionError(f"{url} returned an empty response")
        return body


def main():
    handler = lambda *args, **kwargs: QuietHandler(*args, directory=str(ROOT), **kwargs)
    server = ThreadingHTTPServer(("127.0.0.1", 0), handler)
    thread = Thread(target=server.serve_forever, daemon=True)
    thread.start()
    base_url = f"http://127.0.0.1:{server.server_port}/"

    try:
        html = fetch(base_url).decode("utf-8")
        parser = ShellParser()
        parser.feed(html)
        missing_ids = REQUIRED_IDS - parser.ids
        if missing_ids:
            raise AssertionError(f"App shell is missing required IDs: {', '.join(sorted(missing_ids))}")
        if not parser.assets:
            raise AssertionError("App shell references no local assets")
        for asset in parser.assets:
            fetch(urljoin(base_url, asset))
        print(f"Smoke test passed: app shell and {len(parser.assets)} local assets served successfully.")
    finally:
        server.shutdown()
        server.server_close()
        thread.join(timeout=2)


if __name__ == "__main__":
    main()
