## WindiCss + Elderjs
It currently does not work yet, components that should be hydrated on client are not.

It was created to investigate this issue.

### Reproduction
If you start the project as is, the `ColorfulTitle` should be correctly rendered.
But the clock won't tick.

If you comment out the windicss plugin being add on `svelte.config.js` it will work again, but with no tailwind style.

### Start Project:

```bash
npm start # or npm run dev for dev enviro.
```

Navigate to [localhost:3000](http://localhost:3000). You should see your app running.
