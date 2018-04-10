const { events } = require("brigadier")

events.on("push", () => {
  console.log("==> Handling an 'exec' event....")
})