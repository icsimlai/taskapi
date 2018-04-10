const { events } = require("brigadier")

events.on("exec", () => {
  console.log("==> I'm handling an 'exec' event")
})

events.on("push", () => {
  console.log(" **** I'm a GitHub 'push' handler")
})

events.on("image_push", (e, p) => {
  var docker = JSON.parse(e.payload)

  // Currently the only action sent is 'push', but this makes your script
  // safe for the future.
  if (docker.action != "push") {
    console.log(`Ignoring Action: ${docker.action}`)
    return
  }

  // Here's how you get the tag.
  var version = docker.target.tag || "latest"
  console.log(`Image Version: ${version}`)
  console.log(docker)
})