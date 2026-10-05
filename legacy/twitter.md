# Twitter Media Aggregator

A Flask web app that fetches and displays a user's recent posts from the X (Twitter) API v2 in a clean, card-based feed — no login required, just enter a username.

## Features

- **Username lookup** — resolves an X/Twitter handle to a user ID via the API.
- **Recent posts feed** — pulls up to 35 recent tweets, including text and timestamp.
- **Bearer token rotation** — cycles through multiple API bearer tokens so a single rate-limited token doesn't block the app.
- **Rate-limit handling** — detects HTTP 429 responses, waits for the token's reset window, and automatically retries with exponential backoff.
- **Responsive UI** — Bootstrap-based, mobile-friendly tweet cards with a loading spinner and inline error messages.

## Tech Stack

- **Backend:** Python, Flask
- **HTTP client:** `requests`
- **Frontend:** HTML, CSS, vanilla JavaScript (Bootstrap 4 for styling)
- **API:** X (Twitter) API v2

## Project Structure

```
social-media-aggregator/
├── app.py                  # Flask app: routes, token rotation, tweet fetching
├── templates/
│   └── index.html          # Search UI + tweet feed rendering
├── docs/
│   ├── Project_Report.pdf
│   └── Presentation.pdf
├── requirements.txt
└── .gitignore
```

## Setup

1. **Clone the repo**
   ```bash
   git clone https://github.com/Susmitha967/social-media-aggregator.git
   cd social-media-aggregator
   ```

2. **Create a virtual environment and install dependencies**
   ```bash
   python -m venv venv
   source venv/bin/activate   # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   ```

3. **Add your X (Twitter) API bearer token(s)**

   Open `app.py` and add one or more bearer tokens to the `BEARER_TOKENS` list:
   ```python
   BEARER_TOKENS = [
       "YOUR_BEARER_TOKEN_HERE",
   ]
   ```
   Adding multiple tokens (from different developer apps/projects) enables automatic rotation when a token gets rate-limited.

4. **Run the app**
   ```bash
   python app.py
   ```
   The app will be available at `http://127.0.0.1:5000`.

## Usage

1. Open the app in your browser.
2. Enter an X (Twitter) username (without the `@`).
3. Click **Search** to load their recent posts as a scrollable feed.

## How It Works

1. `get_user_id()` resolves the entered username to a numeric user ID using the `/2/users/by/username/{username}` endpoint.
2. `fetch_tweets_with_retry()` calls `/2/users/{id}/tweets` to retrieve recent posts:
   - On success (`200`), it returns the tweet data.
   - On rate limit (`429`), it switches to the next available bearer token and waits out the reset window if all tokens are exhausted.
   - On other errors, it returns an error response to the frontend.
3. The Flask `/get_tweets` route returns a simplified JSON payload (id, text, timestamp, username) which the frontend renders as tweet cards.

## Known Limitations

- Requires valid X API v2 bearer token(s) with access to the relevant endpoints; the free tier's rate limits are strict, which is the main reason for the token-rotation logic.
- Only text and timestamp are guaranteed from the current API request; fields like profile image, media, and like/reply counts referenced in the UI depend on additional API fields/expansions not currently requested via `tweet.fields`.
- No caching layer, so repeated searches for the same user re-hit the API.

## Documentation

See `docs/Project_Report.pdf` and `docs/Presentation.pdf` for the full project write-up and presentation slides.

## License

This project is intended for educational purposes.