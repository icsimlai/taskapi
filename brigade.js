const { events } = require("brigadier")

events.on("exec", () => {
  console.log("==> I'm handling an 'exec' event")
})

events.on("push", () => {
  console.log(" **** I'm a GitHub 'push' handler")
})

events.on("image_push", (e, p) => {
  console.log(" **** I'm Docker 'image_push' handler")
  var docker = JSON.parse(e.payload)
  // Here's how you get the tag.
  var version = docker.target.tag || "latest"
  console.log("Docker Image version: ")
  console.log(`Image Version: ${version}`)
  console.log(docker)  // Here's how you get the tag.
  var version = docker.target.tag || "latest"
  console.log("Docker Image version: ")
  console.log(`Image Version: ${version}`)
  console.log(docker)
  // Currently the only action sent is 'push', but this makes your script
  // safe for the future.
  if (docker.action != "image_push") {
    console.log(`Ignoring Action: ${docker.action}`)
    return
  }
})