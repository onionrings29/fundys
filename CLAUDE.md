# Fundy's — Project Notes

## Project Structure

- `site/` — Next.js + Tailwind CSS website (single-page showcase)
- `contents/` — Brand materials, photos, docs
- `docs/` — Business owner questionnaire answers, branding doc

## Stack

- Next.js (App Router) + Tailwind CSS v4
- Fonts: Pacifico (display) + Lora (body)
- Google Fonts via `next/font`

## Deployment

After every commit/push, deploy to the server:

```
ssh fundys@10.129.20.73
# password: awantasayo
```

Or via sshpass (non-interactive):

```bash
sshpass -p 'awantasayo' ssh -o StrictHostKeyChecking=no fundys@10.129.20.73 \
  "cd /home/fundys/fundys-content && git pull && cd site && npm run build && sudo systemctl restart fundys"
```

Note: `fundys` user has NOPASSWD sudo for `systemctl restart fundys` only (configured in `/etc/sudoers.d/fundys`).

**Server details:**
- Host: `10.129.20.73` (CT 147 on homelab01)
- User: `fundys`
- Password: `awantasayo`
- App path: `/home/fundys/fundys-content/site`
- Service: `fundys.service` (systemd)
- Port: `3000`
- Proxied by: NPM Plus at `10.129.50.200`

**Deploy steps:**
1. `git pull` in `/home/fundys/fundys-content`
2. `npm run build` in `site/`
3. `sudo systemctl restart fundys`
