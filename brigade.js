const { events } = require("brigadier")

events.on("push", () => {
  console.log("==> handling an 'exec' event")
})