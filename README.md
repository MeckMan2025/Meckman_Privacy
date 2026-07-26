# Meckman Privacy

Privacy policies for applications by Andrew Meckley, hosted on GitHub Pages.

Live at https://meckman2025.github.io/Meckman_Privacy/

## Structure

| Path | Purpose |
|---|---|
| `index.html` | The general policy. Part One is commitments true of every app; Part Two lists each app and what it accesses. |
| `apps/<app>.html` | A standalone policy for one app, complete on its own so it can be submitted to an app store or API provider by itself. |
| `apps/_template.html` | Starting point for a new app. |
| `style.css` | Shared styling. Light and dark. |

## Which URL to submit where

Give a reviewer the **app-specific page**, because a reviewer wants a policy that names
the app they are looking at:

- Calc by Meckman: `https://meckman2025.github.io/Meckman_Privacy/apps/calc.html`
- Meckley Health Tracker: `https://meckman2025.github.io/Meckman_Privacy/apps/health-tracker.html`

The root URL still works and now covers every app, so any listing already pointing at it
stays valid. Nothing needs to be changed in App Store Connect unless you want to.

## Adding a new app

1. `cp apps/_template.html apps/your-app.html` and fill in every placeholder.
2. Add the app to both places in `index.html`: the `applist` near the top of Part Two,
   and its own `<h3>` section below.
3. Update the effective date on any page you changed.
4. Commit and push. GitHub Pages redeploys within a minute or two.

## Rules for writing these

- **Say what is actually true.** If an app collects nothing, say so plainly; that is the
  strongest possible statement. Never describe an app as collecting less than it does.
- **Name every third party** that receives data, and say what each one gets.
- **Keep the app-specific page self-contained.** A reviewer should not have to follow a
  link to understand what the app does with data.
- **Re-check the policy when the app changes.** A policy that was accurate at launch and
  is not accurate now is worse than no policy, because it is a false statement.
