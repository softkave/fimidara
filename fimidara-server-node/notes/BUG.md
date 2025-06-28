## Next.js Client

The long-term goal is to migrate these issues to ChoreBuddy.

- Prevent modal from closing when clicking outside if it's loading.
- "Toggle all" should select all permissions; unchecking any should deselect "toggle all".
- On error pages, only display errors marked as public. Create error pages for each section (e.g., public/logged-in). Report errors to Sentry or logs, and allow page recovery from errors.
- Fix error in the assign permissions modal.
- Waitlisted user message is not centered—ensure all content is both horizontally and vertically centered.
- Loading indicator and "nothing found" message are rendered together.
- Opening permissions for a folder initially shows no permission groups.
- Server errors are not displayed in fields.
- Input outline is truncated.
- Server error occurs when uploading large files; upload does not stop on error.
- Error page/component should only show public errors, defaulting to a generic message otherwise.
- Infinite redirect loop.
- OAuth sign-in is not working.

## CLI

- Close file descriptors properly.

## Server

- Ensure creating folders/files with presigned paths succeeds.
- When running locally in dev, downloaded files from multipart upload differ from the originals.

## JS SDK

- Abort upload if any part fails.
